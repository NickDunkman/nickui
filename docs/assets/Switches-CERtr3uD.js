import{j as e,M as p,C as n,S as r}from"./blocks-R-MRhTR5.js";import{useMDXComponents as d}from"./index-B55W4IUd.js";import{D as o}from"./index-vQz8d2-S.js";import{s as i,S as l,a as m,c as x}from"./Switches.stories-CqAT5QyE.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-C0VeZLsT.js";import"./index-BjBQ9-e5.js";import"./client-DNYhGbiH.js";import"./Button-Ux8cbQnl.js";import"./index-DqLhOWtd.js";import"./index-V48DHmLJ.js";import"./Switch-BeifBjUN.js";import"./CheckableFormControl-B9_vkbgP.js";import"./fieldA11y-IXtqdaYQ.js";import"./randomId-Dfhrkieu.js";import"./CheckedField-D9h8praF.js";import"./useElementBounds-BkKfoHSo.js";import"./AllSizersStoryWrapper-BxMOK3L_.js";import"./getStoryArgTypes-xnGM9Mjx.js";import"./CheckableFormControls-CNFp67Od.js";import"./Fieldset-Hw3SFM8V.js";function c(s){const t={code:"code",h2:"h2",p:"p",span:"span",strong:"strong",...d(),...s.components};return o||a("Docs",!1),o.ComponentHeading||a("Docs.ComponentHeading",!0),o.ControlStates||a("Docs.ControlStates",!0),o.FauxCanvas||a("Docs.FauxCanvas",!0),o.FormLibraryDemos||a("Docs.FormLibraryDemos",!0),o.Props||a("Docs.Props",!0),o.Sizers||a("Docs.Sizers",!0),o.TableOfContents||a("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(o.ComponentHeading,{of:"Switches"}),`
`,e.jsx("div",{children:e.jsxs(t.p,{children:["Renders multiple ",e.jsx(o,{of:"Switch"})," that perform as one field in a"," ",`
`,e.jsx(o,{of:"Fieldset"}),"."]})}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(l,{label:"Notifications",defaultValue:"major,minor",options:[{value:"major",label:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"Major"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x.x"})," ","releases"]})},{value:"minor",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x."}),e.jsx(t.strong,{children:"Minor"}),e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:".x"})," ","releases"]})},{value:"patch",label:e.jsxs(e.Fragment,{children:[e.jsx(t.span,{className:"text-gray-400","aria-hidden":!0,children:"x.x."}),e.jsx(t.strong,{children:"Patch"})," releases"]})}]})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:i,nativeBase:"input",wrapper:"Fieldset"}),`
`,e.jsx(o.ControlStates,{of:i,valuable:!0,sourceState:"hidden",note:"Note: while you can disable individual switches as shown in sections below, using `disabled={true}` will disable the entire field by forcing all child switches to be disabled."}),`
`,e.jsx(t.h2,{id:"adding-switches",children:"Adding switches"}),`
`,e.jsxs(t.p,{children:["For the standard look & feel, use the ",e.jsx(t.code,{children:"options"}),` prop to configure the individual
switches. `,e.jsx(o,{of:"Switches"})," will manage the interior layout."]}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[`To customize the switch controls, such as to use a different component for the
individual switches, call the props differently, or add other elements, you can
pass a `,e.jsx(t.code,{children:"render"})," function instead of using ",e.jsx(t.code,{children:"options"}),"."]}),`
`,e.jsx("strong",{children:e.jsx(t.p,{children:`As shown, it’s important to use the callback provided to pass props down to
the individual switches, so that group is functional.`})}),`
`,e.jsx(n,{of:x,sourceState:"none"}),`
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
`,e.jsx(o.Sizers,{of:i,wrapper:"Fieldset"}),`
`,e.jsx(o.FormLibraryDemos,{of:"Switches",fieldName:"preShotRoutine",children:({props:h,error:u})=>e.jsx(l,{...h,label:"Pre-shot routine",hint:"Try editting me!",error:u,options:[{value:"lie",label:"1. Evaluate the lie"},{value:"imagine",label:"2. Imagine the shot"},{value:"target",label:"3. Pick a target"},{value:"club",label:"4. Choose club"},{value:"position",label:"5. Position stance relative to the ball & shot type"},{value:"align",label:"6. Align feet, hips, shoulders to the target"},{value:"flare",label:"7. Flare front foot without affecting other body alignment"},{value:"grip",label:"8. Grip the club according to the shot type"},{value:"waggle",label:"9. One club-path waggle"},{value:"fixate",label:"10. Fixate mind on target"},{value:"go",label:"11. Go"}]})})]})}function H(s={}){const{wrapper:t}={...d(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}function a(s,t){throw new Error("Expected "+(t?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
