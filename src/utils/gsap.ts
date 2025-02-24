import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

/**
 * Initializes the animation for service cards
 * Each card appears with a scale and fade effect when scrolling into view
 * Cards are animated sequentially with a delay between each
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
      toggleActions: 'play none none none',
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
 * All elements are choreographed with slight delays for a smooth entrance
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
 * Creates a subtle breathing effect with infinite loop
 * Uses yoyo to smoothly alternate between zoom in and out
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
 * Each image scales and fades in one after another
 * Animation triggers when the vehicle section enters viewport
 * Uses a bounce effect for a dynamic appearance
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
      toggleActions: 'play none none none',
    },
  });

  // Animer chaque image en séquence
  tl.to(vehiculeImg1, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'back.out(1.7)',
  })
    .to(
      vehiculeImg2,
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '>'
    )
    .to(
      vehiculeImg3,
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '>'
    )
    .to(
      vehiculeImg4,
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
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
 * Creates a smooth vertical movement based on scroll position
 * Only active on screens larger than 992px
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
          end: 'bottom center',
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
