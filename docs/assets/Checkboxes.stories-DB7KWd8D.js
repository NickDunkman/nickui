import{r as o}from"./iframe-C0VeZLsT.js";import{C as A}from"./Checkbox-BV1X0X7f.js";import{A as T}from"./AllSizersStoryWrapper-BxMOK3L_.js";import{g as z}from"./getStoryArgTypes-xnGM9Mjx.js";import{C as O}from"./CheckableFormControls-CNFp67Od.js";function i({delimiter:t=",",...n}){return o.createElement(O,{...n,delimiter:t,Checkable:A,"data-nickui-component":"Checkboxes"})}i.__docgenInfo={description:`Renders multiple checkboxes as one field in a Fieldset.

Form libraries like Formik rely on \`onChange\` events to trigger updates to
field values, and such events cannot have multiple targets. Therefore, to
function as one holistic field whose value represents all of the currently
checked checkboxes, the component's value is a single delimited-string that
is managed using a \`<input type="hidden">\`. Each checkbox represents a
substring that can be added to or removed from the delimited-string by
toggling the checked status.

@props {@link CheckboxesProps}`,methods:[],displayName:"Checkboxes",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (config: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(config: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"config"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
provided callback to get props to pass down to each input.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}[]`},description:"Adds the controls in the standard layout"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`,defaultValue:{value:"','",computed:!1}}}};const{expect:e,fn:r}=__STORYBOOK_MODULE_TEST__,R={title:"Form controls/Checkboxes",component:i,argTypes:z({formControl:{isDisableable:!0,valueType:"string"},isSizerable:!0,defaultValues:{delimiter:","}})},C={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({canvas:t,step:n})=>{const a=t.getByRole("group"),l=t.getByTitle("(required)");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveAccessibleName("A label*"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(l).toHaveTextContent("*")})}},d={tags:["control-state"],args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:t,canvas:n,step:a,userEvent:l})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert initial all-unchecked state",async()=>{e(s).not.toBeChecked(),e(c).not.toBeChecked()}),await a("Check first Checkbox using the keyboard",async()=>{await l.tab(),e(s).toHaveFocus(),await l.keyboard(" "),e(s).toBeChecked(),e(c).not.toBeChecked(),e(t.onChange).toHaveBeenCalledOnce()}),await a("Check second Checkbox using the mouse",async()=>{await l.click(c),e(s).toBeChecked(),e(c).toBeChecked(),e(t.onChange).toHaveBeenCalledTimes(2)}),await a("Reset all checked states",async()=>{await l.click(s),e(s).not.toBeChecked(),await l.click(c),e(c).not.toBeChecked()})}},p={tags:["control-state"],args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:t,canvas:n,step:a,userEvent:l})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert `value` prop works",async()=>{e(s).toBeChecked(),e(c).not.toBeChecked()}),await a("Try toggling a Checkbox. `onChange` should fire, but the value is controlled, so the Checkbox shouldn’t toggle",async()=>{await l.click(s),e(t.onChange).toHaveBeenCalled(),e(s).toBeChecked(),e(c).not.toBeChecked()})}},u={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:t,canvas:n,step:a,userEvent:l})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert `defaultValue` prop works",async()=>{e(s).toBeChecked(),e(c).not.toBeChecked()}),await a("Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await l.click(s),e(t.onChange).toHaveBeenCalled(),e(s).not.toBeChecked(),e(c).not.toBeChecked()}),await a("Reset to original value",async()=>{await l.click(s)})}},b={tags:["control-state"],args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert all Checkboxes are disabled",async()=>{e(t.getByLabelText("Option one")).toBeDisabled(),e(t.getByLabelText("Option two")).toBeDisabled()})}},x={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:r()},play:async({canvas:t,step:n})=>{const a=t.getByLabelText("Roman Aquila"),l=t.getByLabelText("ISO 8601"),s=t.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(a).not.toBeChecked(),e(a).not.toBeDisabled(),e(l).toBeChecked(),e(l).not.toBeDisabled(),e(s).not.toBeChecked(),e(s).toBeDisabled()})}},k={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:t=>o.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},o.createElement(A,{...t({value:"colorful"}),label:o.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),o.createElement(A,{...t({value:"embiggened"}),sizer:"lg",label:"Embiggened"}),o.createElement("label",null,o.createElement("input",{type:"checkbox",...t({value:"native"})})," Native")),onChange:r()},play:async({canvas:t,step:n})=>{const a=t.getByLabelText("Colorful"),l=t.getByLabelText("Embiggened"),s=t.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(a).toBeChecked(),e(l).toBeChecked(),e(s).not.toBeChecked()})}},g={tags:["sizer"],args:{sizer:"xs",options:[{value:"one",label:"Xs"},{value:"two",label:"Checkboxes"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert the xs sizer style of both the Checkboxes & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("size-3.5")}),e(t.getByRole("group")).toHaveAttribute("data-nickui-sizer","xs")})}},h={tags:["sizer"],args:{sizer:"sm",options:[{value:"one",label:"Sm"},{value:"two",label:"Checkboxes"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert the sm sizer style of both the Checkboxes & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("size-4")}),e(t.getByRole("group")).toHaveAttribute("data-nickui-sizer","sm")})}},m={tags:["sizer"],args:{sizer:"base",options:[{value:"one",label:"Base"},{value:"two",label:"Checkboxes"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert the base sizer style of both the Checkboxes & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("size-4.75")}),e(t.getByRole("group")).toHaveAttribute("data-nickui-sizer","base")})}},y={tags:["sizer"],args:{sizer:"lg",options:[{value:"one",label:"Lg"},{value:"two",label:"Checkboxes"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert the lg style of both the Checkboxes & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("size-5.5")}),e(t.getByRole("group")).toHaveAttribute("data-nickui-sizer","lg")})}},v={tags:["sizer"],args:{sizer:"xl",options:[{value:"one",label:"Xl"},{value:"two",label:"Checkboxes"}],onChange:r()},play:async({canvas:t,step:n})=>{await n("Assert the xl style of both the Checkboxes & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("size-6")}),e(t.getByRole("group")).toHaveAttribute("data-nickui-sizer","xl")})}},f={tags:["sizer"],args:{label:"Responsive label",sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()}},w={tags:["!dev","!test"],render:t=>o.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},o.createElement(i,{...d.args}),o.createElement(i,{...p.args}),o.createElement(i,{...u.args}),o.createElement(i,{...b.args}))},B={tags:["!dev","!test"],render:t=>o.createElement(T,{alignBaseline:!0},o.createElement(i,{...g.args}),o.createElement(i,{...h.args}),o.createElement(i,{...m.args}),o.createElement(i,{...y.args}),o.createElement(i,{...v.args}))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const fieldset = canvas.getByRole('group');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(fieldset).toHaveAccessibleName('A label*');
      expect(fieldset).toHaveAccessibleDescription('A hint');
      expect(fieldset).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
  }
}`,...C.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'No valueish prop',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.

    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');
    await step('Assert initial all-unchecked state', async () => {
      expect(cb1).not.toBeChecked();
      expect(cb2).not.toBeChecked();
    });
    await step('Check first Checkbox using the keyboard', async () => {
      await userEvent.tab();
      expect(cb1).toHaveFocus();
      await userEvent.keyboard(' ');
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Check second Checkbox using the mouse', async () => {
      await userEvent.click(cb2);
      expect(cb1).toBeChecked();
      expect(cb2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
    await step('Reset all checked states', async () => {
      await userEvent.click(cb1);
      expect(cb1).not.toBeChecked();
      await userEvent.click(cb2);
      expect(cb2).not.toBeChecked();
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Controlled',
    value: 'one',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');
    await step('Assert \`value\` prop works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
    });
    await step('Try toggling a Checkbox. \`onChange\` should fire, but the value is controlled, so the Checkbox shouldn’t toggle', async () => {
      await userEvent.click(cb1);
      expect(args.onChange).toHaveBeenCalled();
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
    });
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Uncontrolled',
    defaultValue: 'one',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const cb1 = canvas.getByLabelText('Option one');
    const cb2 = canvas.getByLabelText('Option two');
    await step('Assert \`defaultValue\` prop works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).not.toBeChecked();
    });
    await step('Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.', async () => {
      await userEvent.click(cb1);
      expect(args.onChange).toHaveBeenCalled();
      expect(cb1).not.toBeChecked();
      expect(cb2).not.toBeChecked();
    });

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(cb1);
    });
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    label: 'Disabled',
    defaultValue: 'one',
    disabled: true,
    options: [{
      value: 'one',
      label: 'Option one',
      disabled: false
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert all Checkboxes are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some standards',
    defaultValue: '8601',
    options: [{
      value: 'aquila',
      label: 'Roman Aquila'
    }, {
      value: '8601',
      label: 'ISO 8601'
    }, {
      value: 'high-society',
      label: 'High Society',
      disabled: true
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const cb1 = canvas.getByLabelText('Roman Aquila');
    const cb2 = canvas.getByLabelText('ISO 8601');
    const cb3 = canvas.getByLabelText('High Society');
    await step('Assert the controlled Checkboxes are configured correctly', async () => {
      expect(cb1).not.toBeChecked();
      expect(cb1).not.toBeDisabled();
      expect(cb2).toBeChecked();
      expect(cb2).not.toBeDisabled();
      expect(cb3).not.toBeChecked();
      expect(cb3).toBeDisabled();
    });
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Checkbox {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-700">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Checkbox {...checkbox({
        value: 'embiggened'
      })} sizer="lg" label="Embiggened" />
        <label>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} /> Native
        </label>
      </div>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const cb1 = canvas.getByLabelText('Colorful');
    const cb2 = canvas.getByLabelText('Embiggened');
    const cb3 = canvas.getByLabelText('Native');
    await step('Assert the render function’s callback works', async () => {
      expect(cb1).toBeChecked();
      expect(cb2).toBeChecked();
      expect(cb3).not.toBeChecked();
    });
  }
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    options: [{
      value: 'one',
      label: 'Xs'
    }, {
      value: 'two',
      label: 'Checkboxes'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-3.5');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    options: [{
      value: 'one',
      label: 'Sm'
    }, {
      value: 'two',
      label: 'Checkboxes'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    options: [{
      value: 'one',
      label: 'Base'
    }, {
      value: 'two',
      label: 'Checkboxes'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4.75');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    options: [{
      value: 'one',
      label: 'Lg'
    }, {
      value: 'two',
      label: 'Checkboxes'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-5.5');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    options: [{
      value: 'one',
      label: 'Xl'
    }, {
      value: 'two',
      label: 'Checkboxes'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-6');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Responsive label',
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Checkboxes {...noValue.args} />
      <Checkboxes {...controlled.args} />
      <Checkboxes {...uncontrolled.args} />
      <Checkboxes {...disabled.args} />
    </div>
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Checkboxes {...xs.args} />
      <Checkboxes {...sm.args} />
      <Checkboxes {...base.args} />
      <Checkboxes {...lg.args} />
      <Checkboxes {...xl.args} />
    </AllSizersStoryWrapper>
}`,...B.parameters?.docs?.source}}};const S=["fieldsetLayout","noValue","controlled","uncontrolled","disabled","standardLayout","customLayout","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],D=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:S,allControlStates:w,allSizers:B,base:m,controlled:p,customLayout:k,default:R,disabled:b,fieldsetLayout:C,lg:y,noValue:d,responsive:f,sm:h,standardLayout:x,uncontrolled:u,xl:v,xs:g},Symbol.toStringTag,{value:"Module"}));export{i as C,x as a,k as c,D as s};
