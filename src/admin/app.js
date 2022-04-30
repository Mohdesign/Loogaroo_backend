import AuthLogo from 'assets/auth-logo.png';
import MenuLogo from 'assets/menu-logo.png';
import favicon from 'assets/favicon.ico';

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "...",
    },
  },

  bootstrap() { },
};