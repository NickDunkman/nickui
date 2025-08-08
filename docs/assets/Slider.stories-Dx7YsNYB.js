import{r as l}from"./iframe-C3OS0XiJ.js";import{A as Te}from"./AllSizersStoryWrapper-BgoD26Cb.js";import{k as Le}from"./index-CZki1N6F.js";import{F as Re}from"./Field-DLW1HTnl.js";import{f as Be}from"./fireInputChange-BU1kNzof.js";import{u as Ne}from"./useFieldA11yIds-CXvEWjgF.js";import{a as Me,u as De}from"./index-X5EXH7qk.js";function qe(r){let s=!1;function e(...t){s||(s=!0,requestAnimationFrame(()=>{s=!1,r(...t)}))}return e}const Ie=Me({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{xs:{root:"h-4",track:`
          h-1 left-2 right-2
          before:w-2 before:-left-2
          after:w-2 after:-right-2
        `,thumb:"size-4"},sm:{root:"h-5",track:`
          h-1.25 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},base:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},lg:{root:"h-7",track:`
          h-1.75 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"},xl:{root:"h-8",track:`
          h-2 left-4 right-4
          before:w-4 before:-left-4
          after:w-4 after:-right-4
        `,thumb:"size-8"}},isKeyboardFocused:{true:{thumb:`
          border-blue-800
          after:absolute after:inset-3/10 after:bg-blue-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isKeyboardFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:"xs",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"sm",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"base",className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:"lg",className:{root:"mt-4"}},{hasFieldHeader:!0,sizer:"xl",className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:"xs",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"sm",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"base",className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:"lg",className:{root:"mb-4"}},{hasFieldFooter:!0,sizer:"xl",className:{root:"mb-4"}}],defaultVariants:{sizer:"base",isKeyboardFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Ue(r,s,e){return((r-s)/(e-s)||0)*100}function u({className:r,sizer:s,label:e,error:t,hint:i,disabled:m,required:ie,ref:q,name:oe,max:ce=100,min:ue=0,step:g=1,shiftSteps:I=10,tabIndex:de,value:ee,defaultValue:K,onChange:me,onMouseDown:ge,onTouchStart:he,onKeyDown:ve,onFocus:pe,onBlur:fe,"aria-labelledby":be,"aria-describedby":ye,"aria-errormessage":we,"aria-invalid":ae,...xe}){const T=l.useRef(null),W=l.useRef(null),p=l.useRef(null),[U,j]=l.useState(!1),[G,te]=l.useState(!1),[Se,se]=l.useState(K!==void 0?Number(K):void 0),f=Number(ce),h=Number(ue),_=ee!==void 0?Number(ee):Se,v=_===void 0?h:_,[re,He]=l.useState();function ne(n){const o=parseFloat(n.toFixed(5));se(o),Be(p.current,o.toString())}function $(n){if(!W.current)return;const{left:o,right:b,width:Ce}=W.current.getBoundingClientRect();let L="touches"in n?n.touches[0].clientX:n.clientX;L<o?L=o:L>b&&(L=b);let Z=(L-o)/Ce*(f-h)+h;Z=Math.round(Z/g)*g,ne(Z)}const O=qe(n=>{$(n)});function ke(n){m||(document.addEventListener("mousemove",O),document.addEventListener("mouseup",le),$(n.nativeEvent),ge?.(n),n.preventDefault(),U||j(!0),T.current?.focus())}function le(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",le)}function Ae(n){m||(document.addEventListener("touchmove",O),document.addEventListener("touchup",y),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y),$(n.nativeEvent),he?.(n))}function y(){document.removeEventListener("touchmove",O),document.removeEventListener("touchup",y),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)}function Ve(n){if(!m){let o;const b=n.nativeEvent.shiftKey;switch(Le(n.nativeEvent)||n.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":o=Math.min(f,v+(b?g*I:g));break;case"page up":case"PageUp":o=Math.min(f,v+g*I);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":o=Math.max(h,v-(b?g*I:g));break;case"page down":case"PageDown":o=Math.max(h,v-g*I);break;case"home":case"Home":o=h;break;case"end":case"End":o=f;break;case"esc":case"Escape":if(re!==void 0){o=re;break}else return;default:return}ne(o),ve?.(n),n.preventDefault(),U&&j(!1)}}function Ee(n){m||(G||(te(!0),He(v)),pe?.(n))}function Fe(n){m||(U&&j(!1),G&&te(!1),p.current&&fe?.({...n,target:p.current,currentTarget:p.current}))}l.useLayoutEffect(()=>{_===void 0&&K===void 0&&p.current?.value!=null&&se(Number(p.current.value))},[]);function Y(n){return typeof n=="function"?n({value:v,min:h,max:f,step:g}):n}const J=Y(e),Q=Y(i),w=Y(t),x=Ne({label:J,hint:Q,error:w,controlledAriaLabelledBy:be,controlledAriaDescribedBy:ye,controlledAriaErrorMessage:we}),X=Ue(v,h,f),ze=De(s),P=Ie({sizer:ze,isDisabled:m,isKeyboardFocused:G&&!m&&!U,hasFieldHeader:!!J,hasFieldFooter:!!(w&&w!==!0||Q),hasError:!!w,atMin:X===0,atMax:X===100});return l.useEffect(()=>{if(T.current){let n=function(b){b.preventDefault()};const o=T.current;return o.addEventListener("touchstart",n,{passive:!1}),()=>{o.removeEventListener("touchstart",n)}}},[T]),l.createElement(Re,{className:r,sizer:s,label:J,labelId:x.ariaLabelledBy,hint:Q,hintId:x.ariaDescribedBy,error:w,errorId:x.ariaErrorMessage,disabled:m,required:ie,"data-nickui-component":"Slider"},l.createElement("div",{...xe,ref:T,className:P.root(),role:"slider",tabIndex:m?-1:de||0,onMouseDown:ke,onTouchStart:Ae,onFocus:Ee,onBlur:Fe,onKeyDown:Ve,"aria-disabled":m,"aria-valuemax":f,"aria-valuemin":h,"aria-valuenow":v,"aria-labelledby":x.ariaLabelledBy,"aria-describedby":x.ariaDescribedBy,"aria-errormessage":x.ariaErrorMessage,"aria-invalid":ae!==void 0?ae:!!w},l.createElement("div",{ref:W,className:P.track()},l.createElement("div",{className:P.fill(),style:{right:`${100-X}%`},"data-testid":"fill"}),l.createElement("div",{className:P.thumb(),style:{left:`${X}%`},"data-testid":"thumb"}))),l.createElement("input",{ref:n=>{p.current=n,typeof q=="function"?q(n):q&&(q.current=n)},type:"text",name:oe,className:"hidden","aria-hidden":!0,defaultValue:_,onChange:me}))}u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"union",raw:`| 'xs'
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:a,fn:c}=__STORYBOOK_MODULE_TEST__,_e={title:"Form controls/Slider",component:u};function d(r){return{hint:({value:s})=>l.createElement("div",{className:"flex"},l.createElement("div",null,r),l.createElement("div",{className:"ml-auto"},s)),"aria-label":r}}const R={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("A label*"),t=r.getByTitle("(required)");await s("Assert accessibility of layout elements",async()=>{a(e).toHaveRole("slider"),a(e).toHaveAccessibleDescription("A hint"),a(e).toHaveAccessibleErrorMessage("An error message"),a(e).toHaveValue(50),a(e).toHaveAttribute("aria-valuemin","0"),a(e).toHaveAttribute("aria-valuemax","100"),a(t).toHaveTextContent("*")}),await s("Assert the error style",async()=>{a(r.getByTestId("fill")).toHaveClass("bg-rose-800")})}},S={tags:["control-state"],args:{...d("Slider with no valueish prop"),onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Increase value using right arrow",async()=>{a(i).toHaveValue(0),await t.tab(),a(i).toHaveFocus(),await t.keyboard("{ArrowRight}"),a(i).toHaveValue(1),a(r.onChange).toHaveBeenCalledOnce(),await t.keyboard("{Shift>}{ArrowRight}{/Shift}"),a(i).toHaveValue(11)}),await e("Increase value using up arrow",async()=>{await t.keyboard("{ArrowUp}"),a(i).toHaveValue(12),await t.keyboard("{Shift>}{ArrowUp}{/Shift}"),a(i).toHaveValue(22)}),await e("Increase value using page up",async()=>{await t.keyboard("{PageUp}"),a(i).toHaveValue(32)}),await e("Decrease value using left arrow",async()=>{await t.keyboard("{ArrowLeft}"),a(i).toHaveValue(31),await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(i).toHaveValue(21)}),await e("Decrease value using down arrow",async()=>{await t.keyboard("{ArrowDown}"),a(i).toHaveValue(20),await t.keyboard("{Shift>}{ArrowDown}{/Shift}"),a(i).toHaveValue(10)}),await e("Increase value using page up",async()=>{await t.keyboard("{PageDown}"),a(i).toHaveValue(0)}),await e("Set value to max using end key",async()=>{await t.keyboard("{End}"),a(i).toHaveValue(100)}),await e("Set value to min using home key",async()=>{await t.keyboard("{Home}"),a(i).toHaveValue(0),a(r.onChange).toHaveBeenCalledTimes(12)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},H={tags:["control-state"],args:{...d("Slider with controlled value"),value:"50",onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Assert `value` works",async()=>{a(i).toHaveValue(50)}),await e("Focus the Slider",async()=>{await t.tab(),a(i).toHaveFocus()}),await e("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.keyboard("{ArrowRight}"),a(r.onChange).toHaveBeenCalledOnce(),a(i).toHaveValue(50)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},k={tags:["control-state"],args:{...d("Slider with uncontrolled value"),defaultValue:"50",onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Assert `defaultValue` works",async()=>{a(i).toHaveValue(50)}),await e("Focus the Slider",async()=>{await t.tab(),a(i).toHaveFocus()}),await e("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await t.keyboard("{ArrowRight}"),a(i).toHaveValue(51),a(r.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.keyboard("{ArrowLeft}"),a(i).toHaveValue(50)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},A={tags:["control-state"],args:{...d("Disabled Slider"),disabled:!0,defaultValue:"50",onChange:c()},play:async({canvas:r,step:s,userEvent:e})=>{const t=r.getByRole("slider");await s("Assert disabled state",async()=>{a(t).toHaveAttribute("aria-disabled","true"),await e.tab(),a(t).not.toHaveFocus()})}},B={args:{...d("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,onChange:c()},play:async({canvas:r,step:s,userEvent:e})=>{const t=r.getByRole("slider");await s("Focus the Slider",async()=>{await e.tab(),a(t).toHaveFocus()}),await s("Increase the value by one step",async()=>{a(t).toHaveValue(0),await e.keyboard("{ArrowRight}"),a(t).toHaveValue(.01)}),await s('Use the shift key to decrease by one "shift step"',async()=>{await e.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(t).toHaveValue(-4.99)}),await s("Go to the max value",async()=>{await e.keyboard("{End}"),a(t).toHaveValue(1e3)}),await s("Go to the min value",async()=>{await e.keyboard("{Home}"),a(t).toHaveValue(-1e3)}),await s("Reset back to the initial value",async()=>{await e.keyboard("{Escape}"),a(t).toHaveValue(0)}),await s("Unfocus the Slider",async()=>{await e.tab(),a(t).not.toHaveFocus()})}},V={tags:["sizer"],args:{sizer:"xs",...d("Xs Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Xs Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the xs sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-4"),a(t).toHaveAttribute("data-nickui-sizer","xs")})}},E={tags:["sizer"],args:{sizer:"sm",...d("Sm Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Sm Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the sm sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-5"),a(t).toHaveAttribute("data-nickui-sizer","sm")})}},F={tags:["sizer"],args:{sizer:"base",...d("Base Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Base Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the base sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-6"),a(t).toHaveAttribute("data-nickui-sizer","base")})}},z={tags:["sizer"],args:{sizer:"lg",...d("Lg Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Lg Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the lg sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-7"),a(t).toHaveAttribute("data-nickui-sizer","lg")})}},C={tags:["sizer"],args:{sizer:"xl",...d("Xl Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Xl Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the xl sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-8"),a(t).toHaveAttribute("data-nickui-sizer","xl")})}},N={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],...d("Responsive Slider"),defaultValue:"50",onChange:c()}},M={tags:["!dev","!test"],render:r=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(u,{...S.args}),l.createElement(u,{...H.args}),l.createElement(u,{...k.args}),l.createElement(u,{...A.args}))},D={tags:["!dev","!test"],render:r=>l.createElement(Te,null,l.createElement(u,{...V.args,className:"sm:flex-6"}),l.createElement(u,{...E.args,className:"sm:flex-7"}),l.createElement(u,{...F.args,className:"sm:flex-8"}),l.createElement(u,{...z.args,className:"sm:flex-9"}),l.createElement(u,{...C.args,className:"sm:flex-10"}))};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['field-layout'],
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('A label*');
    const requiredAsterisk = canvas.getByTitle('(required)');
    await step('Assert accessibility of layout elements', async () => {
      expect(slider).toHaveRole('slider');
      expect(slider).toHaveAccessibleDescription('A hint');
      expect(slider).toHaveAccessibleErrorMessage('An error message');
      expect(slider).toHaveValue(50);
      expect(slider).toHaveAttribute('aria-valuemin', '0');
      expect(slider).toHaveAttribute('aria-valuemax', '100');
      expect(requiredAsterisk).toHaveTextContent('*');
    });
    await step('Assert the error style', async () => {
      expect(canvas.getByTestId('fill')).toHaveClass('bg-rose-800');
    });
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with no valueish prop'),
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Increase value using right arrow', async () => {
      expect(slider).toHaveValue(0);
      await userEvent.tab();
      expect(slider).toHaveFocus();
      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(1);
      expect(args.onChange).toHaveBeenCalledOnce();
      await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
      expect(slider).toHaveValue(11);
    });
    await step('Increase value using up arrow', async () => {
      await userEvent.keyboard('{ArrowUp}');
      expect(slider).toHaveValue(12);
      await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}');
      expect(slider).toHaveValue(22);
    });
    await step('Increase value using page up', async () => {
      await userEvent.keyboard('{PageUp}');
      expect(slider).toHaveValue(32);
    });
    await step('Decrease value using left arrow', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(slider).toHaveValue(31);
      await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}');
      expect(slider).toHaveValue(21);
    });
    await step('Decrease value using down arrow', async () => {
      await userEvent.keyboard('{ArrowDown}');
      expect(slider).toHaveValue(20);
      await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
      expect(slider).toHaveValue(10);
    });
    await step('Increase value using page up', async () => {
      await userEvent.keyboard('{PageDown}');
      expect(slider).toHaveValue(0);
    });
    await step('Set value to max using end key', async () => {
      await userEvent.keyboard('{End}');
      expect(slider).toHaveValue(100);
    });
    await step('Set value to min using home key', async () => {
      await userEvent.keyboard('{Home}');
      expect(slider).toHaveValue(0);
      expect(args.onChange).toHaveBeenCalledTimes(12);
    });
    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  }
}`,...S.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with controlled value'),
    value: '50',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Assert \`value\` works', async () => {
      expect(slider).toHaveValue(50);
    });
    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });
    await step('Try increasing the value. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.keyboard('{ArrowRight}');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(slider).toHaveValue(50);
    });
    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  }
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    ...withMetaHint('Slider with uncontrolled value'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Assert \`defaultValue\` works', async () => {
      expect(slider).toHaveValue(50);
    });
    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });
    await step('Sliding the Slider should change the value, since it’s uncontrolled', async () => {
      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(51);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(slider).toHaveValue(50);
    });
    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['control-state'],
  args: {
    ...withMetaHint('Disabled Slider'),
    disabled: true,
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Assert disabled state', async () => {
      expect(slider).toHaveAttribute('aria-disabled', 'true');
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Slider with custom range'),
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500,
    onChange: fn()
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Focus the Slider', async () => {
      await userEvent.tab();
      expect(slider).toHaveFocus();
    });
    await step('Increase the value by one step', async () => {
      expect(slider).toHaveValue(0);
      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(0.01);
    });
    await step('Use the shift key to decrease by one "shift step"', async () => {
      await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}');
      expect(slider).toHaveValue(-4.99);
    });
    await step('Go to the max value', async () => {
      await userEvent.keyboard('{End}');
      expect(slider).toHaveValue(1000);
    });
    await step('Go to the min value', async () => {
      await userEvent.keyboard('{Home}');
      expect(slider).toHaveValue(-1000);
    });
    await step('Reset back to the initial value', async () => {
      await userEvent.keyboard('{Escape}');
      expect(slider).toHaveValue(0);
    });
    await step('Unfocus the Slider', async () => {
      await userEvent.tab();
      expect(slider).not.toHaveFocus();
    });
  }
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xs',
    ...withMetaHint('Xs Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('Xs Slider');
    const field = slider.closest('[data-nickui-component="Slider"]');
    await step('Assert the xs sizer style on both the Slider & Field', async () => {
      expect(slider).toHaveClass('h-4');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xs');
    });
  }
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'sm',
    ...withMetaHint('Sm Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('Sm Slider');
    const field = slider.closest('[data-nickui-component="Slider"]');
    await step('Assert the sm sizer style on both the Slider & Field', async () => {
      expect(slider).toHaveClass('h-5');
      expect(field).toHaveAttribute('data-nickui-sizer', 'sm');
    });
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'base',
    ...withMetaHint('Base Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('Base Slider');
    const field = slider.closest('[data-nickui-component="Slider"]');
    await step('Assert the base sizer style on both the Slider & Field', async () => {
      expect(slider).toHaveClass('h-6');
      expect(field).toHaveAttribute('data-nickui-sizer', 'base');
    });
  }
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'lg',
    ...withMetaHint('Lg Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('Lg Slider');
    const field = slider.closest('[data-nickui-component="Slider"]');
    await step('Assert the lg sizer style on both the Slider & Field', async () => {
      expect(slider).toHaveClass('h-7');
      expect(field).toHaveAttribute('data-nickui-sizer', 'lg');
    });
  }
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: 'xl',
    ...withMetaHint('Xl Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    const slider = canvas.getByLabelText('Xl Slider');
    const field = slider.closest('[data-nickui-component="Slider"]');
    await step('Assert the xl sizer style on both the Slider & Field', async () => {
      expect(slider).toHaveClass('h-8');
      expect(field).toHaveAttribute('data-nickui-sizer', 'xl');
    });
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn()
  }
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...noValue.args} />
      <Slider {...controlled.args} />
      <Slider {...uncontrolled.args} />
      <Slider {...disabled.args} />
    </div>
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper>
      <Slider {...xs.args} className="sm:flex-6" />
      <Slider {...sm.args} className="sm:flex-7" />
      <Slider {...base.args} className="sm:flex-8" />
      <Slider {...lg.args} className="sm:flex-9" />
      <Slider {...xl.args} className="sm:flex-10" />
    </AllSizersStoryWrapper>
}`,...D.parameters?.docs?.source}}};const Oe=["fieldLayout","noValue","controlled","uncontrolled","disabled","customRange","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],Je=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:Oe,allControlStates:M,allSizers:D,base:F,controlled:H,customRange:B,default:_e,disabled:A,fieldLayout:R,lg:z,noValue:S,responsive:N,sm:E,uncontrolled:k,xl:C,xs:V},Symbol.toStringTag,{value:"Module"}));export{u as S,B as c,Je as s};
