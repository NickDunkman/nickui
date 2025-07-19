import{r as o}from"./iframe-Si2UkeX9.js";import{k as Me}from"./index-DpvBQJGL.js";import{F as De}from"./Field-DY7mIMzZ.js";import{a as qe,S as u,u as Ie}from"./index-oXvcZMk4.js";import{r as Q}from"./randomId-Dfhrkieu.js";function Ue(n){let r=!1;function a(...t){r||(r=!0,requestAnimationFrame(()=>{r=!1,n(...t)}))}return a}const Oe=qe({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
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
        `,thumb:"size-5"},[u.base]:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[u.large]:{root:"h-7",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isKeyboardFocused:{true:{thumb:`
          border-blue-800
          after:absolute after:inset-3/10 after:bg-blue-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isKeyboardFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:u.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:u.base,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:u.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:u.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:u.base,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:u.large,className:{root:"mb-4"}}],defaultVariants:{sizer:u.base,isKeyboardFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function _e(n,r,a){return((n-r)/(a-r)||0)*100}function c({className:n,sizer:r,label:a,error:t,hint:l,disabled:d,required:ue,ref:D,name:de,max:me=100,min:he=0,step:h=1,shiftSteps:q=10,tabIndex:pe,value:Z,defaultValue:K,onChange:ve,onMouseDown:ge,onTouchStart:fe,onKeyDown:ye,onFocus:we,onBlur:be,"aria-labelledby":Se,"aria-describedby":He,"aria-errormessage":xe,"aria-invalid":ee,...Ee}){const B=o.useRef(null),j=o.useRef(null),p=o.useRef(null),[I,X]=o.useState(!1),[G,ae]=o.useState(!1),[Ve,te]=o.useState(K!==void 0?Number(K):void 0),b=Number(me),v=Number(he),U=Z!==void 0?Number(Z):Ve,y=U===void 0?v:U,[re,ke]=o.useState();function se(s){const i=parseFloat(s.toFixed(5));if(te(i),p.current){const g=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(g,"value").set;if(w){const L=new Event("input",{bubbles:!0});w.call(p.current,i),p.current.dispatchEvent(L)}}}function W(s){if(!j.current)return;const{left:i,right:g,width:ce}=j.current.getBoundingClientRect();let w="touches"in s?s.touches[0].clientX:s.clientX;w<i?w=i:w>g&&(w=g);let L=(w-i)/ce*(b-v)+v;L=Math.round(L/h)*h,se(L)}const O=Ue(s=>{W(s)});function Ae(s){d||(document.addEventListener("mousemove",O),document.addEventListener("mouseup",ne),W(s.nativeEvent),ge?.(s),s.preventDefault(),I||X(!0),B.current?.focus())}function ne(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ne)}function Ce(s){d||(document.addEventListener("touchmove",O),document.addEventListener("touchup",H),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H),W(s.nativeEvent),fe?.(s))}function H(){document.removeEventListener("touchmove",O),document.removeEventListener("touchup",H),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)}function Fe(s){if(!d){let i;const g=s.nativeEvent.shiftKey;switch(Me(s.nativeEvent)||s.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":i=Math.min(b,y+(g?h*q:h));break;case"page up":case"PageUp":i=Math.min(b,y+h*q);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":i=Math.max(v,y-(g?h*q:h));break;case"page down":case"PageDown":i=Math.max(v,y-h*q);break;case"home":case"Home":i=v;break;case"end":case"End":i=b;break;case"esc":case"Escape":if(re!==void 0){i=re;break}else return;default:return}se(i),ye?.(s),s.preventDefault(),I&&X(!1)}}function Te(s){d||(G||(ae(!0),ke(y)),we?.(s))}function Be(s){d||(I&&X(!1),G&&ae(!1),p.current&&be?.({...s,target:p.current,currentTarget:p.current}))}o.useLayoutEffect(()=>{U===void 0&&K===void 0&&p.current?.value!=null&&te(Number(p.current.value))},[]);function $(s){return typeof s=="function"?s({value:y,min:v,max:b,step:h}):s}const Y=$(a),J=$(l),S=$(t),[Le]=o.useState(Q()),oe=Se||(Y?Le:void 0),[Re]=o.useState(Q()),le=He||(J?Re:void 0),[Ne]=o.useState(Q()),ie=xe||(S&&S!==!0?Ne:void 0),_=_e(y,v,b),ze=Ie(r),P=Oe({sizer:ze,isDisabled:d,isKeyboardFocused:G&&!d&&!I,hasFieldHeader:!!Y,hasFieldFooter:!!(S&&S!==!0||J),hasError:!!S,atMin:_===0,atMax:_===100});return o.useEffect(()=>{if(B.current){let s=function(g){g.preventDefault()};const i=B.current;return i.addEventListener("touchstart",s,{passive:!1}),()=>{i.removeEventListener("touchstart",s)}}},[B]),o.createElement(De,{className:n,sizer:r,label:Y,labelId:oe,hint:J,hintId:le,error:S,errorId:ie,disabled:d,required:ue},o.createElement("div",{...Ee,ref:B,className:P.root(),role:"slider",tabIndex:d?-1:pe||0,onMouseDown:Ae,onTouchStart:Ce,onFocus:Te,onBlur:Be,onKeyDown:Fe,"aria-disabled":d,"aria-valuemax":b,"aria-valuemin":v,"aria-valuenow":y,"aria-labelledby":oe,"aria-describedby":le,"aria-errormessage":ie,"aria-invalid":ee!==void 0?ee:!!S},o.createElement("div",{ref:j,className:P.track()},o.createElement("div",{className:P.fill(),style:{right:`${100-_}%`},"data-testid":"fill"}),o.createElement("div",{className:P.thumb(),style:{left:`${_}%`},"data-testid":"thumb"}))),o.createElement("input",{ref:s=>{p.current=s,typeof D=="function"?D(s):D&&(D.current=s)},type:"text",name:de,className:"hidden","aria-hidden":!0,defaultValue:U,onChange:ve}))}c.sizer=u;c.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "base", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:m}=__STORYBOOK_MODULE_TEST__,Pe={title:"Form controls/Slider",component:c};function f(n){return{hint:({value:r})=>o.createElement("div",{className:"flex"},o.createElement("div",null,n),o.createElement("div",{className:"ml-auto"},r)),"aria-label":n}}const R={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50",onChange:m()},play:async({canvas:n,step:r})=>{const a=n.getByLabelText("A label*"),t=n.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{e(a).toHaveRole("slider"),e(a).toHaveAccessibleDescription("A hint"),e(a).toHaveAccessibleErrorMessage("An error message"),e(a).toHaveValue(50),e(a).toHaveAttribute("aria-valuemin","0"),e(a).toHaveAttribute("aria-valuemax","100"),e(t).toHaveTextContent("*")}),await r("Assert the error style",async()=>{e(n.getByTestId("fill")).toHaveClass("bg-rose-800")})}},x={args:{...f("Slider with no valueish prop"),onChange:m()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const l=r.getByRole("slider");await a("Increase value using right arrow",async()=>{e(l).toHaveValue(0),await t.tab(),e(l).toHaveFocus(),await t.keyboard("{ArrowRight}"),e(l).toHaveValue(1),e(n.onChange).toHaveBeenCalledOnce(),await t.keyboard("{Shift>}{ArrowRight}{/Shift}"),e(l).toHaveValue(11)}),await a("Increase value using up arrow",async()=>{await t.keyboard("{ArrowUp}"),e(l).toHaveValue(12),await t.keyboard("{Shift>}{ArrowUp}{/Shift}"),e(l).toHaveValue(22)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageUp}"),e(l).toHaveValue(32)}),await a("Decrease value using left arrow",async()=>{await t.keyboard("{ArrowLeft}"),e(l).toHaveValue(31),await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(l).toHaveValue(21)}),await a("Decrease value using down arrow",async()=>{await t.keyboard("{ArrowDown}"),e(l).toHaveValue(20),await t.keyboard("{Shift>}{ArrowDown}{/Shift}"),e(l).toHaveValue(10)}),await a("Increase value using page up",async()=>{await t.keyboard("{PageDown}"),e(l).toHaveValue(0)}),await a("Set value to max using end key",async()=>{await t.keyboard("{End}"),e(l).toHaveValue(100)}),await a("Set value to min using home key",async()=>{await t.keyboard("{Home}"),e(l).toHaveValue(0),e(n.onChange).toHaveBeenCalledTimes(12)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(l).not.toHaveFocus()})}},E={args:{...f("Slider with controlled value"),value:"50",onChange:m()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const l=r.getByRole("slider");await a("Assert `value` works",async()=>{e(l).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(l).toHaveFocus()}),await a("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await t.keyboard("{ArrowRight}"),e(n.onChange).toHaveBeenCalledOnce(),e(l).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(l).not.toHaveFocus()})}},V={args:{...f("Slider with uncontrolled value"),defaultValue:"50",onChange:m()},play:async({args:n,canvas:r,step:a,userEvent:t})=>{const l=r.getByRole("slider");await a("Assert `defaultValue` works",async()=>{e(l).toHaveValue(50)}),await a("Focus the Slider",async()=>{await t.tab(),e(l).toHaveFocus()}),await a("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await t.keyboard("{ArrowRight}"),e(l).toHaveValue(51),e(n.onChange).toHaveBeenCalledOnce()}),await a("Reset the value",async()=>{await t.keyboard("{ArrowLeft}"),e(l).toHaveValue(50)}),await a("Unfocus the Slider",async()=>{await t.tab(),e(l).not.toHaveFocus()})}},k={args:{...f("Disabled Slider"),disabled:!0,defaultValue:"50",onChange:m()},play:async({canvas:n,step:r,userEvent:a})=>{const t=n.getByRole("slider");await r("Assert disabled state",async()=>{e(t).toHaveAttribute("aria-disabled","true"),await a.tab(),e(t).not.toHaveFocus()})}},N={args:{...f("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500,onChange:m()},play:async({canvas:n,step:r,userEvent:a})=>{const t=n.getByRole("slider");await r("Focus the Slider",async()=>{await a.tab(),e(t).toHaveFocus()}),await r("Increase the value by one step",async()=>{e(t).toHaveValue(0),await a.keyboard("{ArrowRight}"),e(t).toHaveValue(.01)}),await r('Use the shift key to decrease by one "shift step"',async()=>{await a.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(t).toHaveValue(-4.99)}),await r("Go to the max value",async()=>{await a.keyboard("{End}"),e(t).toHaveValue(1e3)}),await r("Go to the min value",async()=>{await a.keyboard("{Home}"),e(t).toHaveValue(-1e3)}),await r("Reset back to the initial value",async()=>{await a.keyboard("{Escape}"),e(t).toHaveValue(0)}),await r("Unfocus the Slider",async()=>{await a.tab(),e(t).not.toHaveFocus()})}},A={args:{sizer:c.sizer.small,...f("Small Slider"),defaultValue:"50",onChange:m()},play:async({canvas:n,step:r})=>{await r("Assert the small sizer style on both the Slider & Field",async()=>{e(n.getByLabelText("Small Slider")).toHaveClass("h-5"),e(n.getByText("Small Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},C={args:{sizer:c.sizer.base,...f("Base Slider"),defaultValue:"50",onChange:m()},play:async({canvas:n,step:r})=>{await r("Assert the base sizer style on both the Slider & Field",async()=>{e(n.getByLabelText("Base Slider")).toHaveClass("h-6"),e(n.getByText("Base Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},F={args:{sizer:c.sizer.large,...f("Large Slider"),defaultValue:"50",onChange:m()},play:async({canvas:n,step:r})=>{await r("Assert the large sizer style on both the Slider & Field",async()=>{e(n.getByLabelText("Large Slider")).toHaveClass("h-7"),e(n.getByText("Large Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},T={tags:["!test"],args:{sizer:[c.sizer.small,c.sizer.smBase,c.sizer.mdLarge],...f("Responsive Slider"),defaultValue:"50",onChange:m()}},z={tags:["!dev","!test"],render:n=>o.createElement("div",{className:"flex flex-col gap-4"},o.createElement(c,{...x.args}),o.createElement(c,{...E.args}),o.createElement(c,{...V.args}),o.createElement(c,{...k.args}))},M={tags:["!dev","!test"],render:n=>o.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},o.createElement(c,{...A.args,className:"sm:flex-1"}),o.createElement(c,{...C.args,className:"sm:flex-1"}),o.createElement(c,{...F.args,className:"sm:flex-1"}),o.createElement(c,{...T.args,className:"sm:flex-1"}))};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    ...withMetaHint('Small Slider'),
    defaultValue: '50',
    onChange: fn()
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Assert the small sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Small Slider')).toHaveClass('h-5');
      expect(canvas.getByText('Small Slider').parentNode?.parentNode).toHaveClass('text-xs');
    });
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.base,
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
      expect(canvas.getByText('Base Slider').parentNode?.parentNode).toHaveClass('text-xs');
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
    await step('Assert the large sizer style on both the Slider & Field', async () => {
      expect(canvas.getByLabelText('Large Slider')).toHaveClass('h-7');
      expect(canvas.getByText('Large Slider').parentNode?.parentNode).toHaveClass('text-sm');
    });
  }
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Slider.sizer.small, Slider.sizer.smBase, Slider.sizer.mdLarge],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50',
    onChange: fn()
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Base.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
      <Slider {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...M.parameters?.docs?.source}}};const Ke=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Small","Base","Large","Responsive","AllControlStates","AllSizes"],Je=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:z,AllSizes:M,Base:C,Controlled:E,CustomRange:N,Disabled:k,FieldLayout:R,Large:F,NoValue:x,Responsive:T,Small:A,Uncontrolled:V,__namedExportsOrder:Ke,default:Pe},Symbol.toStringTag,{value:"Module"}));export{N as C,Je as S,c as a};
