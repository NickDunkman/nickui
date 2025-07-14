import{g as Be,r as i}from"./iframe-7jkboxGE.js";import{F as Me}from"./Field-Bnqdme_l.js";import{c as De,F as h}from"./index-C4eiBceS.js";import{r as Q}from"./randomId-Dfhrkieu.js";var P={exports:{}},me;function ze(){return me||(me=1,function(n,r){function t(f){if(f&&typeof f=="object"){var d=f.which||f.keyCode||f.charCode;d&&(f=d)}if(typeof f=="number")return z[f];var u=String(f),c=e[u.toLowerCase()];if(c)return c;var c=s[u.toLowerCase()];if(c)return c;if(u.length===1)return u.charCodeAt(0)}t.isEventKey=function(d,u){if(d&&typeof d=="object"){var c=d.which||d.keyCode||d.charCode;if(c==null)return!1;if(typeof u=="string"){var v=e[u.toLowerCase()];if(v)return v===c;var v=s[u.toLowerCase()];if(v)return v===c}else if(typeof u=="number")return u===c;return!1}},r=n.exports=t;var e=r.code=r.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},s=r.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)e[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)e[o-48]=o;for(o=1;o<13;o++)e["f"+o]=o+111;for(o=0;o<10;o++)e["numpad "+o]=o+96;var z=r.names=r.title={};for(o in e)z[e[o]]=o;for(var S in s)e[S]=s[S]}(P,P.exports)),P.exports}var qe=ze();const _e=Be(qe);function Ie(n){let r=!1;function t(...e){r||(r=!0,requestAnimationFrame(()=>{r=!1,n(...e)}))}return t}const Ue=De({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{[h.small]:{root:"h-5",track:`
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},[h.medium]:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[h.large]:{root:"h-7",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isFocused:{true:{thumb:`
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:h.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:h.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:h.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:h.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:h.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:h.large,className:{root:"mb-4"}}],defaultVariants:{sizer:h.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Oe(n,r,t){return((n-r)/(t-r)||0)*100}function p({className:n,sizer:r,label:t,error:e,hint:s,disabled:o,required:z,ref:S,name:f,max:d=100,min:u=0,step:c=1,shiftSteps:v=10,tabIndex:pe,value:ee,defaultValue:j,onChange:fe,onMouseDown:he,onTouchStart:ve,onKeyDown:ge,onFocus:ye,onBlur:we,"aria-labelledby":be,"aria-describedby":Se,"aria-errormessage":He,"aria-invalid":ae,...xe}){const te=i.useRef(null),K=i.useRef(null),g=i.useRef(null),[q,X]=i.useState(!1),[G,re]=i.useState(!1),[ke,se]=i.useState(j!==void 0?Number(j):void 0),_=ee!==void 0?Number(ee):ke,y=_===void 0?u:_,[ne,Ee]=i.useState();function oe(l){const m=parseFloat(l.toFixed(5));if(se(m),g.current){const x=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(x,"value").set;if(w){const N=new Event("input",{bubbles:!0});w.call(g.current,m),g.current.dispatchEvent(N)}}}function $(l){if(!K.current)return;const{left:m,right:x,width:de}=K.current.getBoundingClientRect();let w="touches"in l?l.touches[0].clientX:l.clientX;w<m?w=m:w>x&&(w=x);let N=(w-m)/de*(d-u)+u;N=Math.round(N/c)*c,oe(N)}const I=Ie(l=>{$(l)});function Ve(l){o||(document.addEventListener("mousemove",I),document.addEventListener("mouseup",le),$(l.nativeEvent),he?.(l),l.preventDefault(),q||X(!0),te.current?.focus())}function le(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",le)}function Ae(l){o||(document.addEventListener("touchmove",I),document.addEventListener("touchup",k),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k),$(l.nativeEvent),ve?.(l),l.preventDefault())}function k(){document.removeEventListener("touchmove",I),document.removeEventListener("touchup",k),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)}function Ce(l){if(!o){let m;const x=l.nativeEvent.shiftKey;switch(_e(l.nativeEvent)||l.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":m=Math.min(d,y+(x?c*v:c));break;case"page up":case"PageUp":m=Math.min(d,y+c*v);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":m=Math.max(u,y-(x?c*v:c));break;case"page down":case"PageDown":m=Math.max(u,y-c*v);break;case"home":case"Home":m=u;break;case"end":case"End":m=d;break;case"esc":case"Escape":if(ne!==void 0){m=ne;break}else return;default:return}oe(m),ge?.(l),l.preventDefault(),q&&X(!1)}}function Te(l){o||(G||(re(!0),Ee(y)),ye?.(l))}function Le(l){o||(q&&X(!1),G&&re(!1),g.current&&we?.({...l,target:g.current,currentTarget:g.current}))}i.useLayoutEffect(()=>{_===void 0&&j===void 0&&g.current?.value!=null&&se(Number(g.current.value))},[]);function W(l){return typeof l=="function"?l({value:y,min:u,max:d,step:c}):l}const Y=W(t),J=W(s),H=W(e),[Fe]=i.useState(Q()),ie=be||(Y?Fe:void 0),[Ne]=i.useState(Q()),ce=Se||(J?Ne:void 0),[Re]=i.useState(Q()),ue=He||(H&&H!==!0?Re:void 0),U=Oe(y,u,d),O=Ue({sizer:r,isDisabled:o,isFocused:G&&!o&&!q,hasFieldHeader:!!Y,hasFieldFooter:!!(H&&H!==!0||J),hasError:!!H,atMin:U===0,atMax:U===100});return i.createElement(Me,{className:n,sizer:r,label:Y,labelId:ie,hint:J,hintId:ce,error:H,errorId:ue,disabled:o,required:z},i.createElement("div",{...xe,ref:te,className:O.root(),role:"slider",tabIndex:o?-1:pe||0,onMouseDown:Ve,onTouchStart:Ae,onFocus:Te,onBlur:Le,onKeyDown:Ce,"aria-disabled":o,"aria-valuemax":d,"aria-valuemin":u,"aria-valuenow":y,"aria-labelledby":ie,"aria-describedby":ce,"aria-errormessage":ue,"aria-invalid":ae!==void 0?ae:!!H},i.createElement("div",{ref:K,className:O.track()},i.createElement("div",{className:O.fill(),style:{right:`${100-U}%`},"data-testid":"fill"}),i.createElement("div",{className:O.thumb(),style:{left:`${U}%`},"data-testid":"thumb"}))),i.createElement("input",{ref:l=>{g.current=l,typeof S=="function"?S(l):S&&(S.current=l)},type:"text",name:f,className:"hidden","aria-hidden":!0,defaultValue:_,onChange:fe}))}p.sizer=h;p.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"number"},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:a,fn:Z}=__STORYBOOK_MODULE_TEST__,Pe={title:"Form controls/Slider",component:p};function b(n){return{hint:({value:r})=>i.createElement("div",{className:"flex"},i.createElement("div",null,n),i.createElement("div",{className:"ml-auto"},r)),"aria-label":n}}const R={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50"},play:async({canvas:n,step:r})=>{const t=n.getByLabelText("A label*"),e=n.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{a(t).toHaveRole("slider"),a(t).toHaveAccessibleDescription("A hint"),a(t).toHaveAccessibleErrorMessage("An error message"),a(t).toHaveValue(50),a(t).toHaveAttribute("aria-valuemin","0"),a(t).toHaveAttribute("aria-valuemax","100"),a(e).toHaveTextContent("*")}),await r("Assert the error style",async()=>{a(n.getByTestId("fill")).toHaveClass("bg-rose-800")})}},E={args:{...b("Slider with no valueish prop"),onChange:Z()},play:async({args:n,canvas:r,step:t,userEvent:e})=>{const s=r.getByRole("slider");await t("Increase value using right arrow",async()=>{a(s).toHaveValue(0),await e.tab(),a(s).toHaveFocus(),await e.keyboard("{ArrowRight}"),a(s).toHaveValue(1),a(n.onChange).toHaveBeenCalledOnce(),await e.keyboard("{Shift>}{ArrowRight}{/Shift}"),a(s).toHaveValue(11)}),await t("Increase value using up arrow",async()=>{await e.keyboard("{ArrowUp}"),a(s).toHaveValue(12),await e.keyboard("{Shift>}{ArrowUp}{/Shift}"),a(s).toHaveValue(22)}),await t("Increase value using page up",async()=>{await e.keyboard("{PageUp}"),a(s).toHaveValue(32)}),await t("Decrease value using left arrow",async()=>{await e.keyboard("{ArrowLeft}"),a(s).toHaveValue(31),await e.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(s).toHaveValue(21)}),await t("Decrease value using down arrow",async()=>{await e.keyboard("{ArrowDown}"),a(s).toHaveValue(20),await e.keyboard("{Shift>}{ArrowDown}{/Shift}"),a(s).toHaveValue(10)}),await t("Increase value using page up",async()=>{await e.keyboard("{PageDown}"),a(s).toHaveValue(0)}),await t("Set value to max using end key",async()=>{await e.keyboard("{End}"),a(s).toHaveValue(100)}),await t("Set value to min using home key",async()=>{await e.keyboard("{Home}"),a(s).toHaveValue(0),a(n.onChange).toHaveBeenCalledTimes(12)})}},V={args:{...b("Slider with controlled value"),value:"50",onChange:Z()},play:async({args:n,canvas:r,step:t,userEvent:e})=>{const s=r.getByRole("slider");await t("Assert `value` works",async()=>{a(s).toHaveValue(50)}),await t("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await e.tab(),await e.keyboard("{ArrowRight}"),a(n.onChange).toHaveBeenCalledOnce(),a(s).toHaveValue(50)})}},A={args:{...b("Slider with uncontrolled value"),defaultValue:"50",onChange:Z()},play:async({args:n,canvas:r,step:t,userEvent:e})=>{const s=r.getByRole("slider");await t("Assert `defaultValue` works",async()=>{a(s).toHaveValue(50)}),await t("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await e.tab(),await e.keyboard("{ArrowRight}"),a(s).toHaveValue(51),a(n.onChange).toHaveBeenCalledOnce()}),await t("Reset the value",async()=>{await e.keyboard("{ArrowLeft}"),a(s).toHaveValue(50)})}},C={args:{...b("Disabled Slider"),disabled:!0,defaultValue:"50"},play:async({canvas:n,step:r,userEvent:t})=>{const e=n.getByRole("slider");await r("Assert disabled state",async()=>{a(e).toHaveAttribute("aria-disabled","true"),await t.tab(),a(e).not.toHaveFocus()})}},B={args:{...b("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500},play:async({args:n,canvas:r,step:t,userEvent:e})=>{const s=r.getByRole("slider");await t("Increase the value by one step",async()=>{a(s).toHaveValue(0),await e.tab(),a(s).toHaveFocus(),await e.keyboard("{ArrowRight}"),a(s).toHaveValue(.01)}),await t('Use the shift key to decrease by one "shift step"',async()=>{await e.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(s).toHaveValue(-4.99)}),await t("Go to the max value",async()=>{await e.keyboard("{End}"),a(s).toHaveValue(1e3)}),await t("Go to the min value",async()=>{await e.keyboard("{Home}"),a(s).toHaveValue(-1e3)}),await t("Reset back to the initial value",async()=>{await e.keyboard("{Escape}"),a(s).toHaveValue(0)})}},T={args:{...b("Small Slider (default)"),sizer:p.sizer.small,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the small style on both the Slider & Field",async()=>{a(n.getByLabelText("Small Slider (default)")).toHaveClass("h-5"),a(n.getByText("Small Slider (default)").parentNode?.parentNode).toHaveClass("text-xs")})}},L={args:{...b("Medium Slider"),sizer:p.sizer.medium,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the medium style on both the Slider & Field",async()=>{a(n.getByLabelText("Medium Slider")).toHaveClass("h-6"),a(n.getByText("Medium Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},F={args:{...b("Large Slider"),sizer:p.sizer.large,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the large style on both the Slider & Field",async()=>{a(n.getByLabelText("Large Slider")).toHaveClass("h-7"),a(n.getByText("Large Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},M={tags:["!dev","!test"],render:n=>i.createElement("div",{className:"flex flex-col gap-4"},i.createElement(p,{...E.args}),i.createElement(p,{...V.args}),i.createElement(p,{...A.args}),i.createElement(p,{...C.args}))},D={tags:["!dev","!test"],render:n=>i.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},i.createElement(p,{...T.args,className:"sm:flex-1"}),i.createElement(p,{...L.args,className:"sm:flex-1"}),i.createElement(p,{...F.args,className:"sm:flex-1"}))};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'A label',
    hint: 'A hint',
    error: 'An error message',
    defaultValue: '50'
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
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    await step('Try increasing the value. \`onChange\` should fire, but the value is controlled, so it shouldn’t change', async () => {
      await userEvent.tab();
      await userEvent.keyboard('{ArrowRight}');
      expect(args.onChange).toHaveBeenCalledOnce();
      expect(slider).toHaveValue(50);
    });
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    await step('Sliding the Slider should change the value, since it’s uncontrolled', async () => {
      await userEvent.tab();
      await userEvent.keyboard('{ArrowRight}');
      expect(slider).toHaveValue(51);
      expect(args.onChange).toHaveBeenCalledOnce();
    });
    await step('Reset the value', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(slider).toHaveValue(50);
    });
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Disabled Slider'),
    disabled: true,
    defaultValue: '50'
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
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Slider with custom range'),
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const slider = canvas.getByRole('slider');
    await step('Increase the value by one step', async () => {
      expect(slider).toHaveValue(0);
      await userEvent.tab();
      expect(slider).toHaveFocus();
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
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Small Slider (default)'),
    sizer: Slider.sizer.small,
    defaultValue: '50'
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
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Medium Slider'),
    sizer: Slider.sizer.medium,
    defaultValue: '50'
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
}`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Large Slider'),
    sizer: Slider.sizer.large,
    defaultValue: '50'
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
}`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
    </div>
}`,...D.parameters?.docs?.source}}};const je=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Small","Medium","Large","AllControlStates","AllSizes"],Ye=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:M,AllSizes:D,Controlled:V,CustomRange:B,Disabled:C,FieldLayout:R,Large:F,Medium:L,NoValue:E,Small:T,Uncontrolled:A,__namedExportsOrder:je,default:Pe},Symbol.toStringTag,{value:"Module"}));export{B as C,Ye as S,p as a};
