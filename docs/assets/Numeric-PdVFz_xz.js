import{j as e,M as m,C as i,S as a}from"./blocks-Cu13-jSp.js";import{useMDXComponents as d}from"./index-CB6ZV6Kh.js";import{D as t}from"./index-NqWXr5SC.js";import{s as r,N as l,e as f,a as p}from"./Numeric.stories-BPJ2RhkS.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D7K3DBLU.js";import"./index-DoG65Fal.js";import"./client-C1uJbZbB.js";import"./Button-CM4tt_cv.js";import"./index-BfBaVl6L.js";import"./index-69CadyKP.js";import"./AllSizersStoryWrapper-C7b1EBiS.js";import"./getStoryArgTypes-DAe_MfAd.js";import"./expectDelayedValue-CFw1Z6Kf.js";import"./Field-CtUzKpbc.js";import"./styles-DSTw06ym.js";import"./fieldA11y-BMp6F0pm.js";import"./randomId-Dfhrkieu.js";import"./useElementBounds-D6FJn0lD.js";import"./fireInputChange-BU1kNzof.js";function c(s){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return t||o("Docs",!1),t.ComponentHeading||o("Docs.ComponentHeading",!0),t.ControlStates||o("Docs.ControlStates",!0),t.FauxCanvas||o("Docs.FauxCanvas",!0),t.FormLibraryDemos||o("Docs.FormLibraryDemos",!0),t.KeyboardInteractions||o("Docs.KeyboardInteractions",!0),t.Props||o("Docs.Props",!0),t.Sizers||o("Docs.Sizers",!0),t.TableOfContents||o("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(t.ComponentHeading,{of:"Numeric"}),`
`,e.jsx(n.p,{children:"A form control that allows users to enter a numeric value."}),`
`,e.jsx(n.p,{children:`The displayed value is automatically formatted according to the specified
configuration, though will “deformat” as you edit the field, since it can feel
disorienting when the changes don’t match your keystrokes.`}),`
`,e.jsx(t.FauxCanvas,{children:e.jsx(l,{defaultValue:"1234567.89"})}),`
`,e.jsx(t.TableOfContents,{}),`
`,e.jsx(t.Props,{of:r,nativeBase:"input",wrapper:"Field"}),`
`,e.jsx(t.ControlStates,{of:r,valuable:!0,note:`
  Note: when controlled, <ComponentName of="Numeric" /> behaves slightly
  differently from other form controls. Since the input’s value needs to be
  disconnected from the controlled \`value\` to enable number formatting,
  the input’s value can change even if you aren’t passing in the new
  controlled value. However, if you do pass in a numerically different
  controlled value, everything will cascade accordingly.
`}),`
`,e.jsx(n.h2,{id:"number-formatting--constraints",children:"Number formatting & constraints"}),`
`,e.jsxs(n.p,{children:["To customize the format, you can use a combination of the ",e.jsx(n.code,{children:"decimalPoint"}),`
(defaults to `,e.jsx(n.code,{children:'"."'}),"), and ",e.jsx(n.code,{children:"thousandsSeparator"})," (defaults to ",e.jsx(n.code,{children:'","'}),") props."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"decimalPlaces"})," prop defaults to ",e.jsx(n.code,{children:"{ min: 0, max: Infinity }"})," and configures:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the maximum number of decimal places the user can enter"}),`
`,e.jsx(n.li,{children:'the number of "placeholder" decimal places that are suggested as you type'}),`
`,e.jsxs(n.li,{children:["the number of decimal places always included on ",e.jsx(n.code,{children:"onChange(event.target.value)"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"decimalPlaces"})," can also be a single number, to use the same for both min & max."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsxs(n.p,{children:[`By default, negative values are not allowed, since number fields disallow them
more often than not. However, you can allow negatives using the `,e.jsx(n.code,{children:"allowNegatives"}),`
prop.`]}),`
`,e.jsx(n.p,{children:`Keep in mind that if you allow negatives, the user won’t be able to use the
simpler numeric keyboard on mobile devices, since it doesn’t include a key for
the negative sign.`}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsxs(n.p,{children:["You can pass any of these forms in through either the ",e.jsx(n.code,{children:"value"})," or ",e.jsx(n.code,{children:"defaultValue"}),`
props:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"undefined"})}),`
`,e.jsxs(n.li,{children:["a ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsxs(n.li,{children:["a numeric ",e.jsx(n.code,{children:"string"})," such as ",e.jsx(n.code,{children:'"1234.56"'})," or ",e.jsx(n.code,{children:'""'}),`. It should be parseable as a
`,e.jsx(n.code,{children:"Number()"}),". For example, while ",e.jsx(n.code,{children:'"17,50"'}),` is how a number might be formatted in
many countries, it’s not a number as far as javascript is concerned (`,e.jsx(n.code,{children:'"17.50"'}),`
is).`]}),`
`]}),`
`,e.jsxs(n.p,{children:["When the user updates edits the field, use the ",e.jsx(n.code,{children:"onChange"}),` handler to receive the
updated value. `,e.jsx(n.code,{children:"event.target.value"})," is ",e.jsx(n.strong,{children:"always"}),` a string in javascript, so the
updated value will be in the form of a string.`]}),`
`,e.jsx(n.p,{children:"You might choose to just use strings through, like this:"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState('1234.56');

  <Numeric
    label="My number field"
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />

`}),`
`,e.jsx(n.p,{children:"Or, you could convert updated values back to numbers, like this:"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<number | undefined>(1234.56);

  <Numeric
    label="My number field"
    value={value}
    onChange={(event) => setValue(
      event.target.value === '' ? undefined : Number(event.target.value)
    )}
  />

`}),`
`,e.jsx(t.Sizers,{of:r,wrapper:"Field"}),`
`,e.jsx(t.FormLibraryDemos,{of:"Numeric",fieldName:"hole12Score",initialValue:"10",children:({props:u,error:h})=>e.jsx(l,{...u,label:"Typical score on the danged 12th hole",hint:"Try editting me!",error:h,decimalPlaces:0})}),`
`,e.jsx(t.KeyboardInteractions,{keys:[["Tab",'Focuses/blurs the <ComponentName of="Numeric" />'],["↑","Increments the value by 1"],["↓","Decrements the value by 1"],["Shift+↑","Increments the value by 10"],["Shift+↓","Decrements the value by 10"]]})]})}function K(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}function o(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{K as default};
