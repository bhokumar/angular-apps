import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

import {ScreenService} from '../services/screen.service';

@Directive({selector:'[screenLarge]'})
export class ScreenLarge{
    private hasView = false;
    constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService){
                    screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition){
        condition = this.screenService.screenWidth>= this.screenService.largeBreakPoint;
        if(condition && !this.hasView){
            this.viewContainer.createEmbeddedView(this.template);
        }else if(!condition && this.hasView){
            this.hasView = false;
            this.viewContainer.clear(); 
        }
    }

    onResize(){
        this.screenLarge = false;
    }
}