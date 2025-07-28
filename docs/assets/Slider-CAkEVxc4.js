import{j as e,M as l,C as m}from"./blocks-B855UDxM.js";import{useMDXComponents as c}from"./index-zT90d1jV.js";import{D as o}from"./index-DCo3V-0N.js";import{S as r,a as d,C as p}from"./Slider.stories-3JnvFVsA.js";import"./iframe-D3szbWiH.js";import"./index-2SECD1TH.js";import"./client-BywA0A9E.js";import"./index-D5U5gOFB.js";import"./Button-CamUPYIi.js";import"./index-Dr1KcQq8.js";import"./AllSizersStoryWrapper-B3OwGk9k.js";import"./Field-BbRspVSD.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a single line of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{defaultValue:50})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:r,valuable:!0}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(m,{of:p,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:r,fieldName:"index",initialValue:"8.9",componentProps:{label:"Handicap index",hint:({value:s})=>s===0?"scratch":s<0?`+${s*-1}`:s,min:-11.1,max:54,step:.1}})]})}function F(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};
