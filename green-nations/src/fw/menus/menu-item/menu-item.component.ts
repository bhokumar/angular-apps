import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, Renderer, trigger, transition, style, animate } from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations:[
    trigger('visibilityChnaged',[
      transition(':enter',[
        style({opacity:0}),
        animate(500,style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:0}),
        animate(500,style({opacity:0}))
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute=false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private router: Router,
    private menuService:MenuService,
    private elementRef:ElementRef,
    private renderer:Renderer) { }

  onPopupMouseEnter(event):void{
      if(!this.menuService.isVertical){
          this.mouseInPopup = true;
      }
  }

  onPopupMouseLeave(event):void{
    if(!this.menuService.isVertical){
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave',['$event'])
  onMouseLeave(event):void{
    if(!this.menuService.isVertical){
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter():void{
    if(!this.menuService.isVertical){
      if(this.item.submenu){
        this.mouseInItem = true;
        if(this.parentIsPopup){
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }

  @HostListener('click',['$event'])
  onclick(event):void{
      event.stopPropagation();
      if(this.item.submenu && this.menuService.isVertical){
        this.mouseInPopup = !this.mouseInPopup;
      }else if(this.item.route){
        let newEvent = new MouseEvent('mouseleave',{bubbles:true});
        this.renderer.invokeElementMethod(this.elementRef.nativeElement,'dispatchEvent',[newEvent]);
        this.router.navigate(['/'+this.item.route]);
      }
  }

  checkActiveRoute(route:string){
    this.isActiveRoute = (route == '/'+this.item.route)
  }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);
    this.router.events
                .subscribe((event)=>{
                  if(event instanceof NavigationEnd){
                    this.checkActiveRoute(event.url);
                    console.log(event.url+' '+this.item.route+' '+this.isActiveRoute);
                  }
                });
  }
}
