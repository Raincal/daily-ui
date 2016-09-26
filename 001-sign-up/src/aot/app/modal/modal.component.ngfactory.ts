/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/modal/modal.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './modal.component.css.shim';
import * as import11 from '@angular/core/src/animation/animation_style_util';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_keyframe';
import * as import15 from '@angular/core/src/animation/animation_player';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/forms/src/directives/ng_form';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
import * as import20 from '@angular/common/src/directives/ng_for';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/forms/src/directives/control_container';
import * as import23 from '@angular/forms/src/directives/default_value_accessor';
import * as import24 from '@angular/forms/src/directives/validators';
import * as import25 from '@angular/forms/src/directives/ng_model';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from '@angular/forms/src/validators';
import * as import28 from '@angular/forms/src/directives/control_value_accessor';
import * as import29 from '@angular/forms/src/directives/ng_control';
var renderType_ModalComponent_Host:import0.RenderComponentType = (null as any);
class _View_ModalComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ModalComponent_0_4:import3.ModalComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ModalComponent_Host0,renderType_ModalComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-modal',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ModalComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ModalComponent_0_4 = new import3.ModalComponent();
    this._appEl_0.initComponent(this._ModalComponent_0_4,[],compView_0);
    compView_0.create(this._ModalComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ModalComponent) && (0 === requestNodeIndex))) { return this._ModalComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ModalComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ModalComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ModalComponent_Host === (null as any))) { (renderType_ModalComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_ModalComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ModalComponentNgFactory:import9.ComponentFactory<import3.ModalComponent> = new import9.ComponentFactory<import3.ModalComponent>('app-modal',viewFactory_ModalComponent_Host0,import3.ModalComponent);
const styles_ModalComponent:any[] = [import10.styles];
var ModalComponent_flyInOut_states:any = {
  in: {
    transform: 'translateY(0)',
    opacity: 1
  }
  ,
  '*': {},
  void: {}
}
;
function ModalComponent_flyInOut_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):void {
  view.cancelActiveAnimation(element,'flyInOut',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = ModalComponent_flyInOut_states['*'];
  var startStateStyles:any = ModalComponent_flyInOut_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = ModalComponent_flyInOut_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  import11.renderStyles(element,view.renderer,import11.clearStyles(startStateStyles));
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          transform: 'translateY(30%)',
          opacity: 0.01
        }

      ]
      )),import11.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import14.AnimationKeyframe(0,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}]))),
        new import14.AnimationKeyframe(1,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,(null as any))]);
    totalTime = 300;
  }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[startStateStyles])),[
          new import14.AnimationKeyframe(0,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{
            transform: 'true',
            opacity: 'true'
          }
        ]))),
          new import14.AnimationKeyframe(1,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{
            transform: 'translateY(30%)',
            opacity: 0.01
          }
        ])))
      ]
    ,300,0,(null as any))]);
    totalTime = 300;
  }
  if ((player == (null as any))) { (player = new import15.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    import11.renderStyles(element,view.renderer,import11.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  view.queueAnimation(element,'flyInOut',player,totalTime,currentState,nextState);
}
var renderType_ModalComponent:import0.RenderComponentType = (null as any);
class _View_ModalComponent0 extends import1.AppView<import3.ModalComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import16.NgIf;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ModalComponent0,renderType_ModalComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import17.TemplateRef_(this._appEl_0,viewFactory_ModalComponent1);
    this._NgIf_0_6 = new import16.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._anchor_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import16.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.show;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_ModalComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ModalComponent> {
  if ((renderType_ModalComponent === (null as any))) { (renderType_ModalComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/001-sign-up/src/app/modal/modal.component.html',0,import8.ViewEncapsulation.Emulated,styles_ModalComponent,{flyInOut: ModalComponent_flyInOut_factory})); }
  return new _View_ModalComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ModalComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _NgForm_2_3:import18.NgForm;
  _ControlContainer_2_4:any;
  _NgControlStatusGroup_2_5:import19.NgControlStatusGroup;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import20.NgFor;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ModalComponent1,renderType_ModalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Modal');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'form',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','ModalForm');
    this._NgForm_2_3 = new import18.NgForm((null as any),(null as any));
    this._ControlContainer_2_4 = this._NgForm_2_3;
    this._NgControlStatusGroup_2_5 = new import19.NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n\n		',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4,viewFactory_ModalComponent2);
    this._NgFor_4_6 = new import20.NgFor(this._appEl_4.vcRef,this._TemplateRef_4_5,this.parentInjector.get(import21.IterableDiffers),this.parent.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n\n		',(null as any));
    this._el_6 = this.renderer.createElement(this._el_2,'button',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n      Log in ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'i',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','fa fa-fw fa-chevron-right');
    this._text_9 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_10 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'ngSubmit',this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_2,'submit',this.eventHandler(this._handle_submit_2_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'reset',this.eventHandler(this._handle_reset_2_2.bind(this)));
    const subscription_0:any = this._NgForm_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11
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
    if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import20.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6; }
    if (((token === import18.NgForm) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._NgForm_2_3; }
    if (((token === import22.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ControlContainer_2_4; }
    if (((token === import19.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._NgControlStatusGroup_2_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = (null as any);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      var oldRenderVar:any = this._expr_0;
      if ((oldRenderVar == import7.UNINITIALIZED)) { (oldRenderVar = 'void'); }
      var newRenderVar:any = currVal_0;
      if ((newRenderVar == import7.UNINITIALIZED)) { (newRenderVar = 'void'); }
      this.componentType.animations['flyInOut'](this,this._el_0,oldRenderVar,newRenderVar);
      this._expr_0 = currVal_0;
    }
    changes = (null as any);
    const currVal_10:any = this.parent.context.models;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgFor_4_6.ngForOf = currVal_10;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_10,currVal_10);
      this._expr_10 = currVal_10;
    }
    if ((changes !== (null as any))) { this._NgFor_4_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_4_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_2_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_2,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_2_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_2,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_2_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_2,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_2_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_2,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_2_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_2,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_2_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_2,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  detachInternal():void {
    this.componentType.animations['flyInOut'](this,this._el_0,this._expr_0,'void');
  }
  private _handle_ngSubmit_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onSubmit(this._NgForm_2_3)) !== false);
    return (true && pd_0);
  }
  private _handle_submit_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_2_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_2_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_2_3.onReset()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ModalComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ModalComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_ModalComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _DefaultValueAccessor_4_3:import23.DefaultValueAccessor;
  _RequiredValidator_4_4:import24.RequiredValidator;
  _NG_VALIDATORS_4_5:any[];
  _NG_VALUE_ACCESSOR_4_6:any[];
  _NgModel_4_7:import25.NgModel;
  _NgControl_4_8:any;
  _NgControlStatus_4_9:import19.NgControlStatus;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ModalComponent2,renderType_ModalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','Input');
    this._text_3 = this.renderer.createText(this._el_2,'\n				',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'input',(null as any));
    this.renderer.setElementAttribute(this._el_4,'autoComplete','false');
    this.renderer.setElementAttribute(this._el_4,'ngModel','');
    this.renderer.setElementAttribute(this._el_4,'required','');
    this._DefaultValueAccessor_4_3 = new import23.DefaultValueAccessor(this.renderer,new import26.ElementRef(this._el_4));
    this._RequiredValidator_4_4 = new import24.RequiredValidator();
    this._NG_VALIDATORS_4_5 = [this._RequiredValidator_4_4];
    this._NG_VALUE_ACCESSOR_4_6 = [this._DefaultValueAccessor_4_3];
    this._NgModel_4_7 = new import25.NgModel((<_View_ModalComponent1>this.parent)._ControlContainer_2_4,this._NG_VALIDATORS_4_5,(null as any),this._NG_VALUE_ACCESSOR_4_6);
    this._NgControl_4_8 = this._NgModel_4_7;
    this._NgControlStatus_4_9 = new import19.NgControlStatus(this._NgControl_4_8);
    this._text_5 = this.renderer.createText(this._el_2,'\n				',(null as any));
    this._el_6 = this.renderer.createElement(this._el_2,'label',(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n			',(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n		',(null as any));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'input',this.eventHandler(this._handle_input_4_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_4,'blur',this.eventHandler(this._handle_blur_4_1.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.DefaultValueAccessor) && (4 === requestNodeIndex))) { return this._DefaultValueAccessor_4_3; }
    if (((token === import24.RequiredValidator) && (4 === requestNodeIndex))) { return this._RequiredValidator_4_4; }
    if (((token === import27.NG_VALIDATORS) && (4 === requestNodeIndex))) { return this._NG_VALIDATORS_4_5; }
    if (((token === import28.NG_VALUE_ACCESSOR) && (4 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_4_6; }
    if (((token === import25.NgModel) && (4 === requestNodeIndex))) { return this._NgModel_4_7; }
    if (((token === import29.NgControl) && (4 === requestNodeIndex))) { return this._NgControl_4_8; }
    if (((token === import19.NgControlStatus) && (4 === requestNodeIndex))) { return this._NgControlStatus_4_9; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_5:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._RequiredValidator_4_4.required = currVal_5;
      this._expr_5 = currVal_5;
    }
    changes = (null as any);
    const currVal_7:any = import4.interpolate(1,'',this.context.$implicit.id,'');
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgModel_4_7.name = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgModel_4_7.model = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    if ((changes !== (null as any))) { this._NgModel_4_7.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.id,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_4,'id',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.type,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_4,'type',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.$implicit.placeholder,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_4,'placeholder',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = (this._RequiredValidator_4_4.required? '': (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_4,'required',((currVal_6 == (null as any))? (null as any): currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = this._NgControlStatus_4_9.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_4,'ng-untouched',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatus_4_9.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_4,'ng-touched',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._NgControlStatus_4_9.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_4,'ng-pristine',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._NgControlStatus_4_9.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_4,'ng-dirty',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_4_9.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_4,'ng-valid',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_4_9.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_4,'ng-invalid',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import4.interpolate(1,'',this.context.$implicit.id,'');
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementProperty(this._el_6,'htmlFor',currVal_15);
      this._expr_15 = currVal_15;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_4_7.ngOnDestroy();
  }
  private _handle_input_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_4_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_4_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_4_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ModalComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ModalComponent2(viewUtils,parentInjector,declarationEl);
}