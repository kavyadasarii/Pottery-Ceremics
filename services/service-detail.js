// service-detail.js
// Drives the service detail page dynamically from a single data set,
// keyed by the ?id= query param (matches the ids used in services.html).

const SERVICES = [
  {
    id: "beginner-pottery",
    image: "images/beginner-pottery.jpg",
    category: "Classes", categoryClass: "", emoji: "🏺",
    badge: "Most Popular", badgeClass: "badge-popular",
    name: "Beginner Pottery",
    subtitle: "Start your clay journey with hand-building, basic forms, and surface decoration in a relaxed environment.",
    duration: "2 hrs", size: "Max 10", schedule: "Daily", level: "Beginner",
    price: "₹1,200", pricePer: "/ session",
    rating: "4.9", reviewCount: 230,
    about: [
      "Whether you've never touched clay before or want to revisit the basics, our Beginner Pottery class is the perfect starting point. Over 2 guided hours, you'll learn the fundamentals of hand-building techniques and leave with a piece you've made entirely from scratch.",
      "Our instructors create a relaxed, supportive atmosphere — mistakes are part of the process, and every \"imperfect\" piece has its own charm. Many of our most advanced students started right here."
    ],
    experienceTitle: "The Experience",
    experience: [
      { icon: "📋", title: "Arrive & Settle", desc: "Get your apron, meet your instructor, and get introduced to the clay and tools available." },
      { icon: "👐", title: "Learn & Create", desc: "Follow guided exercises, then freestyle your own piece with hands-on instructor support." },
      { icon: "🔥", title: "We Handle the Rest", desc: "Your piece dries, gets bisque fired, glazed, and kiln fired — all in our on-site studio." },
      { icon: "🎁", title: "Collect Your Piece", desc: "Come back in 10–14 days to collect a fully finished, glaze-fired piece that is entirely yours." }
    ],
    curriculumHeading: "What You'll Learn",
    tabLabel: "What You'll Learn",
    curriculumIntro: "A structured but flexible curriculum designed to build genuine skills, not just produce a souvenir.",
    curriculum: [
      { title: "Introduction to Clay Types", desc: "Learn the difference between earthenware, stoneware, and porcelain — and which is best for different projects." },
      { title: "Wedging & Preparation", desc: "Proper wedging techniques to remove air bubbles and create even consistency throughout your clay." },
      { title: "Pinch Pot Fundamentals", desc: "The most ancient hand-building technique — create a small vessel using only your hands and patience." },
      { title: "Coil Building", desc: "Build taller forms by stacking coils of clay. Great for bowls, vases, and sculptural work." },
      { title: "Surface Decoration", desc: "Stamps, carving, and slip trailing to add texture and personal character to your piece." },
      { title: "Glazing Overview", desc: "A walkthrough of our glaze palette and how different colours behave in the kiln — so you can choose wisely!" }
    ],
    includes: [
      { icon: "✅", title: "Clay & Materials", desc: "Premium stoneware clay, enough for 1–2 pieces per session.", included: true },
      { icon: "✅", title: "All Tools", desc: "Wire cutters, ribs, loop tools, sponges, stamps — everything you need.", included: true },
      { icon: "✅", title: "Expert Instruction", desc: "Certified instructor guidance throughout the entire session.", included: true },
      { icon: "✅", title: "Firing & Glazing", desc: "Bisque firing, glaze application, and final kiln firing. All on-site.", included: true },
      { icon: "✅", title: "Apron", desc: "We'll keep your clothes safe with a studio apron.", included: true },
      { icon: "✅", title: "Tea & Coffee", desc: "Complimentary refreshments to fuel your creativity.", included: true },
      { icon: "❌", title: "Extra Clay Packs", desc: "Additional clay packs available to purchase in-studio if needed.", included: false },
      { icon: "❌", title: "Transport / Packaging", desc: "Finished pieces need to be collected in-studio. Packaging is extra.", included: false }
    ],
    reviews: [
      { name: "Priya Mehta", date: "March 2026", text: "I walked in knowing nothing about pottery and left with a beautiful bowl I made myself. The instructors are patient, warm, and genuinely passionate. Already booked my next session!" },
      { name: "Rahul Sharma", date: "February 2026", text: "Such a therapeutic experience. The atmosphere is cozy, the instructors explain everything step-by-step. My little pinch pot is now proudly on my shelf at home." },
      { name: "Sneha Iyer", date: "January 2026", text: "Came here for a birthday experience and it honestly exceeded all expectations. The studio is gorgeous, the vibe is warm, and I made something I'm actually proud of." }
    ],
    sideBadges: [
      { icon: "🏅", title: "Expert Led", sub: "Certified instructors" },
      { icon: "🛍️", title: "Take It Home", sub: "Keep everything you make" }
    ],
    relatedIds: ["wheel-throwing", "private-sessions", "studio-membership"]
  },

  {
    id: "wheel-throwing",
    image: "images/wheel-throwing.jpg",
    category: "Classes", categoryClass: "", emoji: "🎡",
    badge: "Intermediate", badgeClass: "badge-level",
    name: "Wheel Throwing",
    subtitle: "Get hands-on with the potter's wheel. Create bowls, mugs, and vases with centering and pulling techniques.",
    duration: "3 hrs", size: "Max 8", schedule: "Weekdays", level: "Intermediate",
    price: "₹1,800", pricePer: "/ session",
    rating: "4.8", reviewCount: 176,
    about: [
      "There's nothing quite like the moment clay centers under your hands and rises on the wheel. This class takes you through the full arc of throwing — from wedging and centering to pulling walls and shaping bowls, mugs, and vases.",
      "It's a physical, focused practice that rewards patience. Instructors work closely with each student, correcting hand position and pressure in real time so the technique actually sticks."
    ],
    experienceTitle: "The Experience",
    experience: [
      { icon: "🎯", title: "Center Your Clay", desc: "Learn to centre a ball of clay on the spinning wheel — the foundation every throw depends on." },
      { icon: "🤲", title: "Pull & Shape", desc: "Open the clay and pull even walls upward to form your bowl, mug, or vase." },
      { icon: "✂️", title: "Trim & Refine", desc: "Once leather-hard, trim the base and refine the silhouette for a clean, balanced form." },
      { icon: "🔥", title: "Fire & Finish", desc: "We bisque fire, glaze, and kiln fire your piece — ready for collection in 10–14 days." }
    ],
    curriculumHeading: "What You'll Learn",
    tabLabel: "What You'll Learn",
    curriculumIntro: "From first centering attempts to consistently thrown forms — a hands-on progression on the wheel.",
    curriculum: [
      { title: "Centering the Clay", desc: "The essential wheel skill — get the clay perfectly balanced before shaping begins." },
      { title: "Opening & Flooring", desc: "Create the base of your piece with even thickness and a stable floor." },
      { title: "Pulling Walls", desc: "Draw the clay upward into tall, even walls without collapsing the form." },
      { title: "Shaping Bowls & Cylinders", desc: "Practice two foundational forms that unlock most other wheel-thrown shapes." },
      { title: "Trimming Technique", desc: "Use trimming tools to clean up the base once your piece has firmed up." },
      { title: "Handles & Attachments", desc: "Pull and attach a handle to turn a cylinder into a proper mug." }
    ],
    includes: [
      { icon: "✅", title: "Wheel & Station", desc: "Your own pottery wheel and workspace for the full session.", included: true },
      { icon: "✅", title: "2kg of Clay", desc: "Enough stoneware clay for 1–2 thrown pieces.", included: true },
      { icon: "✅", title: "All Tools", desc: "Ribs, wire cutters, sponges, and trimming tools provided.", included: true },
      { icon: "✅", title: "Expert Instruction", desc: "Hands-on guidance and correction throughout the session.", included: true },
      { icon: "✅", title: "Firing & Glazing", desc: "Bisque and glaze firing included, done on-site.", included: true },
      { icon: "✅", title: "Apron", desc: "Studio apron provided to keep clothes clean.", included: true },
      { icon: "❌", title: "Extra Clay Blocks", desc: "Additional clay available to purchase if you want more practice.", included: false },
      { icon: "❌", title: "Take-home Packaging", desc: "Finished pieces are collected in-studio; packaging costs extra.", included: false }
    ],
    reviews: [
      { name: "Arjun Nair", date: "March 2026", text: "Centering the clay took me three tries but once it clicked, I was hooked. Left with a proper mug that I actually use every morning now." },
      { name: "Kavya Reddy", date: "February 2026", text: "The instructor kept adjusting my hand pressure until it finally worked. Such a satisfying, focused way to spend an afternoon." },
      { name: "Vikram Rao", date: "January 2026", text: "Booked this on a whim and now I'm hooked on wheel throwing. Small class size meant loads of one-on-one attention." }
    ],
    sideBadges: [
      { icon: "🎡", title: "Wheel-Based", sub: "One wheel per student" },
      { icon: "🛍️", title: "Take It Home", sub: "Keep everything you make" }
    ],
    relatedIds: ["beginner-pottery", "advanced-ceramics", "private-sessions"]
  },

  {
    id: "advanced-ceramics",
    image: "images/advanced-ceramics.jpg",
    category: "Classes", categoryClass: "", emoji: "🎨",
    badge: "Advanced", badgeClass: "badge-advanced",
    name: "Advanced Ceramics",
    subtitle: "Explore complex glazing, kiln techniques, and sculptural forms. Push your creative boundaries.",
    duration: "4 hrs", size: "Max 6", schedule: "Weekends", level: "Advanced",
    price: "₹2,500", pricePer: "/ session",
    rating: "5.0", reviewCount: 94,
    about: [
      "Built for students who already have wheel or hand-building fundamentals down, Advanced Ceramics goes deep into sculptural form, layered glazing, and multi-stage firing. Sessions are small and studio time is largely self-directed, with instructors on hand for technical problem-solving.",
      "Expect to experiment — with slab construction, altered wheel forms, glaze layering, and surface treatments that go well beyond the basics."
    ],
    experienceTitle: "The Experience",
    experience: [
      { icon: "💡", title: "Concept & Design", desc: "Sketch out the form and finish you're aiming for before touching clay." },
      { icon: "🛠️", title: "Advanced Forming", desc: "Combine wheel, slab, and hand-building techniques to build your piece." },
      { icon: "🎨", title: "Complex Glazing", desc: "Layer glazes and experiment with resist techniques for depth and texture." },
      { icon: "🔥", title: "Kiln Mastery", desc: "Multi-stage firing to bring out the exact finish your piece calls for." }
    ],
    curriculumHeading: "What You'll Learn",
    tabLabel: "What You'll Learn",
    curriculumIntro: "A technical, exploratory curriculum for students ready to move past the fundamentals.",
    curriculum: [
      { title: "Sculptural Hand-building", desc: "Combine coil, slab, and pinch methods to build complex sculptural forms." },
      { title: "Advanced Wheel Techniques", desc: "Altered forms, faceting, and throwing off the hump for multiple small pieces." },
      { title: "Glaze Chemistry Basics", desc: "Understand how glaze ingredients and firing temperatures affect final colour and texture." },
      { title: "Multi-firing Techniques", desc: "Layer glaze applications across two or more firings for richer surfaces." },
      { title: "Surface Texture & Slip Trailing", desc: "Fine detailing techniques for adding pattern and dimension." },
      { title: "Large-scale Forms", desc: "Techniques for building bigger pieces without cracking or collapsing." }
    ],
    includes: [
      { icon: "✅", title: "Studio Access", desc: "Extended 4-hour block with full access to wheels and hand-building space.", included: true },
      { icon: "✅", title: "Premium Clay", desc: "Choice of stoneware or porcelain clay bodies.", included: true },
      { icon: "✅", title: "Full Tool Kit", desc: "Advanced sculpting and glazing tools available for use.", included: true },
      { icon: "✅", title: "Technical Guidance", desc: "Experienced instructor available for troubleshooting and technique advice.", included: true },
      { icon: "✅", title: "Multi-stage Firing", desc: "Bisque and glaze firing, including layered/multi-firing where needed.", included: true },
      { icon: "✅", title: "Apron & Studio Coat", desc: "Full protective wear provided for messier techniques.", included: true },
      { icon: "❌", title: "Specialty Glazes", desc: "Rare or custom glaze blends are available at an additional cost.", included: false },
      { icon: "❌", title: "Large-kiln Firing Fee", desc: "Oversized pieces may incur an extra firing charge.", included: false }
    ],
    reviews: [
      { name: "Anjali Desai", date: "March 2026", text: "Finally a class that treats you like you know what you're doing. The glaze layering session alone was worth it." },
      { name: "Karan Malhotra", date: "February 2026", text: "Small group, serious studio time, and an instructor who actually understands glaze chemistry. Exactly what I needed." },
      { name: "Meera Pillai", date: "January 2026", text: "Pushed my sculptural work further than I expected in a single session. Already planning my next large-scale piece." }
    ],
    sideBadges: [
      { icon: "🎓", title: "Advanced Level", sub: "Small group of 6" },
      { icon: "🛍️", title: "Take It Home", sub: "Keep everything you make" }
    ],
    relatedIds: ["wheel-throwing", "private-sessions", "studio-membership"]
  },

  {
    id: "studio-membership",
    image: "images/studio-membership.jpg",
    category: "Membership", categoryClass: "pill-gold", emoji: "🎟️",
    badge: "Best Value", badgeClass: "badge-featured",
    name: "Studio Membership",
    subtitle: "Unlimited open studio access, priority class booking, 20% off all materials, and exclusive member-only workshops every month.",
    duration: "Unlimited", size: "Unlimited Access", schedule: "Monthly", level: "All Levels",
    price: "₹4,999", pricePer: "/ month",
    rating: "4.9", reviewCount: 142,
    about: [
      "Studio Membership is for anyone who wants pottery to be a regular part of their life, not a one-off outing. It gives you unlimited access to open studio hours, priority booking on every class, and a stack of member-only perks.",
      "Members get to know the studio and each other over time — many of our closest studio friendships (and best work) come out of the membership community."
    ],
    experienceTitle: "How Membership Works",
    experience: [
      { icon: "📝", title: "Sign Up & Onboard", desc: "A quick studio orientation so you know the space, kiln schedule, and booking system." },
      { icon: "📅", title: "Book Your Slots", desc: "Reserve open studio time or classes online, with priority access over drop-ins." },
      { icon: "🏺", title: "Create Anytime", desc: "Come in as often as you like during open studio hours to work on your own projects." },
      { icon: "🔥", title: "Fire & Collect", desc: "Unlimited kiln firings included — just drop off finished greenware for glazing." }
    ],
    curriculumHeading: "Membership Highlights",
    tabLabel: "Highlights",
    curriculumIntro: "Everything that comes with being a Studio Member, month to month.",
    curriculum: [
      { title: "Unlimited Open Studio Hours", desc: "Come in as often as you like during any open studio session." },
      { title: "Priority Class Booking", desc: "Reserve seats in popular classes before they open to the public." },
      { title: "20% Off All Materials", desc: "Discounted pricing on clay, glazes, and specialty tools." },
      { title: "Unlimited Kiln Firings", desc: "No per-piece firing fees for anything you make during your membership." },
      { title: "Exclusive Member Workshops", desc: "Monthly workshops only open to members, covering advanced techniques." },
      { title: "Free Guest Pass", desc: "Bring a friend to try open studio, free, once a month." }
    ],
    includes: [
      { icon: "✅", title: "Open Studio Access", desc: "Unlimited access to the studio during all open hours.", included: true },
      { icon: "✅", title: "Personal Shelf Storage", desc: "A dedicated shelf to store works-in-progress between visits.", included: true },
      { icon: "✅", title: "Community Events", desc: "Invitations to member socials, critiques, and studio nights.", included: true },
      { icon: "✅", title: "Materials Discount", desc: "20% off clay, glazes, and tools purchased in-studio.", included: true },
      { icon: "✅", title: "Unlimited Firing", desc: "No extra charge for bisque or glaze firing.", included: true },
      { icon: "✅", title: "1 Guest Pass / Month", desc: "Bring a friend along to experience open studio.", included: true },
      { icon: "❌", title: "One-on-one Instruction", desc: "Private tuition is available separately at member rates.", included: false },
      { icon: "❌", title: "Additional Guest Passes", desc: "Extra guest passes beyond one per month can be purchased.", included: false }
    ],
    reviews: [
      { name: "Rohan Kapoor", date: "March 2026", text: "Best decision I made this year. I come in twice a week now and my work has improved massively just from the repetition." },
      { name: "Divya Bhatt", date: "February 2026", text: "The community aspect is what keeps me coming back. Priority booking means I never miss the classes I actually want." },
      { name: "Aditya Kulkarni", date: "January 2026", text: "Unlimited firing alone makes this worth it if you make more than one or two pieces a month. Great value overall." }
    ],
    sideBadges: [
      { icon: "♾️", title: "Unlimited Access", sub: "Any open studio hour" },
      { icon: "🎁", title: "Member Perks", sub: "Discounts & free guest pass" }
    ],
    relatedIds: ["wheel-throwing", "private-sessions", "advanced-ceramics"]
  },

  {
    id: "kids-workshop",
    image: "images/kids-workshop.jpg",
    category: "Classes", categoryClass: "", emoji: "🧒",
    badge: "Ages 6–14", badgeClass: "badge-kids",
    name: "Kids Workshop",
    subtitle: "A fun, safe space for children to explore their creativity through clay, colour, and storytelling.",
    duration: "90 min", size: "Max 12", schedule: "Saturdays", level: "Beginner (Kids)",
    price: "₹900", pricePer: "/ session",
    rating: "4.9", reviewCount: 118,
    about: [
      "Kids Workshop is designed around play, storytelling, and hands-on discovery rather than technical precision. Children explore basic hand-building, colour, and texture, guided by instructors who specialise in working with young makers.",
      "Every child leaves with something they made themselves — and, more importantly, a fun 90 minutes away from screens spent using their hands and imagination."
    ],
    experienceTitle: "The Experience",
    experience: [
      { icon: "👋", title: "Welcome & Warm-up", desc: "Kids get an apron, meet their instructor, and do a fun clay warm-up activity." },
      { icon: "📖", title: "Story-led Making", desc: "A short story or theme inspires that week's project — animals, monsters, mini pots, and more." },
      { icon: "🌈", title: "Colour & Decorate", desc: "Kids add texture, stamps, and colour choices to make their piece their own." },
      { icon: "🧼", title: "Safe Clean-up", desc: "Instructors handle firing and glazing; pieces are ready for pickup in 10–14 days." }
    ],
    curriculumHeading: "What Kids Will Learn",
    tabLabel: "What They'll Learn",
    curriculumIntro: "A playful introduction to clay, built for young hands and short attention spans.",
    curriculum: [
      { title: "Intro to Clay Play", desc: "Sensory warm-up activities to get comfortable handling and shaping clay." },
      { title: "Simple Hand-building Shapes", desc: "Pinch pots, simple animals, and basic coil shapes suited to smaller hands." },
      { title: "Colour & Texture Exploration", desc: "Stamps, textures, and safe colour options to decorate each project." },
      { title: "Imaginative Storytelling Projects", desc: "Weekly themes that turn each class into a mini creative adventure." },
      { title: "Safe Tool Use", desc: "Kid-friendly tools with close supervision throughout the session." },
      { title: "Finishing Touches", desc: "Final details added before pieces are sent off for firing." }
    ],
    includes: [
      { icon: "✅", title: "Child-safe Tools", desc: "All tools are age-appropriate and used under close supervision.", included: true },
      { icon: "✅", title: "Clay & Materials", desc: "Soft, easy-to-work clay suited to younger hands.", included: true },
      { icon: "✅", title: "Low Adult Ratio", desc: "One instructor supervises no more than 6 children at a time.", included: true },
      { icon: "✅", title: "Smock / Apron", desc: "Full-coverage smocks to protect clothing.", included: true },
      { icon: "✅", title: "Firing & Glazing", desc: "Bisque and glaze firing included, done on-site.", included: true },
      { icon: "✅", title: "Snack Break", desc: "A short snack break included for longer sessions.", included: true },
      { icon: "❌", title: "Parent Participation", desc: "Parents are welcome to watch but the class runs independently.", included: false },
      { icon: "❌", title: "Unsupervised Drop-off", desc: "Children must be signed in and picked up by a guardian.", included: false }
    ],
    reviews: [
      { name: "Neha Joshi (parent)", date: "March 2026", text: "My daughter talks about this every week. The instructors are so patient and genuinely good with kids." },
      { name: "Suresh Menon (parent)", date: "February 2026", text: "Great screen-free activity. My son made a little dinosaur bowl he's incredibly proud of." },
      { name: "Ritu Agarwal (parent)", date: "January 2026", text: "Well-organised, safe, and my kids actually ask to go back — that says it all." }
    ],
    sideBadges: [
      { icon: "🧸", title: "Kid Friendly", sub: "Ages 6 to 14" },
      { icon: "🛍️", title: "Take It Home", sub: "Keep everything they make" }
    ],
    relatedIds: ["beginner-pottery", "private-sessions", "studio-membership"]
  },

  {
    id: "corporate-events",
    image: "images/corporate-events.jpg",
    category: "Events", categoryClass: "", emoji: "🏢",
    badge: "Team Event", badgeClass: "badge-event",
    name: "Corporate Events",
    subtitle: "Unique team-building experiences in the studio. Customisable sessions for groups of 10 to 50+.",
    duration: "2–4 hrs", size: "10–50+", schedule: "By request", level: "All Levels",
    price: "Custom", pricePer: "pricing",
    rating: "4.9", reviewCount: 61,
    about: [
      "Corporate Events turn the studio into a hands-on team-building space. Groups work together on wheel-throwing challenges, collaborative sculpture, or individual keepsake projects — a refreshing break from the usual offsite formats.",
      "Every session is customised around your group size, time available, and goals, with multiple instructors on hand so nobody's left waiting around."
    ],
    experienceTitle: "How It Works",
    experience: [
      { icon: "💬", title: "Tell Us Your Goals", desc: "Share your group size, budget, and what you want out of the session." },
      { icon: "🧩", title: "We Customise the Session", desc: "We design a format — wheel throwing, hand-building, or a mix — to fit your group." },
      { icon: "🤝", title: "Team Creates Together", desc: "Guided instruction with multiple instructors keeps everyone hands-on and engaged." },
      { icon: "📦", title: "Pieces Fired & Delivered", desc: "We fire everyone's pieces and arrange collection or delivery to your office." }
    ],
    curriculumHeading: "Session Highlights",
    tabLabel: "Highlights",
    curriculumIntro: "Popular formats we build corporate sessions around — all fully customisable.",
    curriculum: [
      { title: "Icebreaker Wheel-throwing", desc: "A fun, low-pressure intro to the wheel that gets everyone laughing early." },
      { title: "Collaborative Sculpture Challenge", desc: "Small teams build one larger piece together, encouraging communication." },
      { title: "Team Vase or Mug Making", desc: "Everyone makes their own keepsake piece to take back to the office." },
      { title: "Guided Group Instruction", desc: "Multiple instructors rotate through tables so no one is left waiting." },
      { title: "Custom Branding Option", desc: "Add your company logo or initials as a stamped detail on each piece." },
      { title: "On-site or Off-site Setup", desc: "Host at our studio or we bring a mobile setup to your office." }
    ],
    includes: [
      { icon: "✅", title: "Dedicated Event Coordinator", desc: "One point of contact for planning and on-the-day logistics.", included: true },
      { icon: "✅", title: "All Materials & Tools", desc: "Clay, tools, and aprons provided for every participant.", included: true },
      { icon: "✅", title: "Multiple Instructors", desc: "Instructor ratio scaled to your group size.", included: true },
      { icon: "✅", title: "Firing & Packaging", desc: "All pieces fired and packaged for collection or delivery.", included: true },
      { icon: "✅", title: "Keepsake Certificate", desc: "A small memento marking the team event.", included: true },
      { icon: "❌", title: "Venue Rental Beyond Studio", desc: "Off-site setups may include an additional travel/rental fee.", included: false },
      { icon: "❌", title: "Catering", desc: "Food and beverages can be arranged separately on request.", included: false }
    ],
    reviews: [
      { name: "Ananya Krishnan, HR Lead", date: "March 2026", text: "Our team still talks about this offsite months later. Genuinely different from the usual escape-room team event." },
      { name: "Farhan Sheikh, Team Manager", date: "February 2026", text: "Smooth to organise, the coordinator handled everything, and 40 people were all hands-on within minutes." },
      { name: "Ishita Chatterjee, Founder", date: "January 2026", text: "Booked this for our small startup team and it was the best offsite we've done. Everyone left with a mug they made." }
    ],
    sideBadges: [
      { icon: "👥", title: "Group Friendly", sub: "10 to 50+ people" },
      { icon: "🛠️", title: "Fully Customised", sub: "Tailored to your team" }
    ],
    relatedIds: ["private-sessions", "studio-membership", "kiln-glazing"]
  },

  {
    id: "private-sessions",
    image: "images/privatesession.avif",
    category: "Classes", categoryClass: "", emoji: "🎯",
    badge: "1-on-1", badgeClass: "badge-popular",
    name: "Private Sessions",
    subtitle: "One-on-one tuition with a dedicated instructor. Ideal for fast progress, special occasions, or total beginners.",
    duration: "2 hrs", size: "1 person", schedule: "Flexible", level: "All Levels",
    price: "₹3,200", pricePer: "/ session",
    rating: "5.0", reviewCount: 87,
    about: [
      "Private Sessions give you a dedicated instructor's full attention for two hours, built entirely around your goals — whether that's fast-tracking a specific skill, working toward a special project, or just avoiding a group class altogether.",
      "Because the pace and focus are entirely yours, private sessions tend to move faster than group classes and are a favourite for special occasions like birthdays, date nights, and anniversaries."
    ],
    experienceTitle: "The Experience",
    experience: [
      { icon: "🗣️", title: "Share Your Goals", desc: "Tell your instructor what you want to learn or make before the session begins." },
      { icon: "🎓", title: "One-on-One Coaching", desc: "Get full attention and real-time correction throughout the entire session." },
      { icon: "🎯", title: "Focused Practice", desc: "Work at your own pace on exactly the technique or project you want." },
      { icon: "💬", title: "Personalised Feedback", desc: "Wrap up with feedback and tips to keep practicing what you've learned." }
    ],
    curriculumHeading: "What You Can Focus On",
    tabLabel: "Focus Areas",
    curriculumIntro: "Sessions are built around you — here's what most students choose to work on.",
    curriculum: [
      { title: "Personalised Curriculum Design", desc: "Your instructor plans the session around your specific goals." },
      { title: "Technique Deep-dives", desc: "Spend the full session mastering one skill, like centering or trimming." },
      { title: "Flexible Pace & Focus", desc: "No group to keep up with — move as fast or slow as you like." },
      { title: "Special Occasion Projects", desc: "Popular for birthdays, anniversaries, and date-night sessions." },
      { title: "One-on-one Troubleshooting", desc: "Get direct, immediate correction on whatever isn't working." },
      { title: "Portfolio-building Guidance", desc: "Ideal for students preparing a body of work or a specific piece." }
    ],
    includes: [
      { icon: "✅", title: "Dedicated Instructor", desc: "One instructor, fully focused on you for the entire session.", included: true },
      { icon: "✅", title: "Flexible Scheduling", desc: "Book a time that works for you, including evenings.", included: true },
      { icon: "✅", title: "All Materials", desc: "Clay and tools included for wheel or hand-building work.", included: true },
      { icon: "✅", title: "Firing Included", desc: "Bisque and glaze firing included for one piece.", included: true },
      { icon: "✅", title: "Complimentary Refreshments", desc: "Tea, coffee, or a light refreshment during your session.", included: true },
      { icon: "❌", title: "Group Discounts", desc: "Private sessions are priced per person, not per group.", included: false },
      { icon: "❌", title: "Fixed Schedule", desc: "Session times are booked individually, not on a set calendar.", included: false }
    ],
    reviews: [
      { name: "Tanvi Shah", date: "March 2026", text: "Booked this for my anniversary and it was such a lovely, different kind of date. The instructor made it feel effortless." },
      { name: "Aman Verma", date: "February 2026", text: "I wanted to focus specifically on trimming technique and the instructor built the whole session around that. Exactly what I needed." },
      { name: "Pooja Nambiar", date: "January 2026", text: "Worth every rupee if you're serious about improving quickly. Way more progress in two hours than a month of group classes." }
    ],
    sideBadges: [
      { icon: "🎯", title: "1-on-1 Focus", sub: "Dedicated instructor" },
      { icon: "🛍️", title: "Take It Home", sub: "Keep everything you make" }
    ],
    relatedIds: ["wheel-throwing", "advanced-ceramics", "studio-membership"]
  },

  {
    id: "kiln-glazing",
    image: "images/kiln-glazing.jpg",
    category: "Studio", categoryClass: "", emoji: "🔥",
    badge: "Studio Add-on", badgeClass: "badge-studio",
    name: "Kiln Firing & Glazing",
    subtitle: "Bring your own bisque or green ware. We glaze, fire, and return finished pieces within 5 working days.",
    duration: "5 days", size: "Drop-off", schedule: "Anytime", level: "Any Level",
    price: "₹600", pricePer: "/ piece",
    rating: "4.8", reviewCount: 73,
    about: [
      "Made something at home, in another studio, or in a class elsewhere? Our Kiln Firing & Glazing service takes your greenware or bisque pieces through professional glazing and high-fire kiln firing, without needing your own equipment.",
      "Drop off your piece any time during studio hours, choose from our glaze palette, and we'll have it fired and ready for collection within 5 working days."
    ],
    experienceTitle: "How It Works",
    experience: [
      { icon: "📦", title: "Drop Off Your Piece", desc: "Bring in your greenware or bisque-fired piece during any open studio hour." },
      { icon: "🎨", title: "We Inspect & Glaze", desc: "Choose a glaze from our palette; we check for cracks and apply it evenly." },
      { icon: "🔥", title: "Kiln Firing", desc: "Your piece goes through a full high-fire stoneware firing cycle." },
      { icon: "🔔", title: "Ready for Collection", desc: "We notify you as soon as your finished piece is ready, within 5 working days." }
    ],
    curriculumHeading: "The Firing Process",
    tabLabel: "The Process",
    curriculumIntro: "A professional finishing service for pieces made outside our studio.",
    curriculum: [
      { title: "Bisque Firing Service", desc: "For greenware pieces that haven't been bisque fired yet." },
      { title: "Glaze Application", desc: "Choose from a palette of 20+ glaze colours and finishes." },
      { title: "High-fire Stoneware Firing", desc: "Full kiln cycle to properly vitrify and finish your piece." },
      { title: "Quality Inspection", desc: "We check each piece for structural issues before firing." },
      { title: "Careful Handling & Packaging", desc: "Pieces are handled and stored carefully throughout the process." },
      { title: "5-day Turnaround", desc: "Most pieces are ready for collection within 5 working days." }
    ],
    includes: [
      { icon: "✅", title: "Bisque or Glaze Firing", desc: "Whichever stage your piece needs, we handle it.", included: true },
      { icon: "✅", title: "Glaze Application", desc: "Applied by hand from our in-studio glaze palette.", included: true },
      { icon: "✅", title: "Quality Check", desc: "Pieces are inspected for cracks or weak points before firing.", included: true },
      { icon: "✅", title: "SMS Notification", desc: "You'll get a message as soon as your piece is ready.", included: true },
      { icon: "❌", title: "Clay or Greenware", desc: "You'll need to bring your own piece — clay isn't included.", included: false },
      { icon: "❌", title: "Repairs to Cracked Pieces", desc: "Pieces with existing structural damage can't be guaranteed through firing.", included: false }
    ],
    reviews: [
      { name: "Deepak Iyer", date: "March 2026", text: "Made a few pieces at a friend's studio and brought them here to fire. Fast turnaround and the glaze finish looked great." },
      { name: "Shalini Rao", date: "February 2026", text: "Great glaze selection and everything came back exactly on schedule. Will use this again for my home projects." },
      { name: "Nikhil Ghosh", date: "January 2026", text: "Reasonably priced and the staff were happy to advise on which glaze would suit my piece best." }
    ],
    sideBadges: [
      { icon: "🔥", title: "Pro Firing", sub: "High-fire stoneware kiln" },
      { icon: "⏱️", title: "5-day Turnaround", sub: "Ready fast" }
    ],
    relatedIds: ["wheel-throwing", "advanced-ceramics", "private-sessions"]
  }
];

function getServiceIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findService(id) {
  return SERVICES.find(s => s.id === id) || SERVICES[0];
}

function categoryClassFor(category) {
  const map = {
    "Classes": "cat-classes",
    "Membership": "cat-membership",
    "Events": "cat-events",
    "Studio": "cat-studio"
  };
  return map[category] || "cat-classes";
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderService(service) {
  const catClass = categoryClassFor(service.category);

  // Title / meta
  document.title = `${service.name} – ClayCraft Pottery Studio`;
  document.getElementById("detail-breadcrumb-name").textContent = service.name;
  document.getElementById("detail-category").textContent = service.category;
  document.getElementById("detail-category").className = "detail-category-pill " + (service.categoryClass || "");
  const badgeEl = document.getElementById("detail-badge");
  badgeEl.textContent = service.badge;
  badgeEl.className = "detail-badge " + service.badgeClass;
  document.getElementById("detail-title").innerHTML = service.name;
  document.getElementById("detail-subtitle").textContent = service.subtitle;

  document.getElementById("meta-dur-val").textContent = service.duration;
  document.getElementById("meta-size").textContent = service.size;
  document.getElementById("meta-schedule").textContent = service.schedule;
  document.getElementById("meta-level").textContent = service.level;

  document.getElementById("detail-price").textContent = service.price;
  document.getElementById("detail-price-per").textContent = service.pricePer;
  document.getElementById("detail-rating-text").innerHTML =
    `${service.rating} / 5 from <strong>${service.reviewCount}+ reviews</strong>`;

  document.getElementById("sidebar-price").textContent = service.price;
  document.getElementById("sidebar-per").textContent = service.pricePer;
  document.getElementById("booking-rating").textContent = `★ ${service.rating} (${service.reviewCount})`;

  // Hero image (real photo, falls back to a category-coloured gradient if the file is missing)
  const visualCard = document.getElementById("detail-visual-card");
  visualCard.classList.add(catClass);
  visualCard.style.backgroundImage = `url('${service.image}')`;

  // Side badges
  const [badge1, badge2] = service.sideBadges;
  if (badge1) {
    document.getElementById("side-badge-icon-1").textContent = badge1.icon;
    document.getElementById("side-badge-title-1").textContent = badge1.title;
    document.getElementById("side-badge-sub-1").textContent = badge1.sub;
  }
  if (badge2) {
    document.getElementById("side-badge-icon-2").textContent = badge2.icon;
    document.getElementById("side-badge-title-2").textContent = badge2.title;
    document.getElementById("side-badge-sub-2").textContent = badge2.sub;
  }

  // Gallery strip (single full-width photo — reuses the same image as the hero)
  const gallery = document.getElementById("gallery-strip");
  gallery.innerHTML = "";
  const galleryImg = el("div", `gallery-img ${catClass}`);
  galleryImg.style.backgroundImage = `url('${service.image}')`;
  gallery.appendChild(galleryImg);

  // About
  document.getElementById("service-about-1").textContent = service.about[0] || "";
  document.getElementById("service-about-2").textContent = service.about[1] || "";

  // Experience
  const expHeading = document.querySelector("#tab-overview .content-block:nth-child(2) .content-h2");
  if (expHeading) expHeading.innerHTML = highlightLastWord(service.experienceTitle);
  const expGrid = document.getElementById("experience-grid");
  expGrid.innerHTML = "";
  service.experience.forEach(step => {
    const card = el("div", "process-card-detail", `
      <div class="process-icon-detail">${step.icon}</div>
      <h4>${step.title}</h4>
      <p>${step.desc}</p>
    `);
    expGrid.appendChild(card);
  });

  // Curriculum / highlights
  document.getElementById("tab-btn-curriculum").textContent = service.tabLabel;
  document.getElementById("curriculum-heading").innerHTML = highlightLastWord(service.curriculumHeading);
  document.getElementById("curriculum-intro").textContent = service.curriculumIntro;
  const curriculumList = document.getElementById("curriculum-list");
  curriculumList.innerHTML = "";
  service.curriculum.forEach((item, i) => {
    const row = el("div", "curriculum-item", `
      <div class="curriculum-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="curriculum-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `);
    curriculumList.appendChild(row);
  });

  // Includes
  const includesGrid = document.getElementById("includes-grid");
  includesGrid.innerHTML = "";
  service.includes.forEach(item => {
    const card = el("div", `includes-card ${item.included ? "included" : "not-included"}`, `
      <span class="includes-icon">${item.icon}</span>
      <div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `);
    includesGrid.appendChild(card);
  });

  // Reviews
  document.getElementById("reviews-big-num").textContent = service.rating;
  document.getElementById("reviews-count").textContent = `from ${service.reviewCount} reviews`;
  const reviewsList = document.getElementById("reviews-list");
  reviewsList.innerHTML = "";
  service.reviews.forEach(r => {
    const initial = r.name.trim().charAt(0).toUpperCase();
    const card = el("div", "review-card", `
      <div class="review-header">
        <div class="review-avatar">${initial}</div>
        <div class="review-meta">
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars">★★★★★</div>
      </div>
      <p class="review-body">"${r.text}"</p>
    `);
    reviewsList.appendChild(card);
  });

  // Related (sidebar)
  const relatedServices = service.relatedIds
    .map(id => SERVICES.find(s => s.id === id))
    .filter(Boolean);

  const sidebarList = document.getElementById("related-sidebar-list");
  sidebarList.innerHTML = "";
  relatedServices.forEach(rs => {
    const item = el("a", "related-item", `
      <span class="related-emoji">${rs.emoji}</span>
      <div>
        <div class="related-name">${rs.name}</div>
        <div class="related-price">${rs.price} ${rs.pricePer}</div>
      </div>
      <span class="related-arrow">→</span>
    `);
    item.href = `service-detail.html?id=${rs.id}`;
    sidebarList.appendChild(item);
  });

  // Related (bottom grid)
  const bottomGrid = document.getElementById("related-grid-bottom");
  bottomGrid.innerHTML = "";
  relatedServices.forEach(rs => {
    const rsCatClass = categoryClassFor(rs.category);
    const card = el("a", "related-service-card", `
      <div class="rsc-thumb ${rsCatClass}" style="background-image:url('${rs.image}'); background-size:cover; background-position:center;"></div>
      <div class="rsc-body">
        <span class="rsc-cat">${rs.category}</span>
        <h4>${rs.name}</h4>
        <div class="rsc-price">${rs.price} ${rs.pricePer}</div>
      </div>
    `);
    card.href = `service-detail.html?id=${rs.id}`;
    bottomGrid.appendChild(card);
  });
}

function highlightLastWord(text) {
  const words = text.trim().split(" ");
  const last = words.pop();
  return `${words.join(" ")} <em>${last}</em>`;
}

function initTabs() {
  const tabs = document.querySelectorAll(".dtab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      const panel = document.getElementById(`tab-${tab.dataset.tab}`);
      if (panel) panel.classList.add("active");
    });
  });
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(elm => elm.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(elm => observer.observe(elm));
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getServiceIdFromURL();
  const service = findService(id);
  renderService(service);
  initTabs();
  initReveal();
});
