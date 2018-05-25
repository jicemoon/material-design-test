import { MenuItem } from './../MenuItem.model';

export const navigation: MenuItem = {
  label: 'Navigation',
  link: '/navigation',
  isOpen: true,
  children: [
    {
      label: 'Menu',
      link: '/navigation/menu'
    }
  ]
};
