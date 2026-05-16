import{a as Mt}from"./chunk-ONHLPZQ3.js";import{a as It,b as it,c as nt,d as Oi,e as at,f as Dt,g as ot,i as Ti,j as Ii,o as Di}from"./chunk-UIYN66TG.js";import{$a as s,$b as di,$d as Ei,Ab as E,Ac as kt,Bb as le,Bc as fi,C as Kt,Ca as ni,Da as ge,Db as J,E as Jt,Ea as P,Eb as St,Ec as pi,Fb as Ge,Fc as Je,Fd as Ie,Ga as g,Gc as Ye,Ha as T,I as Yt,Ia as ne,Ib as j,Ja as ai,Jb as q,K as xe,Kc as Xe,L as Re,Lb as Se,M as vt,Ma as $,N as X,O as Xt,Oa as qe,Pa as z,Pb as Ze,Pc as et,Rb as Ke,Sc as Ee,T as ei,Ta as x,Tc as hi,U as ee,Ua as y,Ub as Pe,Uc as Fe,V as F,Va as oi,Vb as si,Vc as Et,W as O,Wc as tt,Xa as de,Xc as W,Y as m,Ya as ce,Yb as pe,Za as h,Zb as I,Zc as ui,_a as l,_b as ze,_d as Mi,a as B,aa as te,ab as u,ad as gi,ae as Fi,b as se,ba as ie,bb as xt,bd as Y,ca as ye,cb as yt,da as ti,db as wt,e as Dn,ec as ke,fc as Me,fd as Oe,g as Qt,ga as H,gb as We,gd as _i,h as Ut,ha as U,hb as me,i as L,ib as fe,id as bi,j as $e,ja as we,jb as _,jd as Ft,kb as b,kd as Ot,la as je,lb as G,ld as vi,mb as M,na as Ce,nb as Qe,o as Gt,ob as Z,pa as V,pb as C,pc as ci,pd as xi,qb as S,qd as yi,rb as ri,sb as li,sd as wi,tb as Ct,td as Ci,u as N,ua as ii,ub as K,ud as Te,vb as ae,vd as he,w as Zt,wb as k,wd as Si,xd as ki,y as ve,ya as d,yb as Ue,yd as Tt,z as Q,zb as p,zc as mi}from"./chunk-533GEBJF.js";var Lt=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new Ut(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(Q(e=>e.some(t=>t.target===o)),xe({bufferSize:1,refCount:!0}),X(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Li=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m(U);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Lt(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ln=["notch"],An=["matFormFieldNotchedOutline",""],Rn=["*"],Ai=["iconPrefixContainer"],Ri=["textPrefixContainer"],Pi=["iconSuffixContainer"],zi=["textSuffixContainer"],Pn=["textField"],zn=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Bn=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Nn(n,o){n&1&&u(0,"span",21)}function Vn(n,o){if(n&1&&(l(0,"label",20),M(1,1),x(2,Nn,1,0,"span",21),s()),n&2){let e=b(2);h("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),z("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Hn(n,o){if(n&1&&x(0,Vn,3,5,"label",20),n&2){let e=b();y(e._hasFloatingLabel()?0:-1)}}function $n(n,o){n&1&&u(0,"div",7)}function jn(n,o){}function qn(n,o){if(n&1&&$(0,jn,0,0,"ng-template",13),n&2){b(2);let e=K(1);h("ngTemplateOutlet",e)}}function Wn(n,o){if(n&1&&(l(0,"div",9),x(1,qn,1,1,null,13),s()),n&2){let e=b();h("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),y(e._forceDisplayInfixLabel()?-1:1)}}function Qn(n,o){n&1&&(l(0,"div",10,2),M(2,2),s())}function Un(n,o){n&1&&(l(0,"div",11,3),M(2,3),s())}function Gn(n,o){}function Zn(n,o){if(n&1&&$(0,Gn,0,0,"ng-template",13),n&2){b();let e=K(1);h("ngTemplateOutlet",e)}}function Kn(n,o){n&1&&(l(0,"div",14,4),M(2,4),s())}function Jn(n,o){n&1&&(l(0,"div",15,5),M(2,5),s())}function Yn(n,o){n&1&&u(0,"div",16)}function Xn(n,o){n&1&&(l(0,"div",18),M(1,6),s())}function ea(n,o){if(n&1&&(l(0,"mat-hint",22),p(1),s()),n&2){let e=b(2);h("id",e._hintLabelId),d(),E(e.hintLabel)}}function ta(n,o){if(n&1&&(l(0,"div",19),x(1,ea,2,2,"mat-hint",22),M(2,7),u(3,"div",23),M(4,8),s()),n&2){let e=b();d(),y(e.hintLabel?1:-1)}}var _e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["mat-label"]]})}return n})(),ia=new O("MatError");var At=(()=>{class n{align="start";id=m(Y).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(fe("id",i.id),z("align",null),k("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),na=new O("MatPrefix");var aa=new O("MatSuffix");var qi=new O("FloatingLabelParent"),Bi=(()=>{class n{_elementRef=m(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(Li);_ngZone=m(U);_parent=m(qi);_resizeSubscription=new Qt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return oa(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&k("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function oa(n){let o=n;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Ni="mdc-line-ripple--active",rt="mdc-line-ripple--deactivating",Vi=(()=>{class n{_elementRef=m(V);_cleanupTransitionEnd;constructor(){let e=m(U),t=m(ge);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(rt),e.add(Ni)}deactivate(){this._elementRef.nativeElement.classList.add(rt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(rt);e.propertyName==="opacity"&&i&&t.remove(Ni,rt)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Hi=(()=>{class n{_elementRef=m(V);_ngZone=m(U);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&Z(Ln,5),t&2){let a;C(a=S())&&(i._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&k("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:An,ngContentSelectors:Rn,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(G(),wt(0,"div",1),xt(1,"div",2,0),M(3),yt(),wt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n})}return n})();var Ne=new O("MatFormField"),ra=new O("MAT_FORM_FIELD_DEFAULT_OPTIONS"),$i="fill",la="auto",ji="fixed",sa="translateY(-50%)",De=(()=>{class n{_elementRef=m(V);_changeDetectorRef=m(pe);_platform=m(Ee);_idGenerator=m(Y);_ngZone=m(U);_defaults=m(ra,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Pe("iconPrefixContainer");_textPrefixContainerSignal=Pe("textPrefixContainer");_iconSuffixContainerSignal=Pe("iconSuffixContainer");_textSuffixContainerSignal=Pe("textSuffixContainer");_prefixSuffixContainers=Ze(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=si(_e);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Te(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||la}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||$i;this._appearanceSignal.set(t)}_appearanceSignal=we($i);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ji}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ji}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=he();constructor(){let e=this._defaults,t=m(tt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),je(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ze(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Re([void 0,void 0]),N(()=>[t.errorState,t.userAriaDescribedBy]),Yt(),Q(([[a,r],[v,D]])=>a!==v||r!==D)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ve(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){di({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ze(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(v=>v.align==="start"):null,r=this._hintChildren?this._hintChildren.find(v=>v.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(r=>r&&!a.includes(r)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,v=t?.getBoundingClientRect().width??0,D=i?.getBoundingClientRect().width??0,be=a?.getBoundingClientRect().width??0,En=this._currentDirection==="rtl"?"-1":"1",Fn=`${r+v}px`,On=`calc(${En} * (${Fn} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Tn=`var(--mat-mdc-form-field-label-transform, ${sa} translateX(${On}))`,In=r+v+D+be;return[Tn,In]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,a){if(t&1&&(ri(a,i._labelChild,_e,5),Qe(a,Be,5)(a,na,5)(a,aa,5)(a,ia,5)(a,At,5)),t&2){Ct();let r;C(r=S())&&(i._formFieldControl=r.first),C(r=S())&&(i._prefixChildren=r),C(r=S())&&(i._suffixChildren=r),C(r=S())&&(i._errorChildren=r),C(r=S())&&(i._hintChildren=r)}},viewQuery:function(t,i){if(t&1&&(li(i._iconPrefixContainerSignal,Ai,5)(i._textPrefixContainerSignal,Ri,5)(i._iconSuffixContainerSignal,Pi,5)(i._textSuffixContainerSignal,zi,5),Z(Pn,5)(Ai,5)(Ri,5)(Pi,5)(zi,5)(Bi,5)(Hi,5)(Vi,5)),t&2){Ct(4);let a;C(a=S())&&(i._textField=a.first),C(a=S())&&(i._iconPrefixContainer=a.first),C(a=S())&&(i._textPrefixContainer=a.first),C(a=S())&&(i._iconSuffixContainer=a.first),C(a=S())&&(i._textSuffixContainer=a.first),C(a=S())&&(i._floatingLabel=a.first),C(a=S())&&(i._notchedOutline=a.first),C(a=S())&&(i._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&k("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[J([{provide:Ne,useExisting:n},{provide:qi,useExisting:n}])],ngContentSelectors:Bn,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(G(zn),$(0,Hn,1,1,"ng-template",null,0,Se),l(2,"div",6,1),_("click",function(r){return i._control.onContainerClick(r)}),x(4,$n,1,0,"div",7),l(5,"div",8),x(6,Wn,2,2,"div",9),x(7,Qn,3,0,"div",10),x(8,Un,3,0,"div",11),l(9,"div",12),x(10,Zn,1,1,null,13),M(11),s(),x(12,Kn,3,0,"div",14),x(13,Jn,3,0,"div",15),s(),x(14,Yn,1,0,"div",16),s(),l(15,"div",17),x(16,Xn,2,0,"div",18)(17,ta,5,1,"div",19),s()),t&2){let a;d(2),k("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),d(2),y(!i._hasOutline()&&!i._control.disabled?4:-1),d(2),y(i._hasOutline()?6:-1),d(),y(i._hasIconPrefix?7:-1),d(),y(i._hasTextPrefix?8:-1),d(2),y(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),d(2),y(i._hasTextSuffix?12:-1),d(),y(i._hasIconSuffix?13:-1),d(),y(i._hasOutline()?-1:14),d(),k("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let r=i._getSubscriptMessageType();d(),y((a=r)==="error"?16:a==="hint"?17:-1)}},dependencies:[Bi,Hi,ke,Vi,At],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[wi,De,W]})}return n})();var da=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),ca={passive:!0},Qi=(()=>{class n{_platform=m(Ee);_ngZone=m(U);_renderer=m(ni).createRenderer(null,null);_styleLoader=m(Fe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Gt;this._styleLoader.load(da);let t=Et(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new L,r="cdk-text-field-autofilled",v=be=>{be.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:be.target,isAutofilled:!0}))):be.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:be.target,isAutofilled:!1})))},D=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",v,ca)));return this._monitoredElements.set(t,{subject:a,unlisten:D}),a}stopMonitoring(e){let t=Et(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({})}return n})();var Gi=new O("MAT_INPUT_VALUE_ACCESSOR");var lt=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Le=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,i,a){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(i,e)??!1;a!==o&&(this.errorState=a,this._stateChanges.next())}};var ma=["button","checkbox","file","hidden","image","radio","range","reset","submit"],fa=new O("MAT_INPUT_CONFIG"),Zi=(()=>{class n{_elementRef=m(V);_platform=m(Ee);ngControl=m(Ye,{optional:!0,self:!0});_autofillMonitor=m(Qi);_ngZone=m(U);_formField=m(Ne,{optional:!0});_renderer=m(ge);_uid=m(Y).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(fa,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new L;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Te(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Je.required)??!1}set required(e){this._required=Te(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&It().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Te(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>It().has(e));constructor(){let e=m(Xe,{optional:!0}),t=m(et,{optional:!0}),i=m(lt),a=m(Gi,{optional:!0,self:!0}),r=this._elementRef.nativeElement,v=r.nodeName.toLowerCase();a?qe(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Le(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=v==="select",this._isTextarea=v==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&je(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ma.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&_("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(fe("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),z("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),k("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},exportAs:["matInput"],features:[J([{provide:Be,useExisting:n}]),Ce]})}return n})(),Rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[ue,ue,Ui,W]})}return n})();var ha=["mat-internal-form-field",""],ua=["*"],Ki=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&k("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ha,ngContentSelectors:ua,decls:1,vars:0,template:function(t,i){t&1&&(G(),M(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ga=["switch"],_a=["*"];function ba(n,o){n&1&&(l(0,"span",11),ye(),l(1,"svg",13),u(2,"path",14),s(),l(3,"svg",15),u(4,"path",16),s()())}var va=new O("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),st=class{source;checked;constructor(o,e){this.source=o,this.checked=e}},Pt=(()=>{class n{_elementRef=m(V);_focusMonitor=m(xi);_changeDetectorRef=m(pe);defaults=m(va);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new st(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=he();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new H;toggleChange=new H;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(Fe).load(nt);let e=m(new Ke("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m(Y).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new st(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Z(ga,5),t&2){let a;C(a=S())&&(i._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(fe("id",i.id),z("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ue(i.color?"mat-"+i.color:""),k("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",I],color:"color",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ze(e)],checked:[2,"checked","checked",I],hideIcon:[2,"hideIcon","hideIcon",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[J([{provide:fi,useExisting:ei(()=>n),multi:!0},{provide:pi,useExisting:n,multi:!0}]),Ce],ngContentSelectors:_a,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(G(),l(0,"div",1)(1,"button",2,0),_("click",function(){return i._handleClick()}),u(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),u(8,"span",8),s(),l(9,"span",9),u(10,"span",10),s(),x(11,ba,5,0,"span",11),s()()(),l(12,"label",12),_("click",function(r){return r.stopPropagation()}),M(13),s()()),t&2){let a=K(2);h("labelPosition",i.labelPosition),d(),k("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),h("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),z("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),d(9),h("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),d(),y(i.hideIcon?-1:11),d(),h("for",i.buttonId),z("id",i._labelId)}},dependencies:[it,Ki],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[Pt,W]})}return n})();var Ve=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var Ji=(()=>{class n{_animationsDisabled=he();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&k("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var ya=["text"],wa=[[["mat-icon"]],"*"],Ca=["mat-icon","*"];function Sa(n,o){if(n&1&&u(0,"mat-pseudo-checkbox",1),n&2){let e=b();h("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function ka(n,o){if(n&1&&u(0,"mat-pseudo-checkbox",3),n&2){let e=b();h("disabled",e.disabled)}}function Ma(n,o){if(n&1&&(l(0,"span",4),p(1),s()),n&2){let e=b();d(),le("(",e.group.label,")")}}var Nt=new O("MAT_OPTION_PARENT_COMPONENT"),Vt=new O("MatOptgroup");var Bt=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},Ae=(()=>{class n{_element=m(V);_changeDetectorRef=m(pe);_parent=m(Nt,{optional:!0});group=m(Vt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(Y).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=we(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new L;constructor(){let e=m(Fe);e.load(nt),e.load(yi),this._signalDisableRipple=!!this._parent&&qe(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Bt(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&Z(ya,7),t&2){let a;C(a=S())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&_("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(fe("id",i.id),z("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),k("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",I]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ca,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(G(wa),x(0,Sa,1,2,"mat-pseudo-checkbox",1),M(1),l(2,"span",2,0),M(4,1),s(),x(5,ka,1,1,"mat-pseudo-checkbox",3),x(6,Ma,2,1,"span",4),u(7,"div",5)),t&2&&(y(i.multiple?0:-1),d(5),y(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),y(i.group&&i.group._inert?6:-1),d(),h("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Ji,it],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Yi(n,o,e){if(e.length){let t=o.toArray(),i=e.toArray(),a=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function Xi(n,o,e,t){return n<e?n:n+o>e+t?Math.max(0,n-t+o):e}var en=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[W]})}return n})();var Ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[Oi,en,Ae,W]})}return n})();var Ia=["trigger"],Da=["panel"],La=[[["mat-select-trigger"]],"*"],Aa=["mat-select-trigger","*"];function Ra(n,o){if(n&1&&(l(0,"span",4),p(1),s()),n&2){let e=b();d(),E(e.placeholder)}}function Pa(n,o){n&1&&M(0)}function za(n,o){if(n&1&&(l(0,"span",11),p(1),s()),n&2){let e=b(2);d(),E(e.triggerValue)}}function Ba(n,o){if(n&1&&(l(0,"span",5),x(1,Pa,1,0)(2,za,2,1,"span",11),s()),n&2){let e=b();d(),y(e.customTrigger?1:2)}}function Na(n,o){if(n&1){let e=me();l(0,"div",12,1),_("keydown",function(i){te(e);let a=b();return ie(a._handleKeydown(i))}),M(2,1),s()}if(n&2){let e=b();Ue(e.panelClass),k("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Va=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(ti);return()=>_i(n)}}),Ha=new O("MAT_SELECT_CONFIG"),$a=new O("MatSelectTrigger"),$t=class{source;value;constructor(o,e){this.source=o,this.value=e}},an=(()=>{class n{_viewportRuler=m(ui);_changeDetectorRef=m(pe);_elementRef=m(V);_dir=m(tt,{optional:!0});_idGenerator=m(Y);_renderer=m(ge);_parentFormField=m(Ne,{optional:!0});ngControl=m(Ye,{self:!0,optional:!0});_liveAnnouncer=m(Ci);_defaultOptions=m(Ha,{optional:!0});_animationsDisabled=he();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Yi(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Xi(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new $t(this,e)}_scrollStrategyFactory=m(Va);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=we(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Je.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Zt(()=>{let e=this.options;return e?e.changes.pipe(Re(e),vt(()=>ve(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(vt(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(Q(e=>e),N(()=>{}));_closedStream=this.openedChange.pipe(Q(e=>!e),N(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let e=m(lt),t=m(Xe,{optional:!0}),i=m(et,{optional:!0}),a=m(new Ke("tabindex"),{optional:!0}),r=m(bi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Le(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ve(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Re(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Jt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Tt(this._trackedModal,"aria-owns",t),ki(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Tt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!Oe(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let v=this.selected;r.onKeydown(e);let D=this.selected;D&&v!==D&&this._liveAnnouncer.announce(D.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!Oe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let v=this.options.some(D=>!D.disabled&&!D.selected);this.options.forEach(D=>{D.disabled||(v?D.select():D.deselect())})}else{let v=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==v&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ft?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Si(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ve(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ve(...this.options.map(t=>t._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=hi(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&Qe(a,$a,5)(a,Ae,5)(a,Vt,5),t&2){let r;C(r=S())&&(i.customTrigger=r.first),C(r=S())&&(i.options=r),C(r=S())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&Z(Ia,5)(Da,5)(Ot,5),t&2){let a;C(a=S())&&(i.trigger=a.first),C(a=S())&&(i.panel=a.first),C(a=S())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&_("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(z("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),k("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ze(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],placeholder:"placeholder",required:[2,"required","required",I],multiple:[2,"multiple","multiple",I],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",I],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ze],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",I]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[J([{provide:Be,useExisting:n},{provide:Nt,useExisting:n}]),Ce],ngContentSelectors:Aa,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(G(La),l(0,"div",2,0),_("click",function(){return i.open()}),l(3,"div",3),x(4,Ra,2,1,"span",4)(5,Ba,3,1,"span",5),s(),l(6,"div",6)(7,"div",7),ye(),l(8,"svg",8),u(9,"path",9),s()()()(),$(10,Na,3,16,"ng-template",10),_("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=K(1);d(3),z("id",i._valueId),d(),y(i.empty?4:5),d(6),h("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ft,Ot],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=F({imports:[vi,Ht,W,gi,ue,Ht]})}return n})();var qa=[Dt,ue,Rt,zt,jt],on=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=T({type:n})}static{this.\u0275inj=F({imports:[qa,Dt,ue,Rt,zt,jt]})}}return n})();var ln=(function(n){return n.Default="default",n.Faster="faster",n})(ln||{}),mt=(()=>{class n{constructor(){this.splitorIcon=ot,this.animating=!0,this.color="#000",this.speed=ln.Default}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-splitor"]],hostAttrs:[1,"lcd-splitor"],hostVars:6,hostBindings:function(t,i){t&2&&(ae("color",i.color),k("lcd-splitor--animate-faster",i.speed==="faster")("lcd-splitor--animating",i.animating))},inputs:{animating:"animating",color:"color",speed:"speed"},standalone:!1,decls:5,vars:5,consts:[[3,"icon"]],template:function(t,i){t&1&&u(0,"fa-icon",0)(1,"fa-icon",0)(2,"fa-icon",0)(3,"fa-icon",0)(4,"fa-icon",0),t&2&&(h("icon",i.splitorIcon),d(),h("icon",i.splitorIcon),d(),h("icon",i.splitorIcon),d(),h("icon",i.splitorIcon),d(),h("icon",i.splitorIcon))},dependencies:[Ie],styles:[`.lcd-splitor{display:flex;flex-direction:row}.lcd-splitor--animating>:nth-child(1){animation:1.5s .25s infinite splitor-animation}.lcd-splitor--animating>:nth-child(2){animation:1.5s .5s infinite splitor-animation}.lcd-splitor--animating>:nth-child(3){animation:1.5s .75s infinite splitor-animation}.lcd-splitor--animating>:nth-child(4){animation:1.5s 1s infinite splitor-animation}.lcd-splitor--animating>:nth-child(5){animation:1.5s 1.25s infinite splitor-animation}.lcd-splitor--animate-faster>:nth-child(n){animation-duration:.85s}@keyframes splitor-animation{0%{opacity:0}to{opacity:1}}
`],encapsulation:2,changeDetection:0})}}return n})();var f=(function(n){return n.NotInService="not-in-service",n.OnTheWay="on-the-way",n.ArrivingSoon="arriving-soon",n.Arrived="arrived",n.Past="past",n})(f||{});var oe=(()=>{class n{constructor(){this.running=new $e(null),this.playlist$=this.runningState$.pipe(Q(e=>e!=null),N(e=>{let{current:t,next:i}=e,a;switch(t.status!==f.Past?a=t:a=i,a.status){case f.ArrivingSoon:case f.Arrived:return a.voices?.[a.status]??{};default:return{}}}),N(e=>{if(Object.keys(e).length===0)return[];let{ch:t,en:i}=e,a=[];for(let r=0;r<t.length;r++){let v=t[r],D=i[r];v&&a.push(B({lang:"ch"},v)),D&&a.push(B({lang:"en"},D))}return i.length>t.length&&a.push(...i.slice(t.length).filter(r=>r?.voiceUrl?.length>0)),a}),xe(1))}get runningState$(){return this.running.asObservable()}init(e,t){let i=B({},e);if(i.stations=e.stations.map(a=>se(B({},a),{status:f.OnTheWay,disabled:t?.disabledStations?.includes?.(a.id)})),e.direction==="down"&&(i.stations=i.stations.reverse()),i.from=i.stations[0],t.from){let a=i.stations.findIndex(r=>r.id===t.from);a!==-1&&(i.stations.slice(0,a).forEach(r=>r.status=f.NotInService),i.from=i.stations[a])}if(i.to=i.stations.at(-1),t.to){let a=i.stations.findIndex(r=>r.id===t.to);a&&(i.stations.slice(a+1).forEach(r=>r.status=f.NotInService),i.to=i.stations[a])}return this.runningLine=i,this.setStartStation(),this.runningLine}getNextStation(e){let{stations:t}=this.runningLine,i=e+1;if(i===t.length)return null;let a=t[i];return a.disabled?this.getNextStation(i):{index:i,station:a}}setStartStation(){let{from:e,stations:t}=this.runningLine;for(let i=0;i<t.length;i++){let a=t[i];if(e===a){e.status=f.ArrivingSoon;let r=this.getNextStation(i);this.running.next({current:Object.assign(e),next:r?Object.assign(r):null});break}}}next(){let{stations:e}=this.runningLine,t=e.findIndex(v=>v.status===f.ArrivingSoon||v.status===f.Arrived);if(t===-1)return;let i=e[t],{index:a,station:r}=this.getNextStation(t)??{};switch(i.status){case f.ArrivingSoon:i.status=f.Arrived;break;case f.Arrived:if(i.id===this.runningLine.to.id)return;if(i.status=f.Past,r){if(typeof a=="number"&&a>t+1)for(let v=t+1;v<a;v++)e[v].status=f.Past;r.status=f.ArrivingSoon}break}this.running.next({current:Object.assign(i),next:r?Object.assign(r):null})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=ee({token:n,factory:n.\u0275fac})}}return n})();function pt(n){if(!n||!n.main)return"";let{prefix:o,main:e,suffix:t}=n;return[o,e,t].filter(i=>i).join("")}var ht=(()=>{class n{constructor(){this.transform=pt}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=ai({name:"lineName",type:n,pure:!0,standalone:!1})}}return n})();function Wa(n,o){if(n&1&&(l(0,"div",15)(1,"span",16),p(2,"\u4E0B\u4E00\u7AD9"),s(),l(3,"span",17),p(4,"Next"),s()(),l(5,"div",18)(6,"span",16),p(7),s(),l(8,"span",17),p(9),j(10,"stripNewLine"),s()()),n&2){let e=b();d(7),E(e.nameCh),d(2),le(" ",q(10,2,e.nameEn)," ")}}function Qa(n,o){if(n&1&&(l(0,"div",15)(1,"span",16),p(2,"\u5230\u8FBE\u7AD9"),s(),l(3,"span",17),p(4,"Arrived"),s()(),l(5,"div",18)(6,"span",16),p(7),s(),l(8,"span",17),p(9),j(10,"stripNewLine"),s()()),n&2){let e=b();d(7),E(e.nameCh),d(2),le(" ",q(10,2,e.nameEn)," ")}}function Ua(n,o){if(n&1&&x(0,Wa,11,4)(1,Qa,11,4),n&2){let e=o;y(e.status==="arriving-soon"?0:e.status==="arrived"?1:-1)}}var cn=(()=>{class n{constructor(e){this.runningLineService=e,this.splitorIcon=ot,this.running$=e.runningState$.pipe(Q(t=>t!=null),N(t=>{let{current:i}=t;return i.status!==f.Past?i:t.next}))}static{this.\u0275fac=function(t){return new(t||n)(P(oe))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-header"]],inputs:{line:"line"},standalone:!1,decls:28,vars:12,consts:[[1,"lcd-header","lcd-header--grid"],[1,"lcd-header__logo-container"],["src","assets/logo.png","alt","Jinan Metro Logo",1,"lcd-header__logo"],[1,"lcd-header__line-number"],[1,"lcd-header__line-number__text"],[1,"lcd-header__line-number__text__ch"],[1,"lcd-header__line-number__text__en"],[1,"lcd-header__station"],[1,"lcd-header__dest"],[1,"lcd-header__dest__a"],[1,"lcd-header__dest__cn"],[1,"lcd-header__dest__en"],[1,"lcd-header__dest__splitor"],["color","var(--foreground-color)"],[1,"lcd-header__dest__b"],[1,"lcd-header__station__prefix"],[1,"lcd-header__station__cn"],[1,"lcd-header__station__en"],[1,"lcd-header__station__station-name"]],template:function(t,i){if(t&1&&(l(0,"div",0)(1,"div",1),u(2,"img",2),s(),l(3,"div",3)(4,"span"),p(5),s(),l(6,"div",4)(7,"span",5),p(8),s(),l(9,"span",6),p(10),j(11,"lineName"),s()()(),l(12,"div",7),x(13,Ua,2,1),j(14,"async"),s(),l(15,"div",8)(16,"div",9)(17,"span",10),p(18),s(),l(19,"span",11),p(20),s()(),l(21,"div",12),u(22,"lcd-splitor",13),s(),l(23,"div",14)(24,"span",10),p(25),s(),l(26,"span",11),p(27),s()()()()),t&2){let a;d(5),E(i.line.nameCh.main),d(3),le(" ",i.line.nameCh.suffix," "),d(2),le(" ",q(11,8,i.line.nameEn)," "),d(3),y((a=q(14,10,i.running$))?13:-1,a),d(5),E(i.line.from.nameCh),d(2),E(i.line.from.nameEn),d(5),E(i.line.to.nameCh),d(2),E(i.line.to.nameEn)}},dependencies:[mt,Me,Ei,ht],styles:[".lcd-header[_ngcontent-%COMP%]{padding:8px 64px 8px 72px;height:96px;display:flex;flex-direction:row;background-color:var(--line-color)}.lcd-header__logo-container[_ngcontent-%COMP%]{flex:0 0;display:flex;flex-direction:column;justify-content:center;padding:8px;background-color:#fff;border-radius:8px}.lcd-header__logo[_ngcontent-%COMP%]{height:100%}.lcd-header__line-number[_ngcontent-%COMP%]{flex:0 0;margin-left:32px;display:flex;flex-direction:row;word-break:keep-all;white-space:nowrap;align-items:center;color:var(--foreground-color)}.lcd-header__line-number[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;font-size:98px;line-height:96px}.lcd-header__line-number__text[_ngcontent-%COMP%]{margin-left:8px;display:flex;flex-direction:column;justify-content:center}.lcd-header__line-number__text__ch[_ngcontent-%COMP%]{font-size:48px;line-height:1.2}.lcd-header__line-number__text__en[_ngcontent-%COMP%]{font-size:28px}.lcd-header__station[_ngcontent-%COMP%]{flex:1 1;margin:-8px 40px;min-width:34.5834%;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;border-radius:0 0 8px 8px;background-color:#fff;box-shadow:2px 2px 5px #000000a6}.lcd-header__station__prefix[_ngcontent-%COMP%], .lcd-header__station__station-name[_ngcontent-%COMP%]{padding:0 40px;display:flex;flex-direction:column;word-break:keep-all;white-space:nowrap;text-align:center}.lcd-header__station__cn[_ngcontent-%COMP%]{font-weight:700;font-size:48px;line-height:1.2}.lcd-header__station__en[_ngcontent-%COMP%]{font-size:28px}.lcd-header__dest[_ngcontent-%COMP%]{flex:1 0;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;color:var(--foreground-color)}.lcd-header__dest__splitor[_ngcontent-%COMP%]{margin:0 24px;font-size:48px}.lcd-header__dest__cn[_ngcontent-%COMP%]{font-size:48px;line-height:1.2}.lcd-header__dest__en[_ngcontent-%COMP%]{font-size:28px}.lcd-header__dest__a[_ngcontent-%COMP%], .lcd-header__dest__b[_ngcontent-%COMP%]{display:flex;flex-direction:column;word-break:keep-all;white-space:nowrap;text-align:center}.lcd-header--grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:100%;grid-template-columns:repeat(2,1fr) repeat(2,3fr);column-gap:32px}.lcd-header--grid[_ngcontent-%COMP%]   .lcd-header__line-number[_ngcontent-%COMP%]{margin-left:0}.lcd-header--grid[_ngcontent-%COMP%]   .lcd-header__station[_ngcontent-%COMP%]{justify-self:stretch;margin-right:0;margin-left:0}"]})}}return n})();var re=(()=>{class n{get config$(){return this.configSubject.asObservable()}get config(){return this.configSubject.getValue()}constructor(){this.configSubject=new $e({nextOnAudioEnded:!0,nextGap:1e3,disabledStations:[]})}update(e){this.configSubject.next(Object.assign({},this.configSubject.value,e))}reset(e={}){this.configSubject.next(B({nextOnAudioEnded:!0,nextGap:1e3,disabledStations:[]},e))}toggleStationDisabled(e){let{disabledStations:t}=this.config,i;t.includes(e)?i=t.filter(a=>a!==e):i=[...t,e],this.update({disabledStations:i})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=ee({token:n,factory:n.\u0275fac})}}return n})();var mn=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-transfer-icon"]],hostVars:4,hostBindings:function(t,i){t&2&&ae("--primary-color",i.mainColor)("--secondary-color",i.transferColor||i.mainColor)},inputs:{mainColor:"mainColor",transferColor:"transferColor"},standalone:!1,decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-inline--fa"],["d","M16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z",2,"fill","var(--primary-color)"],["d","M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8z",2,"fill","var(--secondary-color)"]],template:function(t,i){t&1&&(ye(),l(0,"svg",0),u(1,"path",1)(2,"path",2),s())},encapsulation:2,changeDetection:0})}}return n})();var fn=(()=>{class n{constructor(e){this.containerConfigService=e}setFrom(){this.containerConfigService.update({from:this.station.id})}toggleEnabled(){this.containerConfigService.toggleStationDisabled(this.station.id)}setTo(){if(this.line){let{from:e,stations:t}=this.line,i=t.findIndex(r=>r.id===e.id),a=t.findIndex(r=>r.id===this.station.id);if(a===i){alert("\u8D77\u59CB\u7AD9\u548C\u7EC8\u70B9\u7AD9\u4E0D\u80FD\u4E3A\u540C\u4E00\u7AD9");return}else if(a<i){alert("\u7EC8\u70B9\u7AD9\u4E0D\u80FD\u5728\u8D77\u59CB\u7AD9\u524D");return}}this.containerConfigService.update({to:this.station.id})}static{this.\u0275fac=function(t){return new(t||n)(P(re))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-station-toolbar"]],hostAttrs:[1,"lcd-station__toolbar"],inputs:{line:"line",station:"station"},standalone:!1,decls:6,vars:1,consts:[[1,"lcd-station__toolbar-item",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0),_("click",function(){return i.setFrom()}),p(1,` \u8D77
`),s(),l(2,"div",0),_("click",function(){return i.toggleEnabled()}),p(3),s(),l(4,"div",0),_("click",function(){return i.setTo()}),p(5,` \u7EC8
`),s()),t&2&&(d(3),le(" ",i.station.disabled?"\u542F":"\u7981",`
`))},styles:[`.lcd-station__toolbar{position:absolute;top:48px;right:0;display:flex;flex-direction:row;padding:4px 0;background-color:#fff;border-radius:4px;box-shadow:0 2px 10px #0006;transform:translate(calc(50% - 20px));display:none}.lcd-station--showing-editing-bar .lcd-station__toolbar{display:flex}.lcd-station__toolbar-item{margin:0 4px;display:flex;flex-direction:column;align-items:center;width:24px;height:24px;border:1px solid rgba(0,0,0,.4);border-radius:50%;cursor:pointer}.lcd-station__toolbar-item:hover{box-shadow:2px 2px 7px -3px #0006}
`],encapsulation:2,changeDetection:0})}}return n})();var Ja=(n,o)=>o.id;function Ya(n,o){if(n&1&&u(0,"lcd-transfer-icon",4),n&2){let e=b();h("transferColor",e.station.transfers==null||e.station.transfers[0]==null?null:e.station.transfers[0].color)}}function Xa(n,o){if(n&1){let e=me();l(0,"fa-icon",12),_("click",function(){te(e);let i=b();return ie(i.toggleEditingBar())}),s()}if(n&2){let e=b();h("icon",e.settingIcon)}}function eo(n,o){n&1&&(l(0,"span",9),p(1,"(\u6682\u7F13\u5F00\u901A)"),s())}function to(n,o){if(n&1&&(l(0,"div",14)(1,"span",15),p(2),j(3,"lineName"),s(),l(4,"span",16),p(5),j(6,"lineName"),s()()),n&2){let e=o.$implicit;ae("--transfer-line-color",e.color),k("lcd-station__transfer--disabled",e.disabled),d(2),E(q(3,6,e.nameCh)),d(3),E(q(6,8,e.nameEn))}}function io(n,o){if(n&1&&(l(0,"div",10),de(1,to,7,10,"div",13,Ja),s()),n&2){let e=b();d(),ce(e.station.transfers)}}function no(n,o){if(n&1&&u(0,"lcd-station-toolbar",11),n&2){let e=b();h("line",e.line)("station",e.station)}}var pn=(()=>{class n{get transferrable(){return this.station?.transfers?.some(e=>!e.disabled)??!1}get config(){return this.containerConfigService.config}constructor(e){this.containerConfigService=e,this.settingIcon=Ti,this.StationStatus=f,this.showEditingBar=!1}toggleEditingBar(){this.showEditingBar=!this.showEditingBar}clickOutside(){this.showEditingBar=!1}static{this.\u0275fac=function(t){return new(t||n)(P(re))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-station"]],inputs:{line:"line",station:"station"},standalone:!1,decls:13,vars:19,consts:[[1,"lcd-station",3,"clickOutside","attachOutsideOnClick"],[1,"lcd-station__line"],["speed","faster",3,"animating","color"],[1,"lcd-station__point"],["mainColor","var(--line-color)",3,"transferColor"],[1,"lcd-station__setting-icon",3,"icon"],[1,"lcd-station__info"],[1,"lcd-station__name__ch"],[1,"lcd-station__name__en",3,"innerHTML"],[1,"lcd-station__disabled"],[1,"lcd-station__transfers"],[3,"line","station"],[1,"lcd-station__setting-icon",3,"click","icon"],[1,"lcd-station__transfer",3,"lcd-station__transfer--disabled","--transfer-line-color"],[1,"lcd-station__transfer"],[1,"lcd-station__transfer__line__ch"],[1,"lcd-station__transfer__line__en"]],template:function(t,i){t&1&&(l(0,"div",0),_("clickOutside",function(){return i.clickOutside()}),l(1,"div",1),u(2,"lcd-splitor",2),s(),l(3,"div",3),x(4,Ya,1,1,"lcd-transfer-icon",4)(5,Xa,1,1,"fa-icon",5),s(),l(6,"div",6)(7,"span",7),p(8),s(),u(9,"span",8),x(10,eo,2,0,"span",9),x(11,io,3,0,"div",10),s(),x(12,no,1,2,"lcd-station-toolbar",11),s()),t&2&&(k("lcd-station--transferrable",i.transferrable)("lcd-station--disabled",i.station.disabled)("lcd-station--arriving-soon",i.station.status===i.StationStatus.ArrivingSoon)("lcd-station--past",i.station.status===i.StationStatus.Past||i.station.status===i.StationStatus.NotInService)("lcd-station--showing-editing-bar",i.showEditingBar),h("attachOutsideOnClick",!0),d(2),h("animating",i.station.status==="arriving-soon")("color",i.station.status==="arriving-soon"?"red":"white"),d(2),y(i.transferrable?4:i.config.editing?5:-1),d(4),E(i.station.nameCh),d(),h("innerHTML",i.station.nameEn,ii),d(),y(i.station.disabled?10:-1),d(),y(i.station.transfers?11:-1),d(),y(i.config.editing?12:-1))},dependencies:[Ie,Mi,mt,mn,fn,ht],styles:[`.lcd-station{position:relative;display:flex;flex-direction:row;align-items:center}.lcd-station--disabled{color:#e9e9e9}.lcd-station--disabled :not(.lcd-station__line){filter:grayscale(100%)}.lcd-station--past{color:#e9e9e9}.lcd-station--past:not(.just-priority){filter:grayscale(100%)}.lcd-station__point{position:relative;width:40px;height:40px;border:4px solid var(--line-color);border-radius:50%;background-color:#fff;text-align:center;font-size:24px;line-height:32px;z-index:30}.lcd-station__setting-icon{display:none}.lcd-station--transferrable:not(.lcd-station--disabled) .lcd-station__point{animation:1.75s ease-in infinite transferrable-station}.lcd-station--arriving-soon .lcd-station__point{background-color:var(--line-color)}.lcd-station__line{flex-grow:1;margin-inline:-4px;height:24px;background-color:var(--line-color);z-index:-1;text-align:center}.lcd-station__line lcd-splitor{display:inline;font-size:24px;line-height:24px;z-index:20}.lcd-station__line lcd-splitor :nth-child(n+4){display:none}.lcd-station__info{position:absolute;top:48px;right:0;display:flex;flex-direction:column;word-break:keep-all;white-space:nowrap;transform:translate(calc(50% - 20px));text-align:center}.lcd-station:not(.lcd-station--past,.lcd-station--disabled) .lcd-station__name__ch,.lcd-station:not(.lcd-station--past,.lcd-station--disabled) .lcd-station__name__en{text-shadow:1px 0 1px rgba(0,0,0,.5)}.lcd-station__transfers{align-self:center}.lcd-station__transfer{margin:4px 0;padding:4px 16px;display:flex;flex-direction:column;word-break:keep-all;white-space:nowrap;border-radius:8px;color:#fff;background-color:var(--transfer-line-color)}.lcd-station__transfer--disabled,.lcd-station--disabled .lcd-station__transfer{background-color:#e9e9e9}.lcd-station:hover .lcd-station__setting-icon,.lcd-station--showing-editing-bar .lcd-station__setting-icon{display:initial}lcd-station:first-child .lcd-station__line{display:none}lcd-station:nth-child(2n) .lcd-station__info{transform:translate(calc(50% - 20px),calc(-56px - 100%))}lcd-station:nth-child(2n) .lcd-station__info .lcd-station__transfers{order:-1}@keyframes transferrable-station{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`],encapsulation:2})}}return n})();var oo=(n,o)=>o.id;function ro(n,o){if(n&1&&u(0,"lcd-station",2),n&2){let e=o.$implicit,t=b();h("line",t.line)("station",e)}}var hn=(()=>{class n{get stations(){return this.line?.stations??[]}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-route"]],hostAttrs:[1,"lcd-route"],hostVars:2,hostBindings:function(t,i){t&2&&ae("--rest-station-count",i.stations.length-1)},inputs:{line:"line"},standalone:!1,decls:4,vars:0,consts:[[1,"lcd-route__station-container"],[1,"lcd-route__stations"],[3,"line","station"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),de(2,ro,1,2,"lcd-station",2,oo),s()()),t&2&&(d(2),ce(i.stations))},dependencies:[pn],styles:[".lcd-route__station-container[_ngcontent-%COMP%]{padding-top:128px;padding-bottom:128px}.lcd-route__stations[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px repeat(var(--rest-station-count),1fr);align-items:start}"]})}}return n})();function so(n,o){if(n&1&&(l(0,"div"),p(1),s()),n&2){let e=o.$implicit;d(),E(e)}}var un=(()=>{class n{constructor(e){this.runningLineService=e,this.subtitle$=this.runningLineService.playlist$.pipe(N(t=>{let i=[];for(let a=0;a<t.length;a++){let r=t[a];if(a===0){i.push([r.subtitle]);continue}let v=t[a-1];r.lang===v.lang?i.at(-1)?.push(r.subtitle):i.push([r.subtitle])}return i.map(a=>a.join(""))}))}static{this.\u0275fac=function(t){return new(t||n)(P(oe))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-subtitle"]],standalone:!1,decls:3,vars:2,template:function(t,i){t&1&&(de(0,so,2,1,"div",null,oi),j(2,"async")),t&2&&ce(q(2,0,i.subtitle$))},dependencies:[Me],styles:["[_nghost-%COMP%]{font-size:24px;font-weight:500;line-height:1.5}"]})}}return n})();var gn=(()=>{class n{get line(){return this._line}set line(e){this._line=e,this.lineSubject.next(e)}get lineColor(){return this.runningLine.color}get config(){return this.containerConfigService.config}constructor(e,t){this.runningLineService=e,this.containerConfigService=t,this.lineSubject=new L,this.lineSubject.pipe(Xt(i=>{this.containerConfigService.reset({disabledStations:i.stations.filter(a=>a.disabled).map(a=>a.id)})}),Kt(this.containerConfigService.config$)).subscribe(([i,a])=>{this.runningLine=this.runningLineService.init(i,a)})}static{this.\u0275fac=function(t){return new(t||n)(P(oe),P(re))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-container"]],hostVars:4,hostBindings:function(t,i){t&2&&ae("--foreground-color",i.line.ui.foregroundColor||"#000")("--line-color",i.lineColor)},inputs:{line:"line"},standalone:!1,decls:4,vars:2,consts:[[3,"line"],[1,"lcd-wrapper"]],template:function(t,i){t&1&&(u(0,"lcd-header",0),l(1,"div",1),u(2,"lcd-route",0)(3,"lcd-subtitle"),s()),t&2&&(h("line",i.runningLine),d(2),h("line",i.runningLine))},dependencies:[cn,hn,un],styles:["[_nghost-%COMP%]{display:block;min-width:1920px;font-family:PingFang SC,Hei}.lcd-wrapper[_ngcontent-%COMP%]{padding-right:64px;padding-left:64px}"]})}}return n})();var po=["audio"],ho=n=>({$implicit:n});function uo(n,o){n&1&&We(0)}function go(n,o){if(n&1){let e=me();l(0,"button",4),_("click",function(){let i=te(e).$implicit;return ie(i.play())}),p(1,"Play"),s(),l(2,"button",4),_("click",function(){let i=te(e).$implicit;return ie(i.pause())}),p(3,"Pause"),s(),l(4,"button",4),_("click",function(){let i=te(e).$implicit;return ie(i.next())}),p(5,"Next"),s()}if(n&2){let e=b();h("disabled",e.disabled),d(2),h("disabled",e.disabled),d(2),h("disabled",e.disabled)}}var _n=(()=>{class n{constructor(){this.disabled=!1,this.ended=new H,this.autoplay=!1,this.playingIndex=-1}set playlist(e){this._playlist=[...e],this.playingIndex=-1,this.next()}get playing(){return this._playlist?.[this.playingIndex]}get context(){return{play:this.play.bind(this),pause:this.pause.bind(this),next:this.next.bind(this)}}ngAfterViewInit(){this.playing&&this.playingIndex!==0&&this.audio.nativeElement.play()}play(){this.autoplay=!0,this.audio?.nativeElement?.play?.()}pause(){this.autoplay=!1,this.audio?.nativeElement?.pause?.()}next(){let e=this.playingIndex+1;return e===this._playlist?.length?!1:(this.playingIndex=e,setTimeout(()=>this.audio?.nativeElement?.load?.()),!0)}audioLoaded(e){let t=e.target;(this.autoplay||this.playingIndex!==0)&&t.play()}audioEnded(){this.next()||this.ended.emit()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-player"]],viewQuery:function(t,i){if(t&1&&Z(po,5),t&2){let a;C(a=S())&&(i.audio=a.first)}},inputs:{controls:"controls",disabled:"disabled",playlist:"playlist"},outputs:{ended:"ended"},standalone:!1,decls:5,vars:5,consts:[["audio",""],["defaultControls",""],[3,"canplaythrough","ended","src"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-stroked-button","",3,"click","disabled"]],template:function(t,i){if(t&1&&(l(0,"audio",2,0),_("canplaythrough",function(r){return i.audioLoaded(r)})("ended",function(){return i.audioEnded()}),s(),$(2,uo,1,0,"ng-container",3)(3,go,6,3,"ng-template",null,1,Se)),t&2){let a=K(4);h("src",i.playing),d(2),h("ngTemplateOutlet",i.controls||a)("ngTemplateOutletContext",Ge(3,ho,i.context))}},dependencies:[ke,at],encapsulation:2})}}return n})();var bo=()=>[],vo=()=>["/dashboard"],xo=n=>({$implicit:n});function yo(n,o){n&1&&We(0)}function wo(n,o){if(n&1&&$(0,yo,1,0,"ng-container",21),n&2){let e=b();h("ngTemplateOutlet",e.customOperation)("ngTemplateOutletContext",Ge(2,xo,e.config))}}var bn=(()=>{class n{get config(){return this.containerConfigService.config}constructor(e,t,i){this.runningLineService=e,this.containerConfigService=t,this.changelogService=i,this.collapseIcon=Ii,this.collapsed=!1,this.playlist$=this.runningLineService.playlist$.pipe(N(a=>a.map(r=>r?.voiceUrl)),xe(1))}togglePanel(){this.collapsed=!this.collapsed}moveNext(){this.runningLineService.next()}onPlayerEnded(){this.config.nextOnAudioEnded&&setTimeout(()=>this.moveNext(),this.config.nextGap)}_updateConfig(e,t){this.containerConfigService.update({[e]:t})}updateConfig(e,t){this._updateConfig(e,t.target.value)}updateBooleanConfig(e,t){this._updateConfig(e,t.checked)}showChangelog(){this.changelogService.show()}static{this.\u0275fac=function(t){return new(t||n)(P(oe),P(re),P(Di))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-operation-panel"]],hostAttrs:[1,"lcd-operation-panel"],hostVars:2,hostBindings:function(t,i){t&2&&k("lcd-operation-panel--collapsed",i.collapsed)},inputs:{customOperation:"customOperation"},standalone:!1,decls:52,vars:13,consts:[[1,"lcd-operation-panel__header"],[1,"lcd-operation-panel__footer"],["href","https://space.bilibili.com/4946860","target","_blank","referrerpolicy","no-referrer",2,"text-decoration","none"],["href","https://github.com/RVC-Boss/GPT-SoVITS","target","_blank","referrerpolicy","no-referrer"],["href","https://angular.io","target","_blank","referrerpolicy","no-referrer"],["href","https://fontawesome.com","target","_blank","referrerpolicy","no-referrer"],[1,"lcd-operation-panel__toggle",3,"click"],[3,"icon"],[1,"lcd-operation-panel__content"],[1,"lcd-operation-panel__category"],[1,"lcd-operation-panel__category__title"],[1,"lcd-operation-panel__operation-item"],["mat-stroked-button","",3,"click","disabled"],[3,"change","checked"],["subscriptSizing","dynamic"],["matInput","","type","number","min","0","step","100",2,"width","80px",3,"change","value"],["type","checkbox",3,"change","checked"],[3,"ended","playlist","disabled"],[1,"lcd-operation-panel__category","lcd-operation-panel__category--post"],["mat-stroked-button","",3,"routerLink"],["mat-stroked-button","",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),p(2," \u4F5C\u8005\uFF1A\u3010bilibili\u3011"),l(3,"a",2),p(4,"\u8F71\u8F98\u662F\u795E\u68CD"),s(),p(5,"\xA0\xA0Powered by "),l(6,"a",3),p(7,"GPT-SoVITS"),s(),p(8,", "),l(9,"a",4),p(10,"Angular"),s(),p(11,", "),l(12,"a",5),p(13,"FontAwesome"),s(),p(14,"\xA0\xA0\u8BF7\u52FF\u8F6C\u8F7D "),s(),l(15,"div",6),_("click",function(){return i.togglePanel()}),u(16,"fa-icon",7),s()(),l(17,"div",8),x(18,wo,1,4,"ng-container"),l(19,"div",9)(20,"div",10),p(21,"LCD Control"),s(),l(22,"span",11)(23,"button",12),_("click",function(){return i.moveNext()}),p(24,"Next"),s()(),u(25,"br"),l(26,"span",11)(27,"mat-slide-toggle",13),_("change",function(r){return i.updateBooleanConfig("nextOnAudioEnded",r)}),p(28,"Move Next When Audio Ended"),s()(),l(29,"span",11)(30,"mat-form-field",14)(31,"mat-label"),p(32,"Move Gap Time(ms):"),s(),l(33,"input",15),_("change",function(r){return i.updateConfig("nextGap",r)}),s()()(),u(34,"br"),l(35,"span",11)(36,"mat-slide-toggle",16),_("change",function(r){return i.updateBooleanConfig("editing",r)}),p(37,"Edit Station Mode (\u26A0Will Lose Current Running Status)"),s()()(),l(38,"div",9)(39,"div",10),p(40,"Voice Control"),s(),l(41,"div",11)(42,"lcd-player",17),j(43,"async"),_("ended",function(){return i.onPlayerEnded()}),s()()(),l(44,"div",18)(45,"div",10),p(46,"About"),s(),l(47,"div",11)(48,"a",19),p(49,"Dashboard"),s(),l(50,"button",20),_("click",function(){return i.showChangelog()}),p(51,"Changelog"),s()()()()),t&2&&(d(16),h("icon",i.collapseIcon),d(2),y(i.customOperation?18:-1),d(5),h("disabled",i.config.editing),d(4),h("checked",i.config.nextOnAudioEnded),d(6),h("value",i.config.nextGap),d(3),h("checked",i.config.editing),d(6),h("playlist",q(43,9,i.playlist$)||St(11,bo))("disabled",i.config.editing),d(6),h("routerLink",St(12,vo)))},dependencies:[ke,Ie,at,De,_e,Zi,Pt,mi,_n,Me],styles:[`.lcd-operation-panel{position:fixed;right:0;bottom:0;left:0;display:flex;flex-direction:column;padding:0 32px 32px;height:256px;transition:height .25s ease-in-out;box-shadow:0 0 10px #0006}.lcd-operation-panel--collapsed{padding:0;min-height:initial;height:50.4px}.lcd-operation-panel--collapsed .lcd-operation-panel__toggle{transform:rotate(-180deg)}.lcd-operation-panel--collapsed .lcd-operation-panel__footer{padding-top:16.2px;padding-bottom:16.2px}.lcd-operation-panel--collapsed>:not(.lcd-operation-panel__header){display:none}.lcd-operation-panel__content{display:flex;flex-direction:row;column-gap:32px;padding:16px 0}.lcd-operation-panel__category{font-weight:500}.lcd-operation-panel__category__title{margin-bottom:8px}.lcd-operation-panel__category--post{margin-left:auto}.lcd-operation-panel__footer{padding:7px 0;color:#e9e9e9;line-height:18px;text-align:center}.lcd-operation-panel__footer a:active,.lcd-operation-panel__footer a:visited{color:inherit}.lcd-operation-panel__footer a:hover{color:var(--line-color)}.lcd-operation-panel__toggle{position:absolute;top:0;right:0;padding:16px;cursor:pointer;transition:transform .25s ease-in}.lcd-operation-panel .mdc-button+.mdc-button,.lcd-operation-panel__operation-item+.lcd-operation-panel__operation-item{margin-left:8px}
`],encapsulation:2})}}return n})();var Wt={};Dn(Wt,{Line2:()=>Sn});var He={voiceUrl:"common/TrainRunning.wav",subtitle:"\u5217\u8F66\u8FD0\u884C\u8BF7\u7AD9\u7A33\u6276\u597D\uFF0C\u4E0D\u8981\u770B\u624B\u673A\uFF0C\u6CE8\u610F\u811A\u4E0B\u5B89\u5168\u3002"},gt={voiceUrl:"common/HeartSeat.wav",subtitle:"\u8BF7\u628A\u7231\u5FC3\u4E13\u5EA7\u7559\u7ED9\u6709\u9700\u8981\u7684\u4E58\u5BA2\u3002"};var bt=(function(n){return n.Left="left",n.Right="right",n.Both="both",n})(bt||{}),_t={[bt.Left]:{ch:"\u5DE6\u8FB9",en:"the left"},[bt.Right]:{ch:"\u53F3\u8FB9",en:"the right"},[bt.Both]:{ch:"\u53CC\u4FA7",en:"both sides"}};function vn(n,o){return Array.isArray(n)?o==="ch"?`\u53EF\u6362\u4E58${n.map(e=>pt(e.nameCh).toLowerCase()).join("\uFF0C")}\uFF0C\u8BF7\u6CE8\u610F\u6362\u4E58\u5217\u8F66\u7684\u9996\u672B\u73ED\u8F66\u65F6\u95F4\u3002`:`You can transfer to ${n.map(e=>pt(e.nameEn).toLowerCase()).join(", ")}. `:""}var So={[f.ArrivingSoon]:{ch:(n,{side:o="left",terminal:e,transfer:t}={})=>t?vn(n.transfers,"ch"):`\u4E0B\u4E00\u7AD9${e?"\u7EC8\u70B9\u7AD9":""}${n.nameCh}\uFF0C\u5F00${_t[o].ch}\u95E8\u3002`,en:(n,{side:o="left",terminal:e}={})=>`Next station ${e?"is the terminal station ":""}${n.nameEn.replace("<br>"," ")}. ${vn(n.transfers,"en")}Doors will open on ${_t[o].en}.`},[f.Arrived]:{ch:(n,{side:o="left",terminal:e}={})=>`${e?"\u7EC8\u70B9\u7AD9":""}${n.nameCh}\u5230\u4E86\uFF0C\u5F00${_t[o].ch}\u95E8\u3002`,en:(n,{side:o="left",terminal:e}={})=>`We are now at ${e?"the terminal station ":""}${n.nameEn.replace("<br>"," ")}. Doors will open on ${_t[o].en}.`}},xn=So;function yn(n,o){return n&&Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Object.fromEntries(Object.entries(t).map(([i,a])=>[i,a.map((r,v)=>o({voice:r,status:e,lang:i,index:v}))]))]))}function wn(n){return se(B({},n),{stations:n.stations.map(o=>o.voices?se(B({},o),{voices:yn(o.voices,({voice:e,status:t,lang:i})=>{let a;if(e)typeof e=="string"?a={voiceUrl:e}:a=B({},e);else return e;return a=a,i&&i in Mt.VoicesPrefix&&(a.voiceUrl=Mt.VoicesPrefix[i]+a.voiceUrl),a.subtitle||(a.subtitle=xn[t]?.[i]?.(o,a.subtitleConfig??{})),a})}):o)})}var c="02/",R={voiceUrl:`${c}19-PengJiaZhuang-T.wav`,subtitle:"\u672C\u6B21\u5217\u8F66\u7EC8\u70B9\u7AD9\u5F6D\u5BB6\u5E84\u3002"},A=[{voiceUrl:`${c}Common-0201.wav`,subtitle:"\u4E0A\u4E0B\u8F66\u5F53\u5FC3\u7F1D\u9699\uFF0C\u8BF7\u6CE8\u610F\u811A\u4E0B\u5B89\u5168\u3002\u95E8\u706F\u95EA\u70C1\u65F6\uFF0C\u8BF7\u52FF\u4E0A\u4E0B\u8F66\u3002"}],Cn={ui:{get title(){return"Jinan Metro Line 2"}},id:"02",nameCh:{main:"2",suffix:"\u53F7\u7EBF"},nameEn:{prefix:"Line ",main:"2"},color:"#FEDD00",direction:"up",stations:[{id:"0201",nameCh:"\u738B\u5E9C\u5E84",nameEn:"Wang Fu Zhuang",transfers:[{id:"01",nameCh:{main:"1",suffix:"\u53F7\u7EBF"},nameEn:{prefix:"Line ",main:"1"},color:"#A55FC8"}],voices:{[f.ArrivingSoon]:{ch:[{voiceUrl:`${c}01-WangFuZhuang-T.wav`,subtitle:"\u672C\u6B21\u5217\u8F66\u7EC8\u70B9\u7AD9\u738B\u5E9C\u5E84\u3002"},{voiceUrl:`${c}01-WangFuZhuang-01.wav`,subtitleConfig:{terminal:!0}},{voiceUrl:`${c}01-WangFuZhuang-0101.wav`,subtitleConfig:{transfer:!0}}],en:[,,{voiceUrl:`${c}01-WangFuZhuang-01.wav`,subtitleConfig:{terminal:!0}}]},[f.Arrived]:{ch:[{voiceUrl:`${c}01-WangFuZhuang-02.wav`,subtitleConfig:{terminal:!0}},...A],en:[,{voiceUrl:`${c}01-WangFuZhuang-02.wav`,subtitleConfig:{terminal:!0}}]}}},{id:"0202",nameCh:"\u814A\u5C71\u5357",nameEn:"La Shan Nan",voices:{[f.ArrivingSoon]:{ch:[R,`${c}02-LaShanNan-01.wav`,He],en:[,`${c}02-LaShanNan-01.wav`]},[f.Arrived]:{ch:[`${c}02-LaShanNan-02.wav`,...A],en:[,`${c}02-LaShanNan-02.wav`]}}},{id:"0203",nameCh:"\u814A\u5C71",nameEn:"La Shan",voices:{[f.ArrivingSoon]:{ch:[R,`${c}03-LaShan-01.wav`],en:[,`${c}03-LaShan-01.wav`]},[f.Arrived]:{ch:[`${c}03-LaShan-02.wav`,...A],en:[,`${c}03-LaShan-02.wav`]}}},{id:"0204",nameCh:"\u4E8C\u73AF\u897F\u8DEF",nameEn:"Er Huan Xi Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}04-ErHuanXiLu-01.wav`,gt],en:[,`${c}04-ErHuanXiLu-01.wav`]},[f.Arrived]:{ch:[`${c}04-ErHuanXiLu-02.wav`,...A],en:[,`${c}04-ErHuanXiLu-02.wav`]}}},{id:"0205",nameCh:"\u8001\u5C6F",nameEn:"Lao Tun",voices:{[f.ArrivingSoon]:{ch:[R,`${c}05-LaoTun-01.wav`],en:[,`${c}05-LaoTun-01.wav`]},[f.Arrived]:{ch:[`${c}05-LaoTun-02.wav`,...A],en:[,`${c}05-LaoTun-02.wav`]}}},{id:"0206",nameCh:"\u516B\u91CC\u6865",nameEn:"Ba Li Qiao",voices:{[f.ArrivingSoon]:{ch:[R,`${c}06-BaLiQiao-01.wav`],en:[,`${c}06-BaLiQiao-01.wav`]},[f.Arrived]:{ch:[`${c}06-BaLiQiao-02.wav`,...A],en:[,`${c}06-BaLiQiao-02.wav`]}}},{id:"0207",nameCh:"\u76CA\u5EB7\u8DEF",nameEn:"Yi Kang Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}07-YiKangLu-01.wav`,He],en:[,`${c}07-YiKangLu-01.wav`]},[f.Arrived]:{ch:[`${c}07-YiKangLu-02.wav`,...A],en:[,`${c}07-YiKangLu-02.wav`]}}},{id:"0208",nameCh:"\u6D4E\u5357\u7AD9\u5317",nameEn:"Jinan Railway<br/>Station North",voices:{[f.ArrivingSoon]:{ch:[R,`${c}08-JinanRailwayStationNorth-01.wav`],en:[,`${c}08-JinanRailwayStationNorth-01.wav`]},[f.Arrived]:{ch:[`${c}08-JinanRailwayStationNorth-02.wav`,...A],en:[,`${c}08-JinanRailwayStationNorth-02.wav`]}}},{id:"0209",nameCh:"\u6D4E\u6CFA\u8DEF",nameEn:"Ji Luo Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}09-JiLuoLu-01.wav`],en:[,`${c}09-JiLuoLu-01.wav`]},[f.Arrived]:{ch:[`${c}09-JiLuoLu-02.wav`,...A],en:[,`${c}09-JiLuoLu-02.wav`]}}},{id:"0210",nameCh:"\u751F\u4EA7\u8DEF",nameEn:"Sheng Chan Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}10-ShengChanLu-01.wav`,gt],en:[,`${c}10-ShengChanLu-01.wav`]},[f.Arrived]:{ch:[`${c}10-ShengChanLu-02.wav`,...A],en:[,`${c}10-ShengChanLu-02.wav`]}}},{id:"0211",nameCh:"\u5317\u56ED",nameEn:"Bei Yuan",voices:{[f.ArrivingSoon]:{ch:[R,`${c}11-BeiYuan-01.wav`],en:[,`${c}11-BeiYuan-01.wav`]},[f.Arrived]:{ch:[`${c}11-BeiYuan-02.wav`,...A],en:[,`${c}11-BeiYuan-02.wav`]}}},{id:"0212",nameCh:"\u5386\u5C71\u8DEF",nameEn:"Li Shan Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}12-LiShanLu-01.wav`],en:[,`${c}12-LiShanLu-01.wav`]},[f.Arrived]:{ch:[`${c}12-LiShanLu-02.wav`,...A],en:[,`${c}12-LiShanLu-02.wav`]}}},{id:"0213",nameCh:"\u4E03\u91CC\u5821",nameEn:"Qi Li Pu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}13-QiLiPu-01.wav`,He],en:[,`${c}13-QiLiPu-01.wav`]},[f.Arrived]:{ch:[`${c}13-QiLiPu-02.wav`,...A],en:[,`${c}13-QiLiPu-02.wav`]}}},{id:"0214",nameCh:"\u795D\u7538",nameEn:"Zhu Dian",voices:{[f.ArrivingSoon]:{ch:[R,`${c}14-ZhuDian-01.wav`],en:[,`${c}14-ZhuDian-01.wav`]},[f.Arrived]:{ch:[`${c}14-ZhuDian-02.wav`,...A],en:[,`${c}14-ZhuDian-02.wav`]}}},{id:"0215",nameCh:"\u516B\u6DA7\u5821",nameEn:"Ba Jian Pu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}15-BaJianPu-01.wav`,{voiceUrl:`${c}15-BaJianPu-0101.wav`,subtitleConfig:{transfer:!0}}],en:[,,`${c}15-BaJianPu-01.wav`]},[f.Arrived]:{ch:[`${c}15-BaJianPu-02.wav`,...A],en:[,`${c}15-BaJianPu-02.wav`]}},transfers:[{id:"03",nameCh:{main:"3",suffix:"\u53F7\u7EBF"},nameEn:{prefix:"Line ",main:"3"},color:"#004B87"}]},{id:"0216",nameCh:"\u59DC\u5BB6\u5E84",nameEn:"Jiang Jia Zhuang",voices:{[f.ArrivingSoon]:{ch:[R,`${c}16-JiangJiaZhuang-01.wav`,gt],en:[,`${c}16-JiangJiaZhuang-01.wav`]},[f.Arrived]:{ch:[`${c}16-JiangJiaZhuang-02.wav`,...A],en:[,`${c}16-JiangJiaZhuang-02.wav`]}}},{id:"0217",nameCh:"\u51E4\u51F0\u8DEF",nameEn:"Feng Huang Lu",voices:{[f.ArrivingSoon]:{ch:[R,`${c}17-FengHuangLu-01.wav`],en:[,`${c}17-FengHuangLu-01.wav`]},[f.Arrived]:{ch:[`${c}17-FengHuangLu-02.wav`,...A],en:[,`${c}17-FengHuangLu-02.wav`]}}},{id:"0218",nameCh:"\u9C8D\u5C71",nameEn:"Bao Shan",voices:{[f.ArrivingSoon]:{ch:[R,`${c}18-BaoShan-01.wav`,He],en:[,`${c}18-BaoShan-01.wav`]},[f.Arrived]:{ch:[`${c}18-BaoShan-02.wav`,...A],en:[,`${c}18-BaoShan-02.wav`]}}},{id:"0219",nameCh:"\u5F6D\u5BB6\u5E84",nameEn:"Peng Jia Zhuang",voices:{[f.ArrivingSoon]:{ch:[R,{voiceUrl:`${c}19-PengJiaZhuang-01.wav`,subtitleConfig:{terminal:!0}}],en:[,{voiceUrl:`${c}19-PengJiaZhuang-01.wav`,subtitleConfig:{terminal:!0}}]},[f.Arrived]:{ch:[{voiceUrl:`${c}19-PengJiaZhuang-02.wav`,subtitleConfig:{terminal:!0}},...A],en:[,{voiceUrl:`${c}19-PengJiaZhuang-02.wav`,subtitleConfig:{terminal:!0}}]}}}]},ko=["Wangfuzhuang","South Lashan","Lashan","West Erhuan Road","Laotun","Baliqiao","Yikang Road","North Jinan<br>Railway Station","Jiluo Road","Shengchan Road","Beiyuan","Lishan Road","Qilipu","Zhudian","Bajianpu","Jiangjiazhuang","Fenghuang Road","Baoshan","Pengjiazhuang"],Sn=wn(se(B({},Cn),{stations:Cn.stations.map((n,o)=>se(B({},n),{nameEn:ko[o]??n.nameEn}))}));var Mo=(n,o)=>o.id;function Eo(n,o){if(n&1&&(l(0,"mat-option",6),p(1),s()),n&2){let e=o.$implicit;h("value",e),d(),E(e.ui.title)}}function Fo(n,o){if(n&1){let e=me();l(0,"div",3)(1,"span",4)(2,"mat-form-field")(3,"mat-label"),p(4,"Line"),s(),l(5,"mat-select",5),_("valueChange",function(i){te(e);let a=b();return ie(a.onLineChange(i))}),de(6,Eo,2,2,"mat-option",6,Mo),s()()()()}if(n&2){let e=o.$implicit,t=b();d(5),h("value",t.line)("disabled",e.editing),d(),ce(t.lines)}}var kn=(()=>{class n{constructor(e){this.title=e,this.lines=Object.values(Wt),this.onLineChange(this.lines[0])}onLineChange(e){this.title.setTitle(e.ui.title||"Metro LCD"),this.line=e}static{this.\u0275fac=function(t){return new(t||n)(P(ci))}}static{this.\u0275cmp=g({type:n,selectors:[["lcd-outlet"]],standalone:!1,features:[J([oe,re])],decls:4,vars:2,consts:[["customOperation",""],[3,"line"],[3,"customOperation"],[1,"lcd-operation-panel__category"],[1,"lcd-operation-panel__operation-item"],[3,"valueChange","value","disabled"],[3,"value"]],template:function(t,i){if(t&1&&(u(0,"lcd-container",1)(1,"lcd-operation-panel",2),$(2,Fo,8,2,"ng-template",null,0,Se)),t&2){let a=K(3);h("line",i.line),d(),h("customOperation",a)}},dependencies:[De,_e,an,Ae,gn,bn],encapsulation:2})}}return n})();var Oo=[{path:"",component:kn}],Mn=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=T({type:n})}static{this.\u0275inj=F({imports:[kt.forChild(Oo),kt]})}}return n})();var qd=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=T({type:n})}static{this.\u0275inj=F({imports:[Fi,on,Mn]})}}return n})();export{qd as LcdModule};
