import{r as l}from"./iframe-D_OX4RS-.js";import{A as _}from"./AllSizersStoryWrapper-Djlh-4yQ.js";import{g as q}from"./getStoryArgTypes-CB50-RjO.js";import{F as D}from"./Field-kv7yRRPS.js";import{a as O}from"./fieldA11y-CxK2--J7.js";import{u as F}from"./index-AP4d4dr6.js";import{t as R}from"./styles-DvkuNe9I.js";const X=["date","datetime","datetime-local","email","month","number","password","search","tel","text","time","url","week"];function o({className:t,sizer:n,label:e,hint:s,error:r,required:w,disabled:C,id:z,"aria-label":H,"aria-labelledby":S,"aria-describedby":E,"aria-errormessage":B,"aria-invalid":k,...V}){const A=O({label:e,hint:s,error:r,controlledId:z,controlledAriaLabel:H,controlledAriaLabelledBy:S,controlledAriaDescribedBy:E,controlledAriaErrorMessage:B,controlledAriaInvalid:k}),L=F(n),N=R({sizer:L,hasError:!!r});return l.createElement(D,{...A.field,className:t,sizer:n,label:e,hint:s,error:r!==!0?r:void 0,required:w,"data-nickui-component":"Text"},l.createElement("input",{...V,...A.formControl,className:N,disabled:C,required:w}))}o.__docgenInfo={description:`A form control that allows users to enter & edit a single line of text
@param props {@link TextProps}`,methods:[],displayName:"Text",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},type:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ALLOWED_TYPES)[number]"},description:`The input type to use (only textual types are allowed with Text). See
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
for more details`}}};const{expect:a,fn:i}=__STORYBOOK_MODULE_TEST__,U={title:"Form controls/Text",component:o,argTypes:q({formControl:{isDisableable:!0,valueType:"string"},isSizerable:!0,defaultValues:{type:"text"},types:{type:X}})},h={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("A label*"),s=t.getByTitle("(required)");await n("Assert accessibility of layout elements",async()=>{a(e).toHaveRole("textbox"),a(e).toHaveAccessibleDescription("A hint"),a(e).toHaveAccessibleErrorMessage("An error message"),a(s).toHaveTextContent("*")}),await n("Assert the error style",async()=>{a(e).toHaveClass("border-rose-800")})}},c={tags:["control-state"],args:{placeholder:"Empty Text","aria-label":"Empty Text",onChange:i()},play:async({args:t,canvas:n,step:e,userEvent:s})=>{const r=n.getByLabelText("Empty Text");await e("Assert Text is functional without an initial value",async()=>{await s.type(r,"a"),a(r).toHaveValue("a"),a(t.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await s.type(r,"{backspace}"),a(r).toHaveValue("")})}},p={tags:["control-state"],args:{value:"Controlled Text","aria-label":"Controlled Text",onChange:i()},play:async({args:t,canvas:n,step:e,userEvent:s})=>{const r=n.getByLabelText("Controlled Text");await e("Assert `value` works",async()=>{a(r).toHaveValue(t.value)}),await e("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await s.type(r,"a"),a(t.onChange).toHaveBeenCalledOnce(),a(r).toHaveValue(t.value)})}},u={tags:["control-state"],args:{defaultValue:"Uncontrolled Text","aria-label":"Uncontrolled Text",onChange:i()},play:async({args:t,canvas:n,step:e,userEvent:s})=>{const r=n.getByLabelText("Uncontrolled Text");await e("Assert `defaultValue` works",async()=>{a(r).toHaveValue(t.defaultValue)}),await e("Typing into the Text should amend the value, since it’s uncontrolled",async()=>{await s.type(r,"a"),a(r).toHaveValue(`${t.defaultValue}a`),a(t.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await s.type(r,"{backspace}"),a(r).toHaveValue(t.defaultValue)})}},d={tags:["control-state"],args:{defaultValue:"Disabled Text",disabled:!0,"aria-label":"Disabled Text",onChange:i()},play:async({args:t,canvas:n,step:e,userEvent:s})=>{const r=n.getByLabelText("Disabled Text");await e("Assert disabled state",async()=>{a(r).toBeDisabled()}),await e("Typing should have no effect",async()=>{await s.type(r,"a"),a(t.onChange).not.toHaveBeenCalled(),a(r).toHaveValue(t.defaultValue)})}},m={tags:["sizer"],args:{"aria-label":"Xs Text",sizer:"xs",placeholder:"Xs Text",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("Xs Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the xs sizer style on both the Text & Field",async()=>{a(e).toHaveClass("text-xs"),a(s).toHaveAttribute("data-nickui-sizer","xs")})}},x={tags:["sizer"],args:{"aria-label":"Sm Text",sizer:"sm",placeholder:"Sm Text",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("Sm Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the sm sizer style on both the Text & Field",async()=>{a(e).toHaveClass("text-sm"),a(s).toHaveAttribute("data-nickui-sizer","sm")})}},g={tags:["sizer"],args:{"aria-label":"Base Text",sizer:"base",placeholder:"Base Text",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("Base Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the base sizer style on both the Text & Field",async()=>{a(e).toHaveClass("text-base"),a(s).toHaveAttribute("data-nickui-sizer","base")})}},y={tags:["sizer"],args:{"aria-label":"Lg Text",sizer:"lg",placeholder:"Lg Text",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("Lg Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the lg sizer style on both the Text & Field",async()=>{a(e).toHaveClass("text-lg"),a(s).toHaveAttribute("data-nickui-sizer","lg")})}},T={tags:["sizer"],args:{"aria-label":"Xl Text",sizer:"xl",placeholder:"Xl Text",onChange:i()},play:async({canvas:t,step:n})=>{const e=t.getByLabelText("Xl Text"),s=e.closest('[data-nickui-component="Text"]');await n("Assert the xl sizer style on both the Text & Field",async()=>{a(e).toHaveClass("text-xl"),a(s).toHaveAttribute("data-nickui-sizer","xl")})}},b={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",placeholder:"Responsive Text",onChange:i()}},f={tags:["!dev","!test"],render:t=>l.createElement("div",{className:"flex flex-col gap-3 sm:flex-row"},l.createElement(o,{...c.args,className:"sm:flex-1"}),l.createElement(o,{...p.args,className:"sm:flex-1"}),l.createElement(o,{...u.args,className:"sm:flex-1"}),l.createElement(o,{...d.args,className:"sm:flex-1"}))},v={tags:["!dev","!test"],render:t=>l.createElement(_,{alignBaseline:!0},l.createElement(o,{...m.args,className:"sm:flex-12"}),l.createElement(o,{...x.args,className:"sm:flex-14"}),l.createElement(o,{...g.args,className:"sm:flex-16"}),l.createElement(o,{...y.args,className:"sm:flex-18"}),l.createElement(o,{...T.args,className:"sm:flex-20"}))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
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
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'Disabled Text',
    disabled: true,
    'aria-label': 'Disabled Text',
    onChange: fn()
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs Text',
    sizer: 'xs',
    placeholder: 'Xs Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xs Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the xs sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm Text',
    sizer: 'sm',
    placeholder: 'Sm Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Sm Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the sm sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base Text',
    sizer: 'base',
    placeholder: 'Base Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Base Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the base sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg Text',
    sizer: 'lg',
    placeholder: 'Lg Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Lg Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the lg sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl Text',
    sizer: 'xl',
    placeholder: 'Xl Text',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const input = canvas.getByLabelText('Xl Text');
    const field = input.closest('[data-nickui-component="Text"]');
    await step('Assert the xl sizer style on both the Text & Field', async () => {
      expect(input).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-3 sm:flex-row">
      <Text {...empty.args} className="sm:flex-1" />
      <Text {...controlled.args} className="sm:flex-1" />
      <Text {...uncontrolled.args} className="sm:flex-1" />
      <Text {...disabled.args} className="sm:flex-1" />
    </div>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Text {...xs.args} className="sm:flex-12" />
      <Text {...sm.args} className="sm:flex-14" />
      <Text {...base.args} className="sm:flex-16" />
      <Text {...lg.args} className="sm:flex-18" />
      <Text {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...v.parameters?.docs?.source}}};const P=["fieldLayout","empty","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],K=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:P,allControlStates:f,allSizers:v,base:g,controlled:p,default:U,disabled:d,empty:c,fieldLayout:h,lg:y,responsive:b,sm:x,uncontrolled:u,xl:T,xs:m},Symbol.toStringTag,{value:"Module"}));export{o as T,K as s};
