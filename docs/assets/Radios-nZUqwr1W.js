import{j as e,M as l,C as n,S as d}from"./blocks-BA1a2dVG.js";import{useMDXComponents as r}from"./index-BXt_MkKP.js";import{F as m,T as u,b as c,a as p,R as x,c as h}from"./TableOfContents-Dhm7B0is.js";import{R as i}from"./Radios-BFYqp5X_.js";import{S as t,a as f,C as j}from"./Radios.stories-BwIpQDYl.js";import"./iframe-Dcrhn4el.js";import"./index-CnbiPRYk.js";import"./clsw-D-KgF5mV.js";import"./Fieldset-CBoLlTZQ.js";import"./index-Czi7Upa3.js";import"./randomId-Dfhrkieu.js";import"./Radio-DKuT2GEg.js";import"./Checkbox-DYUkxDbh.js";import"./CheckedField-BAZSrRcf.js";function s(a){const o={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(o.h1,{id:"radios",children:e.jsx(o.code,{children:"<Radios>"})}),`
`,e.jsx(o.p,{children:"Radios renders multiple Radio as one field in a Fieldset."}),`
`,e.jsx(m,{children:e.jsx(i,{label:"Quel numéro?",options:[{value:"un",label:"Un"},{value:"deux",label:"Deux"},{value:"trois",label:"Trois"}],sizer:i.sizer.medium})}),`
`,e.jsx(u,{}),`
`,e.jsx(c,{of:i,reactDocs:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.h2,{id:"adding-radios",children:"Adding radios"}),`
`,e.jsxs(o.p,{children:["In most situations, you can just use the ",e.jsx(o.code,{children:"options"}),` prop to configure the
individual radios. The Radios component will manage the interior layout.`]}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[`For more fine-grained control of the individual radios, such as to add
additional elements, or take control of the individual Radio props, you can pass
a render function as the `,e.jsx(o.code,{children:"children"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(o.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual radios, so that group is functional.`})}),`
`,e.jsx(n,{of:j,sourceState:"none"}),`
`,e.jsx(d,{dark:!0,language:"tsx",code:`
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
`,e.jsx(p,{of:i,wrapper:"Fieldset",stories:t}),`
`,e.jsx(x,{fieldName:"firstNameRHF",initialValue:"nick",component:i,componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}}),`
`,e.jsx(h,{fieldName:"firstNameFormik",initialValue:"nick",component:i,componentProps:{label:"First name",hint:"Try editting me!",options:[{value:"nick",label:"Nick"},{value:"dunkman",label:"Dunkman"}]}})]})}function z(a={}){const{wrapper:o}={...r(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(s,{...a})}):s(a)}export{z as default};
