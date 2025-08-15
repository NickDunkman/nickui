import{r as s}from"./iframe-tLceCB4s.js";import{R as A}from"./Radio-BC4pZBNE.js";import{A as R}from"./AllSizersStoryWrapper-BLGIkJkb.js";import{g as z}from"./getStoryArgTypes-C7SE4Oe8.js";import{R as i}from"./Radios-C2vAc9nm.js";const{expect:e,fn:c}=__STORYBOOK_MODULE_TEST__,T={title:"Form controls/Radios",component:i,argTypes:z({formControl:{isDisableable:!0,valueType:"string"},isSizerable:!0})};async function O(a,n){await n("Programmatically resetting the radios to unchecked",async()=>{a.getAllByRole("radio").forEach(t=>{t.checked=!1,e(t).not.toBeChecked()})})}const x={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),l=a.getByTitle("(required)");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(l).toHaveTextContent("*")})}},d={tags:["control-state"],args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(o).not.toBeChecked(),e(r).not.toBeChecked()}),await t("Check first Radio using the keyboard",async()=>{await l.tab(),e(o).toHaveFocus(),await l.keyboard(" "),e(o).toBeChecked(),e(r).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Focus on second Radio using keyboard",async()=>{await l.keyboard("{ArrowDown}"),e(r).toHaveFocus()}),await t("Check second Radio using the mouse",async()=>{await l.click(r),e(o).not.toBeChecked(),e(r).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),O(n,t)}},p={tags:["control-state"],args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(o).toBeChecked(),e(r).not.toBeChecked()}),await t("Try checking the other Radio. `onChange` should fire, but the value is controlled, so the Radio shouldn’t check",async()=>{await l.click(r),e(a.onChange).toHaveBeenCalled(),e(o).toBeChecked(),e(r).not.toBeChecked()})}},u={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:l})=>{const o=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(o).toBeChecked(),e(r).not.toBeChecked()}),await t("Check the other Radio. `onChange` should fire & the Radio should become checked, since the value is uncontrolled.",async()=>{await l.click(r),e(a.onChange).toHaveBeenCalled(),e(o).not.toBeChecked(),e(r).toBeChecked()}),await t("Reset to original value",async()=>{await l.click(o),e(o).toBeChecked()})}},g={tags:["control-state"],args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert all Radios are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},B={args:{name:"standard",label:"Please select a standard",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),l=a.getByLabelText("ISO 8601"),o=a.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(l).toBeChecked(),e(l).not.toBeDisabled(),e(o).not.toBeChecked(),e(o).toBeDisabled()})}},C={args:{name:"how-custom",label:"How custom do you like it?",defaultValue:"nice-and-custom",render:a=>s.createElement("div",{className:"flex items-baseline gap-4"},s.createElement(A,{...a({value:"plain"}),label:"Just plain"}),s.createElement("span",{className:"text-xs text-gray-500"},"or"),s.createElement(A,{...a({value:"nice-and-custom"}),label:s.createElement("div",{className:"font-bold"},"👨‍🎨 ",s.createElement("span",{className:"text-blue-600"},"Nice")," ",s.createElement("span",{className:"text-emerald-700"},"and")," ",s.createElement("span",{className:"text-rose-600"},"custom"))}),s.createElement("span",{className:"text-xs text-gray-500"},"or"),s.createElement(A,{...a({value:"too",disabled:!0}),className:"-rotate-30",sizer:"lg",label:"Too custom"})),onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Just plain"),l=a.getByLabelText("👨‍🎨 Nice and custom"),o=a.getByLabelText("Too custom");await n("Assert the render function’s callback works",async()=>{e(t).not.toBeChecked(),e(l).toBeChecked(),e(o).not.toBeChecked()})}},b={tags:["sizer"],args:{sizer:"xs",options:[{value:"one",label:"Xs"},{value:"two",label:"Radios"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the xs sizer style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-3.5")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","xs")})}},h={tags:["sizer"],args:{sizer:"sm",options:[{value:"one",label:"Sm"},{value:"two",label:"Radios"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the sm sizer style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","sm")})}},y={tags:["sizer"],args:{sizer:"base",options:[{value:"one",label:"Base"},{value:"two",label:"Radios"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the base sizer style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4.75")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","base")})}},m={tags:["sizer"],args:{sizer:"lg",options:[{value:"one",label:"Lg"},{value:"two",label:"Radios"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the lg sizer style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-5.5")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","lg")})}},v={tags:["sizer"],args:{sizer:"xl",options:[{value:"one",label:"Xl"},{value:"two",label:"Radios"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the xl sizer style of both the Radios & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-6")}),e(a.getByRole("group")).toHaveAttribute("data-nickui-sizer","xl")})}},w={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",hint:"Responsive hint",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()}},k={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:justify-between"},s.createElement(i,{...d.args}),s.createElement(i,{...p.args}),s.createElement(i,{...u.args}),s.createElement(i,{...g.args}))},f={tags:["!dev","!test"],render:a=>s.createElement(R,{alignBaseline:!0},s.createElement(i,{...b.args}),s.createElement(i,{...h.args}),s.createElement(i,{...y.args}),s.createElement(i,{...m.args}),s.createElement(i,{...v.args}))};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    await step('Assert all Radios are disabled', async () => {
      expect(canvas.getByLabelText('Option one')).toBeDisabled();
      expect(canvas.getByLabelText('Option two')).toBeDisabled();
    });
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    }],
    onChange: fn()
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
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      })} label={<div className="font-bold">
              👨‍🎨 <span className="text-blue-600">Nice</span>{' '}
              <span className="text-emerald-700">and</span>{' '}
              <span className="text-rose-600">custom</span>
            </div>} />
        <span className="text-xs text-gray-500">or</span>
        <Radio {...radio({
        value: 'too',
        disabled: true
      })} className="-rotate-30" sizer="lg" label="Too custom" />
      </div>,
    onChange: fn()
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    options: [{
      value: 'one',
      label: 'Xs'
    }, {
      value: 'two',
      label: 'Radios'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-3.5');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    options: [{
      value: 'one',
      label: 'Sm'
    }, {
      value: 'two',
      label: 'Radios'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    options: [{
      value: 'one',
      label: 'Base'
    }, {
      value: 'two',
      label: 'Radios'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4.75');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    options: [{
      value: 'one',
      label: 'Lg'
    }, {
      value: 'two',
      label: 'Radios'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-5.5');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    options: [{
      value: 'one',
      label: 'Xl'
    }, {
      value: 'two',
      label: 'Radios'
    }],
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style of both the Radios & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-6');
      });
      expect(canvas.getByRole('group')).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Radios {...noValue.args} />
      <Radios {...controlled.args} />
      <Radios {...uncontrolled.args} />
      <Radios {...disabled.args} />
    </div>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Radios {...xs.args} />
      <Radios {...sm.args} />
      <Radios {...base.args} />
      <Radios {...lg.args} />
      <Radios {...xl.args} />
    </AllSizersStoryWrapper>
}`,...f.parameters?.docs?.source}}};const H=["fieldsetLayout","noValue","controlled","uncontrolled","disabled","standardLayout","customLayout","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],F=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:H,allControlStates:k,allSizers:f,base:y,controlled:p,customLayout:C,default:T,disabled:g,fieldsetLayout:x,lg:m,noValue:d,responsive:w,sm:h,standardLayout:B,uncontrolled:u,xl:v,xs:b},Symbol.toStringTag,{value:"Module"}));export{B as a,C as c,F as s};
