import{j as e,M as l,C as m}from"./blocks-DbEk-mWC.js";import{useMDXComponents as c}from"./index-1Jc0zr7f.js";import{D as o}from"./index-D6ddxMym.js";import{S as s,a as d,C as p}from"./Slider.stories-mLDsQyTV.js";import"./iframe-D0vVQOb0.js";import"./index-fR634ZZn.js";import"./client-7pbiKXrg.js";import"./index-BJKEptQa.js";import"./Button-CXWIg26E.js";import"./index-CwEOYWVM.js";import"./Field-HuYy4Cse.js";import"./randomId-Dfhrkieu.js";function a(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizing||i("Docs.Sizing",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a single line of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{defaultValue:50})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(m,{of:p,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"index",initialValue:"8.9",componentProps:{label:"Handicap index",hint:({value:r})=>r===0?"scratch":r<0?`+${r*-1}`:r,min:-11.1,max:54,step:.1}})]})}function v(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};
