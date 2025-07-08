import{r as a}from"./iframe-BCtXYBx8.js";import{S as e}from"./Switch-i8UdanQ7.js";const R={title:"Form controls/Switch",component:e},i={tags:["!dev","!test"],args:{label:"A label",hint:"A hint"}},r={args:{label:"Unchecked Switch"}},s={args:{label:"Controlled Switch",checked:!0,onChange:()=>{}}},t={args:{label:"Uncontrolled Switch",defaultChecked:!0}},c={args:{label:"Disabled Switch",disabled:!0}},l={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0}},m={tags:["!dev","!test"],render:Q=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...s.args}),a.createElement(e,{...t.args}),a.createElement(e,{...c.args}),a.createElement(e,{...l.args}))},o={args:{label:"Small Switch (default)",defaultChecked:!0}},d={args:{sizer:e.sizer.medium,label:"Medium Switch",defaultChecked:!0}},n={args:{sizer:e.sizer.large,label:"Large Switch",defaultChecked:!0}},u={tags:["!dev","!test"],render:Q=>a.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},a.createElement(e,{...o.args,className:"sm:flex-1"}),a.createElement(e,{...d.args,className:"sm:flex-1"}),a.createElement(e,{...n.args,className:"sm:flex-1"}))};var g,h,p;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint'
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var S,b,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,k,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: () => {}
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var x,v,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true
  }
}`,...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var z,D,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    disabled: true
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var U,_,A;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true
  }
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,M,y;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...Disabled.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...(y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var F,O,j;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Small Switch (default)',
    defaultChecked: true
  }
}`,...(j=(O=o.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var P,T,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,G,H;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true
  }
}`,...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const V=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:u,CheckedFieldLayout:i,Controlled:s,Disabled:c,DisabledChecked:l,Large:n,Medium:d,Small:o,Unchecked:r,Uncontrolled:t,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{Y as S};
