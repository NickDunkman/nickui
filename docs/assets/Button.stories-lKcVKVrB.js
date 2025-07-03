import{r}from"./iframe-B7C3MqEt.js";import{c as re,F as u}from"./index-Czi7Upa3.js";import{c as ae}from"./clsw-D-KgF5mV.js";var s=(a=>(a.primary="primary",a.secondary="secondary",a.danger="danger",a))(s||{});const se=re({base:`
    appearance-none
    border-1 rounded-sm
    text-center
    cursor-pointer select-none
    shadow-md/15
    transition-all duration-8 ease-out

    disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:opacity-100 disabled:cursor-not-allowed disabled:shadow-none


    hover:shadow-xl/15 hover:-translate-y-0.5 hover:scale-101.5
    focus:shadow-xl/15 focus:-translate-y-0.5 focus:scale-101.5

    active:shadow-md/15 active:translate-y-0 active:scale-100
    pointer-coarse:hover:shadow-md/15 pointer-coarse:translate-y-0 pointer-coarse:scale-100
    disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100
  `,variants:{sizer:{[u.small]:"text-sm py-1.75 px-3",[u.medium]:"text-base py-2.75 px-4.5",[u.large]:"text-lg py-3.75 px-5.5"},flavor:{[s.primary]:"bg-indigo-600 border-indigo-600 text-white font-medium",[s.secondary]:"border-gray-600 bg-gray-100",[s.danger]:"bg-rose-700 border-rose-700 text-white font-medium"}},defaultVariants:{sizer:u.small,flavor:s.primary}});function e({className:a,type:W="button",disabled:X=!1,sizer:Y,flavor:Z,...$}){const ee=se({sizer:Y,flavor:Z});return r.createElement("button",{...$,className:ae(ee,a),disabled:X,type:W})}e.flavor=s;e.sizer=u;e.__docgenInfo={description:`Buttons allow the user to trigger an action, such as submitting a form
@param props {@link ButtonProps}`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The inner content shown in the Button"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the Button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Called when Button is pressed"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'reset' | 'submit'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'submit'"}]},description:"Controls the behavior of the button",defaultValue:{value:"'button'",computed:!1}},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the button ("small", "medium", "large")'},flavor:{required:!1,tsType:{name:"ButtonFlavor"},description:'Changes the color of the button ("primary", "secondary", "danger")'}}};const te={title:"Form controls/Button",component:e},t={args:{children:"Enabled Button"}},o={args:{children:"Disabled Button",disabled:!0}},p={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex gap-4"},r.createElement(e,{...t.args}),r.createElement(e,{...o.args}))},n={args:{sizer:e.sizer.small,children:"Small Button (default)"}},l={args:{sizer:e.sizer.medium,children:"Medium Button"}},d={args:{sizer:e.sizer.large,children:"Large Button"}},g={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex flex-wrap items-baseline gap-4"},r.createElement(e,{...n.args}),r.createElement(e,{...l.args}),r.createElement(e,{...d.args}))},i={args:{children:"Primary Button (default)"}},c={args:{flavor:e.flavor.secondary,children:"Secondary Button"}},m={args:{flavor:e.flavor.danger,children:"Danger Button"}},f={tags:["!dev","!test"],render:a=>r.createElement("div",{className:"flex flex-wrap gap-4"},r.createElement(e,{...i.args}),r.createElement(e,{...c.args}),r.createElement(e,{...m.args}))};var h,b,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Enabled Button'
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,B,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var x,E,w;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex gap-4">
      <Button {...Enabled.args} />
      <Button {...Disabled.args} />
    </div>
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,_,N;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.small,
    children: 'Small Button (default)'
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var T,D,M;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.medium,
    children: 'Medium Button'
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,q,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    sizer: Button.sizer.large,
    children: 'Large Button'
  }
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,L,R;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap items-baseline gap-4">
      <Button {...Small.args} />
      <Button {...Medium.args} />
      <Button {...Large.args} />
    </div>
}`,...(R=(L=g.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,H,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button (default)'
  }
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var V,j,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.secondary,
    children: 'Secondary Button'
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var I,G,J;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    flavor: Button.flavor.danger,
    children: 'Danger Button'
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-wrap gap-4">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
      <Button {...Danger.args} />
    </div>
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const oe=["Enabled","Disabled","AllControlStates","Small","Medium","Large","AllSizes","Primary","Secondary","Danger","AllFlavors"],ie=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:p,AllFlavors:f,AllSizes:g,Danger:m,Disabled:o,Enabled:t,Large:d,Medium:l,Primary:i,Secondary:c,Small:n,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{p as A,e as B,ie as S,f as a};
