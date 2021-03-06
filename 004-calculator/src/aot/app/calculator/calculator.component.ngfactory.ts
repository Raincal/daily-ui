/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/calculator/calculator.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './calculator.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_CalculatorComponent_Host:import0.RenderComponentType = (null as any);
class _View_CalculatorComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CalculatorComponent_0_4:import3.CalculatorComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CalculatorComponent_Host0,renderType_CalculatorComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-calculator',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CalculatorComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CalculatorComponent_0_4 = new import3.CalculatorComponent();
    this._appEl_0.initComponent(this._CalculatorComponent_0_4,[],compView_0);
    compView_0.create(this._CalculatorComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CalculatorComponent) && (0 === requestNodeIndex))) { return this._CalculatorComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._CalculatorComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CalculatorComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CalculatorComponent_Host === (null as any))) { (renderType_CalculatorComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_CalculatorComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CalculatorComponentNgFactory:import9.ComponentFactory<import3.CalculatorComponent> = new import9.ComponentFactory<import3.CalculatorComponent>('app-calculator',viewFactory_CalculatorComponent_Host0,import3.CalculatorComponent);
const styles_CalculatorComponent:any[] = [import10.styles];
var renderType_CalculatorComponent:import0.RenderComponentType = (null as any);
class _View_CalculatorComponent0 extends import1.AppView<import3.CalculatorComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import11.NgFor;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CalculatorComponent0,renderType_CalculatorComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','App');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','Display');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n\n	',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','Buttons');
    this._text_6 = this.renderer.createText(this._el_5,'\n		',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import2.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import12.TemplateRef_(this._appEl_7,viewFactory_CalculatorComponent1);
    this._NgFor_7_6 = new import11.NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parentInjector.get(import13.IterableDiffers),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import11.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.buttons;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_7_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_7_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_7_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n    ',this.context.display,'\n  ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CalculatorComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.CalculatorComponent> {
  if ((renderType_CalculatorComponent === (null as any))) { (renderType_CalculatorComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/004-calculator/src/app/calculator/calculator.component.html',0,import8.ViewEncapsulation.Emulated,styles_CalculatorComponent,{})); }
  return new _View_CalculatorComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_CalculatorComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CalculatorComponent1,renderType_CalculatorComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Button');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.context.$implicit.size || '');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'data-size',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.value;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_0,'data-value',((currVal_2 == (null as any))? (null as any): currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'\n			',this.context.$implicit.label,'\n		');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.handleClick(this.context.$implicit.value)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_CalculatorComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_CalculatorComponent1(viewUtils,parentInjector,declarationEl);
}