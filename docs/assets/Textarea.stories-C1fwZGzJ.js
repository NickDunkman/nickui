import{r}from"./iframe-Si2UkeX9.js";import{F as ce}from"./Field-DY7mIMzZ.js";import{a as me,S as m,u as de}from"./index-oXvcZMk4.js";import{r as P}from"./randomId-Dfhrkieu.js";const pe=me({slots:{root:"relative",textarea:`
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextarea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextarea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextarea"],sizer:m.small,className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextarea"],sizer:m.base,className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextarea"],sizer:m.large,className:"text-lg py-3.5 px-4.5"}],variants:{sizer:{[m.small]:{},[m.base]:{},[m.large]:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:m.base,hasError:!1}});function u({className:e,sizer:n,label:s,hint:i,error:a,disabled:o,required:D,id:$,defaultValue:F,value:B,onChange:K,rows:I,minRows:d=2,maxRows:R=10,disableManualResize:Y,"aria-describedby":J,"aria-errormessage":X,"aria-invalid":k,...Z}){const _=r.createRef(),q=r.useRef(null),[z,ee]=r.useState(0),ae=I!==void 0?I:z>d?z:d,[te,O]=r.useState(F),U=B!==void 0,H=U?B:te;function se(c){U||O(c.target.value),K?.(c)}r.useLayoutEffect(()=>{if(q.current){q.current.value=H||"";const c=getComputedStyle(q.current),le=L(c.lineHeight),oe=L(c.paddingTop)+L(c.paddingBottom),M=Math.ceil((q.current.scrollHeight-oe)/le),G=M<d?d:M>R?R:M;G!==z&&ee(G)}},[H,d,R,z]),r.useLayoutEffect(()=>{if(B===void 0&&F===void 0){const c=ge(_);c.value&&O(c.value)}},[]);const[ie]=r.useState(P()),j=$||(s?ie:void 0),[ne]=r.useState(P()),Q=J||(i?ne:void 0),[re]=r.useState(P()),W=X||(a&&a!==!0?re:void 0),ue=de(n),N=pe({sizer:ue,hasError:!!a,disableManualResize:Y});return r.createElement(ce,{className:e,sizer:n,label:s,controlId:j,hint:i,hintId:Q,error:a!==!0?a:void 0,errorId:W,disabled:o,required:D},r.createElement("div",{ref:_,className:N.root()},r.createElement("textarea",{ref:q,className:N.hiddenTextarea(),rows:d,disabled:!0,"aria-hidden":!0}),r.createElement("textarea",{...Z,id:j,className:N.textarea(),rows:ae,value:H,onChange:se,disabled:o,required:D,"aria-describedby":Q,"aria-errormessage":W,"aria-invalid":k!==void 0?k:!!a})))}u.sizer=m;function L(e){return Number(e.slice(0,-2))}function ge(e){return[...e.current?.getElementsByTagName("textarea")||[]][1]}u.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextareaProps} + {@link CommonFieldProps}`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Textarea when using it as a
[controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Textarea when using it as an uncontrolled component"},rows:{required:!1,tsType:{name:"number"},description:"Use this to set a fixed number of visible rows on the Textarea. Causes\nthe `minRows` & `maxRows` props to be ignored."},minRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the minimum rows used by the\nauto-resizing Textarea as its value changes. Default is 2.",defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the maximum rows used by the\nauto-resizing Textarea as its value changes. Default is 10.",defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Textarea changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "base", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};async function V(e,n,s){const i=n;i.value=i.value+s?.slice(0,-1)||"",await e(i,s?.slice(-1)||"")}const{expect:t,fn:l}=__STORYBOOK_MODULE_TEST__,be={title:"Form controls/Textarea",component:u},T={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:l()},play:async({canvas:e,step:n})=>{const s=e.getByLabelText("A label*"),i=e.getByTitle("required");await n("Assert accessibility of layout elements",async()=>{t(s).toHaveRole("textbox"),t(s).toHaveAccessibleDescription("A hint"),t(s).toHaveAccessibleErrorMessage("An error message"),t(i).toHaveTextContent("*")}),await n("Assert the error style",async()=>{t(s).toHaveClass("border-rose-800")})}},p={args:{placeholder:"Empty Textarea","aria-label":"Empty Textarea",onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Empty Textarea");await s("Assert Text is functional without an initial value",async()=>{await i.type(a,"a"),t(a).toHaveValue("a"),t(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await i.type(a,"{backspace}"),t(a).toHaveValue("")})}},g={args:{value:"Controlled Textarea","aria-label":"Controlled Textarea",onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Controlled Textarea");await s("Assert `value` works",async()=>{t(a).toHaveValue(e.value)}),await s("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await i.type(a,"a"),t(e.onChange).toHaveBeenCalledOnce(),t(a).toHaveValue(e.value)})}},b={args:{defaultValue:"Uncontrolled Textarea","aria-label":"Uncontrolled Textarea",onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Uncontrolled Textarea");await s("Assert `defaultValue` works",async()=>{t(a).toHaveValue(e.defaultValue)}),await s("Typing into the Textarea should amend the value, since it’s uncontrolled",async()=>{await i.type(a,"a"),t(a).toHaveValue(`${e.defaultValue}a`),t(e.onChange).toHaveBeenCalledOnce()}),await s("Reset the value",async()=>{await i.type(a,"{backspace}"),t(a).toHaveValue(e.defaultValue)})}},v={args:{defaultValue:"Disabled Textarea",disabled:!0,"aria-label":"Disabled Textarea",onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Disabled Textarea");await s("Assert disabled state",async()=>{t(a).toBeDisabled()}),await s("Typing should have no effect",async()=>{await i.type(a,"a"),t(e.onChange).not.toHaveBeenCalled(),t(a).toHaveValue(e.defaultValue)})}},h={args:{sizer:u.sizer.small,label:"Small label",placeholder:"Small Textarea",onChange:l()},play:async({canvas:e,step:n})=>{await n("Assert the small sizer style on both the Textarea & Field",async()=>{t(e.getByLabelText("Small label")).toHaveClass("text-sm"),t(e.getByText("Small label")).toHaveClass("text-xs")})}},f={args:{sizer:u.sizer.base,label:"Base label",placeholder:"Base Textarea",onChange:l()},play:async({canvas:e,step:n})=>{await n("Assert the base sizer style on both the Textarea & Field",async()=>{t(e.getByLabelText("Base label")).toHaveClass("text-base"),t(e.getByText("Base label")).toHaveClass("text-sm")})}},x={args:{sizer:u.sizer.large,label:"Large label",placeholder:"Large Textarea",onChange:l()},play:async({canvas:e,step:n})=>{await n("Assert the large sizer style on both the Textarea & Field",async()=>{t(e.getByLabelText("Large label")).toHaveClass("text-lg"),t(e.getByText("Large label")).toHaveClass("text-lg")})}},y={tags:["!test"],args:{sizer:[u.sizer.small,u.sizer.smBase,u.sizer.mdLarge],label:"Responsive label",placeholder:"Responsive Text",onChange:l()}},w={args:{"aria-label":"Autoresizable Textarea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",minRows:1,maxRows:10,onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Autoresizable Textarea");function o(){return parseInt(a.getAttribute("rows")||"0")}await s("The textarea should use the minRows after clearing the value",async()=>{await i.clear(a),t(o()).toEqual(1)}),await s("The textarea should use the maxRows after adding an absolute chunk of text",async()=>{await V(i.type,a,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),t(o()).toEqual(10)}),await s("Reset to the original value",async()=>{await i.clear(a),await V(i.type,a,e.defaultValue),t(o()).toBeGreaterThanOrEqual(1),t(o()).toBeLessThanOrEqual(10)})}},C={args:{"aria-label":"Fixed height Textarea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,minRows:1,maxRows:10,lang:"la",onChange:l()},play:async({args:e,canvas:n,step:s,userEvent:i})=>{const a=n.getByLabelText("Fixed height Textarea");function o(){return parseInt(a.getAttribute("rows")||"0")}await s("The textarea should use the fixed `rows` after clearing the value",async()=>{await i.clear(a),t(o()).toEqual(3)}),await s("The textarea should use the fixed `rows` after adding an absolute chunk of text",async()=>{await V(i.type,a,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),t(o()).toEqual(3)}),await s("Reset to the original value",async()=>{await i.clear(a),await V(i.type,a,e.defaultValue),t(o()).toEqual(3)})}},S={args:{"aria-label":"Disabled manual resize Textarea",defaultValue:"This Textarea has no resize handle at the bottom right!",disableManualResize:!0,onChange:l()},play:async({canvas:e,step:n})=>{await n("The Textarea should have the resize handle hidden",async()=>{t(e.getByLabelText("Disabled manual resize Textarea")).toHaveClass("resize-none")})}},A={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(u,{...p.args}),r.createElement(u,{...g.args}),r.createElement(u,{...b.args}),r.createElement(u,{...v.args}))},E={tags:["!dev","!test"],render:e=>r.createElement("div",{className:"flex flex-col gap-4"},r.createElement(u,{...h.args}),r.createElement(u,{...f.args}),r.createElement(u,{...x.args}),r.createElement(u,{...y.args}))};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: 'A problematic value',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('required');
    await step('Assert accessibility of layout elements', async () => {
      expect(textarea).toHaveRole('textbox');
      expect(textarea).toHaveAccessibleDescription('A hint');
      expect(textarea).toHaveAccessibleErrorMessage('An error message');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert the error style', async () => {
      expect(textarea).toHaveClass('border-rose-800');
    });
  }
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Empty Textarea',
    'aria-label': 'Empty Textarea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Empty Textarea');
    await step('Assert Text is functional without an initial value', async () => {
      await userEvent.type(textarea, 'a');
      expect(textarea).toHaveValue('a');
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(textarea, '{backspace}');
      expect(textarea).toHaveValue('');
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Controlled Textarea',
    'aria-label': 'Controlled Textarea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Controlled Textarea');
    await step('Assert \`value\` works', async () => {
      expect(textarea).toHaveValue(args.value);
    });
    await step('Try adding text. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.type(textarea, 'a');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(textarea).toHaveValue(args.value);
    });
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Uncontrolled Textarea',
    'aria-label': 'Uncontrolled Textarea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Uncontrolled Textarea');
    await step('Assert \`defaultValue\` works', async () => {
      expect(textarea).toHaveValue(args.defaultValue);
    });
    await step('Typing into the Textarea should amend the value, since it’s uncontrolled', async () => {
      await userEvent.type(textarea, 'a');
      expect(textarea).toHaveValue(\`\${args.defaultValue}a\`);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(textarea, '{backspace}');
      expect(textarea).toHaveValue(args.defaultValue);
    });
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled Textarea',
    disabled: true,
    'aria-label': 'Disabled Textarea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Disabled Textarea');
    await step('Assert disabled state', async () => {
      expect(textarea).toBeDisabled();
    });

    // Typing should not fire any changes
    await step('Typing should have no effect', async () => {
      await userEvent.type(textarea, 'a');
      expect(args.onChange).not.toHaveBeenCalled();
      expect(textarea).toHaveValue(args.defaultValue);
    });
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.small,
    label: 'Small label',
    placeholder: 'Small Textarea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small sizer style on both the Textarea & Field', async () => {
      expect(canvas.getByLabelText('Small label')).toHaveClass('text-sm');
      expect(canvas.getByText('Small label')).toHaveClass('text-xs');
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.base,
    label: 'Base label',
    placeholder: 'Base Textarea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the base sizer style on both the Textarea & Field', async () => {
      expect(canvas.getByLabelText('Base label')).toHaveClass('text-base');
      expect(canvas.getByText('Base label')).toHaveClass('text-sm');
    });
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Textarea.sizer.large,
    label: 'Large label',
    placeholder: 'Large Textarea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large sizer style on both the Textarea & Field', async () => {
      expect(canvas.getByLabelText('Large label')).toHaveClass('text-lg');
      expect(canvas.getByText('Large label')).toHaveClass('text-lg');
    });
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Textarea.sizer.small, Textarea.sizer.smBase, Textarea.sizer.mdLarge],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Autoresizable Textarea',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    lang: 'la',
    minRows: 1,
    maxRows: 10,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Autoresizable Textarea');
    function getCurrentRows() {
      return parseInt(textarea.getAttribute('rows') || '0');
    }
    await step('The textarea should use the minRows after clearing the value', async () => {
      await userEvent.clear(textarea);
      expect(getCurrentRows()).toEqual(1);
    });
    await step('The textarea should use the maxRows after adding an absolute chunk of text', async () => {
      // userEvent.type does a character at a time -- first add a bunch programmatically to avoid the time delay
      await fastType(userEvent.type, textarea, \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.\`);
      // then trigger a regular change with a single key press
      expect(getCurrentRows()).toEqual(10);
    });
    await step('Reset to the original value', async () => {
      await userEvent.clear(textarea);
      await fastType(userEvent.type, textarea, args.defaultValue);
      expect(getCurrentRows()).toBeGreaterThanOrEqual(1);
      expect(getCurrentRows()).toBeLessThanOrEqual(10);
    });
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Fixed height Textarea',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    minRows: 1,
    maxRows: 10,
    lang: 'la',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Fixed height Textarea');
    function getCurrentRows() {
      return parseInt(textarea.getAttribute('rows') || '0');
    }
    await step('The textarea should use the fixed \`rows\` after clearing the value', async () => {
      await userEvent.clear(textarea);
      expect(getCurrentRows()).toEqual(3);
    });
    await step('The textarea should use the fixed \`rows\` after adding an absolute chunk of text', async () => {
      // userEvent.type does a character at a time -- first add a bunch programmatically to avoid the time delay
      await fastType(userEvent.type, textarea, \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.\`);
      // then trigger a regular change with a single key press
      expect(getCurrentRows()).toEqual(3);
    });
    await step('Reset to the original value', async () => {
      await userEvent.clear(textarea);
      await fastType(userEvent.type, textarea, args.defaultValue);
      expect(getCurrentRows()).toEqual(3);
    });
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Disabled manual resize Textarea',
    defaultValue: 'This Textarea has no resize handle at the bottom right!',
    disableManualResize: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('The Textarea should have the resize handle hidden', async () => {
      expect(canvas.getByLabelText('Disabled manual resize Textarea')).toHaveClass('resize-none');
    });
  }
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Empty.args} />
      <Textarea {...Controlled.args} />
      <Textarea {...Uncontrolled.args} />
      <Textarea {...Disabled.args} />
    </div>
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Textarea {...Small.args} />
      <Textarea {...Base.args} />
      <Textarea {...Large.args} />
      <Textarea {...Responsive.args} />
    </div>
}`,...E.parameters?.docs?.source}}};const ve=["FieldLayout","Empty","Controlled","Uncontrolled","Disabled","Small","Base","Large","Responsive","AutoResizableHeight","FixedHeight","DisableManualResize","AllControlStates","AllSizes"],qe=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:A,AllSizes:E,AutoResizableHeight:w,Base:f,Controlled:g,DisableManualResize:S,Disabled:v,Empty:p,FieldLayout:T,FixedHeight:C,Large:x,Responsive:y,Small:h,Uncontrolled:b,__namedExportsOrder:ve,default:be},Symbol.toStringTag,{value:"Module"}));export{w as A,S as D,C as F,qe as S,u as T};
