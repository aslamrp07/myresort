import {
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavService } from '../../services/nav-menu.service';
import { NavItem } from '../../models/nav.item';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef | any;
  version = VERSION;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navItems: NavItem[] = [
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavService
  ) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
