import{r as l}from"./iframe-BCtXYBx8.js";import{F as de}from"./Field-G2cuWQTP.js";import{c as pe,F as g}from"./index-Czi7Upa3.js";import{r as y}from"./randomId-Dfhrkieu.js";const me=pe({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[g.small]:"text-sm py-1.5 px-2",[g.medium]:"text-base py-2.5 px-3.5",[g.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:g.small,hasError:!1}});function r({className:a,sizer:s,label:n,hint:t,error:o,required:w,disabled:T,id:ne,"aria-describedby":se,"aria-errormessage":le,"aria-invalid":f,...re}){const[oe]=l.useState(y()),E=ne||(n?oe:void 0),[ie]=l.useState(y()),H=se||(t?ie:void 0),[ce]=l.useState(y()),B=le||(o&&o!==!0?ce:void 0),ue=me({sizer:s,hasError:!!o});return l.createElement(de,{className:a,sizer:s,label:n,controlId:E,hint:t,hintId:H,error:o!==!0?o:void 0,errorId:B,disabled:T,required:w},l.createElement("input",{...re,id:E,className:ue,disabled:T,required:w,"aria-describedby":H,"aria-errormessage":B,"aria-invalid":f!==void 0?f:!!o}))}r.sizer=g;r.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:e,fn:te}=__STORYBOOK_MODULE_TEST__,xe={title:"Form controls/Text",component:r},h={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"},play:async({canvas:a})=>{const s=a.getByRole("textbox");await e(s).toBeInTheDocument(),await e(s).toHaveAccessibleName("A label*"),await e(s).toHaveAccessibleDescription("A hint"),await e(s).toHaveAccessibleErrorMessage("An error message"),await e(s).toHaveClass("border-rose-800");const n=a.getByTitle("required");await e(n).toBeInTheDocument(),await e(n).toHaveTextContent("*")}},i={args:{placeholder:"Empty Text","aria-label":"Empty Text with no set value"},play:async({canvas:a,userEvent:s})=>{const n=a.getByRole("textbox");await e(n).toBeInTheDocument(),await e(n).toHaveAccessibleName("Empty Text with no set value"),await s.type(n,"a"),await e(n).toHaveValue("a"),await s.type(n,"{backspace}")}},c={args:{value:"Controlled Text",onChange:te(),"aria-label":"Example Text with a controlled value"},play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("textbox");await e(t).toBeInTheDocument(),await e(t).toHaveAccessibleName("Example Text with a controlled value"),await n.type(t,"a"),await e(a.onChange).toHaveBeenCalled(),await e(t).toHaveValue("Controlled Text")}},u={args:{defaultValue:"Uncontrolled Text","aria-label":"Example Text with an uncontrolled value"},play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("textbox");await e(t).toBeInTheDocument(),await e(t).toHaveAccessibleName("Example Text with an uncontrolled value"),await n.type(t,"a"),await e(t).toHaveValue(`${a.defaultValue}a`),await n.type(t,"{backspace}")}},d={args:{defaultValue:"Disabled Text",disabled:!0,onChange:te(),"aria-label":"Example disabled Text"},play:async({args:a,canvas:s,userEvent:n})=>{const t=s.getByRole("textbox");await e(t).toBeInTheDocument(),await e(t).toHaveAccessibleName("Example disabled Text"),await e(t).toBeDisabled(),await n.type(t,"a"),await e(a.onChange).not.toHaveBeenCalled(),await e(t).toHaveValue(a.defaultValue)}},v={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(r,{...i.args}),l.createElement(r,{...c.args}),l.createElement(r,{...u.args}),l.createElement(r,{...d.args}))},p={args:{sizer:r.sizer.small,label:"Small label",placeholder:"Small Text (default)"},play:async({canvas:a})=>{await e(a.getByRole("textbox")).toHaveClass("text-sm"),await e(a.getByText("Small label")).toHaveClass("text-xs")}},m={args:{sizer:r.sizer.medium,label:"Medium label",placeholder:"Medium Text"},play:async({canvas:a})=>{await e(a.getByRole("textbox")).toHaveClass("text-base"),await e(a.getByText("Medium label")).toHaveClass("text-sm")}},x={args:{sizer:r.sizer.large,label:"Large label",placeholder:"Large Text"},play:async({canvas:a})=>{await e(a.getByRole("textbox")).toHaveClass("text-lg"),await e(a.getByText("Large label")).toHaveClass("text-lg")}},b={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},l.createElement(r,{...p.args,className:"sm:flex-1"}),l.createElement(r,{...m.args,className:"sm:flex-1"}),l.createElement(r,{...x.args,className:"sm:flex-1"}))};var C,A,S;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  },
  play: async ({
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('A label*');
    await expect(input).toHaveAccessibleDescription('A hint');
    await expect(input).toHaveAccessibleErrorMessage('An error message');
    await expect(input).toHaveClass('border-rose-800');
    const requiredAsterisk = canvas.getByTitle('required');
    await expect(requiredAsterisk).toBeInTheDocument();
    await expect(requiredAsterisk).toHaveTextContent('*');
  }
}`,...(S=(A=h.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var z,N,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text with no set value'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Empty Text with no set value');

    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    await userEvent.type(input, 'a');
    await expect(input).toHaveValue('a');
    await userEvent.type(input, '{backspace}');
  }
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,M,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Text',
    onChange: fn(),
    'aria-label': 'Example Text with a controlled value'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Example Text with a controlled value');

    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    await userEvent.type(input, 'a');
    await expect(args.onChange).toHaveBeenCalled();
    await expect(input).toHaveValue('Controlled Text');
  }
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,q,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Example Text with an uncontrolled value'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Example Text with an uncontrolled value');

    // The value is uncontrolled, so the input's value should update as you
    // type without having any other mechanism for updating the value prop.
    await userEvent.type(input, 'a');
    await expect(input).toHaveValue(\`\${args.defaultValue}a\`);
    await userEvent.type(input, '{backspace}');
  }
}`,...(L=(q=u.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var V,k,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Example disabled Text'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAccessibleName('Example disabled Text');
    await expect(input).toBeDisabled();

    // Typing should not fire any changes
    await userEvent.type(input, 'a');
    await expect(args.onChange).not.toHaveBeenCalled();
    await expect(input).toHaveValue(args.defaultValue);
  }
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var O,U,P;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...(P=(U=v.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var j,W,$;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)'
  },
  play: async ({
    canvas
  }) => {
    // The input should have the small sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-sm');
    // The wrapping Field should have small sizing
    await expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,Y,G;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text'
  },
  play: async ({
    canvas
  }) => {
    // The input should have medium sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-base');
    // The wrapping Field should have medium sizing
    await expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  }
}`,...(G=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text'
  },
  play: async ({
    canvas
  }) => {
    // The input should have medium sizing
    await expect(canvas.getByRole('textbox')).toHaveClass('text-lg');
    // The wrapping Field should have medium sizing
    await expect(canvas.getByText('Large label')).toHaveClass('text-lg');
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ge=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes"],we=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:v,AllSizes:b,Controlled:c,Disabled:d,Empty:i,FieldLayout:h,Large:x,Medium:m,Small:p,Uncontrolled:u,__namedExportsOrder:ge,default:xe},Symbol.toStringTag,{value:"Module"}));export{we as S,r as T};
