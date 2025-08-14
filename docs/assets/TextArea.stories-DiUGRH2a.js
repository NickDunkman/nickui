import{r as n}from"./iframe-D_dx4C3o.js";import{A as ue}from"./AllSizersStoryWrapper-M2xuQLnL.js";import{g as le}from"./getStoryArgTypes-CvpAwH8w.js";import{F as oe}from"./Field-DLgvBtFY.js";import{a as ce}from"./fieldA11y-C3gyBWsB.js";import{r as me,u as de}from"./index-D1YO4riR.js";const pe=me({slots:{root:"relative",textarea:`
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextArea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextArea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextArea"],sizer:"xs",className:"text-xs py-1.25 px-2"},{slots:["textarea","hiddenTextArea"],sizer:"sm",className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextArea"],sizer:"base",className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextArea"],sizer:"lg",className:"text-lg py-3.5 px-4.5"},{slots:["textarea","hiddenTextArea"],sizer:"xl",className:"text-xl py-4.5 px-5.5"}],variants:{sizer:{xs:{},sm:{},base:{},lg:{},xl:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:"base",hasError:!1}});function l({className:a,sizer:r,label:e,hint:t,error:i,disabled:o,required:L,defaultValue:D,value:N,minRows:m=2,maxRows:B=10,disableManualResize:Q,id:X,onChange:W,rows:F,"aria-label":G,"aria-labelledby":Z,"aria-describedby":$,"aria-errormessage":K,"aria-invalid":Y,...J}){const I=n.createRef(),T=n.useRef(null),[E,ee]=n.useState(0),ae=F!==void 0?F:E>m?E:m,[te,_]=n.useState(D),O=N!==void 0,P=O?N:te;function se(c){O||_(c.target.value),W?.(c)}n.useLayoutEffect(()=>{if(T.current){T.current.value=P||"";const c=getComputedStyle(T.current),re=k(c.lineHeight),ne=k(c.paddingTop)+k(c.paddingBottom),M=Math.ceil((T.current.scrollHeight-ne)/re),U=M<m?m:M>B?B:M;U!==E&&ee(U)}},[P,m,B,E]),n.useLayoutEffect(()=>{if(N===void 0&&D===void 0){const c=ge(I);c.value&&_(c.value)}},[]);const j=ce({label:e,hint:t,error:i,controlledId:X,controlledAriaLabel:G,controlledAriaLabelledBy:Z,controlledAriaDescribedBy:$,controlledAriaErrorMessage:K,controlledAriaInvalid:Y}),ie=de(r),R=pe({sizer:ie,hasError:!!i,disableManualResize:Q});return n.createElement(oe,{...j.field,className:a,sizer:r,label:e,hint:t,error:i!==!0?i:void 0,required:L,"data-nickui-component":"TextArea"},n.createElement("div",{ref:I,className:R.root()},n.createElement("textarea",{ref:T,className:R.hiddenTextArea(),rows:m,disabled:!0,"aria-hidden":!0}),n.createElement("textarea",{...J,...j.formControl,className:R.textarea(),rows:ae,value:P,onChange:se,disabled:o,required:L})))}function k(a){return Number(a.slice(0,-2))}function ge(a){return[...a.current?.getElementsByTagName("textarea")||[]][1]}l.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextAreaProps}`,methods:[],displayName:"TextArea",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},rows:{required:!1,tsType:{name:"number"},description:"Use this to set a fixed number of visible rows on the TextArea. Causes\nthe `minRows` & `maxRows` props to be ignored."},minRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the minimum rows used by the\nauto-resizing TextArea as its value changes. Default is 2.",defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the maximum rows used by the\nauto-resizing TextArea as its value changes. Default is 10.",defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`}}};async function H(a,r,e){await xe(a,r,r.value+(e||""))}async function xe(a,r,e){const t=r;t.value=e?.slice(0,-1)||"",await a(t,e?.slice(-1)||"")}const{expect:s,fn:u}=__STORYBOOK_MODULE_TEST__,be={title:"Form controls/TextArea",component:l,argTypes:le({formControl:{isDisableable:!0,valueType:"string"},isSizerable:!0})},A={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("A label*"),t=a.getByTitle("(required)");await r("Assert accessibility of layout elements",async()=>{s(e).toHaveRole("textbox"),s(e).toHaveAccessibleDescription("A hint"),s(e).toHaveAccessibleErrorMessage("An error message"),s(t).toHaveTextContent("*")}),await r("Assert the error style",async()=>{s(e).toHaveClass("border-rose-800")})}},d={tags:["control-state"],args:{placeholder:"Empty TextArea","aria-label":"Empty TextArea",onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Empty TextArea");await e("Assert Text is functional without an initial value",async()=>{await t.type(i,"a"),s(i).toHaveValue("a"),s(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.type(i,"{backspace}"),s(i).toHaveValue("")})}},p={tags:["control-state"],args:{value:"Controlled TextArea","aria-label":"Controlled TextArea",onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Controlled TextArea");await e("Assert `value` works",async()=>{s(i).toHaveValue(a.value)}),await e("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.type(i,"a"),s(a.onChange).toHaveBeenCalledOnce(),s(i).toHaveValue(a.value)})}},g={tags:["control-state"],args:{defaultValue:"Uncontrolled TextArea","aria-label":"Uncontrolled TextArea",onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Uncontrolled TextArea");await e("Assert `defaultValue` works",async()=>{s(i).toHaveValue(a.defaultValue)}),await e("Typing into the TextArea should amend the value, since it’s uncontrolled",async()=>{await t.type(i,"a"),s(i).toHaveValue(`${a.defaultValue}a`),s(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.type(i,"{backspace}"),s(i).toHaveValue(a.defaultValue)})}},x={tags:["control-state"],args:{defaultValue:"Disabled TextArea",disabled:!0,"aria-label":"Disabled TextArea",onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Disabled TextArea");await e("Assert disabled state",async()=>{s(i).toBeDisabled()}),await e("Typing should have no effect",async()=>{await t.type(i,"a"),s(a.onChange).not.toHaveBeenCalled(),s(i).toHaveValue(a.defaultValue)})}},b={tags:["sizer"],args:{"aria-label":"Xs TextArea",sizer:"xs",placeholder:"Xs TextArea",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Xs TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the xs sizer style on both the TextArea & Field",async()=>{s(e).toHaveClass("text-xs"),s(t).toHaveAttribute("data-nickui-sizer","xs")})}},f={tags:["sizer"],args:{"aria-label":"Sm TextArea",sizer:"sm",placeholder:"Sm TextArea",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Sm TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the sm sizer style on both the TextArea & Field",async()=>{s(e).toHaveClass("text-sm"),s(t).toHaveAttribute("data-nickui-sizer","sm")})}},h={tags:["sizer"],args:{"aria-label":"Base TextArea",sizer:"base",placeholder:"Base TextArea",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Base TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the base sizer style on both the TextArea & Field",async()=>{s(e).toHaveClass("text-base"),s(t).toHaveAttribute("data-nickui-sizer","base")})}},v={tags:["sizer"],args:{"aria-label":"Lg TextArea",sizer:"lg",placeholder:"Lg TextArea",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Lg TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the lg sizer style on both the TextArea & Field",async()=>{s(e).toHaveClass("text-lg"),s(t).toHaveAttribute("data-nickui-sizer","lg")})}},y={tags:["sizer"],args:{"aria-label":"Xl TextArea",sizer:"xl",placeholder:"Xl TextArea",onChange:u()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Xl TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the xl sizer style on both the TextArea & Field",async()=>{s(e).toHaveClass("text-xl"),s(t).toHaveAttribute("data-nickui-sizer","xl")})}},q={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",placeholder:"Responsive Text",onChange:u()}},w={args:{"aria-label":"Autoresizable TextArea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",minRows:1,maxRows:10,onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Autoresizable TextArea");function o(){return parseInt(i.getAttribute("rows")||"0")}await e("The textarea should use the minRows after clearing the value",async()=>{await t.clear(i),s(o()).toEqual(1)}),await e("The textarea should use the maxRows after adding an absolute chunk of text",async()=>{await H(t.type,i,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),s(o()).toEqual(10)}),await e("Reset to the original value",async()=>{await t.clear(i),await H(t.type,i,a.defaultValue),s(o()).toBeGreaterThanOrEqual(1),s(o()).toBeLessThanOrEqual(10)})}},C={args:{"aria-label":"Fixed height TextArea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,lang:"la",onChange:u()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const i=r.getByLabelText("Fixed height TextArea");function o(){return parseInt(i.getAttribute("rows")||"0")}await e("The textarea should use the fixed `rows` after clearing the value",async()=>{await t.clear(i),s(o()).toEqual(3)}),await e("The textarea should use the fixed `rows` after adding an absolute chunk of text",async()=>{await H(t.type,i,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),s(o()).toEqual(3)}),await e("Reset to the original value",async()=>{await t.clear(i),await H(t.type,i,a.defaultValue),s(o()).toEqual(3)})}},z={args:{"aria-label":"Disabled manual resize TextArea",defaultValue:"This TextArea has no resize handle at the bottom right!",disableManualResize:!0,onChange:u()},play:async({canvas:a,step:r})=>{await r("The TextArea should have the resize handle hidden",async()=>{s(a.getByLabelText("Disabled manual resize TextArea")).toHaveClass("resize-none")})}},S={tags:["!dev","!test"],render:a=>n.createElement("div",{className:"flex flex-col gap-4"},n.createElement(l,{...d.args}),n.createElement(l,{...p.args}),n.createElement(l,{...g.args}),n.createElement(l,{...x.args}))},V={tags:["!dev","!test"],render:a=>n.createElement(ue,null,n.createElement(l,{...b.args,className:"sm:flex-12"}),n.createElement(l,{...f.args,className:"sm:flex-14"}),n.createElement(l,{...h.args,className:"sm:flex-16"}),n.createElement(l,{...v.args,className:"sm:flex-18"}),n.createElement(l,{...y.args,className:"sm:flex-20"}))};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
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
    const requiredAsterisk = canvas.getByTitle('(required)');
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
}`,...A.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    placeholder: 'Empty TextArea',
    'aria-label': 'Empty TextArea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Empty TextArea');
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    value: 'Controlled TextArea',
    'aria-label': 'Controlled TextArea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Controlled TextArea');
    await step('Assert \`value\` works', async () => {
      expect(textarea).toHaveValue(args.value);
    });
    await step('Try adding text. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.type(textarea, 'a');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(textarea).toHaveValue(args.value);
    });
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'Uncontrolled TextArea',
    'aria-label': 'Uncontrolled TextArea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Uncontrolled TextArea');
    await step('Assert \`defaultValue\` works', async () => {
      expect(textarea).toHaveValue(args.defaultValue);
    });
    await step('Typing into the TextArea should amend the value, since it’s uncontrolled', async () => {
      await userEvent.type(textarea, 'a');
      expect(textarea).toHaveValue(\`\${args.defaultValue}a\`);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.type(textarea, '{backspace}');
      expect(textarea).toHaveValue(args.defaultValue);
    });
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    defaultValue: 'Disabled TextArea',
    disabled: true,
    'aria-label': 'Disabled TextArea',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Disabled TextArea');
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xs TextArea',
    sizer: 'xs',
    placeholder: 'Xs TextArea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('Xs TextArea');
    const field = textarea.closest('[data-nickui-component="TextArea"]');
    await step('Assert the xs sizer style on both the TextArea & Field', async () => {
      expect(textarea).toHaveClass('text-xs');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Sm TextArea',
    sizer: 'sm',
    placeholder: 'Sm TextArea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('Sm TextArea');
    const field = textarea.closest('[data-nickui-component="TextArea"]');
    await step('Assert the sm sizer style on both the TextArea & Field', async () => {
      expect(textarea).toHaveClass('text-sm');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Base TextArea',
    sizer: 'base',
    placeholder: 'Base TextArea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('Base TextArea');
    const field = textarea.closest('[data-nickui-component="TextArea"]');
    await step('Assert the base sizer style on both the TextArea & Field', async () => {
      expect(textarea).toHaveClass('text-base');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Lg TextArea',
    sizer: 'lg',
    placeholder: 'Lg TextArea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('Lg TextArea');
    const field = textarea.closest('[data-nickui-component="TextArea"]');
    await step('Assert the lg sizer style on both the TextArea & Field', async () => {
      expect(textarea).toHaveClass('text-lg');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    'aria-label': 'Xl TextArea',
    sizer: 'xl',
    placeholder: 'Xl TextArea',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const textarea = canvas.getByLabelText('Xl TextArea');
    const field = textarea.closest('[data-nickui-component="TextArea"]');
    await step('Assert the xl sizer style on both the TextArea & Field', async () => {
      expect(textarea).toHaveClass('text-xl');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Autoresizable TextArea',
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
    const textarea = canvas.getByLabelText('Autoresizable TextArea');
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
    'aria-label': 'Fixed height TextArea',
    defaultValue: 'In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.',
    rows: 3,
    lang: 'la',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const textarea = canvas.getByLabelText('Fixed height TextArea');
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
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Disabled manual resize TextArea',
    defaultValue: 'This TextArea has no resize handle at the bottom right!',
    disableManualResize: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('The TextArea should have the resize handle hidden', async () => {
      expect(canvas.getByLabelText('Disabled manual resize TextArea')).toHaveClass('resize-none');
    });
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <TextArea {...empty.args} />
      <TextArea {...controlled.args} />
      <TextArea {...uncontrolled.args} />
      <TextArea {...disabled.args} />
    </div>
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper>
      <TextArea {...xs.args} className="sm:flex-12" />
      <TextArea {...sm.args} className="sm:flex-14" />
      <TextArea {...base.args} className="sm:flex-16" />
      <TextArea {...lg.args} className="sm:flex-18" />
      <TextArea {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...V.parameters?.docs?.source}}};const fe=["fieldLayout","empty","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","autoResizableHeight","fixedHeight","disableManualResize","allControlStates","allSizers"],we=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:fe,allControlStates:S,allSizers:V,autoResizableHeight:w,base:h,controlled:p,default:be,disableManualResize:z,disabled:x,empty:d,fieldLayout:A,fixedHeight:C,lg:v,responsive:q,sm:f,uncontrolled:g,xl:y,xs:b},Symbol.toStringTag,{value:"Module"}));export{l as T,w as a,z as d,C as f,we as s};
