import{j as e,M as u,C as a}from"./blocks-DwzZv1ih.js";import{useMDXComponents as d}from"./index-CfJsEODv.js";import{D as o}from"./index-xA4kDVbw.js";import{S as r,M as s,C as l,A as m}from"./Money.stories-Tf4-eoE7.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-HGc3zGMI.js";import"./index-C0-9UPon.js";import"./client-Bl3UOBay.js";import"./index-CEn6uw-A.js";import"./Button-0qBLfi4l.js";import"./index-KYGXh3HS.js";import"./AllSizersStoryWrapper-DvINfPTO.js";import"./Field-D_nk17W0.js";import"./styles-CTgwYZdS.js";import"./useElementBounds-DQAPW8hI.js";import"./useFieldA11yIds-BNu5t64X.js";import"./randomId-Dfhrkieu.js";import"./fireInputChange-BU1kNzof.js";function c(t){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...t.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"Money"}),`
`,e.jsx(n.p,{children:"A form control that allows users to enter a monetary amount."}),`
`,e.jsx(n.p,{children:`The displayed value is automatically formatted according to the specified
configuration, though will "deformat" as you edit the field, since it can feel
disorienting when the changes don’t match your keystrokes.`}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(s,{defaultValue:"1234567.89"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"input",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:r,valuable:!0,note:`
  Note: when controlled, <ComponentName of="Money" /> behaves slightly
  differently from other form controls. Since the input’s value needs to be
  disconnected from the controlled \`value\` to enable currency formatting,
  the input’s value can change even if you aren’t passing in the new
  controlled value. However, if you do pass in a numerically different
  controlled value, everything will cascade accordingly.
`}),`
`,e.jsx(n.h2,{id:"currency-formatting--constraints",children:"Currency formatting & constraints"}),`
`,e.jsxs(n.p,{children:[`To customize the currency format, you can use a combination of the
`,e.jsx(n.code,{children:"currencySymbol"}),", ",e.jsx(n.code,{children:"decimalPoint"}),", and ",e.jsx(n.code,{children:"thousandsSeparator"}),` props. They all use
USD defaults.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"decimalPlaces"})," prop defaults to ",e.jsx(n.code,{children:"2"})," and configures:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the maximum number of decimal places the user can enter"}),`
`,e.jsx(n.li,{children:'the number of "placeholder" decimal places that are suggested as you type'}),`
`,e.jsxs(n.li,{children:["the number of decimal places always included on ",e.jsx(n.code,{children:"onChange(event.target.value)"})]}),`
`]}),`
`,e.jsx(a,{of:l,source:{language:"tsx",code:l.parameters.source}}),`
`,e.jsxs(n.p,{children:[`By default, negative values are not allowed, since typically, a monetary field
is either positive (like in a deposit form), or negative represented with a
positive value (like in a withdrawal form). However, you can allow negatives
using the `,e.jsx(n.code,{children:"allowNegatives"})," prop."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(o.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:r,fieldName:"greensFees",initialValue:"137.00",component:s,componentProps:{label:"Greens fees",hint:"Try editting me!"}})]})}function H(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}function i(t,n){throw new Error("Expected "+(n?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
