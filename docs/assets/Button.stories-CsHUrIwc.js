import{r as s}from"./iframe-CczT3480.js";import{B as a}from"./Button-D-TEis6Q.js";const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,h={title:"Form controls/Button",component:a},o={args:{children:"Enabled Button",onClick:r()},play:async({args:e,canvas:t,step:b,userEvent:C})=>{await b("Clicking the Button should trigger `onClick`",async()=>{await C.click(t.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},c={args:{children:"Disabled Button",disabled:!0,onClick:r()},play:async({args:e,canvas:t,step:b,userEvent:C})=>{const f=t.getByRole("button");await b("Assert the disabled state",async()=>{await n(f).toBeDisabled()}),await b("Clicking the Button should have no effect",async()=>{await C.click(f),n(e.onClick).not.toHaveBeenCalled()})}},y={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex gap-4"},s.createElement(a,{...o.args}),s.createElement(a,{...c.args}))},l={args:{sizer:a.sizer.small,children:"Small Button (default)",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the small style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},i={args:{sizer:a.sizer.medium,children:"Medium Button",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the medium style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},d={args:{sizer:a.sizer.large,children:"Large Button",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the large style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},g={tags:["!test"],args:{sizer:[a.sizer.smMedium,a.sizer.mdLarge],children:"Responsive Button",onClick:r()}},v={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},s.createElement(a,{...l.args}),s.createElement(a,{...i.args}),s.createElement(a,{...d.args}),s.createElement(a,{...g.args}))},u={args:{flavor:a.flavor.primary,children:"Primary Button (default)",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the primary style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-indigo-600")})}},p={args:{flavor:a.flavor.secondary,children:"Secondary Button",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-gray-100")})}},m={args:{flavor:a.flavor.danger,children:"Danger Button",onClick:r()},play:async({canvas:e,step:t})=>{await t("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},B={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(a,{...u.args}),s.createElement(a,{...p.args}),s.createElement(a,{...m.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...y.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Button.sizer.smMedium, Button.sizer.mdLarge],
    children: 'Responsive Button',
    onClick: fn()
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
      <Button {...Responsive.args} />
    </div>
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.primary,
    children: 'Primary Button (default)',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the primary style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('bg-indigo-600');
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-gray-100');
    });
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  }
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...B.parameters?.docs?.source}}};const k=["Enabled","Disabled","AllControlStates","Small","Medium","Large","Responsive","AllSizes","Primary","Secondary","Danger","AllFlavors"],x=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:y,AllFlavors:B,AllSizes:v,Danger:m,Disabled:c,Enabled:o,Large:d,Medium:i,Primary:u,Responsive:g,Secondary:p,Small:l,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{B as A,x as S};
