import { MenuItem } from '../MenuItem.model';


export const dataTable: MenuItem = {
  label: 'Data Table',
  link: '/dataTable',
  isOpen: true,
  children: [
    {
      label: 'Paginator',
      link: '/dataTable/paginator'
    }
  ]
};
