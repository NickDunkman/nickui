import{r}from"./iframe-DYxnnFe3.js";import{F as ue}from"./Field-B3CBD8It.js";import{c as pe,F as y}from"./index-Czi7Upa3.js";import{r as T}from"./randomId-Dfhrkieu.js";const me=pe({base:`
    w-full
    border-2 rounded-sm
    bg-white
    placeholder:opacity-100 placeholder:text-gray-400
    focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
    disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
  `,variants:{sizer:{[y.small]:"text-sm py-1.5 px-2",[y.medium]:"text-base py-2.5 px-3.5",[y.large]:"text-lg py-3.5 px-4.5"},hasError:{true:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},defaultVariants:{sizer:y.small,hasError:!1}});function o({className:e,sizer:s,label:n,hint:l,error:a,required:f,disabled:w,id:ne,"aria-describedby":se,"aria-errormessage":le,"aria-invalid":C,...re}){const[oe]=r.useState(T()),H=ne||(n?oe:void 0),[ie]=r.useState(T()),A=se||(l?ie:void 0),[ce]=r.useState(T()),E=le||(a&&a!==!0?ce:void 0),de=me({sizer:s,hasError:!!a});return r.createElement(ue,{className:e,sizer:s,label:n,controlId:H,hint:l,hintId:A,error:a!==!0?a:void 0,errorId:E,disabled:w,required:f},r.createElement("input",{...re,id:H,className:de,disabled:w,required:f,"aria-describedby":A,"aria-errormessage":E,"aria-invalid":C!==void 0?C:!!a}))}o.sizer=y;o.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const{expect:t,fn:b}=__STORYBOOK_MODULE_TEST__,ge={title:"Form controls/Text",component:o},x={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value"},play:async({canvas:e,step:s})=>{const n=e.getByLabelText("A label*"),l=e.getByTitle("required");await s("Assert accessibility of layout elements",async()=>{t(n).toHaveRole("textbox"),t(n).toHaveAccessibleDescription("A hint"),t(n).toHaveAccessibleErrorMessage("An error message"),t(l).toHaveTextContent("*")}),await s("Assert the error style",async()=>{t(n).toHaveClass("border-rose-800")})}},i={args:{placeholder:"Empty Text","aria-label":"Empty Text",onChange:b()},play:async({args:e,canvas:s,step:n,userEvent:l})=>{const a=s.getByLabelText("Empty Text");await n("Assert Text is functional without an initial value",async()=>{await l.type(a,"a"),t(a).toHaveValue("a"),t(e.onChange).toHaveBeenCalledOnce()}),await n("Reset the value",async()=>{await l.type(a,"{backspace}"),t(a).toHaveValue("")})}},c={args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:b()},play:async({args:e,canvas:s,step:n,userEvent:l})=>{const a=s.getByLabelText("Controlled Text");await n("Assert `value` works",async()=>{t(a).toHaveValue(e.value)}),await n("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await l.type(a,"a"),t(e.onChange).toHaveBeenCalledOnce(),t(a).toHaveValue(e.value)})}},d={args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text",onChange:b()},play:async({args:e,canvas:s,step:n,userEvent:l})=>{const a=s.getByLabelText("Uncontrolled Text");await n("Assert `defaultValue` works",async()=>{t(a).toHaveValue(e.defaultValue)}),await n("Typing into the Text should amend the value, since it’s uncontrolled",async()=>{await l.type(a,"a"),t(a).toHaveValue(`${e.defaultValue}a`),t(e.onChange).toHaveBeenCalledOnce()}),await n("Reset the value",async()=>{await l.type(a,"{backspace}"),t(a).toHaveValue(e.defaultValue)})}},u={args:{defaultValue:"Disabled Text",disabled:!0,onChange:b(),"aria-label":"Disabled Text"},play:async({args:e,canvas:s,step:n,userEvent:l})=>{const a=s.getByLabelText("Disabled Text");await n("Assert disabled state",async()=>{t(a).toBeDisabled()}),await n("Typing should have no effect",async()=>{await l.type(a,"a"),t(e.onChange).not.toHaveBeenCalled(),t(a).toHaveValue(e.defaultValue)})}},h={tags:["!dev","!test"],render:()=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(o,{...i.args}),r.createElement(o,{...c.args}),r.createElement(o,{...d.args}),r.createElement(o,{...u.args}))},p={args:{sizer:o.sizer.small,label:"Small label",placeholder:"Small Text (default)"},play:async({canvas:e,step:s})=>{await s("Assert the small style on both the Text & Field",async()=>{t(e.getByLabelText("Small label")).toHaveClass("text-sm"),t(e.getByText("Small label")).toHaveClass("text-xs")})}},m={args:{sizer:o.sizer.medium,label:"Medium label",placeholder:"Medium Text"},play:async({canvas:e,step:s})=>{await s("Assert the medium style on both the Text & Field",async()=>{t(e.getByLabelText("Medium label")).toHaveClass("text-base"),t(e.getByText("Medium label")).toHaveClass("text-sm")})}},g={args:{sizer:o.sizer.large,label:"Large label",placeholder:"Large Text"},play:async({canvas:e,step:s})=>{await s("Assert the large style on both the Text & Field",async()=>{t(e.getByLabelText("Large label")).toHaveClass("text-lg"),t(e.getByText("Large label")).toHaveClass("text-lg")})}},v={tags:["!dev","!test"],render:()=>r.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},r.createElement(o,{...p.args,className:"sm:flex-1"}),r.createElement(o,{...m.args,className:"sm:flex-1"}),r.createElement(o,{...g.args,className:"sm:flex-1"}))};var S,B,L;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value'
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('required');
    await step('Assert accessibility of layout elements', async () => {
      expect(input).toHaveRole('textbox');
      expect(input).toHaveAccessibleDescription('A hint');
      expect(input).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert the error style', async () => {
      expect(input).toHaveClass('border-rose-800');
    });
  }
}`,...(L=(B=x.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var V,z,M;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Text',
    'aria-label': 'Empty Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Empty Text');
    await step('Assert Text is functional without an initial value', async () => {
      await userEvent.type(input, 'a');
      expect(input).toHaveValue('a');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue('');
    });
  }
}`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var q,k,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Text',
    'aria-label': 'Controlled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Controlled Text');
    await step('Assert \`value\` works', async () => {
      expect(input).toHaveValue(args.value);
    });
    await step('Try adding text. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.type(input, 'a');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(input).toHaveValue(args.value);
    });
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var N,_,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Text',
    'aria-label': 'Uncontrolled Text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Uncontrolled Text');
    await step('Assert \`defaultValue\` works', async () => {
      expect(input).toHaveValue(args.defaultValue);
    });
    await step('Typing into the Text should amend the value, since it’s uncontrolled', async () => {
      await userEvent.type(input, 'a');
      expect(input).toHaveValue(\`\${args.defaultValue}a\`);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(input, '{backspace}');
      expect(input).toHaveValue(args.defaultValue);
    });
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,R,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    onChange: fn(),
    'aria-label': 'Disabled Text'
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Disabled Text');
    await step('Assert disabled state', async () => {
      expect(input).toBeDisabled();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(input, 'a');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue(args.defaultValue);
    });
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,P,j;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4">
      <Text {...Empty.args} />
      <Text {...Controlled.args} />
      <Text {...Uncontrolled.args} />
      <Text {...Disabled.args} />
    </div>
}`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var W,$,K;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.small,
    label: 'Small label',
    placeholder: 'Small Text (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...(K=($=p.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,G,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.medium,
    label: 'Medium label',
    placeholder: 'Medium Text'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Medium label')).toHaveClass('text-base');
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    sizer: Text.sizer.large,
    label: 'Large label',
    placeholder: 'Large Text'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style on both the Text & Field', async () => {
      expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Text {...Small.args} className="sm:flex-1" />
      <Text {...Medium.args} className="sm:flex-1" />
      <Text {...Large.args} className="sm:flex-1" />
    </div>
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const ye=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","AllControlStates","Small","Medium","Large","AllSizes"],Te=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllSizes:v,Controlled:c,Disabled:u,Empty:i,FieldLayout:x,Large:g,Medium:m,Small:p,Uncontrolled:d,__namedExportsOrder:ye,default:ge},Symbol.toStringTag,{value:"Module"}));export{Te as S,o as T};
