import{j as e,M as m,C as d}from"./blocks-CA8Qy9jM.js";import{useMDXComponents as l}from"./index-Com1FK_s.js";import{D as o}from"./index-CQcXRXZ9.js";import{S as s,a,C as p}from"./Slider.stories-BofYwLOG.js";import"./iframe-D9ZoAjjD.js";import"./index-B2WA8hy_.js";import"./client-5RyEtZtN.js";import"./index-B824ghBp.js";import"./Button-ChahVeSM.js";import"./Field-Dwne6UUl.js";import"./randomId-Dfhrkieu.js";function c(n){const t={code:"code",h2:"h2",p:"p",...l(),...n.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizing||i("Docs.Sizing",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Slider"}),`
`,e.jsx(t.p,{children:"A form control that allows users to enter & edit a single line of text."}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(a,{defaultValue:50,sizer:a.sizer.medium})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0}),`
`,e.jsx(t.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"max"}),", and ",e.jsx(t.code,{children:"step"}),` props to customize the bounds of the range, and
the granularity of values within it. You can also use `,e.jsx(t.code,{children:"shiftSteps"}),` to control
how many steps are moved when the user is holding the shift key while using the
keyboard to interact with the `,e.jsx(o,{of:"Slider"}),"."]}),`
`,e.jsx(d,{of:p,sourceState:"shown"}),`
`,e.jsx(o.Sizing,{of:s,wrapper:"Field"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"index",initialValue:"8.9",componentProps:{label:"Handicap index",hint:({value:r})=>r===0?"scratch":r<0?`+${r*-1}`:r,min:-11.1,max:54,step:.1}})]})}function w(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}function i(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
