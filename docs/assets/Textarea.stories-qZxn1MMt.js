import{r as e}from"./iframe-DVoMRv_a.js";import{F as Qe}from"./Field-DsMG-wVd.js";import{c as We,F as r}from"./index-Czi7Upa3.js";import{r as I}from"./randomId-Dfhrkieu.js";const Ge=We({slots:{root:"relative",textarea:`
      border-black rounded-sm
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextarea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextarea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextarea"],sizer:r.small,className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextarea"],sizer:r.medium,className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextarea"],sizer:r.large,className:"text-lg py-3.5 px-4.5"}],variants:{sizer:{[r.small]:{},[r.medium]:{},[r.large]:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:r.small,hasError:!1}});function a({className:m,sizer:V,label:F,explainer:Ce,hint:H,error:s,disabled:D,required:_,id:Ie,defaultValue:Ve,value:j,onChange:z,rows:p=2,maxRows:E=10,disableManualResize:Fe,"aria-describedby":He,"aria-errormessage":De,"aria-invalid":L,..._e}){const g=e.useRef(null),[b,S]=e.useState(0),[je,Le]=e.useState(Ve),U=j!==void 0,R=U?j:je;function Ue(t){U||Le(t.target.value),z==null||z(t)}e.useLayoutEffect(()=>{if(E>p&&g.current){g.current.value=R||"";const t=getComputedStyle(g.current),O=x(t.lineHeight),Q=x(t.paddingTop)+x(t.paddingBottom),N=x(t.borderTopWidth)+x(t.borderBottomWidth),w=g.current.scrollHeight+N,M=p*O+Q+N,C=E*O+Q+N;w>C?b!==C&&S(C):w<M?b!==M&&S(M):b!==w&&S(w)}},[R,p,E,b]);const[Pe]=e.useState(I()),P=Ie||(F?Pe:void 0),[ke]=e.useState(I()),k=He||(H?ke:void 0),[Be]=e.useState(I()),B=De||(s&&s!==!0?Be:void 0),Oe=E>p?{style:{height:b}}:{rows:p},A=Ge({sizer:V,hasError:!!s,disableManualResize:Fe});return e.createElement(Qe,{className:m,sizer:V,label:F,explainer:Ce,hint:H,hintId:k,error:s!==!0?s:void 0,controlId:P,errorId:B,disabled:D,required:_},e.createElement("div",{className:A.root()},e.createElement("textarea",{"aria-hidden":!0,disabled:!0,ref:g,className:A.hiddenTextarea()}),e.createElement("textarea",{..._e,...Oe,id:P,className:A.textarea(),value:R,onChange:Ue,disabled:D,required:_,"aria-describedby":k,"aria-errormessage":B,"aria-invalid":L!==void 0?L:!!s})))}a.sizer=r;function x(m){return Number(m.slice(0,-2))}a.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextareaProps} + {@link CommonFieldProps}`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Textarea when using it as a
[controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Textarea when using it as an uncontrolled component"},rows:{required:!1,tsType:{name:"number"},description:`The number of rows of text tall the Textarea should be (the Textarea will
use a scrollbar when necessary)`,defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:`The textarea will automatically grow in height as the user types, up to
this number of rows.`,defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Textarea changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const Je={title:"Form controls/Textarea",component:a},l={args:{placeholder:"Empty Textarea","aria-label":"Empty Textarea with no set value"}},i={args:{value:"Controlled Textarea",onChange:()=>{},"aria-label":"Example Textarea with a controlled value"}},n={args:{defaultValue:"Uncontrolled Textarea","aria-label":"Example Textarea with an uncontrolled value"}},o={args:{defaultValue:"Disabled Textarea",disabled:!0,"aria-label":"Example disabled Textarea"}},h={tags:["!dev","!test"],render:m=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...l.args}),e.createElement(a,{...i.args}),e.createElement(a,{...n.args}),e.createElement(a,{...o.args}))},f={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",defaultValue:"A problematic value"}},u={args:{sizer:a.sizer.small,placeholder:"Small Textarea (default)","aria-label":"Example small Textarea"}},c={args:{sizer:a.sizer.medium,placeholder:"Medium Textarea","aria-label":"Example medium Textarea"}},d={args:{sizer:a.sizer.large,placeholder:"Large Textarea","aria-label":"Example large Textarea"}},T={tags:["!dev","!test"],render:m=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...u.args}),e.createElement(a,{...c.args}),e.createElement(a,{...d.args}))},v={args:{"aria-label":"Example Textarea using autoResize",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",rows:2,maxRows:10}},q={args:{"aria-label":"Example Textarea using autoResize + maxRows",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,maxRows:3,lang:"la"}},y={args:{"aria-label":"Example Textarea that can’t be manually resized",defaultValue:"This Textarea has no resize handle at the bottom right!",disableManualResize:!0}};var W,G,J;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Textarea',
    'aria-label': 'Empty Textarea with no set value'
  }
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Textarea',
    onChange: () => {},
    'aria-label': 'Example Textarea with a controlled value'
  }
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;n.parameters={...n.parameters,docs:{...(Z=n.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Textarea',
    'aria-label': 'Example Textarea with an uncontrolled value'
  }
}`,...(ee=($=n.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,re;o.parameters={...o.parameters,docs:{...(ae=o.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Textarea',
    disabled: true,
    'aria-label': 'Example disabled Textarea'
  }
}`,...(re=(te=o.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,le,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Empty.args} />
      <Textarea {...Controlled.args} />
      <Textarea {...Uncontrolled.args} />
      <Textarea {...Disabled.args} />
    </div>
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,oe,ue;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    defaultValue: 'A problematic value'
  }
}`,...(ue=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,de,me;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.small,
    placeholder: 'Small Textarea (default)',
    'aria-label': 'Example small Textarea'
  }
}`,...(me=(de=u.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,be;c.parameters={...c.parameters,docs:{...(pe=c.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.medium,
    placeholder: 'Medium Textarea',
    'aria-label': 'Example medium Textarea'
  }
}`,...(be=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,he,fe;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.large,
    placeholder: 'Large Textarea',
    'aria-label': 'Example large Textarea'
  }
}`,...(fe=(he=d.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Te,ve,qe;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Small.args} />
      <Textarea {...Medium.args} />
      <Textarea {...Large.args} />
    </div>
}`,...(qe=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:qe.source}}};var ye,Ee,we;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    lang: 'la',
    rows: 2,
    maxRows: 10
  }
}`,...(we=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var ze,Se,Re;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize + maxRows',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    maxRows: 3,
    lang: 'la'
  }
}`,...(Re=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var Ae,Ne,Me;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea that can’t be manually resized',
    defaultValue: 'This Textarea has no resize handle at the bottom right!',
    disableManualResize: true
  }
}`,...(Me=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};const Ke=["Empty","Controlled","Uncontrolled","Disabled","AllControlStates","FieldLayout","Small","Medium","Large","AllSizes","AutoResizableHeight","FixedHeight","DisableManualResize"],ea=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllSizes:T,AutoResizableHeight:v,Controlled:i,DisableManualResize:y,Disabled:o,Empty:l,FieldLayout:f,FixedHeight:q,Large:d,Medium:c,Small:u,Uncontrolled:n,__namedExportsOrder:Ke,default:Je},Symbol.toStringTag,{value:"Module"}));export{h as A,y as D,q as F,ea as S,a as T,v as a};
