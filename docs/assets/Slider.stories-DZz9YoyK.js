import{g as ze,r as t}from"./iframe-DQ1lPaZy.js";import{F as Ve}from"./Field-YtCAM2Pd.js";import{c as He,F as m}from"./index-C4eiBceS.js";import{r as Q}from"./randomId-Dfhrkieu.js";var K={exports:{}},ue;function Ce(){return ue||(ue=1,function(u,o){function p(d){if(d&&typeof d=="object"){var n=d.which||d.keyCode||d.charCode;n&&(d=n)}if(typeof d=="number")return R[d];var a=String(d),s=l[a.toLowerCase()];if(s)return s;var s=y[a.toLowerCase()];if(s)return s;if(a.length===1)return a.charCodeAt(0)}p.isEventKey=function(n,a){if(n&&typeof n=="object"){var s=n.which||n.keyCode||n.charCode;if(s==null)return!1;if(typeof a=="string"){var h=l[a.toLowerCase()];if(h)return h===s;var h=y[a.toLowerCase()];if(h)return h===s}else if(typeof a=="number")return a===s;return!1}},o=u.exports=p;var l=o.code=o.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},y=o.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(e=97;e<123;e++)l[String.fromCharCode(e)]=e-32;for(var e=48;e<58;e++)l[e-48]=e;for(e=1;e<13;e++)l["f"+e]=e+111;for(e=0;e<10;e++)l["numpad "+e]=e+96;var R=o.names=o.title={};for(e in l)R[l[e]]=e;for(var v in y)l[v]=y[v]}(K,K.exports)),K.exports}var qe=Ce();const De=ze(qe);function Re(u){let o=!1;function p(...l){o||(o=!0,requestAnimationFrame(()=>{o=!1,u(...l)}))}return p}const Ae=He({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{[m.small]:{root:"h-5",track:`
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},[m.medium]:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[m.large]:{root:"h-7",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isFocused:{true:{thumb:`
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:m.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:m.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:m.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:m.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:m.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:m.large,className:{root:"mb-4"}}],defaultVariants:{sizer:m.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function _e(u,o,p){return((u-o)/(p-o)||0)*100}function i({className:u,sizer:o,label:p,error:l,hint:y,disabled:e,required:R,ref:v,name:d,max:n=100,min:a=0,step:s=1,shiftSteps:h=10,tabIndex:de,value:Y,defaultValue:I,onChange:ce,onMouseDown:me,onTouchStart:fe,onKeyDown:pe,onFocus:he,onBlur:ge,"aria-labelledby":be,"aria-describedby":ve,"aria-errormessage":we,"aria-invalid":Z,...Se}){const ee=t.useRef(null),X=t.useRef(null),f=t.useRef(null),[A,U]=t.useState(!1),[$,re]=t.useState(!1),[ye,te]=t.useState(I!==void 0?Number(I):void 0),_=Y!==void 0?Number(Y):ye,z=_===void 0?a:_;function ae(r){const c=parseFloat(r.toFixed(5));if(te(c),f.current){const S=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(S,"value").set;if(g){const V=new Event("input",{bubbles:!0});g.call(f.current,c),f.current.dispatchEvent(V)}}}function O(r){if(!X.current)return;const{left:c,right:S,width:ie}=X.current.getBoundingClientRect();let g="touches"in r?r.touches[0].clientX:r.clientX;g<c?g=c:g>S&&(g=S);let V=(g-c)/ie*(n-a)+a;V=Math.round(V/s)*s,ae(V)}const j=Re(r=>{O(r)});function Ee(r){e||(document.addEventListener("mousemove",j),document.addEventListener("mouseup",se),O(r.nativeEvent),me?.(r),r.preventDefault(),A||U(!0),ee.current?.focus())}function se(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",se)}function Fe(r){e||(document.addEventListener("touchmove",j),document.addEventListener("touchup",E),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E),O(r.nativeEvent),fe?.(r),r.preventDefault())}function E(){document.removeEventListener("touchmove",j),document.removeEventListener("touchup",E),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}function Te(r){if(!e){let c;const S=r.nativeEvent.shiftKey;switch(De(r.nativeEvent)){case"right":case"up":case"page up":c=Math.min(n,z+(S?s*h:s));break;case"left":case"down":case"page down":c=Math.max(a,z-(S?s*h:s));break;case"home":c=a;break;case"end":c=n;break;default:return}ae(c),pe?.(r),r.preventDefault(),A&&U(!1)}}function Ne(r){e||($||re(!0),he?.(r))}function Me(r){e||(A&&U(!1),$&&re(!1),f.current&&ge?.({...r,target:f.current,currentTarget:f.current}))}t.useLayoutEffect(()=>{_===void 0&&I===void 0&&f.current?.value!=null&&te(Number(f.current.value))},[]);function W(r){return typeof r=="function"?r({value:z,min:a,max:n,step:s}):r}const G=W(p),J=W(y),w=W(l),[Le]=t.useState(Q()),oe=be||(G?Le:void 0),[ke]=t.useState(Q()),ne=ve||(J?ke:void 0),[xe]=t.useState(Q()),le=we||(w&&w!==!0?xe:void 0),B=_e(z,a,n),P=Ae({sizer:o,isDisabled:e,isFocused:$&&!e&&!A,hasFieldHeader:!!G,hasFieldFooter:!!(w&&w!==!0||J),hasError:!!w,atMin:B===0,atMax:B===100});return t.createElement(Ve,{className:u,sizer:o,label:G,labelId:oe,hint:J,hintId:ne,error:w,errorId:le,disabled:e,required:R},t.createElement("div",{...Se,ref:ee,className:P.root(),role:"slider",tabIndex:e?-1:de||0,onMouseDown:Ee,onTouchStart:Fe,onFocus:Ne,onBlur:Me,onKeyDown:Te,"aria-valuemax":n,"aria-valuemin":a,"aria-valuenow":z,"aria-labelledby":oe,"aria-describedby":ne,"aria-errormessage":le,"aria-invalid":Z!==void 0?Z:!!w},t.createElement("div",{ref:X,className:P.track()},t.createElement("div",{className:P.fill(),style:{right:`${100-B}%`}}),t.createElement("div",{className:P.thumb(),style:{left:`${B}%`}}))),t.createElement("input",{ref:r=>{f.current=r,typeof v=="function"?v(r):v&&(v.current=r)},type:"text",name:d,className:"hidden","aria-hidden":!0,defaultValue:_,onChange:ce}))}i.sizer=m;i.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"number"},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const je={title:"Form controls/Slider",component:i};function b(u){return{hint:({value:o})=>t.createElement("div",{className:"flex"},t.createElement("div",null,u),t.createElement("div",{className:"ml-auto"},o)),"aria-label":u}}const H={tags:["!dev","!test"],args:{label:"A label",hint:"A hint",error:"An error message",defaultValue:"50"}},F={args:b("Slider with no valueish prop")},T={args:{value:"50",...b("Slider with controlled value")}},N={args:{defaultValue:"50",...b("Slider with uncontrolled value")}},M={args:{disabled:!0,defaultValue:"50",...b("Disabled Slider")}},C={tags:["!dev","!test"],render:u=>t.createElement("div",{className:"flex flex-col gap-4"},t.createElement(i,{...F.args}),t.createElement(i,{...T.args}),t.createElement(i,{...N.args}),t.createElement(i,{...M.args}))},q={args:{defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,...b("Slider with custom range")}},L={args:{sizer:i.sizer.small,defaultValue:"50",...b("Small Slider (default)")}},k={args:{sizer:i.sizer.medium,defaultValue:"50",...b("Medium Slider")}},x={args:{sizer:i.sizer.large,defaultValue:"50",...b("Large Slider")}},D={tags:["!dev","!test"],render:u=>t.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},t.createElement(i,{...L.args,className:"sm:flex-1"}),t.createElement(i,{...k.args,className:"sm:flex-1"}),t.createElement(i,{...x.args,className:"sm:flex-1"}))};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50'
  }
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: withMetaHint('Slider with no valueish prop')
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: '50',
    ...withMetaHint('Slider with controlled value')
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '50',
    ...withMetaHint('Slider with uncontrolled value')
  }
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '50',
    ...withMetaHint('Disabled Slider')
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    ...withMetaHint('Slider with custom range')
  }
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    defaultValue: '50',
    ...withMetaHint('Small Slider (default)')
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.medium,
    defaultValue: '50',
    ...withMetaHint('Medium Slider')
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.large,
    defaultValue: '50',
    ...withMetaHint('Large Slider')
  }
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
    </div>
}`,...D.parameters?.docs?.source}}};const Be=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","AllControlStates","CustomRange","Small","Medium","Large","AllSizes"],$e=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:C,AllSizes:D,Controlled:T,CustomRange:q,Disabled:M,FieldLayout:H,Large:x,Medium:k,NoValue:F,Small:L,Uncontrolled:N,__namedExportsOrder:Be,default:je},Symbol.toStringTag,{value:"Module"}));export{q as C,$e as S,i as a};
