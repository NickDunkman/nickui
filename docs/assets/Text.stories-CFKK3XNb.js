import{r as e}from"./iframe-BOtqaFuv.js";import{F as de}from"./Field-B78z9rXR.js";import{c as me,F as g}from"./index-Czi7Upa3.js";import{r as T}from"./randomId-Dfhrkieu.js";const ue=me({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[g.small]:"text-sm py-1.5 px-2",[g.medium]:"text-base py-2.5 px-3.5",[g.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:g.small,hasError:!1}});function a({className:s,sizer:t,label:p,hint:f,error:l,required:v,disabled:y,id:te,"aria-describedby":re,"aria-errormessage":se,"aria-invalid":E,...le}){const[ne]=e.useState(T()),w=te||(p?ne:void 0),[oe]=e.useState(T()),S=re||(f?oe:void 0),[ie]=e.useState(T()),A=se||(l&&l!==!0?ie:void 0),ce=ue({sizer:t,hasError:!!l});return e.createElement(de,{className:s,sizer:t,label:p,controlId:w,hint:f,hintId:S,error:l!==!0?l:void 0,errorId:A,disabled:y,required:v},e.createElement("input",{...le,id:w,className:ce,disabled:y,required:v,"aria-describedby":S,"aria-errormessage":A,"aria-invalid":E!==void 0?E:!!l}))}a.sizer=g;a.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link TextProps} + {@link CommonFieldProps}`,methods:[],displayName:"Text",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Text changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},type:{required:!1,tsType:{name:"union",raw:`| 'date'
| 'datetime'
| 'datetime-local'
| 'email'
| 'month'
| 'number'
| 'password'
| 'search'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'`,elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'datetime'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'email'"},{name:"literal",value:"'month'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'time'"},{name:"literal",value:"'url'"},{name:"literal",value:"'week'"}]},description:`The input type to use (only textual types are allowed with Text).
See
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
for more details`},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Text when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Text when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:r}=__STORYBOOK_MODULE_TEST__,pe={title:"Form controls/Text",component:a},x={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"},play:({canvas:s})=>{const t=s.getByRole("textbox");r(t).toBeInTheDocument(),r(t).toHaveAccessibleName("A label*"),r(t).toHaveAccessibleDescription("A hint"),r(t).toHaveAccessibleErrorMessage("An error message"),r(t).toHaveClass("border-rose-800");const p=s.getByTitle("required");r(p).toBeInTheDocument(),r(p).toHaveTextContent("*")}},n={args:{placeholder:"Empty Text","aria-label":"Empty Text with no set value"}},o={args:{value:"Controlled Text",onChange:()=>{},"aria-label":"Example Text with a controlled value"}},i={args:{defaultValue:"Uncontrolled Text","aria-label":"Example Text with an uncontrolled value"}},c={args:{defaultValue:"Disabled Text",disabled:!0,"aria-label":"Example disabled Text"}},h={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...n.args}),e.createElement(a,{...o.args}),e.createElement(a,{...i.args}),e.createElement(a,{...c.args}))},d={args:{sizer:a.sizer.small,placeholder:"Small Text (default)","aria-label":"Example small Text"}},m={args:{sizer:a.sizer.medium,placeholder:"Medium Text","aria-label":"Example medium Text"}},u={args:{sizer:a.sizer.large,placeholder:"Large Text","aria-label":"Example large Text"}},b={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},e.createElement(a,{...d.args,className:"sm:flex-1"}),e.createElement(a,{...m.args,className:"sm:flex-1"}),e.createElement(a,{...u.args,className:"sm:flex-1"}))};var z,_,q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  },
  play: ({
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAccessibleName('A label*');
    expect(input).toHaveAccessibleDescription('A hint');
    expect(input).toHaveAccessibleErrorMessage('An error message');
    expect(input).toHaveClass('border-rose-800');
    const requiredAsterisk = canvas.getByTitle('required');
    expect(requiredAsterisk).toBeInTheDocument();
    expect(requiredAsterisk).toHaveTextContent('*');
  }
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var C,N,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value'
  }
}`,...(M=(N=n.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var D,H,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Text',
    onChange: () => {},
    'aria-label': 'Example Text with a controlled value'
  }
}`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,B,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value'
  }
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var F,R,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Example disabled Text'
  }
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var V,U,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...(P=(U=h.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var j,W,K;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    placeholder: 'Small Text (default)',
    'aria-label': 'Example small Text'
  }
}`,...(K=(W=d.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var Y,G,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    placeholder: 'Medium Text',
    'aria-label': 'Example medium Text'
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    placeholder: 'Large Text',
    'aria-label': 'Example large Text'
  }
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ge=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes"],fe=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllSizes:b,Controlled:o,Disabled:c,Empty:n,FieldLayout:x,Large:u,Medium:m,Small:d,Uncontrolled:i,__namedExportsOrder:ge,default:pe},Symbol.toStringTag,{value:"Module"}));export{fe as S,a as T};
