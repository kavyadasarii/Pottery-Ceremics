const MOON_ICON = "<svg class=\"icon\" viewBox=\"0 0 24 24\"><path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/></svg>";
const SUN_ICON = "<svg class=\"icon\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/></svg>";

const now = new Date();
document.getElementById('todayDate').textContent =
  now.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
document.getElementById('todayDay').textContent =
  now.toLocaleDateString('en-IN',{weekday:'long',year:'numeric'});

const titles = {
  overview:      ['Admin Dashboard',           'Welcome back — here\'s what\'s happening at TerraKiln today.'],
  bookings:      ['Bookings',                  'Manage reservations, approvals and cancellations.'],
  students:      ['Student Directory',         'View and manage all enrolled students.'],
  classes:       ['Class Management',          'All active and upcoming classes at TerraKiln.'],
  schedule:      ['Today\'s Schedule',         'Sessions and instructor availability for today.'],
  inventory:     ['Studio Inventory',          'Clay, glazes, tools and equipment tracking.'],
  revenue:       ['Revenue & Finance',         'Earnings, invoices and payment status.'],
  notifications: ['Notifications',             'Booking alerts, reviews and studio updates.'],
  profile:       ['My Profile',                'Manage your account information and password.'],
  settings:      ['Settings',                  'Dashboard preferences and studio configuration.'],
};

function showSection(name){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('sec-'+name).classList.add('active');

  const t = titles[name]||[name,''];
  document.getElementById('pageTitle').textContent    = t[0];
  document.getElementById('pageSubtitle').textContent = t[1];

  document.querySelectorAll('.nav-item').forEach(ni=>{
    if(ni.getAttribute('onclick')===`showSection('${name}')`)
      ni.classList.add('active');
  });
  closeMobileMenu();
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function openMobileMenu(){
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('mobOverlay').classList.add('show');
}
function closeMobileMenu(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('mobOverlay').classList.remove('show');
}

let dark = localStorage.getItem('theme')==='dark';
if(dark) document.body.classList.add('dark-mode');
function toggleDark(){
  dark=!dark;
  document.body.classList.toggle('dark-mode',dark);
  document.getElementById('themeToggle').innerHTML = dark?SUN_ICON:MOON_ICON;
  localStorage.setItem('theme',dark?'dark':'light');
}
if(dark) document.getElementById('themeToggle').innerHTML=SUN_ICON;

let rtl = localStorage.getItem('direction')==='rtl';
function applyRTL(){
  document.documentElement.setAttribute('dir', rtl?'rtl':'ltr');
  document.body.classList.toggle('rtl-mode', rtl);
  const btn = document.getElementById('rtlToggle');
  if(btn) btn.classList.toggle('active', rtl);
}
function toggleRTL(){
  rtl=!rtl;
  localStorage.setItem('direction', rtl?'rtl':'ltr');
  applyRTL();
}
applyRTL();

function handleLogout(){
  document.getElementById('logoutModal').style.display='flex';
}

function buildChart(containerId, labelId, data, labels){
  const max=Math.max(...data);
  const c=document.getElementById(containerId);
  const l=document.getElementById(labelId);
  if(!c||!l)return;
  c.innerHTML='';l.innerHTML='';
  data.forEach((v,i)=>{
    const wrap=document.createElement('div');
    wrap.className='chart-bar';
    wrap.style.flex='1';
    const fill=document.createElement('div');
    fill.className='chart-bar-inner';
    fill.style.height='0%';
    wrap.appendChild(fill);
    c.appendChild(wrap);
    setTimeout(()=>fill.style.height=((v/max)*100)+'%',100+i*60);
    const span=document.createElement('span');
    span.style.flex='1';span.style.textAlign='center';
    span.style.fontSize='0.62rem';span.style.color='var(--muted)';
    span.textContent=labels[i];
    l.appendChild(span);
  });
}

buildChart('revenueChart','revenueLabels',
  [18000,22000,19500,27000,24000,31000,28000],
  ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);

buildChart('monthlyChart','monthlyLabels',
  [120000,134000,118000,155000,142000,168000,184000],
  ['Sep','Oct','Nov','Dec','Jan','Feb','Mar']);

const students=[
  {n:'Priya Nair',   c:'Wheel Throwing – Adv',  p:82, av:'PN'},
  {n:'Rohit Mehta',  c:'Beginner Pottery',        p:100,av:'RM'},
  {n:'Asha Reddy',   c:'Kids Workshop',           p:45, av:'AR'},
  {n:'Kiran Patel',  c:'Advanced Ceramics',       p:67, av:'KP'},
  {n:'Meena Iyer',   c:'Private Sessions',        p:90, av:'MI'},
  {n:'Vijay Kumar',  c:'Kiln & Glazing',          p:30, av:'VK'},
  {n:'Sneha Joshi',  c:'Studio Membership',       p:55, av:'SJ'},
  {n:'Divya Menon',  c:'Beginner Pottery (Wait)', p:0,  av:'DM'},
];
const sl=document.getElementById('studentList');
if(sl){
  students.forEach(s=>{
    const row=document.createElement('div');
    row.className='student-row';
    row.innerHTML=`
      <div class="student-av">${s.av}</div>
      <div><div class="student-name">${s.n}</div><div class="student-course">${s.c}</div></div>
      <div class="student-progress">${s.p}% <div style="width:60px;height:6px;background:var(--primary-light);border-radius:3px;overflow:hidden;margin-left:6px"><div style="width:${s.p}%;height:100%;background:var(--primary);border-radius:3px;transition:width 0.8s"></div></div></div>
    `;
    sl.appendChild(row);
  });
}
