import{r as l}from"./iframe-BgSCrXib.js";import{S as C}from"./Switch-0ay9lPxz.js";import{S as k}from"./index-BaQko9xu.js";import{a as S}from"./Checkboxes-B0GD9D8K.js";function r({delimiter:a=",",...n}){return l.createElement(S,{...n,Checkable:C,delimiter:a})}r.sizer=k;r.__docgenInfo={description:`Renders multiple <Switch> as one field in a <Fieldset>.
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
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:`Changes the size of the field ("small", "medium", "large", "sm:small",
"md:large", etc)`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:B}=__STORYBOOK_MODULE_TEST__,T={title:"Form controls/Switches",component:r},y={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),o=a.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(o).toHaveTextContent("*")})}},c={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(s).not.toBeChecked(),e(i).not.toBeChecked()}),await t("Check first Switch using the keyboard",async()=>{await o.tab(),e(s).toHaveFocus(),await o.keyboard(" "),e(s).toBeChecked(),e(i).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Check second Switch using the mouse",async()=>{await o.click(i),e(s).toBeChecked(),e(i).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),await t("Reset all checked states",async()=>{await o.click(s),e(s).not.toBeChecked(),await o.click(i),e(i).not.toBeChecked()})}},d={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(s).toBeChecked(),e(i).not.toBeChecked()}),await t("Try toggling a Switch. `onChange` should fire, but the value is controlled, so the Switch shouldn’t toggle",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).toBeChecked(),e(i).not.toBeChecked()})}},p={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),i=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(s).toBeChecked(),e(i).not.toBeChecked()}),await t("Toggling a Switch should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).not.toBeChecked(),e(i).not.toBeChecked()}),await t("Reset to original value",async()=>{await o.click(s)})}},u={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert all Switches are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},v={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),o=a.getByLabelText("ISO 8601"),s=a.getByLabelText("High Society");await n("Assert the controlled Switches are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(o).toBeChecked(),e(o).not.toBeDisabled(),e(s).not.toBeChecked(),e(s).toBeDisabled()})}},w={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(C,{...a({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(C,{...a({value:"embiggened"}),sizer:C.sizer.large,label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...a({value:"native"}),"aria-label":"example using different control component"})," ","Native"))},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Colorful"),o=a.getByLabelText("Embiggened"),s=a.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(t).toBeChecked(),e(o).toBeChecked(),e(s).not.toBeChecked()})}},m={args:{sizer:r.sizer.small,label:"Small label",hint:"Small hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the small style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-5")}),e(a.getByText("Small label")).toHaveClass("text-xs")})}},g={args:{sizer:r.sizer.medium,label:"Medium label",hint:"Medium hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the medium style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-6")}),e(a.getByText("Medium label")).toHaveClass("text-sm")})}},h={args:{sizer:r.sizer.large,label:"Large label",hint:"Large hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the laerge style of both the Switches & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("h-7")}),e(a.getByText("Large label")).toHaveClass("text-lg")})}},b={tags:["!test"],args:{sizer:[r.sizer.smMedium,r.sizer.mdLarge],label:"Responsive label",hint:"Responsive hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},f={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},l.createElement(r,{...c.args,className:"sm:flex-1"}),l.createElement(r,{...d.args,className:"sm:flex-1"}),l.createElement(r,{...p.args,className:"sm:flex-1"}),l.createElement(r,{...u.args,className:"sm:flex-1"}))},x={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},l.createElement(r,{...m.args,className:"sm:flex-1"}),l.createElement(r,{...g.args,className:"sm:flex-1"}),l.createElement(r,{...h.args,className:"sm:flex-1"}),l.createElement(r,{...b.args,className:"sm:flex-1"}))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  play: async ({
    canvas,
    step
  }) => {
    const fieldset = canvas.getByRole('group');
    const requiredAsterisk = canvas.getByTitle('required');
    await step('Assert accessibility of layout elements', async () => {
      expect(fieldset).toHaveAccessibleName('A label*');
      expect(fieldset).toHaveAccessibleDescription('A hint');
      expect(fieldset).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
  }
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    }]
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    }]
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Switch {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-700">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Switch {...checkbox({
        value: 'embiggened'
      })} sizer={Switch.sizer.large} label="Embiggened" />
        <label>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} aria-label="example using different control component" />{' '}
          Native
        </label>
      </div>
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
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switches.sizer.small,
    label: 'Small label',
    hint: 'Small hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-5');
      });
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switches.sizer.medium,
    label: 'Medium label',
    hint: 'Medium hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-6');
      });
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switches.sizer.large,
    label: 'Large label',
    hint: 'Large hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the laerge style of both the Switches & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('h-7');
      });
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Switches.sizer.smMedium, Switches.sizer.mdLarge],
    label: 'Responsive label',
    hint: 'Responsive hint',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Switches {...NoValue.args} className="sm:flex-1" />
      <Switches {...Controlled.args} className="sm:flex-1" />
      <Switches {...Uncontrolled.args} className="sm:flex-1" />
      <Switches {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Switches {...Small.args} className="sm:flex-1" />
      <Switches {...Medium.args} className="sm:flex-1" />
      <Switches {...Large.args} className="sm:flex-1" />
      <Switches {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...x.parameters?.docs?.source}}};const O=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","CustomLayout","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],E=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:f,AllSizes:x,Controlled:d,CustomLayout:w,Disabled:u,FieldsetLayout:y,Large:h,Medium:g,NoValue:c,Responsive:b,Small:m,StandardLayout:v,Uncontrolled:p,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{w as C,E as S,r as a,v as b};
