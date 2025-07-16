import{r as o}from"./iframe-B29wKBek.js";import{k as ze}from"./index-BCSSxY9e.js";import{F as De}from"./Field-Dh96h3vC.js";import{a as qe,S as u,u as Ie}from"./index-CkRd2nnq.js";import{r as Q}from"./randomId-Dfhrkieu.js";function Ue(s){let r=!1;function a(...t){r||(r=!0,requestAnimationFrame(()=>{r=!1,s(...t)}))}return a}const Oe=qe({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{[u.small]:{root:"h-5",track:`
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},[u.medium]:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[u.large]:{root:"h-7",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isKeyboardFocused:{true:{thumb:`
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isKeyboardFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:u.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:u.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:u.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:u.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:u.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:u.large,className:{root:"mb-4"}}],defaultVariants:{sizer:u.small,isKeyboardFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function _e(s,r,a){return((s-r)/(a-r)||0)*100}function c({className:s,sizer:r,label:a,error:t,hint:i,disabled:d,required:ue,ref:D,name:de,max:me=100,min:he=0,step:h=1,shiftSteps:q=10,tabIndex:pe,value:Z,defaultValue:K,onChange:fe,onMouseDown:ge,onTouchStart:ve,onKeyDown:ye,onFocus:we,onBlur:be,"aria-labelledby":Se,"aria-describedby":He,"aria-errormessage":xe,"aria-invalid":ee,...Ee}){const L=o.useRef(null),j=o.useRef(null),p=o.useRef(null),[I,X]=o.useState(!1),[G,ae]=o.useState(!1),[Ve,te]=o.useState(K!==void 0?Number(K):void 0),b=Number(me),f=Number(he),U=Z!==void 0?Number(Z):Ve,y=U===void 0?f:U,[re,ke]=o.useState();function ne(n){const l=parseFloat(n.toFixed(5));if(te(l),p.current){const g=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(g,"value").set;if(w){const R=new Event("input",{bubbles:!0});w.call(p.current,l),p.current.dispatchEvent(R)}}}function W(n){if(!j.current)return;const{left:l,right:g,width:ce}=j.current.getBoundingClientRect();let w="touches"in n?n.touches[0].clientX:n.clientX;w<l?w=l:w>g&&(w=g);let R=(w-l)/ce*(b-f)+f;R=Math.round(R/h)*h,ne(R)}const O=Ue(n=>{W(n)});function Ae(n){d||(document.addEventListener("mousemove",O),document.addEventListener("mouseup",se),W(n.nativeEvent),ge?.(n),n.preventDefault(),I||X(!0),L.current?.focus())}function se(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",se)}function Ce(n){d||(document.addEventListener("touchmove",O),document.addEventListener("touchup",H),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H),W(n.nativeEvent),ve?.(n))}function H(){document.removeEventListener("touchmove",O),document.removeEventListener("touchup",H),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)}function Fe(n){if(!d){let l;const g=n.nativeEvent.shiftKey;switch(ze(n.nativeEvent)||n.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":l=Math.min(b,y+(g?h*q:h));break;case"page up":case"PageUp":l=Math.min(b,y+h*q);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":l=Math.max(f,y-(g?h*q:h));break;case"page down":case"PageDown":l=Math.max(f,y-h*q);break;case"home":case"Home":l=f;break;case"end":case"End":l=b;break;case"esc":case"Escape":if(re!==void 0){l=re;break}else return;default:return}ne(l),ye?.(n),n.preventDefault(),I&&X(!1)}}function Te(n){d||(G||(ae(!0),ke(y)),we?.(n))}function Le(n){d||(I&&X(!1),G&&ae(!1),p.current&&be?.({...n,target:p.current,currentTarget:p.current}))}o.useLayoutEffect(()=>{U===void 0&&K===void 0&&p.current?.value!=null&&te(Number(p.current.value))},[]);function $(n){return typeof n=="function"?n({value:y,min:f,max:b,step:h}):n}const Y=$(a),J=$(i),S=$(t),[Re]=o.useState(Q()),oe=Se||(Y?Re:void 0),[Ne]=o.useState(Q()),ie=He||(J?Ne:void 0),[Me]=o.useState(Q()),le=xe||(S&&S!==!0?Me:void 0),_=_e(y,f,b),Be=Ie(r),P=Oe({sizer:Be,isDisabled:d,isKeyboardFocused:G&&!d&&!I,hasFieldHeader:!!Y,hasFieldFooter:!!(S&&S!==!0||J),hasError:!!S,atMin:_===0,atMax:_===100});return o.useEffect(()=>{if(L.current){let n=function(g){g.preventDefault()};const l=L.current;return l.addEventListener("touchstart",n,{passive:!1}),()=>{l.removeEventListener("touchstart",n)}}},[L]),o.createElement(De,{className:s,sizer:r,label:Y,labelId:oe,hint:J,hintId:ie,error:S,errorId:le,disabled:d,required:ue},o.createElement("div",{...Ee,ref:L,className:P.root(),role:"slider",tabIndex:d?-1:pe||0,onMouseDown:Ae,onTouchStart:Ce,onFocus:Te,onBlur:Le,onKeyDown:Fe,"aria-disabled":d,"aria-valuemax":b,"aria-valuemin":f,"aria-valuenow":y,"aria-labelledby":oe,"aria-describedby":ie,"aria-errormessage":le,"aria-invalid":ee!==void 0?ee:!!S},o.createElement("div",{ref:j,className:P.track()},o.createElement("div",{className:P.fill(),style:{right:`${100-_}%`},"data-testid":"fill"}),o.createElement("div",{className:P.thumb(),style:{left:`${_}%`},"data-testid":"thumb"}))),o.createElement("input",{ref:n=>{p.current=n,typeof D=="function"?D(n):D&&(D.current=n)},type:"text",name:de,className:"hidden","aria-hidden":!0,defaultValue:U,onChange:fe}))}c.sizer=u;c.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:m}=__STORYBOOK_MODULE_TEST__,Pe={title:"Form controls/Slider",component:c};function v(s){return{hint:({value:r})=>o.createElement("div",{className:"flex"},o.createElement("div",null,s),o.createElement("div",{className:"ml-auto"},r)),"aria-label":s}}const N={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50",onChange:m()},play:async({canvas:s,step:r})=>{const a=s.getByLabelText("A label*"),t=s.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("slider"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(a).toHaveValue(50),e(a).toHaveAttribute("aria-valuemin","0"),e(a).toHaveAttribute("aria-valuemax","100"),e(t).toHaveTextContent("*")}),await r("Assert the error style",async()=>{e(s.getByTestId("fill")).toHaveClass("bg-rose-800")})}},x={args:{...v("Slider with no valueish prop"),onChange:m()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const i=r.getByRole("slider");await a("Increase value using right arrow",async()=>{e(i).toHaveValue(0),await t.tab(),e(i).toHaveFocus(),await t.keyboard("{ArrowRight}"),e(i).toHaveValue(1),e(s.onChange).toHaveBeenCalledOnce(),await t.keyboard("{Shift>}{ArrowRight}{/Shift}"),e(i).toHaveValue(11)}),await a("Increase value using up arrow",async()=>{await t.keyboard("{ArrowUp}"),e(i).toHaveValue(12),await t.keyboard("{Shift>}{ArrowUp}{/Shift}"),e(i).toHaveValue(22)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageUp}"),e(i).toHaveValue(32)}),await a("Decrease value using left arrow",async()=>{await t.keyboard("{ArrowLeft}"),e(i).toHaveValue(31),await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(i).toHaveValue(21)}),await a("Decrease value using down arrow",async()=>{await t.keyboard("{ArrowDown}"),e(i).toHaveValue(20),await t.keyboard("{Shift>}{ArrowDown}{/Shift}"),e(i).toHaveValue(10)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageDown}"),e(i).toHaveValue(0)}),await a("Set value to max using end key",async()=>{await t.keyboard("{End}"),e(i).toHaveValue(100)}),await a("Set value to min using home key",async()=>{await t.keyboard("{Home}"),e(i).toHaveValue(0),e(s.onChange).toHaveBeenCalledTimes(12)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(i).not.toHaveFocus()})}},E={args:{...v("Slider with controlled value"),value:"50",onChange:m()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const i=r.getByRole("slider");await a("Assert `value` works",async()=>{e(i).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(i).toHaveFocus()}),await a("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.keyboard("{ArrowRight}"),e(s.onChange).toHaveBeenCalledOnce(),e(i).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(i).not.toHaveFocus()})}},V={args:{...v("Slider with uncontrolled value"),defaultValue:"50",onChange:m()},play:async({args:s,canvas:r,step:a,userEvent:t})=>{const i=r.getByRole("slider");await a("Assert `defaultValue` works",async()=>{e(i).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(i).toHaveFocus()}),await a("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await t.keyboard("{ArrowRight}"),e(i).toHaveValue(51),e(s.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await t.keyboard("{ArrowLeft}"),e(i).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(i).not.toHaveFocus()})}},k={args:{...v("Disabled Slider"),disabled:!0,defaultValue:"50",onChange:m()},play:async({canvas:s,step:r,userEvent:a})=>{const t=s.getByRole("slider");await r("Assert disabled state",async()=>{e(t).toHaveAttribute("aria-disabled","true"),await a.tab(),e(t).not.toHaveFocus()})}},M={args:{...v("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,onChange:m()},play:async({canvas:s,step:r,userEvent:a})=>{const t=s.getByRole("slider");await r("Focus the Slider",async()=>{await a.tab(),e(t).toHaveFocus()}),await r("Increase the value by one step",async()=>{e(t).toHaveValue(0),await a.keyboard("{ArrowRight}"),e(t).toHaveValue(.01)}),await r('Use the shift key to decrease by one "shift step"',async()=>{await a.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(t).toHaveValue(-4.99)}),await r("Go to the max value",async()=>{await a.keyboard("{End}"),e(t).toHaveValue(1e3)}),await r("Go to the min value",async()=>{await a.keyboard("{Home}"),e(t).toHaveValue(-1e3)}),await r("Reset back to the initial value",async()=>{await a.keyboard("{Escape}"),e(t).toHaveValue(0)}),await r("Unfocus the Slider",async()=>{await a.tab(),e(t).not.toHaveFocus()})}},A={args:{sizer:c.sizer.small,...v("Small Slider (default)"),defaultValue:"50",onChange:m()},play:async({canvas:s,step:r})=>{await r("Assert the small style on both the Slider & Field",async()=>{e(s.getByLabelText("Small Slider (default)")).toHaveClass("h-5"),e(s.getByText("Small Slider (default)").parentNode?.parentNode).toHaveClass("text-xs")})}},C={args:{sizer:c.sizer.medium,...v("Medium Slider"),defaultValue:"50",onChange:m()},play:async({canvas:s,step:r})=>{await r("Assert the medium style on both the Slider & Field",async()=>{e(s.getByLabelText("Medium Slider")).toHaveClass("h-6"),e(s.getByText("Medium Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},F={args:{sizer:c.sizer.large,...v("Large Slider"),defaultValue:"50",onChange:m()},play:async({canvas:s,step:r})=>{await r("Assert the large style on both the Slider & Field",async()=>{e(s.getByLabelText("Large Slider")).toHaveClass("h-7"),e(s.getByText("Large Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},T={tags:["!test"],args:{sizer:[c.sizer.smMedium,c.sizer.mdLarge],...v("Responsive Slider"),defaultValue:"50",onChange:m()}},B={tags:["!dev","!test"],render:s=>o.createElement("div",{className:"flex flex-col gap-4"},o.createElement(c,{...x.args}),o.createElement(c,{...E.args}),o.createElement(c,{...V.args}),o.createElement(c,{...k.args}))},z={tags:["!dev","!test"],render:s=>o.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},o.createElement(c,{...A.args,className:"sm:flex-1"}),o.createElement(c,{...C.args,className:"sm:flex-1"}),o.createElement(c,{...F.args,className:"sm:flex-1"}),o.createElement(c,{...T.args,className:"sm:flex-1"}))};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    ...withMetaHint('Small Slider (default)'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Small Slider (default)')).toHaveClass('h-5');
      expect(canvas.getByText('Small Slider (default)').parentNode?.parentNode).toHaveClass('text-xs');
    });
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.medium,
    ...withMetaHint('Medium Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the medium style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Medium Slider')).toHaveClass('h-6');
      expect(canvas.getByText('Medium Slider').parentNode?.parentNode).toHaveClass('text-xs');
    });
  }
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.large,
    ...withMetaHint('Large Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the large style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Large Slider')).toHaveClass('h-7');
      expect(canvas.getByText('Large Slider').parentNode?.parentNode).toHaveClass('text-sm');
    });
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Slider.sizer.smMedium, Slider.sizer.mdLarge],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn()
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
      <Slider {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...z.parameters?.docs?.source}}};const Ke=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],Je=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:B,AllSizes:z,Controlled:E,CustomRange:M,Disabled:k,FieldLayout:N,Large:F,Medium:C,NoValue:x,Responsive:T,Small:A,Uncontrolled:V,__namedExportsOrder:Ke,default:Pe},Symbol.toStringTag,{value:"Module"}));export{M as C,Je as S,c as a};
