(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4KiG":function(e,t,n){"use strict";n("VSsl"),n("K6vE"),n("lY1d");var a=n("o0o1"),r=n.n(a),i=n("q1tI"),o=n.n(i),s=n("30+C"),c=n("oa/T"),l=n("r9w1"),u=n("ZGBi"),d=n("VmPI"),m=n("O6Ht"),p=n("M4Ey"),f=n("Z3vd"),h=n("Kfvu"),v=n("QLAq"),g=n("uVck"),b=n("vOnD"),E=n("pg4K"),O=n("IP2g"),_=n("i8i4"),y=n.n(_),j=n("KmP9"),C=n("1AYd"),w=n("jjAL"),x=n("ADg1"),k=n("cVXz"),I=n("9kay"),S=Object(b.b)(x.a).withConfig({displayName:"DropdownMenu__StyledFormControl",componentId:"olaryr-0"})(["width:100%;"]),L=Object(I.c)("user")(Object(E.a)((function(e){var t=e.selectedVariant,n=e.setSelectedVariant,a=e.t,r=Object(i.useState)(0),s=r[0],c=r[1],l=Object(i.useRef)(null);Object(i.useEffect)((function(){c(y.a.findDOMNode(l.current).offsetWidth)}));return o.a.createElement(S,{variant:"outlined"},o.a.createElement(C.a,{ref:l,htmlFor:"course-variant-select"},a("whichCourse")),o.a.createElement(k.a,{value:t,onChange:function(e){n(e.target.value)},input:o.a.createElement(j.a,{labelWidth:s,name:"course-variant",id:"course-variant-select"})},o.a.createElement(w.a,{value:"i"},"Java Programming I"),o.a.createElement(w.a,{value:"ii"},"Java Programming II")))})));n("Wbzz");function P(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,r)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){P(i,a,r,o,s,"next",e)}function s(e){P(i,a,r,o,s,"throw",e)}o(void 0)}))}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=b.b.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"]),M=b.b.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),D=b.b.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),R=b.b.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),V=(Object(b.b)(O.a).withConfig({displayName:"CourseOptionsEditor__StyledIcon",componentId:"sc-15i8a3h-4"})(["margin-right:0.25rem;"]),function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).onClick=function(){var e=N(r.a.mark((function e(n){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({submitting:!0}),a={applies_for_study_right:t.state.applies_for_study_right,digital_education_for_all:t.state.digital_education_for_all,marketing:t.state.marketing,research:t.state.research,course_variant:t.state.currentCourseVariant},i={first_name:t.state.first_name,last_name:t.state.last_name,organizational_id:t.state.student_number},e.next=6,Object(g.m)({extraFields:a,userField:i});case 6:t.setState({submitting:!1}),t.props.onComplete();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={submitting:!1,error:!0,errorObj:{},applies_for_study_right:!1,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,email:void 0,student_number:void 0,loading:!0,focused:null},t.handleInput=function(e){var n,a=e.target.name,r=e.target.value;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleCheckboxInput=function(e){var n,a=e.target.name,r=e.target.checked;t.setState(((n={})[a]=r,n),(function(){t.validate()}))},t.handleFocus=function(e){var n=e.target.name;t.setState({focused:n})},t.handleUnFocus=function(){t.setState({focused:null})},t.validate=function(){t.setState((function(e){return{error:void 0===e.research}}))},t.setSelectedVariant=function(e){t.setState({currentCourseVariant:e})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,T(t,n);var i=a.prototype;return i.componentDidMount=function(){var e=N(r.a.mark((function e(){var t,n,a,i,o,s,c,l,u,d=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.n)();case 2:u=e.sent,this.setState({first_name:null===(t=u.user_field)||void 0===t?void 0:t.first_name,last_name:null===(n=u.user_field)||void 0===n?void 0:n.last_name,email:u.email,student_number:null===(a=u.user_field)||void 0===a?void 0:a.organizational_id,applies_for_study_right:"t"===(null===(i=u.extra_fields)||void 0===i?void 0:i.applies_for_study_right),digital_education_for_all:"t"===(null===(o=u.extra_fields)||void 0===o?void 0:o.digital_education_for_all),marketing:"t"===(null===(s=u.extra_fields)||void 0===s?void 0:s.marketing),research:null===(c=u.extra_fields)||void 0===c?void 0:c.research,currentCourseVariant:null===(l=u.extra_fields)||void 0===l?void 0:l.course_variant,loading:!1},(function(){d.validate()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.render=function(){return o.a.createElement(R,null,o.a.createElement(v.a,{loading:this.state.loading,heightHint:"490px"},o.a.createElement(D,null,o.a.createElement(s.a,null,o.a.createElement(c.a,null,this.props.t("loggedInWith"),this.state.email)))),o.a.createElement("h1",null,this.props.t("studentInfo")),o.a.createElement(M,null,o.a.createElement(D,null,this.props.t("aboutYourself")),o.a.createElement(v.a,{loading:this.state.loading,heightHint:"490px"},o.a.createElement("div",null,o.a.createElement(F,null,o.a.createElement(l.a,{variant:"outlined",type:"text",label:this.props.t("firstName"),autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.a.createElement(F,null,o.a.createElement(l.a,{variant:"outlined",type:"text",label:this.props.t("lastName"),autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.a.createElement(F,null,o.a.createElement(l.a,{variant:"outlined",type:"text",label:this.props.t("sid"),name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,value:this.state.student_number,onChange:this.handleInput,helperText:this.props.t("nosid"),onFocus:this.handleFocus,onBlur:this.handleUnFocus})),o.a.createElement(F,null,o.a.createElement(L,{selectedVariant:this.state.currentCourseVariant||"i",setSelectedVariant:this.setSelectedVariant})),o.a.createElement(F,null,o.a.createElement(u.a,{control:o.a.createElement(d.a,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",value:"1"}),label:this.props.t("marketing")})))),o.a.createElement("h2",null,this.props.t("researchTitle")),o.a.createElement("p",null,this.props.t("research1")),o.a.createElement("ol",null,o.a.createElement("li",null,this.props.t("research2")),o.a.createElement("li",null,this.props.t("research3")),o.a.createElement("li",null,this.props.t("research4"))),o.a.createElement("p",null,this.props.t("research5"),o.a.createElement(h.OutboundLink,{href:"https://dl.acm.org/citation.cfm?id=2858798",target:"_blank",rel:"noopener noreferrer"},"Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies"),"."),o.a.createElement("p",null,this.props.t("research6")),o.a.createElement("p",null,this.props.t("research7")),o.a.createElement(F,null,o.a.createElement(v.a,{loading:this.state.loading,heightHint:"115px"},o.a.createElement(m.a,{"aria-label":this.props.t("researchAgree"),name:"research",value:this.state.research,onChange:this.handleInput},o.a.createElement(u.a,{value:"1",control:o.a.createElement(p.a,{color:"primary"}),label:this.props.t("researchYes")}),o.a.createElement(u.a,{value:"0",control:o.a.createElement(p.a,null),label:this.props.t("researchNo")})))),o.a.createElement(F,null,o.a.createElement(f.a,{onClick:this.onClick,disabled:this.state.submitting||this.state.error,loading:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0},this.props.t("save")))),this.state.error&&o.a.createElement(D,null,o.a.createElement("b",null,this.props.t("fillRequired"))))},a}(o.a.Component));t.a=Object(I.c)("common")(Object(E.a)(V))},"9Emu":function(e,t,n){"use strict";n.r(t);n("K6vE"),n("lY1d");var a=n("o0o1"),r=n.n(a),i=n("q1tI"),o=n.n(i),s=n("TJpk"),c=n.n(s),l=n("vOnD"),u=n("RJaA"),d=n("4KiG"),m=n("Wbzz"),p=n("eczs"),f=n("VUD3"),h=n("Kfvu"),v=n("uVck"),g=n("IP2g"),b=n("wHSu"),E=n("Ff2n"),O=n("rePB"),_=n("wx14"),y=n("iuhU"),j=n("H2TA"),C=n("wpWl"),w=n("i8i4"),x=n("gk1O"),k=n("bfFb"),I=n("Ovef");function S(e){return e.substring(2).toLowerCase()}var L=function(e){var t=e.children,n=e.disableReactTree,a=void 0!==n&&n,r=e.mouseEvent,o=void 0===r?"onClick":r,s=e.onClickAway,c=e.touchEvent,l=void 0===c?"onTouchEnd":c,u=i.useRef(!1),d=i.useRef(null),m=i.useRef(!1),p=i.useRef(!1);i.useEffect((function(){return setTimeout((function(){m.current=!0}),0),function(){m.current=!1}}),[]);var f=i.useCallback((function(e){d.current=w.findDOMNode(e)}),[]),h=Object(k.a)(t.ref,f),v=Object(I.a)((function(e){var t=p.current;if(p.current=!1,m.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(d.current)>-1;else n=!Object(x.a)(d.current).documentElement.contains(e.target)||d.current.contains(e.target);n||!a&&t||s(e)}})),g=function(e){return function(n){p.current=!0;var a=t.props[e];a&&a(n)}},b={ref:h};return!1!==l&&(b[l]=g(l)),i.useEffect((function(){if(!1!==l){var e=S(l),t=Object(x.a)(d.current),n=function(){u.current=!0};return t.addEventListener(e,v),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,v),t.removeEventListener("touchmove",n)}}}),[v,l]),!1!==o&&(b[o]=g(o)),i.useEffect((function(){if(!1!==o){var e=S(o),t=Object(x.a)(d.current);return t.addEventListener(e,v),function(){t.removeEventListener(e,v)}}}),[v,o]),i.createElement(i.Fragment,null,i.cloneElement(t,b))},P=n("NqtD"),N=n("x6Ns"),T=n("bqsI"),F=n("kKAo"),M=n("ye/S"),D=i.forwardRef((function(e,t){var n=e.action,a=e.classes,r=e.className,o=e.message,s=e.role,c=void 0===s?"alert":s,l=Object(E.a)(e,["action","classes","className","message","role"]);return i.createElement(F.a,Object(_.a)({role:c,square:!0,elevation:6,className:Object(y.a)(a.root,r),ref:t},l),i.createElement("div",{className:a.message},o),n?i.createElement("div",{className:a.action},n):null)})),R=Object(j.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(M.b)(e.palette.background.default,t);return{root:Object(_.a)({},e.typography.body2,Object(O.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(D),V=i.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,r=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,o=a.horizontal,s=e.autoHideDuration,c=void 0===s?null:s,l=e.children,u=e.classes,d=e.className,m=e.ClickAwayListenerProps,p=e.ContentProps,f=e.disableWindowBlurListener,h=void 0!==f&&f,v=e.message,g=e.onClose,b=e.onEnter,O=e.onEntered,j=e.onEntering,w=e.onExit,x=e.onExited,k=e.onExiting,S=e.onMouseEnter,F=e.onMouseLeave,M=e.open,D=e.resumeHideDuration,V=e.TransitionComponent,A=void 0===V?T.a:V,W=e.transitionDuration,z=void 0===W?{enter:C.b.enteringScreen,exit:C.b.leavingScreen}:W,H=e.TransitionProps,B=Object(E.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),K=i.useRef(),q=i.useState(!0),Y=q[0],J=q[1],U=Object(I.a)((function(){g&&g.apply(void 0,arguments)})),G=Object(I.a)((function(e){g&&null!=e&&(clearTimeout(K.current),K.current=setTimeout((function(){U(null,"timeout")}),e))}));i.useEffect((function(){return M&&G(c),function(){clearTimeout(K.current)}}),[M,c,G]);var X=function(){clearTimeout(K.current)},Z=i.useCallback((function(){null!=c&&G(null!=D?D:.5*c)}),[c,D,G]);return i.useEffect((function(){if(!h&&M)return window.addEventListener("focus",Z),window.addEventListener("blur",X),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",X)}}),[h,Z,M]),!M&&Y?null:i.createElement(L,Object(_.a)({onClickAway:function(e){g&&g(e,"clickaway")}},m),i.createElement("div",Object(_.a)({className:Object(y.a)(u.root,u["anchorOrigin".concat(Object(P.a)(r)).concat(Object(P.a)(o))],d),onMouseEnter:function(e){S&&S(e),X()},onMouseLeave:function(e){F&&F(e),Z()},ref:t},B),i.createElement(A,Object(_.a)({appear:!0,in:M,onEnter:Object(N.a)((function(){J(!1)}),b),onEntered:O,onEntering:j,onExit:w,onExited:Object(N.a)((function(){J(!0)}),x),onExiting:k,timeout:z,direction:"top"===r?"down":"up"},H),l||i.createElement(R,Object(_.a)({message:v,action:n},p)))))})),A=Object(j.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},r={justifyContent:"flex-start"},i={top:24},o={bottom:24},s={right:24},c={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(_.a)({},t,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({},i,l))),anchorOriginBottomCenter:Object(_.a)({},n,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({},o,l))),anchorOriginTopRight:Object(_.a)({},t,a,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({left:"auto"},i,s))),anchorOriginBottomRight:Object(_.a)({},n,a,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({left:"auto"},o,s))),anchorOriginTopLeft:Object(_.a)({},t,r,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({right:"auto"},i,c))),anchorOriginBottomLeft:Object(_.a)({},n,r,Object(O.a)({},e.breakpoints.up("sm"),Object(_.a)({right:"auto"},o,c)))}}),{flip:!1,name:"MuiSnackbar"})(V);function W(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,r)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=Object(l.b)(R).withConfig({displayName:"profile__StyledSnackbarContent",componentId:"sc-3be922-0"})(["background-color:#43a047 !important;"]),B=Object(l.b)(g.a).withConfig({displayName:"profile__StyledIcon",componentId:"sc-3be922-1"})(["margin-right:0.5rem;"]),K=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={successMessage:null},t.onStepComplete=function(){t.setState({successMessage:"Tiedot tallennettu!"})},t.handleClose=function(){t.setState({successMessage:null})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,z(t,n);var s=a.prototype;return s.componentDidMount=function(){var e,t=(e=r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.context.loggedIn){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(v.h)();case 4:void 0===(null==(n=e.sent)||null===(t=n.extra_fields)||void 0===t?void 0:t.research)&&Object(m.navigate)("/missing-info");case 7:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){W(i,a,r,o,s,"next",e)}function s(e){W(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),s.render=function(){return this.context.loggedIn?o.a.createElement(u.a,null,o.a.createElement(f.a,null,o.a.createElement(c.a,{title:"Profile"}),o.a.createElement("h1",null,"Profile"),o.a.createElement("p",null,"On this page, you can edit your mooc.fi account settings for this course. You can also check your profile on mooc.fi's Test My Code service:"," ",o.a.createElement(h.OutboundLink,{href:"https://tmc.mooc.fi",rel:"noopener noreferrer"},"https://tmc.mooc.fi"),"."),o.a.createElement(d.a,{onComplete:this.onStepComplete})),o.a.createElement(A,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.successMessage,autoHideDuration:6e3,onClose:this.handleClose},o.a.createElement(H,{variant:"success",message:o.a.createElement(i.Fragment,null,o.a.createElement(B,{icon:b.h})," ",o.a.createElement("span",null,this.state.successMessage))}))):("undefined"!=typeof window&&Object(m.navigate)("/sign-in"),o.a.createElement("div",null,"Redirecting..."))},a}(o.a.Component);K.contextType=p.b;t.default=Object(p.c)(K)}}]);
//# sourceMappingURL=component---src-pages-profile-js-0555ac240f912bbd37d8.js.map