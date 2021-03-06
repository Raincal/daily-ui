/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/navigation/navigation.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './navigation.component.css.shim';
var renderType_NavigationComponent_Host:import0.RenderComponentType = (null as any);
class _View_NavigationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _NavigationComponent_0_4:import3.NavigationComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavigationComponent_Host0,renderType_NavigationComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-navigation',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NavigationComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavigationComponent_0_4 = new import3.NavigationComponent();
    this._appEl_0.initComponent(this._NavigationComponent_0_4,[],compView_0);
    compView_0.create(this._NavigationComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.NavigationComponent) && (0 === requestNodeIndex))) { return this._NavigationComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._NavigationComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavigationComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_NavigationComponent_Host === (null as any))) { (renderType_NavigationComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_NavigationComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NavigationComponentNgFactory:import9.ComponentFactory<import3.NavigationComponent> = new import9.ComponentFactory<import3.NavigationComponent>('app-navigation',viewFactory_NavigationComponent_Host0,import3.NavigationComponent);
const styles_NavigationComponent:any[] = [import10.styles];
var renderType_NavigationComponent:import0.RenderComponentType = (null as any);
class _View_NavigationComponent0 extends import1.AppView<import3.NavigationComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavigationComponent0,renderType_NavigationComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Navigation');
    this.renderer.setElementAttribute(this._el_0,'id','navigation');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'nav',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ul',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'li',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Browse',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'li',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'My list',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'li',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Top picks',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n			',(null as any));
    this._el_15 = this.renderer.createElement(this._el_4,'li',(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'Recent',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n		',(null as any));
    this._text_18 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_NavigationComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.NavigationComponent> {
  if ((renderType_NavigationComponent === (null as any))) { (renderType_NavigationComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/003-landing-page/src/app/navigation/navigation.component.html',0,import8.ViewEncapsulation.Emulated,styles_NavigationComponent,{})); }
  return new _View_NavigationComponent0(viewUtils,parentInjector,declarationEl);
}