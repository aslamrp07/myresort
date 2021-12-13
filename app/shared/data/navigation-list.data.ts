import { NavItem } from '../models/nav.item';

export class NavigationList {
  static get items(): NavItem[] {
    return [
      {
        displayName: 'Resort',
        iconName: 'attractions',
        children: [
          {
            displayName: 'Resort List',
            iconName: 'checklist',
            route: '/resort',
          },
          {
            displayName: 'Resort ADD',
            iconName: 'add_circle_outline',
            route: '/resort/add',
          },
        ],
      },
      {
        displayName: 'Room',
        iconName: 'king_bed',
        children: [
          {
            displayName: 'Room List',
            iconName: 'format_list_bulleted',
            route: '/room',
          },
          {
            displayName: 'Room ADD',
            iconName: 'add_circle',
            route: '/room/add',
          },
        ],
      },
    ];
  }
}
