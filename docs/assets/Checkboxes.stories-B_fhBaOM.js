import{r as l}from"./iframe-BIe9rtw3.js";import{C as O}from"./Checkbox-DUk2eHIM.js";import{A}from"./AllSizersStoryWrapper-BSR9N4QE.js";import{C as i}from"./Checkboxes-BE3nCXdG.js";const{expect:e,fn:c}=__STORYBOOK_MODULE_TEST__,T={title:"Form controls/Checkboxes",component:i},C={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),o=a.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(o).toHaveTextContent("*")})}},b={tags:["control-state"],args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(s).not.toBeChecked(),e(r).not.toBeChecked()}),await t("Check first Checkbox using the keyboard",async()=>{await o.tab(),e(s).toHaveFocus(),await o.keyboard(" "),e(s).toBeChecked(),e(r).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Check second Checkbox using the mouse",async()=>{await o.click(r),e(s).toBeChecked(),e(r).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),await t("Reset all checked states",async()=>{await o.click(s),e(s).not.toBeChecked(),await o.click(r),e(r).not.toBeChecked()})}},p={tags:["control-state"],args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(s).toBeChecked(),e(r).not.toBeChecked()}),await t("Try toggling a Checkbox. `onChange` should fire, but the value is controlled, so the Checkbox shouldn’t toggle",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).toBeChecked(),e(r).not.toBeChecked()})}},d={tags:["control-state"],args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({args:a,canvas:n,step:t,userEvent:o})=>{const s=n.getByLabelText("Option one"),r=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(s).toBeChecked(),e(r).not.toBeChecked()}),await t("Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await o.click(s),e(a.onChange).toHaveBeenCalled(),e(s).not.toBeChecked(),e(r).not.toBeChecked()}),await t("Reset to original value",async()=>{await o.click(s)})}},g={tags:["control-state"],args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert all Checkboxes are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},v={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),o=a.getByLabelText("ISO 8601"),s=a.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(o).toBeChecked(),e(o).not.toBeDisabled(),e(s).not.toBeChecked(),e(s).toBeDisabled()})}},k={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(O,{...a({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(O,{...a({value:"embiggened"}),sizer:"lg",label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...a({value:"native"})})," Native")),onChange:c()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Colorful"),o=a.getByLabelText("Embiggened"),s=a.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(t).toBeChecked(),e(o).toBeChecked(),e(s).not.toBeChecked()})}},u={tags:["sizer"],args:{label:"Xs label",sizer:"xs",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the xs sizer style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-3.5")}),e(a.getByText("Xs label")).toHaveClass("text-xs")})}},h={tags:["sizer"],args:{label:"Sm label",sizer:"sm",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the sm sizer style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4")}),e(a.getByText("Sm label")).toHaveClass("text-sm")})}},x={tags:["sizer"],args:{label:"Base label",sizer:"base",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the base sizer style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4.75")}),e(a.getByText("Base label")).toHaveClass("text-base")})}},y={tags:["sizer"],args:{label:"Lg label",sizer:"lg",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the lg style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-5.5")}),e(a.getByText("Lg label")).toHaveClass("text-lg")})}},m={tags:["sizer"],args:{label:"Xl label",sizer:"xl",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()},play:async({canvas:a,step:n})=>{await n("Assert the xl style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-6")}),e(a.getByText("Xl label")).toHaveClass("text-xl")})}},B={tags:["sizer"],args:{label:"Responsive label",sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:c()}},w={tags:["!dev","!test"],render:a=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},l.createElement(i,{...b.args,className:"sm:flex-1"}),l.createElement(i,{...p.args,className:"sm:flex-1"}),l.createElement(i,{...d.args,className:"sm:flex-1"}),l.createElement(i,{...g.args,className:"sm:flex-1"}))},f={tags:["!dev","!test"],render:a=>l.createElement(A,{alignBaseline:!0},l.createElement(i,{...u.args}),l.createElement(i,{...h.args}),l.createElement(i,{...x.args}),l.createElement(i,{...y.args}),l.createElement(i,{...m.args}))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    const requiredAsterisk = canvas.getByTitle('required');
    await step('Assert accessibility of layout elements', async () => {
      expect(fieldset).toHaveAccessibleName('A label*');
      expect(fieldset).toHaveAccessibleDescription('A hint');
      expect(fieldset).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Xs label',
    sizer: 'xs',
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
    await step('Assert the xs sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-3.5');
      });
      expect(canvas.getByText('Xs label')).toHaveClass('text-xs');
    });
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Sm label',
    sizer: 'sm',
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
    await step('Assert the sm sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4');
      });
      expect(canvas.getByText('Sm label')).toHaveClass('text-sm');
    });
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Base label',
    sizer: 'base',
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
    await step('Assert the base sizer style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-4.75');
      });
      expect(canvas.getByText('Base label')).toHaveClass('text-base');
    });
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Lg label',
    sizer: 'lg',
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
    await step('Assert the lg style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-5.5');
      });
      expect(canvas.getByText('Lg label')).toHaveClass('text-lg');
    });
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    label: 'Xl label',
    sizer: 'xl',
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
    await step('Assert the xl style of both the Checkboxes & Fieldset', async () => {
      canvas.getAllByTestId('indicator').forEach(indicator => {
        expect(indicator).toHaveClass('size-6');
      });
      expect(canvas.getByText('Xl label')).toHaveClass('text-xl');
    });
  }
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Checkboxes {...NoValue.args} className="sm:flex-1" />
      <Checkboxes {...Controlled.args} className="sm:flex-1" />
      <Checkboxes {...Uncontrolled.args} className="sm:flex-1" />
      <Checkboxes {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Checkboxes {...Xs.args} />
      <Checkboxes {...Sm.args} />
      <Checkboxes {...Base.args} />
      <Checkboxes {...Lg.args} />
      <Checkboxes {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...f.parameters?.docs?.source}}};const z=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","CustomLayout","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],N=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:w,AllSizers:f,Base:x,Controlled:p,CustomLayout:k,Disabled:g,FieldsetLayout:C,Lg:y,NoValue:b,Responsive:B,Sm:h,StandardLayout:v,Uncontrolled:d,Xl:m,Xs:u,__namedExportsOrder:z,default:T},Symbol.toStringTag,{value:"Module"}));export{k as C,N as S,v as a};
