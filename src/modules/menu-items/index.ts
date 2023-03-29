import application from './application';
import dashboard from './dashboard';
import forms from './forms';
import { type MenuItems } from './type';
import uiElement from './uiElement';

const menuItems: MenuItems = {
  items: [dashboard, application, forms, uiElement],
};

export default menuItems;
