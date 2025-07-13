import{r as e}from"./iframe-DzZ2548y.js";import{F as le}from"./Field-CL6fxN4f.js";import{c as ne,F as r}from"./index-C4eiBceS.js";import{r as N}from"./randomId-Dfhrkieu.js";const oe=ne({slots:{root:"relative",textarea:`
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextarea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextarea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextarea"],sizer:r.small,className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextarea"],sizer:r.medium,className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextarea"],sizer:r.large,className:"text-lg py-3.5 px-4.5"}],variants:{sizer:{[r.small]:{},[r.medium]:{},[r.large]:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:r.small,hasError:!1}});function a({className:s,sizer:V,label:F,hint:H,error:i,disabled:D,required:_,id:J,defaultValue:L,value:S,onChange:K,rows:p=2,maxRows:E=10,disableManualResize:X,"aria-describedby":Y,"aria-errormessage":Z,"aria-invalid":j,...$}){const U=e.createRef(),g=e.useRef(null),[b,w]=e.useState(0),[ee,P]=e.useState(L),B=S!==void 0,A=B?S:ee;function ae(t){B||P(t.target.value),K?.(t)}e.useLayoutEffect(()=>{if(E>p&&g.current){g.current.value=A||"";const t=getComputedStyle(g.current),W=h(t.lineHeight),G=h(t.paddingTop)+h(t.paddingBottom),M=h(t.borderTopWidth)+h(t.borderBottomWidth),z=g.current.scrollHeight+M,R=p*W+G+M,I=E*W+G+M;z>I?b!==I&&w(I):z<R?b!==R&&w(R):b!==z&&w(z)}},[A,p,E,b]),e.useLayoutEffect(()=>{if(S===void 0&&L===void 0){const t=ue(U);t.value&&P(t.value)}},[]);const[te]=e.useState(N()),k=J||(F?te:void 0),[re]=e.useState(N()),O=Y||(H?re:void 0),[se]=e.useState(N()),Q=Z||(i&&i!==!0?se:void 0),ie=E>p?{style:{height:b}}:{rows:p},C=oe({sizer:V,hasError:!!i,disableManualResize:X});return e.createElement(le,{className:s,sizer:V,label:F,controlId:k,hint:H,hintId:O,error:i!==!0?i:void 0,errorId:Q,disabled:D,required:_},e.createElement("div",{ref:U,className:C.root()},e.createElement("textarea",{"aria-hidden":!0,disabled:!0,ref:g,className:C.hiddenTextarea()}),e.createElement("textarea",{...$,...ie,id:k,className:C.textarea(),value:A,onChange:ae,disabled:D,required:_,"aria-describedby":O,"aria-errormessage":Q,"aria-invalid":j!==void 0?j:!!i})))}a.sizer=r;function h(s){return Number(s.slice(0,-2))}function ue(s){return[...s.current?.getElementsByTagName("textarea")||[]][1]}a.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextareaProps} + {@link CommonFieldProps}`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Textarea when using it as a
[controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Textarea when using it as an uncontrolled component"},rows:{required:!1,tsType:{name:"number"},description:`The number of rows of text tall the Textarea should be (the Textarea will
use a scrollbar when necessary)`,defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:`The textarea will automatically grow in height as the user types, up to
this number of rows.`,defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Textarea changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const ce={title:"Form controls/Textarea",component:a},x={tags:["!dev","!test"],args:{label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"}},l={args:{placeholder:"Empty Textarea","aria-label":"Empty Textarea with no set value"}},n={args:{value:"Controlled Textarea",onChange:()=>{},"aria-label":"Example Textarea with a controlled value"}},o={args:{defaultValue:"Uncontrolled Textarea","aria-label":"Example Textarea with an uncontrolled value"}},u={args:{defaultValue:"Disabled Textarea",disabled:!0,"aria-label":"Example disabled Textarea"}},f={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...l.args}),e.createElement(a,{...n.args}),e.createElement(a,{...o.args}),e.createElement(a,{...u.args}))},c={args:{sizer:a.sizer.small,placeholder:"Small Textarea (default)","aria-label":"Example small Textarea"}},d={args:{sizer:a.sizer.medium,placeholder:"Medium Textarea","aria-label":"Example medium Textarea"}},m={args:{sizer:a.sizer.large,placeholder:"Large Textarea","aria-label":"Example large Textarea"}},v={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...c.args}),e.createElement(a,{...d.args}),e.createElement(a,{...m.args}))},T={args:{"aria-label":"Example Textarea using autoResize",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",rows:2,maxRows:10}},q={args:{"aria-label":"Example Textarea using autoResize + maxRows",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,maxRows:3,lang:"la"}},y={args:{"aria-label":"Example Textarea that can’t be manually resized",defaultValue:"This Textarea has no resize handle at the bottom right!",disableManualResize:!0}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  }
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Textarea',
    'aria-label': 'Empty Textarea with no set value'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Textarea',
    onChange: () => {},
    'aria-label': 'Example Textarea with a controlled value'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Textarea',
    'aria-label': 'Example Textarea with an uncontrolled value'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Textarea',
    disabled: true,
    'aria-label': 'Example disabled Textarea'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Empty.args} />
      <Textarea {...Controlled.args} />
      <Textarea {...Uncontrolled.args} />
      <Textarea {...Disabled.args} />
    </div>
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.small,
    placeholder: 'Small Textarea (default)',
    'aria-label': 'Example small Textarea'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.medium,
    placeholder: 'Medium Textarea',
    'aria-label': 'Example medium Textarea'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.large,
    placeholder: 'Large Textarea',
    'aria-label': 'Example large Textarea'
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Small.args} />
      <Textarea {...Medium.args} />
      <Textarea {...Large.args} />
    </div>
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    lang: 'la',
    rows: 2,
    maxRows: 10
  }
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea using autoResize + maxRows',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    maxRows: 3,
    lang: 'la'
  }
}`,...q.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Example Textarea that can’t be manually resized',
    defaultValue: 'This Textarea has no resize handle at the bottom right!',
    disableManualResize: true
  }
}`,...y.parameters?.docs?.source}}};const de=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","AutoResizableHeight","FixedHeight","DisableManualResize"],he=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:f,AllSizes:v,AutoResizableHeight:T,Controlled:n,DisableManualResize:y,Disabled:u,Empty:l,FieldLayout:x,FixedHeight:q,Large:m,Medium:d,Small:c,Uncontrolled:o,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{T as A,y as D,q as F,he as S,a as T};
