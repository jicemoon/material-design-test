import { MenuItem } from '../MenuItem.model';


export const popups: MenuItem = {
  label: 'popups',
  link: '/popups',
  isOpen: true,
  children: [
    {
      label: 'Bottom Sheet',
      link: '/popups/bottomSheet'
    }
  ]
};
