import{j as e,M as r,C as s,S as c}from"./blocks-DeQMV-F1.js";import{useMDXComponents as l}from"./index-BhQbZjFC.js";import{F as d,T as h,b as u,a as m,R as p,c as x}from"./TableOfContents-Bz5P9avz.js";import{C as t}from"./Checkboxes-DzOhjrpm.js";import{S as a,a as k,C as b}from"./Checkboxes.stories-cNB-2ohC.js";import"./iframe-X96kWO4h.js";import"./index-C-j7dYre.js";import"./clsw-D-KgF5mV.js";import"./Checkbox-BxTMRc2h.js";import"./CheckedField-BmJ4XiQr.js";import"./index-Czi7Upa3.js";import"./Fieldset-OdNs9yyS.js";import"./randomId-Dfhrkieu.js";function i(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(o.h1,{id:"checkboxes",children:e.jsx(o.code,{children:"<Checkboxes>"})}),`
`,e.jsx(o.p,{children:"Renders multiple checkboxes as one field in a Fieldset."}),`
`,e.jsxs(o.p,{children:["Form libraries like ",e.jsx(o.a,{href:"https://formik.org/",rel:"nofollow",children:"Formik"})," rely on ",e.jsx(o.code,{children:"onChange"}),` events to
trigger updates to field values, and such events cannot have multiple targets.
Therefore, to function as one holistic field whose value represents all of the
currently checked checkboxes, the component's value is a single delimited-string
that is managed using a `,e.jsx(o.code,{children:'<input type="hidden">'}),`. Each checkbox represents a
substring that can be added to or removed from the delimited-string by toggling
the checked status.`]}),`
`,e.jsx(d,{children:e.jsx(t,{label:"Toppings",sizer:t.sizer.medium,options:[{value:"sprinkles",label:"Sprinkles"},{value:"crumbs",label:"Crumbs"},{value:"chocolate",label:"Chocolate"}]})}),`
`,e.jsx(h,{}),`
`,e.jsx(u,{of:t,reactDocs:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.h2,{id:"adding-checkboxes",children:"Adding checkboxes"}),`
`,e.jsxs(o.p,{children:["In most situations, you can just use the ",e.jsx(o.code,{children:"options"}),` prop to configure the
individual checkboxes. The Checkboxes component will manage the interior layout.`]}),`
`,e.jsx(s,{of:k,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[`For more fine-grained control of the individual checkboxes, such as to add
additional elements, or take control of the individual Checkbox props, you can
pass a render function as the `,e.jsx(o.code,{children:"children"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(o.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual checkboxes, so that group is functional.`})}),`
`,e.jsx(s,{of:b,sourceState:"none"}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`
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
`,e.jsx(m,{of:t,wrapper:"Fieldset",stories:a}),`
`,e.jsx(p,{fieldName:"fullNameRHF",initialValue:"nick,dunkman",component:t,componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(x,{fieldName:"fullNameFormik",initialValue:"nick,dunkman",component:t,componentProps:{label:"Full name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function z(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{z as default};
