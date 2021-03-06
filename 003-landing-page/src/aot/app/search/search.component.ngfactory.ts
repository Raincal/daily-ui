/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/search/search.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './search.component.css.shim';
import * as import11 from '@angular/forms/src/directives/ng_form';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/forms/src/directives/control_container';
var renderType_SearchComponent_Host:import0.RenderComponentType = (null as any);
class _View_SearchComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SearchComponent_0_4:import3.SearchComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SearchComponent_Host0,renderType_SearchComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-search',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SearchComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SearchComponent_0_4 = new import3.SearchComponent();
    this._appEl_0.initComponent(this._SearchComponent_0_4,[],compView_0);
    compView_0.create(this._SearchComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SearchComponent) && (0 === requestNodeIndex))) { return this._SearchComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SearchComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SearchComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SearchComponent_Host === (null as any))) { (renderType_SearchComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_SearchComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SearchComponentNgFactory:import9.ComponentFactory<import3.SearchComponent> = new import9.ComponentFactory<import3.SearchComponent>('app-search',viewFactory_SearchComponent_Host0,import3.SearchComponent);
const styles_SearchComponent:any[] = [import10.styles];
var renderType_SearchComponent:import0.RenderComponentType = (null as any);
class _View_SearchComponent0 extends import1.AppView<import3.SearchComponent> {
  _el_0:any;
  _NgForm_0_3:import11.NgForm;
  _ControlContainer_0_4:any;
  _NgControlStatusGroup_0_5:import12.NgControlStatusGroup;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SearchComponent0,renderType_SearchComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'form',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Search');
    this.renderer.setElementAttribute(this._el_0,'id','search');
    this._NgForm_0_3 = new import11.NgForm((null as any),(null as any));
    this._ControlContainer_0_4 = this._NgForm_0_3;
    this._NgControlStatusGroup_0_5 = new import12.NgControlStatusGroup(this._ControlContainer_0_4);
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'input',(null as any));
    this.renderer.setElementAttribute(this._el_2,'placeholder','Search for a title...');
    this.renderer.setElementAttribute(this._el_2,'type','search');
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'ngSubmit',this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'submit',this.eventHandler(this._handle_submit_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'reset',this.eventHandler(this._handle_reset_0_2.bind(this)));
    const subscription_0:any = this._NgForm_0_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_0_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.NgForm) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgForm_0_3; }
    if (((token === import13.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ControlContainer_0_4; }
    if (((token === import12.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgControlStatusGroup_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._NgControlStatusGroup_0_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_0,'ng-untouched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatusGroup_0_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_0,'ng-touched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_0_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'ng-pristine',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_0_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_0,'ng-dirty',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_0_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_0,'ng-valid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_0_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_0,'ng-invalid',currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_ngSubmit_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_0_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_0_3.onReset()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_SearchComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SearchComponent> {
  if ((renderType_SearchComponent === (null as any))) { (renderType_SearchComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/003-landing-page/src/app/search/search.component.html',0,import8.ViewEncapsulation.Emulated,styles_SearchComponent,{})); }
  return new _View_SearchComponent0(viewUtils,parentInjector,declarationEl);
}