import{r as a}from"./iframe-BC9w-kBM.js";import{R as e}from"./Radio-DDV8UY7I.js";const Q={title:"Form controls/Radio",component:e},i={tags:["!dev","!test"],args:{label:"A label",hint:"A hint"}},r={args:{label:"Unchecked Radio"}},s={args:{label:"Controlled Radio",checked:!0,onChange:()=>{}}},o={args:{label:"Uncontrolled Radio",defaultChecked:!0}},l={args:{label:"Disabled Radio",disabled:!0}},t={args:{label:"Disabled & checked Radio",disabled:!0,defaultChecked:!0}},m={tags:["!dev","!test"],render:K=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...s.args}),a.createElement(e,{...o.args}),a.createElement(e,{...l.args}),a.createElement(e,{...t.args}))},d={args:{label:"Small Radio (default)",defaultChecked:!0}},c={args:{sizer:e.sizer.medium,label:"Medium Radio",defaultChecked:!0}},n={args:{sizer:e.sizer.large,label:"Large Radio",defaultChecked:!0}},u={tags:["!dev","!test"],render:K=>a.createElement("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-baseline"},a.createElement(e,{...d.args,className:"sm:flex-1"}),a.createElement(e,{...c.args,className:"sm:flex-1"}),a.createElement(e,{...n.args,className:"sm:flex-1"}))};var g,p,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint'
  }
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,h,R;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Radio'
  }
}`,...(R=(h=r.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var k,C,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Radio',
    checked: true,
    onChange: () => {}
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,v,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Radio',
    defaultChecked: true
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var z,D,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Radio',
    disabled: true
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var U,_,A;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Radio',
    disabled: true,
    defaultChecked: true
  }
}`,...(A=(_=t.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,M,y;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Radio {...Unchecked.args} />
      <Radio {...Controlled.args} />
      <Radio {...Uncontrolled.args} />
      <Radio {...Disabled.args} />
      <Radio {...DisabledChecked.args} />
    </div>
}`,...(y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var F,O,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Small Radio (default)',
    defaultChecked: true
  }
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var w,P,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.medium,
    label: 'Medium Radio',
    defaultChecked: true
  }
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,B,G;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sizer: Radio.sizer.large,
    label: 'Large Radio',
    defaultChecked: true
  }
}`,...(G=(B=n.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,I,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline">
      <Radio {...Small.args} className="sm:flex-1" />
      <Radio {...Medium.args} className="sm:flex-1" />
      <Radio {...Large.args} className="sm:flex-1" />
    </div>
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const V=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:u,CheckedFieldLayout:i,Controlled:s,Disabled:l,DisabledChecked:t,Large:n,Medium:c,Small:d,Unchecked:r,Uncontrolled:o,__namedExportsOrder:V,default:Q},Symbol.toStringTag,{value:"Module"}));export{Y as S};
