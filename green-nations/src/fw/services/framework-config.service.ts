import { Injectable } from '@angular/core';


export interface IconFiles{
  imageFile:string;
  alt:string;
  link:string;
}

export interface FrameworkConfigSettings{
  showLanguageSelecter?:boolean;
  showUserControls?:boolean;
  showStatusBar?:boolean;
  showStatusBarBreakPoint?:number;
  socialIcons?:Array<IconFiles>;
}


@Injectable()
export class FrameworkConfigService {
  showLanguageSelecter = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakPoint = 0;
  socialIcons = new Array<IconFiles>();
  
  configure(settings:FrameworkConfigSettings):void{
    Object.assign(this,settings)
  }

  constructor() { }

}
