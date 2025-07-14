import{r as l}from"./iframe-DOqKYI6o.js";import{C as B}from"./Checkbox-DPJbGJ0p.js";import{C as r}from"./Checkboxes-CvZOHTzq.js";const{expect:e,fn:k}=__STORYBOOK_MODULE_TEST__,w={title:"Form controls/Checkboxes",component:r},m={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),s=a.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(s).toHaveTextContent("*")})}},i={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(o).not.toBeChecked(),e(c).not.toBeChecked()}),await t("Check first Checkbox using the keyboard",async()=>{await s.tab(),e(o).toHaveFocus(),await s.keyboard(" "),e(o).toBeChecked(),e(c).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Check second Checkbox using the mouse",async()=>{await s.click(c),e(o).toBeChecked(),e(c).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),await t("Reset all checked states",async()=>{await s.click(o),e(o).not.toBeChecked(),await s.click(c),e(c).not.toBeChecked()})}},b={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Try toggling a Checkbox. `onChange` should fire, but the value is controlled, so the Checkbox shouldn’t toggle",async()=>{await s.click(o),e(a.onChange).toHaveBeenCalled(),e(o).toBeChecked(),e(c).not.toBeChecked()})}},d={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await s.click(o),e(a.onChange).toHaveBeenCalled(),e(o).not.toBeChecked(),e(c).not.toBeChecked()}),await t("Reset to original value",async()=>{await s.click(o)})}},p={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert all Checkboxes are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},x={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:k()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),s=a.getByLabelText("ISO 8601"),o=a.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(s).toBeChecked(),e(s).not.toBeDisabled(),e(o).not.toBeChecked(),e(o).toBeDisabled()})}},y={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(B,{...a({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(B,{...a({value:"embiggened"}),sizer:B.sizer.large,label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...a({value:"native"})})," Native"))},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Colorful"),s=a.getByLabelText("Embiggened"),o=a.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(t).toBeChecked(),e(s).toBeChecked(),e(o).not.toBeChecked()})}},u={args:{label:"Small label",hint:"Small hint",sizer:r.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the small style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-3.5")}),e(a.getByText("Small label")).toHaveClass("text-xs")})}},g={args:{label:"Medium label",hint:"Medium hint",sizer:r.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the medium style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4")}),e(a.getByText("Medium label")).toHaveClass("text-sm")})}},h={args:{label:"Large label",hint:"Large hint",sizer:r.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the laerge style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-5")}),e(a.getByText("Large label")).toHaveClass("text-lg")})}},C={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},l.createElement(r,{...i.args,className:"sm:flex-1"}),l.createElement(r,{...b.args,className:"sm:flex-1"}),l.createElement(r,{...d.args,className:"sm:flex-1"}),l.createElement(r,{...p.args,className:"sm:flex-1"}))},v={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center"},l.createElement(r,{...u.args,className:"sm:flex-1"}),l.createElement(r,{...g.args,className:"sm:flex-1"}),l.createElement(r,{...h.args,className:"sm:flex-1"}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    await step('Assert all Checkboxes are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Checkbox {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-700">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Checkbox {...checkbox({
        value: 'embiggened'
      })} sizer={Checkbox.sizer.large} label="Embiggened" />
        <label>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} /> Native
        </label>
      </div>
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
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Checkboxes.sizer.small,
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
    await step('Assert the small style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-3.5');
      });
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Checkboxes.sizer.medium,
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
    await step('Assert the medium style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4');
      });
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Checkboxes.sizer.large,
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
    await step('Assert the laerge style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-5');
      });
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Checkboxes {...NoValue.args} className="sm:flex-1" />
      <Checkboxes {...Controlled.args} className="sm:flex-1" />
      <Checkboxes {...Uncontrolled.args} className="sm:flex-1" />
      <Checkboxes {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
}`,...v.parameters?.docs?.source}}};const f=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","CustomLayout","Small","Medium","Large","AllControlStates","AllSizes"],L=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:C,AllSizes:v,Controlled:b,CustomLayout:y,Disabled:p,FieldsetLayout:m,Large:h,Medium:g,NoValue:i,Small:u,StandardLayout:x,Uncontrolled:d,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{y as C,L as S,x as a};
