import{r as e}from"./iframe-CFM7-Iva.js";import{S as d}from"./Switch-DJkpNJFE.js";import{F as m}from"./index-C4eiBceS.js";import{a as p}from"./Checkboxes-DWet21iD.js";function a({delimiter:t=",",...u}){return e.createElement(p,{...u,Checkable:d,delimiter:t})}a.sizer=m;a.__docgenInfo={description:`Renders multiple <Switch> as one field in a <Fieldset>.
@props {@link CheckablesProps} + {@link CommonFieldsetProps}`,methods:[],displayName:"Switches",props:{name:{required:!1,tsType:{name:"string"},description:"The name for the field"},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  inputProps: (control: {
    value: string;
    disabled?: boolean;
  }) => React.ComponentProps<'input'>,
) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"function",raw:`(control: {
  value: string;
  disabled?: boolean;
}) => React.ComponentProps<'input'>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"control"}],return:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]}}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Render function used to render customized checkable inputs. Call the
provided callback to get props to pass down to each input.`},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  disabled?: boolean;
}[]`},description:"Adds the controls in the standard layout"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value when using it as an uncontrolled component"},delimiter:{required:!1,tsType:{name:"string"},description:`Optionally override the delimiter used to split the value into individual
checkable values`,defaultValue:{value:"','",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message to show along with the field"},required:{required:!1,tsType:{name:"boolean"},description:"Adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const b={title:"Form controls/Switches",component:a},r={args:{label:"Please select some standards",defaultValue:"8601",options:[{value:"aquila",label:"Roman Aquila"},{value:"8601",label:"ISO 8601"},{value:"high-society",label:"High Society",disabled:!0}]}},o={args:{label:"Please select some customizations",defaultValue:"colorful,embiggened",render:t=>e.createElement("div",{className:"flex flex-row items-baseline gap-x-6"},e.createElement(d,{...t({value:"colorful"}),label:e.createElement("span",{className:"font-bold text-blue-700"},"Colorful"),className:"rounded-sm bg-rose-200 p-2"}),e.createElement(d,{...t({value:"embiggened"}),sizer:d.sizer.large,label:"Embiggened"}),e.createElement("div",null,e.createElement("input",{type:"checkbox",...t({value:"native"}),"aria-label":"example using different control component"})," ","Native"))}},i={args:{label:"A label",hint:"A hint",error:"An error message",options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},n={args:{label:"Small label",hint:"Small hint",sizer:a.sizer.small,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},l={args:{label:"Medium label",hint:"Medium hint",sizer:a.sizer.medium,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},s={args:{label:"Large label",hint:"Large hint",sizer:a.sizer.large,options:[{value:"one",label:"Option one"},{value:"two",label:"Option two"}]}},c={tags:["!dev","!test"],render:t=>e.createElement("div",{className:"flex flex-col gap-x-12 gap-y-8 sm:flex-row sm:items-baseline"},e.createElement(a,{...n.args,className:"sm:flex-1"}),e.createElement(a,{...l.args,className:"sm:flex-1"}),e.createElement(a,{...s.args,className:"sm:flex-1"}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some standards',
    defaultValue: '8601',
    options: [{
      value: 'aquila',
      label: 'Roman Aquila'
    }, {
      value: '8601',
      label: 'ISO 8601'
    }, {
      value: 'high-society',
      label: 'High Society',
      disabled: true
    }]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please select some customizations',
    defaultValue: 'colorful,embiggened',
    render: checkbox => <div className="flex flex-row items-baseline gap-x-6">
        <Switch {...checkbox({
        value: 'colorful'
      })} label={<span className="font-bold text-blue-700">Colorful</span>} className="rounded-sm bg-rose-200 p-2" />
        <Switch {...checkbox({
        value: 'embiggened'
      })} sizer={Switch.sizer.large} label="Embiggened" />
        <div>
          <input type="checkbox" {...checkbox({
          value: 'native'
        })} aria-label="example using different control component" />{' '}
          Native
        </div>
      </div>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small label',
    hint: 'Small hint',
    sizer: Switches.sizer.small,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Medium label',
    hint: 'Medium hint',
    sizer: Switches.sizer.medium,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large label',
    hint: 'Large hint',
    sizer: Switches.sizer.large,
    options: [{
      value: 'one',
      label: 'Option one'
    }, {
      value: 'two',
      label: 'Option two'
    }]
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-x-12 gap-y-8 sm:flex-row sm:items-baseline">
      <Switches {...Small.args} className="sm:flex-1" />
      <Switches {...Medium.args} className="sm:flex-1" />
      <Switches {...Large.args} className="sm:flex-1" />
    </div>
}`,...c.parameters?.docs?.source}}};const g=["StandardLayout","CustomLayout","FieldsetLayout","Small","Medium","Large","AllSizes"],y=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:c,CustomLayout:o,FieldsetLayout:i,Large:s,Medium:l,Small:n,StandardLayout:r,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{o as C,y as S,a,r as b};
