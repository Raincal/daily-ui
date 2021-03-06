/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/checkout/checkout.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './checkout.component.css.shim';
import * as import11 from '../../../app/payment-form/payment-form.component';
import * as import12 from '../../../app/pluralize.pipe';
import * as import13 from '../payment-form/payment-form.component.ngfactory';
var renderType_CheckoutComponent_Host:import0.RenderComponentType = (null as any);
class _View_CheckoutComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CheckoutComponent_0_4:import3.CheckoutComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CheckoutComponent_Host0,renderType_CheckoutComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-checkout',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CheckoutComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CheckoutComponent_0_4 = new import3.CheckoutComponent();
    this._appEl_0.initComponent(this._CheckoutComponent_0_4,[],compView_0);
    compView_0.create(this._CheckoutComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CheckoutComponent) && (0 === requestNodeIndex))) { return this._CheckoutComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_CheckoutComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CheckoutComponent_Host === (null as any))) { (renderType_CheckoutComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_CheckoutComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CheckoutComponentNgFactory:import9.ComponentFactory<import3.CheckoutComponent> = new import9.ComponentFactory<import3.CheckoutComponent>('app-checkout',viewFactory_CheckoutComponent_Host0,import3.CheckoutComponent);
const styles_CheckoutComponent:any[] = [import10.styles];
var renderType_CheckoutComponent:import0.RenderComponentType = (null as any);
class _View_CheckoutComponent0 extends import1.AppView<import3.CheckoutComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  /*private*/ _appEl_60:import2.AppElement;
  _PaymentFormComponent_60_4:import11.PaymentFormComponent;
  _text_61:any;
  _arr_0:any;
  _pipe_pluralize_0:import12.PluralizePipe;
  _pipe_pluralize_0_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CheckoutComponent0,renderType_CheckoutComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','OrderSummary');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','Title');
    this._text_3 = this.renderer.createText(this._el_2,'Order Summary',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'table',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n		',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'tbody',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'tr',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n				',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'td',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n				',(null as any));
    this._el_14 = this.renderer.createElement(this._el_9,'td',(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_9,'\n			',(null as any));
    this._text_17 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_18 = this.renderer.createElement(this._el_7,'tr',(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'\n				',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'td',(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'Discount',(null as any));
    this._text_22 = this.renderer.createText(this._el_18,'\n				',(null as any));
    this._el_23 = this.renderer.createElement(this._el_18,'td',(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'',(null as any));
    this._text_25 = this.renderer.createText(this._el_18,'\n			',(null as any));
    this._text_26 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_27 = this.renderer.createElement(this._el_7,'tr',(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'\n				',(null as any));
    this._el_29 = this.renderer.createElement(this._el_27,'td',(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'Subtotal',(null as any));
    this._text_31 = this.renderer.createText(this._el_27,'\n				',(null as any));
    this._el_32 = this.renderer.createElement(this._el_27,'td',(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'',(null as any));
    this._text_34 = this.renderer.createText(this._el_27,'\n			',(null as any));
    this._text_35 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_36 = this.renderer.createElement(this._el_7,'tr',(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'\n				',(null as any));
    this._el_38 = this.renderer.createElement(this._el_36,'td',(null as any));
    this._text_39 = this.renderer.createText(this._el_38,'Tax',(null as any));
    this._text_40 = this.renderer.createText(this._el_36,'\n				',(null as any));
    this._el_41 = this.renderer.createElement(this._el_36,'td',(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'',(null as any));
    this._text_43 = this.renderer.createText(this._el_36,'\n			',(null as any));
    this._text_44 = this.renderer.createText(this._el_7,'\n		',(null as any));
    this._text_45 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._text_46 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_47 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_47,'class','Total');
    this._text_48 = this.renderer.createText(this._el_47,'\n		',(null as any));
    this._el_49 = this.renderer.createElement(this._el_47,'div',(null as any));
    this.renderer.setElementAttribute(this._el_49,'class','TotalLabel');
    this._text_50 = this.renderer.createText(this._el_49,'Total',(null as any));
    this._text_51 = this.renderer.createText(this._el_47,'\n		',(null as any));
    this._el_52 = this.renderer.createElement(this._el_47,'div',(null as any));
    this.renderer.setElementAttribute(this._el_52,'class','Amount');
    this._text_53 = this.renderer.createText(this._el_52,'',(null as any));
    this._el_54 = this.renderer.createElement(this._el_52,'small',(null as any));
    this._text_55 = this.renderer.createText(this._el_54,'GBP',(null as any));
    this._text_56 = this.renderer.createText(this._el_52,'\n		',(null as any));
    this._text_57 = this.renderer.createText(this._el_47,'\n	',(null as any));
    this._text_58 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_59 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_60 = this.renderer.createElement(parentRenderNode,'app-payment-form',(null as any));
    this.renderer.setElementAttribute(this._el_60,'class','PaymentForm');
    this._appEl_60 = new import2.AppElement(60,(null as any),this,this._el_60);
    var compView_60:any = import13.viewFactory_PaymentFormComponent0(this.viewUtils,this.injector(60),this._appEl_60);
    this._PaymentFormComponent_60_4 = new import11.PaymentFormComponent();
    this._appEl_60.initComponent(this._PaymentFormComponent_60_4,[],compView_60);
    compView_60.create(this._PaymentFormComponent_60_4,[],(null as any));
    this._text_61 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._arr_0 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._pipe_pluralize_0 = new import12.PluralizePipe();
    this._pipe_pluralize_0_0 = import4.pureProxy2(this._pipe_pluralize_0.transform.bind(this._pipe_pluralize_0));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.PaymentFormComponent) && (60 === requestNodeIndex))) { return this._PaymentFormComponent_60_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._PaymentFormComponent_60_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    valUnwrapper.reset();
    const currVal_0:any = import4.interpolate(2,'',this.context.state.price,' x ',valUnwrapper.unwrap(import4.castByValue(this._pipe_pluralize_0_0,this._pipe_pluralize_0.transform)(this.context.duration,this._arr_0('day','days'))),'');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this.renderer.setText(this._text_12,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.initialTotal,' GBP');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_15,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.discount,' GBP');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_24,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.subTotal,' GBP');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_33,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.tax,' GBP');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_42,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import4.interpolate(1,'\n			',this.context.total,' ');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_53,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CheckoutComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.CheckoutComponent> {
  if ((renderType_CheckoutComponent === (null as any))) { (renderType_CheckoutComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/002-checkout/src/app/checkout/checkout.component.html',0,import8.ViewEncapsulation.Emulated,styles_CheckoutComponent,{})); }
  return new _View_CheckoutComponent0(viewUtils,parentInjector,declarationEl);
}