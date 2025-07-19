import{j as e,M as l,C as u,S as a}from"./blocks-D46m_bFY.js";import{useMDXComponents as d}from"./index-D4sedzlQ.js";import{D as n}from"./index-B36UopcX.js";import{S as r,a as i,A as h}from"./Shout.stories-COLzjOtJ.js";import"./iframe-Si2UkeX9.js";import"./index-hjKXlARp.js";import"./client-DbgNRuDz.js";import"./index-oXvcZMk4.js";import"./Button-DQJggatp.js";import"./index-DpvBQJGL.js";function c(s){const o={code:"code",h2:"h2",p:"p",...d(),...s.components};return n||t("Docs",!1),n.ComponentHeading||t("Docs.ComponentHeading",!0),n.FauxCanvas||t("Docs.FauxCanvas",!0),n.Props||t("Docs.Props",!0),n.Sizing||t("Docs.Sizing",!0),n.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.ComponentHeading,{of:"Shout"}),`
`,e.jsxs(o.p,{children:[`Displays an important notice to the user, such as an error message, warning, or
congratulatory message. For a less prominent notice, use `,e.jsx(n,{of:"Callout"}),"."]}),`
`,e.jsx(n.FauxCanvas,{children:e.jsx(i,{flavor:i.flavor.nope,role:"alert","aria-live":"assertive",children:e.jsx(o.p,{children:"Fore!"})})}),`
`,e.jsx(n.TableOfContents,{}),`
`,e.jsx(n.Props,{of:r,nativeBase:"div"}),`
`,e.jsx(o.h2,{id:"flavors",children:"Flavors"}),`
`,e.jsxs(o.p,{children:["Coloring is done via the ",e.jsx(o.code,{children:"flavor"})," prop. You can pass ",e.jsx(o.code,{children:'"info"'}),` (the default),
`,e.jsx(o.code,{children:'"yep"'}),", ",e.jsx(o.code,{children:'"maybe"'})," or ",e.jsx(o.code,{children:'"nope"'}),"."]}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(n.Sizing,{of:r}),`
`,e.jsx(o.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsxs(o.p,{children:[`Since Shouts are intended to be prominent messages & are often added to the page
after the user takes some kind of action, such as a success or error message
after a form submission, you should take care to use the `,e.jsx(o.code,{children:"role"})," and ",e.jsx(o.code,{children:"aria-live"}),`
props appropriately, so that your message is announced to the user in the right
way.`]}),`
`,e.jsx(o.p,{children:`When adding success message, you probably want it to be announced to the user,
but without yanking their attention if they’re busy with something else:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="status"
    aria-live="polite"
    flavor={Shout.flavor.yep} 
  >
    Hey that was a good form submission 👍
  </Shout>
`}),`
`,e.jsx(o.p,{children:`When adding an error message, you probably want it to be announced in an urgent
way:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="alert"
    aria-live="assertive"
    flavor={Shout.flavor.nope} 
  >
    There was a problem with your visa application submission. If you don’t
    fix and resubmit, you will be apprehended at the border.
  </Shout>
`})]})}function C(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(c,{...s})}):c(s)}function t(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{C as default};
