import{j as e,M as m}from"./blocks-BOY4E8NR.js";import{useMDXComponents as l}from"./index-BMLRhixw.js";import{D as o}from"./index-BaJMzWci.js";import{S as i,M as a}from"./Money.stories-C_kyNarR.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-DKZEa4Ck.js";import"./index-Dh-2ttH4.js";import"./client-B5izZOM2.js";import"./index-9iGa6NbW.js";import"./Button-Dp7bQ2Tp.js";import"./index-DdRpch8n.js";import"./PrettyPrint-ClJ9eSXk.js";import"./AllSizersStoryWrapper-D3CQH3gX.js";import"./Field-BpDm7nrL.js";import"./styles-0tT-pu7E.js";import"./useElementBounds-CAPzecjg.js";import"./useFieldA11yIds-3nNG8woo.js";import"./randomId-Dfhrkieu.js";import"./fireInputChange-BU1kNzof.js";function s(n){const t={h2:"h2",p:"p",...l(),...n.components};return o||r("Docs",!1),o.ComponentHeading||r("Docs.ComponentHeading",!0),o.ControlStates||r("Docs.ControlStates",!0),o.FauxCanvas||r("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||r("Docs.FormLibraryCompatibility",!0),o.Props||r("Docs.Props",!0),o.Sizers||r("Docs.Sizers",!0),o.TableOfContents||r("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i}),`
`,e.jsx(o.ComponentHeading,{of:"Money"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter a monetary amount."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{defaultValue:"1234567.89"})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"input",wrapper:"Field"}),`
`,e.jsx(o.ControlStates,{of:i,valuable:!0,note:`
  Note: when controlled, <ComponentName of="Money" /> behaves slightly
  differently from other form controls. Since the input’s value needs to be
  disconnected from the controlled \`value\` to enable currency formatting,
  the input’s value can change even if you aren’t passing in the new
  controlled value. However, if you do pass in a numerically different
  controlled value, everything will cascade accordingly.
`}),`
`,e.jsx(t.h2,{id:"currency-formatting--constraints",children:"Currency formatting & constraints"}),`
`,e.jsx(t.p,{children:"TODO"}),`
`,e.jsx(t.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(t.p,{children:"TODO"}),`
`,e.jsx(o.Sizers,{of:i,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:i,fieldName:"player",initialValue:"1234.56",component:a,componentProps:{label:"Player name",hint:"Try editting me!"}})]})}function T(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}function r(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};
