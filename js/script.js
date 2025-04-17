// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollToTopBtn.style.display = 'flex';
  } else {
    navbar.classList.remove('scrolled');
    scrollToTopBtn.style.display = 'none';
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  
  // Toggle between menu and X icon
  const menuIcon = mobileMenuBtn.querySelector('svg');
  if (mobileMenu.classList.contains('open')) {
    menuIcon.innerHTML = `
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    `;
  } else {
    menuIcon.innerHTML = `
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    `;
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    // Restore menu icon
    const menuIcon = mobileMenuBtn.querySelector('svg');
    menuIcon.innerHTML = `
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    `;
  });
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form validation
const appointmentForm = document.getElementById('appointmentForm');
const contactForm = document.getElementById('contactForm');

// Validate appointment form
if (appointmentForm) {
  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Reset all error messages
    const errorMessages = appointmentForm.querySelectorAll('.error-message');
    errorMessages.forEach(element => {
      element.textContent = '';
    });
    
    // Validate name
    const name = appointmentForm.querySelector('#name').value.trim();
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
    
    // Validate email
    const email = appointmentForm.querySelector('#email').value.trim();
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').textContent = 'Email is invalid';
      isValid = false;
    }
    
    // Validate phone
    const phone = appointmentForm.querySelector('#phone').value.trim();
    if (!phone) {
      document.getElementById('phoneError').textContent = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      document.getElementById('phoneError').textContent = 'Phone number is invalid';
      isValid = false;
    }
    
    // Validate department
    const department = appointmentForm.querySelector('#department').value;
    if (!department) {
      document.getElementById('departmentError').textContent = 'Department is required';
      isValid = false;
    }
    
    // Validate date
    const date = appointmentForm.querySelector('#date').value;
    if (!date) {
      document.getElementById('dateError').textContent = 'Date is required';
      isValid = false;
    }
    
    // Validate time
    const time = appointmentForm.querySelector('#time').value;
    if (!time) {
      document.getElementById('timeError').textContent = 'Time is required';
      isValid = false;
    }
    
    if (isValid) {
      alert('Appointment request submitted successfully!');
      appointmentForm.reset();
    }
  });
}

// Validate contact form
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Reset all error messages
    const errorMessages = contactForm.querySelectorAll('.error-message');
    errorMessages.forEach(element => {
      element.textContent = '';
    });
    
    // Validate name
    const name = contactForm.querySelector('#contact-name').value.trim();
    if (!name) {
      document.getElementById('contactNameError').textContent = 'Name is required';
      isValid = false;
    }
    
    // Validate email
    const email = contactForm.querySelector('#contact-email').value.trim();
    if (!email) {
      document.getElementById('contactEmailError').textContent = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('contactEmailError').textContent = 'Email is invalid';
      isValid = false;
    }
    
    // Validate subject
    const subject = contactForm.querySelector('#contact-subject').value.trim();
    if (!subject) {
      document.getElementById('contactSubjectError').textContent = 'Subject is required';
      isValid = false;
    }
    
    // Validate message
    const message = contactForm.querySelector('#contact-message').value.trim();
    if (!message) {
      document.getElementById('contactMessageError').textContent = 'Message is required';
      isValid = false;
    }
    
    if (isValid) {
      alert('Message sent successfully!');
      contactForm.reset();
    }
  });
}

// Hide scroll to top button initially
scrollToTopBtn.style.display = 'none';

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
