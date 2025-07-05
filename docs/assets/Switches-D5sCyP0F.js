import{j as e,M as m,C as i,S as r}from"./blocks-DlelVFUO.js";import{useMDXComponents as d}from"./index-5tR42_6A.js";import{D as s}from"./index-CpfaDKIC.js";import{S as a,a as l,b as u,C as h}from"./Switches.stories-BOvCcH71.js";import"./iframe-DcTNfTrS.js";import"./index-PS2ocasz.js";import"./clsw-D-KgF5mV.js";import"./Switch-CSCGVS_5.js";import"./Checkbox-BEq9frAG.js";import"./CheckedField-CdtC94Qi.js";import"./index-Czi7Upa3.js";import"./Checkboxes-C2mt7wLS.js";import"./Fieldset-BnZAcNHr.js";import"./randomId-Dfhrkieu.js";function c(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",span:"span",strong:"strong",...d(),...n.components};return s||o("Docs",!1),s.ComponentName||o("Docs.ComponentName",!0),s.FakeCanvas||o("Docs.FakeCanvas",!0),s.FormikDemo||o("Docs.FormikDemo",!0),s.Props||o("Docs.Props",!0),s.ReactHookFormDemo||o("Docs.ReactHookFormDemo",!0),s.Sizing||o("Docs.Sizing",!0),s.TableOfContents||o("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a}),`
`,e.jsx(t.h1,{id:"",children:e.jsx(s.ComponentName,{of:"Switches"})}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(s,{of:"Switch"})," that perform as one field in a"," ",`
`,e.jsx(s,{of:"Fieldset"}),"."]})}),`
`,e.jsx(s.FakeCanvas,{children:e.jsx(l,{label:"Notifications",sizer:l.sizer.medium,defaultValue:"major,minor",options:[{value:"major",label:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"Major"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x.x"})," ","releases"]})},{value:"minor",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x."}),e.jsx(t.strong,{children:"Minor"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x"})," ","releases"]})},{value:"patch",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x.x."}),e.jsx(t.strong,{children:"Patch"})," releases"]})}]})}),`
`,e.jsx(s.TableOfContents,{}),`
`,e.jsx(s.Props,{of:a,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(t.h2,{id:"adding-switches",children:"Adding switches"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
switches. `,e.jsx(s,{of:"Switchex"})," will manage the interior layout."]}),`
`,e.jsx(i,{of:u,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the switch controls, such as to use a different component for the
individual switches, call the props differently, or add other elements, you can
pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual switches, so that group is functional.`})}),`
`,e.jsx(i,{of:h,sourceState:"none"}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  <Switches
    label="How custom do you like it?"
    defaultValue="pretty"
    render={(switch) => (
      <div className="flex flex-row items-baseline gap-x-4">
        <Switch {...switch({ value: 'kinda' })} label="A little custom" />
        <span className="text-xs text-gray-500">or</span>
        <Switch
          {...switch({ value: 'pretty' })}>
          label={
            <div className="font-bold text-blue-500">Pretty custom</div>
          }
        />
        <span className="text-xs text-gray-500">or</span>
        <Switch
          {...switch({ value: 'too', disabled: true })}
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
consistent look & feel for fields with multiple switches. In order to simplify
the boilerplate needed for libraries like Formik and React Hook Form, the
component’s value is a single delimited-string, & toggling each individual
switch adds or removes a particular substring.`}),`
`,e.jsx(t.p,{children:`If you want to work with an array of strings instead of a combined string, you
can convert to/from an array somewhere higher up the chain, as shown in this
example:`}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<string[]>(['a', 'c']);
  //...
  <Switches
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
`,e.jsx(s.Sizing,{of:a,wrapper:"Fieldset"}),`
`,e.jsx(s.ReactHookFormDemo,{of:a,fieldName:"fullNameRHF",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(s.FormikDemo,{of:a,fieldName:"fullNameFormik",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function C(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function o(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{C as default};
