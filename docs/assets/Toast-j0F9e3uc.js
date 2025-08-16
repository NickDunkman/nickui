import{j as o,M as h,S as a,C as i}from"./blocks-CWvdqUdK.js";import{useMDXComponents as l}from"./index-BYAD_ZY7.js";import{B as u}from"./Button-C5W9ryJY.js";import{D as t}from"./index-BlaeOFDn.js";import{s as r,T as d,t as p,a as m,c as f}from"./Toast.stories-DwO-FWpt.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-DHsgvQHS.js";import"./index-DPkyb4R0.js";import"./client-W-Z4jn2C.js";import"./index-Ct2g6Uhl.js";import"./index-CE0t2Fog.js";import"./randomId-Dfhrkieu.js";function c(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...s.components};return t||n("Docs",!1),t.ComponentHeading||n("Docs.ComponentHeading",!0),t.FauxCanvas||n("Docs.FauxCanvas",!0),t.Flavoring||n("Docs.Flavoring",!0),t.TableOfContents||n("Docs.TableOfContents",!0),o.jsxs(o.Fragment,{children:[o.jsx(h,{title:"Notices/Toast",of:r}),`
`,o.jsx(t.ComponentHeading,{of:"Toast"}),`
`,o.jsxs(e.p,{children:["A ",o.jsx(t,{of:"Toast"}),` is a temporary notice that animates into the corner of the
screen.`]}),`
`,o.jsxs(e.p,{children:["This component is powered by the ",o.jsx(e.a,{href:"https://sonner.emilkowal.ski",rel:"nofollow",children:"Sonner"}),` library
created by Emil Kowalski, with these customizations:`]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:"the look & feel of NickUI"}),`
`,o.jsxs(e.li,{children:["when a toast is configured to auto-hide after some ",o.jsx(e.code,{children:"duration"}),`, its timer
pauses when another toast is opened, and then resets when it gets back to the
top of the stack. This allows the user to actually see each toast for the
desired time when successive toasts happen quickly (try it!)`]}),`
`]}),`
`,o.jsx("div",{className:"sb-unstyled",children:o.jsx(d,{})}),`
`,o.jsx(t.FauxCanvas,{children:o.jsx(u,{onClick:()=>p({title:"This is a toast",body:"Open as many as you want! They’ll stack up. Hover to get the option to dismiss immediately."}),children:o.jsx(e.p,{children:"Pop a Toast"})})}),`
`,o.jsx(t.TableOfContents,{}),`
`,o.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,o.jsxs(e.p,{children:["To show toasts, you must mount the ",o.jsx(t,{of:"Toaster"}),` somewhere in your
application. It’s responsible for rendering the toasts as you add them.`]}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(t,{of:"Toaster"}),` component takes many of the same props as
`,o.jsx(e.a,{href:"https://sonner.emilkowal.ski/toaster",rel:"nofollow",children:"Sonner's Toaster"}),` component, which you
can use to change the screen placement, how big the stack can get, etc. Some
style- and content- related props have been omitted, since NickUI is adding its
own look & feel.`]}),`
`,o.jsx(a,{dark:!0,language:"tsx",code:`
  import { Toaster } from 'nickui';
  ...
  <MyApp>
    ...
    <Toaster position="bottom-right" visibleToasts={5} />
  </MyApp>
`}),`
`,o.jsx(e.h2,{id:"triggering-a-toast",children:"Triggering a toast"}),`
`,o.jsxs(e.p,{children:["Just call the ",o.jsx(e.code,{children:"toast"}),` function. It’s a regular function, so it can be called
from anywhere, even outside of a render context!`]}),`
`,o.jsx(a,{dark:!0,language:"tsx",code:`
  import { Button, toast } from 'nickui';
  ...
  <Button
    onClick={() => toast({
      title: 'Optional title',
      body: 'The message you want to convey.'
    })}
  >
    Open a toast!
  </Button>
`}),`
`,o.jsx(t.Flavoring,{of:r}),`
`,o.jsx(e.h2,{id:"asynchronous-toasts",children:"Asynchronous Toasts"}),`
`,o.jsxs(e.p,{children:["If you want your ",o.jsx(t,{of:"Toast"}),` to have a loading state while an async task
completes, you can use `,o.jsx(e.code,{children:"toast.promise()"}),`. Pass a promise which resolves with the
props you want to pass to the `,o.jsx(t,{of:"Toast"})," when it finishes."]}),`
`,o.jsx(i,{of:m,sourceState:"shown",source:{language:"tsx",code:`
    import { Button, toast } from 'nickui';

    const successToastProps = {
      title: 'Success',
      body: 'Your request has been completed successfully!',
      flavor: 'positive',
    };

    function runTask() {
      const task = new Promise((resolve) => {
        setTimeout(() => resolve(successToastProps), 2000);
      });

      toast.promise(task);
    }

    <Button onClick={runTask}>Async Toast</Button>
  `}}),`
`,o.jsxs(e.p,{children:[`There are plenty of customization options. You can override the props passed to
the `,o.jsx(t,{of:"Toast"}),` during the loading phase, and you can pass any of the
options that sonner offers, like customizing the `,o.jsx(e.code,{children:"duration"}),`, or whether it’s
`,o.jsx(e.code,{children:"dismissible"}),"."]}),`
`,o.jsxs(e.p,{children:[`The promise you provide should handle errors within its chain. For example, you
could catch an HTTP error and then resolve with `,o.jsx(e.code,{children:"flavor: 'negative'"}),"."]}),`
`,o.jsx(i,{of:f,sourceState:"shown",source:{language:"tsx",code:`
  import { Button, toast } from 'nickui';

  const errorToastProps = {
    title: 'Failure',
    body: 'There was a problem completing your request.',
    flavor: 'negative',
  };

  function runTask() {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('oh no!');
      }, 2000);
    });

    const taskWithErrorHandling = task.catch(() => errorToastProps);

    toast.promise(taskWithErrorHandling, {
      loadingToastProps: {
        body: <>We’re working on it &hellip;</>,
      },
      sonnerOptions: {
        dismissible: false,
        duration: 3000,
      },
    });
  }

  <Button onClick={runTask}>Customized async Toast</Button>

`}})]})}function P(s={}){const{wrapper:e}={...l(),...s.components};return e?o.jsx(e,{...s,children:o.jsx(c,{...s})}):c(s)}function n(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{P as default};
