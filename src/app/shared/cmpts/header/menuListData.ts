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
    {
      label: 'Datepicker',
      link: '/formControls/datepicker'
    },
    {
      label: 'Input',
      link: '/formControls/input'
    },
    {
      label: 'Radio Button',
      link: '/formControls/radioButton'
    },
    {
      label: 'Select',
      link: '/formControls/select'
    },
  ]
};
const MenuListData: MenuItem[] = [
  FormControls
];
export { MenuItem, MenuListData };
