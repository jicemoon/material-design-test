import { MenuItem } from './../MenuItem.model';

export const navigation: MenuItem = {
  label: 'Navigation',
  link: '/navigation',
  isOpen: true,
  children: [
    {
      label: 'Menu',
      link: '/navigation/menu'
    },
    {
      label: 'Sidenav',
      link: '/navigation/sidenav'
    },
    {
      label: 'Toolbar',
      link: '/navigation/toolbar'
    },
  ]
};
