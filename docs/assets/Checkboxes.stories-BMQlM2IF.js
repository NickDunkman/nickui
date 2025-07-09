import{r as s}from"./iframe-LKk278Jc.js";import{C as k}from"./Checkbox-qXD-Kiym.js";import{C as c}from"./Checkboxes-W10_M7zg.js";const{expect:e,fn:B}=__STORYBOOK_MODULE_TEST__,oe={title:"Form controls/Checkboxes",component:c},m={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:({canvas:a})=>{const n=a.getByRole("group");e(n).toHaveAccessibleName("A label*"),e(n).toHaveAccessibleDescription("A hint"),e(n).toHaveAccessibleErrorMessage("An error message"),e(a.getByTitle("required")).toHaveTextContent("*");const o=a.getByLabelText("Option one");e(o).toHaveRole("checkbox"),e(o).not.toBeChecked();const t=a.getByLabelText("Option two");e(t).toHaveRole("checkbox"),e(t).not.toBeChecked()}},r={args:{label:"No valueish prop",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,userEvent:o})=>{const t=n.getByLabelText("Option one");e(t).not.toBeChecked();const l=n.getByLabelText("Option two");e(l).not.toBeChecked(),await o.click(t),e(t).toBeChecked(),e(l).not.toBeChecked(),e(a.onChange).toHaveBeenCalled(),await o.click(l),e(t).toBeChecked(),e(l).toBeChecked(),await o.click(t),e(t).not.toBeChecked(),e(l).toBeChecked(),await o.click(l),e(t).not.toBeChecked(),e(l).not.toBeChecked()}},i={args:{label:"Controlled",value:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,userEvent:o})=>{const t=n.getByLabelText("Option one");e(t).toBeChecked();const l=n.getByLabelText("Option two");e(l).not.toBeChecked(),await o.click(t),e(a.onChange).toHaveBeenCalled(),e(t).toBeChecked(),e(l).not.toBeChecked()}},b={args:{label:"Uncontrolled",defaultValue:"one",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,userEvent:o})=>{const t=n.getByLabelText("Option one");e(t).toBeChecked();const l=n.getByLabelText("Option two");e(l).not.toBeChecked(),await o.click(t),e(a.onChange).toHaveBeenCalled(),e(t).not.toBeChecked(),e(l).not.toBeChecked(),await o.click(t)}},d={args:{label:"Disabled",defaultValue:"one",disabled:!0,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}],onChange:B()},play:async({args:a,canvas:n,userEvent:o})=>{const t=n.getByLabelText("Option one");e(t).toBeDisabled();const l=n.getByLabelText("Option two");e(l).toBeDisabled(),await o.click(t),e(a.onChange).not.toHaveBeenCalled()}},h={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]},play:({canvas:a})=>{const n=a.getByLabelText("Roman Aquila");e(n).not.toBeChecked(),e(n).not.toBeDisabled();const o=a.getByLabelText("ISO 8601");e(o).toBeChecked(),e(o).not.toBeDisabled();const t=a.getByLabelText("High Society");e(t).not.toBeChecked(),e(t).toBeDisabled()}},x={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4 sm:flex-row"},s.createElement(c,{...r.args,className:"sm:flex-1"}),s.createElement(c,{...i.args,className:"sm:flex-1"}),s.createElement(c,{...b.args,className:"sm:flex-1"}),s.createElement(c,{...d.args,className:"sm:flex-1"}))},v={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:a=>s.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},s.createElement(k,{...a({value:"colorful"}),label:s.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),s.createElement(k,{...a({value:"embiggened"}),sizer:k.sizer.large,label:"Embiggened"}),s.createElement("label",null,s.createElement("input",{type:"checkbox",...a({value:"native"})})," Native"))},play:({canvas:a})=>{const n=a.getByLabelText("Colorful");e(n).toBeChecked();const o=a.getByLabelText("Embiggened");e(o).toBeChecked();const t=a.getByLabelText("Native");e(t).not.toBeChecked()}},p={args:{label:"Small label",hint:"Small hint",sizer:c.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:({canvas:a})=>{a.getAllByTestId("indicator").forEach(n=>{e(n).toHaveClass("size-3.5")}),e(a.getByText("Small label")).toHaveClass("text-xs")}},u={args:{label:"Medium label",hint:"Medium hint",sizer:c.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:({canvas:a})=>{a.getAllByTestId("indicator").forEach(n=>{e(n).toHaveClass("size-4")}),e(a.getByText("Medium label")).toHaveClass("text-sm")}},g={args:{label:"Large label",hint:"Large hint",sizer:c.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]},play:({canvas:a})=>{a.getAllByTestId("indicator").forEach(n=>{e(n).toHaveClass("size-5")}),e(a.getByText("Large label")).toHaveClass("text-lg")}},C={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center"},s.createElement(c,{...p.args,className:"sm:flex-1"}),s.createElement(c,{...u.args,className:"sm:flex-1"}),s.createElement(c,{...g.args,className:"sm:flex-1"}))};var y,f,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    const fieldset = canvas.getByRole('group');
    expect(fieldset).toHaveAccessibleName('A label*');
    expect(fieldset).toHaveAccessibleDescription('A hint');
    expect(fieldset).toHaveAccessibleErrorMessage('An error message');
    expect(canvas.getByTitle('required')).toHaveTextContent('*');
    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toHaveRole('checkbox');
    expect(cb1).not.toBeChecked();
    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).toHaveRole('checkbox');
    expect(cb2).not.toBeChecked();
  }
}`,...(w=(f=m.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var O,T,L;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    userEvent
  }) => {
    // When there's no value or defaultValue prop used, it should be able to
    // track an internal uncontrolled value.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).not.toBeChecked();
    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();
    await userEvent.click(cb1);
    expect(cb1).toBeChecked();
    expect(cb2).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalled();
    await userEvent.click(cb2);
    expect(cb1).toBeChecked();
    expect(cb2).toBeChecked();
    await userEvent.click(cb1);
    expect(cb1).not.toBeChecked();
    expect(cb2).toBeChecked();
    await userEvent.click(cb2);
    expect(cb1).not.toBeChecked();
    expect(cb2).not.toBeChecked();
  }
}`,...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var S,E,H;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    userEvent
  }) => {
    // The value is controlled, and we don't have a wrapper setup to pass in
    // the new value, so while a change event should be fired, the checkboxes
    // shouldn't change checked status.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeChecked();
    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();
    await userEvent.click(cb1);
    expect(args.onChange).toHaveBeenCalled();
    expect(cb1).toBeChecked();
    expect(cb2).not.toBeChecked();
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,z,A;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    userEvent
  }) => {
    // The value is uncontrolled, so the checked statuses should change  without
    // having any other mechanism for updating the value prop.

    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeChecked();
    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).not.toBeChecked();
    await userEvent.click(cb1);
    expect(args.onChange).toHaveBeenCalled();
    expect(cb1).not.toBeChecked();
    expect(cb2).not.toBeChecked();

    // reset back to original state
    await userEvent.click(cb1);
  }
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,_,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    defaultValue: 'one',
    disabled: true,
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
    userEvent
  }) => {
    const cb1 = canvas.getByLabelText('Option one');
    expect(cb1).toBeDisabled();
    const cb2 = canvas.getByLabelText('Option two');
    expect(cb2).toBeDisabled();
    await userEvent.click(cb1);
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var V,R,q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    const cb1 = canvas.getByLabelText('Roman Aquila');
    expect(cb1).not.toBeChecked();
    expect(cb1).not.toBeDisabled();
    const cb2 = canvas.getByLabelText('ISO 8601');
    expect(cb2).toBeChecked();
    expect(cb2).not.toBeDisabled();
    const cb3 = canvas.getByLabelText('High Society');
    expect(cb3).not.toBeChecked();
    expect(cb3).toBeDisabled();
  }
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var I,F,U;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row">
      <Checkboxes {...NoValue.args} className="sm:flex-1" />
      <Checkboxes {...Controlled.args} className="sm:flex-1" />
      <Checkboxes {...Uncontrolled.args} className="sm:flex-1" />
      <Checkboxes {...Disabled.args} className="sm:flex-1" />
    </div>
}`,...(U=(F=x.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var P,j,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    const cb1 = canvas.getByLabelText('Colorful');
    expect(cb1).toBeChecked();
    const cb2 = canvas.getByLabelText('Embiggened');
    expect(cb2).toBeChecked();
    const cb3 = canvas.getByLabelText('Native');
    expect(cb3).not.toBeChecked();
  }
}`,...(K=(j=v.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var W,Y,G;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    // The checkboxes should use small sizing
    canvas.getAllByTestId('indicator').forEach(indicator => {
      expect(indicator).toHaveClass('size-3.5');
    });
    // The wrapping Fieldset should use small sizing
    expect(canvas.getByText('Small label')).toHaveClass('text-xs');
  }
}`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    // The checkboxes should use medium sizing
    canvas.getAllByTestId('indicator').forEach(indicator => {
      expect(indicator).toHaveClass('size-4');
    });
    // The wrapping Fieldset should use medium sizing
    expect(canvas.getByText('Medium label')).toHaveClass('text-sm');
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  play: ({
    canvas
  }) => {
    // The checkboxes should use large sizing
    canvas.getAllByTestId('indicator').forEach(indicator => {
      expect(indicator).toHaveClass('size-5');
    });
    // The wrapping Fieldset should use large sizing
    expect(canvas.getByText('Large label')).toHaveClass('text-lg');
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Checkboxes {...Small.args} className="sm:flex-1" />
      <Checkboxes {...Medium.args} className="sm:flex-1" />
      <Checkboxes {...Large.args} className="sm:flex-1" />
    </div>
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const le=["FieldsetLayout","NoValue","Controlled","Uncontrolled","Disabled","StandardLayout","AllControlStates","CustomLayout","Small","Medium","Large","AllSizes"],ie=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:x,AllSizes:C,Controlled:i,CustomLayout:v,Disabled:d,FieldsetLayout:m,Large:g,Medium:u,NoValue:r,Small:p,StandardLayout:h,Uncontrolled:b,__namedExportsOrder:le,default:oe},Symbol.toStringTag,{value:"Module"}));export{v as C,ie as S,h as a};
