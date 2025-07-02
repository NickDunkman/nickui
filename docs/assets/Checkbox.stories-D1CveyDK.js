import{r as a}from"./iframe-X96kWO4h.js";import{C as e}from"./Checkbox-BxTMRc2h.js";const I={title:"Form controls/Checkbox",component:e},r={args:{label:"Unchecked Checkbox"}},s={args:{label:"Controlled Checkbox",checked:!0,onChange:()=>{}}},l={args:{label:"Uncontrolled Checkbox",defaultChecked:!0}},o={args:{label:"Disabled Checkbox",disabled:!0}},c={args:{label:"Disabled & checked Checkbox",disabled:!0,defaultChecked:!0}},m={tags:["!dev","!test"],render:H=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...s.args}),a.createElement(e,{...l.args}),a.createElement(e,{...o.args}),a.createElement(e,{...c.args}))},t={args:{label:"Small Checkbox (default)",explainer:"Optional explaner",defaultChecked:!0}},n={args:{sizer:e.sizer.medium,label:"Medium Checkbox",explainer:"Optional explaner",defaultChecked:!0}},d={args:{sizer:e.sizer.large,label:"Large Checkbox",explainer:"Optional explaner",defaultChecked:!0}},i={tags:["!dev","!test"],render:H=>a.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},a.createElement(e,{...t.args,className:"sm:flex-1"}),a.createElement(e,{...n.args,className:"sm:flex-1"}),a.createElement(e,{...d.args,className:"sm:flex-1"}))};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Checkbox'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    onChange: () => {}
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,k,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Checkbox',
    defaultChecked: true
  }
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var S,E,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checkbox',
    disabled: true
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var z,D,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Checkbox',
    disabled: true,
    defaultChecked: true
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var U,_,O;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Checkbox {...Unchecked.args} />
      <Checkbox {...Controlled.args} />
      <Checkbox {...Uncontrolled.args} />
      <Checkbox {...Disabled.args} />
      <Checkbox {...DisabledChecked.args} />
    </div>
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var M,A,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Small Checkbox (default)',
    explainer: 'Optional explaner',
    defaultChecked: true
  }
}`,...(L=(A=t.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var j,w,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.medium,
    label: 'Medium Checkbox',
    explainer: 'Optional explaner',
    defaultChecked: true
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var F,P,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    sizer: Checkbox.sizer.large,
    label: 'Large Checkbox',
    explainer: 'Optional explaner',
    defaultChecked: true
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,B,G;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Checkbox {...Small.args} className="sm:flex-1" />
      <Checkbox {...Medium.args} className="sm:flex-1" />
      <Checkbox {...Large.args} className="sm:flex-1" />
    </div>
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const J=["Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],R=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:i,Controlled:s,Disabled:o,DisabledChecked:c,Large:d,Medium:n,Small:t,Unchecked:r,Uncontrolled:l,__namedExportsOrder:J,default:I},Symbol.toStringTag,{value:"Module"}));export{m as A,R as S};
