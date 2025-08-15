import{r as s}from"./iframe-JcCZxaL9.js";import{A as h}from"./AllSizersStoryWrapper-C5EzkKf3.js";import{g as A}from"./getStoryArgTypes-BeU_9RHb.js";import{A as e}from"./Aside-BpZmGSQK.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,b={title:"Notices/Aside",component:e,subcomponents:{"Aside.Heading":e.Heading,"Aside.Paragraph":e.Paragraph},argTypes:A({isFlavorable:!0,isSizerable:!0})},r={tags:["flavor"],args:{flavor:"neutral",children:[s.createElement(e.Heading,{key:"1"},"Neutral Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the neutral flavor style",async()=>{t(a.getByRole("complementary")).toHaveClass("bg-blue-50")})}},n={tags:["flavor"],args:{flavor:"positive",children:[s.createElement(e.Heading,{key:"1"},"Positive Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the positive flavor style",async()=>{t(a.getByRole("complementary")).toHaveClass("bg-emerald-50")})}},m={tags:["flavor"],args:{flavor:"caution",children:[s.createElement(e.Heading,{key:"1"},"Caution Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the caution flavor style",async()=>{t(a.getByRole("complementary")).toHaveClass("bg-yellow-50")})}},l={tags:["flavor"],args:{flavor:"negative",children:[s.createElement(e.Heading,{key:"1"},"Negative Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the negative flavor style",async()=>{t(a.getByRole("complementary")).toHaveClass("bg-rose-50")})}},c={tags:["sizer"],args:{sizer:"xs",children:[s.createElement(e.Heading,{key:"1"},"Xs Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the xs sizer style",async()=>{t(a.getByRole("complementary")).toHaveClass("text-xs"),t(a.getByRole("heading")).toHaveClass("text-xs")})}},u={tags:["sizer"],args:{sizer:"sm",children:[s.createElement(e.Heading,{key:"1"},"Sm Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the sm sizer style",async()=>{t(a.getByRole("complementary")).toHaveClass("text-xs"),t(a.getByRole("heading")).toHaveClass("text-sm")})}},o={tags:["sizer"],args:{sizer:"base",children:[s.createElement(e.Heading,{key:"1"},"Base Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the base sizer style",async()=>{t(a.getByRole("complementary")).toHaveClass("text-sm"),t(a.getByRole("heading")).toHaveClass("text-base")})}},d={tags:["sizer"],args:{sizer:"lg",children:[s.createElement(e.Heading,{key:"1"},"Lg Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the lg sizer style",async()=>{t(a.getByRole("complementary")).toHaveClass("text-base"),t(a.getByRole("heading")).toHaveClass("text-lg")})}},g={tags:["sizer"],args:{sizer:"xl",children:[s.createElement(e.Heading,{key:"1"},"Xl Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:a,step:i})=>{await i("Assert the xl sizer style",async()=>{t(a.getByRole("complementary")).toHaveClass("text-lg"),t(a.getByRole("heading")).toHaveClass("text-xl")})}},p={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:[s.createElement(e.Heading,{key:"1"},"Responsive Aside"),s.createElement(e.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]}},y={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4"},s.createElement(e,{...r.args}),s.createElement(e,{...n.args}),s.createElement(e,{...m.args}),s.createElement(e,{...l.args}))},v={tags:["!dev","!test"],render:a=>s.createElement(h,{keepStacked:!0},s.createElement(e,{...c.args}),s.createElement(e,{...u.args}),s.createElement(e,{...o.args}),s.createElement(e,{...d.args}),s.createElement(e,{...g.args}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    children: [<Aside.Heading key="1">Neutral Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the neutral flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-blue-50');
    });
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    children: [<Aside.Heading key="1">Positive Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the positive flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-emerald-50');
    });
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    children: [<Aside.Heading key="1">Caution Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the caution flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-yellow-50');
    });
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    children: [<Aside.Heading key="1">Negative Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the negative flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-rose-50');
    });
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: [<Aside.Heading key="1">Xs Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-xs');
      expect(canvas.getByRole('heading')).toHaveClass('text-xs');
    });
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: [<Aside.Heading key="1">Sm Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-xs');
      expect(canvas.getByRole('heading')).toHaveClass('text-sm');
    });
  }
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: [<Aside.Heading key="1">Base Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-sm');
      expect(canvas.getByRole('heading')).toHaveClass('text-base');
    });
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: [<Aside.Heading key="1">Lg Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-base');
      expect(canvas.getByRole('heading')).toHaveClass('text-lg');
    });
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: [<Aside.Heading key="1">Xl Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('text-lg');
      expect(canvas.getByRole('heading')).toHaveClass('text-xl');
    });
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: [<Aside.Heading key="1">Responsive Aside</Aside.Heading>, <Aside.Paragraph key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras
        sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros
        condimentum dictum id eget risus. Aliquam non ipsum accumsan massa
        consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices
        vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus
        euismod erat, eu feugiat lectus lacinia vitae.
      </Aside.Paragraph>]
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Aside {...neutral.args} />
      <Aside {...positive.args} />
      <Aside {...caution.args} />
      <Aside {...negative.args} />
    </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper keepStacked>
      <Aside {...xs.args} />
      <Aside {...sm.args} />
      <Aside {...base.args} />
      <Aside {...lg.args} />
      <Aside {...xl.args} />
    </AllSizersStoryWrapper>
}`,...v.parameters?.docs?.source}}};const f=["neutral","positive","caution","negative","xs","sm","base","lg","xl","responsive","allFlavors","allSizers"],C=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:f,allFlavors:y,allSizers:v,base:o,caution:m,default:b,lg:d,negative:l,neutral:r,positive:n,responsive:p,sm:u,xl:g,xs:c},Symbol.toStringTag,{value:"Module"}));export{C as s};
