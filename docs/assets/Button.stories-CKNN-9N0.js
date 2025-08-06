import{r as t}from"./iframe-0BIo50N-.js";import{A as R}from"./AllSizersStoryWrapper-CCbV33qq.js";import{B as n}from"./Button-DTcuPhE7.js";const{expect:s,fn:r}=__STORYBOOK_MODULE_TEST__,H={title:"Form controls/Button",component:n},o={tags:["control-state"],args:{children:"Enabled Button",onClick:r()},play:async({args:e,canvas:a,step:z,userEvent:A})=>{await z("Clicking the Button should trigger `onClick`",async()=>{await A.click(a.getByRole("button")),s(e.onClick).toHaveBeenCalled()})}},c={tags:["control-state"],args:{children:"Disabled Button",disabled:!0,onClick:r()},play:async({args:e,canvas:a,step:z,userEvent:A})=>{const E=a.getByRole("button");await z("Assert the disabled state",async()=>{await s(E).toBeDisabled()}),await z("Clicking the Button should have no effect",async()=>{await A.click(E),s(e.onClick).not.toHaveBeenCalled()})}},h={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex gap-4"},t.createElement(n,{...o.args}),t.createElement(n,{...c.args}))},l={tags:["sizer"],args:{sizer:"xs",children:"Xs Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style",async()=>{s(e.getByRole("button")).toHaveClass("text-xs")})}},i={tags:["sizer"],args:{sizer:"sm",children:"Sm Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style",async()=>{s(e.getByRole("button")).toHaveClass("text-sm")})}},u={tags:["sizer"],args:{sizer:"base",children:"Base Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style",async()=>{s(e.getByRole("button")).toHaveClass("text-base")})}},g={tags:["sizer"],args:{sizer:"lg",children:"Lg Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style",async()=>{s(e.getByRole("button")).toHaveClass("text-lg")})}},d={tags:["sizer"],args:{sizer:"xl",children:"Xl Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style",async()=>{s(e.getByRole("button")).toHaveClass("text-xl")})}},S={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:"Responsive Button",onClick:r()}},y={tags:["flavor"],args:{flavor:"neutral",secondary:!1,children:"Neutral Button (default)",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the neutral style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-blue-600)]")})}},p={tags:["flavor"],args:{flavor:"positive",secondary:!1,children:"Positive Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the positive style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-emerald-700)]")})}},v={tags:["flavor"],args:{flavor:"caution",secondary:!1,children:"Caution Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the caution style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-yellow-500)]")})}},m={tags:["flavor"],args:{flavor:"negative",secondary:!1,children:"Negative Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the negative style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-rose-700)]")})}},B={tags:["flavor"],args:{flavor:"neutral",secondary:!0,children:"Secondary neutral Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary neutral style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-blue-50)]")})}},b={tags:["flavor"],args:{flavor:"positive",secondary:!0,children:"Secondary positive Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary positive style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-emerald-50)]")})}},C={tags:["flavor"],args:{flavor:"caution",secondary:!0,children:"Secondary caution Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary caution style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-yellow-50)]")})}},f={tags:["flavor"],args:{flavor:"negative",secondary:!0,children:"Secondary negative Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary negative style",async()=>{await s(e.getByRole("button")).toHaveClass("[--nickui-button-bg-color:var(--color-rose-50)]")})}},k={tags:["!dev","!test"],render:e=>t.createElement(R,{alignBaseline:!0},t.createElement("div",null,t.createElement(n,{...l.args})),t.createElement("div",null,t.createElement(n,{...i.args})),t.createElement("div",null,t.createElement(n,{...u.args})),t.createElement("div",null,t.createElement(n,{...g.args})),t.createElement("div",null,t.createElement(n,{...d.args})))},w={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex flex-wrap gap-4"},t.createElement(n,{...y.args}),t.createElement(n,{...p.args}),t.createElement(n,{...v.args}),t.createElement(n,{...m.args}))},x={tags:["!dev","!test"],render:e=>t.createElement("div",{className:"flex flex-wrap gap-4"},t.createElement(n,{...B.args}),t.createElement(n,{...b.args}),t.createElement(n,{...C.args}),t.createElement(n,{...f.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Button',
    onClick: fn()
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: false,
    children: 'Neutral Button (default)',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the neutral style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-blue-600)]');
    });
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    secondary: false,
    children: 'Positive Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the positive style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-emerald-700)]');
    });
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    secondary: false,
    children: 'Caution Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the caution style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-yellow-500)]');
    });
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: false,
    children: 'Negative Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the negative style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-rose-700)]');
    });
  }
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    secondary: true,
    children: 'Secondary neutral Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary neutral style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-blue-50)]');
    });
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    secondary: true,
    children: 'Secondary positive Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary positive style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-emerald-50)]');
    });
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    secondary: true,
    children: 'Secondary caution Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary caution style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-yellow-50)]');
    });
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    secondary: true,
    children: 'Secondary negative Button',
    onClick: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the secondary negative style', async () => {
      await expect(canvas.getByRole('button')).toHaveClass('[--nickui-button-bg-color:var(--color-rose-50)]');
    });
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Neutral.args} />
      <Button {...Positive.args} />
      <Button {...Caution.args} />
      <Button {...Negative.args} />
    </div>
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...SecondaryNeutral.args} />
      <Button {...SecondaryPositive.args} />
      <Button {...SecondaryCaution.args} />
      <Button {...SecondaryNegative.args} />
    </div>
}`,...x.parameters?.docs?.source}}};const N=["Enabled","Disabled","AllControlStates","Xs","Sm","Base","Lg","Xl","Responsive","Neutral","Positive","Caution","Negative","SecondaryNeutral","SecondaryPositive","SecondaryCaution","SecondaryNegative","AllSizers","AllFlavors","AllSecondaryFlavors"],D=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:h,AllFlavors:w,AllSecondaryFlavors:x,AllSizers:k,Base:u,Caution:v,Disabled:c,Enabled:o,Lg:g,Negative:m,Neutral:y,Positive:p,Responsive:S,SecondaryCaution:C,SecondaryNegative:f,SecondaryNeutral:B,SecondaryPositive:b,Sm:i,Xl:d,Xs:l,__namedExportsOrder:N,default:H},Symbol.toStringTag,{value:"Module"}));export{D as S};
