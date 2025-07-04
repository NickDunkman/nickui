import{j as e,M as d,C as i,S as r}from"./blocks-CSstgVyp.js";import{useMDXComponents as u}from"./index-C8_x7kQc.js";import{D as o}from"./index-WW582XCB.js";import{C as l}from"./Checkboxes-BcnwgYUk.js";import{S as s,a as m,C as h}from"./Checkboxes.stories-BZuJiQww.js";import"./iframe-TzZJGsUu.js";import"./index-2j4aFPFW.js";import"./clsw-D-KgF5mV.js";import"./Checkbox-DeekQ55L.js";import"./CheckedField-DOLhIyMo.js";import"./index-Czi7Upa3.js";import"./Fieldset-BPG4ZTgr.js";import"./randomId-Dfhrkieu.js";function c(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...u(),...n.components};return o||a("Docs",!1),o.ComponentName||a("Docs.ComponentName",!0),o.FakeCanvas||a("Docs.FakeCanvas",!0),o.FormikDemo||a("Docs.FormikDemo",!0),o.Props||a("Docs.Props",!0),o.ReactHookFormDemo||a("Docs.ReactHookFormDemo",!0),o.Sizing||a("Docs.Sizing",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(t.h1,{id:"",children:e.jsx(o.ComponentName,{of:"Checkboxes"})}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Checkbox"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FakeCanvas,{children:e.jsx(l,{label:"Add some toppings to your Burgerdog",sizer:l.sizer.medium,defaultValue:"sauerkraut,mustard",options:[{value:"sauerkraut",label:"Sauerkraut"},{value:"relish",label:"Relish"},{value:"onions",label:"Onions"},{value:"mustard",label:"Mustard"}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(t.h2,{id:"adding-checkboxes",children:"Adding checkboxes"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
checkboxes. `,e.jsx(o,{of:"Checkboxes"})," will manage the interior layout."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the checkbox controls, such as to use a different component for the
individual checkboxes, call the props differently, or add other elements, you
can pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the props callback provided for the field to
behave properly.`})}),`
`,e.jsx(i,{of:h,sourceState:"none"}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  <Checkboxes
    label="How custom do you like it?"
    defaultValue="pretty"
    render={(checkbox) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Checkbox {...checkbox({ value: 'kinda' })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Checkbox
          {...checkbox({ value: 'pretty' })}>
          label={
            <div className="font-bold text-blue-500">Pretty custom</div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Checkbox
          {...checkbox({ value: 'too', disabled: true })}
          className="-rotate-30"
          sizer={Checkbox.sizer.large}
          label="Too custom"
        />
      </div>
    )}
  />
`}),`
`,e.jsx(t.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(t.p,{children:`The purpose of this component is to make it as easy as possible to have a
consistent look & feel for fields with multiple checkboxes. In order to simplify
the boilerplate needed for libraries like Formik and React Hook Form, the
component’s value is a single delimited-string, & toggling each individual
checkbox adds or removes a particular substring.`}),`
`,e.jsx(t.p,{children:`If you want to work with an array of strings instead of a combined string, you
can convert to/from an array somewhere higher up the chain, as shown in this
example:`}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<string[]>(['a', 'c']);
  //...
  <Checkboxes
    options={[
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'D' },
    ]}
    value={value.join(',')}
    onChange={(event) => {
      setValue(event.target.value.split(','));
    }}
  />
`}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Fieldset"}),`
`,e.jsx(o.ReactHookFormDemo,{of:s,fieldName:"fullNameRHF",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(o.FormikDemo,{of:s,fieldName:"fullNameFormik",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function N(n={}){const{wrapper:t}={...u(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function a(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default};
