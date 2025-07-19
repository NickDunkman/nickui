import{r as t}from"./iframe-Si2UkeX9.js";import{B as e}from"./Button-DQJggatp.js";const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,h={title:"Form controls/Button",component:e},o={args:{children:"Enabled Button",onClick:r()},play:async({args:a,canvas:s,step:b,userEvent:C})=>{await b("Clicking the Button should trigger `onClick`",async()=>{await C.click(s.getByRole("button")),n(a.onClick).toHaveBeenCalled()})}},l={args:{children:"Disabled Button",disabled:!0,onClick:r()},play:async({args:a,canvas:s,step:b,userEvent:C})=>{const f=s.getByRole("button");await b("Assert the disabled state",async()=>{await n(f).toBeDisabled()}),await b("Clicking the Button should have no effect",async()=>{await C.click(f),n(a.onClick).not.toHaveBeenCalled()})}},y={tags:["!dev","!test"],render:a=>t.createElement("div",{className:"flex gap-4"},t.createElement(e,{...o.args}),t.createElement(e,{...l.args}))},c={args:{sizer:e.sizer.small,children:"Small Button",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the small sizer style",async()=>{n(a.getByRole("button")).toHaveClass("text-sm")})}},i={args:{sizer:e.sizer.base,children:"Base Button",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the base sizer style",async()=>{n(a.getByRole("button")).toHaveClass("text-base")})}},g={args:{sizer:e.sizer.large,children:"Large Button",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the large sizer style",async()=>{n(a.getByRole("button")).toHaveClass("text-lg")})}},d={tags:["!test"],args:{sizer:[e.sizer.small,e.sizer.smBase,e.sizer.mdLarge],children:"Responsive Button",onClick:r()}},v={tags:["!dev","!test"],render:a=>t.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},t.createElement(e,{...c.args}),t.createElement(e,{...i.args}),t.createElement(e,{...g.args}),t.createElement(e,{...d.args}))},p={args:{flavor:e.flavor.primary,children:"Primary Button (default)",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the primary style",async()=>{await n(a.getByRole("button")).toHaveClass("bg-blue-600")})}},u={args:{flavor:e.flavor.secondary,children:"Secondary Button",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the secondary style",async()=>{n(a.getByRole("button")).toHaveClass("bg-gray-100")})}},m={args:{flavor:e.flavor.danger,children:"Danger Button",onClick:r()},play:async({canvas:a,step:s})=>{await s("Assert the secondary style",async()=>{n(a.getByRole("button")).toHaveClass("bg-rose-700")})}},B={tags:["!dev","!test"],render:a=>t.createElement("div",{className:"flex flex-wrap gap-4"},t.createElement(e,{...p.args}),t.createElement(e,{...u.args}),t.createElement(e,{...m.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.base,
    children: 'Base Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-base');
    });
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Button.sizer.small, Button.sizer.smBase, Button.sizer.mdLarge],
    children: 'Responsive Button',
    onClick: fn()
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Base.args} />
      <Button {...Large.args} />
      <Button {...Responsive.args} />
    </div>
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      await expect(canvas.getByRole('button')).toHaveClass('bg-blue-600');
    });
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const k=["Enabled","Disabled","AllControlStates","Small","Base","Large","Responsive","AllSizes","Primary","Secondary","Danger","AllFlavors"],x=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:y,AllFlavors:B,AllSizes:v,Base:i,Danger:m,Disabled:l,Enabled:o,Large:g,Primary:p,Responsive:d,Secondary:u,Small:c,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{B as A,x as S};
