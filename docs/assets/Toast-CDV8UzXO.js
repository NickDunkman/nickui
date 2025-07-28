import{j as o,M as h,S as a,C as r}from"./blocks-Dj9gbwRj.js";import{useMDXComponents as l}from"./index-CHE5qSQ4.js";import{B as u}from"./Button-Byu0ZU9L.js";import{D as t}from"./index-DmnqalqK.js";import{S as i,T as p,t as d,A as m,C as f}from"./Toast.stories-Ra9Y3_wm.js";import"./iframe-BuPrAHyZ.js";import"./index-BIu5lcww.js";import"./client-DTBwagFx.js";import"./index-DOz55NW-.js";import"./index-BKq8PzBJ.js";import"./randomId-Dfhrkieu.js";function c(s){const e={a:"a",code:"code",h2:"h2",p:"p",...l(),...s.components};return t||n("Docs",!1),t.ComponentHeading||n("Docs.ComponentHeading",!0),t.FauxCanvas||n("Docs.FauxCanvas",!0),t.Flavoring||n("Docs.Flavoring",!0),t.TableOfContents||n("Docs.TableOfContents",!0),o.jsxs(o.Fragment,{children:[o.jsx(h,{title:"Notices/Toast",of:i}),`
`,o.jsx(t.ComponentHeading,{of:"Toast"}),`
`,o.jsxs(e.p,{children:["A ",o.jsx(t,{of:"Toast"}),` is a temporary notice that animates into the corner of the
screen.`]}),`
`,o.jsxs(e.p,{children:["This component is powered by the ",o.jsx(e.a,{href:"https://sonner.emilkowal.ski",rel:"nofollow",children:"Sonner"}),` library
created by Emil Kowalski, layering on the look & feel of NickUI.`]}),`
`,o.jsx("div",{className:"sb-unstyled",children:o.jsx(p,{})}),`
`,o.jsx(t.FauxCanvas,{children:o.jsx(u,{onClick:()=>d({title:"This is a toast",body:"Open as many as you want! They’ll stack up. Hover to get the option to dismiss immediately."}),children:o.jsx(e.p,{children:"Pop a Toast"})})}),`
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
`,o.jsx(t.Flavoring,{of:i}),`
`,o.jsx(e.h2,{id:"asynchronous-toasts",children:"Asynchronous Toasts"}),`
`,o.jsxs(e.p,{children:["If you want your ",o.jsx(t,{of:"Toast"}),` to have a loading state while an async task
completes, you can use `,o.jsx(e.code,{children:"toast.promise()"}),`. Pass a promise which resolves with the
props you want to pass to the `,o.jsx(t,{of:"Toast"})," when it finishes."]}),`
`,o.jsx(r,{of:m,sourceState:"shown",source:{language:"tsx",code:`
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
`,o.jsx(r,{of:f,sourceState:"shown",source:{language:"tsx",code:`
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

`}})]})}function S(s={}){const{wrapper:e}={...l(),...s.components};return e?o.jsx(e,{...s,children:o.jsx(c,{...s})}):c(s)}function n(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
