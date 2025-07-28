import{r as s}from"./iframe-BuPrAHyZ.js";import{A}from"./AllSizersStoryWrapper-LyCVQLFr.js";import{B as t}from"./Button-Byu0ZU9L.js";const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,E={title:"Form controls/Button",component:t},o={tags:["control-state"],args:{children:"Enabled Button",onClick:r()},play:async({args:e,canvas:a,step:k,userEvent:w})=>{await k("Clicking the Button should trigger `onClick`",async()=>{await w.click(a.getByRole("button")),n(e.onClick).toHaveBeenCalled()})}},l={tags:["control-state"],args:{children:"Disabled Button",disabled:!0,onClick:r()},play:async({args:e,canvas:a,step:k,userEvent:w})=>{const z=a.getByRole("button");await k("Assert the disabled state",async()=>{await n(z).toBeDisabled()}),await k("Clicking the Button should have no effect",async()=>{await w.click(z),n(e.onClick).not.toHaveBeenCalled()})}},f={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex gap-4"},s.createElement(t,{...o.args}),s.createElement(t,{...l.args}))},c={tags:["sizer"],args:{sizer:"xs",children:"Xs Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xs sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-xs")})}},i={tags:["sizer"],args:{sizer:"sm",children:"Sm Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the sm sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-sm")})}},g={tags:["sizer"],args:{sizer:"base",children:"Base Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the base sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-base")})}},d={tags:["sizer"],args:{sizer:"lg",children:"Lg Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the lg sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-lg")})}},u={tags:["sizer"],args:{sizer:"xl",children:"Xl Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the xl sizer style",async()=>{n(e.getByRole("button")).toHaveClass("text-xl")})}},C={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:"Responsive Button",onClick:r()}},p={tags:["flavor"],args:{flavor:"neutral",secondary:!1,children:"Neutral Button (default)",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the neutral style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-blue-600")})}},y={tags:["flavor"],args:{flavor:"positive",secondary:!1,children:"Positive Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the positive style",async()=>{await n(e.getByRole("button")).toHaveClass("bg-emerald-700")})}},v={tags:["flavor"],args:{flavor:"negative",secondary:!1,children:"Negative Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the negative style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-700")})}},m={tags:["flavor"],args:{flavor:"neutral",secondary:!0,children:"Secondary neutral Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary neutral style",async()=>{n(e.getByRole("button")).toHaveClass("bg-blue-200")})}},B={tags:["flavor"],args:{flavor:"positive",secondary:!0,children:"Secondary positive Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary positive style",async()=>{n(e.getByRole("button")).toHaveClass("bg-emerald-200")})}},b={tags:["flavor"],args:{flavor:"negative",secondary:!0,children:"Secondary negative Button",onClick:r()},play:async({canvas:e,step:a})=>{await a("Assert the secondary negative style",async()=>{n(e.getByRole("button")).toHaveClass("bg-rose-200")})}},h={tags:["!dev","!test"],render:e=>s.createElement(A,{alignBaseline:!0},s.createElement("div",null,s.createElement(t,{...c.args})),s.createElement("div",null,s.createElement(t,{...i.args})),s.createElement("div",null,s.createElement(t,{...g.args})),s.createElement("div",null,s.createElement(t,{...d.args})),s.createElement("div",null,s.createElement(t,{...u.args})))},x={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(t,{...p.args}),s.createElement(t,{...y.args}),s.createElement(t,{...v.args}))},S={tags:["!dev","!test"],render:e=>s.createElement("div",{className:"flex flex-wrap gap-4"},s.createElement(t,{...m.args}),s.createElement(t,{...B.args}),s.createElement(t,{...b.args}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Button',
    onClick: fn()
  }
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      await expect(canvas.getByRole('button')).toHaveClass('bg-blue-600');
    });
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      await expect(canvas.getByRole('button')).toHaveClass('bg-emerald-700');
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-700');
    });
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      expect(canvas.getByRole('button')).toHaveClass('bg-blue-200');
    });
  }
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      expect(canvas.getByRole('button')).toHaveClass('bg-emerald-200');
    });
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      expect(canvas.getByRole('button')).toHaveClass('bg-rose-200');
    });
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Neutral.args} />
      <Button {...Positive.args} />
      <Button {...Negative.args} />
    </div>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...SecondaryNeutral.args} />
      <Button {...SecondaryPositive.args} />
      <Button {...SecondaryNegative.args} />
    </div>
}`,...S.parameters?.docs?.source}}};const R=["Enabled","Disabled","AllControlStates","Xs","Sm","Base","Lg","Xl","Responsive","Neutral","Positive","Negative","SecondaryNeutral","SecondaryPositive","SecondaryNegative","AllSizers","AllFlavors","AllSecondaryFlavors"],X=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:f,AllFlavors:x,AllSecondaryFlavors:S,AllSizers:h,Base:g,Disabled:l,Enabled:o,Lg:d,Negative:v,Neutral:p,Positive:y,Responsive:C,SecondaryNegative:b,SecondaryNeutral:m,SecondaryPositive:B,Sm:i,Xl:u,Xs:c,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{X as S};
