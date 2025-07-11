import{r as a}from"./iframe-CFM7-Iva.js";import{S as e}from"./Switch-DJkpNJFE.js";const h={title:"Form controls/Switch",component:e},i={tags:["!dev","!test"],args:{label:"A label",hint:"A hint"}},r={args:{label:"Unchecked Switch"}},s={args:{label:"Controlled Switch",checked:!0,onChange:()=>{}}},t={args:{label:"Uncontrolled Switch",defaultChecked:!0}},c={args:{label:"Disabled Switch",disabled:!0}},l={args:{label:"Disabled & checked Switch",disabled:!0,defaultChecked:!0}},m={tags:["!dev","!test"],render:g=>a.createElement("div",{className:"flex flex-col gap-4"},a.createElement(e,{...r.args}),a.createElement(e,{...s.args}),a.createElement(e,{...t.args}),a.createElement(e,{...c.args}),a.createElement(e,{...l.args}))},o={args:{label:"Small Switch (default)",defaultChecked:!0}},d={args:{sizer:e.sizer.medium,label:"Medium Switch",defaultChecked:!0}},n={args:{sizer:e.sizer.large,label:"Large Switch",defaultChecked:!0}},u={tags:["!dev","!test"],render:g=>a.createElement("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-baseline"},a.createElement(e,{...o.args,className:"sm:flex-1"}),a.createElement(e,{...d.args,className:"sm:flex-1"}),a.createElement(e,{...n.args,className:"sm:flex-1"}))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  args: {
    label: 'A label',
    hint: 'A hint'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked Switch'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Controlled Switch',
    checked: true,
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uncontrolled Switch',
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled & checked Switch',
    disabled: true,
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Switch {...Unchecked.args} />
      <Switch {...Controlled.args} />
      <Switch {...Uncontrolled.args} />
      <Switch {...Disabled.args} />
      <Switch {...DisabledChecked.args} />
    </div>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Switch (default)',
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.medium,
    label: 'Medium Switch',
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Switch.sizer.large,
    label: 'Large Switch',
    defaultChecked: true
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline">
      <Switch {...Small.args} className="sm:flex-1" />
      <Switch {...Medium.args} className="sm:flex-1" />
      <Switch {...Large.args} className="sm:flex-1" />
    </div>
}`,...u.parameters?.docs?.source}}};const p=["CheckedFieldLayout","Unchecked","Controlled","Uncontrolled","Disabled","DisabledChecked","AllControlStates","Small","Medium","Large","AllSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:m,AllSizes:u,CheckedFieldLayout:i,Controlled:s,Disabled:c,DisabledChecked:l,Large:n,Medium:d,Small:o,Unchecked:r,Uncontrolled:t,__namedExportsOrder:p,default:h},Symbol.toStringTag,{value:"Module"}));export{f as S};
