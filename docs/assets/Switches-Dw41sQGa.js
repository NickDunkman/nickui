import{j as e,M as d,C as n,S as r}from"./blocks-Cp0tvt2h.js";import{useMDXComponents as c}from"./index-bB_oBfsq.js";import{D as o}from"./index-B5FBS_2D.js";import{S as s,a as h,b as u,C as p}from"./Switches.stories-B8eB0DMx.js";import"./iframe-CRdPcmem.js";import"./index-ov01KPoN.js";import"./client-RSY5aokv.js";import"./index-CPo7Iu7v.js";import"./Button-CbDYdh7U.js";import"./index-BN3CHvKQ.js";import"./PrettyPrint-hrU16Ghp.js";import"./Switch-C4LcbfuG.js";import"./Checkbox-BeQYopvK.js";import"./CheckedField-BwIaBT2k.js";import"./useElementBounds-CVUH-xQG.js";import"./useFieldA11yIds-BRRRgCQA.js";import"./randomId-Dfhrkieu.js";import"./AllSizersStoryWrapper-CUiWJUA0.js";import"./Checkboxes-D4LXw3je.js";import"./Fieldset-BC9iXaMl.js";function l(a){const t={code:"code",h2:"h2",p:"p",span:"span",strong:"strong",...c(),...a.components};return o||i("Docs",!1),o.ComponentHeading||i("Docs.ComponentHeading",!0),o.ControlStates||i("Docs.ControlStates",!0),o.FauxCanvas||i("Docs.FauxCanvas",!0),o.FormLibraryCompatibility||i("Docs.FormLibraryCompatibility",!0),o.Props||i("Docs.Props",!0),o.Sizers||i("Docs.Sizers",!0),o.TableOfContents||i("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(o.ComponentHeading,{of:"Switches"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Switch"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(h,{label:"Notifications",defaultValue:"major,minor",options:[{value:"major",label:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"Major"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x.x"})," ","releases"]})},{value:"minor",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x."}),e.jsx(t.strong,{children:"Minor"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x"})," ","releases"]})},{value:"patch",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x.x."}),e.jsx(t.strong,{children:"Patch"})," releases"]})}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:s,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.ControlStates,{of:s,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual switches as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child switches to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-switches",children:"Adding switches"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
switches. `,e.jsx(o,{of:"Switches"})," will manage the interior layout."]}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the switch controls, such as to use a different component for the
individual switches, call the props differently, or add other elements, you can
pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual switches, so that group is functional.`})}),`
`,e.jsx(n,{of:p,sourceState:"none"}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  <Switches
    label="Please select some customizations"
    defaultValue="colorful,embiggened"
    render={(checkbox) => (
      <div className="flex flex-row items-baseline gap-x-6">
        <Switch
          {...checkbox({ value: 'colorful' })}
          label={<span className="font-bold text-blue-700">Colorful</span>}
          className="rounded-sm bg-rose-200 p-2"
        />
        <Switch
          {...checkbox({ value: 'embiggened' })}
          sizer="lg"
          label="Embiggened"
        />
        <div>
          <input type="checkbox" {...checkbox({ value: 'native' })} /> Native
        </div>
      </div>
    )}
  />
`}),`
`,e.jsx(t.h2,{id:"working-with-the-value",children:"Working with the value"}),`
`,e.jsx(t.p,{children:`The purpose of this component is to make it as easy as possible to have a
consistent look & feel for fields with multiple switches. In order to simplify
the boilerplate needed for libraries like Formik and React Hook Form, the
component’s value is a single delimited-string, & toggling each individual
switch adds or removes a particular substring.`}),`
`,e.jsx(t.p,{children:`If you want to work with an array of strings instead of a combined string, you
can convert to/from an array somewhere higher up the tree, as shown in this
example:`}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
  const [value, setValue] = React.useState<string[]>(['a', 'c']);
  //...
  <Switches
    options={[
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'D' },
    ]}
    value={value.join(',')}
    onChange={(event) => {
      setValue(event.target.value.split(','));
    }}
  />
`}),`
`,e.jsx(o.Sizers,{of:s,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryCompatibility,{of:s,fieldName:"preShotRoutine",componentProps:{label:"Pre-shot routine",hint:"Try editting me!",options:[{value:"lie",label:"1. Evaluate the lie"},{value:"target",label:"2. Pick a target"},{value:"imagine",label:"3. Imagine the shot"},{value:"club",label:"4. Choose club"},{value:"position",label:"5. Position stance relative to the ball & shot type"},{value:"align",label:"6. Align feet, hips, shoulders to the target"},{value:"flare",label:"7. Flare front foot without affecting other body alignment"},{value:"grip",label:"8. Grip the club according to the shot type"},{value:"waggle",label:"9. One club-path waggle"},{value:"fixate",label:"10. Fixate mind on target"},{value:"go",label:"11. Go"}]}})]})}function T(a={}){const{wrapper:t}={...c(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}function i(a,t){throw new Error("Expected "+(t?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};
