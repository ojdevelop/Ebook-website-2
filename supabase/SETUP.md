# Supabase discussion board setup

The discussion board runs on Supabase Auth, Postgres, row-level security, and Realtime. It does not use browser storage as a substitute for the database.

1. Create a Supabase project.
2. In the SQL Editor, run [`discussion_schema.sql`](./discussion_schema.sql).
3. In Project Settings → API, copy the Project URL and the project's publishable key (or legacy `anon` key). Never use a `service_role` or secret key in this website.
4. Put those two public values in `discussion-config.js`:

   ```js
   window.DISCUSSION_CONFIG = {
     supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
     supabasePublishableKey: "YOUR_PUBLIC_PUBLISHABLE_KEY"
   };
   ```

5. In Authentication → URL Configuration, set the production site URL and add the local development URL to the redirect allow list.
6. Configure email sign-up and confirmation to your preference in Authentication → Providers → Email.
7. Serve the site over HTTP (for example, GitHub Pages or a local static server), open `discussions.html`, and create a member account. Discussion authors' display names are visible to anyone who can read the public discussions.

The publishable/anon key is intended for browser use. Row-level security in the SQL schema restricts creating and managing posts and replies to the signed-in author. The board remains read-only until a Supabase project is configured.
