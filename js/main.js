/* ════════════════════════════════════════════════════════════
   Emmanuel Oshike Portfolio - Main JavaScript
   ════════════════════════════════════════════════════════════ */

// ═══ Navbar Background on Scroll ═══
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('bg-[#0b0f1a]/80', window.scrollY > 50);
  navbar.classList.toggle('backdrop-blur-xl', window.scrollY > 50);
  navbar.classList.toggle('shadow-lg', window.scrollY > 50);
  navbar.classList.toggle('shadow-black/10', window.scrollY > 50);
});

// ═══ Mobile Menu Toggle ═══
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ═══ Scroll Reveal Animation ═══
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay based on element index within viewport
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// ═══ Smooth Scroll for Anchor Links ═══
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ═══ Parallax Effect for Decorative Elements ═══
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      
      // Parallax for floating particles
      document.querySelectorAll('.particle').forEach((particle, i) => {
        const speed = 0.05 + (i * 0.02);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
      });
      
      // Parallax for decorative rings
      document.querySelectorAll('.decorative-ring').forEach((ring, i) => {
        const speed = 0.02 + (i * 0.01);
        const baseTransform = ring.style.transform || '';
        // Only add parallax if not already spinning
        if (baseTransform.includes('translate')) {
          ring.style.transform = baseTransform.replace(
            /translateY\([^)]*\)/,
            `translateY(${scrolled * speed}px)`
          );
        }
      });
      
      ticking = false;
    });
    ticking = true;
  }
});

// ═══ Active Nav Link Highlight ═══
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const highlightNavLink = () => {
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('text-indigo-400');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('text-indigo-400');
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNavLink);

// ═══ Typed Text Effect (Optional Enhancement) ═══
const typedElement = document.querySelector('.typing-cursor');
if (typedElement) {
  const text = typedElement.textContent;
  typedElement.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      typedElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing when element is in view
  const typingObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeWriter();
      typingObserver.disconnect();
    }
  });
  
  typingObserver.observe(typedElement);
}

// ═══ Cursor Glow Effect (for desktop) ═══
if (window.matchMedia('(pointer: fine)').matches) {
  const glowEffect = document.querySelector('.glow-effect');
  
  if (glowEffect) {
    document.addEventListener('mousemove', (e) => {
      const heroSection = document.querySelector('section.noise');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          // Calculate position relative to hero section
          const x = e.clientX;
          const y = e.clientY - rect.top + window.scrollY;
          
          glowEffect.style.left = `${x}px`;
          glowEffect.style.top = `${y}px`;
          glowEffect.style.transform = 'translate(-50%, -50%)';
        }
      }
    });
  }
}

// ═══ Project Gallery Navigation ═══
document.querySelectorAll('.project-gallery').forEach(gallery => {
  const slides = gallery.querySelectorAll('.gallery-slide');
  const dots = gallery.querySelectorAll('.gallery-dot');
  const prevBtn = gallery.querySelector('.gallery-prev');
  const nextBtn = gallery.querySelector('.gallery-next');
  let currentIndex = 0;

  const showSlide = (index) => {
    // Handle wrapping
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
        slide.style.opacity = '1';
        slide.style.zIndex = '1';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      }
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.classList.toggle('bg-white', i === currentIndex);
      dot.classList.toggle('bg-white/50', i !== currentIndex);
    });
  };

  // Navigation buttons
  prevBtn?.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => showSlide(currentIndex + 1));

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Auto-advance (optional - every 5 seconds)
  let autoPlay = setInterval(() => showSlide(currentIndex + 1), 5000);

  // Pause auto-play on hover
  gallery.addEventListener('mouseenter', () => clearInterval(autoPlay));
  gallery.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => showSlide(currentIndex + 1), 5000);
  });

  // Initialize first slide
  showSlide(0);
});

