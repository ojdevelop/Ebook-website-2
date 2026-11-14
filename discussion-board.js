(() => {
  const config = window.DISCUSSION_CONFIG;
  const pageSize = 12;
  const categoryLabels = {
    "current-book": "Current Book",
    general: "General Conversation",
    "reading-tips": "Reading Tips"
  };
  const elements = {
    authForm: document.getElementById("member-auth-form"),
    authTitle: document.getElementById("member-auth-title"),
    authDescription: document.getElementById("member-auth-description"),
    authMode: document.getElementById("auth-mode"),
    authName: document.getElementById("member-name"),
    authEmail: document.getElementById("member-email"),
    authPassword: document.getElementById("member-password"),
    authStatus: document.getElementById("member-auth-status"),
    authPanel: document.getElementById("member-access"),
    memberBar: document.getElementById("member-bar"),
    memberName: document.getElementById("signed-in-name"),
    signOut: document.getElementById("member-sign-out"),
    startButton: document.getElementById("discussion-start"),
    postPanel: document.getElementById("discussion-form-panel"),
    postForm: document.getElementById("discussion-post-form"),
    postStatus: document.getElementById("discussion-post-status"),
    list: document.getElementById("discussion-list"),
    boardStatus: document.getElementById("discussion-board-status"),
    loadMore: document.getElementById("load-discussions")
  };
  let client;
  let session = null;
  let authMode = "signup";
  let activeCategory = "all";
  let renderedCount = 0;
  let totalCount = 0;
  let loadSequence = 0;
  let channel;

  function setStatus(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("is-error", isError);
  }

  function showSetupRequired(message) {
    setStatus(elements.boardStatus, message, true);
    const guide = document.createElement("a");
    guide.href = "supabase/SETUP.md";
    guide.textContent = "Open the Supabase setup guide";
    guide.className = "discussion-setup-link";
    elements.boardStatus.append(" ", guide);
  }

  function formatTimestamp(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  }

  function updateAuthDisplay() {
    const isSignedIn = Boolean(session?.user);
    elements.authPanel.hidden = !client;
    elements.authForm.hidden = isSignedIn || !client;
    elements.authMode.hidden = isSignedIn || !client;
    elements.memberBar.hidden = !isSignedIn;
    elements.memberName.textContent = isSignedIn
      ? session.user.user_metadata?.display_name || session.user.email || "Member"
      : "";
    elements.startButton.disabled = !client;
    elements.startButton.setAttribute("aria-expanded", String(!elements.postPanel.hidden));
  }

  function setAuthMode(mode) {
    authMode = mode;
    const isSignUp = mode === "signup";
    elements.authName.closest("label").hidden = !isSignUp;
    elements.authName.required = isSignUp;
    elements.authPassword.autocomplete = isSignUp ? "new-password" : "current-password";
    elements.authTitle.textContent = isSignUp ? "Join the conversation." : "Welcome back.";
    elements.authDescription.textContent = isSignUp
      ? "Create a member account to start discussions and reply to readers."
      : "Sign in to post a discussion or reply.";
    elements.authForm.querySelector("[type=submit]").textContent = isSignUp ? "Create Account" : "Sign In";
    elements.authMode.textContent = isSignUp ? "Already a member? Sign in" : "New to the book club? Create an account";
    setStatus(elements.authStatus, "");
  }

  function setFilter(category, refresh = true) {
    activeCategory = category;
    document.querySelectorAll(".filter-chip").forEach((button) => {
      const active = button.dataset.category === category;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderedCount = 0;
    if (refresh) loadDiscussions(false);
  }

  function replyMarkup(reply) {
    const author = reply.author?.display_name || "Deleted member";
    const timestamp = formatTimestamp(reply.created_at);
    return `<article class="discussion-reply"><div class="discussion-byline"><strong>${escapeHTML(author)}</strong><time datetime="${escapeHTML(reply.created_at)}">${escapeHTML(timestamp)}</time></div><p>${escapeHTML(reply.body)}</p></article>`;
  }

  function discussionMarkup(discussion) {
    const author = discussion.author?.display_name || "Deleted member";
    const timestamp = formatTimestamp(discussion.created_at);
    const replies = discussion.replies?.[0]?.count || 0;
    const id = escapeHTML(discussion.id);
    return `<article class="discussion-topic" data-discussion-id="${id}" data-topic-category="${escapeHTML(discussion.category)}">
      <p class="eyebrow">${escapeHTML(categoryLabels[discussion.category])}</p>
      <h3>${escapeHTML(discussion.title)}</h3>
      <div class="discussion-byline"><strong>${escapeHTML(author)}</strong><time datetime="${escapeHTML(discussion.created_at)}">${escapeHTML(timestamp)}</time></div>
      <p class="discussion-topic-body">${escapeHTML(discussion.body)}</p>
      <div class="discussion-card-actions"><span class="discussion-reply-count">${replies} ${replies === 1 ? "reply" : "replies"}</span><button class="text-link discussion-open" type="button" data-thread-toggle="${id}" aria-expanded="false">View Discussion</button></div>
      <section class="discussion-thread" data-thread-panel="${id}" aria-label="Replies to ${escapeHTML(discussion.title)}" hidden>
        <div class="discussion-replies" data-replies="${id}"><p class="form-note">Loading replies...</p></div>
      </section>
    </article>`;
  }

  function getOpenDiscussionIds() {
    return [...elements.list.querySelectorAll(".discussion-thread:not([hidden])")]
      .map((thread) => thread.dataset.threadPanel);
  }

  async function loadDiscussions(append = false, openThreadIds = []) {
    if (!client) return;
    const request = ++loadSequence;
    const from = append ? renderedCount : 0;
    if (!append) {
      renderedCount = 0;
      elements.list.replaceChildren();
    }
    elements.loadMore.disabled = true;
    setStatus(elements.boardStatus, "Loading discussions...");

    let query = client
      .from("discussions")
      .select("id, category, title, body, created_at, author:profiles!discussions_author_id_fkey(display_name), replies(count)", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, from + pageSize - 1);
    if (activeCategory !== "all") query = query.eq("category", activeCategory);

    const { data, error, count } = await query;
    if (request !== loadSequence) return;
    elements.loadMore.disabled = false;
    if (error) {
      setStatus(elements.boardStatus, `Couldn't load discussions: ${error.message}`, true);
      return;
    }

    totalCount = count || 0;
    if (data.length) {
      elements.list.insertAdjacentHTML("beforeend", data.map(discussionMarkup).join(""));
      renderedCount += data.length;
      updateAuthDisplay();
      setStatus(elements.boardStatus, `${totalCount} ${totalCount === 1 ? "discussion" : "discussions"}`);
      for (const id of openThreadIds) {
        const panel = elements.list.querySelector(`[data-thread-panel="${CSS.escape(id)}"]`);
        const button = elements.list.querySelector(`[data-thread-toggle="${CSS.escape(id)}"]`);
        if (!panel || !button) continue;
        panel.hidden = false;
        button.textContent = "Hide Discussion";
        button.setAttribute("aria-expanded", "true");
        await loadReplies(id);
      }
    } else if (renderedCount === 0) {
      setStatus(elements.boardStatus, activeCategory === "all"
        ? "No discussions yet. Start one and invite readers into the conversation."
        : `No discussions in ${categoryLabels[activeCategory]} yet.`);
    }
    elements.loadMore.hidden = renderedCount >= totalCount;
  }

  async function loadReplies(discussionId) {
    const target = document.querySelector(`[data-replies="${CSS.escape(discussionId)}"]`);
    if (!target) return;
    target.replaceChildren();
    const { data, error } = await client
      .from("replies")
      .select("id, body, created_at, author:profiles!replies_author_id_fkey(display_name)")
      .eq("discussion_id", discussionId)
      .order("created_at", { ascending: true });

    if (error) {
      setStatus(target, `Couldn't load replies: ${error.message}`, true);
      return;
    }
    if (!data.length) {
      target.innerHTML = '<p class="form-note">Be the first to reply to this discussion.</p>';
      return;
    }
    target.innerHTML = data.map(replyMarkup).join("");
  }

  async function handleSignUp(formData) {
    const displayName = String(formData.get("displayName")).trim();
    const { data, error } = await client.auth.signUp({
      email: String(formData.get("email")).trim(),
      password: String(formData.get("password")),
      options: {
        data: { display_name: displayName },
        emailRedirectTo: window.location.href
      }
    });
    if (error) throw error;
    if (data.session) {
      session = data.session;
      updateAuthDisplay();
      setStatus(elements.authStatus, "Your account is ready. Welcome to the discussion.");
      await loadDiscussions(false);
    } else {
      setStatus(elements.authStatus, "Check your email to confirm your account, then sign in to join the conversation.");
    }
  }

  elements.authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = elements.authForm.querySelector("[type=submit]");
    submitButton.disabled = true;
    setStatus(elements.authStatus, authMode === "signup" ? "Creating your account..." : "Signing in...");
    const formData = new FormData(elements.authForm);
    try {
      if (authMode === "signup") {
        await handleSignUp(formData);
      } else {
        const { data, error } = await client.auth.signInWithPassword({
          email: String(formData.get("email")).trim(),
          password: String(formData.get("password"))
        });
        if (error) throw error;
        session = data.session;
        updateAuthDisplay();
        setStatus(elements.authStatus, "You're signed in. Join the conversation.");
      }
    } catch (error) {
      setStatus(elements.authStatus, error.message || "Authentication failed. Please try again.", true);
    } finally {
      submitButton.disabled = false;
    }
  });

  elements.authMode.addEventListener("click", () => {
    setAuthMode(authMode === "signup" ? "signin" : "signup");
  });

  elements.signOut.addEventListener("click", async () => {
    elements.signOut.disabled = true;
    const { error } = await client.auth.signOut();
    elements.signOut.disabled = false;
    if (error) {
      setStatus(elements.boardStatus, `Couldn't sign out: ${error.message}`, true);
      return;
    }
    session = null;
    updateAuthDisplay();
    setStatus(elements.authStatus, "You are signed out.");
  });

  elements.startButton.addEventListener("click", () => {
    if (!session?.user) {
      elements.authPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      elements.authEmail.focus();
      setStatus(elements.authStatus, "Sign in or create a member account to start a discussion.");
      return;
    }
    elements.postPanel.hidden = !elements.postPanel.hidden;
    elements.startButton.setAttribute("aria-expanded", String(!elements.postPanel.hidden));
    if (!elements.postPanel.hidden) elements.postForm.querySelector("[name=title]").focus();
  });

  elements.postForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!session?.user) {
      setStatus(elements.postStatus, "Sign in to start a discussion.", true);
      return;
    }
    const submitButton = elements.postForm.querySelector("[type=submit]");
    submitButton.disabled = true;
    setStatus(elements.postStatus, "Posting your discussion...");
    const formData = new FormData(elements.postForm);
    const category = String(formData.get("category"));
    try {
      const { data, error } = await client
        .from("discussions")
        .insert({
          author_id: session.user.id,
          category,
          title: String(formData.get("title")).trim(),
          body: String(formData.get("body")).trim()
        })
        .select("id")
        .single();
      if (error) throw error;
      elements.postForm.reset();
      elements.postPanel.hidden = true;
      elements.startButton.setAttribute("aria-expanded", "false");
      setStatus(elements.postStatus, "Your discussion is live.");
      setFilter(category, false);
      await loadDiscussions(false);
      const openButton = elements.list.querySelector(`[data-thread-toggle="${CSS.escape(data.id)}"]`);
      if (openButton) openButton.click();
    } catch (error) {
      setStatus(elements.postStatus, `Couldn't post your discussion: ${error.message}`, true);
    } finally {
      submitButton.disabled = false;
    }
  });

  elements.list.addEventListener("click", async (event) => {
    const threadButton = event.target.closest("[data-thread-toggle]");
    if (threadButton) {
      const id = threadButton.dataset.threadToggle;
      const panel = elements.list.querySelector(`[data-thread-panel="${CSS.escape(id)}"]`);
      const isOpening = panel.hidden;
      panel.hidden = !isOpening;
      threadButton.setAttribute("aria-expanded", String(isOpening));
      threadButton.textContent = isOpening ? "Hide Discussion" : "View Discussion";
      if (isOpening) await loadReplies(id);
      return;
    }

  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.category));
  });
  elements.loadMore.addEventListener("click", () => loadDiscussions(true));

  if (!window.supabase?.createClient) {
    showSetupRequired("The discussion service could not be loaded. Check the Supabase client connection.");
    elements.startButton.disabled = true;
    elements.authForm.hidden = true;
    elements.authMode.hidden = true;
    return;
  }
  if (!config?.supabaseUrl || !config?.supabasePublishableKey) {
    showSetupRequired("The discussion database is not configured yet. Add your project URL and publishable key to discussion-config.js.");
    elements.startButton.disabled = true;
    elements.authForm.hidden = true;
    elements.authMode.hidden = true;
    elements.authTitle.textContent = "Member accounts";
    elements.authDescription.textContent = "Connect a Supabase project to create accounts and join discussions.";
    return;
  }

  client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey);
  setAuthMode("signup");
  updateAuthDisplay();
  elements.loadMore.hidden = true;

  (async () => {
    const { data, error } = await client.auth.getSession();
    if (error) {
      setStatus(elements.boardStatus, `Couldn't check your member session: ${error.message}`, true);
      return;
    }
    session = data.session;
    updateAuthDisplay();
    await loadDiscussions(false);

    client.auth.onAuthStateChange((_event, nextSession) => {
      queueMicrotask(() => {
        session = nextSession;
        updateAuthDisplay();
        loadDiscussions(false);
      });
    });

    channel = client
      .channel("discussion-board")
      .on("postgres_changes", { event: "*", schema: "public", table: "discussions" }, () => loadDiscussions(false, getOpenDiscussionIds()))
      .on("postgres_changes", { event: "*", schema: "public", table: "replies" }, async (payload) => {
        const discussionId = payload.new?.discussion_id || payload.old?.discussion_id;
        const openThreadIds = getOpenDiscussionIds();
        if (discussionId && !openThreadIds.includes(discussionId)) openThreadIds.push(discussionId);
        await loadDiscussions(false, openThreadIds);
      })
      .subscribe((status, error) => {
        if (error) setStatus(elements.boardStatus, `Live updates are unavailable: ${error.message}`, true);
        else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          setStatus(elements.boardStatus, "Live updates are temporarily unavailable. Refresh to see the latest discussions.", true);
        }
      });
  })();

  window.addEventListener("beforeunload", () => {
    if (channel) client.removeChannel(channel);
  });
})();
