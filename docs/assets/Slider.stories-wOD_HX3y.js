import{r as l}from"./iframe-BLM9_nYH.js";import{A as De}from"./AllSizersStoryWrapper-DvGML2ek.js";import{k as qe}from"./index-BPTtCm5M.js";import{F as Ie}from"./Field--9-VMxtM.js";import{r as Z}from"./randomId-Dfhrkieu.js";import{a as Ue,u as Xe}from"./index-BGW97fss.js";function Oe(s){let r=!1;function a(...t){r||(r=!0,requestAnimationFrame(()=>{r=!1,s(...t)}))}return a}const _e=Ue({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
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
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isKeyboardFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:"xs",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"sm",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"base",className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:"lg",className:{root:"mt-4"}},{hasFieldHeader:!0,sizer:"xl",className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:"xs",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"sm",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"base",className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:"lg",className:{root:"mb-4"}},{hasFieldFooter:!0,sizer:"xl",className:{root:"mb-4"}}],defaultVariants:{sizer:"base",isKeyboardFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Pe(s,r,a){return((s-r)/(a-r)||0)*100}function u({className:s,sizer:r,label:a,error:t,hint:o,disabled:m,required:de,ref:q,name:me,max:ge=100,min:he=0,step:g=1,shiftSteps:I=10,tabIndex:ve,value:ee,defaultValue:K,onChange:pe,onMouseDown:fe,onTouchStart:ye,onKeyDown:be,onFocus:we,onBlur:xe,"aria-labelledby":Se,"aria-describedby":He,"aria-errormessage":Ae,"aria-invalid":ae,...Ve}){const z=l.useRef(null),j=l.useRef(null),h=l.useRef(null),[U,W]=l.useState(!1),[G,te]=l.useState(!1),[Ee,se]=l.useState(K!==void 0?Number(K):void 0),b=Number(ge),v=Number(he),X=ee!==void 0?Number(ee):Ee,f=X===void 0?v:X,[re,ke]=l.useState();function ne(n){const i=parseFloat(n.toFixed(5));if(se(i),h.current){const p=window.HTMLInputElement.prototype,y=Object.getOwnPropertyDescriptor(p,"value").set;if(y){const N=new Event("input",{bubbles:!0});y.call(h.current,i),h.current.dispatchEvent(N)}}}function $(n){if(!j.current)return;const{left:i,right:p,width:ue}=j.current.getBoundingClientRect();let y="touches"in n?n.touches[0].clientX:n.clientX;y<i?y=i:y>p&&(y=p);let N=(y-i)/ue*(b-v)+v;N=Math.round(N/g)*g,ne(N)}const O=Oe(n=>{$(n)});function Ce(n){m||(document.addEventListener("mousemove",O),document.addEventListener("mouseup",le),$(n.nativeEvent),fe?.(n),n.preventDefault(),U||W(!0),z.current?.focus())}function le(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",le)}function Fe(n){m||(document.addEventListener("touchmove",O),document.addEventListener("touchup",x),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),$(n.nativeEvent),ye?.(n))}function x(){document.removeEventListener("touchmove",O),document.removeEventListener("touchup",x),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}function Te(n){if(!m){let i;const p=n.nativeEvent.shiftKey;switch(qe(n.nativeEvent)||n.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":i=Math.min(b,f+(p?g*I:g));break;case"page up":case"PageUp":i=Math.min(b,f+g*I);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":i=Math.max(v,f-(p?g*I:g));break;case"page down":case"PageDown":i=Math.max(v,f-g*I);break;case"home":case"Home":i=v;break;case"end":case"End":i=b;break;case"esc":case"Escape":if(re!==void 0){i=re;break}else return;default:return}ne(i),be?.(n),n.preventDefault(),U&&W(!1)}}function ze(n){m||(G||(te(!0),ke(f)),we?.(n))}function Ne(n){m||(U&&W(!1),G&&te(!1),h.current&&xe?.({...n,target:h.current,currentTarget:h.current}))}l.useLayoutEffect(()=>{X===void 0&&K===void 0&&h.current?.value!=null&&se(Number(h.current.value))},[]);function Y(n){return typeof n=="function"?n({value:f,min:v,max:b,step:g}):n}const J=Y(a),Q=Y(o),w=Y(t),[Be]=l.useState(Z()),oe=Se||(J?Be:void 0),[Le]=l.useState(Z()),ie=He||(Q?Le:void 0),[Re]=l.useState(Z()),ce=Ae||(w&&w!==!0?Re:void 0),_=Pe(f,v,b),Me=Xe(r),P=_e({sizer:Me,isDisabled:m,isKeyboardFocused:G&&!m&&!U,hasFieldHeader:!!J,hasFieldFooter:!!(w&&w!==!0||Q),hasError:!!w,atMin:_===0,atMax:_===100});return l.useEffect(()=>{if(z.current){let n=function(p){p.preventDefault()};const i=z.current;return i.addEventListener("touchstart",n,{passive:!1}),()=>{i.removeEventListener("touchstart",n)}}},[z]),l.createElement(Ie,{className:s,sizer:r,label:J,labelId:oe,hint:Q,hintId:ie,error:w,errorId:ce,disabled:m,required:de},l.createElement("div",{...Ve,ref:z,className:P.root(),role:"slider",tabIndex:m?-1:ve||0,onMouseDown:Ce,onTouchStart:Fe,onFocus:ze,onBlur:Ne,onKeyDown:Te,"aria-disabled":m,"aria-valuemax":b,"aria-valuemin":v,"aria-valuenow":f,"aria-labelledby":oe,"aria-describedby":ie,"aria-errormessage":ce,"aria-invalid":ae!==void 0?ae:!!w},l.createElement("div",{ref:j,className:P.track()},l.createElement("div",{className:P.fill(),style:{right:`${100-_}%`},"data-testid":"fill"}),l.createElement("div",{className:P.thumb(),style:{left:`${_}%`},"data-testid":"thumb"}))),l.createElement("input",{ref:n=>{h.current=n,typeof q=="function"?q(n):q&&(q.current=n)},type:"text",name:me,className:"hidden","aria-hidden":!0,defaultValue:X,onChange:pe}))}u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
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
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:c}=__STORYBOOK_MODULE_TEST__,Ke={title:"Form controls/Slider",component:u};function d(s){return{hint:({value:r})=>l.createElement("div",{className:"flex"},l.createElement("div",null,s),l.createElement("div",{className:"ml-auto"},r)),"aria-label":s}}const B={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{const a=s.getByLabelText("A label*"),t=s.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("slider"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(a).toHaveValue(50),e(a).toHaveAttribute("aria-valuemin","0"),e(a).toHaveAttribute("aria-valuemax","100"),e(t).toHaveTextContent("*")}),await r("Assert the error style",async()=>{e(s.getByTestId("fill")).toHaveClass("bg-rose-800")})}},S={tags:["control-state"],args:{...d("Slider with no valueish prop"),onChange:c()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const o=r.getByRole("slider");await a("Increase value using right arrow",async()=>{e(o).toHaveValue(0),await t.tab(),e(o).toHaveFocus(),await t.keyboard("{ArrowRight}"),e(o).toHaveValue(1),e(s.onChange).toHaveBeenCalledOnce(),await t.keyboard("{Shift>}{ArrowRight}{/Shift}"),e(o).toHaveValue(11)}),await a("Increase value using up arrow",async()=>{await t.keyboard("{ArrowUp}"),e(o).toHaveValue(12),await t.keyboard("{Shift>}{ArrowUp}{/Shift}"),e(o).toHaveValue(22)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageUp}"),e(o).toHaveValue(32)}),await a("Decrease value using left arrow",async()=>{await t.keyboard("{ArrowLeft}"),e(o).toHaveValue(31),await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(o).toHaveValue(21)}),await a("Decrease value using down arrow",async()=>{await t.keyboard("{ArrowDown}"),e(o).toHaveValue(20),await t.keyboard("{Shift>}{ArrowDown}{/Shift}"),e(o).toHaveValue(10)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageDown}"),e(o).toHaveValue(0)}),await a("Set value to max using end key",async()=>{await t.keyboard("{End}"),e(o).toHaveValue(100)}),await a("Set value to min using home key",async()=>{await t.keyboard("{Home}"),e(o).toHaveValue(0),e(s.onChange).toHaveBeenCalledTimes(12)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(o).not.toHaveFocus()})}},H={tags:["control-state"],args:{...d("Slider with controlled value"),value:"50",onChange:c()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const o=r.getByRole("slider");await a("Assert `value` works",async()=>{e(o).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(o).toHaveFocus()}),await a("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.keyboard("{ArrowRight}"),e(s.onChange).toHaveBeenCalledOnce(),e(o).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(o).not.toHaveFocus()})}},A={tags:["control-state"],args:{...d("Slider with uncontrolled value"),defaultValue:"50",onChange:c()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const o=r.getByRole("slider");await a("Assert `defaultValue` works",async()=>{e(o).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(o).toHaveFocus()}),await a("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await t.keyboard("{ArrowRight}"),e(o).toHaveValue(51),e(s.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await t.keyboard("{ArrowLeft}"),e(o).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(o).not.toHaveFocus()})}},V={tags:["control-state"],args:{...d("Disabled Slider"),disabled:!0,defaultValue:"50",onChange:c()},play:async({canvas:s,step:r,userEvent:a})=>{const t=s.getByRole("slider");await r("Assert disabled state",async()=>{e(t).toHaveAttribute("aria-disabled","true"),await a.tab(),e(t).not.toHaveFocus()})}},L={args:{...d("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,onChange:c()},play:async({canvas:s,step:r,userEvent:a})=>{const t=s.getByRole("slider");await r("Focus the Slider",async()=>{await a.tab(),e(t).toHaveFocus()}),await r("Increase the value by one step",async()=>{e(t).toHaveValue(0),await a.keyboard("{ArrowRight}"),e(t).toHaveValue(.01)}),await r('Use the shift key to decrease by one "shift step"',async()=>{await a.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(t).toHaveValue(-4.99)}),await r("Go to the max value",async()=>{await a.keyboard("{End}"),e(t).toHaveValue(1e3)}),await r("Go to the min value",async()=>{await a.keyboard("{Home}"),e(t).toHaveValue(-1e3)}),await r("Reset back to the initial value",async()=>{await a.keyboard("{Escape}"),e(t).toHaveValue(0)}),await r("Unfocus the Slider",async()=>{await a.tab(),e(t).not.toHaveFocus()})}},E={tags:["sizer"],args:{sizer:"xs",...d("Xs Slider"),defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{await r("Assert the xs sizer style on both the Slider & Field",async()=>{e(s.getByLabelText("Xs Slider")).toHaveClass("h-4"),e(s.getByText("Xs Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},k={tags:["sizer"],args:{sizer:"sm",...d("Sm Slider"),defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{await r("Assert the sm sizer style on both the Slider & Field",async()=>{e(s.getByLabelText("Sm Slider")).toHaveClass("h-5"),e(s.getByText("Sm Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},C={tags:["sizer"],args:{sizer:"base",...d("Base Slider"),defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{await r("Assert the base sizer style on both the Slider & Field",async()=>{e(s.getByLabelText("Base Slider")).toHaveClass("h-6"),e(s.getByText("Base Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},F={tags:["sizer"],args:{sizer:"lg",...d("Lg Slider"),defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{await r("Assert the lg sizer style on both the Slider & Field",async()=>{e(s.getByLabelText("Lg Slider")).toHaveClass("h-7"),e(s.getByText("Lg Slider").parentNode?.parentNode).toHaveClass("text-base")})}},T={tags:["sizer"],args:{sizer:"xl",...d("Xl Slider"),defaultValue:"50",onChange:c()},play:async({canvas:s,step:r})=>{await r("Assert the xl sizer style on both the Slider & Field",async()=>{e(s.getByLabelText("Xl Slider")).toHaveClass("h-8"),e(s.getByText("Xl Slider").parentNode?.parentNode).toHaveClass("text-lg")})}},R={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],...d("Responsive Slider"),defaultValue:"50",onChange:c()}},M={tags:["!dev","!test"],render:s=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(u,{...S.args}),l.createElement(u,{...H.args}),l.createElement(u,{...A.args}),l.createElement(u,{...V.args}))},D={tags:["!dev","!test"],render:s=>l.createElement(De,null,l.createElement(u,{...E.args,className:"sm:flex-1"}),l.createElement(u,{...k.args,className:"sm:flex-1"}),l.createElement(u,{...C.args,className:"sm:flex-1"}),l.createElement(u,{...F.args,className:"sm:flex-1"}),l.createElement(u,{...T.args,className:"sm:flex-1"}))};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const requiredAsterisk = canvas.getByTitle('required');
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    await step('Assert the xs sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Xs Slider')).toHaveClass('h-4');
      expect(canvas.getByText('Xs Slider').parentNode?.parentNode).toHaveClass('text-xs');
    });
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    await step('Assert the sm sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Sm Slider')).toHaveClass('h-5');
      expect(canvas.getByText('Sm Slider').parentNode?.parentNode).toHaveClass('text-xs');
    });
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    await step('Assert the base sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Base Slider')).toHaveClass('h-6');
      expect(canvas.getByText('Base Slider').parentNode?.parentNode).toHaveClass('text-sm');
    });
  }
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
    await step('Assert the lg sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Lg Slider')).toHaveClass('h-7');
      expect(canvas.getByText('Lg Slider').parentNode?.parentNode).toHaveClass('text-base');
    });
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    await step('Assert the xl sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Xl Slider')).toHaveClass('h-8');
      expect(canvas.getByText('Xl Slider').parentNode?.parentNode).toHaveClass('text-lg');
    });
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn()
  }
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper>
      <Slider {...Xs.args} className="sm:flex-1" />
      <Slider {...Sm.args} className="sm:flex-1" />
      <Slider {...Base.args} className="sm:flex-1" />
      <Slider {...Lg.args} className="sm:flex-1" />
      <Slider {...Xl.args} className="sm:flex-1" />
    </AllSizersStoryWrapper>
}`,...D.parameters?.docs?.source}}};const je=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Xs","Sm","Base","Lg","Xl","Responsive","AllControlStates","AllSizers"],ea=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:M,AllSizers:D,Base:C,Controlled:H,CustomRange:L,Disabled:V,FieldLayout:B,Lg:F,NoValue:S,Responsive:R,Sm:k,Uncontrolled:A,Xl:T,Xs:E,__namedExportsOrder:je,default:Ke},Symbol.toStringTag,{value:"Module"}));export{L as C,ea as S,u as a};
