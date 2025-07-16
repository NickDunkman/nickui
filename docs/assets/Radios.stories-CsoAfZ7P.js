import{r as s}from"./iframe-BKg6Mjzb.js";import{R as y}from"./Radio-VpqILvS6.js";import{R as r}from"./Radios-DiIhVB9r.js";const{expect:e,fn:k}=__STORYBOOK_MODULE_TEST__,f={title:"Form controls/Radios",component:r};async function O(a,n){await n("Programmatically resetting the radios to unchecked",async()=>{a.getAllByRole("radio").forEach(t=>{t.checked=!1,e(t).not.toBeChecked()})})}const v={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),l=a.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(l).toHaveTextContent("*")})}},i={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(o).not.toBeChecked(),e(c).not.toBeChecked()}),await t("Check first Radio using the keyboard",async()=>{await l.tab(),e(o).toHaveFocus(),await l.keyboard(" "),e(o).toBeChecked(),e(c).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Focus on second Radio using keyboard",async()=>{await l.keyboard("{ArrowDown}"),e(c).toHaveFocus()}),await t("Check second Radio using the mouse",async()=>{await l.click(c),e(o).not.toBeChecked(),e(c).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),O(n,t)}},d={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Try checking the other Radio. `onChange` should fire, but the value is controlled, so the Radio shouldn’t check",async()=>{await l.click(c),e(a.onChange).toHaveBeenCalled(),e(o).toBeChecked(),e(c).not.toBeChecked()})}},p={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Check the other Radio. `onChange` should fire & the Radio should become checked, since the value is uncontrolled.",async()=>{await l.click(c),e(a.onChange).toHaveBeenCalled(),e(o).not.toBeChecked(),e(c).toBeChecked()}),await t("Reset to original value",async()=>{await l.click(o),e(o).toBeChecked()})}},u={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert all Radios are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},x={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},s.createElement(r,{...i.args,className:"sm:flex-1"}),s.createElement(r,{...d.args,className:"sm:flex-1"}),s.createElement(r,{...p.args,className:"sm:flex-1"}),s.createElement(r,{...u.args,className:"sm:flex-1"}))},w={args:{name:"standard",label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),l=a.getByLabelText("ISO 8601"),o=a.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(l).toBeChecked(),e(l).not.toBeDisabled(),e(o).not.toBeChecked(),e(o).toBeDisabled()})}},B={args:{name:"how-custom",label:"How custom do you like it?",defaultValue:"nice-and-custom",render:a=>s.createElement("div",{className:"flex items-baseline gap-4"},s.createElement(y,{...a({value:"plain"}),label:"Just plain"}),s.createElement("span",{className:"text-xs text-gray-500"},"or"),s.createElement(y,{...a({value:"nice-and-custom"}),sizer:y.sizer.medium,label:s.createElement("div",{className:"font-bold"},"👨‍🎨 ",s.createElement("span",{className:"text-blue-600"},"Nice")," ",s.createElement("span",{className:"text-green-700"},"and")," ",s.createElement("span",{className:"text-rose-600"},"custom"))}),s.createElement("span",{className:"text-xs text-gray-500"},"or"),s.createElement(y,{...a({value:"too",disabled:!0}),className:"-rotate-30",sizer:y.sizer.large,label:"Too custom"}))},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Just plain"),l=a.getByLabelText("👨‍🎨 Nice and custom"),o=a.getByLabelText("Too custom");await n("Assert the render function’s callback works",async()=>{e(t).not.toBeChecked(),e(l).toBeChecked(),e(o).not.toBeChecked()})}},m={args:{sizer:r.sizer.small,label:"Small label",hint:"Small hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the small style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-3.5")}),e(a.getByText("Small label")).toHaveClass("text-xs")})}},g={args:{sizer:r.sizer.medium,label:"Medium label",hint:"Medium hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the medium style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4")}),e(a.getByText("Medium label")).toHaveClass("text-sm")})}},b={args:{sizer:r.sizer.large,label:"Large label",hint:"Large hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the large style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-5")}),e(a.getByText("Large label")).toHaveClass("text-lg")})}},h={tags:["!test"],args:{sizer:[r.sizer.smMedium,r.sizer.mdLarge],label:"Responsive label",hint:"Responsive hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},C={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},s.createElement(r,{...m.args,className:"sm:flex-1"}),s.createElement(r,{...g.args,className:"sm:flex-1"}),s.createElement(r,{...b.args,className:"sm:flex-1"}),s.createElement(r,{...h.args,className:"sm:flex-1"}))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');
    await step('Assert initial all-unchecked state', async () => {
      expect(r1).not.toBeChecked();
      expect(r2).not.toBeChecked();
    });
    await step('Check first Radio using the keyboard', async () => {
      await userEvent.tab();
      expect(r1).toHaveFocus();
      await userEvent.keyboard(' ');
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Focus on second Radio using keyboard', async () => {
      await userEvent.keyboard('{ArrowDown}');
      expect(r2).toHaveFocus();
    });
    await step('Check second Radio using the mouse', async () => {
      await userEvent.click(r2);
      expect(r1).not.toBeChecked();
      expect(r2).toBeChecked();
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
    uncheckAll(canvas, step);
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
    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');
    await step('Assert \`value\` prop works', async () => {
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
    });
    await step('Try checking the other Radio. \`onChange\` should fire, but the value is controlled, so the Radio shouldn’t check', async () => {
      await userEvent.click(r2);
      expect(args.onChange).toHaveBeenCalled();
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
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
    const r1 = canvas.getByLabelText('Option one');
    const r2 = canvas.getByLabelText('Option two');
    await step('Assert \`defaultValue\` prop works', async () => {
      expect(r1).toBeChecked();
      expect(r2).not.toBeChecked();
    });
    await step('Check the other Radio. \`onChange\` should fire & the Radio should become checked, since the value is uncontrolled.', async () => {
      await userEvent.click(r2);
      expect(args.onChange).toHaveBeenCalled();
      expect(r1).not.toBeChecked();
      expect(r2).toBeChecked();
    });

    // reset back to original state
    await step('Reset to original value', async () => {
      await userEvent.click(r1);
      expect(r1).toBeChecked();
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
    await step('Assert all Radios are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Radios {...NoValue.args} className="sm:flex-1" />
      <Radios {...Controlled.args} className="sm:flex-1" />
      <Radios {...Uncontrolled.args} className="sm:flex-1" />
      <Radios {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'standard',
    label: 'Please select a standard',
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
    const r1 = canvas.getByLabelText('Roman Aquila');
    const r2 = canvas.getByLabelText('ISO 8601');
    const r3 = canvas.getByLabelText('High Society');
    await step('Assert the controlled Checkboxes are configured correctly', async () => {
      expect(r1).not.toBeChecked();
      expect(r1).not.toBeDisabled();
      expect(r2).toBeChecked();
      expect(r2).not.toBeDisabled();
      expect(r3).not.toBeChecked();
      expect(r3).toBeDisabled();
    });
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'how-custom',
    label: 'How custom do you like it?',
    defaultValue: 'nice-and-custom',
    render: radio => <div className="flex items-baseline gap-4">
        <Radio {...radio({
        value: 'plain'
      })} label="Just plain" />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'nice-and-custom'
      })} sizer={Radio.sizer.medium} label={<div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-green-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>} />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'too',
        disabled: true
      })} className="-rotate-30" sizer={Radio.sizer.large} label="Too custom" />
      </div>
  },
  play: async ({
    canvas,
    step
  }) => {
    const r1 = canvas.getByLabelText('Just plain');
    const r2 = canvas.getByLabelText('👨‍🎨 Nice and custom');
    const r3 = canvas.getByLabelText('Too custom');
    await step('Assert the render function’s callback works', async () => {
      expect(r1).not.toBeChecked();
      expect(r2).toBeChecked();
      expect(r3).not.toBeChecked();
    });
  }
}`,...B.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Radios.sizer.small,
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
    await step('Assert the small style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-3.5');
      });
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Radios.sizer.medium,
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
    await step('Assert the medium style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4');
      });
      expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
    });
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Radios.sizer.large,
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
    await step('Assert the large style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-5');
      });
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Radios.sizer.smMedium, Radios.sizer.mdLarge],
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Radios {...Small.args} className="sm:flex-1" />
      <Radios {...Medium.args} className="sm:flex-1" />
      <Radios {...Large.args} className="sm:flex-1" />
      <Radios {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...C.parameters?.docs?.source}}};const R=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","AllControlStates","StandardLayout","CustomLayout","Small","Medium","Large","Responsive","AllSizes"],L=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:x,AllSizes:C,Controlled:d,CustomLayout:B,Disabled:u,FieldsetLayout:v,Large:b,Medium:g,NoValue:i,Responsive:h,Small:m,StandardLayout:w,Uncontrolled:p,__namedExportsOrder:R,default:f},Symbol.toStringTag,{value:"Module"}));export{B as C,L as S,w as a};
