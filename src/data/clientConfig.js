/**
 * clientConfig.js
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for the entire greeting card experience.
 *
 * To spin up a new client site: duplicate this file's VALUES only.
 * Do not rename top-level keys — every component maps over this
 * exact shape. Image paths can point to /src/assets/<client>/...
 * or to any hosted URL.
 * ------------------------------------------------------------------
 */

// --- استدعاء الصور هنا في بداية الملف ---
import img1 from '../assets/placeholder-1.jpg';
import img2 from '../assets/placeholder-2.jpg';
import img3 from '../assets/placeholder-3.jpg';
import img4 from '../assets/placeholder-4.jpg';
import img5 from '../assets/placeholder-5.jpg';
import img6 from '../assets/placeholder-6.jpg';
import img7 from '../assets/placeholder-7.jpg';
import img8 from '../assets/placeholder-8.jpg';
import img9 from '../assets/placeholder-9.jpg';
import img10 from '../assets/placeholder-10.jpg';
import img11 from '../assets/placeholder-11.jpg';
import img12 from '../assets/placeholder-12.jpg';
import img13 from '../assets/placeholder-13.jpg';
import img14 from '../assets/placeholder-14.jpg';
import img15 from '../assets/placeholder-15.jpg';
import img16 from '../assets/placeholder-16.jpg';

const clientConfig = {
  // ---------------------------------------------------------------
  // 1. THEME — colors referenced via CSS custom properties in index.css
  //    (also mirrored in tailwind.config.js for utility classes)
  // ---------------------------------------------------------------
  theme: {
    background: '#fdfbf7', // cream
    primary: '#1b2a4a', // navy — headings, envelope, borders
    accent: '#c98a4b', // wax seal / gold accents
    balloon: '#a9bcd8', // balloon + watercolor flower tint
  },

  // ---------------------------------------------------------------
  // 2. RECIPIENT / META
  // ---------------------------------------------------------------
  meta: {
    recipientName: 'Love',
    senderName: 'Your Person',
    pageTitle: 'Happy Birthday, Love!',
  },

  // ---------------------------------------------------------------
  // 3. SCREEN 1 — COVER (closed envelope)
  // ---------------------------------------------------------------
  cover: {
    eyebrow: 'For you',
    subtext: 'tap on the letter to open',
  },

  // ---------------------------------------------------------------
  // 4. SCREEN 2 — ENVELOPE OPEN (card pop-up + balloons)
  // ---------------------------------------------------------------
  envelopeOpen: {
    heading: 'Happy Birthday,\nLove!',
    subtext: 'tap on the letter for more',
    balloonCount: 6,
  },

  // ---------------------------------------------------------------
 // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // 5. SCREEN 3 — LETTER PAGE
  // ---------------------------------------------------------------
  letter: {
    heading: 'Happy Birthday, shahd!',
    salutation: 'Happy Birthday,',
    paragraphs: [
      `Happy birthday, Shahd! ❤️🎂

I truly wish you a year full of happiness, peace, success, and beautiful moments that you’ll always remember. I hope you achieve everything you’ve dreamed of and everything your heart wishes for.

You’re such a special person, and I really hope life always keeps your beautiful heart the way it is. Never lose your kindness, your amazing spirit, or all those little things that make you the person you are.

I’m so lucky to have you as my cousin, and I hope this new year of your life brings you closer to everything you deserve.

Happy birthday once again, Shahd. May this year be one of the most beautiful chapters of your life. ❤️✨
And, as I’ve always said… you’re the best of us. ❤️.`
    ],
    signOff: 'Always here for you.',
    images: [
      { src: img1, alt: 'A warm shared memory, close together and smiling' },
      { src: img2, alt: 'A playful candid selfie' },
    ],
    nextLabel: 'Next',
  },

  // ---------------------------------------------------------------
  // 6. SCREEN 4 — VIDEO PAGE
  // ---------------------------------------------------------------
  video: {
    heading: 'Song For You',
    // Accepts a full YouTube watch/share URL OR a bare 11-char video ID.
    youtubeId: 'https://youtu.be/2s5xdY6MCeI?si=ykC1mmziebffLLM7',
    caption: 'love you — our song',
    nextLabel: 'Next',
  },

  // ---------------------------------------------------------------
  // 7. SCREEN 5 — PHOTO COLLAGE (heart-shaped grid)
  // ---------------------------------------------------------------
  collage: {
    heading: null, // optional heading above the collage, leave null to omit
    // Order matters: this array is mapped directly, in order, onto the
    // 10 named grid areas (a–j) defined in PhotoCollage.jsx's heart layout.
    photos: [
      { src: img3, alt: 'Sharing noodles together' }, // a
      { src: img4, alt: 'A quiet moment out at night' }, // b
      { src: img5, alt: 'Street food adventure' }, // c
      { src: img6, alt: 'A day out exploring the city' }, // d (tall, spans 2 rows)
      { src: img7, alt: 'Silly matching faces' }, // e
      { src: img8, alt: 'A playful moment together' }, // f
      { src: img9, alt: 'A cat cameo' }, // g
      { src: img10, alt: 'Face masks and giggles' }, // h
      { src: img11, alt: 'A costume moment' }, // i
      { src: img12, alt: 'A costume moment' }, // i
      { src: img13, alt: 'A costume moment' }, // i
      { src: img14, alt: 'A costume moment' }, // i
    ],
    nextLabel: 'Next',
  },

  // ---------------------------------------------------------------
  // 8. SCREEN 6 — FINAL PAGE
  // ---------------------------------------------------------------
  finale: {
    images: [
      { src: img15, alt: 'A cozy café memory' },
      { src: img16, alt: 'A close, happy moment' },
    ],
    heading: 'Happy',
    headingScript: 'Birthday',
    restartLabel: 'Read again',
  },
};

export default clientConfig;