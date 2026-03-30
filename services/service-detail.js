const SERVICES = {
  'beginner-pottery': {
    title: 'Beginner Pottery',
    subtitle: 'Start your clay journey with hand-building, basic forms, and surface decoration in a warm, relaxed environment.',
    category: 'Classes', badge: 'Most Popular', emoji: '🏺', visualClass: 'vc-warm',
    price: '₹1,200', pricePer: '/ session', duration: '2 hrs', size: 'Max 10', schedule: 'Daily', level: 'Beginner',
    about1: 'Whether you\'ve never touched clay before or want to revisit the basics, our Beginner Pottery class is the perfect starting point. Over 2 guided hours, you\'ll learn the fundamentals of hand-building techniques and leave with a piece you\'ve made entirely from scratch.',
    about2: 'Our instructors create a relaxed, supportive atmosphere — mistakes are part of the process, and every "imperfect" piece has its own charm. Many of our most advanced students started right here.',
    sideBadge1Title: 'Expert Led', sideBadge1Sub: 'Certified instructors', sideBadge1Icon: '🏅',
  },
  'wheel-throwing': {
    title: 'Wheel Throwing',
    subtitle: 'Get hands-on with the potter\'s wheel. Create bowls, mugs, and vases with centering and pulling techniques.',
    category: 'Classes', badge: 'Intermediate', emoji: '🎡', visualClass: 'vc-green',
    price: '₹1,800', pricePer: '/ session', duration: '3 hrs', size: 'Max 8', schedule: 'Weekdays', level: 'Intermediate',
    about1: 'The potter\'s wheel is one of the most iconic and satisfying tools in ceramics. In this 3-hour session you\'ll learn to centre clay, open a floor, and pull walls upward to create functional forms — bowls, mugs, cylinders, and small vases.',
    about2: 'Wheel throwing requires patience and a bit of muscle memory, but our instructors break it down step by step so that even first-timers leave having thrown their first real vessel.',
    sideBadge1Title: 'Wheel Provided', sideBadge1Sub: 'Electric potter\'s wheel', sideBadge1Icon: '⚙️',
  },
  'advanced-ceramics': {
    title: 'Advanced Ceramics',
    subtitle: 'Explore complex glazing, kiln techniques, and sculptural forms. Push your creative boundaries.',
    category: 'Classes', badge: 'Advanced', emoji: '🎨', visualClass: 'vc-purple',
    price: '₹2,500', pricePer: '/ session', duration: '4 hrs', size: 'Max 6', schedule: 'Weekends', level: 'Advanced',
    about1: 'For students ready to push beyond the basics, our Advanced Ceramics sessions explore complex glazing chemistry, atmospheric firing effects, and sculptural construction techniques that open up an entirely new creative vocabulary.',
    about2: 'With a maximum of only 6 students, this is a focused, intimate class. Your instructor will work closely with you to develop your personal aesthetic and refine the technical skills that take pottery to the next level.',
    sideBadge1Title: 'Small Group', sideBadge1Sub: 'Maximum 6 students', sideBadge1Icon: '🎓',
  },
  'studio-membership': {
    title: 'Studio Membership',
    subtitle: 'Unlimited open studio access, priority booking, member discounts, and exclusive monthly workshops.',
    category: 'Membership', badge: 'Best Value', emoji: '🎟️', visualClass: 'vc-clay',
    price: '₹4,999', pricePer: '/ month', duration: 'Unlimited', size: 'Members only', schedule: 'Anytime', level: 'All levels',
    about1: 'The ClayCraft Studio Membership is for people who want to make pottery a real part of their life. Unlimited open studio access means you can come in, get your hands dirty, and work on your own projects whenever inspiration strikes.',
    about2: 'Members also get 20% off all class bookings, priority access to limited-seat workshops, and an exclusive monthly members-only masterclass with a guest ceramicist. It\'s the most affordable way to develop a serious practice.',
    sideBadge1Title: 'Priority Access', sideBadge1Sub: 'Book before non-members', sideBadge1Icon: '⭐',
  },
  'kids-workshop': {
    title: 'Kids Workshop',
    subtitle: 'A fun, safe, and imaginative space for children aged 6–14 to explore creativity through clay.',
    category: 'Classes', badge: 'Ages 6–14', emoji: '🧒', visualClass: 'vc-coral',
    price: '₹900', pricePer: '/ session', duration: '90 min', size: 'Max 12', schedule: 'Saturdays', level: 'Kids',
    about1: 'Designed specifically for young makers, our Saturday Kids Workshop gives children the freedom to explore clay in a safe, joyful environment. They\'ll make pinch pots, sculpt animals, and decorate their pieces with stamps and hand-painted slip.',
    about2: 'All our kids sessions are led by DBS-checked instructors experienced in working with children. Parents are welcome to wait in our cosy studio lounge, or join in for an extra ₹400!',
    sideBadge1Title: 'DBS Checked', sideBadge1Sub: 'Child-safe instructors', sideBadge1Icon: '🛡️',
  },
  'corporate-events': {
    title: 'Corporate Events',
    subtitle: 'Unforgettable team-building pottery experiences, fully customisable for groups of 10 to 50+.',
    category: 'Events', badge: 'Team Event', emoji: '🏢', visualClass: 'vc-dark',
    price: 'Custom', pricePer: 'pricing', duration: '2–4 hrs', size: '10–50+', schedule: 'By request', level: 'All levels',
    about1: 'Step away from the boardroom and into the studio. Our Corporate Pottery Events are a genuinely unique and memorable team activity — funny, creative, relaxing, and surprisingly competitive when the wheel starts spinning.',
    about2: 'We handle everything: setup, materials, firing, and even catering on request. You just show up and get your hands dirty. Sessions are fully customisable and can be held in our studio or at your venue.',
    sideBadge1Title: 'We Come to You', sideBadge1Sub: 'Mobile studio available', sideBadge1Icon: '🚐',
  },
  'private-sessions': {
    title: 'Private Sessions',
    subtitle: 'One-on-one tuition with a dedicated instructor. Ideal for fast progress, special occasions, or total beginners.',
    category: 'Classes', badge: '1-on-1', emoji: '🎯', visualClass: 'vc-warm2',
    price: '₹3,200', pricePer: '/ session', duration: '2 hrs', size: '1 person', schedule: 'Flexible', level: 'Any level',
    about1: 'Want to make the fastest progress possible? A Private Session gives you the undivided attention of one of our expert instructors. Whether you\'re a beginner wanting a solid foundation or an intermediate student stuck on a specific technique, this is the fastest way to level up.',
    about2: 'Private sessions are also a beautiful gift idea — for a birthday, anniversary, or hen/stag do. The timeslot is flexible and bookable 7 days a week.',
    sideBadge1Title: 'Dedicated Tutor', sideBadge1Sub: 'Your own instructor', sideBadge1Icon: '👩‍🏫',
  },
  'kiln-glazing': {
    title: 'Kiln Firing & Glazing',
    subtitle: 'Drop off your bone-dry or bisque-fired pieces and we\'ll glaze, fire, and return them in 5 working days.',
    category: 'Studio', badge: 'Studio Add-on', emoji: '🔥', visualClass: 'vc-fire',
    price: '₹600', pricePer: '/ piece', duration: '5 working days', size: 'Drop-off', schedule: 'Anytime', level: 'Any',
    about1: 'Already have pieces at home that need firing? Our Kiln Firing & Glazing service is available to all — you don\'t need to have made the piece at ClayCraft. Drop off your bone-dry or already bisqued work and our studio team will handle the rest.',
    about2: 'We offer glaze selection consultations so your piece gets the colour and finish you envision. Pieces are typically returned within 5 working days, fully finished and ready to display or use.',
    sideBadge1Title: 'On-site Kiln', sideBadge1Sub: 'No external outsourcing', sideBadge1Icon: '🏭',
  },
};

async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    console.warn(`Could not load component: ${path}`, e);
  }
}

Promise.all([
  loadComponent('navbar-placeholder', '../components/navbar.html'),
  loadComponent('footer-placeholder', '../components/footer.html')
]).then(() => {
  if (typeof initNavbar === 'function') initNavbar();
  initReveal();
});

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(r => io.observe(r));
}

function populatePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'beginner-pottery';
  const svc = SERVICES[id] || SERVICES['beginner-pottery'];

  const breadcrumbName = document.getElementById('detail-breadcrumb-name');
  if (breadcrumbName) breadcrumbName.textContent = svc.title;

  document.getElementById('detail-title').textContent = svc.title;
  document.getElementById('detail-subtitle').textContent = svc.subtitle;
  document.title = `${svc.title} – ClayCraft Pottery Studio`;

  document.getElementById('detail-category').textContent = svc.category;
  document.getElementById('detail-badge').textContent = svc.badge;

  document.getElementById('meta-dur-val').textContent = svc.duration;
  document.getElementById('meta-size').textContent = svc.size;
  document.getElementById('meta-schedule').textContent = svc.schedule;
  document.getElementById('meta-level').textContent = svc.level;

  document.getElementById('detail-price').textContent = svc.price;
  document.getElementById('detail-price-per').textContent = svc.pricePer;
  document.getElementById('sidebar-price').textContent = svc.price;
  document.getElementById('sidebar-per').textContent = svc.pricePer;

  document.getElementById('detail-visual-emoji').textContent = svc.emoji;
  const vc = document.getElementById('detail-visual-card');
  if (vc) {
    vc.className = vc.className.replace(/vc-\w+/g, '').trim();
    vc.classList.add(svc.visualClass);
  }

  const sbi1 = document.getElementById('side-badge-icon-1');
  const sbt1 = document.getElementById('side-badge-title-1');
  const sbs1 = document.getElementById('side-badge-sub-1');
  if (sbi1) sbi1.textContent = svc.sideBadge1Icon;
  if (sbt1) sbt1.textContent = svc.sideBadge1Title;
  if (sbs1) sbs1.textContent = svc.sideBadge1Sub;

  const a1 = document.getElementById('service-about-1');
  const a2 = document.getElementById('service-about-2');
  if (a1) a1.textContent = svc.about1;
  if (a2) a2.textContent = svc.about2;

  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

function initTabs() {
  const tabs = document.querySelectorAll('.dtab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populatePage();
  initTabs();
  initReveal();
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
