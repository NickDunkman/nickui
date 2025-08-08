import{r as l}from"./iframe-C3OS0XiJ.js";import{S}from"./Switch-CZntw7k5.js";import{A}from"./AllSizersStoryWrapper-BgoD26Cb.js";import{a as T}from"./Checkboxes-BeP5MrBX.js";function c({delimiter:a=",",...n}){return l.createElement(T,{...n,Checkable:S,delimiter:a,"data-nickui-component":"Switches"})}c.__docgenInfo={description:`Renders multiple <Switch> as one field in a <Fieldset>.
@props {@link CheckablesProps} + {@link CommonFieldsetProps}`,methods:[],displayName:"Switches",props:{name:{required:!1,tsType:{name:"string"},description:"The name for the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (control: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(control: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"control"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
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
}[]`},description:"Adds the controls in the standard layout"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value when using it as an uncontrolled component"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:`Changes the size of the fieldset ("xs", "sm", "base", "lg", "xl",
"sm:base", "lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:r}=__STORYBOOK_MODULE_TEST__,R={title:"Form controls/Switches",component:c},x={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),o=a.getByTitle("(required)");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(o).toHaveTextContent("*")})}},d={tags:["control-state"],args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(s).not.toBeChecked(),e(i).not.toBeChecked()}),await t("Check first Switch using the keyboard",async()=>{await o.tab(),e(s).toHaveFocus(),await o.keyboard(" "),e(s).toBeChecked(),e(i).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Check second Switch using the mouse",async()=>{await o.click(i),e(s).toBeChecked(),e(i).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),await t("Reset all checked states",async()=>{await o.click(s),e(s).not.toBeChecked(),await o.click(i),e(i).not.toBeChecked()})}},u={tags:["control-state"],args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(s).toBeChecked(),e(i).not.toBeChecked()}),await t("Try toggling a Switch. `onChange` should fire, but the value is controlled, so the Switch shouldn’t toggle",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).toBeChecked(),e(i).not.toBeChecked()})}},p={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(s).toBeChecked(),e(i).not.toBeChecked()}),await t("Toggling a Switch should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).not.toBeChecked(),e(i).not.toBeChecked()}),await t("Reset to original value",async()=>{await o.click(s)})}},g={tags:["control-state"],args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert all Switches are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},w={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:r()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),o=a.getByLabelText("ISO 8601"),s=a.getByLabelText("High Society");await n("Assert the controlled Switches are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(o).toBeChecked(),e(o).not.toBeDisabled(),e(s).not.toBeChecked(),e(s).toBeDisabled()})}},f={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(S,{...a({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(S,{...a({value:"embiggened"}),sizer:"lg",label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...a({value:"native"}),"aria-label":"example using different control component"})," ","Native")),onChange:r()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Colorful"),o=a.getByLabelText("Embiggened"),s=a.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(t).toBeChecked(),e(o).toBeChecked(),e(s).not.toBeChecked()})}},m={tags:["sizer"],args:{sizer:"xs",options:[{value:"one",label:"Xs"},{value:"two",label:"Switches"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert the xs sizer style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-4")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","xs")})}},h={tags:["sizer"],args:{sizer:"sm",options:[{value:"one",label:"Sm"},{value:"two",label:"Switches"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert the sm sizer style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-5")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","sm")})}},b={tags:["sizer"],args:{sizer:"base",options:[{value:"one",label:"Base"},{value:"two",label:"Switches"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert the base sizer style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-6")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","base")})}},v={tags:["sizer"],args:{sizer:"lg",options:[{value:"one",label:"Lg"},{value:"two",label:"Switches"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert the lg style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-7")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","lg")})}},y={tags:["sizer"],args:{sizer:"xl",options:[{value:"one",label:"Xl"},{value:"two",label:"Switches"}],onChange:r()},play:async({canvas:a,step:n})=>{await n("Assert the xl style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-8")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","xl")})}},C={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",hint:"Responsive hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:r()}},B={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},l.createElement(c,{...d.args}),l.createElement(c,{...u.args}),l.createElement(c,{...p.args}),l.createElement(c,{...g.args}))},k={tags:["!dev","!test"],render:a=>l.createElement(A,{alignBaseline:!0},l.createElement(c,{...m.args}),l.createElement(c,{...h.args}),l.createElement(c,{...b.args}),l.createElement(c,{...v.args}),l.createElement(c,{...y.args}))};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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

    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');
    await step('Assert initial all-unchecked state', async () => {
      expect(s1).not.toBeChecked();
      expect(s2).not.toBeChecked();
    });
    await step('Check first Switch using the keyboard', async () => {
      await userEvent.tab();
      expect(s1).toHaveFocus();
      await userEvent.keyboard(' ');
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Check second Switch using the mouse', async () => {
      await userEvent.click(s2);
      expect(s1).toBeChecked();
      expect(s2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
    await step('Reset all checked states', async () => {
      await userEvent.click(s1);
      expect(s1).not.toBeChecked();
      await userEvent.click(s2);
      expect(s2).not.toBeChecked();
    });
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');
    await step('Assert \`value\` prop works', async () => {
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
    });
    await step('Try toggling a Switch. \`onChange\` should fire, but the value is controlled, so the Switch shouldn’t toggle', async () => {
      await userEvent.click(s1);
      expect(args.onChange).toHaveBeenCalled();
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    const s1 = canvas.getByLabelText('Option one');
    const s2 = canvas.getByLabelText('Option two');
    await step('Assert \`defaultValue\` prop works', async () => {
      expect(s1).toBeChecked();
      expect(s2).not.toBeChecked();
    });
    await step('Toggling a Switch should both fire onChange & toggle the checked state, since the value is uncontrolled.', async () => {
      await userEvent.click(s1);
      expect(args.onChange).toHaveBeenCalled();
      expect(s1).not.toBeChecked();
      expect(s2).not.toBeChecked();
    });

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(s1);
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    await step('Assert all Switches are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    const s1 = canvas.getByLabelText('Roman Aquila');
    const s2 = canvas.getByLabelText('ISO 8601');
    const s3 = canvas.getByLabelText('High Society');
    await step('Assert the controlled Switches are configured correctly', async () => {
      expect(s1).not.toBeChecked();
      expect(s1).not.toBeDisabled();
      expect(s2).toBeChecked();
      expect(s2).not.toBeDisabled();
      expect(s3).not.toBeChecked();
      expect(s3).toBeDisabled();
    });
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Switch {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-700">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Switch {...checkbox({
        value: 'embiggened'
      })} sizer="lg" label="Embiggened" />
        <label>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} aria-label="example using different control component" />{' '}
          Native
        </label>
      </div>,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const s1 = canvas.getByLabelText('Colorful');
    const s2 = canvas.getByLabelText('Embiggened');
    const s3 = canvas.getByLabelText('Native');
    await step('Assert the render function’s callback works', async () => {
      expect(s1).toBeChecked();
      expect(s2).toBeChecked();
      expect(s3).not.toBeChecked();
    });
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    options: [{
      value: 'one',
      label: 'Xs'
    }, {
      value: 'two',
      label: 'Switches'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-4');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    options: [{
      value: 'one',
      label: 'Sm'
    }, {
      value: 'two',
      label: 'Switches'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-5');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    options: [{
      value: 'one',
      label: 'Base'
    }, {
      value: 'two',
      label: 'Switches'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-6');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    options: [{
      value: 'one',
      label: 'Lg'
    }, {
      value: 'two',
      label: 'Switches'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-7');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    options: [{
      value: 'one',
      label: 'Xl'
    }, {
      value: 'two',
      label: 'Switches'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-8');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    hint: 'Responsive hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }],
    onChange: fn()
  }
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Switches {...noValue.args} />
      <Switches {...controlled.args} />
      <Switches {...uncontrolled.args} />
      <Switches {...disabled.args} />
    </div>
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Switches {...xs.args} />
      <Switches {...sm.args} />
      <Switches {...base.args} />
      <Switches {...lg.args} />
      <Switches {...xl.args} />
    </AllSizersStoryWrapper>
}`,...k.parameters?.docs?.source}}};const z=["fieldsetLayout","noValue","controlled","uncontrolled","disabled","standardLayout","customLayout","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],N=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:z,allControlStates:B,allSizers:k,base:b,controlled:u,customLayout:f,default:R,disabled:g,fieldsetLayout:x,lg:v,noValue:d,responsive:C,sm:h,standardLayout:w,uncontrolled:p,xl:y,xs:m},Symbol.toStringTag,{value:"Module"}));export{c as S,w as a,f as c,N as s};
