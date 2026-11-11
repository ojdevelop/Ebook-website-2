const books = [
  {
    title: "The Name of the Rose",
    author: "Umberto Eco",
    year: 1980,
    genre: "Historical mystery",
    region: "Italy",
    image: "photo-1544947950-fa07a98d237f",
    description: "In a medieval abbey, a chain of mysterious deaths draws a curious friar into a world of forbidden knowledge, faith, and reason."
  },
  {
    title: "My Brilliant Friend",
    author: "Elena Ferrante",
    year: 2011,
    genre: "Literary fiction",
    region: "Italy",
    image: "photo-1516979187457-637abb4f9353",
    description: "The first Neapolitan novel follows the intense, changing friendship of Elena and Lila as they grow up in postwar Naples."
  },
  {
    title: "The Vegetarian",
    author: "Han Kang",
    year: 2007,
    genre: "Literary fiction",
    region: "South Korea",
    image: "photo-1519682337058-a94d519337bc",
    description: "A quiet but radical decision unsettles a family and opens a haunting exploration of autonomy, convention, and transformation."
  },
  {
    title: "Homegoing",
    author: "Yaa Gyasi",
    year: 2016,
    genre: "Historical fiction",
    region: "Ghana & the United States",
    image: "photo-1512820790803-83ca734da794",
    description: "Two half-sisters begin a multigenerational story tracing family, memory, and the long reach of history across continents."
  },
  {
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    year: 1984,
    genre: "Philosophical fiction",
    region: "Czech Republic",
    image: "photo-1519682337058-a94d519337bc",
    description: "A philosophical novel exploring love, freedom, politics, and the weight of personal choices during a period of upheaval."
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Literary fiction",
    region: "Colombia",
    image: "photo-1507842217343-583bb7270b66",
    description: "The Buendía family’s generations unfold in the imagined town of Macondo, blending personal history with myth and social change."
  },
  {
    title: "2666",
    author: "Roberto Bolaño",
    year: 2004,
    genre: "Literary fiction",
    region: "Chile & Mexico",
    image: "photo-1455390582262-044cdead277a",
    description: "An ambitious multi-part novel follows writers, readers, and investigators across borders and histories."
  }
];

const readingBooks = [
  {
    title: "Homegoing",
    author: "Yaa Gyasi",
    coverId: "8081171",
    goodreadsUrl: "https://www.goodreads.com/book/show/34682272-homegoing",
    status: "Current · sample"
  },
  {
    title: "Americanah",
    author: "Chimamanda Ngozi Adichie",
    coverId: "8474037",
    goodreadsUrl: "https://goodreads.com/book/show/15796700.Americanah",
    status: "Upcoming · sample"
  },
  {
    title: "Pachinko",
    author: "Min Jin Lee",
    coverId: "8044605",
    goodreadsUrl: "https://goodreads.com/book/show/29983711.Pachinko",
    status: "Upcoming · sample"
  },
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    coverId: "8773134",
    goodreadsUrl: "https://www.goodreads.com/book/show/11337018.The_Night_Circus",
    status: "Previous · sample"
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    coverId: "12065783",
    goodreadsUrl: "https://www.goodreads.com/book/show/23165077-a-little-life",
    status: "Previous · sample"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    coverId: "14846827",
    goodreadsUrl: "https://www.goodreads.com/book/show/77203.The_Kite_Runner",
    status: "Previous · sample"
  },
  {
    title: "Small Things Like These",
    author: "Claire Keegan",
    coverId: "10507091",
    goodreadsUrl: "https://www.goodreads.com/book/show/58662236",
    status: "Previous · sample"
  }
];

const awardWinners = [
  {
    award: "Booker Prize 2022",
    title: "The Seven Moons of Maali Almeida",
    author: "Shehan Karunatilaka",
    coverId: "13822859",
    source: "https://thebookerprizes.com/the-booker-library/prize-years/2022"
  },
  {
    award: "Booker Prize 2021",
    title: "The Promise",
    author: "Damon Galgut",
    coverId: "11514543",
    source: "https://thebookerprizes.com/the-booker-library/prize-years/2021"
  },
  {
    award: "Booker Prize 1997",
    title: "The God of Small Things",
    author: "Arundhati Roy",
    coverId: "10513792",
    source: "https://thebookerprizes.com/the-booker-library/prize-years/1997"
  },
  {
    award: "International Booker Prize 2016",
    title: "The Vegetarian",
    author: "Han Kang",
    coverId: "7412625",
    source: "https://thebookerprizes.com/the-booker-library/prize-years/2016"
  },
  {
    award: "Pulitzer Prize for Fiction 2019",
    title: "The Overstory",
    author: "Richard Powers",
    coverId: "8758252",
    source: "https://www.pulitzer.org/winners/richard-powers"
  },
  {
    award: "Pulitzer Prize for Fiction 2017",
    title: "The Underground Railroad",
    author: "Colson Whitehead",
    coverId: "7899016",
    source: "https://www.pulitzer.org/winners/colson-whitehead"
  }
];

const literaryBooks = [
  {
    slug: "the-unbearable-lightness-of-being",
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    year: 1984,
    status: "current",
    region: "Czech Republic",
    genre: "Philosophical fiction",
    cover: "https://covers.openlibrary.org/b/id/967823-L.jpg",
    description: "A philosophical meditation on love, politics, and existence against the backdrop of the Prague Spring of 1968."
  },
  {
    slug: "the-name-of-the-rose",
    title: "The Name of the Rose",
    author: "Umberto Eco",
    year: 1980,
    status: "upcoming",
    region: "Italy",
    genre: "Historical mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780156001311-L.jpg",
    description: "In a medieval abbey, a chain of mysterious deaths draws a curious friar into a world of forbidden knowledge, faith, and reason."
  },
  {
    slug: "my-brilliant-friend",
    title: "My Brilliant Friend",
    author: "Elena Ferrante",
    year: 2011,
    status: "upcoming",
    region: "Italy",
    genre: "Literary fiction",
    cover: "https://covers.openlibrary.org/b/isbn/9781609450786-L.jpg",
    description: "The story of two friends growing up in post-war Naples, exploring class, education, identity, and a lifelong friendship."
  },
  {
    slug: "norwegian-wood",
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    year: 1987,
    status: "past",
    region: "Japan",
    genre: "Coming-of-age fiction",
    cover: "https://covers.openlibrary.org/b/isbn/9780375704024-L.jpg",
    description: "Toru Watanabe looks back on love, loss, and growing up in 1960s Tokyo in this tender and melancholy coming-of-age novel."
  },
  {
    slug: "2666",
    title: "2666",
    author: "Roberto Bolaño",
    year: 2004,
    status: "past",
    region: "Chile & Mexico",
    genre: "Literary fiction",
    cover: "https://covers.openlibrary.org/b/isbn/9780312429218-L.jpg",
    description: "An expansive, multi-part novel following writers, readers, and investigators through literature, violence, and the search for meaning."
  },
  {
    slug: "the-elegance-of-the-hedgehog",
    title: "The Elegance of the Hedgehog",
    author: "Muriel Barbery",
    year: 2006,
    status: "past",
    region: "France",
    genre: "Philosophical fiction",
    cover: "https://covers.openlibrary.org/b/isbn/9781933372600-L.jpg",
    description: "A witty philosophical novel about beauty, class, and unexpected friendship in a Paris apartment building."
  }
];

const pastGatherings = [
  {
    title: "My Mind's Café: 28 Stories for a Love Tooth",
    date: "August 18, 2026",
    dateTime: "2026-08-18",
    summary: "Award-winning author Reemanshu Goel Bansal shared heartwarming stories blending humor, wisdom, and nostalgia",
    attendance: "190 members attended"
  },
  {
    title: "My Little Princess",
    date: "August 10, 2026",
    dateTime: "2026-08-10",
    summary: "Author G. Harihara Arun Somasankar discussed the profound bond between a father and his daughter",
    attendance: "175 members attended"
  },
  {
    title: "Joaquín Rodrigo: A Research and Information Guide",
    date: "July 29, 2026",
    dateTime: "2026-07-29",
    summary: "Award-winning scholar Walter Aaron Clark discussed the legacy of one of the most important Spanish composers of the 20th century",
    attendance: "180 members attended"
  },
  {
    title: "Echoes of the Forgotten Realm",
    date: "July 22, 2026",
    dateTime: "2026-07-22",
    summary: "Fantasy novelist Elena Vance explored world-building mechanics and myth-making in modern epic literature",
    attendance: "145 members attended"
  },
  {
    title: "The Architecture of Poetry",
    date: "July 15, 2026",
    dateTime: "2026-07-15",
    summary: "Renowned poet Marcus Sterling dissected rhythmic structures, meter, and emotional resonance in free verse",
    attendance: "120 members attended"
  },
  {
    title: "Decoding the Modern Thriller",
    date: "July 8, 2026",
    dateTime: "2026-07-08",
    summary: "Bestselling suspense writer Sarah Jenkins shared techniques for pacing, plot twists, and building tension",
    attendance: "210 members attended"
  },
  {
    title: "Beyond the Final Page: Writing Sequels",
    date: "June 30, 2026",
    dateTime: "2026-06-30",
    summary: "Author David Thorne broke down how to expand a standalone narrative into a compelling multi-book series",
    attendance: "135 members attended"
  },
  {
    title: "Whispers in Translation",
    date: "June 24, 2026",
    dateTime: "2026-06-24",
    summary: "Literary translator Clara Dupont discussed the art of preserving cultural nuance across different languages",
    attendance: "95 members attended"
  },
  {
    title: "The Art of the Short Story",
    date: "June 17, 2026",
    dateTime: "2026-06-17",
    summary: "Award-winning short-form writer Julian Nash explored how to deliver maximum impact with limited word counts",
    attendance: "160 members attended"
  },
  {
    title: "Historical Fiction and Truth",
    date: "June 10, 2026",
    dateTime: "2026-06-10",
    summary: "Historian and novelist Beatrice Hall debated the balance between factual archives and creative license",
    attendance: "185 members attended"
  },
  {
    title: "Voices of Speculative Sci-Fi",
    date: "June 3, 2026",
    dateTime: "2026-06-03",
    summary: "Author Orion Vance examined dystopian futures and how contemporary anxiety shapes science fiction",
    attendance: "205 members attended"
  },
  {
    title: "Memoir as a Mirror",
    date: "May 27, 2026",
    dateTime: "2026-05-27",
    summary: "Autobiographical writer Naomi Brooks discussed vulnerability, truth, and shaping personal trauma into art",
    attendance: "150 members attended"
  },
  {
    title: "The Gothic Revival in Modern Prose",
    date: "May 20, 2026",
    dateTime: "2026-05-20",
    summary: "Author Liam Black analyzed atmospheric dread, isolation, and classic Gothic tropes in contemporary books",
    attendance: "115 members attended"
  },
  {
    title: "Magical Realism Explored",
    date: "May 14, 2026",
    dateTime: "2026-05-14",
    summary: "Writer Isabella Cruz discussed blending mundane everyday reality with fantastical, supernatural elements",
    attendance: "170 members attended"
  },
  {
    title: "The Writer's Notebook: Habits & Routines",
    date: "May 7, 2026",
    dateTime: "2026-05-07",
    summary: "Veteran essayist Arthur Pendelton shared daily rituals for overcoming writer's block and maintaining discipline",
    attendance: "225 members attended"
  },
  {
    title: "Myths Retold: Feminism in Folklore",
    date: "April 29, 2026",
    dateTime: "2026-04-29",
    summary: "Scholar Dr. Fiona Gable examined how modern literature reimagines ancient mythological female archetypes",
    attendance: "195 members attended"
  },
  {
    title: "The Cinematic Novel",
    date: "April 22, 2026",
    dateTime: "2026-04-22",
    summary: "Screenwriter turned novelist Ray Harrison discussed visual pacing, dialogue rhythm, and scene transitions",
    attendance: "140 members attended"
  },
  {
    title: "Humor and Heartache in Satire",
    date: "April 15, 2026",
    dateTime: "2026-04-15",
    summary: "Satirist Chloe Davenport explored how comedy serves as a vehicle for serious social critique",
    attendance: "165 members attended"
  },
  {
    title: "Noir and the Urban Underbelly",
    date: "April 8, 2026",
    dateTime: "2026-04-08",
    summary: "Crime fiction author Jax Morgan unpacked hardboiled detectives, moral ambiguity, and city settings",
    attendance: "155 members attended"
  },
  {
    title: "Eco-Fiction: Nature in Crisis",
    date: "April 1, 2026",
    dateTime: "2026-04-01",
    summary: "Environmental writer Tessa Green discussed climate change narratives and ecological themes in fiction",
    attendance: "130 members attended"
  },
  {
    title: "The Epistolary Format Today",
    date: "March 25, 2026",
    dateTime: "2026-03-25",
    summary: "Author Lucas Reed analyzed modern storytelling through letters, emails, transcripts, and digital logs",
    attendance: "110 members attended"
  },
  {
    title: "Crafting Unforgettable Antagonists",
    date: "March 18, 2026",
    dateTime: "2026-03-18",
    summary: "Character development coach Maya Lin broke down the psychology of compelling villains and rivals",
    attendance: "240 members attended"
  },
  {
    title: "The Power of the Unreliable Narrator",
    date: "March 11, 2026",
    dateTime: "2026-03-11",
    summary: "Suspense author Jonah Vance explored psychological depth, deception, and reader manipulation",
    attendance: "215 members attended"
  },
  {
    title: "Philosophy in Sci-Fi",
    date: "March 4, 2026",
    dateTime: "2026-03-04",
    summary: "Philosopher and author Dr. Kian Sterling debated existentialism, AI consciousness, and identity in literature",
    attendance: "185 members attended"
  },
  {
    title: "Writing the Immigrant Experience",
    date: "February 25, 2026",
    dateTime: "2026-02-25",
    summary: "Award-winning novelist Amina Khan discussed themes of displacement, identity, and dual-cultural belonging",
    attendance: "170 members attended"
  },
  {
    title: "The Renaissance of the Short Essay",
    date: "February 18, 2026",
    dateTime: "2026-02-18",
    summary: "Essayist George Vance reviewed the resurgence of reflective, long-form digital commentary",
    attendance: "125 members attended"
  },
  {
    title: "Folklore and Regional Tales",
    date: "February 11, 2026",
    dateTime: "2026-02-11",
    summary: "Folklorist Siobhan O'Connor shared how local legends and regional superstitions fuel supernatural fiction",
    attendance: "140 members attended"
  },
  {
    title: "Rom-Com Tropes and Subversions",
    date: "February 4, 2026",
    dateTime: "2026-02-04",
    summary: "Romance author Zoe Miller discussed chemistry, pacing, and turning classic relationship tropes on their head",
    attendance: "190 members attended"
  },
  {
    title: "The Epic Fantasy World-Building Lab",
    date: "January 28, 2026",
    dateTime: "2026-01-28",
    summary: "World-builder Gareth Drake mapped out linguistic roots, magic systems, and political structures",
    attendance: "230 members attended"
  },
  {
    title: "Sound and Silence in Prose",
    date: "January 21, 2026",
    dateTime: "2026-01-21",
    summary: "Poet and critic Celine Dupond examined sonic qualities, cadence, and whitespace in literary expression",
    attendance: "105 members attended"
  },
  {
    title: "True Crime and Literary Journalism",
    date: "January 14, 2026",
    dateTime: "2026-01-14",
    summary: "Investigative reporter Marcus Brody discussed ethical boundaries in documenting real-life tragedies",
    attendance: "200 members attended"
  },
  {
    title: "Indie Publishing Masterclass",
    date: "January 7, 2026",
    dateTime: "2026-01-07",
    summary: "Self-published pioneer Brenda Walsh outlined marketing strategies, cover design, and distribution",
    attendance: "250 members attended"
  },
  {
    title: "The Cozy Mystery Phenomenon",
    date: "December 30, 2025",
    dateTime: "2025-12-30",
    summary: "Author Penelope Scott discussed small-town settings, amateur sleuths, and feel-good whodunits",
    attendance: "175 members attended"
  },
  {
    title: "Adventure on the High Seas",
    date: "December 23, 2025",
    dateTime: "2025-12-23",
    summary: "Maritime historian and writer Captain Jack Thorne explored nautical history and maritime fiction",
    attendance: "135 members attended"
  },
  {
    title: "Closing the Chapter: Annual Review",
    date: "December 16, 2025",
    dateTime: "2025-12-16",
    summary: "Community leaders wrapped up the literary year celebrating member milestones, top books, and awards",
    attendance: "260 members attended"
  }
];

const authors = [
  {
    name: "Umberto Eco",
    origin: "Italy · 1932–2016",
    bio: "Italian novelist, literary critic, and semiotician best known for The Name of the Rose.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Italiaanse_schrijver_Umberto_Eco,_portret.jpg?width=900",
    imageAlt: "Umberto Eco, photographed in 1984",
    imageCredit: "National Archives of the Netherlands · CC0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Italiaanse_schrijver_Umberto_Eco,_portret.jpg"
  },
  {
    name: "Elena Ferrante",
    origin: "Italy · Contemporary",
    bio: "A pseudonymous Italian novelist whose Neapolitan novels explore friendship, ambition, and life in Naples.",
    imageAlt: "No portrait is shown because Elena Ferrante writes under a pseudonym",
    pseudonym: true
  },
  {
    name: "Han Kang",
    origin: "South Korea",
    bio: "South Korean novelist and poet whose intense, lyrical prose explores historical trauma and the fragility of human life.",
    image: "https://www.nobelprize.org/images/165769-portrait-medium.jpg",
    imageAlt: "Han Kang, photographed during Nobel Week",
    imageCredit: "Clément Morin · Nobel Prize Outreach",
    imageSource: "https://www.nobelprize.org/prizes/literature/2024/han/facts/"
  },
  {
    name: "Yaa Gyasi",
    origin: "Ghanaian-American · Contemporary",
    bio: "Ghanaian-American novelist whose debut novel, Homegoing, traces the legacies of slavery through generations of two families.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yaa_Gyasi,_9_27_(36709389003)_(cropped).jpg?width=900",
    imageAlt: "Yaa Gyasi at a bookseller event in 2017",
    imageCredit: "Bank Square Books · CC BY 2.0 (cropped)",
    imageSource: "https://commons.wikimedia.org/wiki/File:Yaa_Gyasi,_9_27_(36709389003)_(cropped).jpg"
  },
  {
    name: "Milan Kundera",
    origin: "Czech Republic · 1929–2023",
    bio: "Czech-born novelist and essayist whose fiction considers identity, memory, politics, and the philosophical dimensions of everyday life.",
    imageAlt: "No portrait is provided for Milan Kundera in this preview"
  },
  {
    name: "Gabriel García Márquez",
    origin: "Colombia · 1927–2014",
    bio: "Colombian novelist and journalist widely recognized for bringing magical realism to a broad international readership.",
    imageAlt: "No portrait is provided for Gabriel García Márquez in this preview"
  },
  {
    name: "Roberto Bolaño",
    origin: "Chile · 1953–2003",
    bio: "Chilean novelist and poet whose fiction follows writers and outsiders through expansive literary landscapes.",
    imageAlt: "No portrait is provided for Roberto Bolaño in this preview"
  }
];

const featuredAuthors = [
  {
    name: "Jonathan Coe",
    subtitle: "Costa Novel Award Winner & Satirical Fiction Specialist",
    bio: "Renowned British novelist Jonathan Coe is celebrated for his witty, poignant explorations of modern state-of-the-nation political satire and contemporary social history. His acclaimed works, including 'Middle England' and 'The Rotters' Club', offer insightful commentary on British culture.",
    image: "jonathan-coe-reference.png",
    imageAlt: "Award-winning author Jonathan Coe, 2019 Costa Novel Award winner for Middle England; selected works include The Rotters' Club, Middle England, and What a Carve Up!",
    badge: "Featured Author",
    award: "Costa Book Award Winner",
    genre: "Satire & Contemporary Fiction",
    works: ["The Rotters' Club", "Middle England", "What a Carve Up!"]
  },
  {
    name: "Jim Crace",
    subtitle: "International Dublin Literary Award Winner",
    bio: "Highly acclaimed novelist Jim Crace is recognized for his distinctive prose style, rich ecological themes, and inventive storytelling. His prize-winning novel 'Harvest' and celebrated works like 'Being Dead' showcase his mastery in crafting immersive historical and speculative landscapes.",
    image: "jim-crace-reference.png",
    imageAlt: "Award-winning author Jim Crace, 2015 International Dublin Literary Award winner for Harvest; selected works include Harvest, Being Dead, and The Pesthouse.",
    badge: "Featured Author",
    award: "Dublin Literary Award Winner",
    genre: "Literary & Historical Fiction",
    works: ["Harvest", "Being Dead", "The Pesthouse"]
  }
];

const communityStats = {
  members: "20,000+",
  booksDiscussed: "150+",
  discussionTopics: "2,000+",
  authorEvents: "100+"
};
const communityStatDescriptions = {
  members: "Across 45 countries worldwide.",
  booksDiscussed: "From three continents.",
  discussionTopics: "Engaging conversations daily.",
  authorEvents: "Exclusive Q&A sessions."
};

const discussionTopics = [
  {
    category: "current",
    title: "How do love and freedom shape the choices in Kundera's novel?",
    member: "Sample member",
    book: "The Unbearable Lightness of Being",
    replies: "Example only",
    activity: "Sample activity"
  },
  {
    category: "general",
    title: "What makes a story feel rooted in a particular place?",
    member: "Sample member",
    book: "General conversation",
    replies: "Example only",
    activity: "Sample activity"
  },
  {
    category: "tips",
    title: "What helps you keep reading when a book feels challenging?",
    member: "Sample member",
    book: "Reading tips",
    replies: "Example only",
    activity: "Sample activity"
  },
  {
    category: "current",
    title: "Books, belief, and the pursuit of knowledge in The Name of the Rose",
    member: "Sample member",
    book: "The Name of the Rose",
    replies: "Example only",
    activity: "Sample activity"
  },
  {
    category: "general",
    title: "Which translated book changed how you see the world?",
    member: "Sample member",
    book: "General conversation",
    replies: "Example only",
    activity: "Sample activity"
  },
  {
    category: "tips",
    title: "How do you keep a reading journal?",
    member: "Sample member",
    book: "Reading tips",
    replies: "Example only",
    activity: "Sample activity"
  }
];

const imageUrl = (image, width = 800) => image.startsWith("https://")
  ? image
  : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=80`;
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[character]));
const routeLink = (path, label, className = "text-link") =>
  `<a class="${className}" href="${path}" data-route="${path}">${label}</a>`;
const routeTitles = {
  "/books": "Our Book Collection",
  "/about": "About",
  "/discussions": "Discussions",
  "/events": "Events",
  "/join": "Join Us",
  "/guidelines": "Community Guidelines",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/terms": "Terms & Conditions",
  "/privacy": "Privacy Policy"
};
const mainContent = document.getElementById("main-content");
const homeTemplate = document.createElement("template");
homeTemplate.innerHTML = mainContent.innerHTML;
let motionObserver;

function pageHero(eyebrow, title, copy, image = "") {
  const visual = image
    ? `<div class="page-hero-visual"><img src="${imageUrl(image, 1200)}" alt="" loading="eager"></div>`
    : "";
  return `<section class="page-hero page-hero--split${image ? "" : " page-hero--text"}"><div class="wrap"><div><p class="eyebrow">${escapeHTML(eyebrow)}</p><h1>${escapeHTML(title)}</h1><p class="page-hero-copy">${escapeHTML(copy)}</p></div>${visual}</div></section>`;
}

function bookCard(book, status) {
  const cover = `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`;
  return `<a class="book-item reading-book-card" href="${book.goodreadsUrl}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(book.title)} by ${escapeHTML(book.author)} on Goodreads"><span class="book-image"><img src="${cover}" alt="Cover of ${escapeHTML(book.title)} by ${escapeHTML(book.author)}" loading="lazy"></span><span class="book-status">${escapeHTML(status)}</span><span class="reading-book-title">${escapeHTML(book.title)}</span><span class="book-author">${escapeHTML(book.author)}</span></a>`;
}

function literaryBookCard(book) {
  const route = `/books/${book.slug}`;
  const status = book.status[0].toUpperCase() + book.status.slice(1);
  return `<a class="collection-book-card" href="${route}" data-route="${route}" data-book-category="${book.status}" aria-label="View details for ${escapeHTML(book.title)} by ${escapeHTML(book.author)}"><span class="collection-book-cover"><img src="${book.cover}" alt="Cover of ${escapeHTML(book.title)} by ${escapeHTML(book.author)}" loading="lazy"></span><span class="collection-book-copy"><span class="collection-book-meta"><span class="collection-book-status">${escapeHTML(status)}</span><span>${escapeHTML(book.region)}</span></span><span class="collection-book-title">${escapeHTML(book.title)}</span><span class="collection-book-author">${escapeHTML(book.author)} · ${book.year}</span><span class="collection-book-description">${escapeHTML(book.description)}</span><span class="collection-book-link">View Details <span aria-hidden="true">→</span></span></span></a>`;
}

function pastGatheringCards(items) {
  const clockIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const membersIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
  return items.map((gathering) => `<article class="past-gathering-card"><time class="past-gathering-date" datetime="${gathering.dateTime}">${clockIcon}<span>${escapeHTML(gathering.date)}</span></time><h3>${escapeHTML(gathering.title)}</h3><p>${escapeHTML(gathering.summary)}</p><div class="past-gathering-attendance">${membersIcon}<span>${escapeHTML(gathering.attendance)}</span></div></article>`).join("");
}

function bookCollectionPage() {
  const filters = ["all", "current", "upcoming", "past"];
  return `${pageHero("Literary excellence", "Our Book Collection", "Explore a curated collection of literary classics and contemporary stories, with selections to read now, next, and again.")}<section class="book-collection-section"><div class="wrap"><div class="book-collection-toolbar" aria-label="Filter books"><div class="book-filter-list" role="group" aria-label="Filter books by reading status">${filters.map((filter) => `<button class="book-filter${filter === "all" ? " is-active" : ""}" type="button" data-book-filter="${filter}" aria-pressed="${filter === "all"}">${filter === "all" ? "All Books" : filter === "past" ? "Past Reads" : filter[0].toUpperCase() + filter.slice(1)}</button>`).join("")}</div><p class="book-collection-count" id="book-collection-count" aria-live="polite">Showing ${literaryBooks.length} books</p></div><div class="collection-book-grid">${literaryBooks.map(literaryBookCard).join("")}</div></div></section>`;
}

function literaryBookPage(slug) {
  const book = literaryBooks.find((item) => item.slug === slug);
  if (!book) return null;
  const status = book.status[0].toUpperCase() + book.status.slice(1);
  return `${pageHero("Literary excellence", book.title, `${book.author} · ${book.year} · ${book.region}`)}<section class="book-detail-section"><div class="wrap"><article class="book-detail-card"><div class="book-detail-cover"><img src="${book.cover}" alt="Cover of ${escapeHTML(book.title)} by ${escapeHTML(book.author)}"></div><div class="book-detail-copy"><p class="eyebrow">${escapeHTML(status)} · ${escapeHTML(book.region)}</p><h2>${escapeHTML(book.title)}</h2><p class="book-detail-byline">${escapeHTML(book.author)} · ${book.year}</p><p>${escapeHTML(book.description)}</p><dl class="book-detail-facts"><div><dt>Genre</dt><dd>${escapeHTML(book.genre)}</dd></div><div><dt>Reading collection</dt><dd>${escapeHTML(status)}</dd></div><div><dt>Region</dt><dd>${escapeHTML(book.region)}</dd></div><div><dt>Publication year</dt><dd>${book.year}</dd></div></dl>${routeLink("/books", "Back to all books", "button button--gold")}</div></article></div></section>`;
}

function awardWinnerCards(items) {
  return items.map((book) => `<a class="award-winner-card" href="${book.source}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(book.title)} by ${escapeHTML(book.author)}, ${escapeHTML(book.award)}"><span class="award-winner-cover"><img src="https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg" alt="Cover of ${escapeHTML(book.title)} by ${escapeHTML(book.author)}" loading="lazy"></span><span class="award-winner-label">${escapeHTML(book.award)}</span><span class="award-winner-title">${escapeHTML(book.title)}</span><span class="award-winner-author">${escapeHTML(book.author)}</span></a>`).join("");
}

function authorCards(items) {
  return items.map((author) => {
    const portrait = author.image
      ? `<div class="author-image"><img src="${imageUrl(author.image, 900)}" alt="${escapeHTML(author.imageAlt)}" loading="lazy"></div>`
      : `<div class="author-image author-image--anonymous" role="img" aria-label="${escapeHTML(author.imageAlt)}"><span class="author-anonymity">${author.pseudonym ? "Identity kept private" : "Portrait unavailable"}</span></div>`;
    const book = books.find((item) => item.author === author.name);
    const recognition = author.name === "Han Kang" ? "<p class=\"author-origin\">Nobel Prize in Literature · 2024</p>" : "";
    return `<article class="author-item">${portrait}<h3>${escapeHTML(author.name)}</h3>${recognition}<p class="author-origin">${escapeHTML(author.origin)}</p><p class="author-bio">${escapeHTML(author.bio)}</p>${book ? `<p class="author-origin">Featured work: <em>${escapeHTML(book.title)}</em></p>` : ""}</article>`;
  }).join("");
}

function featuredAuthorCards(items) {
  const badgeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5v2a4 4 0 0 0 4 4m7-6h3v2a4 4 0 0 1-4 4m-3 0v4m-3 3h6m-5-3h4"/></svg>';
  return items.map((author) => `<article class="author-spotlight-card"><div class="author-spotlight-banner"><img src="${author.image}" alt="${escapeHTML(author.imageAlt)}" loading="lazy"></div><div class="author-spotlight-copy"><span class="author-spotlight-badge">${badgeIcon}${escapeHTML(author.badge)}</span><h3>${escapeHTML(author.name)}</h3><p class="author-spotlight-subtitle">${escapeHTML(author.subtitle)}</p><p class="author-spotlight-bio">${escapeHTML(author.bio)}</p><ul class="author-spotlight-works" aria-label="Selected works by ${escapeHTML(author.name)}">${author.works.map((work) => `<li>${escapeHTML(work)}</li>`).join("")}</ul><div class="author-spotlight-footer"><div class="author-spotlight-meta"><span class="author-spotlight-rating" aria-label="5 out of 5 stars"><span class="author-spotlight-stars" aria-hidden="true">★★★★★</span><span>${escapeHTML(author.award)}</span></span></div><span class="author-spotlight-genre">${escapeHTML(author.genre)}</span></div></div></article>`).join("");
}

function contactPage() {
  return `${pageHero("Contact Everest", "We'd love to hear from you.", "There is no public email address or connected inbox for this preview. Prepare a message draft below and copy it into your email app.")}<section class="page-content page-content--paper"><div class="wrap contact-layout"><div><p class="eyebrow">Get in touch</p><h2>Questions, book ideas, or event suggestions.</h2><p class="section-intro">This form does not send or store information.</p></div><form class="contact-form draft-form"><label for="contact-name">Your name<input id="contact-name" name="name" autocomplete="name" required></label><label for="contact-email">Email address<input id="contact-email" name="email" type="email" autocomplete="email" required></label><label for="contact-subject">Subject<input id="contact-subject" name="subject" required></label><label for="contact-message">Your message<textarea id="contact-message" name="message" required></textarea></label><button class="button" type="submit">Prepare message draft</button><p class="contact-status" aria-live="polite"></p><label for="contact-draft">Message draft<textarea id="contact-draft" class="contact-draft" readonly hidden></textarea></label></form></div></section>`;
}

function aboutPage() {
  const genres = [
    ["Classic Literature", "Timeless writing that shaped literary traditions and continues to invite new readings."],
    ["Contemporary Fiction", "Modern voices exploring the questions, relationships, and changes of our time."],
    ["Translated Works", "Stories that cross language borders and bring different perspectives into conversation."],
    ["Genre Fiction", "Mystery, thriller, speculative, and other stories with distinctive cultural perspectives."]
  ];
  const steps = [
    ["1", "Monthly Selection", "A reading selection can be announced each month when the programme is confirmed."],
    ["2", "Read at Your Pace", "Read on your own schedule; guides and discussion prompts can accompany a confirmed selection."],
    ["3", "Join the Conversation", "Take part in online discussions and virtual meetups when these are available."],
    ["4", "Explore Together", "Discover author interviews, historical context, and reading resources as they are published."]
  ];
  return `${pageHero("About Everest Book Club", "A welcoming place to discover literature together.", "Everest Book Club is an independent reading project for readers curious about stories, cultures, and perspectives beyond their usual shelves.", "photo-1529156069898-49953e39b3ac")}<section class="page-content page-content--paper"><div class="wrap"><div class="about-story"><p class="eyebrow">Our story</p><h2>Many voices. Shared pages.</h2><p class="page-lead">Books can take us into lives and places we may never encounter firsthand. Everest Book Club is built around that possibility: readers come to a shared page with different experiences, questions, and points of view, and leave with a wider sense of the story and one another.</p><p class="about-body">Our reading shelf brings together classic and contemporary writing, translated works, and genre fiction from across Europe, Africa, and Asia. Rather than limiting reading to one language, period, or tradition, we make space for the contrasts and connections that emerge when books travel between cultures.</p><p class="about-body">Everest is an independent book-club project. Our public pages introduce sample books, literary voices, discussion prompts, and ways to participate. Announcements about selections, gatherings, and community activity should be treated as current only when they are specifically confirmed.</p></div><div class="about-mission"><p class="eyebrow">Our mission</p><h2>Make room for new perspectives.</h2><p class="section-intro">We aim to make thoughtful reading social, welcoming, and open to diverse literary traditions. A book club is not only about finishing a book; it is also about listening carefully, sharing interpretations, and staying curious when someone else sees a story differently.</p><p class="about-body">We value accessible conversation, respectful disagreement, and the freedom to read at an individual pace. Whether a reader joins for one title or follows a longer reading journey, the goal is the same: to find meaning together while honoring the richness of each work and its cultural context.</p></div><div class="page-subsection"><div class="section-head"><p class="eyebrow">What we read</p><h2>Four ways into a story.</h2><p class="section-intro">Our literary interests move between forms and traditions, following the books and questions that invite readers to look closer.</p></div><div class="page-tiles">${genres.map(([title, copy]) => `<article class="page-tile"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div><div class="about-reading-note"><h3>Reading across cultures</h3><p>Literature offers many routes into a culture: language, landscape, family life, politics, humor, belief, and memory. We approach each book as its own artistic work, not as a stand-in for an entire country or continent. Translations also deserve attention; a translator's choices help shape the voice that reaches us.</p><p>Our selections are intended to encourage exploration, not prescribe a single reading list. Readers are welcome to bring their own recommendations and to connect a book with other works, histories, or questions that matter to them.</p></div><div class="page-subsection"><div class="section-head"><p class="eyebrow">How it works</p><h2>Read, reflect, and explore.</h2></div><div class="steps-grid">${steps.map(([number, title, copy]) => `<article class="step-card"><span class="step-number">${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div><div class="page-callout"><div><h2>Come read with us.</h2><p>Membership details and a simple registration preview are on the Join Us page.</p></div>${routeLink("/join", "Join Us", "button button--gold")}</div></div></section>`;
}

function discussionCards(items) {
  return items.map((topic, index) => `<article class="discussion-topic" data-topic-category="${topic.category}"${index >= 3 ? " hidden" : ""}><div><p class="eyebrow">${topic.category === "current" ? "Current Book" : topic.category === "tips" ? "Reading Tips" : "General"}</p><h3>${escapeHTML(topic.title)}</h3><p class="discussion-meta">${escapeHTML(topic.member)} <span>·</span> ${escapeHTML(topic.book)}</p><p class="discussion-activity">${escapeHTML(topic.replies)} replies · ${escapeHTML(topic.activity)}</p><details class="discussion-preview"><summary>View Discussion</summary><p>This is sample discussion content for layout preview only. It is not a live member post and replies are not connected.</p>${routeLink("/join", "Join Us to take part")}</details></div></article>`).join("");
}

function discussionsPage() {
  return `${pageHero("Everest community", "Literary Discussions.", "Explore sample reading prompts and conversation categories. Member posts and replies are not connected in this preview.")}<section class="page-content page-content--paper"><div class="wrap"><div class="discussion-toolbar"><div><p class="eyebrow">Start a conversation</p><h2>Bring a question to the table.</h2></div><button class="button" id="discussion-start" type="button" aria-expanded="false" aria-controls="discussion-form-panel">Start New Discussion</button></div><p class="editorial-note">The topics below are examples, not live member activity. Names, reply counts, and recent activity are placeholders rather than community statistics.</p><div id="discussion-form-panel" class="discussion-form-panel" hidden><form class="local-form draft-form"><label for="discussion-name">Your name<input id="discussion-name" name="name" autocomplete="name" required></label><label for="discussion-title">Discussion topic<input id="discussion-title" name="topic" required></label><label for="discussion-category">Category<select id="discussion-category" name="category" required><option value="Current Book">Current Book</option><option value="General">General</option><option value="Reading Tips">Reading Tips</option></select></label><label for="discussion-book">Related book (optional)<input id="discussion-book" name="book"></label><button class="button" type="submit">Prepare discussion draft</button><p class="form-status" aria-live="polite"></p><label for="discussion-draft">Draft<textarea id="discussion-draft" class="contact-draft" readonly hidden></textarea></label></form></div><div class="discussion-filters" role="group" aria-label="Filter discussion topics"><button class="filter-chip is-active" type="button" data-category="all" aria-pressed="true">All Topics</button><button class="filter-chip" type="button" data-category="current" aria-pressed="false">Current Book</button><button class="filter-chip" type="button" data-category="general" aria-pressed="false">General</button><button class="filter-chip" type="button" data-category="tips" aria-pressed="false">Reading Tips</button></div><div class="discussion-list" id="discussion-list">${discussionCards(discussionTopics)}</div><button class="button button--outline" id="load-discussions" type="button" aria-expanded="false">Load More Discussions</button></div></section>`;
}

function eventsPage() {
  return `${pageHero("Everest events", "Upcoming Events.", "Join a future book discussion, author conversation, or virtual literary gathering when dates and details are confirmed.", "photo-1511632765486-a01980e01a18")}<section class="page-content page-content--paper"><div class="wrap"><div class="section-head"><p class="eyebrow">Featured event</p><h2>Gather Around Great Stories.</h2></div><article class="event-detail"><div class="event-detail-image"><img src="${imageUrl("photo-1511632765486-a01980e01a18", 1000)}" alt="A group gathered for a conversation" loading="lazy"></div><div><h3>No confirmed Everest event is listed.</h3><p>There is no verified event title, author or speaker, date, time, venue, or registration information to publish yet.</p><p class="honest-note">Registration and Add to Calendar will appear here when an event is confirmed and the required service is available.</p></div></article><div class="page-subsection"><div class="section-head"><p class="eyebrow">Past events</p><h2>Literary Gatherings.</h2></div><p class="empty-state">No verified past event descriptions, dates, photographs, or attendance figures are available.</p></div><div class="page-subsection"><div class="contact-layout"><div><p class="eyebrow">Share an idea</p><h2>Want to Suggest an Event?</h2><p class="section-intro">Prepare an event suggestion for the Everest team. This static preview cannot send it.</p></div><form class="contact-form draft-form"><label for="event-name">Your name<input id="event-name" name="name" autocomplete="name" required></label><label for="event-email">Email address<input id="event-email" name="email" type="email" autocomplete="email" required></label><label for="event-idea">Event suggestion<textarea id="event-idea" name="suggestion" required></textarea></label><button class="button" type="submit">Prepare suggestion</button><p class="contact-status" aria-live="polite"></p><label for="event-draft">Suggestion draft<textarea id="event-draft" class="contact-draft" readonly hidden></textarea></label></form></div></div></div></section>`;
}

function joinPage() {
  return `${pageHero("Join Everest", "Join Our Community.", "A welcoming reading space for readers who want to discover books and exchange perspectives across cultures.")}<section class="page-content page-content--paper"><div class="wrap join-layout"><div><p class="eyebrow">What you'll get</p><h2>More ways to enjoy every book.</h2><ul class="benefits membership-benefits"><li>Monthly book announcements and reading guides</li><li>Literary discussions and virtual meetups</li><li>Author interviews and literary content</li><li>Connections with readers across countries and cultures</li></ul><p class="editorial-note">The registration form is a front-end preview. No account is created and information is not transmitted or saved.</p></div><form class="contact-form membership-form" id="membership-form"><p class="eyebrow">Membership registration</p><label for="join-name">Full Name<input id="join-name" name="name" autocomplete="name" required></label><label for="join-email">Email Address<input id="join-email" name="email" type="email" autocomplete="email" required></label><label for="join-country">Country<input id="join-country" name="country" autocomplete="country-name" required></label><label for="join-book">Favorite Book <span>(optional)</span><input id="join-book" name="favoriteBook"></label><label for="join-interests">Reading Interests <span>(optional)</span><textarea id="join-interests" name="interests"></textarea></label><button class="button button--gold" type="submit">Complete Registration</button><p class="form-status" id="membership-status" aria-live="polite"></p></form></div></section>`;
}

function supportingPage(path) {
  if (path === "/contact") return contactPage();
  if (path === "/guidelines") {
    return `${pageHero("Community", "Community Guidelines.", "A thoughtful reading community begins with curiosity, care, and respect.")}<section class="page-content page-content--paper"><div class="wrap policy-copy"><h2>Be respectful and kind</h2><p>Welcome different perspectives. Discuss ideas without personal attacks, discrimination, or harassment.</p><h2>Engage thoughtfully</h2><ul><li>Stay relevant to the book or topic.</li><li>Explain your perspective and invite conversation.</li><li>Use spoiler warnings when discussing plot details.</li></ul><h2>Respect privacy and creative work</h2><p>Do not share private contact information or reproduce material without permission. Credit ideas and sources when you refer to them.</p><h2>Keep the space welcoming</h2><p>Harassment, hate speech, spam, impersonation, and deliberately disruptive behavior do not belong in a literary community.</p></div></section>`;
  }
  if (path === "/faq") {
    const items = [
      ["What is Everest Book Club?", "An independent reading project for discovering literature and exchanging perspectives."],
      ["How do I join?", "Use the Join Us form. This preview validates the form locally but does not transmit or store a registration."],
      ["What kinds of books do you read?", "The reading collection can include classic and contemporary fiction, translated works, and genre fiction from different regions."],
      ["Do I need to read every book?", "No. Readers can choose the books and discussions that interest them."],
      ["When are events held?", "No recurring schedule is confirmed. Check the Events page for verified announcements."],
      ["Can I suggest a book or event?", "Yes. Use the discussion draft or event suggestion form; neither is sent from this preview."]
    ];
    return `${pageHero("Help", "Frequently Asked Questions.", "A few practical details about reading and taking part with Everest.")}<section class="page-content page-content--paper"><div class="wrap faq-list">${items.map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join("")}${routeLink("/contact", "Contact Everest")}</div></section>`;
  }
  if (path === "/terms") {
    return `${pageHero("Information", "Terms & Conditions.", "A plain-language summary for this website preview.")}<section class="page-content page-content--paper"><div class="wrap policy-copy"><h2>Website content</h2><p>Book descriptions and author information are provided for general literary discovery. External links lead to third-party websites with their own terms.</p><h2>Forms and services</h2><p>This static preview has no connected registration, discussion, event, payment, or contact service. Form data is not transmitted or saved by this site.</p><h2>Content rights</h2><p>Book titles, author names, and linked external resources remain the property of their respective rights holders. Do not reproduce protected material without permission.</p></div></section>`;
  }
  if (path === "/privacy") {
    return `${pageHero("Information", "Privacy Policy.", "How this static website preview handles information.")}<section class="page-content page-content--paper"><div class="wrap policy-copy"><h2>Information entered in forms</h2><p>Forms on this preview do not submit information to a server, create accounts, or store responses. Drafts remain visible in the current page until you navigate away or reload.</p><h2>External services</h2><p>Images, web fonts, and linked external resources may be requested from their providers when you view the site. Their privacy practices are governed by those providers.</p><h2>Contact</h2><p>No public contact address or connected inbox has been configured for Everest in this preview.</p></div></section>`;
  }
  return null;
}


function renderRoute(path, push = false) {
  const basePath = location.hostname === "ojdevelop.github.io"
    ? "/Ebook-website-2"
    : "";

  let appPath = path;

  if (basePath && appPath.startsWith(basePath)) {
    appPath = appPath.slice(basePath.length) || "/";
  }

  const normalizedPath = appPath.replace(/\/+$/, "") || "/";
  const normalized = normalizedPath === "/membership" ? "/join" : normalizedPath;

  if (push && location.protocol !== "file:") {
    const targetPath = `${basePath}${normalized === "/" ? "/" : normalized}`;
    if (location.pathname !== targetPath) {
      history.pushState({}, "", targetPath);
    }
  }

  const book = normalized.startsWith("/books/")
    ? literaryBooks.find((item) => `/books/${item.slug}` === normalized)
    : null;

  document.title = normalized === "/"
    ? "Everest Book Club — Where Great Stories Bring Us Together"
    : `${routeTitles[normalized] || book?.title || "Page not found"} — Everest Book Club`;

  document.querySelectorAll(".desktop-nav [data-route], .mobile-nav [data-route]").forEach((link) => {
    if (link.dataset.route === normalized) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  mainContent.innerHTML = normalized === "/"
    ? homeTemplate.innerHTML
    : renderPage(normalized) || `<section class="route-page"><div class="wrap"><p class="eyebrow">Everest Book Club</p><h1>This page is not on our shelf.</h1>${routeLink("/", "Return home", "button")}</div></section>`;

  window.scrollTo({ top: 0, behavior: "instant" });
  initHomeData();
}


function formatMilestoneCount(value, suffix) {
  return `${new Intl.NumberFormat("en-US").format(value)}${suffix}`;
}

function animateMilestoneCount(element) {
  if (element.dataset.counted === "true") return;
  element.dataset.counted = "true";
  const target = Number(element.dataset.countTarget);
  const suffix = element.dataset.countSuffix || "";
  const duration = 1500;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - (1 - progress) ** 4;
    element.textContent = formatMilestoneCount(Math.round(target * easedProgress), suffix);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initializeMotion() {
  motionObserver?.disconnect();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll([
    "main > section:not(.hero) .section-head",
    ".world-card, .honor-card, .experience-item, .step-card, .reading-group",
    ".reading-book-card, .collection-book-card, .book-detail-card, .book-filter-list",
    ".author-item, .author-spotlight-card, .award-winner-card, .milestone-item",
    ".monthly-panel, .past-gathering-card, .page-tile, .event-card, .journal-item",
    ".event, .discussion-topic, .discussion-toolbar, .discussion-filters",
    ".featured-event-placeholder, .event-detail, .page-callout",
    ".page-subsection, .membership-form, .faq-item, .policy-copy > *, .article-body > *",
    ".page-hero .wrap, .route-page .wrap, .join-layout > *, .contact-layout > *"
  ].join(","));

  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-visible"));
    document.querySelectorAll("[data-count-target]").forEach((element) => {
      element.textContent = formatMilestoneCount(Number(element.dataset.countTarget), element.dataset.countSuffix || "");
    });
    document.documentElement.classList.remove("motion-ready");
    return;
  }

  document.documentElement.classList.add("motion-ready");
  const siblingPositions = new Map();
  targets.forEach((element) => {
    element.classList.add("reveal");
    const parent = element.parentElement;
    const position = siblingPositions.get(parent) || 0;
    siblingPositions.set(parent, position + 1);
    element.style.setProperty("--reveal-delay", `${(position % 6) * 65}ms`);
  });

  motionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.matches("[data-count-target]")) animateMilestoneCount(entry.target);
      else entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((element) => {
    motionObserver.observe(element);
    if (element.matches(".milestone-item")) {
      const count = element.querySelector("[data-count-target]");
      if (count) motionObserver.observe(count);
    }
  });
}

function initHomeData() {
  const pastGatheringGrid = document.getElementById("past-gathering-grid");
  if (pastGatheringGrid) pastGatheringGrid.innerHTML = pastGatheringCards(pastGatherings);
  const groups = document.getElementById("reading-groups");
  if (groups) {
    groups.classList.add("reading-shelf-grid");
    groups.innerHTML = readingBooks.map((book) => bookCard(book, book.status)).join("");
  }
  const awardWinnerRow = document.getElementById("award-winner-row");
  if (awardWinnerRow) awardWinnerRow.innerHTML = awardWinnerCards(awardWinners);
  const authorGrid = document.getElementById("author-grid");
  if (authorGrid) {
    authorGrid.innerHTML = featuredAuthorCards(featuredAuthors);
  }
  const milestoneGrid = document.getElementById("milestone-grid");
  if (milestoneGrid) {
    const labels = [
      ["members", "Active Members"],
      ["booksDiscussed", "Books Discussed"],
      ["discussionTopics", "Discussion Topics"],
      ["authorEvents", "Author Events"]
    ];
    milestoneGrid.innerHTML = labels.map(([key, label]) => {
      const stat = communityStats[key];
      const [, number, suffix] = stat.match(/^([\d,]+)(.*)$/);
      const target = Number(number.replace(/,/g, ""));
      return `<article class="milestone-item"><strong aria-label="${escapeHTML(stat)}" data-count-target="${target}" data-count-suffix="${escapeHTML(suffix)}">0${escapeHTML(suffix)}</strong><h3>${label}</h3><p>${communityStatDescriptions[key]}</p></article>`;
    }).join("");
  }
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
  initializeMotion();
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest("[data-route]");
  if (link) {
    event.preventDefault();
    renderRoute(link.dataset.route, true);
    document.getElementById("mobile-nav").classList.remove("is-open");
    document.body.classList.remove("menu-open");
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    return;
  }
  const bookFilter = target.closest("[data-book-filter]");
  if (bookFilter) {
    const category = bookFilter.dataset.bookFilter;
    document.querySelectorAll("[data-book-filter]").forEach((button) => {
      const active = button === bookFilter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const cards = [...document.querySelectorAll(".collection-book-card")];
    let visibleCount = 0;
    cards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.bookCategory !== category;
      if (!card.hidden) visibleCount += 1;
    });
    const count = document.getElementById("book-collection-count");
    count.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "book" : "books"}`;
    return;
  }
  const startButton = target.closest("#discussion-start");
  if (startButton) {
    const panel = document.getElementById("discussion-form-panel");
    const isOpen = panel.hidden;
    panel.hidden = !isOpen;
    startButton.setAttribute("aria-expanded", String(isOpen));
    return;
  }
  const filter = target.closest(".filter-chip");
  if (filter) {
    const category = filter.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((button) => {
      const active = button === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const matches = [...document.querySelectorAll(".discussion-topic")]
      .filter((topic) => category === "all" || topic.dataset.topicCategory === category);
    document.querySelectorAll(".discussion-topic").forEach((topic) => {
      topic.hidden = !matches.includes(topic);
    });
    const loadButton = document.getElementById("load-discussions");
    loadButton.setAttribute("aria-expanded", "false");
    loadButton.textContent = "Load More Discussions";
    return;
  }
  const loadButton = target.closest("#load-discussions");
  if (loadButton) {
    const topics = [...document.querySelectorAll(".discussion-topic")];
    const showingAll = loadButton.getAttribute("aria-expanded") === "true";
    const activeCategory = document.querySelector(".filter-chip.is-active").dataset.category;
    const matching = topics.filter((topic) => activeCategory === "all" || topic.dataset.topicCategory === activeCategory);
    matching.forEach((topic, index) => {
      topic.hidden = showingAll && index >= 3;
    });
    loadButton.setAttribute("aria-expanded", String(!showingAll));
    loadButton.textContent = showingAll ? "Load More Discussions" : "Show Fewer Discussions";
  }
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const isOpen = document.getElementById("mobile-nav").classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  event.currentTarget.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("mobile-nav").classList.remove("is-open");
    document.body.classList.remove("menu-open");
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (form.id === "membership-form") {
    event.preventDefault();
    document.getElementById("membership-status").textContent = "Registration preview complete. Your details were validated in this browser but have not been transmitted or saved. Membership registration is not connected yet.";
    form.reset();
    return;
  }
  if (!form.classList.contains("draft-form")) return;
  event.preventDefault();
  const formData = new FormData(form);
  const draft = form.querySelector(".contact-draft");
  draft.value = [...formData.entries()]
    .map(([name, value]) => `${name.replace(/([A-Z])/g, " $1").replace(/^./, (character) => character.toUpperCase())}: ${String(value).trim()}`)
    .filter((line) => !line.endsWith(": "))
    .join("\n\n");
  draft.hidden = false;
  const status = form.querySelector(".contact-status, .form-status");
  if (status) status.textContent = "Draft prepared below. Copy it for your records; this website does not send or store it.";
});

window.addEventListener("popstate", () => {
  renderRoute(location.protocol === "file:" ? "/" : location.pathname);
});

renderRoute(location.protocol === "file:" ? "/" : location.pathname);
