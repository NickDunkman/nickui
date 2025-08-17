import{j as e,M as p,C as n,S as r}from"./blocks-CSYGevDn.js";import{useMDXComponents as d}from"./index-ChQMZ8L2.js";import{D as s}from"./index-BYnkfXks.js";import{s as i,S as l,a as m,c as f}from"./Switches.stories-CWJcCQCi.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-m3ARp835.js";import"./index-CpQ98Ntj.js";import"./client--W-99Z1i.js";import"./Button-SnuB6XX-.js";import"./index-XybfoPcz.js";import"./index-DM2Rz7DM.js";import"./Switch-NYpKS6fc.js";import"./CheckableFormControl-C5Ezlkd3.js";import"./fieldA11y-CwFZMBjx.js";import"./randomId-Dfhrkieu.js";import"./CheckedField-D4PV6oKB.js";import"./useElementBounds-CE6a5ktT.js";import"./AllSizersStoryWrapper-zl3vKeFP.js";import"./getStoryArgTypes-zAxgZkbZ.js";import"./CheckableFormControls-BGengjw_.js";import"./Fieldset-R7Y6tlF2.js";function c(a){const t={code:"code",h2:"h2",p:"p",span:"span",strong:"strong",...d(),...a.components};return s||o("Docs",!1),s.ComponentHeading||o("Docs.ComponentHeading",!0),s.ControlStates||o("Docs.ControlStates",!0),s.FauxCanvas||o("Docs.FauxCanvas",!0),s.FormLibraryDemos||o("Docs.FormLibraryDemos",!0),s.KeyboardInteractions||o("Docs.KeyboardInteractions",!0),s.Props||o("Docs.Props",!0),s.Sizers||o("Docs.Sizers",!0),s.TableOfContents||o("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(s.ComponentHeading,{of:"Switches"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(s,{of:"Switch"})," that perform as one field in a"," ",`
`,e.jsx(s,{of:"Fieldset"}),"."]})}),`
`,e.jsx(s.FauxCanvas,{children:e.jsx(l,{label:"Notifications",defaultValue:"major,minor",options:[{value:"major",label:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"Major"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x.x"})," ","releases"]})},{value:"minor",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x."}),e.jsx(t.strong,{children:"Minor"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x"})," ","releases"]})},{value:"patch",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x.x."}),e.jsx(t.strong,{children:"Patch"})," releases"]})}]})}),`
`,e.jsx(s.TableOfContents,{}),`
`,e.jsx(s.Props,{of:i,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(s.ControlStates,{of:i,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual switches as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child switches to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-switches",children:"Adding switches"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
switches. `,e.jsx(s,{of:"Switches"})," will manage the interior layout."]}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the switch controls, such as to use a different component for the
individual switches, call the props differently, or add other elements, you can
pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual switches, so that group is functional.`})}),`
`,e.jsx(n,{of:f,sourceState:"none"}),`
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
`,e.jsx(s.Sizers,{of:i,wrapper:"Fieldset"}),`
`,e.jsx(s.FormLibraryDemos,{of:"Switches",fieldName:"preShotRoutine",children:({props:h,error:u})=>e.jsx(l,{...h,label:"Pre-shot routine",hint:"Try editting me!",error:u,options:[{value:"lie",label:"1. Evaluate the lie"},{value:"imagine",label:"2. Imagine the shot"},{value:"target",label:"3. Pick a target"},{value:"club",label:"4. Choose club"},{value:"position",label:"5. Position stance relative to the ball & shot type"},{value:"align",label:"6. Align feet, hips, shoulders to the target"},{value:"flare",label:"7. Flare front foot without affecting other body alignment"},{value:"grip",label:"8. Grip the club according to the shot type"},{value:"waggle",label:"9. One club-path waggle"},{value:"fixate",label:"10. Fixate mind on target"},{value:"go",label:"11. Go"}]})}),`
`,e.jsx(s.KeyboardInteractions,{keys:[["Tab","Cycles focus between the individual switches"],["Space","Toggles the checked state of the focused switch"]]})]})}function A(a={}){const{wrapper:t}={...d(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(c,{...a})}):c(a)}function o(a,t){throw new Error("Expected "+(t?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};
