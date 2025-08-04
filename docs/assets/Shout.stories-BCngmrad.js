import{r as s}from"./iframe-6bS3VKfd.js";import{A as z}from"./AllSizersStoryWrapper-DlSVo7Nl.js";import{a as f,u as w,c as A}from"./index-D0zaK7i9.js";const R=f({base:`
    rounded-sm font-medium
  `,variants:{sizer:{xs:"text-xs px-2.5 py-1.5",sm:"text-sm px-3 py-2",base:"text-base px-4 py-3",lg:"text-lg px-5 py-4",xl:"text-xl px-6 py-5"},flavor:{neutral:"bg-blue-700 text-white",positive:"bg-emerald-700 text-white",caution:"bg-yellow-500 text-yellow-950",negative:"bg-rose-700 text-white"}},defaultVariants:{sizer:"base",flavor:"neutral"}});function t({className:a,sizer:e,flavor:h,...S}){const y=w(e),b=R({sizer:y,flavor:h});return s.createElement("div",{...S,className:A(b,a),"data-nickui-sizer":Array.isArray(e)?e.join(","):e,"data-nickui-resolved-sizer":y})}t.__docgenInfo={description:`Displays an important notice to the user, such as an error message, warning,
or congratulatory message. For a less prominent notice, use <Callout>
@param props {@link ShoutProps}`,methods:[],displayName:"Shout",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Shout"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:'Changes the size of the Shout ("sm", "base", "lg")'},flavor:{required:!1,tsType:{name:"union",raw:"'neutral' | 'positive' | 'caution' | 'negative'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'caution'"},{name:"literal",value:"'negative'"}]},description:`Changes the color of the Shout ("neutral", "positive", "caution",
"negative")`}}};const{expect:l}=__STORYBOOK_MODULE_TEST__,B={title:"Notices/Shout",component:t},r={tags:["flavor"],args:{flavor:"neutral",children:"Neutral Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the neutral flavor style",async()=>{l(a.getByRole("status")).toHaveClass("bg-blue-700")})}},n={tags:["flavor"],args:{flavor:"positive",children:"Positive Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the positive flavor style",async()=>{l(a.getByRole("status")).toHaveClass("bg-emerald-700")})}},o={tags:["flavor"],args:{flavor:"caution",children:"Caution Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the caution flavor style",async()=>{l(a.getByRole("status")).toHaveClass("bg-yellow-500")})}},i={tags:["flavor"],args:{flavor:"negative",children:"Negative Shout",role:"alert"},play:async({canvas:a,step:e})=>{await e("Assert the negative flavor style",async()=>{l(a.getByRole("alert")).toHaveClass("bg-rose-700")})}},m={tags:["sizer"],args:{sizer:"xs",children:"Xs Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the xs sizer style",async()=>{l(a.getByRole("status")).toHaveClass("text-xs")})}},c={tags:["sizer"],args:{sizer:"sm",children:"Sm Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the sm sizer style",async()=>{l(a.getByRole("status")).toHaveClass("text-sm")})}},u={tags:["sizer"],args:{sizer:"base",children:"Base Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the base sizer style",async()=>{l(a.getByRole("status")).toHaveClass("text-base")})}},g={tags:["sizer"],args:{sizer:"lg",children:"Lg Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the lg sizer style",async()=>{l(a.getByRole("status")).toHaveClass("text-lg")})}},v={tags:["sizer"],args:{sizer:"xl",children:"Xl Shout",role:"status"},play:async({canvas:a,step:e})=>{await e("Assert the xl sizer style",async()=>{l(a.getByRole("status")).toHaveClass("text-xl")})}},p={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],children:"Responsive Shout",role:"status"}},d={tags:["!dev","!test"],render:a=>s.createElement("div",{className:"flex flex-col gap-4"},s.createElement(t,{...r.args}),s.createElement(t,{...n.args}),s.createElement(t,{...o.args}),s.createElement(t,{...i.args}))},x={tags:["!dev","!test"],render:a=>s.createElement(z,{alignBaseline:!0},s.createElement(t,{...m.args}),s.createElement(t,{...c.args}),s.createElement(t,{...u.args}),s.createElement(t,{...g.args}),s.createElement(t,{...v.args}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    children: 'Responsive Shout',
    role: 'status'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Shout {...Neutral.args} />
      <Shout {...Positive.args} />
      <Shout {...Caution.args} />
      <Shout {...Negative.args} />
    </div>
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper alignBaseline>
      <Shout {...Xs.args} />
      <Shout {...Sm.args} />
      <Shout {...Base.args} />
      <Shout {...Lg.args} />
      <Shout {...Xl.args} />
    </AllSizersStoryWrapper>
}`,...x.parameters?.docs?.source}}};const C=["Neutral","Positive","Caution","Negative","Xs","Sm","Base","Lg","Xl","Responsive","AllFlavors","AllSizers"],E=Object.freeze(Object.defineProperty({__proto__:null,AllFlavors:d,AllSizers:x,Base:u,Caution:o,Lg:g,Negative:i,Neutral:r,Positive:n,Responsive:p,Sm:c,Xl:v,Xs:m,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{E as S,t as a};
