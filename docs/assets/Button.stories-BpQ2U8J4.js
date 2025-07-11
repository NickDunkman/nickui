import{r as s}from"./iframe-CFM7-Iva.js";import{B as t}from"./Button-g4ILWKSQ.js";const{expect:n,fn:h}=__STORYBOOK_MODULE_TEST__,f={title:"Form controls/Button",component:t},r={args:{children:"Enabled Button",onClick:h()},play:async({args:e,canvas:a,step:v,userEvent:B})=>{await v("Clicking the Button should trigger `onClick`",async()=>{await B.click(a.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},o={args:{children:"Disabled Button",disabled:!0,onClick:h()},play:async({args:e,canvas:a,step:v,userEvent:B})=>{const b=a.getByRole("button");await v("Assert the disabled state",async()=>{await n(b).toBeDisabled()}),await v("Clicking the Button should have no effect",async()=>{await B.click(b),n(e.onClick).not.toHaveBeenCalled()})}},p={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex gap-4"},s.createElement(t,{...r.args}),s.createElement(t,{...o.args}))},l={args:{sizer:t.sizer.small,children:"Small Button (default)"},play:async({canvas:e,step:a})=>{await a("Assert the small style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},c={args:{sizer:t.sizer.medium,children:"Medium Button"},play:async({canvas:e,step:a})=>{await a("Assert the medium style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},i={args:{sizer:t.sizer.large,children:"Large Button"},play:async({canvas:e,step:a})=>{await a("Assert the large style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},m={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},s.createElement(t,{...l.args}),s.createElement(t,{...c.args}),s.createElement(t,{...i.args}))},d={args:{children:"Primary Button (default)"},play:async({canvas:e,step:a})=>{await a("Assert the primary style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-indigo-600")})}},g={args:{flavor:t.flavor.secondary,children:"Secondary Button"},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-gray-100")})}},u={args:{flavor:t.flavor.danger,children:"Danger Button"},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},y={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(t,{...d.args}),s.createElement(t,{...g.args}),s.createElement(t,{...u.args}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Enabled Button',
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Clicking the Button should trigger \`onClick\`', async () => {
      await userEvent.click(canvas.getByRole('button'));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const button = canvas.getByRole('button');
    await step('Assert the disabled state', async () => {
      await expect(button).toBeDisabled();
    });
    await step('Clicking the Button should have no effect', async () => {
      await userEvent.click(button);
      expect(args.onClick).not.toHaveBeenCalled();
    });
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button (default)'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the primary style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('bg-indigo-600');
    });
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-gray-100');
    });
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...y.parameters?.docs?.source}}};const C=["Enabled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","Primary","Secondary","Danger","AllFlavors"],x=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:p,AllFlavors:y,AllSizes:m,Danger:u,Disabled:o,Enabled:r,Large:i,Medium:c,Primary:d,Secondary:g,Small:l,__namedExportsOrder:C,default:f},Symbol.toStringTag,{value:"Module"}));export{y as A,x as S};
