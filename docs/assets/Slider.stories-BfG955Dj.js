import{g as ir,r as e}from"./iframe-Dcrhn4el.js";import{F as ur}from"./Field--XSLElry.js";import{c as dr,F as q}from"./index-Czi7Upa3.js";import{r as Z}from"./randomId-Dfhrkieu.js";var I={exports:{}},fe;function cr(){return fe||(fe=1,function(d,a){function f(s){if(s&&typeof s=="object"){var p=s.which||s.keyCode||s.charCode;p&&(s=p)}if(typeof s=="number")return c[s];var m=String(s),n=l[m.toLowerCase()];if(n)return n;var n=b[m.toLowerCase()];if(n)return n;if(m.length===1)return m.charCodeAt(0)}f.isEventKey=function(p,m){if(p&&typeof p=="object"){var n=p.which||p.keyCode||p.charCode;if(n==null)return!1;if(typeof m=="string"){var i=l[m.toLowerCase()];if(i)return i===n;var i=b[m.toLowerCase()];if(i)return i===n}else if(typeof m=="number")return m===n;return!1}},a=d.exports=f;var l=a.code=a.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},b=a.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(t=97;t<123;t++)l[String.fromCharCode(t)]=t-32;for(var t=48;t<58;t++)l[t-48]=t;for(t=1;t<13;t++)l["f"+t]=t+111;for(t=0;t<10;t++)l["numpad "+t]=t+96;var c=a.names=a.title={};for(t in l)c[l[t]]=t;for(var D in b)l[D]=b[D]}(I,I.exports)),I.exports}var mr=cr();const fr=ir(mr);function pr(d){let a=!1;function f(...l){a||(a=!0,requestAnimationFrame(()=>{a=!1,d(...l)}))}return f}const hr=dr({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{[q.small]:{root:"h-5 my-2",track:`
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},[q.medium]:{root:"h-6 my-3",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[q.large]:{root:"h-7 my-4",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isFocused:{true:{thumb:`
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}}],defaultVariants:{sizer:q.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function gr(d,a,f){return((d-a)/(f-a)||0)*100}function u({className:d,sizer:a,label:f,explainer:l,hint:b,error:t,disabled:c,required:D,ref:s,children:p,name:m,max:n=100,min:i=0,step:v=1,shiftSteps:ee=10,tabIndex:Ke=0,value:re,defaultValue:X,onChange:$e,onMouseDown:B,onTouchStart:O,onKeyDown:U,onFocus:K,onBlur:$,"aria-labelledby":Ge,"aria-describedby":Je,"aria-errormessage":Qe,"aria-invalid":te,...Ye}){const ae=e.useRef(null),G=e.useRef(null),h=e.useRef(null),[H,J]=e.useState(!1),[Q,ne]=e.useState(!1),[Ze,se]=e.useState(X!==void 0?Number(X):void 0),_=re!==void 0?Number(re):Ze,L=_===void 0?i:_;function oe(r){const o=parseFloat(r.toFixed(5));if(se(o),h.current){const y=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(y,"value").set;if(g){const V=new Event("input",{bubbles:!0});g.call(h.current,o),h.current.dispatchEvent(V)}}}function Y(r){if(!G.current)return;const{left:o,right:y,width:me}=G.current.getBoundingClientRect();let g="touches"in r?r.touches[0].clientX:r.clientX;g<o?g=o:g>y&&(g=y);let V=(g-o)/me*(n-i)+i;V=Math.round(V/v)*v,oe(V)}const j=pr(r=>{Y(r)});function er(r){var o;c||(document.addEventListener("mousemove",j),document.addEventListener("mouseup",le),Y(r.nativeEvent),B==null||B(r),r.preventDefault(),H||J(!0),(o=ae.current)==null||o.focus())}function le(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",le)}function rr(r){c||(document.addEventListener("touchmove",j),document.addEventListener("touchup",w),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w),Y(r.nativeEvent),O==null||O(r),r.preventDefault())}function w(){document.removeEventListener("touchmove",j),document.removeEventListener("touchup",w),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)}function tr(r){if(!c){let o;const y=r.nativeEvent.shiftKey;switch(fr(r.nativeEvent)){case"right":case"up":case"page up":o=Math.min(n,L+(y?v*ee:v));break;case"left":case"down":case"page down":o=Math.max(i,L-(y?v*ee:v));break;case"home":o=i;break;case"end":o=n;break;default:return}oe(o),U==null||U(r),r.preventDefault(),H&&J(!1)}}function ar(r){c||(Q||ne(!0),K==null||K(r))}function nr(r){c||(H&&J(!1),Q&&ne(!1),h.current&&($==null||$({...r,target:h.current,currentTarget:h.current})))}e.useLayoutEffect(()=>{var r;_===void 0&&X===void 0&&((r=h.current)==null?void 0:r.value)!=null&&se(Number(h.current.value))},[]);const[sr]=e.useState(Z()),ie=Ge||(f?sr:void 0),[or]=e.useState(Z()),ue=Je||(b?or:void 0),[lr]=e.useState(Z()),de=Qe||(t&&t!==!0?lr:void 0),P=gr(L,i,n),W=hr({sizer:a,isDisabled:c,isFocused:Q&&!c&&!H,hasError:!!t,atMin:P===0,atMax:P===100}),ce=e.createElement("div",{...Ye,ref:ae,className:W.root(),role:"slider",tabIndex:c?-1:Ke,onMouseDown:er,onTouchStart:rr,onFocus:ar,onBlur:nr,onKeyDown:tr,"aria-valuemax":n,"aria-valuemin":i,"aria-valuenow":L,"aria-labelledby":ie,"aria-describedby":ue,"aria-errormessage":de,"aria-invalid":te!==void 0?te:!!t},e.createElement("div",{ref:G,className:W.track()},e.createElement("div",{className:W.fill(),style:{right:`${100-P}%`}}),e.createElement("div",{className:W.thumb(),style:{left:`${P}%`}})));return e.createElement(ur,{className:d,sizer:a,label:f,labelId:ie,explainer:l,hint:b,hintId:ue,error:t,errorId:de,disabled:c,required:D},p?p({control:ce,value:L,min:i,max:n,step:v}):ce,e.createElement("input",{ref:r=>{h.current=r,typeof s=="function"?s(r):s&&(s.current=r)},type:"text",name:m,className:"hidden","aria-hidden":!0,defaultValue:_,onChange:$e}))}u.sizer=q;u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link CommonFieldProps}`,methods:[],displayName:"Slider",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:`(renderArgs: {
  control: React.ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  control: React.ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
}`,signature:{properties:[{key:"control",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"number",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"step",value:{name:"number",required:!0}}]}},name:"renderArgs"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Optional render function that can be used to customize the presentation
of the Slider control within the Field, such as to show the current value.
The \`control\` argument contains the slider control element—you’ll need to
include it in the rendering somewhere, but have control of the placement.`},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"number"},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"},tabIndex:{defaultValue:{value:"0",computed:!1},required:!1}},composes:["Omit"]};const br={title:"Forms/Slider",component:u};function A(d){return{"aria-label":d,children:({control:a,value:f})=>e.createElement(e.Fragment,null,a,e.createElement("div",{className:"flex text-xs text-gray-600"},e.createElement("div",null,d),e.createElement("div",{className:"ml-auto"},f)))}}const S={args:A("Slider with no valueish prop")},E={args:{value:"50",...A("Slider with controlled value")}},R={args:{defaultValue:"50",...A("Slider with uncontrolled value")}},x={args:{disabled:!0,defaultValue:"50",...A("Disabled Slider")}},M={tags:["!dev","!test"],render:d=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(u,{...S.args}),e.createElement(u,{...E.args}),e.createElement(u,{...R.args}),e.createElement(u,{...x.args}))},z={args:{defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,...A("Slider with custom range")}},C={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",defaultValue:"50"}},N={args:{sizer:u.sizer.small,defaultValue:"50","aria-label":"Small Slider"}},k={args:{sizer:u.sizer.medium,defaultValue:"50","aria-label":"Medium Slider"}},T={args:{sizer:u.sizer.large,defaultValue:"50","aria-label":"Large Slider"}},F={tags:["!dev","!test"],render:d=>e.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(u,{...N.args})),e.createElement("div",{className:"flex-1"},e.createElement(u,{...k.args})),e.createElement("div",{className:"flex-1"},e.createElement(u,{...T.args})))};var pe,he,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: renderWithMetadata('Slider with no valueish prop')
}`,...(ge=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var be,ve,ye;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    value: '50',
    ...renderWithMetadata('Slider with controlled value')
  }
}`,...(ye=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var we,Se,Ee;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    defaultValue: '50',
    ...renderWithMetadata('Slider with uncontrolled value')
  }
}`,...(Ee=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,xe,Ne;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '50',
    ...renderWithMetadata('Disabled Slider')
  }
}`,...(Ne=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var ke,Te,Le;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...(Le=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Ve,qe,Me;z.parameters={...z.parameters,docs:{...(Ve=z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    ...renderWithMetadata('Slider with custom range')
  }
}`,...(Me=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var ze,Ce,Fe;C.parameters={...C.parameters,docs:{...(ze=C.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    defaultValue: '50'
  }
}`,...(Fe=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var Ae,De,He;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    defaultValue: '50',
    'aria-label': 'Small Slider'
  }
}`,...(He=(De=N.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var _e,je,Pe;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.medium,
    defaultValue: '50',
    'aria-label': 'Medium Slider'
  }
}`,...(Pe=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var We,Ie,Xe;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.large,
    defaultValue: '50',
    'aria-label': 'Large Slider'
  }
}`,...(Xe=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:Xe.source}}};var Be,Oe,Ue;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <div className="flex-1">
        <Slider {...Small.args} />
      </div>
      <div className="flex-1">
        <Slider {...Medium.args} />
      </div>
      <div className="flex-1">
        <Slider {...Large.args} />
      </div>
    </div>
}`,...(Ue=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};const vr=["NoValue","Controlled","Uncontrolled","Disabled","AllControlStates","CustomRange","FieldLayout","Small","Medium","Large","AllSizes"],xr=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:M,AllSizes:F,Controlled:E,CustomRange:z,Disabled:x,FieldLayout:C,Large:T,Medium:k,NoValue:S,Small:N,Uncontrolled:R,__namedExportsOrder:vr,default:br},Symbol.toStringTag,{value:"Module"}));export{M as A,z as C,xr as S,u as a};
