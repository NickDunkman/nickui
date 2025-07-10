import{r as l}from"./iframe-DYxnnFe3.js";import{C as B}from"./Checkbox-miL9dw_Z.js";import{C as r}from"./Checkboxes-BTFHBw15.js";const{expect:e,fn:k}=__STORYBOOK_MODULE_TEST__,se={title:"Form controls/Checkboxes",component:r},m={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{const t=a.getByRole("group"),s=a.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{e(t).toHaveAccessibleName("A label*"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(s).toHaveTextContent("*")})}},i={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert initial all-unchecked state",async()=>{e(o).not.toBeChecked(),e(c).not.toBeChecked()}),await t("Check first Checkbox using the keyboard",async()=>{await s.tab(),e(o).toHaveFocus(),await s.keyboard(" "),e(o).toBeChecked(),e(c).not.toBeChecked(),e(a.onChange).toHaveBeenCalledOnce()}),await t("Check second Checkbox using the mouse",async()=>{await s.click(c),e(o).toBeChecked(),e(c).toBeChecked(),e(a.onChange).toHaveBeenCalledTimes(2)}),await t("Reset all checked states",async()=>{await s.click(o),e(o).not.toBeChecked(),await s.click(c),e(c).not.toBeChecked()})}},b={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `value` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Try toggling a Checkbox. `onChange` should fire, but the value is controlled, so the Checkbox shouldn’t toggle",async()=>{await s.click(o),e(a.onChange).toHaveBeenCalled(),e(o).toBeChecked(),e(c).not.toBeChecked()})}},d={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:k()},play:async({args:a,canvas:n,step:t,userEvent:s})=>{const o=n.getByLabelText("Option one"),c=n.getByLabelText("Option two");await t("Assert `defaultValue` prop works",async()=>{e(o).toBeChecked(),e(c).not.toBeChecked()}),await t("Toggling a Checkbox should both fire onChange & toggle the checked state, since the value is uncontrolled.",async()=>{await s.click(o),e(a.onChange).toHaveBeenCalled(),e(o).not.toBeChecked(),e(c).not.toBeChecked()}),await t("Reset to original value",async()=>{await s.click(o)})}},p={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one",disabled:!1},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert all Checkboxes are disabled",async()=>{e(a.getByLabelText("Option one")).toBeDisabled(),e(a.getByLabelText("Option two")).toBeDisabled()})}},x={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}],onChange:k()},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Roman Aquila"),s=a.getByLabelText("ISO 8601"),o=a.getByLabelText("High Society");await n("Assert the controlled Checkboxes are configured correctly",async()=>{e(t).not.toBeChecked(),e(t).not.toBeDisabled(),e(s).toBeChecked(),e(s).not.toBeDisabled(),e(o).not.toBeChecked(),e(o).toBeDisabled()})}},y={tags:["!dev","!test"],render:()=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},l.createElement(r,{...i.args,className:"sm:flex-1"}),l.createElement(r,{...b.args,className:"sm:flex-1"}),l.createElement(r,{...d.args,className:"sm:flex-1"}),l.createElement(r,{...p.args,className:"sm:flex-1"}))},C={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>l.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},l.createElement(B,{...a({value:"colorful"}),label:l.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),l.createElement(B,{...a({value:"embiggened"}),sizer:B.sizer.large,label:"Embiggened"}),l.createElement("label",null,l.createElement("input",{type:"checkbox",...a({value:"native"})})," Native"))},play:async({canvas:a,step:n})=>{const t=a.getByLabelText("Colorful"),s=a.getByLabelText("Embiggened"),o=a.getByLabelText("Native");await n("Assert the render function’s callback works",async()=>{e(t).toBeChecked(),e(s).toBeChecked(),e(o).not.toBeChecked()})}},u={args:{label:"Small label",hint:"Small hint",sizer:r.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the small style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-3.5")}),e(a.getByText("Small label")).toHaveClass("text-xs")})}},g={args:{label:"Medium label",hint:"Medium hint",sizer:r.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the medium style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-4")}),e(a.getByText("Medium label")).toHaveClass("text-sm")})}},h={args:{label:"Large label",hint:"Large hint",sizer:r.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:async({canvas:a,step:n})=>{await n("Assert the laerge style of both the Checkboxes & Fieldset",async()=>{a.getAllByTestId("indicator").forEach(t=>{e(t).toHaveClass("size-5")}),e(a.getByText("Large label")).toHaveClass("text-lg")})}},v={tags:["!dev","!test"],render:()=>l.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center"},l.createElement(r,{...u.args,className:"sm:flex-1"}),l.createElement(r,{...g.args,className:"sm:flex-1"}),l.createElement(r,{...h.args,className:"sm:flex-1"}))};var w,f,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(f=m.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var A,T,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var S,E,N;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(E=b.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var H,z,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var V,q,M;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(q=p.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var _,F,R;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var I,U,P;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row">
      <Checkboxes {...NoValue.args} className="sm:flex-1" />
      <Checkboxes {...Controlled.args} className="sm:flex-1" />
      <Checkboxes {...Uncontrolled.args} className="sm:flex-1" />
      <Checkboxes {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...(P=(U=y.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var j,K,W;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(K=C.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Y,G,J;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: () => <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
}`,...(oe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const le=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","AllControlStates","CustomLayout","Small","Medium","Large","AllSizes"],be=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:y,AllSizes:v,Controlled:b,CustomLayout:C,Disabled:p,FieldsetLayout:m,Large:h,Medium:g,NoValue:i,Small:u,StandardLayout:x,Uncontrolled:d,__namedExportsOrder:le,default:se},Symbol.toStringTag,{value:"Module"}));export{C,be as S,x as a};
