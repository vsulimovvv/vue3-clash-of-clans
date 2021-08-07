export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://google.com',
};

export const app = {
  title: 'Template',
};

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/',
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about',
  },
  {
    title: 'Vacancyt',
    alias: 'vacancy',
    url: '/vacancy',
  },
];
