import './index.css';

import {
  bulletPointsApparition,
  initCardAnimation,
  initCtaAnimation,
  initFeaturesCardAnimation,
  initFooterAnimation,
  initHeadingAnimation,
  initHeroAnimation,
  initHeroImageAnimation,
  initParallaxImage,
  initVehiculeAnimation,
} from './utils/gsap';
import {
  initContactModal,
  initContactPhoneValidation,
  initHideFirstOptionSelectInputs,
} from './utils/modal';

initCardAnimation();
initHeroAnimation();
initHeroImageAnimation();
initVehiculeAnimation();
initCtaAnimation();
initParallaxImage();
initFeaturesCardAnimation();
initHeadingAnimation();
bulletPointsApparition();
initFooterAnimation();
initContactModal();
initContactPhoneValidation();
initHideFirstOptionSelectInputs();
