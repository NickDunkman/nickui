import{r as a}from"./iframe-Dcrhn4el.js";import{R as e}from"./Radio-DKuT2GEg.js";const H={title:"Forms/Radio",component:e},r={args:{label:"Unchecked Radio"}},s={args:{label:"Controlled Radio",checked:!0,onChange:()=>{}}},l={args:{label:"Uncontrolled Radio",defaultChecked:!0}},o={args:{label:"Disabled Radio",disabled:!0}},t={args:{label:"Disabled & checked Radio",disabled:!0,defaultChecked:!0}},i={tags:["!dev","!test"],render:G=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...s.args}),a.createElement(e,{...l.args}),a.createElement(e,{...o.args}),a.createElement(e,{...t.args}))},d={args:{label:"Small Radio (default)",explainer:"Optional explainer",defaultChecked:!0}},c={args:{sizer:e.sizer.medium,label:"Medium Radio",explainer:"Optional explainer",defaultChecked:!0}},n={args:{sizer:e.sizer.large,label:"Large Radio",explainer:"Optional explainer",defaultChecked:!0}},m={tags:["!dev","!test"],render:G=>a.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},a.createElement(e,{...d.args,className:"sm:flex-1"}),a.createElement(e,{...c.args,className:"sm:flex-1"}),a.createElement(e,{...n.args,className:"sm:flex-1"}))};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Radio'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: () => {}
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,h,S;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var k,C,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Radio',
    disabled: true
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var v,z,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Radio',
    disabled: true,
    defaultChecked: true
  }
}`,...(D=(z=t.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var N,U,_;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...Disabled.args} />
      <Radio {...DisabledChecked.args} />
    </div>
}`,...(_=(U=i.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,M,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Small Radio (default)',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,j,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,F,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
    explainer: 'Optional explainer',
    defaultChecked: true
  }
}`,...(P=(F=n.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var T,q,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
    </div>
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const I=["Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],Q=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:i,AllSizes:m,Controlled:s,Disabled:o,DisabledChecked:t,Large:n,Medium:c,Small:d,Unchecked:r,Uncontrolled:l,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{i as A,Q as S};
