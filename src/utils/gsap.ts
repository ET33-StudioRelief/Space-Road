import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

/**
 * Initializes the animation for service cards
 * Each card appears with a scale and fade effect when scrolling into view
 */
export function initCardAnimation(): void {
  const cards = document.querySelectorAll('.services_card');

  if (!cards.length) return;

  //initial statement = invisible
  gsap.set(cards, {
    opacity: 0,
    y: 50,
    scale: 0.95,
  });

  // Créer la timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.solution_engagement',
      start: 'top center',
      toggleActions: 'restart none none reset',
    },
  });

  // add card to the timeline
  cards.forEach((card, index) => {
    tl.to(
      card,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      index * 0.4
    );
  });
}

/**
 * Initializes the hero section animations
 * Animates the logo sliding from left, heading from right,
 * and button fading up with a subtle scale effect
 */
export function initHeroAnimation(): void {
  const heroLogo = document.querySelector('.hp-hero_logo');
  const heroHeading = document.querySelector('.hp-hero_heading');
  const heroButton = document.querySelector('.hp-hero_heading-content .button-wrapper');

  if (!heroLogo || !heroHeading || !heroButton) return;

  // Initialiser les éléments comme invisibles
  gsap.set([heroLogo, heroHeading, heroButton], {
    opacity: 0,
    x: 0,
    scale: 0.95,
  });

  // Créer la timeline avec un délai initial
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power3.out',
    },
    delay: 0.5,
  });

  tl.fromTo(
    heroLogo,
    {
      opacity: 0,
      x: -100,
      scale: 0.95,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
    }
  )
    .fromTo(
      heroHeading,
      {
        opacity: 0,
        x: 100,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      '<0.3'
    )
    .fromTo(
      heroButton,
      {
        opacity: 0,
        y: 5,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'expo.out',
      },
      '<0.3'
    );
}

/**
 * Initializes a continuous zoom animation for the hero background image
 */
export function initHeroImageAnimation(): void {
  const heroImage = document.querySelector('.hp-hero_img');

  if (!heroImage) return;

  gsap.to(heroImage, {
    scale: 1.1,
    duration: 5,
    ease: 'none',
    yoyo: true,
    repeat: -1,
  });
}

/**
 * Initializes sequential animations for vehicle images
 */
export function initVehiculeAnimation(): void {
  const vehiculeImg1 = document.querySelector('#vehicule-img1');
  const vehiculeImg2 = document.querySelector('#vehicule-img2');
  const vehiculeImg3 = document.querySelector('#vehicule-img3');
  const vehiculeImg4 = document.querySelector('#vehicule-img4');

  if (!vehiculeImg1 || !vehiculeImg2 || !vehiculeImg3 || !vehiculeImg4) return;

  // Initialiser les images comme invisibles
  gsap.set([vehiculeImg1, vehiculeImg2, vehiculeImg3, vehiculeImg4], {
    scale: 0,
    opacity: 0,
  });

  // Créer la timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.vehicule_content',
      start: 'top center',
      toggleActions: 'restart none none reset',
    },
  });

  // Animer chaque image en séquence
  tl.to(vehiculeImg1, {
    scale: 1,
    opacity: 1,
    duration: 0.4,
    ease: 'back.out(1.7)',
  })
    .to(
      vehiculeImg2,
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      '>'
    )
    .to(
      vehiculeImg3,
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      '>'
    )
    .to(
      vehiculeImg4,
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      '>'
    );
}

/**
 * Initializes animation for CTA content
 * Continuous gradient animation and scale on scroll
 */
export function initCtaAnimation(): void {
  const ctaContent = document.querySelector('.cta_content');

  if (!ctaContent) return;

  // Style initial
  gsap.set(ctaContent, {
    background: 'linear-gradient(90deg, #F5EEE4 0%, #D8BD97 100%)',
  });

  // Animation du gradient
  gsap.to(ctaContent, {
    background: 'linear-gradient(90deg, #D8BD97 0%, #F5EEE4 100%)',
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'none',
  });

  // Scale progressif au scroll
  gsap.to(ctaContent, {
    scrollTrigger: {
      trigger: ctaContent,
      start: 'top bottom', // Commence quand le haut de l'élément atteint le bas du viewport
      end: 'center center', // Finit quand le centre de l'élément atteint le centre du viewport
      scrub: 1, // Lie l'animation au scroll avec un léger smoothing
      toggleActions: 'play none none reverse',
    },
    scale: 1.1,
    ease: 'none', // Utilise none pour un scale linéaire avec le scroll
  });
}

/**
 * Initializes parallax effect on image
 */
export function initParallaxImage(): void {
  const parallaxImage = document.querySelector('.solution_img-bg');
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  if (!parallaxImage) return;

  function createParallax() {
    if (mediaQuery.matches) {
      gsap.to(parallaxImage, {
        scrollTrigger: {
          trigger: parallaxImage,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -150,
        ease: 'none',
      });
    }
  }

  // Initialiser l'animation
  createParallax();

  // Mettre à jour l'animation si la taille de l'écran change
  mediaQuery.addEventListener('change', createParallax);
}

/**
 * Initializes the animation for service cards
 * Each card appears with a scale and fade effect when scrolling into view
 */
export function initFeaturesCardAnimation(): void {
  const cards = document.querySelectorAll('.features_card');

  if (!cards.length) return;

  //initial statement = invisible
  gsap.set(cards, {
    opacity: 0,
    y: 50,
    scale: 0.95,
  });

  // Créer la timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.features_content',
      start: 'top center',
      toggleActions: 'restart none none reverse',
    },
  });

  // add card to the timeline
  cards.forEach((card, index) => {
    tl.to(
      card,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      index * 0.4
    );
  });
}

/**
 * Initializes animation for all H2 headings and specific H3
 * Words slide in from right with a staggered effect
 */
export function initHeadingAnimation(): void {
  // Select all H2s and specific H3s from solution_engagement section
  const headings = document.querySelectorAll('h2, .solution_engagement h3');

  headings.forEach((heading) => {
    // Store original HTML to preserve existing structure
    const originalHTML = heading.innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;

    const textNodes: string[] = [];

    // Recursive function to process text and maintain existing spans
    const walkNodes = (node: Node): void => {
      if (node.nodeType === 3) {
        // If text node: split into words and add to array
        const words = node.textContent?.trim().split(/\s+/) || [];
        textNodes.push(...words);
      } else if (node.nodeType === 1) {
        // If element node: check for special spans
        const element = node as HTMLElement;
        if (element.classList?.contains('heading_span')) {
          // Preserve existing spans by wrapping them in animation spans
          textNodes.push(`<span style="display: inline-block">${element.outerHTML}&nbsp;</span>`);
        } else {
          // Process child nodes recursively
          node.childNodes.forEach(walkNodes);
        }
      }
    };
    walkNodes(tempDiv);

    // Rebuild heading content: wrap each word in animation span
    heading.innerHTML = textNodes
      .map((word) => {
        if (word.startsWith('<span style="display: inline-block"')) {
          // Return already formatted spans
          return word;
        }
        // Wrap regular words in animation spans with spacing
        return `<span style="display: inline-block">${word}&nbsp;</span>`;
      })
      .join('');

    // Animate each word/span with GSAP
    gsap.from(heading.children, {
      scrollTrigger: {
        trigger: heading,
        start: 'top bottom-=100', // Start animation when heading is 100px from viewport bottom
        toggleActions: 'restart none none reset', // Replay animation each time element enters viewport
      },
      x: 100, // Slide from right
      opacity: 0, // Fade in
      duration: 0.8,
      ease: 'power3.out', // Smooth easing
      stagger: 0.1, // Delay between each word animation
    });
  });
}

/**
 * Initializes the animation for defis list
 * Each bullet appears with a scale and fade effect when scrolling into view
 */
export function bulletPointsApparition(): void {
  const bullets = document.querySelectorAll('.defis_list li');

  if (!bullets.length) return;

  // Initial statement = invisible
  gsap.set(bullets, {
    opacity: 0,
    y: 50,
    scale: 0.95,
  });

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.defis_list',
      start: 'top bottom-=200',
      toggleActions: 'restart none none reset',
    },
  });

  // Add bullets to the timeline
  bullets.forEach((bullet, index) => {
    tl.to(
      bullet,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      index * 0.4
    );
  });
}

/**
 * Initializes footer animations
 * Logo slides from top
 * Content fades in with baseline animation
 */
export function initFooterAnimation(): void {
  const footerLogo = document.querySelector('.footer_logo-wrapper');
  const footerContent = document.querySelector('.footer_content');

  if (!footerLogo || !footerContent) return;

  // Initial state
  gsap.set(footerLogo, {
    opacity: 0,
    y: -50,
  });

  gsap.set(footerContent, {
    opacity: 0,
  });

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer_content',
      start: 'top bottom-=100',
      toggleActions: 'restart none none reset',
    },
    delay: 0.1,
  });

  // Animate logo and baseline content separately
  tl.to(footerLogo, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }).to(
    footerContent,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power1.inOut',
    },
    '<0.2'
  );
}
