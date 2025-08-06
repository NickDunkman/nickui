import{j as e,M as m,C as d}from"./blocks-COeHbJ0a.js";import{useMDXComponents as c}from"./index-BV5TgVFC.js";import{D as n}from"./index-Z85wv-FQ.js";import{S as i,M as s,C as a}from"./Money.stories-pW6pQzYz.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-BFntpIWb.js";import"./index-D4__TxFE.js";import"./client-CiD9xbEZ.js";import"./index-DPFO3VO9.js";import"./Button-C2rQOmZ9.js";import"./index-DoniPkFH.js";import"./AllSizersStoryWrapper-BTWVrJ9r.js";import"./Field-DrKnf8AR.js";import"./styles-nFnI93-C.js";import"./useElementBounds-C1vxns15.js";import"./useFieldA11yIds-PbCci3-g.js";import"./randomId-Dfhrkieu.js";import"./fireInputChange-BU1kNzof.js";function l(t){const o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...t.components};return n||r("Docs",!1),n.ComponentHeading||r("Docs.ComponentHeading",!0),n.ControlStates||r("Docs.ControlStates",!0),n.FauxCanvas||r("Docs.FauxCanvas",!0),n.FormLibraryCompatibility||r("Docs.FormLibraryCompatibility",!0),n.Props||r("Docs.Props",!0),n.Sizers||r("Docs.Sizers",!0),n.TableOfContents||r("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i}),`
`,e.jsx(n.ComponentHeading,{of:"Money"}),`
`,e.jsx(o.p,{children:"A form control that allows users to enter a monetary amount."}),`
`,e.jsx(n.FauxCanvas,{children:e.jsx(s,{defaultValue:"1234567.89"})}),`
`,e.jsx(n.TableOfContents,{}),`
`,e.jsx(n.Props,{of:i,nativeBase:"input",wrapper:"Field"}),`
`,e.jsx(n.ControlStates,{of:i,valuable:!0,note:`
  Note: when controlled, <ComponentName of="Money" /> behaves slightly
  differently from other form controls. Since the input’s value needs to be
  disconnected from the controlled \`value\` to enable currency formatting,
  the input’s value can change even if you aren’t passing in the new
  controlled value. However, if you do pass in a numerically different
  controlled value, everything will cascade accordingly.
`}),`
`,e.jsx(o.h2,{id:"currency-formatting--constraints",children:"Currency formatting & constraints"}),`
`,e.jsxs(o.p,{children:[`To customize the currency format, you can use a combination of the
`,e.jsx(o.code,{children:"currencySymbol"}),", ",e.jsx(o.code,{children:"decimalPoint"}),", and ",e.jsx(o.code,{children:"thousandsSeparator"}),` props. They are all
set to USD defaults.`]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"decimalPlaces"})," prop defaults to ",e.jsx(o.code,{children:"2"})," and configures:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"the maximum number of decimal places the user can enter"}),`
`,e.jsx(o.li,{children:'the number of "placeholder" decimal places that are suggested as you type'}),`
`,e.jsxs(o.li,{children:["the number of decimal places always included on ",e.jsx(o.code,{children:"onChange(event.target.value)"})]}),`
`]}),`
`,e.jsx(d,{of:a,source:{language:"tsx",code:a.parameters.source}}),`
`,e.jsx(o.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(o.p,{children:"TODO"}),`
`,e.jsx(n.Sizers,{of:i,wrapper:"Field"}),`
`,e.jsx(n.FormLibraryCompatibility,{of:i,fieldName:"greensFees",initialValue:"137.00",component:s,componentProps:{label:"Greens fees",hint:"Try editting me!"}})]})}function O(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(l,{...t})}):l(t)}function r(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{O as default};
