import { MenuItem } from './MenuItem.model';
import { FormControls } from './datas/formControls';
import { navigation } from './datas/navigation';
import { layout } from './datas/layout';
import { btns } from './datas/btns';
import { popups } from './datas/popups';
import { dataTable } from './datas/dataTable';

const MenuListData: MenuItem[] = [
  FormControls,
  navigation,
  layout,
  btns,
  popups,
  dataTable
];

export { MenuItem, MenuListData };
