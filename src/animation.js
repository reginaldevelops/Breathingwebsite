export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 0
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnim = {
    hidden: {y:200},
    show: {
        y:0,
        transition: {duration: 0.75, ease: 'easeOut'},
    },
};

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity:1,
        transition: {ease: 'easeOut', duration: 0.75},
    },
};

export const photoAnim = {
    hidden: {scale: 1.3, opacity: 0},
    show: {
        scale: 1,
        opacity:1,
        transition: {ease: 'easeOut', duration: 0.5},
    },
};

// Section fade + rise on scroll
export const fadeUp = {
  hidden: { opacity: 0, y: 33 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Left / Right slides (use for images or split layouts)
export const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};
export const slideRight = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

// Soft blur-in (great for thumbnails)
export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  show:   { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

// Container staggers (wrap a parent around items)
export const staggerSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};
export const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

// Card/item pop (use on service cards / list items)
export const cardItem = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

// Gentle looping float (e.g., TikTok badge icon)
export const float = {
  initial: { y: 0 },
  animate: { y: [0, -4, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
};
