import{r as e}from"./iframe-Cu56G6_x.js";import{A as R}from"./AllSizersStoryWrapper-o0UCkeT9.js";import{a as k,u as C,c as q}from"./index-kiPNViGW.js";const A=k({slots:{root:"rounded-sm border-1",heading:"font-semibold",paragraph:""},variants:{sizer:{xs:{root:"p-3 text-xs",heading:"text-xs mb-2.5",paragraph:"text-xs [&:not(:last-child)]:mb-2"},sm:{root:"p-3.5 text-xs",heading:"text-sm mb-3",paragraph:"text-xs [&:not(:last-child)]:mb-2.5"},base:{root:"p-4 text-sm",heading:"text-base mb-3.5",paragraph:"text-sm [&:not(:last-child)]:mb-3"},lg:{root:"p-4.5 text-base",heading:"text-lg mb-4",paragraph:"text-base [&:not(:last-child)]:mb-3.5"},xl:{root:"p-5 text-lg",heading:"text-xl mb-4.5",paragraph:"text-lg [&:not(:last-child)]:mb-4"}},flavor:{info:{root:"bg-blue-50 border-blue-200 text-blue-950"},yep:{root:"bg-emerald-50 border-emerald-200 text-emerald-950"},maybe:{root:"bg-yellow-50 border-yellow-300 text-yellow-950"},nope:{root:"bg-rose-50 border-rose-200 text-rose-950"}}},defaultVariants:{sizer:"base",flavor:"info"}});function a({className:s,sizer:t,flavor:r,children:x,...f}){const y=C(t),S=A({sizer:y,flavor:r}),H=e.useMemo(()=>({styles:A({sizer:y,flavor:r}),resolvedSizer:y,flavor:r}),[y,r]);return e.createElement(P.Provider,{value:H},e.createElement("aside",{...f,className:q(S.root(),s),"data-nickui-sizer":Array.isArray(t)?t.join(","):t,"data-nickui-resolved-sizer":y},x))}a.Heading=N;a.Paragraph=z;const P=e.createContext({styles:A(),resolvedSizer:"base",flavor:"info"});function N({children:s,className:t,level:r=3}){const{styles:x}=e.useContext(P),f=`h${r}`;return e.createElement(f,{className:q(x.heading(),t)},s)}function z({children:s,className:t}){const{styles:r}=e.useContext(P);return e.createElement("p",{className:q(r.paragraph(),t)},s)}a.__docgenInfo={description:`Displays some secondary content, typically an "oh, by the way!" relative to
the main content.
@param props {@link AsideProps}`,methods:[{name:"Heading",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  level = 3,
}: {
  /** The content to put in the heading tag */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Optionally switch to a different heading tag (default is h3) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  /** The content to put in the heading tag */
  children?: React.ReactNode;
  /** Optionally add utility classes */
  className?: string;
  /** Optionally switch to a different heading tag (default is h3) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The content to put in the heading tag"},{key:"className",value:{name:"string",required:!1},description:"Optionally add utility classes"},{key:"level",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}],required:!1},description:"Optionally switch to a different heading tag (default is h3)"}]}}}],returns:null},{name:"Paragraph",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
}: {
  /** The content to put in the <p> tag */
  children?: React.ReactNode;
  /** Optional add utility classes */
  className?: string;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  /** The content to put in the <p> tag */
  children?: React.ReactNode;
  /** Optional add utility classes */
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:"The content to put in the <p> tag"},{key:"className",value:{name:"string",required:!1},description:"Optional add utility classes"}]}}}],returns:null}],displayName:"Aside",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Shout"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},heading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional title to put at the top of the Aside"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:'Changes the size of the Shout ("sm", "base", "lg")'},flavor:{required:!1,tsType:{name:"union",raw:"'info' | 'yep' | 'maybe' | 'nope'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'yep'"},{name:"literal",value:"'maybe'"},{name:"literal",value:"'nope'"}]},description:'Changes the color of the Shout ("info", "yep", "maybe", "nope")'}}};const{expect:i}=__STORYBOOK_MODULE_TEST__,w={title:"Notices/Aside",component:a},l={tags:["flavor"],args:{flavor:"info",children:[e.createElement(a.Heading,{key:"1"},"Info Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the info flavor style",async()=>{i(s.getByRole("complementary")).toHaveClass("bg-blue-50")})}},n={tags:["flavor"],args:{flavor:"yep",children:[e.createElement(a.Heading,{key:"1"},"Yep Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the yep flavor style",async()=>{i(s.getByRole("complementary")).toHaveClass("bg-emerald-50")})}},m={tags:["flavor"],args:{flavor:"maybe",children:[e.createElement(a.Heading,{key:"1"},"Maybe Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the maybe flavor style",async()=>{i(s.getByRole("complementary")).toHaveClass("bg-yellow-50")})}},o={tags:["flavor"],args:{flavor:"nope",children:[e.createElement(a.Heading,{key:"1"},"Nope Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the nope flavor style",async()=>{i(s.getByRole("complementary")).toHaveClass("bg-rose-50")})}},u={tags:["sizer"],args:{sizer:"xs",children:[e.createElement(a.Heading,{key:"1"},"Xs Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the xs sizer style",async()=>{i(s.getByRole("complementary")).toHaveClass("text-xs"),i(s.getByRole("heading")).toHaveClass("text-xs")})}},c={tags:["sizer"],args:{sizer:"sm",children:[e.createElement(a.Heading,{key:"1"},"Sm Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the sm sizer style",async()=>{i(s.getByRole("complementary")).toHaveClass("text-xs"),i(s.getByRole("heading")).toHaveClass("text-sm")})}},d={tags:["sizer"],args:{sizer:"base",children:[e.createElement(a.Heading,{key:"1"},"Base Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the base sizer style",async()=>{i(s.getByRole("complementary")).toHaveClass("text-sm"),i(s.getByRole("heading")).toHaveClass("text-base")})}},g={tags:["sizer"],args:{sizer:"lg",children:[e.createElement(a.Heading,{key:"1"},"Lg Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the lg sizer style",async()=>{i(s.getByRole("complementary")).toHaveClass("text-base"),i(s.getByRole("heading")).toHaveClass("text-lg")})}},p={tags:["sizer"],args:{sizer:"xl",children:[e.createElement(a.Heading,{key:"1"},"Xl Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]},play:async({canvas:s,step:t})=>{await t("Assert the xl sizer style",async()=>{i(s.getByRole("complementary")).toHaveClass("text-lg"),i(s.getByRole("heading")).toHaveClass("text-xl")})}},v={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:[e.createElement(a.Heading,{key:"1"},"Responsive Aside"),e.createElement(a.Paragraph,{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend enim ullamcorper nibh dapibus, et mollis tellus sagittis. Cras sit amet nisi ac augue dignissim tristique. Fusce quis libero vitae eros condimentum dictum id eget risus. Aliquam non ipsum accumsan massa consequat tincidunt. Praesent sit amet lorem et lorem pharetra ultrices vel ac diam. Sed fermentum dignissim nibh non imperdiet. Nam cursus euismod erat, eu feugiat lectus lacinia vitae.")]}},h={tags:["!dev","!test"],render:s=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...l.args}),e.createElement(a,{...n.args}),e.createElement(a,{...m.args}),e.createElement(a,{...o.args}))},b={tags:["!dev","!test"],render:s=>e.createElement(R,{keepStacked:!0},e.createElement(a,{...u.args}),e.createElement(a,{...c.args}),e.createElement(a,{...d.args}),e.createElement(a,{...g.args}),e.createElement(a,{...p.args}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'info',
    children: [<Aside.Heading key="1">Info Aside</Aside.Heading>, <Aside.Paragraph key="2">
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
    await step('Assert the info flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-blue-50');
    });
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'yep',
    children: [<Aside.Heading key="1">Yep Aside</Aside.Heading>, <Aside.Paragraph key="2">
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
    await step('Assert the yep flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-emerald-50');
    });
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'maybe',
    children: [<Aside.Heading key="1">Maybe Aside</Aside.Heading>, <Aside.Paragraph key="2">
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
    await step('Assert the maybe flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-yellow-50');
    });
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'nope',
    children: [<Aside.Heading key="1">Nope Aside</Aside.Heading>, <Aside.Paragraph key="2">
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
    await step('Assert the nope flavor style', async () => {
      expect(canvas.getByRole('complementary')).toHaveClass('bg-rose-50');
    });
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Aside {...Info.args} />
      <Aside {...Yep.args} />
      <Aside {...Maybe.args} />
      <Aside {...Nope.args} />
    </div>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper keepStacked>
      <Aside {...Xs.args} />
      <Aside {...Sm.args} />
      <Aside {...Base.args} />
      <Aside {...Lg.args} />
      <Aside {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...b.parameters?.docs?.source}}};const E=["Info","Yep","Maybe","Nope","Xs","Sm","Base","Lg","Xl","Responsive","AllFlavors","AllSizers"],T=Object.freeze(Object.defineProperty({__proto__:null,AllFlavors:h,AllSizers:b,Base:d,Info:l,Lg:g,Maybe:m,Nope:o,Responsive:v,Sm:c,Xl:p,Xs:u,Yep:n,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{a as A,T as S,h as a};
