import { MenuItem } from '../MenuItem.model';


export const layout: MenuItem = {
  label: 'Layout',
  link: '/layout',
  isOpen: true,
  children: [
    {
      label: 'Card',
      link: '/layout/card'
    }
  ]
};
