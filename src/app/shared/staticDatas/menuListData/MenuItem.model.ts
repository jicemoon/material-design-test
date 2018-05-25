export interface MenuItem {
  label: string;
  link: string;
  isOpen?: boolean;
  children?: MenuItem[];
}
