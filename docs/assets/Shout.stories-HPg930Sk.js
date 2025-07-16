import{r as t}from"./iframe-CczT3480.js";import{a as x,N as o,S as d,u as b,c as w}from"./index-B9jOoLAk.js";const R=x({base:`
    rounded-sm font-semibold
  `,variants:{sizer:{[d.small]:"text-sm px-3 py-2",[d.medium]:"text-base px-4 py-3",[d.large]:"text-lg px-5 py-4"},flavor:{[o.info]:"bg-indigo-800 text-white",[o.yep]:"bg-emerald-700 text-white",[o.maybe]:"bg-yellow-500",[o.nope]:"bg-rose-800 text-white"}},defaultVariants:{sizer:d.small,flavor:o.info}});function e({className:s,sizer:a,flavor:v,...S}){const f=b(a),z=R({sizer:f,flavor:v});return t.createElement("div",{...S,className:w(z,s)})}e.sizer=d;e.flavor=o;e.__docgenInfo={description:`Displays an important notice to the user, such as an error message, warning,
or congratulatory message. For a less prominent notice, use <Callout>
@param props {@link ShoutProps}`,methods:[],displayName:"Shout",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Shout"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the Shout ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"NoticeFlavor"},description:'Changes the color of the Shout ("info", "yep", "maybe", "nope")'}}};const{expect:r}=__STORYBOOK_MODULE_TEST__,A={title:"Notices/Shout",component:e},n={args:{flavor:e.flavor.info,children:"Info Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the info flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-indigo-800")})}},l={args:{flavor:e.flavor.yep,children:"Yep Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the yep flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-emerald-700")})}},c={args:{flavor:e.flavor.maybe,children:"Maybe Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the maybe flavor style",async()=>{r(s.getByRole("status")).toHaveClass("bg-yellow-500")})}},i={args:{flavor:e.flavor.nope,children:"Nope Shout",role:"alert"},play:async({canvas:s,step:a})=>{await a("Assert the nope flavor style",async()=>{r(s.getByRole("alert")).toHaveClass("bg-rose-800")})}},p={args:{sizer:e.sizer.small,children:"Small Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the small sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-sm")})}},m={args:{sizer:e.sizer.medium,children:"Medium Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the medium sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-base")})}},u={args:{sizer:e.sizer.large,children:"Large Shout",role:"status"},play:async({canvas:s,step:a})=>{await a("Assert the large sizer style",async()=>{r(s.getByRole("status")).toHaveClass("text-lg")})}},g={tags:["!test"],args:{sizer:[e.sizer.smMedium,e.sizer.mdLarge],children:"Responsive Shout",role:"status"}},y={tags:["!dev","!test"],render:s=>t.createElement("div",{className:"flex flex-col gap-4"},t.createElement(e,{...n.args}),t.createElement(e,{...l.args}),t.createElement(e,{...c.args}),t.createElement(e,{...i.args}))},h={tags:["!dev","!test"],render:s=>t.createElement("div",{className:"flex flex-col gap-4"},t.createElement(e,{...p.args}),t.createElement(e,{...m.args}),t.createElement(e,{...u.args}),t.createElement(e,{...g.args}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Shout.flavor.info,
    children: 'Info Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the info flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-indigo-800');
    });
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Shout.flavor.yep,
    children: 'Yep Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the yep flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-emerald-700');
    });
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Shout.flavor.maybe,
    children: 'Maybe Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the maybe flavor style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('bg-yellow-500');
    });
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    flavor: Shout.flavor.nope,
    children: 'Nope Shout',
    role: 'alert'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the nope flavor style', async () => {
      expect(canvas.getByRole('alert')).toHaveClass('bg-rose-800');
    });
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Shout.sizer.small,
    children: 'Small Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-sm');
    });
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Shout.sizer.medium,
    children: 'Medium Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-base');
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Shout.sizer.large,
    children: 'Large Shout',
    role: 'status'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large sizer style', async () => {
      expect(canvas.getByRole('status')).toHaveClass('text-lg');
    });
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Shout.sizer.smMedium, Shout.sizer.mdLarge],
    children: 'Responsive Shout',
    role: 'status'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Shout {...Info.args} />
      <Shout {...Yep.args} />
      <Shout {...Maybe.args} />
      <Shout {...Nope.args} />
    </div>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Shout {...Small.args} />
      <Shout {...Medium.args} />
      <Shout {...Large.args} />
      <Shout {...Responsive.args} />
    </div>
}`,...h.parameters?.docs?.source}}};const N=["Info","Yep","Maybe","Nope","Small","Medium","Large","Responsive","AllFlavors","AllSizes"],B=Object.freeze(Object.defineProperty({__proto__:null,AllFlavors:y,AllSizes:h,Info:n,Large:u,Maybe:c,Medium:m,Nope:i,Responsive:g,Small:p,Yep:l,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{y as A,B as S,e as a};
