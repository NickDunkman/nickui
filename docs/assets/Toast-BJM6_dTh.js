import{j as o,M as l,S as i,C as a}from"./blocks-DHJpphBe.js";import{useMDXComponents as c}from"./index-FQKCrZxT.js";import{B as u}from"./Button-Czvkwuy9.js";import{D as e}from"./index-B3uCnxGK.js";import{S as d,T as h,t as p,A as m,a as f,C as x}from"./Toast.stories-BpYENaDP.js";import"./iframe-BLM9_nYH.js";import"./index-tMucB5Yb.js";import"./client-Dfg0LslM.js";import"./index-BPTtCm5M.js";import"./index-BGW97fss.js";import"./randomId-Dfhrkieu.js";function r(s){const t={a:"a",code:"code",h2:"h2",p:"p",...c(),...s.components};return e||n("Docs",!1),e.ComponentHeading||n("Docs.ComponentHeading",!0),e.FauxCanvas||n("Docs.FauxCanvas",!0),e.TableOfContents||n("Docs.TableOfContents",!0),o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Notices/Toast",of:d}),`
`,o.jsx(e.ComponentHeading,{of:"Toast"}),`
`,o.jsxs(t.p,{children:["A ",o.jsx(e,{of:"Toast"}),` is a temporary notice that animates into the corner of the
screen.`]}),`
`,o.jsxs(t.p,{children:["This component is powered by the ",o.jsx(t.a,{href:"https://sonner.emilkowal.ski",rel:"nofollow",children:"Sonner"}),` library
created by Emil Kowalski, layering on the look & feel of NickUI.`]}),`
`,o.jsx("div",{className:"sb-unstyled",children:o.jsx(h,{})}),`
`,o.jsx(e.FauxCanvas,{children:o.jsx(u,{onClick:()=>p({title:"This is a toast",body:"Open as many as you want! They’ll stack up. Hover to get the option to dismiss immediately."}),children:o.jsx(t.p,{children:"Open a Toast"})})}),`
`,o.jsx(e.TableOfContents,{}),`
`,o.jsx(t.h2,{id:"setup",children:"Setup"}),`
`,o.jsxs(t.p,{children:["To show toasts, you must mount the ",o.jsx(e,{of:"Toaster"}),` somewhere in your
application. It’s responsible for rendering the toasts as you add them.`]}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(e,{of:"Toaster"}),` component takes many of the same props as
`,o.jsx(t.a,{href:"https://sonner.emilkowal.ski/toaster",rel:"nofollow",children:"Sonner's Toaster"}),` component, which you
can use to change the screen placement, how big the stack can get, etc. Some
style- and content- related props have been omitted, since NickUI is adding its
own look & feel.`]}),`
`,o.jsx(i,{dark:!0,language:"tsx",code:`
  import { Toaster } from 'nickui';
  ...
  <MyApp>
    ...
    <Toaster position="bottom-right" visibleToasts={5} />
  </MyApp>
`}),`
`,o.jsx(t.h2,{id:"triggering-a-toast",children:"Triggering a toast"}),`
`,o.jsxs(t.p,{children:["Just call the ",o.jsx(t.code,{children:"toast"}),` function. It’s a regular function, so it can be called
from anywhere, even outside of a render context!`]}),`
`,o.jsx(i,{dark:!0,language:"tsx",code:`
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
`,o.jsx(t.h2,{id:"flavors",children:"Flavors"}),`
`,o.jsxs(t.p,{children:["Coloring is done via the ",o.jsx(t.code,{children:"flavor"})," prop. You can pass ",o.jsx(t.code,{children:'"neutral"'}),` (the default),
`,o.jsx(t.code,{children:'"positive"'}),", ",o.jsx(t.code,{children:'"caution"'})," or ",o.jsx(t.code,{children:'"negative"'}),"."]}),`
`,o.jsx(a,{of:m,source:{language:"tsx",code:`
    import { Button, toast } from 'nickui';
    ...
    <div className="flex gap-4 flex-wrap">
      <Button onClick={() => toast({ title: 'Neutral Toast', body: 'Lorem ipsum ...' })} />
        Neutral Toast
      </Button>
      <Button onClick={() => toast({ title: 'Positive Toast', body: 'Lorem ipsum ...' })} />
        Positive Toast
      </Button>
      <Button onClick={() => toast({ title: 'Caution Toast', body: 'Lorem ipsum ...' })} />
        Caution Toast
      </Button>
      <Button onClick={() => toast({ title: 'Negative Toast', body: 'Lorem ipsum ...' })} />
        Negative Toast
      </Button>
    </div>
  `}}),`
`,o.jsx(t.h2,{id:"asynchronous-toasts",children:"Asynchronous Toasts"}),`
`,o.jsxs(t.p,{children:["If you want your ",o.jsx(e,{of:"Toast"}),` to have a loading state while an async task
completes, you can use `,o.jsx(t.code,{children:"toast.promise()"}),`. Pass a promise which resolves with the
props you want to pass to the `,o.jsx(e,{of:"Toast"})," when it finishes."]}),`
`,o.jsx(a,{of:f,sourceState:"shown",source:{language:"tsx",code:`
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
`,o.jsxs(t.p,{children:[`There are plenty of customization options. You can override the props passed to
the `,o.jsx(e,{of:"Toast"}),` during the loading phase, and you can pass any of the
options that sonner offers, like customizing the `,o.jsx(t.code,{children:"duration"}),`, or whether it’s
`,o.jsx(t.code,{children:"dismissible"}),"."]}),`
`,o.jsxs(t.p,{children:[`The promise you provide should handle errors within its chain. For example, you
could catch an HTTP error and then resolve with `,o.jsx(t.code,{children:"flavor: 'negative'"}),"."]}),`
`,o.jsx(a,{of:x,sourceState:"shown",source:{language:"tsx",code:`
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

`}})]})}function S(s={}){const{wrapper:t}={...c(),...s.components};return t?o.jsx(t,{...s,children:o.jsx(r,{...s})}):r(s)}function n(s,t){throw new Error("Expected "+(t?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
