import{g as ur,r as t}from"./iframe-BOtqaFuv.js";import{F as dr}from"./Field-B78z9rXR.js";import{c as cr,F as m}from"./index-Czi7Upa3.js";import{r as te}from"./randomId-Dfhrkieu.js";var X={exports:{}},pe;function mr(){return pe||(pe=1,function(d,n){function p(c){if(c&&typeof c=="object"){var o=c.which||c.keyCode||c.charCode;o&&(c=o)}if(typeof c=="number")return A[c];var a=String(c),s=i[a.toLowerCase()];if(s)return s;var s=y[a.toLowerCase()];if(s)return s;if(a.length===1)return a.charCodeAt(0)}p.isEventKey=function(o,a){if(o&&typeof o=="object"){var s=o.which||o.keyCode||o.charCode;if(s==null)return!1;if(typeof a=="string"){var h=i[a.toLowerCase()];if(h)return h===s;var h=y[a.toLowerCase()];if(h)return h===s}else if(typeof a=="number")return a===s;return!1}},n=d.exports=p;var i=n.code=n.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},y=n.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(r=97;r<123;r++)i[String.fromCharCode(r)]=r-32;for(var r=48;r<58;r++)i[r-48]=r;for(r=1;r<13;r++)i["f"+r]=r+111;for(r=0;r<10;r++)i["numpad "+r]=r+96;var A=n.names=n.title={};for(r in i)A[i[r]]=r;for(var v in y)i[v]=y[v]}(X,X.exports)),X.exports}var fr=mr();const pr=ur(fr);function hr(d){let n=!1;function p(...i){n||(n=!0,requestAnimationFrame(()=>{n=!1,d(...i)}))}return p}const gr=cr({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
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
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:m.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:m.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:m.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:m.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:m.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:m.large,className:{root:"mb-4"}}],defaultVariants:{sizer:m.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function br(d,n,p){return((d-n)/(p-n)||0)*100}function u({className:d,sizer:n,label:p,error:i,hint:y,disabled:r,required:A,ref:v,name:c,max:o=100,min:a=0,step:s=1,shiftSteps:h=10,tabIndex:We,value:ae,defaultValue:B,onChange:Ge,onMouseDown:U,onTouchStart:K,onKeyDown:$,onFocus:O,onBlur:W,"aria-labelledby":Je,"aria-describedby":Qe,"aria-errormessage":Ye,"aria-invalid":se,...Ze}){const ne=t.useRef(null),G=t.useRef(null),f=t.useRef(null),[D,J]=t.useState(!1),[Q,oe]=t.useState(!1),[er,le]=t.useState(B!==void 0?Number(B):void 0),_=ae!==void 0?Number(ae):er,z=_===void 0?a:_;function ie(e){const l=parseFloat(e.toFixed(5));if(le(l),f.current){const S=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(S,"value").set;if(g){const V=new Event("input",{bubbles:!0});g.call(f.current,l),f.current.dispatchEvent(V)}}}function Y(e){if(!G.current)return;const{left:l,right:S,width:fe}=G.current.getBoundingClientRect();let g="touches"in e?e.touches[0].clientX:e.clientX;g<l?g=l:g>S&&(g=S);let V=(g-l)/fe*(o-a)+a;V=Math.round(V/s)*s,ie(V)}const j=hr(e=>{Y(e)});function rr(e){var l;r||(document.addEventListener("mousemove",j),document.addEventListener("mouseup",ue),Y(e.nativeEvent),U==null||U(e),e.preventDefault(),D||J(!0),(l=ne.current)==null||l.focus())}function ue(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",ue)}function tr(e){r||(document.addEventListener("touchmove",j),document.addEventListener("touchup",E),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E),Y(e.nativeEvent),K==null||K(e),e.preventDefault())}function E(){document.removeEventListener("touchmove",j),document.removeEventListener("touchup",E),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)}function ar(e){if(!r){let l;const S=e.nativeEvent.shiftKey;switch(pr(e.nativeEvent)){case"right":case"up":case"page up":l=Math.min(o,z+(S?s*h:s));break;case"left":case"down":case"page down":l=Math.max(a,z-(S?s*h:s));break;case"home":l=a;break;case"end":l=o;break;default:return}ie(l),$==null||$(e),e.preventDefault(),D&&J(!1)}}function sr(e){r||(Q||oe(!0),O==null||O(e))}function nr(e){r||(D&&J(!1),Q&&oe(!1),f.current&&(W==null||W({...e,target:f.current,currentTarget:f.current})))}t.useLayoutEffect(()=>{var e;_===void 0&&B===void 0&&((e=f.current)==null?void 0:e.value)!=null&&le(Number(f.current.value))},[]);function Z(e){return typeof e=="function"?e({value:z,min:a,max:o,step:s}):e}const ee=Z(p),re=Z(y),w=Z(i),[or]=t.useState(te()),de=Je||(ee?or:void 0),[lr]=t.useState(te()),ce=Qe||(re?lr:void 0),[ir]=t.useState(te()),me=Ye||(w&&w!==!0?ir:void 0),P=br(z,a,o),I=gr({sizer:n,isDisabled:r,isFocused:Q&&!r&&!D,hasFieldHeader:!!ee,hasFieldFooter:!!(w&&w!==!0||re),hasError:!!w,atMin:P===0,atMax:P===100});return t.createElement(dr,{className:d,sizer:n,label:ee,labelId:de,hint:re,hintId:ce,error:w,errorId:me,disabled:r,required:A},t.createElement("div",{...Ze,ref:ne,className:I.root(),role:"slider",tabIndex:r?-1:We||0,onMouseDown:rr,onTouchStart:tr,onFocus:sr,onBlur:nr,onKeyDown:ar,"aria-valuemax":o,"aria-valuemin":a,"aria-valuenow":z,"aria-labelledby":de,"aria-describedby":ce,"aria-errormessage":me,"aria-invalid":se!==void 0?se:!!w},t.createElement("div",{ref:G,className:I.track()},t.createElement("div",{className:I.fill(),style:{right:`${100-P}%`}}),t.createElement("div",{className:I.thumb(),style:{left:`${P}%`}}))),t.createElement("input",{ref:e=>{f.current=e,typeof v=="function"?v(e):v&&(v.current=e)},type:"text",name:c,className:"hidden","aria-hidden":!0,defaultValue:_,onChange:Ge}))}u.sizer=m;u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"number"},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const vr={title:"Form controls/Slider",component:u};function b(d){return{hint:({value:n})=>t.createElement("div",{className:"flex"},t.createElement("div",null,d),t.createElement("div",{className:"ml-auto"},n)),"aria-label":d}}const H={tags:["!dev","!test"],args:{label:"A label",hint:"A hint",error:"An error message",defaultValue:"50"}},F={args:b("Slider with no valueish prop")},N={args:{value:"50",...b("Slider with controlled value")}},L={args:{defaultValue:"50",...b("Slider with uncontrolled value")}},T={args:{disabled:!0,defaultValue:"50",...b("Disabled Slider")}},C={tags:["!dev","!test"],render:d=>t.createElement("div",{className:"flex flex-col gap-4"},t.createElement(u,{...F.args}),t.createElement(u,{...N.args}),t.createElement(u,{...L.args}),t.createElement(u,{...T.args}))},q={args:{defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,...b("Slider with custom range")}},k={args:{sizer:u.sizer.small,defaultValue:"50",...b("Small Slider (default)")}},x={args:{sizer:u.sizer.medium,defaultValue:"50",...b("Medium Slider")}},M={args:{sizer:u.sizer.large,defaultValue:"50",...b("Large Slider")}},R={tags:["!dev","!test"],render:d=>t.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},t.createElement(u,{...k.args,className:"sm:flex-1"}),t.createElement(u,{...x.args,className:"sm:flex-1"}),t.createElement(u,{...M.args,className:"sm:flex-1"}))};var he,ge,be;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50'
  }
}`,...(be=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,we,Se;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: withMetaHint('Slider with no valueish prop')
}`,...(Se=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var ye,Ee,Fe;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    value: '50',
    ...withMetaHint('Slider with controlled value')
  }
}`,...(Fe=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Ne,Le,Te;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    defaultValue: '50',
    ...withMetaHint('Slider with uncontrolled value')
  }
}`,...(Te=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var ke,xe,Me;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '50',
    ...withMetaHint('Disabled Slider')
  }
}`,...(Me=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Me.source}}};var ze,Ve,He;C.parameters={...C.parameters,docs:{...(ze=C.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...(He=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Ce,qe,Re;q.parameters={...q.parameters,docs:{...(Ce=q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    ...withMetaHint('Slider with custom range')
  }
}`,...(Re=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Re.source}}};var Ae,De,_e;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    defaultValue: '50',
    ...withMetaHint('Small Slider (default)')
  }
}`,...(_e=(De=k.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var je,Pe,Ie;x.parameters={...x.parameters,docs:{...(je=x.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.medium,
    defaultValue: '50',
    ...withMetaHint('Medium Slider')
  }
}`,...(Ie=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var Xe,Be,Ue;M.parameters={...M.parameters,docs:{...(Xe=M.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.large,
    defaultValue: '50',
    ...withMetaHint('Large Slider')
  }
}`,...(Ue=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var Ke,$e,Oe;R.parameters={...R.parameters,docs:{...(Ke=R.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
    </div>
}`,...(Oe=($e=R.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};const wr=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","AllControlStates","CustomRange","Small","Medium","Large","AllSizes"],Lr=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:C,AllSizes:R,Controlled:N,CustomRange:q,Disabled:T,FieldLayout:H,Large:M,Medium:x,NoValue:F,Small:k,Uncontrolled:L,__namedExportsOrder:wr,default:vr},Symbol.toStringTag,{value:"Module"}));export{q as C,Lr as S,u as a};
