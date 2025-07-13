import{r as l}from"./iframe-DQ1lPaZy.js";import{S as x}from"./Switch-BoWIN81C.js";import{F as B}from"./index-C4eiBceS.js";import{a as k}from"./Checkboxes-lWhV-WbC.js";function r({delimiter:t=",",...n}){return l.createElement(k,{...n,Checkable:x,delimiter:t})}r.sizer=B;r.__docgenInfo={description:`Renders multiple <Switch> as one field in a <Fieldset>.
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
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:C}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Switches",component:r},b={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:t,step:n})=>{const a=t.getByRole("group"),o=t.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(a).toHaveAccessibleName("A label*"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(o).toHaveTextContent("*")})}},i={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:C()},play:async({args:t,canvas:n,step:a,userEvent:o})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert initial all-unchecked state",async()=>{e(s).not.toBeChecked(),e(c).not.toBeChecked()}),await a("Check first Switch using the keyboard",async()=>{await o.tab(),e(s).toHaveFocus(),await o.keyboard(" "),e(s).toBeChecked(),e(c).not.toBeChecked(),e(t.onChange).toHaveBeenCalledOnce()}),await a("Check second Switch using the mouse",async()=>{await o.click(c),e(s).toBeChecked(),e(c).toBeChecked(),e(t.onChange).toHaveBeenCalledTimes(2)}),await a("Reset all checked states",async()=>{await o.click(s),e(s).not.toBeChecked(),await o.click(c),e(c).not.toBeChecked()})}},d={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:C()},play:async({args:t,canvas:n,step:a,userEvent:o})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert `value` prop works",async()=>{e(s).toBeChecked(),e(c).not.toBeChecked()}),await a("Try toggling a Switch. `onChange` should fire, but the value is controlled, so the Switch shouldn’t toggle",async()=>{await o.click(s),e(t.onChange).toHaveBeenCalled(),e(s).toBeChecked(),e(c).not.toBeChecked()})}},p={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:C()},play:async({args:t,canvas:n,step:a,userEvent:o})=>{const s=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await a("Assert `defaultValue` prop works",async()=>{e(s).toBeChecked(),e(c).not.toBeChecked()}),await a("Toggling a Switch should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await o.click(s),e(t.onChange).toHaveBeenCalled(),e(s).not.toBeChecked(),e(c).not.toBeChecked()}),await a("Reset to original value",async()=>{await o.click(s)})}},u={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}]},play:async({canvas:t,step:n})=>{await n("Assert all Switches are disabled",async()=>{e(t.getByLabelText("Option one")).toBeDisabled(),e(t.getByLabelText("Option two")).toBeDisabled()})}},y={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]},play:async({canvas:t,step:n})=>{const a=t.getByLabelText("Roman Aquila"),o=t.getByLabelText("ISO 8601"),s=t.getByLabelText("High Society");await n("Assert the controlled Switches are configured correctly",async()=>{e(a).not.toBeChecked(),e(a).not.toBeDisabled(),e(o).toBeChecked(),e(o).not.toBeDisabled(),e(s).not.toBeChecked(),e(s).toBeDisabled()})}},v={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:t=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(x,{...t({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(x,{...t({value:"embiggened"}),sizer:x.sizer.large,label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...t({value:"native"}),"aria-label":"example using different control component"})," ","Native"))},play:async({canvas:t,step:n})=>{const a=t.getByLabelText("Colorful"),o=t.getByLabelText("Embiggened"),s=t.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(a).toBeChecked(),e(o).toBeChecked(),e(s).not.toBeChecked()})}},m={args:{label:"Small label",hint:"Small hint",sizer:r.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:t,step:n})=>{await n("Assert the small style of both the Switches & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("h-5")}),e(t.getByText("Small label")).toHaveClass("text-xs")})}},g={args:{label:"Medium label",hint:"Medium hint",sizer:r.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:t,step:n})=>{await n("Assert the medium style of both the Switches & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("h-6")}),e(t.getByText("Medium label")).toHaveClass("text-sm")})}},h={args:{label:"Large label",hint:"Large hint",sizer:r.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:t,step:n})=>{await n("Assert the laerge style of both the Switches & Fieldset",async()=>{t.getAllByTestId("indicator").forEach(a=>{e(a).toHaveClass("h-7")}),e(t.getByText("Large label")).toHaveClass("text-lg")})}},w={tags:["!dev","!test"],render:t=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},l.createElement(r,{...i.args,className:"sm:flex-1"}),l.createElement(r,{...d.args,className:"sm:flex-1"}),l.createElement(r,{...p.args,className:"sm:flex-1"}),l.createElement(r,{...u.args,className:"sm:flex-1"}))},f={tags:["!dev","!test"],render:t=>l.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 sm:flex-row sm:items-baseline"},l.createElement(r,{...m.args,className:"sm:flex-1"}),l.createElement(r,{...g.args,className:"sm:flex-1"}),l.createElement(r,{...h.args,className:"sm:flex-1"}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Switches.sizer.small,
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
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Switches.sizer.medium,
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
    label: 'Large label',
    hint: 'Large hint',
    sizer: Switches.sizer.large,
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Switches {...NoValue.args} className="sm:flex-1" />
      <Switches {...Controlled.args} className="sm:flex-1" />
      <Switches {...Uncontrolled.args} className="sm:flex-1" />
      <Switches {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row sm:items-baseline">
      <Switches {...Small.args} className="sm:flex-1" />
      <Switches {...Medium.args} className="sm:flex-1" />
      <Switches {...Large.args} className="sm:flex-1" />
    </div>
}`,...f.parameters?.docs?.source}}};const T=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","CustomLayout","Small","Medium","Large","AllControlStates","AllSizes"],L=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:w,AllSizes:f,Controlled:d,CustomLayout:v,Disabled:u,FieldsetLayout:b,Large:h,Medium:g,NoValue:i,Small:m,StandardLayout:y,Uncontrolled:p,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{v as C,L as S,r as a,y as b};
