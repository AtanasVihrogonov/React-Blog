import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// Set the parameters of scrolling
var overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.20,
  maxOverscroll: 50,
};

var options = {
  damping: 0.05,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

// Implement Silky Smooth Scrolling
const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);

    // for bound effect
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return null;
};

export default Scroll;
