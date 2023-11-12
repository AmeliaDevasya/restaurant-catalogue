const DrawerInitiator = {
  init({ button, mobileMenu }) {
    let isMobileNavOpen = false;

    button.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        // eslint-disable-next-line no-param-reassign
        mobileMenu.style.right = '0';
      } else {
        // eslint-disable-next-line no-param-reassign
        mobileMenu.style.right = '-100%';
      }
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        mobileMenu.classList.toggle('open');
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
          // eslint-disable-next-line no-param-reassign
          mobileMenu.style.right = '0';
        } else {
          // eslint-disable-next-line no-param-reassign
          mobileMenu.style.right = '-100%';
        }
      }
    });

    window.addEventListener('resize', () => {
      if (isMobileNavOpen) {
        if (window.innerWidth >= 650) {
          mobileMenu.classList.remove('open');
          isMobileNavOpen = false;
        }
      }
    });
  },
};

export default DrawerInitiator;
