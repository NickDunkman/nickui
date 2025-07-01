import{r as a}from"./iframe-D_OX4RS-.js";import{A as z}from"./AllSizersStoryWrapper-Djlh-4yQ.js";import{g as b}from"./getStoryArgTypes-CB50-RjO.js";import{r as w,u as R,c as A}from"./index-AP4d4dr6.js";const B=w({base:`
    rounded-sm font-medium
  `,variants:{sizer:{xs:"text-xs px-2.5 py-1.5",sm:"text-sm px-3 py-2",base:"text-base px-4 py-3",lg:"text-lg px-5 py-4",xl:"text-xl px-6 py-5"},flavor:{neutral:"bg-blue-700 text-white",positive:"bg-emerald-700 text-white",caution:"bg-yellow-500 text-yellow-950",negative:"bg-rose-700 text-white"}},defaultVariants:{sizer:"base",flavor:"neutral"}});function t({className:s,sizer:e,flavor:x,...S}){const h=R(e),f=B({sizer:h,flavor:x});return a.createElement("div",{...S,className:A(f,s),"data-nickui-sizer":Array.isArray(e)?e.join(","):e,"data-nickui-resolved-sizer":h})}t.__docgenInfo={description:`Displays an important notice to the user, such as an error message, warning,
or congratulatory message. For a less prominent notice, use <Callout>
@param props {@link ShoutProps}`,methods:[],displayName:"Shout",props:{flavor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FLAVORS)[number]"},description:"Changes the color of the component"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Shout"}}};const{expect:r}=__STORYBOOK_MODULE_TEST__,C={title:"Notices/Shout",component:t,argTypes:b({isFlavorable:!0,isSizerable:!0})},n={tags:["flavor"],args:{flavor:"neutral",children:"Neutral Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the neutral flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-blue-700")})}},o={tags:["flavor"],args:{flavor:"positive",children:"Positive Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the positive flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-emerald-700")})}},l={tags:["flavor"],args:{flavor:"caution",children:"Caution Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the caution flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-yellow-500")})}},c={tags:["flavor"],args:{flavor:"negative",children:"Negative Shout",role:"alert"},play:async({canvas:s,step:e})=>{await e("Assert the negative flavor style",async()=>{r(s.getByRole("alert")).toHaveClass("bg-rose-700")})}},i={tags:["sizer"],args:{sizer:"xs",children:"Xs Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the xs sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-xs")})}},u={tags:["sizer"],args:{sizer:"sm",children:"Sm Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the sm sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-sm")})}},p={tags:["sizer"],args:{sizer:"base",children:"Base Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the base sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-base")})}},g={tags:["sizer"],args:{sizer:"lg",children:"Lg Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the lg sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-lg")})}},m={tags:["sizer"],args:{sizer:"xl",children:"Xl Shout",role:"status"},play:async({canvas:s,step:e})=>{await e("Assert the xl sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-xl")})}},y={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:"Responsive Shout",role:"status"}},v={tags:["!dev","!test"],render:s=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(t,{...n.args}),a.createElement(t,{...o.args}),a.createElement(t,{...l.args}),a.createElement(t,{...c.args}))},d={tags:["!dev","!test"],render:s=>a.createElement(z,{alignBaseline:!0},a.createElement(t,{...i.args,className:"sm:flex-12"}),a.createElement(t,{...u.args,className:"sm:flex-14"}),a.createElement(t,{...p.args,className:"sm:flex-16"}),a.createElement(t,{...g.args,className:"sm:flex-18"}),a.createElement(t,{...m.args,className:"sm:flex-20"}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'neutral',
    children: 'Neutral Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the neutral flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-blue-700');
    });
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'positive',
    children: 'Positive Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the positive flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-emerald-700');
    });
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'caution',
    children: 'Caution Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the caution flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-yellow-500');
    });
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  args: {
    flavor: 'negative',
    children: 'Negative Shout',
    role: 'alert'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the negative flavor style', async () => {
      expect(canvas.getByRole('alert')).toHaveClass('bg-rose-700');
    });
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    children: 'Xs Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xs sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-xs');
    });
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    children: 'Sm Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the sm sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-sm');
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    children: 'Base Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-base');
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    children: 'Lg Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the lg sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-lg');
    });
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    children: 'Xl Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the xl sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-xl');
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Shout',
    role: 'status'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Shout {...neutral.args} />
      <Shout {...positive.args} />
      <Shout {...caution.args} />
      <Shout {...negative.args} />
    </div>
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Shout {...xs.args} className="sm:flex-12" />
      <Shout {...sm.args} className="sm:flex-14" />
      <Shout {...base.args} className="sm:flex-16" />
      <Shout {...lg.args} className="sm:flex-18" />
      <Shout {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...d.parameters?.docs?.source}}};const N=["neutral","positive","caution","negative","xs","sm","base","lg","xl","responsive","allFlavors","allSizers"],O=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:N,allFlavors:v,allSizers:d,base:p,caution:l,default:C,lg:g,negative:c,neutral:n,positive:o,responsive:y,sm:u,xl:m,xs:i},Symbol.toStringTag,{value:"Module"}));export{t as S,O as s};
