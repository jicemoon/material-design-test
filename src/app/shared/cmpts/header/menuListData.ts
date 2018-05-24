interface MenuItem {
  label: string;
  link: string;
  isOpen?: boolean;
  children?: MenuItem[];
}
const FormControls: MenuItem = {
  label: 'Form Controls',
  link: '/formControls',
  isOpen: true,
  children: [
    {
      label: 'AutoComplete',
      link: '/formControls/autocomplete'
    },
    {
      label: 'Checkbox',
      link: '/formControls/checkbox'
    },
  ]
};
const MenuListData: MenuItem[] = [
  FormControls
];
export { MenuItem, MenuListData };
