import{r as e}from"./iframe-BOtqaFuv.js";import{F as Qe}from"./Field-B78z9rXR.js";import{c as We,F as r}from"./index-Czi7Upa3.js";import{r as F}from"./randomId-Dfhrkieu.js";const Ge=We({slots:{root:"relative",textarea:`
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextarea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextarea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextarea"],sizer:r.small,className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextarea"],sizer:r.medium,className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextarea"],sizer:r.large,className:"text-lg py-3.5 px-4.5"}],variants:{sizer:{[r.small]:{},[r.medium]:{},[r.large]:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:r.small,hasError:!1}});function a({className:s,sizer:p,label:H,hint:D,error:i,disabled:_,required:L,id:Fe,defaultValue:j,value:w,onChange:A,rows:g=2,maxRows:z=10,disableManualResize:He,"aria-describedby":De,"aria-errormessage":_e,"aria-invalid":U,...Le}){const P=e.createRef(),b=e.useRef(null),[h,M]=e.useState(0),[je,B]=e.useState(j),k=w!==void 0,R=k?w:je;function Ue(t){k||B(t.target.value),A==null||A(t)}e.useLayoutEffect(()=>{if(z>g&&b.current){b.current.value=R||"";const t=getComputedStyle(b.current),G=x(t.lineHeight),J=x(t.paddingTop)+x(t.paddingBottom),N=x(t.borderTopWidth)+x(t.borderBottomWidth),S=b.current.scrollHeight+N,C=g*G+J+N,V=z*G+J+N;S>V?h!==V&&M(V):S<C?h!==C&&M(C):h!==S&&M(S)}},[R,g,z,h]),e.useLayoutEffect(()=>{if(w===void 0&&j===void 0){const t=Je(P);t.value&&B(t.value)}},[]);const[Pe]=e.useState(F()),O=Fe||(H?Pe:void 0),[Be]=e.useState(F()),Q=De||(D?Be:void 0),[ke]=e.useState(F()),W=_e||(i&&i!==!0?ke:void 0),Oe=z>g?{style:{height:h}}:{rows:g},I=Ge({sizer:p,hasError:!!i,disableManualResize:He});return e.createElement(Qe,{className:s,sizer:p,label:H,controlId:O,hint:D,hintId:Q,error:i!==!0?i:void 0,errorId:W,disabled:_,required:L},e.createElement("div",{ref:P,className:I.root()},e.createElement("textarea",{"aria-hidden":!0,disabled:!0,ref:b,className:I.hiddenTextarea()}),e.createElement("textarea",{...Le,...Oe,id:O,className:I.textarea(),value:R,onChange:Ue,disabled:_,required:L,"aria-describedby":Q,"aria-errormessage":W,"aria-invalid":U!==void 0?U:!!i})))}a.sizer=r;function x(s){return Number(s.slice(0,-2))}function Je(s){var p;return[...((p=s.current)==null?void 0:p.getElementsByTagName("textarea"))||[]][1]}a.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextareaProps} + {@link CommonFieldProps}`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Textarea when using it as a
[controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Textarea when using it as an uncontrolled component"},rows:{required:!1,tsType:{name:"number"},description:`The number of rows of text tall the Textarea should be (the Textarea will
use a scrollbar when necessary)`,defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:`The textarea will automatically grow in height as the user types, up to
this number of rows.`,defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Textarea changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const Ke={title:"Form controls/Textarea",component:a},f={tags:["!dev","!test"],args:{label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"}},l={args:{placeholder:"Empty Textarea","aria-label":"Empty Textarea with no set value"}},n={args:{value:"Controlled Textarea",onChange:()=>{},"aria-label":"Example Textarea with a controlled value"}},o={args:{defaultValue:"Uncontrolled Textarea","aria-label":"Example Textarea with an uncontrolled value"}},u={args:{defaultValue:"Disabled Textarea",disabled:!0,"aria-label":"Example disabled Textarea"}},v={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...l.args}),e.createElement(a,{...n.args}),e.createElement(a,{...o.args}),e.createElement(a,{...u.args}))},c={args:{sizer:a.sizer.small,placeholder:"Small Textarea (default)","aria-label":"Example small Textarea"}},d={args:{sizer:a.sizer.medium,placeholder:"Medium Textarea","aria-label":"Example medium Textarea"}},m={args:{sizer:a.sizer.large,placeholder:"Large Textarea","aria-label":"Example large Textarea"}},T={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...c.args}),e.createElement(a,{...d.args}),e.createElement(a,{...m.args}))},q={args:{"aria-label":"Example Textarea using autoResize",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",rows:2,maxRows:10}},y={args:{"aria-label":"Example Textarea using autoResize + maxRows",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,maxRows:3,lang:"la"}},E={args:{"aria-label":"Example Textarea that can’t be manually resized",defaultValue:"This Textarea has no resize handle at the bottom right!",disableManualResize:!0}};var K,X,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Textarea',
    'aria-label': 'Empty Textarea with no set value'
  }
}`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,re;n.parameters={...n.parameters,docs:{...(ae=n.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Textarea',
    onChange: () => {},
    'aria-label': 'Example Textarea with a controlled value'
  }
}`,...(re=(te=n.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,le;o.parameters={...o.parameters,docs:{...(se=o.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Textarea',
    'aria-label': 'Example Textarea with an uncontrolled value'
  }
}`,...(le=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ne,oe,ue;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Textarea',
    disabled: true,
    'aria-label': 'Example disabled Textarea'
  }
}`,...(ue=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,de,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Empty.args} />
      <Textarea {...Controlled.args} />
      <Textarea {...Uncontrolled.args} />
      <Textarea {...Disabled.args} />
    </div>
}`,...(me=(de=v.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,be;c.parameters={...c.parameters,docs:{...(pe=c.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.small,
    placeholder: 'Small Textarea (default)',
    'aria-label': 'Example small Textarea'
  }
}`,...(be=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,xe,fe;d.parameters={...d.parameters,docs:{...(he=d.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.medium,
    placeholder: 'Medium Textarea',
    'aria-label': 'Example medium Textarea'
  }
}`,...(fe=(xe=d.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ve,Te,qe;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.large,
    placeholder: 'Large Textarea',
    'aria-label': 'Example large Textarea'
  }
}`,...(qe=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var ye,Ee,ze;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Small.args} />
      <Textarea {...Medium.args} />
      <Textarea {...Large.args} />
    </div>
}`,...(ze=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};var Se,we,Ae;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    lang: 'la',
    rows: 2,
    maxRows: 10
  }
}`,...(Ae=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Me,Re,Ie;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize + maxRows',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    maxRows: 3,
    lang: 'la'
  }
}`,...(Ie=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ne,Ce,Ve;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea that can’t be manually resized',
    defaultValue: 'This Textarea has no resize handle at the bottom right!',
    disableManualResize: true
  }
}`,...(Ve=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};const Xe=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","AutoResizableHeight","FixedHeight","DisableManualResize"],aa=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:v,AllSizes:T,AutoResizableHeight:q,Controlled:n,DisableManualResize:E,Disabled:u,Empty:l,FieldLayout:f,FixedHeight:y,Large:m,Medium:d,Small:c,Uncontrolled:o,__namedExportsOrder:Xe,default:Ke},Symbol.toStringTag,{value:"Module"}));export{q as A,E as D,y as F,aa as S,a as T};
