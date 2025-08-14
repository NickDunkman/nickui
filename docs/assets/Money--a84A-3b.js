import{j as e,M as p,C as i,S as a}from"./blocks-DILD-YPA.js";import{useMDXComponents as u}from"./index-BSWXvihS.js";import{D as t}from"./index-BO77VyQa.js";import{s,M as l,c,a as f}from"./Money.stories-DmAQzjBY.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-D_dx4C3o.js";import"./index-MwUvjmfi.js";import"./client-CNIK_tGj.js";import"./Button-DymO3C48.js";import"./index-Bl3bBT5F.js";import"./index-D1YO4riR.js";import"./AllSizersStoryWrapper-M2xuQLnL.js";import"./getStoryArgTypes-CvpAwH8w.js";import"./Field-DLgvBtFY.js";import"./styles-B9mBw5cT.js";import"./fieldA11y-C3gyBWsB.js";import"./randomId-Dfhrkieu.js";import"./useElementBounds-D-KkDKt4.js";import"./fireInputChange-BU1kNzof.js";function d(o){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...u(),...o.components};return t||r("Docs",!1),t.ComponentHeading||r("Docs.ComponentHeading",!0),t.ControlStates||r("Docs.ControlStates",!0),t.FauxCanvas||r("Docs.FauxCanvas",!0),t.FormLibraryDemos||r("Docs.FormLibraryDemos",!0),t.Props||r("Docs.Props",!0),t.Sizers||r("Docs.Sizers",!0),t.TableOfContents||r("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:s}),`
`,e.jsx(t.ComponentHeading,{of:"Money"}),`
`,e.jsx(n.p,{children:"A form control that allows users to enter a monetary amount."}),`
`,e.jsx(n.p,{children:`The displayed value is automatically formatted according to the specified
configuration, though will “deformat” as you edit the field, since it can feel
disorienting when the changes don’t match your keystrokes.`}),`
`,e.jsxs(n.p,{children:[`If you’re interested, check out the
`,e.jsx(n.a,{href:"/docs/form-controls-money--how-it-works",children:"How it works"})," write-up!"]}),`
`,e.jsx(t.FauxCanvas,{children:e.jsx(l,{defaultValue:"1234567.89"})}),`
`,e.jsx(t.TableOfContents,{}),`
`,e.jsx(t.Props,{of:s,nativeBase:"input",wrapper:"Field"}),`
`,e.jsx(t.ControlStates,{of:s,valuable:!0,note:`
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
`,e.jsx(i,{of:c,source:{language:"tsx",code:c.parameters.source}}),`
`,e.jsxs(n.p,{children:[`By default, negative values are not allowed, since typically, a monetary field
is either positive (like in a deposit form), or negative represented with a
positive value (like in a withdrawal form). However, you can allow negatives
using the `,e.jsx(n.code,{children:"allowNegatives"})," prop."]}),`
`,e.jsx(n.p,{children:`Keep in mind that if you allow negatives, the user won’t be able to use the
simpler numeric keyboard on mobile devices, since it doesn’t include a key for
the negative sign.`}),`
`,e.jsx(i,{of:f}),`
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

  <Money
    label="My money field"
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />

`}),`
`,e.jsx(n.p,{children:"Or, you could convert updated values back to numbers, like this:"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<number | undefined>(1234.56);

  <Money
    label="My money field"
    value={value}
    onChange={(event) => setValue(
      event.target.value === '' ? undefined : Number(event.target.value)
    )}
  />

`}),`
`,e.jsx(t.Sizers,{of:s,wrapper:"Field"}),`
`,e.jsx(t.FormLibraryDemos,{of:"Money",fieldName:"greensFees",initialValue:"137.00",children:({props:h,error:m})=>e.jsx(l,{...h,label:"Greens fees",hint:"Try editting me!",error:m})})]})}function L(o={}){const{wrapper:n}={...u(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}function r(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};
