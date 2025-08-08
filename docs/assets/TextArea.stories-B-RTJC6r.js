import{r as n}from"./iframe-BKZX7tvf.js";import{A as ne}from"./AllSizersStoryWrapper-C8_pK2IB.js";import{F as le}from"./Field-Do7UQPvC.js";import{u as ue}from"./useFieldA11yIds-DBRz3Mkj.js";import{a as oe,u as ce}from"./index-zgBM_x_G.js";const me=oe({slots:{root:"relative",textarea:`
      border-black rounded-sm
      bg-white
      placeholder:opacity-100 placeholder:text-gray-400
      focus:border-blue-800 focus:shadow-[0_0_11px] focus:shadow-blue-300 focus:outline-0
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed disabled:opacity-100
    `,hiddenTextArea:"invisible absolute -z-1 pointer-events-none select-none"},compoundSlots:[{slots:["textarea","hiddenTextArea"],className:"appearance-none w-full border-2"},{slots:["textarea","hiddenTextArea"],sizer:"xs",className:"text-xs py-1.25 px-2"},{slots:["textarea","hiddenTextArea"],sizer:"sm",className:"text-sm py-1.5 px-2"},{slots:["textarea","hiddenTextArea"],sizer:"base",className:"text-base py-2.5 px-3.5"},{slots:["textarea","hiddenTextArea"],sizer:"lg",className:"text-lg py-3.5 px-4.5"},{slots:["textarea","hiddenTextArea"],sizer:"xl",className:"text-xl py-4.5 px-5.5"}],variants:{sizer:{xs:{},sm:{},base:{},lg:{},xl:{}},hasError:{false:{},true:{textarea:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},disableManualResize:{false:{},true:{textarea:"resize-none"}}},defaultVariants:{sizer:"base",hasError:!1}});function o({className:a,sizer:r,label:e,hint:t,error:s,disabled:u,required:D,id:X,defaultValue:F,value:B,onChange:W,rows:I,minRows:d=2,maxRows:R=10,disableManualResize:G,"aria-labelledby":$,"aria-describedby":K,"aria-errormessage":Y,"aria-invalid":_,...J}){const O=n.createRef(),T=n.useRef(null),[H,Z]=n.useState(0),ee=I!==void 0?I:H>d?H:d,[ae,j]=n.useState(F),U=B!==void 0,M=U?B:ae;function te(c){U||j(c.target.value),W?.(c)}n.useLayoutEffect(()=>{if(T.current){T.current.value=M||"";const c=getComputedStyle(T.current),ie=k(c.lineHeight),re=k(c.paddingTop)+k(c.paddingBottom),L=Math.ceil((T.current.scrollHeight-re)/ie),Q=L<d?d:L>R?R:L;Q!==H&&Z(Q)}},[M,d,R,H]),n.useLayoutEffect(()=>{if(B===void 0&&F===void 0){const c=de(O);c.value&&j(c.value)}},[]);const m=ue({label:e,hint:t,error:s,controlledId:X,controlledAriaLabelledBy:$,controlledAriaDescribedBy:K,controlledAriaErrorMessage:Y}),se=ce(r),P=me({sizer:se,hasError:!!s,disableManualResize:G});return n.createElement(le,{className:a,sizer:r,label:e,labelId:m.ariaLabelledBy,controlId:m.id,hint:t,hintId:m.ariaDescribedBy,error:s!==!0?s:void 0,errorId:m.ariaErrorMessage,disabled:u,required:D,"data-nickui-component":"TextArea"},n.createElement("div",{ref:O,className:P.root()},n.createElement("textarea",{ref:T,className:P.hiddenTextArea(),rows:d,disabled:!0,"aria-hidden":!0}),n.createElement("textarea",{...J,id:m.id,className:P.textarea(),rows:ee,value:M,onChange:te,disabled:u,required:D,"aria-labelledby":m.ariaLabelledBy,"aria-describedby":m.ariaDescribedBy,"aria-errormessage":m.ariaErrorMessage,"aria-invalid":_!==void 0?_:!!s})))}function k(a){return Number(a.slice(0,-2))}function de(a){return[...a.current?.getElementsByTagName("textarea")||[]][1]}o.__docgenInfo={description:`A form control that allows users to enter & edit a mass of text
@param props {@link TextAreaProps} + {@link CommonFieldProps}`,methods:[],displayName:"TextArea",props:{value:{required:!1,tsType:{name:"string"},description:`Sets the value of the TextArea when using it as a
[controlled component](https://react.dev/reference/react-dom/components/textarea#controlling-a-text-area-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the TextArea when using it as an uncontrolled component"},rows:{required:!1,tsType:{name:"number"},description:"Use this to set a fixed number of visible rows on the TextArea. Causes\nthe `minRows` & `maxRows` props to be ignored."},minRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the minimum rows used by the\nauto-resizing TextArea as its value changes. Default is 2.",defaultValue:{value:"2",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"When the `rows` prop is not used, sets the maximum rows used by the\nauto-resizing TextArea as its value changes. Default is 10.",defaultValue:{value:"10",computed:!1}},disableManualResize:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to remove the resize handle from the bottom right"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the TextArea changes"},placeholder:{required:!1,tsType:{name:"string"},description:`A string that contains a brief hint to the user as to what information is
expected in the field.`},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]},{name:"Array",elements:[{name:"union",raw:`| 'xs'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| 'sm:xs'
| 'sm:sm'
| 'sm:base'
| 'sm:lg'
| 'sm:xl'
| 'md:xs'
| 'md:sm'
| 'md:base'
| 'md:lg'
| 'md:xl'
| 'lg:xs'
| 'lg:sm'
| 'lg:base'
| 'lg:lg'
| 'lg:xl'
| 'xl:xs'
| 'xl:sm'
| 'xl:base'
| 'xl:lg'
| 'xl:xl'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'sm:xs'"},{name:"literal",value:"'sm:sm'"},{name:"literal",value:"'sm:base'"},{name:"literal",value:"'sm:lg'"},{name:"literal",value:"'sm:xl'"},{name:"literal",value:"'md:xs'"},{name:"literal",value:"'md:sm'"},{name:"literal",value:"'md:base'"},{name:"literal",value:"'md:lg'"},{name:"literal",value:"'md:xl'"},{name:"literal",value:"'lg:xs'"},{name:"literal",value:"'lg:sm'"},{name:"literal",value:"'lg:base'"},{name:"literal",value:"'lg:lg'"},{name:"literal",value:"'lg:xl'"},{name:"literal",value:"'xl:xs'"},{name:"literal",value:"'xl:sm'"},{name:"literal",value:"'xl:base'"},{name:"literal",value:"'xl:lg'"},{name:"literal",value:"'xl:xl'"}]}],raw:"SizerType[]"}]},description:`Changes the size of the field ("xs", "sm", "base", "lg", "xl", "sm:base",
"lg:xl", etc)`},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};async function N(a,r,e){await pe(a,r,r.value+(e||""))}async function pe(a,r,e){const t=r;t.value=e?.slice(0,-1)||"",await a(t,e?.slice(-1)||"")}const{expect:i,fn:l}=__STORYBOOK_MODULE_TEST__,ge={title:"Form controls/TextArea",component:o},q={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"A problematic value",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("A label*"),t=a.getByTitle("(required)");await r("Assert accessibility of layout elements",async()=>{i(e).toHaveRole("textbox"),i(e).toHaveAccessibleDescription("A hint"),i(e).toHaveAccessibleErrorMessage("An error message"),i(t).toHaveTextContent("*")}),await r("Assert the error style",async()=>{i(e).toHaveClass("border-rose-800")})}},p={tags:["control-state"],args:{placeholder:"Empty TextArea","aria-label":"Empty TextArea",onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Empty TextArea");await e("Assert Text is functional without an initial value",async()=>{await t.type(s,"a"),i(s).toHaveValue("a"),i(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.type(s,"{backspace}"),i(s).toHaveValue("")})}},g={tags:["control-state"],args:{value:"Controlled TextArea","aria-label":"Controlled TextArea",onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Controlled TextArea");await e("Assert `value` works",async()=>{i(s).toHaveValue(a.value)}),await e("Try adding text. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.type(s,"a"),i(a.onChange).toHaveBeenCalledOnce(),i(s).toHaveValue(a.value)})}},x={tags:["control-state"],args:{defaultValue:"Uncontrolled TextArea","aria-label":"Uncontrolled TextArea",onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Uncontrolled TextArea");await e("Assert `defaultValue` works",async()=>{i(s).toHaveValue(a.defaultValue)}),await e("Typing into the TextArea should amend the value, since it’s uncontrolled",async()=>{await t.type(s,"a"),i(s).toHaveValue(`${a.defaultValue}a`),i(a.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.type(s,"{backspace}"),i(s).toHaveValue(a.defaultValue)})}},v={tags:["control-state"],args:{defaultValue:"Disabled TextArea",disabled:!0,"aria-label":"Disabled TextArea",onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Disabled TextArea");await e("Assert disabled state",async()=>{i(s).toBeDisabled()}),await e("Typing should have no effect",async()=>{await t.type(s,"a"),i(a.onChange).not.toHaveBeenCalled(),i(s).toHaveValue(a.defaultValue)})}},b={tags:["sizer"],args:{"aria-label":"Xs TextArea",sizer:"xs",placeholder:"Xs TextArea",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Xs TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the xs sizer style on both the TextArea & Field",async()=>{i(e).toHaveClass("text-xs"),i(t).toHaveAttribute("data-nickui-sizer","xs")})}},h={tags:["sizer"],args:{"aria-label":"Sm TextArea",sizer:"sm",placeholder:"Sm TextArea",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Sm TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the sm sizer style on both the TextArea & Field",async()=>{i(e).toHaveClass("text-sm"),i(t).toHaveAttribute("data-nickui-sizer","sm")})}},f={tags:["sizer"],args:{"aria-label":"Base TextArea",sizer:"base",placeholder:"Base TextArea",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Base TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the base sizer style on both the TextArea & Field",async()=>{i(e).toHaveClass("text-base"),i(t).toHaveAttribute("data-nickui-sizer","base")})}},y={tags:["sizer"],args:{"aria-label":"Lg TextArea",sizer:"lg",placeholder:"Lg TextArea",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Lg TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the lg sizer style on both the TextArea & Field",async()=>{i(e).toHaveClass("text-lg"),i(t).toHaveAttribute("data-nickui-sizer","lg")})}},A={tags:["sizer"],args:{"aria-label":"Xl TextArea",sizer:"xl",placeholder:"Xl TextArea",onChange:l()},play:async({canvas:a,step:r})=>{const e=a.getByLabelText("Xl TextArea"),t=e.closest('[data-nickui-component="TextArea"]');await r("Assert the xl sizer style on both the TextArea & Field",async()=>{i(e).toHaveClass("text-xl"),i(t).toHaveAttribute("data-nickui-sizer","xl")})}},w={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],label:"Responsive label",placeholder:"Responsive Text",onChange:l()}},C={args:{"aria-label":"Autoresizable TextArea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",lang:"la",minRows:1,maxRows:10,onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Autoresizable TextArea");function u(){return parseInt(s.getAttribute("rows")||"0")}await e("The textarea should use the minRows after clearing the value",async()=>{await t.clear(s),i(u()).toEqual(1)}),await e("The textarea should use the maxRows after adding an absolute chunk of text",async()=>{await N(t.type,s,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),i(u()).toEqual(10)}),await e("Reset to the original value",async()=>{await t.clear(s),await N(t.type,s,a.defaultValue),i(u()).toBeGreaterThanOrEqual(1),i(u()).toBeLessThanOrEqual(10)})}},z={args:{"aria-label":"Fixed height TextArea",defaultValue:"In quis convallis felis. In efficitur aliquam lobortis. Curabitur venenatis ut justo vitae tincidunt. Morbi vel commodo sapien. Maecenas tincidunt, leo in maximus posuere, metus neque auctor elit, congue rutrum tellus tellus a magna. Ut leo est, auctor et purus non, pellentesque pellentesque libero. Quisque at maximus risus, mollis tempus justo. Donec venenatis quam ac risus auctor pellentesque. Aenean ex quam, facilisis at pharetra ut, sollicitudin et urna. Nullam bibendum nibh sed leo convallis, eu vestibulum purus gravida. Fusce elementum nulla in ornare bibendum. In euismod diam ut nisl tristique, in ornare turpis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus mauris risus, quis aliquet dolor vehicula ut. Suspendisse id dolor felis.",rows:3,lang:"la",onChange:l()},play:async({args:a,canvas:r,step:e,userEvent:t})=>{const s=r.getByLabelText("Fixed height TextArea");function u(){return parseInt(s.getAttribute("rows")||"0")}await e("The textarea should use the fixed `rows` after clearing the value",async()=>{await t.clear(s),i(u()).toEqual(3)}),await e("The textarea should use the fixed `rows` after adding an absolute chunk of text",async()=>{await N(t.type,s,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a interdum nisl, et fermentum quam. Vestibulum id pretium nisi. Sed congue porttitor varius. Mauris sit amet dui porta, placerat nisl et, consequat ante. Maecenas at ornare dui. Nam eu ex vitae ante faucibus elementum. Nam a orci quis urna iaculis dictum. Morbi mollis neque ut commodo eleifend.
Nam vitae tortor et metus ullamcorper blandit in a turpis. Nam nec posuere felis. Nunc at auctor purus. Vivamus ornare magna orci. Cras sit amet facilisis urna, vitae semper massa. Mauris varius porta faucibus. In vehicula, tortor in semper vulputate, odio diam semper urna, a ornare arcu nulla non massa. Vestibulum tristique eu eros at pulvinar. Quisque id sapien non justo suscipit semper.
Suspendisse potenti. Aliquam venenatis erat at tempus consectetur. Proin vulputate, dolor quis imperdiet suscipit, risus sem feugiat ante, a blandit diam neque non quam. Vestibulum vel nibh ut eros vestibulum fermentum id ac elit. Duis bibendum pulvinar tincidunt. Aliquam eu efficitur dui, ac varius lectus. Sed venenatis ultrices ipsum sit amet euismod. Phasellus vehicula nisi ante, sit amet mattis odio feugiat quis. Cras iaculis malesuada velit sit amet sodales. Phasellus lacus eros, aliquet eget condimentum eu, feugiat sit amet augue. Donec a consectetur enim, egestas aliquam risus. Sed facilisis faucibus dui non finibus. Phasellus fringilla pretium odio, et condimentum ligula maximus in. Proin sit amet nisl in nisi placerat tincidunt. Proin in placerat augue.
Cras egestas, nulla eu fringilla ullamcorper, odio tellus feugiat risus, nec varius libero tortor at eros. Suspendisse quis eleifend lorem. Sed iaculis, nisi at tempor accumsan, eros nunc pellentesque nulla, feugiat efficitur neque lacus eu nulla. Aliquam convallis pretium lectus vel hendrerit. Duis commodo tortor eu molestie sodales. Proin convallis pulvinar orci eu vehicula. In rhoncus ullamcorper metus et sodales. Curabitur facilisis tellus ut laoreet finibus. Duis convallis felis nisi. Quisque vehicula imperdiet risus, eu viverra nibh congue nec. Mauris quis pharetra odio. Mauris turpis mauris, malesuada sed ipsum id, aliquet facilisis ex. Nunc eleifend turpis eu metus convallis, id luctus sem volutpat. Vestibulum interdum blandit augue, quis feugiat dui tristique quis. Nunc convallis arcu dui, porta placerat ante feugiat vitae. Fusce at odio risus.
Proin et fringilla enim. Fusce id ultrices nisl. Fusce dignissim dolor et elementum hendrerit. Morbi ornare lectus eu lectus commodo, placerat faucibus ipsum facilisis. Sed tempor condimentum lobortis. Proin laoreet mollis diam in ornare. Nullam quam ex, egestas ac tristique sit amet, iaculis id turpis. Sed eget molestie libero, a fringilla dui. Aliquam erat volutpat. Praesent in interdum enim, ut blandit magna.`),i(u()).toEqual(3)}),await e("Reset to the original value",async()=>{await t.clear(s),await N(t.type,s,a.defaultValue),i(u()).toEqual(3)})}},S={args:{"aria-label":"Disabled manual resize TextArea",defaultValue:"This TextArea has no resize handle at the bottom right!",disableManualResize:!0,onChange:l()},play:async({canvas:a,step:r})=>{await r("The TextArea should have the resize handle hidden",async()=>{i(a.getByLabelText("Disabled manual resize TextArea")).toHaveClass("resize-none")})}},E={tags:["!dev","!test"],render:a=>n.createElement("div",{className:"flex flex-col gap-4"},n.createElement(o,{...p.args}),n.createElement(o,{...g.args}),n.createElement(o,{...x.args}),n.createElement(o,{...v.args}))},V={tags:["!dev","!test"],render:a=>n.createElement(ne,null,n.createElement(o,{...b.args,className:"sm:flex-12"}),n.createElement(o,{...h.args,className:"sm:flex-14"}),n.createElement(o,{...f.args,className:"sm:flex-16"}),n.createElement(o,{...y.args,className:"sm:flex-18"}),n.createElement(o,{...A.args,className:"sm:flex-20"}))};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    label: 'Responsive label',
    placeholder: 'Responsive Text',
    onChange: fn()
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <TextArea {...empty.args} />
      <TextArea {...controlled.args} />
      <TextArea {...uncontrolled.args} />
      <TextArea {...disabled.args} />
    </div>
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper>
      <TextArea {...xs.args} className="sm:flex-12" />
      <TextArea {...sm.args} className="sm:flex-14" />
      <TextArea {...base.args} className="sm:flex-16" />
      <TextArea {...lg.args} className="sm:flex-18" />
      <TextArea {...xl.args} className="sm:flex-20" />
    </AllSizersStoryWrapper>
}`,...V.parameters?.docs?.source}}};const xe=["fieldLayout","empty","controlled","uncontrolled","disabled","xs","sm","base","lg","xl","responsive","autoResizableHeight","fixedHeight","disableManualResize","allControlStates","allSizers"],Ae=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:xe,allControlStates:E,allSizers:V,autoResizableHeight:C,base:f,controlled:g,default:ge,disableManualResize:S,disabled:v,empty:p,fieldLayout:q,fixedHeight:z,lg:y,responsive:w,sm:h,uncontrolled:x,xl:A,xs:b},Symbol.toStringTag,{value:"Module"}));export{o as T,C as a,S as d,z as f,Ae as s};
