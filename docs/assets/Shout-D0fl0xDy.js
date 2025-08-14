import{j as e,M as u,S as i}from"./blocks-R-MRhTR5.js";import{useMDXComponents as c}from"./index-B55W4IUd.js";import{D as o}from"./index-vQz8d2-S.js";import{s as r,S as d}from"./Shout.stories-CFbDz1BA.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-C0VeZLsT.js";import"./index-BjBQ9-e5.js";import"./client-DNYhGbiH.js";import"./Button-Ux8cbQnl.js";import"./index-DqLhOWtd.js";import"./index-V48DHmLJ.js";import"./AllSizersStoryWrapper-BxMOK3L_.js";import"./getStoryArgTypes-xnGM9Mjx.js";function a(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return o||s("Docs",!1),o.ComponentHeading||s("Docs.ComponentHeading",!0),o.FauxCanvas||s("Docs.FauxCanvas",!0),o.Flavoring||s("Docs.Flavoring",!0),o.Props||s("Docs.Props",!0),o.Sizers||s("Docs.Sizers",!0),o.TableOfContents||s("Docs.TableOfContents",!0),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:r}),`
`,e.jsx(o.ComponentHeading,{of:"Shout"}),`
`,e.jsxs(t.p,{children:[`Displays an important notice to the user, such as an error message, warning, or
congratulatory message. For a less prominent notice, use `,e.jsx(o,{of:"Aside"}),"."]}),`
`,e.jsx(o.FauxCanvas,{children:e.jsx(d,{flavor:"negative",role:"alert","aria-live":"assertive",children:e.jsx(t.p,{children:"Fore!"})})}),`
`,e.jsx(o.TableOfContents,{}),`
`,e.jsx(o.Props,{of:r,nativeBase:"div"}),`
`,e.jsx(o.Flavoring,{of:r}),`
`,e.jsx(o.Sizers,{of:r}),`
`,e.jsx(t.h2,{id:"accessibility-considerations",children:"Accessibility considerations"}),`
`,e.jsxs(t.p,{children:[`Since Shouts are intended to be prominent messages & are often added to the page
after the user takes some kind of action, such as a success or error message
after a form submission, you should take care to use the `,e.jsx(t.code,{children:"role"})," and ",e.jsx(t.code,{children:"aria-live"}),`
props appropriately, so that your message is announced to the user in the right
way.`]}),`
`,e.jsx(t.p,{children:`When adding success message, you probably want it to be announced to the user,
but without yanking their attention if they’re busy with something else:`}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
  <Shout
    role="status"
    aria-live="polite"
    flavor="positive"
  >
    Hey that was a good form submission 👍
  </Shout>
`}),`
`,e.jsx(t.p,{children:`When adding an error message, you probably want it to be announced in an urgent
way:`}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
  <Shout
    role="alert"
    aria-live="assertive"
    flavor="negative"
  >
    There was a problem with your visa application submission. If you don’t
    fix and resubmit, you will be apprehended at the border.
  </Shout>
`})]})}function D(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function s(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};
