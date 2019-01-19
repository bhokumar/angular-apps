import {Injectable} from '@angular/core';

export interface MenuItem{
    text:string,
    icon:string;
    route:string;
    submenu:Array<MenuItem>;
}

@Injectable()
export class MenuService{
    items:Array<MenuItem>;
    isVertical=true;
    showingLeftsideMenu=false;

    toggleLeftSideMenu():void{
        this.showingLeftsideMenu = !this.showingLeftsideMenu;
    }

    toggleOrientation():void{
        this.isVertical = !this.isVertical;
    }
}