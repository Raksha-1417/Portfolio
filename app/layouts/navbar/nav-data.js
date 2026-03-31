import config from '~/config.json';

export const navLinks = [
  {
    label: 'Education',
    pathname: '/#education',
  },
  {
    label: 'Experience',
    pathname: '/#experience',
  },
  {
    label: 'Skills',
    pathname: '/#tech-skills',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Contact',
    pathname: '/#contact',
  },
];

export const socialLinks = [

  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
