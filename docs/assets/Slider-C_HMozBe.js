import{j as e,M as h,C as u}from"./blocks-Cu13-jSp.js";import{useMDXComponents as l}from"./index-CB6ZV6Kh.js";import{D as t,K as i}from"./index-NqWXr5SC.js";import{s as a,S as c,c as f}from"./Slider.stories-DiW5sLl8.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D7K3DBLU.js";import"./index-DoG65Fal.js";import"./client-C1uJbZbB.js";import"./Button-CM4tt_cv.js";import"./index-BfBaVl6L.js";import"./index-69CadyKP.js";import"./AllSizersStoryWrapper-C7b1EBiS.js";import"./getStoryArgTypes-DAe_MfAd.js";import"./Field-CtUzKpbc.js";import"./fieldA11y-BMp6F0pm.js";import"./randomId-Dfhrkieu.js";import"./fireInputChange-BU1kNzof.js";function m(s){const o={code:"code",h2:"h2",p:"p",...l(),...s.components};return t||n("Docs",!1),t.ComponentHeading||n("Docs.ComponentHeading",!0),t.ControlStates||n("Docs.ControlStates",!0),t.FauxCanvas||n("Docs.FauxCanvas",!0),t.FormLibraryDemos||n("Docs.FormLibraryDemos",!0),t.KeyboardInteractions||n("Docs.KeyboardInteractions",!0),t.Props||n("Docs.Props",!0),t.Sizers||n("Docs.Sizers",!0),t.TableOfContents||n("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:a}),`
`,e.jsx(t.ComponentHeading,{of:"Slider"}),`
`,e.jsx(o.p,{children:"A form control that allows users to choose a number within a range."}),`
`,e.jsx(t.FauxCanvas,{children:e.jsx(c,{defaultValue:50})}),`
`,e.jsx(t.TableOfContents,{}),`
`,e.jsx(t.Props,{of:a,nativeBase:"div",wrapper:"Field",exclude:["ref","onBlur"]}),`
`,e.jsx(t.ControlStates,{of:a,valuable:!0}),`
`,e.jsx(o.h2,{id:"customizing-the-value-range",children:"Customizing the value range"}),`
`,e.jsx("div",{children:e.jsxs(o.p,{children:["Use the ",e.jsx(o.code,{children:"min"}),", ",e.jsx(o.code,{children:"max"}),", and ",e.jsx(o.code,{children:"step"}),` props to customize the bounds of the range,
and the granularity of values within it. You can also use `,e.jsx(o.code,{children:"leapSteps"}),` to
control how many steps are moved when the user holds`," ",`
`,e.jsx(i,{children:"Shift"})," while pressing an arrow, or"," ",`
`,e.jsx(i,{children:"PageUp"})," / ",e.jsx(i,{children:"PageDown"}),"."]})}),`
`,e.jsx(u,{of:f,sourceState:"shown"}),`
`,e.jsx(t.Sizers,{of:a,wrapper:"Field"}),`
`,e.jsx(t.FormLibraryDemos,{of:"Slider",fieldName:"index",initialValue:"8.9",children:({props:d,error:p})=>e.jsx(c,{...d,label:"Handicap index",hint:({value:r})=>r===0?"scratch":r<0?`+${r*-1}`:r,error:p,min:-11.1,max:54,step:.1})}),`
`,e.jsx(t.KeyboardInteractions,{keys:[["Tab",'Focuses/blurs the <ComponentName of="Slider" />'],[["↑","→"],"Increments the value by a `step`"],[["↓","←"],"Decrements the value by a `step`"],[["Shift+↑","Shift+→","PageUp"],"Increments the value by `leapSteps`"],[["Shift+↓","Shift+←","PageDown"],"Decrements the value by `leapSteps`"],["Home","Sets the value to `min`"],["End","Sets the value to `max`"],["Esc","Reverts the value to what it was before the most recent focus"]]})]})}function I(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(m,{...s})}):m(s)}function n(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default};
