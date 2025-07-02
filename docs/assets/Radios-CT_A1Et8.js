import{j as e,M as m,C as r,S as c}from"./blocks-DxDjG57E.js";import{useMDXComponents as d}from"./index-Bsoww3nm.js";import{D as o}from"./index-BinAziky.js";import{R as n}from"./Radios-DOIzU5dI.js";import{S as s,a as u,C as p}from"./Radios.stories-CUcMXS8g.js";import"./iframe-DVoMRv_a.js";import"./index-C915q1-3.js";import"./clsw-D-KgF5mV.js";import"./Radio-Bx5osM1Z.js";import"./Checkbox-US4qxRTr.js";import"./CheckedField-DI7kAV8r.js";import"./index-Czi7Upa3.js";import"./Checkboxes-iYWRHyY0.js";import"./Fieldset-B9LPp2Mv.js";import"./randomId-Dfhrkieu.js";function l(t){const i={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...t.components};return o||a("Docs",!1),o.FakeCanvas||a("Docs.FakeCanvas",!0),o.FormikDemo||a("Docs.FormikDemo",!0),o.Name||a("Docs.Name",!0),o.Props||a("Docs.Props",!0),o.ReactHookFormDemo||a("Docs.ReactHookFormDemo",!0),o.Sizing||a("Docs.Sizing",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:s}),`
`,e.jsx(i.h1,{id:"",children:e.jsx(o.Name,{of:"Radios"})}),`
`,e.jsx("div",{children:e.jsxs(i.p,{children:["Renders multiple ",e.jsx(o,{of:"Radio"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FakeCanvas,{children:e.jsx(n,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}],sizer:n.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"input",wrapper:"Fieldset",exclude:["delimiter"]}),`
`,e.jsx(i.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(i.p,{children:["In most situations, you can just use the ",e.jsx(i.code,{children:"options"}),` prop to configure the
individual radios. The Radios component will manage the interior layout.`]}),`
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsxs(i.p,{children:[`For more fine-grained control of the individual radios, such as to add
additional elements, or take control of the individual Radio props, you can pass
a render function as the `,e.jsx(i.code,{children:"children"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(i.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual radios, so that group is functional.`})}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`
  <Radios
    label="How custom do you like it?"
    defaultValue="pretty"
  >
    {(radio) => (
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
  </Radios>
`}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Fieldset"}),`
`,e.jsx(o.ReactHookFormDemo,{fieldName:"firstNameRHF",initialValue:"nick",component:n,componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(o.FormikDemo,{fieldName:"firstNameFormik",initialValue:"nick",component:n,componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function S(t={}){const{wrapper:i}={...d(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(l,{...t})}):l(t)}function a(t,i){throw new Error("Expected "+(i?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
