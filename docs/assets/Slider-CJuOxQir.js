import{j as e,M as c,C as l}from"./blocks-DwzZv1ih.js";import{useMDXComponents as m}from"./index-CfJsEODv.js";import{D as o}from"./index-xA4kDVbw.js";import{S as r,a as p,C as d}from"./Slider.stories-B0Pc6-qo.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-HGc3zGMI.js";import"./index-C0-9UPon.js";import"./client-Bl3UOBay.js";import"./index-CEn6uw-A.js";import"./Button-0qBLfi4l.js";import"./index-KYGXh3HS.js";import"./AllSizersStoryWrapper-DvINfPTO.js";import"./Field-D_nk17W0.js";import"./fireInputChange-BU1kNzof.js";import"./useFieldA11yIds-BNu5t64X.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...m(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a single line of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(p,{defaultValue:50})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:r,valuable:!0}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(l,{of:d,sourceState:"shown"}),`
`,e.jsx(o.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:r,fieldName:"index",initialValue:"8.9",componentProps:{label:"Handicap index",hint:({value:s})=>s===0?"scratch":s<0?`+${s*-1}`:s,min:-11.1,max:54,step:.1}})]})}function H(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
