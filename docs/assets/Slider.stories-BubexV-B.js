import{r as o}from"./iframe-D_dx4C3o.js";import{A as Ne}from"./AllSizersStoryWrapper-M2xuQLnL.js";import{g as Me}from"./getStoryArgTypes-CvpAwH8w.js";import{k as De}from"./index-Bl3bBT5F.js";import{F as qe}from"./Field-DLgvBtFY.js";import{a as Ie}from"./fieldA11y-C3gyBWsB.js";import{f as Ue}from"./fireInputChange-BU1kNzof.js";import{r as _e,u as Oe}from"./index-D1YO4riR.js";function Pe(r){let s=!1;function e(...t){s||(s=!0,requestAnimationFrame(()=>{s=!1,r(...t)}))}return e}const Xe=_e({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
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
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isKeyboardFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:"xs",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"sm",className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:"base",className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:"lg",className:{root:"mt-4"}},{hasFieldHeader:!0,sizer:"xl",className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:"xs",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"sm",className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:"base",className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:"lg",className:{root:"mb-4"}},{hasFieldFooter:!0,sizer:"xl",className:{root:"mb-4"}}],defaultVariants:{sizer:"base",isKeyboardFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Ke(r,s,e){return((r-s)/(e-s)||0)*100}function u({className:r,sizer:s,label:e,error:t,hint:i,disabled:m,required:oe,value:Q,defaultValue:X,max:ie=100,min:le=0,step:ce=1,shiftSteps:ue=10,ref:D,onBlur:de,onChange:me,name:he,tabIndex:pe,onMouseDown:fe,onTouchStart:ge,onKeyDown:ve,onFocus:ye,id:be,"aria-label":we,"aria-labelledby":Se,"aria-describedby":He,"aria-errormessage":xe,"aria-invalid":ke,...Ae}){const F=o.useRef(null),K=o.useRef(null),g=o.useRef(null),[q,W]=o.useState(!1),[j,ee]=o.useState(!1),[Ve,ae]=o.useState(X!==void 0?Number(X):void 0),v=Number(ie),h=Number(le),p=Number(ce),I=Number(ue),U=Q!==void 0?Number(Q):Ve,f=U===void 0?h:U,[te,Ee]=o.useState();function se(n){const l=parseFloat(n.toFixed(5));ae(l),Ue(g.current,l.toString())}function G(n){if(!K.current)return;const{left:l,right:y,width:Be}=K.current.getBoundingClientRect();let T="touches"in n?n.touches[0].clientX:n.clientX;T<l?T=l:T>y&&(T=y);let J=(T-l)/Be*(v-h)+h;J=Math.round(J/p)*p,se(J)}const _=Pe(n=>{G(n)});function ze(n){m||(document.addEventListener("mousemove",_),document.addEventListener("mouseup",re),G(n.nativeEvent),fe?.(n),n.preventDefault(),q||W(!0),F.current?.focus())}function re(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",re)}function Fe(n){m||(document.addEventListener("touchmove",_),document.addEventListener("touchup",b),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b),G(n.nativeEvent),ge?.(n))}function b(){document.removeEventListener("touchmove",_),document.removeEventListener("touchup",b),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)}function Ce(n){if(!m){let l;const y=n.nativeEvent.shiftKey;switch(De(n.nativeEvent)||n.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":l=Math.min(v,f+(y?p*I:p));break;case"page up":case"PageUp":l=Math.min(v,f+p*I);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":l=Math.max(h,f-(y?p*I:p));break;case"page down":case"PageDown":l=Math.max(h,f-p*I);break;case"home":case"Home":l=h;break;case"end":case"End":l=v;break;case"esc":case"Escape":if(te!==void 0){l=te;break}else return;default:return}se(l),ve?.(n),n.preventDefault(),q&&W(!1)}}function Te(n){m||(j||(ee(!0),Ee(f)),ye?.(n))}function Le(n){m||(q&&W(!1),j&&ee(!1),g.current&&de?.({...n,target:g.current,currentTarget:g.current}))}o.useLayoutEffect(()=>{U===void 0&&X===void 0&&g.current?.value!=null&&ae(Number(g.current.value))},[]);function Z(n){return typeof n=="function"?n({value:f,min:h,max:v,step:p}):n}const $=Z(e),Y=Z(i),C=Z(t),ne=Ie({label:$,hint:Y,error:C,controlledId:be,controlledAriaLabel:we,controlledAriaLabelledBy:Se,controlledAriaDescribedBy:He,controlledAriaErrorMessage:xe,controlledAriaInvalid:ke}),O=Ke(f,h,v),Re=Oe(s),P=Xe({sizer:Re,isDisabled:m,isKeyboardFocused:j&&!m&&!q,hasFieldHeader:!!$,hasFieldFooter:!!(C&&C!==!0||Y),hasError:!!C,atMin:O===0,atMax:O===100});return o.useEffect(()=>{if(F.current){let n=function(y){y.preventDefault()};const l=F.current;return l.addEventListener("touchstart",n,{passive:!1}),()=>{l.removeEventListener("touchstart",n)}}},[F]),o.createElement(qe,{...ne.field,className:r,sizer:s,label:$,hint:Y,error:C,required:oe,"data-nickui-component":"Slider"},o.createElement("div",{...Ae,...ne.formControl,ref:F,className:P.root(),role:"slider",tabIndex:m?-1:pe||0,onMouseDown:ze,onTouchStart:Fe,onFocus:Te,onBlur:Le,onKeyDown:Ce,"aria-disabled":m,"aria-valuemax":v,"aria-valuemin":h,"aria-valuenow":f},o.createElement("div",{ref:K,className:P.track()},o.createElement("div",{className:P.fill(),style:{right:`${100-O}%`},"data-testid":"fill"}),o.createElement("div",{className:P.thumb(),style:{left:`${O}%`},"data-testid":"thumb"}))),o.createElement("input",{ref:n=>{g.current=n,typeof D=="function"?D(n):D&&(D.current=n)},type:"text",name:he,className:"hidden","aria-hidden":!0,defaultValue:U,onChange:me}))}u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps}`,methods:[],displayName:"Slider",props:{sizer:{required:!1,tsType:{name:"union",raw:"SizerType | SizerType[]",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof SIZERS)[number]"}],raw:"SizerType[]"}]},description:`Changes the size of the component. A sizer string, or an array of sizer
strings for responsive sizing.`},label:{required:!1,tsType:{name:"DescriptorType"},description:"The main label to show above the form control(s), naming the field"},hint:{required:!1,tsType:{name:"DescriptorType"},description:`A hint about what kind of value the field accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"DescriptorType"},description:"Error message to show beneath the form control(s), or just `true` to\ntrigger the error style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the component"},value:{required:!1,tsType:{name:"ValueType"},description:`Sets the value of the component when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"ValueType"},description:"Sets the value of the component when using it as an uncontrolled component"},name:{required:!1,tsType:{name:"string"},description:"The name of the field"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}}}};const{expect:a,fn:c}=__STORYBOOK_MODULE_TEST__,We={title:"Form controls/Slider",component:u,argTypes:Me({formControl:{isDisableable:!0,valueType:["string","number"]},isSizerable:!0,types:{min:["number","string"],max:["number","string"],step:["number","string"],shiftSteps:["number","string"]}})};function d(r){return{hint:({value:s})=>o.createElement("div",{className:"flex"},o.createElement("div",null,r),o.createElement("div",{className:"ml-auto"},s)),"aria-label":r}}const L={tags:["field-layout"],args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("A label*"),t=r.getByTitle("(required)");await s("Assert accessibility of layout elements",async()=>{a(e).toHaveRole("slider"),a(e).toHaveAccessibleDescription("A hint"),a(e).toHaveAccessibleErrorMessage("An error message"),a(e).toHaveValue(50),a(e).toHaveAttribute("aria-valuemin","0"),a(e).toHaveAttribute("aria-valuemax","100"),a(t).toHaveTextContent("*")}),await s("Assert the error style",async()=>{a(r.getByTestId("fill")).toHaveClass("bg-rose-800")})}},w={tags:["control-state"],args:{...d("Slider with no valueish prop"),onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Increase value using right arrow",async()=>{a(i).toHaveValue(0),await t.tab(),a(i).toHaveFocus(),await t.keyboard("{ArrowRight}"),a(i).toHaveValue(1),a(r.onChange).toHaveBeenCalledOnce(),await t.keyboard("{Shift>}{ArrowRight}{/Shift}"),a(i).toHaveValue(11)}),await e("Increase value using up arrow",async()=>{await t.keyboard("{ArrowUp}"),a(i).toHaveValue(12),await t.keyboard("{Shift>}{ArrowUp}{/Shift}"),a(i).toHaveValue(22)}),await e("Increase value using page up",async()=>{await t.keyboard("{PageUp}"),a(i).toHaveValue(32)}),await e("Decrease value using left arrow",async()=>{await t.keyboard("{ArrowLeft}"),a(i).toHaveValue(31),await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(i).toHaveValue(21)}),await e("Decrease value using down arrow",async()=>{await t.keyboard("{ArrowDown}"),a(i).toHaveValue(20),await t.keyboard("{Shift>}{ArrowDown}{/Shift}"),a(i).toHaveValue(10)}),await e("Increase value using page up",async()=>{await t.keyboard("{PageDown}"),a(i).toHaveValue(0)}),await e("Set value to max using end key",async()=>{await t.keyboard("{End}"),a(i).toHaveValue(100)}),await e("Set value to min using home key",async()=>{await t.keyboard("{Home}"),a(i).toHaveValue(0),a(r.onChange).toHaveBeenCalledTimes(12)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},S={tags:["control-state"],args:{...d("Slider with controlled value"),value:"50",onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Assert `value` works",async()=>{a(i).toHaveValue(50)}),await e("Focus the Slider",async()=>{await t.tab(),a(i).toHaveFocus()}),await e("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.keyboard("{ArrowRight}"),a(r.onChange).toHaveBeenCalledOnce(),a(i).toHaveValue(50)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},H={tags:["control-state"],args:{...d("Slider with uncontrolled value"),defaultValue:"50",onChange:c()},play:async({args:r,canvas:s,step:e,userEvent:t})=>{const i=s.getByRole("slider");await e("Assert `defaultValue` works",async()=>{a(i).toHaveValue(50)}),await e("Focus the Slider",async()=>{await t.tab(),a(i).toHaveFocus()}),await e("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await t.keyboard("{ArrowRight}"),a(i).toHaveValue(51),a(r.onChange).toHaveBeenCalledOnce()}),await e("Reset the value",async()=>{await t.keyboard("{ArrowLeft}"),a(i).toHaveValue(50)}),await e("Unfocus the Slider",async()=>{await t.tab(),a(i).not.toHaveFocus()})}},x={tags:["control-state"],args:{...d("Disabled Slider"),disabled:!0,defaultValue:"50",onChange:c()},play:async({canvas:r,step:s,userEvent:e})=>{const t=r.getByRole("slider");await s("Assert disabled state",async()=>{a(t).toHaveAttribute("aria-disabled","true"),await e.tab(),a(t).not.toHaveFocus()})}},R={args:{...d("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,onChange:c()},play:async({canvas:r,step:s,userEvent:e})=>{const t=r.getByRole("slider");await s("Focus the Slider",async()=>{await e.tab(),a(t).toHaveFocus()}),await s("Increase the value by one step",async()=>{a(t).toHaveValue(0),await e.keyboard("{ArrowRight}"),a(t).toHaveValue(.01)}),await s('Use the shift key to decrease by one "shift step"',async()=>{await e.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(t).toHaveValue(-4.99)}),await s("Go to the max value",async()=>{await e.keyboard("{End}"),a(t).toHaveValue(1e3)}),await s("Go to the min value",async()=>{await e.keyboard("{Home}"),a(t).toHaveValue(-1e3)}),await s("Reset back to the initial value",async()=>{await e.keyboard("{Escape}"),a(t).toHaveValue(0)}),await s("Unfocus the Slider",async()=>{await e.tab(),a(t).not.toHaveFocus()})}},k={tags:["sizer"],args:{sizer:"xs",...d("Xs Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Xs Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the xs sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-4"),a(t).toHaveAttribute("data-nickui-sizer","xs")})}},A={tags:["sizer"],args:{sizer:"sm",...d("Sm Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Sm Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the sm sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-5"),a(t).toHaveAttribute("data-nickui-sizer","sm")})}},V={tags:["sizer"],args:{sizer:"base",...d("Base Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Base Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the base sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-6"),a(t).toHaveAttribute("data-nickui-sizer","base")})}},E={tags:["sizer"],args:{sizer:"lg",...d("Lg Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Lg Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the lg sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-7"),a(t).toHaveAttribute("data-nickui-sizer","lg")})}},z={tags:["sizer"],args:{sizer:"xl",...d("Xl Slider"),defaultValue:"50",onChange:c()},play:async({canvas:r,step:s})=>{const e=r.getByLabelText("Xl Slider"),t=e.closest('[data-nickui-component="Slider"]');await s("Assert the xl sizer style on both the Slider & Field",async()=>{a(e).toHaveClass("h-8"),a(t).toHaveAttribute("data-nickui-sizer","xl")})}},B={tags:["sizer"],args:{sizer:["xs","sm:sm","md:base","lg:lg","xl:xl"],...d("Responsive Slider"),defaultValue:"50",onChange:c()}},N={tags:["!dev","!test"],render:r=>o.createElement("div",{className:"flex flex-col gap-4"},o.createElement(u,{...w.args}),o.createElement(u,{...S.args}),o.createElement(u,{...H.args}),o.createElement(u,{...x.args}))},M={tags:["!dev","!test"],render:r=>o.createElement(Ne,null,o.createElement(u,{...k.args,className:"sm:flex-6"}),o.createElement(u,{...A.args,className:"sm:flex-7"}),o.createElement(u,{...V.args,className:"sm:flex-8"}),o.createElement(u,{...E.args,className:"sm:flex-9"}),o.createElement(u,{...z.args,className:"sm:flex-10"}))};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['sizer'],
  args: {
    sizer: ['xs', 'sm:sm', 'md:base', 'lg:lg', 'xl:xl'],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn()
  }
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...noValue.args} />
      <Slider {...controlled.args} />
      <Slider {...uncontrolled.args} />
      <Slider {...disabled.args} />
    </div>
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <AllSizersStoryWrapper>
      <Slider {...xs.args} className="sm:flex-6" />
      <Slider {...sm.args} className="sm:flex-7" />
      <Slider {...base.args} className="sm:flex-8" />
      <Slider {...lg.args} className="sm:flex-9" />
      <Slider {...xl.args} className="sm:flex-10" />
    </AllSizersStoryWrapper>
}`,...M.parameters?.docs?.source}}};const je=["fieldLayout","noValue","controlled","uncontrolled","disabled","customRange","xs","sm","base","lg","xl","responsive","allControlStates","allSizers"],sa=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:je,allControlStates:N,allSizers:M,base:V,controlled:S,customRange:R,default:We,disabled:x,fieldLayout:L,lg:E,noValue:w,responsive:B,sm:A,uncontrolled:H,xl:z,xs:k},Symbol.toStringTag,{value:"Module"}));export{u as S,R as c,sa as s};
