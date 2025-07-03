import{j as e,M as d,C as i,S as m}from"./blocks-D2F_NW0t.js";import{useMDXComponents as c}from"./index-DwXBoJ7S.js";import{D as n}from"./index-DiemKipG.js";import{C as r}from"./Checkboxes-B4-vWe9Z.js";import{S as a,a as u,C as h}from"./Checkboxes.stories-CTbQsyan.js";import"./iframe-B-MmJHH3.js";import"./index-DR5r5e_J.js";import"./clsw-D-KgF5mV.js";import"./Checkbox-CD98E9iP.js";import"./CheckedField-CFqLPZQ9.js";import"./index-Czi7Upa3.js";import"./Fieldset-CAvY3JTL.js";import"./randomId-Dfhrkieu.js";function l(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...c(),...t.components};return n||s("Docs",!1),n.FakeCanvas||s("Docs.FakeCanvas",!0),n.FormikDemo||s("Docs.FormikDemo",!0),n.Name||s("Docs.Name",!0),n.Props||s("Docs.Props",!0),n.ReactHookFormDemo||s("Docs.ReactHookFormDemo",!0),n.Sizing||s("Docs.Sizing",!0),n.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(o.h1,{id:"",children:e.jsx(n.Name,{of:"Checkboxes"})}),`
`,e.jsx("div",{children:e.jsxs(o.p,{children:["Renders multiple ",e.jsx(n,{of:"Checkbox"})," that perform as one field in a"," ",`
`,e.jsx(n,{of:"Fieldset"}),"."]})}),`
`,e.jsxs(o.p,{children:["Form libraries like ",e.jsx(o.a,{href:"https://formik.org/",rel:"nofollow",children:"Formik"})," rely on ",e.jsx(o.code,{children:"onChange"}),` events to
trigger updates to field values, and such events cannot have multiple targets.
Therefore, to function as one holistic field whose value represents all of the
currently checked checkboxes, the component's value is a single delimited-string
that is managed using a `,e.jsx(o.code,{children:'<input type="hidden">'}),`. Each checkbox represents a
substring that can be added to or removed from the delimited-string by toggling
the checked status.`]}),`
`,e.jsx(n.FakeCanvas,{children:e.jsx(r,{label:"Toppings",sizer:r.sizer.medium,options:[{value:"sprinkles",label:"Sprinkles"},{value:"crumbs",label:"Crumbs"},{value:"chocolate",label:"Chocolate"}]})}),`
`,e.jsx(n.TableOfContents,{}),`
`,e.jsx(n.Props,{of:a,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.h2,{id:"adding-checkboxes",children:"Adding checkboxes"}),`
`,e.jsxs(o.p,{children:["In most situations, you can just use the ",e.jsx(o.code,{children:"options"}),` prop to configure the
individual checkboxes. The Checkboxes component will manage the interior layout.`]}),`
`,e.jsx(i,{of:u,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[`For more fine-grained control of the individual checkboxes, such as to add
additional elements, or take control of the individual Checkbox props, you can
pass a render function as the `,e.jsx(o.code,{children:"children"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(o.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual checkboxes, so that group is functional.`})}),`
`,e.jsx(i,{of:h,sourceState:"none"}),`
`,e.jsx(m,{dark:!0,language:"tsx",code:`
  <Checkboxes
    label="How custom do you like it?"
    defaultValue="pretty"
  >
    {(checkbox) => (
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
  </Checkboxes>
`}),`
`,e.jsx(n.Sizing,{of:a,wrapper:"Fieldset"}),`
`,e.jsx(n.ReactHookFormDemo,{of:a,fieldName:"fullNameRHF",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(n.FormikDemo,{of:a,fieldName:"fullNameFormik",initialValue:"nick,dunkman",componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function w(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(l,{...t})}):l(t)}function s(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
