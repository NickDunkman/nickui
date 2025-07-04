import{j as e,M as m,C as s,S as c}from"./blocks-CSstgVyp.js";import{useMDXComponents as d}from"./index-C8_x7kQc.js";import{D as o}from"./index-WW582XCB.js";import{R as r}from"./Radios-CVfXWkfj.js";import{S as n,a as u,C as p}from"./Radios.stories-geXPmrKg.js";import"./iframe-TzZJGsUu.js";import"./index-2j4aFPFW.js";import"./clsw-D-KgF5mV.js";import"./Radio-CKErsSW-.js";import"./Checkbox-DeekQ55L.js";import"./CheckedField-DOLhIyMo.js";import"./index-Czi7Upa3.js";import"./Checkboxes-BcnwgYUk.js";import"./Fieldset-BPG4ZTgr.js";import"./randomId-Dfhrkieu.js";function l(i){const t={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...i.components};return o||a("Docs",!1),o.ComponentName||a("Docs.ComponentName",!0),o.FakeCanvas||a("Docs.FakeCanvas",!0),o.FormikDemo||a("Docs.FormikDemo",!0),o.Props||a("Docs.Props",!0),o.ReactHookFormDemo||a("Docs.ReactHookFormDemo",!0),o.Sizing||a("Docs.Sizing",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:n}),`
`,e.jsx(t.h1,{id:"",children:e.jsx(o.ComponentName,{of:"Radios"})}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FakeCanvas,{children:e.jsx(r,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}],sizer:r.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:n,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(t.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(t.p,{children:["In most situations, you can just use the ",e.jsx(t.code,{children:"options"}),` prop to configure the
individual radios. The Radios component will manage the interior layout.`]}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`For more fine-grained control of the individual radios, such as to add
additional elements, or take control of the individual Radio props, you can pass
a render function as the `,e.jsx(t.code,{children:"children"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual radios, so that group is functional.`})}),`
`,e.jsx(s,{of:p,sourceState:"none"}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`
  <Radios
    label="How custom do you like it?"
    defaultValue="pretty"
    render={(radio) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Radio {...radio({ value: 'kinda' })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'pretty' })}>
          label={
            <div className="font-bold text-blue-500">Pretty custom</div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Radio
          {...radio({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Radio.sizer.large}
          label="Too custom"
        />
      </div>
    )}
  />
`}),`
`,e.jsx(o.Sizing,{of:n,wrapper:"Fieldset"}),`
`,e.jsx(o.ReactHookFormDemo,{of:n,fieldName:"firstNameRHF",initialValue:"nick",componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(o.FormikDemo,{of:n,fieldName:"firstNameFormik",initialValue:"nick",componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function S(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(l,{...i})}):l(i)}function a(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
