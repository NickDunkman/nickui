import{r as n}from"./iframe-B-Uinc_h.js";import{F as ue}from"./Field-DqHiXic1.js";import{c as pe,F as x}from"./index-Czi7Upa3.js";import{r as y}from"./randomId-Dfhrkieu.js";const me=pe({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[x.small]:"text-sm py-1.5 px-2",[x.medium]:"text-base py-2.5 px-3.5",[x.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:x.small,hasError:!1}});function r({className:e,sizer:t,label:l,hint:s,error:o,required:T,disabled:f,id:ne,"aria-describedby":le,"aria-errormessage":se,"aria-invalid":w,...re}){const[oe]=n.useState(y()),E=ne||(l?oe:void 0),[ie]=n.useState(y()),C=le||(s?ie:void 0),[ce]=n.useState(y()),S=se||(o&&o!==!0?ce:void 0),de=me({sizer:t,hasError:!!o});return n.createElement(ue,{className:e,sizer:t,label:l,controlId:E,hint:s,hintId:C,error:o!==!0?o:void 0,errorId:S,disabled:f,required:T},n.createElement("input",{...re,id:E,className:de,disabled:f,required:T,"aria-describedby":C,"aria-errormessage":S,"aria-invalid":w!==void 0?w:!!o}))}r.sizer=x;r.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:a,fn:te}=__STORYBOOK_MODULE_TEST__,ge={title:"Form controls/Text",component:r},v={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"},play:({canvas:e})=>{const t=e.getByRole("textbox");a(t).toHaveAccessibleName("A label*"),a(t).toHaveAccessibleDescription("A hint"),a(t).toHaveAccessibleErrorMessage("An error message"),a(t).toHaveClass("border-rose-800"),a(e.getByTitle("required")).toHaveTextContent("*")}},i={args:{placeholder:"Empty Text","aria-label":"Empty Text"},play:async({canvas:e,userEvent:t})=>{const l=e.getByLabelText("Empty Text");await t.type(l,"a"),a(l).toHaveValue("a"),await t.type(l,"{backspace}")}},c={args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:te()},play:async({args:e,canvas:t,userEvent:l})=>{const s=t.getByLabelText("Controlled Text");await l.type(s,"a"),a(e.onChange).toHaveBeenCalled(),a(s).toHaveValue(e.value)}},d={args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text"},play:async({args:e,canvas:t,userEvent:l})=>{const s=t.getByLabelText("Uncontrolled Text");await l.type(s,"a"),a(s).toHaveValue(`${e.defaultValue}a`),await l.type(s,"{backspace}")}},u={args:{defaultValue:"Disabled Text",disabled:!0,onChange:te(),"aria-label":"Disabled Text"},play:async({args:e,canvas:t,userEvent:l})=>{const s=t.getByLabelText("Disabled Text");a(s).toBeDisabled(),await l.type(s,"a"),a(e.onChange).not.toHaveBeenCalled(),a(s).toHaveValue(e.defaultValue)}},h={tags:["!dev","!test"],render:()=>n.createElement("div",{className:"flex flex-col gap-4"},n.createElement(r,{...i.args}),n.createElement(r,{...c.args}),n.createElement(r,{...d.args}),n.createElement(r,{...u.args}))},p={args:{sizer:r.sizer.small,label:"Small label",placeholder:"Small Text (default)"},play:({canvas:e})=>{a(e.getByLabelText("Small label")).toHaveClass("text-sm"),a(e.getByText("Small label")).toHaveClass("text-xs")}},m={args:{sizer:r.sizer.medium,label:"Medium label",placeholder:"Medium Text"},play:({canvas:e})=>{a(e.getByLabelText("Medium label")).toHaveClass("text-base"),a(e.getByText("Medium label")).toHaveClass("text-sm")}},g={args:{sizer:r.sizer.large,label:"Large label",placeholder:"Large Text"},play:({canvas:e})=>{a(e.getByLabelText("Large label")).toHaveClass("text-lg"),a(e.getByText("Large label")).toHaveClass("text-lg")}},b={tags:["!dev","!test"],render:()=>n.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},n.createElement(r,{...p.args,className:"sm:flex-1"}),n.createElement(r,{...m.args,className:"sm:flex-1"}),n.createElement(r,{...g.args,className:"sm:flex-1"}))};var H,B,L;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    expect(input).toHaveAccessibleName('A label*');
    expect(input).toHaveAccessibleDescription('A hint');
    expect(input).toHaveAccessibleErrorMessage('An error message');
    expect(input).toHaveClass('border-rose-800');
    expect(canvas.getByTitle('required')).toHaveTextContent('*');
  }
}`,...(L=(B=v.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,z,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.
    const input = canvas.getByLabelText('Empty Text');
    await userEvent.type(input, 'a');
    expect(input).toHaveValue('a');

    // reset back to original value
    await userEvent.type(input, '{backspace}');
  }
}`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var V,N,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Text',
    'aria-label': 'Controlled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the input's value
    // should not change.
    const input = canvas.getByLabelText('Controlled Text');
    await userEvent.type(input, 'a');
    expect(args.onChange).toHaveBeenCalled();
    expect(input).toHaveValue(args.value);
  }
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var _,q,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Uncontrolled Text'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // The value is uncontrolled, so the input's value should update as you
    // type without having any other mechanism for updating the value prop.
    const input = canvas.getByLabelText('Uncontrolled Text');
    await userEvent.type(input, 'a');
    expect(input).toHaveValue(\`\${args.defaultValue}a\`);
    await userEvent.type(input, '{backspace}');
  }
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var F,U,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Disabled Text'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Disabled Text');
    expect(input).toBeDisabled();

    // Typing should not fire any changes
    await userEvent.type(input, 'a');
    expect(args.onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue(args.defaultValue);
  }
}`,...(R=(U=u.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var I,O,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,W,$;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)'
  },
  play: ({
    canvas
  }) => {
    // The input should have the small sizing
    expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
    // The wrapping Field should have small sizing
    expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,Y,G;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text'
  },
  play: ({
    canvas
  }) => {
    // The input should have medium sizing
    expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
    // The wrapping Field should have medium sizing
    expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  }
}`,...(G=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text'
  },
  play: ({
    canvas
  }) => {
    // The input should have medium sizing
    expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
    // The wrapping Field should have medium sizing
    expect(canvas.getByText('Large label')).toHaveClass('text-lg');
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const xe=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes"],Te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllSizes:b,Controlled:c,Disabled:u,Empty:i,FieldLayout:v,Large:g,Medium:m,Small:p,Uncontrolled:d,__namedExportsOrder:xe,default:ge},Symbol.toStringTag,{value:"Module"}));export{Te as S,r as T};
