// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const THEME_KEY = 'portfolio-theme';

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem(THEME_KEY, theme);
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

(function() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) setTheme(savedTheme);
})();

// Scroll to top button
// const scrollBtn = document.getElementById('scrollToTop');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     scrollBtn.style.display = 'block';
//   } else {
//     scrollBtn.style.display = 'none';
//   }
// });
// scrollBtn.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// Contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Contact Modal Logic
const showContactBtn = document.getElementById('show-contact-form');
const contactModal = document.getElementById('contact-modal');
const contactModalClose = document.querySelector('.contact-modal-close');
const contactFormInModal = contactModal ? contactModal.querySelector('.contact-form') : null;

if (showContactBtn && contactModal && contactModalClose && contactFormInModal) {
  showContactBtn.addEventListener('click', function() {
    contactModal.classList.add('show');
    contactFormInModal.classList.add('show');
  });
  contactModalClose.addEventListener('click', function() {
    contactModal.classList.remove('show');
    contactFormInModal.classList.remove('show');
  });
  window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
      contactModal.classList.remove('show');
      contactFormInModal.classList.remove('show');
    }
  });
}

// Resume Modal Logic
const viewResumeBtn = document.getElementById('view-interactive-resume');
const resumeModal = document.getElementById('resume-modal');
const resumeModalClose = document.querySelector('.resume-modal-close');

if (viewResumeBtn && resumeModal && resumeModalClose) {
  viewResumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resumeModal.classList.add('show');
  });
  resumeModalClose.addEventListener('click', function() {
    resumeModal.classList.remove('show');
  });
  window.addEventListener('click', function(event) {
    if (event.target === resumeModal) {
      resumeModal.classList.remove('show');
    }
  });
}

// Project Modal Logic
const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'A personal portfolio website to showcase my work and skills.',
    features: ['Responsive design', 'Animated sections', 'Contact form'],
    github: 'https://github.com/your-github/portfolio',
    screenshots: ['projects/web1.png']
  },
  {
    id: 2,
    title: 'E-commerce App',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack e-commerce application with user authentication and payment integration.',
    features: ['Product catalog', 'Cart & checkout', 'Order history'],
    github: 'https://github.com/your-github/ecommerce',
    screenshots: ['projects/web2.png']
  },
  {
    id: 3,
    title: 'Blog Platform',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    description: 'A blogging platform with user accounts and rich text editing.',
    features: ['User registration', 'Rich text editor', 'Comment system'],
    github: 'https://github.com/your-github/blog',
    screenshots: ['projects/web3.png']
  },
  {
    id: 4,
    title: 'Brand Logo Design',
    tags: ['Illustrator', 'Branding'],
    description: 'Professional logo design for a new brand identity.',
    features: ['Vector design', 'Brand guidelines'],
    github: 'https://github.com/your-github/brand-logo',
    screenshots: ['projects/graphic1.png']
  },
  {
    id: 5,
    title: 'Social Media Kit',
    tags: ['Photoshop', 'Marketing'],
    description: 'A set of social media templates for marketing campaigns.',
    features: ['Editable PSDs', 'Multiple platforms'],
    github: 'https://github.com/your-github/social-media-kit',
    screenshots: ['projects/graphic2.png']
  }
];

const projectModal = document.getElementById('project-modal');
const projectModalClose = document.querySelector('.project-modal-close');
const moreAboutBtns = document.querySelectorAll('.more-about-project');

function openProjectModal(projectId) {
  const project = projectData.find(p => p.id == projectId);
  if (!project) return;
  document.getElementById('modal-project-title').textContent = project.title;
  const tagsDiv = document.getElementById('modal-project-tags');
  tagsDiv.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join(' ');
  document.getElementById('modal-project-description').textContent = project.description;
  const featuresUl = document.getElementById('modal-project-features');
  featuresUl.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  const screenshotsDiv = document.getElementById('modal-project-screenshots');
  screenshotsDiv.innerHTML = project.screenshots.map(src => `<img src="${src}" alt="${project.title} screenshot" style="max-width:120px;margin:0.3rem;border-radius:8px;box-shadow:0 2px 8px #ccc;">`).join('');
  const githubBtn = document.getElementById('modal-project-github');
  githubBtn.href = project.github;
  projectModal.classList.add('show');
}

moreAboutBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    openProjectModal(this.getAttribute('data-project'));
  });
});
if (projectModalClose) {
  projectModalClose.addEventListener('click', function() {
    projectModal.classList.remove('show');
  });
}
window.addEventListener('click', function(event) {
  if (event.target === projectModal) {
    projectModal.classList.remove('show');
  }
});

// Certificate Modal Logic
const certData = [
  {
    id: 1,
    title: 'Full Stack Web Dev',
    file: 'certificates/fullstack.pdf',
    download: 'certificates/fullstack.pdf'
  },
  {
    id: 2,
    title: 'AI Prompt Engineering',
    file: 'certificates/ai-prompt.pdf',
    download: 'certificates/ai-prompt.pdf'
  },
  {
    id: 3,
    title: 'Business Development',
    file: 'certificates/business-dev.pdf',
    download: 'certificates/business-dev.pdf'
  }
];
const certificateModal = document.getElementById('certificate-modal');
const certificateModalClose = document.querySelector('.certificate-modal-close');
const viewCertBtns = document.querySelectorAll('.view-certificate');
function openCertificateModal(certId) {
  const cert = certData.find(c => c.id == certId);
  if (!cert) return;
  document.getElementById('modal-cert-title').textContent = cert.title;
  document.getElementById('modal-cert-frame').src = cert.file;
  const downloadBtn = document.getElementById('modal-cert-download');
  downloadBtn.href = cert.download;
  certificateModal.classList.add('show');
}
viewCertBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    openCertificateModal(this.getAttribute('data-cert'));
  });
});
if (certificateModalClose) {
  certificateModalClose.addEventListener('click', function() {
    certificateModal.classList.remove('show');
  });
}
window.addEventListener('click', function(event) {
  if (event.target === certificateModal) {
    certificateModal.classList.remove('show');
  }
});

// AI Chatbot Logic
const chatbotFab = document.getElementById('chatbot-fab');
const chatbotModal = document.getElementById('chatbot-modal');
const chatbotModalClose = document.querySelector('.chatbot-modal-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotChatArea = document.getElementById('chatbot-chat-area');

const chatbotQA = [
  { q: 'Hi', a: 'Hello! 👋 How can I help you today?' },
  { q: 'Hello', a: 'Hi there! 😊 Welcome to my portfolio.' },
  { q: 'Hey', a: 'Hey! Nice to see you here.' },
  { q: 'Who are you?', a: 'I\'m your virtual guide here. I\'m Harshit\'s personal assistant—ask me anything about him!' },
  { q: 'How are you?', a: 'I’m doing great, thank you! Hope you\'re having an awesome day too. 🌟' },
  { q: 'What can you do?', a: 'I can tell you about Harshit’s skills, projects, certifications, contact details, and more. Just ask! 💬' },
  { q: 'Are you a real person?', a: 'Nope, I’m a chatbot built to help you explore Harshit Chauhan’s portfolio. But I try my best to keep it real. 😉' },
  { q: 'Tell me about Harshit', a: 'Harshit Chauhan is a passionate developer skilled in frontend, backend, database, and designing. He\'s worked on various real-world projects and is constantly leveling up.' },
  { q: 'Can you help me contact Harshit?', a: 'Absolutely! Click the "Get in Touch" button in the contact section to send him a message. 📬' },
  { q: 'Can I see his resume?', a: 'Yes! You can view or download Harshit’s resume from the “About Me” section. Just click on "View Resume".' },

  // Core skills and tech
  { q: 'What are your core skills?', a: 'My core skills include Frontend Development, Backend Development, Database Management, and UI Designing.' },
  { q: 'Are you a frontend or backend developer?', a: 'I\'m a Full Stack Developer, but I specialize more in Frontend technologies like ReactJS.' },
  { q: 'What frontend technologies do you use?', a: 'I work with HTML, CSS, JavaScript, and ReactJS for building responsive and interactive UIs.' },
  { q: 'Do you work with ReactJS?', a: 'Yes, ReactJS is one of my primary frameworks for frontend development.' },
  { q: 'Which backend technologies do you know?', a: 'I use Node.js, Express, PHP, and Laravel for backend development.' },
  { q: 'Do you use PHP or Laravel?', a: 'Yes, I have experience working with both PHP and the Laravel framework.' },
  { q: 'Are you familiar with Node.js and Express?', a: 'Absolutely, I use Node.js with Express for building RESTful APIs and backend services.' },
  { q: 'What databases have you worked with?', a: 'I’ve worked with MongoDB for NoSQL and MySQL for relational data storage.' },
  { q: 'Do you know MongoDB?', a: 'Yes, I use MongoDB with Mongoose in full-stack applications.' },
  { q: 'Are you comfortable with MySQL?', a: 'Yes, I’ve used MySQL for many PHP-based and backend projects.' },
  { q: 'Do you have experience with Figma or Canva?', a: 'Yes, I use Figma for UI/UX design and Canva for graphics and content creation.' },
  { q: 'Can you design user interfaces?', a: 'Yes, I design clean and modern interfaces using Figma.' },
  { q: 'How many programming languages do you know?', a: 'I work with JavaScript, PHP, and a bit of Python.' },
  { q: 'Do you work with APIs?', a: 'Yes, I integrate third-party APIs and also build custom REST APIs.' },

  // Projects
  { q: 'What projects have you built?', a: 'I’ve built a Code Editor, Gemini AI Chatbot clone, and a full-fledged E-commerce site.' },
  { q: 'Can I see your e-commerce website?', a: 'Yes, you can view it in the Projects section under the title “E-commerce Platform.”' },
  { q: 'Tell me about your frontend code editor project.', a: 'It\'s a live code playground built using HTML, CSS, and JavaScript, named “Code Master.”' },
  { q: 'What is the Gemini clone you made?', a: 'It’s a ChatGPT-like chatbot built using ReactJS and Gemini API.' },
  { q: 'Did you use React in your projects?', a: 'Yes, ReactJS powers most of my frontend projects.' },
  { q: 'Can I try your projects live?', a: 'Yes, each project has a “Live Demo” button for interactive access.' },
  { q: 'How many fullstack projects have you built?', a: 'I’ve built 3 major fullstack projects and several smaller ones.' },
  { q: 'Do your projects include authentication?', a: 'Yes, some of my apps include user login and authentication features.' },
  { q: 'Are your projects responsive?', a: 'Yes, all my websites are mobile-first and fully responsive.' },
  { q: 'Can I contribute to any of your projects?', a: 'Yes, I’d love collaboration. Just message me through the contact section!' },

  // Certifications
  { q: 'Do you have any certifications?', a: 'Yes, I’ve earned multiple certifications from platforms like HackerRank, Udemy, and Google.' },
  { q: 'Which platforms have you earned certifications from?', a: 'HackerRank, Udemy, Apna College, and Google.' },
  { q: 'Do you have any HackerRank certificates?', a: 'Yes, they’re listed under the Certifications section line-wise with the course title.' },
  { q: 'Have you completed any Udemy courses?', a: 'Yes, I completed "The Web Developer Bootcamp" and "React Front To Back."' },
  { q: 'Are you certified in Full Stack Development?', a: 'Yes, I completed the Full Stack Web Developer course from Apna College.' },
  { q: 'Do you have a Google Data Analytics certificate?', a: 'Yes, I’ve completed the second series of Google’s Professional Data Analytics course.' },

  // Education & Background
  { q: 'What is your educational background?', a: 'I hold a diploma in Electrical Engineering and currently pursuing a B.Tech.' },
  { q: 'Are you from an electrical engineering background?', a: 'Yes, I transitioned into IT after starting in Electrical Engineering.' },
  { q: 'Have you completed a diploma?', a: 'Yes, I completed my diploma in Electrical Engineering.' },
  { q: 'Are you pursuing B.Tech?', a: 'Yes, I’m currently pursuing B.Tech in the same branch.' },
  { q: 'What online courses have you done?', a: 'I’ve done several, including web development, React, and data analytics.' },

  // About you
  { q: 'Tell me about yourself.', a: 'I’m a full-stack developer passionate about building user-centric web apps and always open to freelance and collaborative opportunities.' },
  { q: 'What are your career goals?', a: 'I aim to become a leading developer, build digital solutions, and eventually launch my own product.' },
  { q: 'Are you working as a freelancer?', a: 'Yes, I’m actively working as a freelancer and Upwork profile manager.' },
  { q: 'What are your hobbies or interests?', a: 'I enjoy coding, UI design, and creating educational content.' },
  { q: 'What motivates you as a developer?', a: 'Solving real-world problems through code and helping others grow with technology.' },

  // Contact
  { q: 'How can I contact you?', a: 'Click on the “Get in Touch” button in the Contact section to reveal the form.' },
  { q: 'Do you have a LinkedIn profile?', a: 'Yes, you can find my LinkedIn icon under the Contact section.' },
  { q: 'Can I email you?', a: 'Yes, my email address is linked below the Get in Touch button.' },
  { q: 'Where can I find your GitHub?', a: 'There’s a GitHub icon in the Contact section. Click to view my repositories.' },
  { q: 'Are you available for freelance work?', a: 'Yes, feel free to reach out via the contact form or my social links.' },

  // General Portfolio
  { q: 'Do you have a resume I can download?', a: 'Yes, just click on the “View Interactive Resume” section or download it from there.' },
  { q: 'Can I switch to dark mode?', a: 'Yes, click the theme toggle button on the top center to switch modes.' },
  { q: 'What is your chatbot’s purpose?', a: 'It helps answer all common questions about my skills, projects, and contact info.' },
  { q: 'How often do you update your portfolio?', a: 'I update it regularly to reflect new projects, certifications, and features.' },
  { q: 'Can I share your portfolio with others?', a: 'Of course! Feel free to share the link with anyone interested.' }
];

function addChatMessage(text, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chatbot-msg ' + sender;
  msgDiv.innerHTML = text;
  chatbotChatArea.appendChild(msgDiv);
  chatbotChatArea.scrollTop = chatbotChatArea.scrollHeight;
}

if (chatbotFab && chatbotModal && chatbotModalClose && chatbotForm && chatbotInput && chatbotChatArea) {
  chatbotFab.addEventListener('click', function() {
    chatbotModal.classList.add('show');
    chatbotInput.focus();
  });
  chatbotModalClose.addEventListener('click', function() {
    chatbotModal.classList.remove('show');
  });
  window.addEventListener('click', function(event) {
    if (event.target === chatbotModal) {
      chatbotModal.classList.remove('show');
    }
  });
  chatbotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = chatbotInput.value.trim();
    if (!userMsg) return;
    addChatMessage(userMsg, 'user');
    chatbotInput.value = '';
    // Find best match (case-insensitive, simple match)
    const match = chatbotQA.find(pair => userMsg.toLowerCase().includes(pair.q.toLowerCase().replace(/[^a-z0-9 ]/gi, '')));
    if (match) {
      setTimeout(() => addChatMessage(match.a, 'bot'), 500);
    } else {
      setTimeout(() => addChatMessage("I'm sorry, I don't have an answer for that. Try asking about my skills, projects, or contact info!", 'bot'), 500);
    }
  });
}
// Chat message bubbles
const style = document.createElement('style');
style.innerHTML = `
.chatbot-msg { margin: 0.5rem 0; padding: 0.7rem 1rem; border-radius: 16px; max-width: 80%; word-break: break-word; }
.chatbot-msg.bot { background: #f3f3fa; color: #7c3aed; align-self: flex-start; }
body.dark .chatbot-msg.bot { background: #232a36; color: #38bdf8; }
.chatbot-msg.user { background: var(--sky); color: #fff; align-self: flex-end; margin-left: auto; }
`;
document.head.appendChild(style);

// Mobile Floating Buttons Logic
function handleMobileButtons() {
  const mobileGetInTouch = document.getElementById('mobileGetInTouch');
  const mobileWhatsapp = document.getElementById('mobileWhatsapp');
  if (window.innerWidth <= 768) {
    if (mobileGetInTouch) mobileGetInTouch.style.display = 'flex';
    if (mobileWhatsapp) mobileWhatsapp.style.display = 'flex';
  } else {
    if (mobileGetInTouch) mobileGetInTouch.style.display = 'none';
    if (mobileWhatsapp) mobileWhatsapp.style.display = 'none';
  }
}
window.addEventListener('resize', handleMobileButtons);
window.addEventListener('DOMContentLoaded', handleMobileButtons);

const mobileGetInTouch = document.getElementById('mobileGetInTouch');
if (mobileGetInTouch) {
  mobileGetInTouch.addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Hamburger Menu Logic
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navLinks = document.querySelector('.nav-links');
function handleMobileNavButton() {
  if (window.innerWidth <= 768) {
    if (mobileNavToggle) mobileNavToggle.style.display = 'block';
    if (navLinks) navLinks.classList.remove('open');
  } else {
    if (mobileNavToggle) mobileNavToggle.style.display = 'none';
    if (navLinks) navLinks.classList.remove('open');
  }
}
window.addEventListener('resize', handleMobileNavButton);
window.addEventListener('DOMContentLoaded', handleMobileNavButton);
if (mobileNavToggle && navLinks) {
  mobileNavToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

// Get in Touch Tooltip Logic
function setupGetInTouchTooltip(btnId, tooltipId) {
  const btn = document.getElementById(btnId);
  const tooltip = document.getElementById(tooltipId);
  if (!btn || !tooltip) return;
  function showTooltip() {
    if (window.innerWidth > 768) tooltip.classList.add('show');
  }
  function hideTooltip() {
    tooltip.classList.remove('show');
  }
  btn.addEventListener('mouseenter', showTooltip);
  btn.addEventListener('mouseleave', hideTooltip);
  btn.addEventListener('focus', showTooltip);
  btn.addEventListener('blur', hideTooltip);
  window.addEventListener('resize', hideTooltip);
}
setupGetInTouchTooltip('show-contact-form', 'getInTouchTooltip');
setupGetInTouchTooltip('mobileGetInTouch', 'mobileGetInTouchTooltip');

// Service Modal Logic
const serviceData = {
  webdev: {
    title: 'Web Development',
    desc: [
      'Responsive websites and web apps',
      'Custom frontend and backend solutions',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
    techs: 'HTML, CSS, JavaScript, ReactJS, Node.js, Express, PHP, MySQL',
    animation: '' // Optionally add a Lottie or fun animation here
  },
  design: {
    title: 'Graphic Designing',
    desc: [
      'Branding and logo design',
      'Social media graphics',
      'UI/UX mockups and wireframes',
      'Marketing materials',
    ],
    techs: 'Figma, Canva, Adobe Illustrator, Photoshop',
    animation: ''
  },
  marketing: {
    title: 'Digital Marketing',
    desc: [
      'SEO and SEM strategies',
      'Social media campaigns',
      'Content marketing',
      'Analytics and reporting',
    ],
    techs: 'Google Analytics, Facebook Ads, SEO Tools',
    animation: ''
  },
  seo: {
    title: 'SEO',
    desc: [
      'On-page and off-page SEO',
      'Keyword research',
      'Technical SEO audits',
      'Link building',
    ],
    techs: 'Google Search Console, SEMrush, Ahrefs',
    animation: ''
  },
  freelance: {
    title: 'Freelancing Profile Optimization',
    desc: [
      'Profile review and enhancement',
      'Portfolio and gig creation',
      'Proposal writing tips',
      'Upwork/Fiverr strategy',
    ],
    techs: 'Upwork, Fiverr, LinkedIn',
    animation: ''
  },
  business: {
    title: 'Business Development & Upwork Bidding',
    desc: [
      'Lead generation',
      'Bid writing and strategy',
      'Client communication',
      'Project management',
    ],
    techs: 'CRM Tools, Upwork, Email, Trello',
    animation: ''
  }
};
const serviceModal = document.getElementById('service-modal');
const serviceModalOverlay = document.querySelector('.service-modal-overlay');
const serviceModalContent = document.querySelector('.service-modal-content');
const serviceModalClose = document.querySelector('.service-modal-close');
const serviceModalTitle = document.getElementById('service-modal-title');
const serviceModalDesc = document.getElementById('service-modal-desc');
const serviceModalTechs = document.getElementById('service-modal-techs');
const serviceModalAnimation = document.getElementById('service-modal-animation');
const knowMoreBtns = document.querySelectorAll('.know-more-service');

function openServiceModal(key) {
  const data = serviceData[key];
  if (!data) return;
  serviceModalTitle.textContent = data.title;
  serviceModalDesc.innerHTML = data.desc.map(d => `<li>${d}</li>`).join('');
  serviceModalTechs.textContent = 'Technologies/tools: ' + data.techs;
  serviceModalAnimation.innerHTML = data.animation || '';
  serviceModal.classList.add('show');
  document.body.style.overflow = 'hidden';
  serviceModalContent.focus();
}
function closeServiceModal() {
  serviceModal.classList.remove('show');
  document.body.style.overflow = '';
}
knowMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    openServiceModal(this.getAttribute('data-service'));
  });
});
if (serviceModalOverlay) {
  serviceModalOverlay.addEventListener('click', closeServiceModal);
}
if (serviceModalClose) {
  serviceModalClose.addEventListener('click', closeServiceModal);
  serviceModalClose.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') closeServiceModal();
  });
}
window.addEventListener('keydown', function(e) {
  if (serviceModal.classList.contains('show') && e.key === 'Escape') closeServiceModal();
});
// Focus trap for accessibility
serviceModalContent.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    const focusable = serviceModalContent.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}); 

// Certification Card Flip for Mobile
(function() {
  function isMobile() { return window.innerWidth <= 900; }
  function handleCardFlip(e) {
    if (!isMobile()) return;
    const card = e.currentTarget;
    card.classList.toggle('flipped');
  }
  function handleCardKey(e) {
    if (!isMobile()) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.classList.toggle('flipped');
    }
  }
  function removeFlipped(e) {
    if (!isMobile()) return;
    document.querySelectorAll('.cert-card.flipped').forEach(card => {
      if (!card.contains(e.target)) card.classList.remove('flipped');
    });
  }
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', handleCardFlip);
    card.addEventListener('keydown', handleCardKey);
  });
  window.addEventListener('click', removeFlipped);
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.cert-card.flipped').forEach(card => card.classList.remove('flipped'));
    }
  });
})(); 