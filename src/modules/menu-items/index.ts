import application from './application';
import dashboard from './dashboard';
import { type MenuItems } from './type';
import uiElement from './uiElement';

const menuItems: MenuItems = {
  items: [dashboard, application, uiElement],
};

export default menuItems;
