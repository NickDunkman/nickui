import{r as s}from"./iframe-Cu56G6_x.js";import{A as z}from"./AllSizersStoryWrapper-o0UCkeT9.js";import{B as t}from"./Button-whMqm6bc.js";const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,S={title:"Form controls/Button",component:t},o={tags:["control-state"],args:{children:"Enabled Button",onClick:r()},play:async({args:e,canvas:a,step:h,userEvent:x})=>{await h("Clicking the Button should trigger `onClick`",async()=>{await x.click(a.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},l={tags:["control-state"],args:{children:"Disabled Button",disabled:!0,onClick:r()},play:async({args:e,canvas:a,step:h,userEvent:x})=>{const f=a.getByRole("button");await h("Assert the disabled state",async()=>{await n(f).toBeDisabled()}),await h("Clicking the Button should have no effect",async()=>{await x.click(f),n(e.onClick).not.toHaveBeenCalled()})}},v={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex gap-4"},s.createElement(t,{...o.args}),s.createElement(t,{...l.args}))},c={tags:["sizer"],args:{sizer:"xs",children:"Xs Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-xs")})}},i={tags:["sizer"],args:{sizer:"sm",children:"Sm Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},g={tags:["sizer"],args:{sizer:"base",children:"Base Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},d={tags:["sizer"],args:{sizer:"lg",children:"Lg Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},p={tags:["sizer"],args:{sizer:"xl",children:"Xl Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-xl")})}},B={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:"Responsive Button",onClick:r()}},u={tags:["flavor"],args:{flavor:"primary",children:"Primary Button (default)",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the primary style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-blue-600")})}},y={tags:["flavor"],args:{flavor:"secondary",children:"Secondary Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-blue-200")})}},m={tags:["flavor"],args:{flavor:"danger",children:"Danger Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},b={tags:["!dev","!test"],render:e=>s.createElement(z,{alignBaseline:!0},s.createElement("div",null,s.createElement(t,{...c.args})),s.createElement("div",null,s.createElement(t,{...i.args})),s.createElement("div",null,s.createElement(t,{...g.args})),s.createElement("div",null,s.createElement(t,{...d.args})),s.createElement("div",null,s.createElement(t,{...p.args})))},C={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(t,{...u.args}),s.createElement(t,{...y.args}),s.createElement(t,{...m.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
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
  tags: ['control-state'],
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
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: 'Xs Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-xs');
    });
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: 'Sm Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-sm');
    });
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: 'Lg Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-lg');
    });
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: 'Xl Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('text-xl');
    });
  }
}`,...p.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Button',
    onClick: fn()
  }
}`,...B.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'primary',
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'secondary',
    children: 'Secondary Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary style', async () => {
      expect(canvas.getByRole('button')).toHaveClass('bg-blue-200');
    });
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'danger',
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <div>
        <Button {...Xs.args} />
      </div>
      <div>
        <Button {...Sm.args} />
      </div>
      <div>
        <Button {...Base.args} />
      </div>
      <div>
        <Button {...Lg.args} />
      </div>
      <div>
        <Button {...Xl.args} />
      </div>
    </AllSizersStoryWrapper>
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...C.parameters?.docs?.source}}};const k=["Enabled","Disabled","AllControlStates","Xs","Sm","Base","Lg","Xl","Responsive","Primary","Secondary","Danger","AllSizers","AllFlavors"],R=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:v,AllFlavors:C,AllSizers:b,Base:g,Danger:m,Disabled:l,Enabled:o,Lg:d,Primary:u,Responsive:B,Secondary:y,Sm:i,Xl:p,Xs:c,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{C as A,R as S};
