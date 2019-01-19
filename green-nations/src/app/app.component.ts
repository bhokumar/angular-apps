import { Component } from '@angular/core';
import {FrameworkConfigService, FrameworkConfigSettings} from '../fw/services/framework-config.service';
import {MenuService} from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService:FrameworkConfigService,
              private menuService: MenuService){
    let config:FrameworkConfigSettings = {
      socialIcons:[
        {imageFile:'assets/facebook.jpg',alt:'Facebook',link:'http://www.facebook.com'},
        {imageFile:'assets/google.jpg',alt:'Google',link:'http://www.google.com'},
        {imageFile:'assets/twitter.jpg',alt:'twitter',link:'http://www.twitter.com'}
      ],
      showLanguageSelecter:true,
      showUserControls:true,
      showStatusBar:true,
      showStatusBarBreakPoint:800
    }

    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;

  }
}
