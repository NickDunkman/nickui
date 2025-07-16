import{r as s}from"./iframe-DaeU9_BK.js";import{B as a}from"./Button-BFGKds-g.js";const{expect:n,fn:f}=__STORYBOOK_MODULE_TEST__,C={title:"Form controls/Button",component:a},r={args:{children:"Enabled Button",onClick:f()},play:async({args:e,canvas:t,step:B,userEvent:b})=>{await B("Clicking the Button should trigger `onClick`",async()=>{await b.click(t.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},o={args:{children:"Disabled Button",disabled:!0,onClick:f()},play:async({args:e,canvas:t,step:B,userEvent:b})=>{const h=t.getByRole("button");await B("Assert the disabled state",async()=>{await n(h).toBeDisabled()}),await B("Clicking the Button should have no effect",async()=>{await b.click(h),n(e.onClick).not.toHaveBeenCalled()})}},m={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex gap-4"},s.createElement(a,{...r.args}),s.createElement(a,{...o.args}))},c={args:{sizer:a.sizer.small,children:"Small Button (default)"},play:async({canvas:e,step:t})=>{await t("Assert the small style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},l={args:{sizer:a.sizer.medium,children:"Medium Button"},play:async({canvas:e,step:t})=>{await t("Assert the medium style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},i={args:{sizer:a.sizer.large,children:"Large Button"},play:async({canvas:e,step:t})=>{await t("Assert the large style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},d={tags:["!test"],args:{sizer:[a.sizer.smMedium,a.sizer.mdLarge],children:"Responsive Button"}},y={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},s.createElement(a,{...c.args}),s.createElement(a,{...l.args}),s.createElement(a,{...i.args}),s.createElement(a,{...d.args}))},g={args:{children:"Primary Button (default)"},play:async({canvas:e,step:t})=>{await t("Assert the primary style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-indigo-600")})}},u={args:{flavor:a.flavor.secondary,children:"Secondary Button"},play:async({canvas:e,step:t})=>{await t("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-gray-100")})}},p={args:{flavor:a.flavor.danger,children:"Danger Button"},play:async({canvas:e,step:t})=>{await t("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},v={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(a,{...g.args}),s.createElement(a,{...u.args}),s.createElement(a,{...p.args}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Button.sizer.smMedium, Button.sizer.mdLarge],
    children: 'Responsive Button'
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
      <Button {...Responsive.args} />
    </div>
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...v.parameters?.docs?.source}}};const S=["Enabled","Disabled","AllControlStates","Small","Medium","Large","Responsive","AllSizes","Primary","Secondary","Danger","AllFlavors"],E=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllFlavors:v,AllSizes:y,Danger:p,Disabled:o,Enabled:r,Large:i,Medium:l,Primary:g,Responsive:d,Secondary:u,Small:c,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{v as A,E as S};
