import{j as e,M as u,S as a}from"./blocks-Cl-MP6M2.js";import{useMDXComponents as c}from"./index-D22c1IwK.js";import{D as o}from"./index-DpMdiv1H.js";import{s as r,S as d}from"./Shout.stories-DLodW4T-.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-BHWhhQOG.js";import"./index-DtW6ZbBB.js";import"./client-Dp42ze24.js";import"./index-te24yuVz.js";import"./Button-ChOiKKGk.js";import"./index-9NizuWh-.js";import"./AllSizersStoryWrapper-CfMwsrT0.js";function i(s){const n={code:"code",h2:"h2",p:"p",...c(),...s.components};return o||t("Docs",!1),o.ComponentHeading||t("Docs.ComponentHeading",!0),o.FauxCanvas||t("Docs.FauxCanvas",!0),o.Flavoring||t("Docs.Flavoring",!0),o.Props||t("Docs.Props",!0),o.Sizers||t("Docs.Sizers",!0),o.TableOfContents||t("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"Shout"}),`
`,e.jsxs(n.p,{children:[`Displays an important notice to the user, such as an error message, warning, or
congratulatory message. For a less prominent notice, use `,e.jsx(o,{of:"Aside"}),"."]}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{flavor:"negative",role:"alert","aria-live":"assertive",children:e.jsx(n.p,{children:"Fore!"})})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"div"}),`
`,e.jsx(o.Flavoring,{of:r}),`
`,e.jsx(o.Sizers,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsxs(n.p,{children:[`Since Shouts are intended to be prominent messages & are often added to the page
after the user takes some kind of action, such as a success or error message
after a form submission, you should take care to use the `,e.jsx(n.code,{children:"role"})," and ",e.jsx(n.code,{children:"aria-live"}),`
props appropriately, so that your message is announced to the user in the right
way.`]}),`
`,e.jsx(n.p,{children:`When adding success message, you probably want it to be announced to the user,
but without yanking their attention if they’re busy with something else:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="status"
    aria-live="polite"
    flavor="positive"
  >
    Hey that was a good form submission 👍
  </Shout>
`}),`
`,e.jsx(n.p,{children:`When adding an error message, you probably want it to be announced in an urgent
way:`}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
  <Shout
    role="alert"
    aria-live="assertive"
    flavor="negative"
  >
    There was a problem with your visa application submission. If you don’t
    fix and resubmit, you will be apprehended at the border.
  </Shout>
`})]})}function S(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}function t(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
