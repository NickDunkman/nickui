import{g as qe,r as l}from"./iframe-Jkut9fmw.js";import{F as Ue}from"./Field-2rbk3Bub.js";import{a as _e,S as f,u as Ie}from"./index-BslxMl4d.js";import{r as ae}from"./randomId-Dfhrkieu.js";var X={exports:{}},he;function Oe(){return he||(he=1,function(s,r){function t(m){if(m&&typeof m=="object"){var h=m.which||m.keyCode||m.charCode;h&&(m=h)}if(typeof m=="number")return _[m];var p=String(m),c=e[p.toLowerCase()];if(c)return c;var c=n[p.toLowerCase()];if(c)return c;if(p.length===1)return p.charCodeAt(0)}t.isEventKey=function(h,p){if(h&&typeof h=="object"){var c=h.which||h.keyCode||h.charCode;if(c==null)return!1;if(typeof p=="string"){var v=e[p.toLowerCase()];if(v)return v===c;var v=n[p.toLowerCase()];if(v)return v===c}else if(typeof p=="number")return p===c;return!1}},r=s.exports=t;var e=r.code=r.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},n=r.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)e[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)e[o-48]=o;for(o=1;o<13;o++)e["f"+o]=o+111;for(o=0;o<10;o++)e["numpad "+o]=o+96;var _=r.names=r.title={};for(o in e)_[e[o]]=o;for(var H in n)e[H]=n[H]}(X,X.exports)),X.exports}var Pe=Oe();const je=qe(Pe);function Ke(s){let r=!1;function t(...e){r||(r=!0,requestAnimationFrame(()=>{r=!1,s(...e)}))}return t}const Xe=_e({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
      absolute top-1/2 -translate-y-1/2
      bg-gray-300
      before:absolute before:top-0 before:bottom-0 before:bg-emerald-500 before:rounded-l-full
      after:absolute after:top-0 after:bottom-0 after:bg-inherit after:rounded-r-full after:-z-1
    `,fill:"bg-emerald-500 absolute top-0 left-0 bottom-0 right-0",thumb:`
      rounded-full bg-white border-2 shadow-md/15
      absolute top-1/2 -translate-x-1/2 -translate-y-1/2
    `,input:"hidden"},variants:{sizer:{[f.small]:{root:"h-5",track:`
          h-1 left-2.5 right-2.5
          before:w-2.5 before:-left-2.5 
          after:w-2.5 after:-right-2.5
        `,thumb:"size-5"},[f.medium]:{root:"h-6",track:`
          h-1.5 left-3 right-3
          before:w-3 before:-left-3
          after:w-3 after:-right-3
        `,thumb:"size-6"},[f.large]:{root:"h-7",track:`
          h-2 left-3.5 right-3.5
          before:w-3.5 before:-left-3.5
          after:w-3.5 after:-right-3.5
        `,thumb:"size-7"}},isFocused:{true:{thumb:`
          border-indigo-800
          after:absolute after:inset-3/10 after:bg-indigo-600 after:rounded-full 
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:f.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:f.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:f.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:f.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:f.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:f.large,className:{root:"mb-4"}}],defaultVariants:{sizer:f.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Ge(s,r,t){return((s-r)/(t-r)||0)*100}function u({className:s,sizer:r,label:t,error:e,hint:n,disabled:o,required:_,ref:H,name:m,max:h=100,min:p=0,step:c=1,shiftSteps:v=10,tabIndex:ve,value:re,defaultValue:G,onChange:ge,onMouseDown:ye,onTouchStart:we,onKeyDown:be,onFocus:Se,onBlur:He,"aria-labelledby":xe,"aria-describedby":ke,"aria-errormessage":Ee,"aria-invalid":se,...Ve}){const ne=l.useRef(null),$=l.useRef(null),g=l.useRef(null),[I,W]=l.useState(!1),[Y,oe]=l.useState(!1),[Ae,ie]=l.useState(G!==void 0?Number(G):void 0),x=Number(h),y=Number(p),O=re!==void 0?Number(re):Ae,b=O===void 0?y:O,[le,Fe]=l.useState();function ce(i){const d=parseFloat(i.toFixed(5));if(ie(d),g.current){const E=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(E,"value").set;if(S){const B=new Event("input",{bubbles:!0});S.call(g.current,d),g.current.dispatchEvent(B)}}}function J(i){if(!$.current)return;const{left:d,right:E,width:fe}=$.current.getBoundingClientRect();let S="touches"in i?i.touches[0].clientX:i.clientX;S<d?S=d:S>E&&(S=E);let B=(S-d)/fe*(x-y)+y;B=Math.round(B/c)*c,ce(B)}const P=Ke(i=>{J(i)});function Ce(i){o||(document.addEventListener("mousemove",P),document.addEventListener("mouseup",ue),J(i.nativeEvent),ye?.(i),i.preventDefault(),I||W(!0),ne.current?.focus())}function ue(){document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",ue)}function Te(i){o||(document.addEventListener("touchmove",P),document.addEventListener("touchup",V),document.addEventListener("touchend",V),document.addEventListener("touchcancel",V),J(i.nativeEvent),we?.(i),i.preventDefault())}function V(){document.removeEventListener("touchmove",P),document.removeEventListener("touchup",V),document.removeEventListener("touchend",V),document.removeEventListener("touchcancel",V)}function Le(i){if(!o){let d;const E=i.nativeEvent.shiftKey;switch(je(i.nativeEvent)||i.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":d=Math.min(x,b+(E?c*v:c));break;case"page up":case"PageUp":d=Math.min(x,b+c*v);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":d=Math.max(y,b-(E?c*v:c));break;case"page down":case"PageDown":d=Math.max(y,b-c*v);break;case"home":case"Home":d=y;break;case"end":case"End":d=x;break;case"esc":case"Escape":if(le!==void 0){d=le;break}else return;default:return}ce(d),be?.(i),i.preventDefault(),I&&W(!1)}}function Re(i){o||(Y||(oe(!0),Fe(b)),Se?.(i))}function Ne(i){o||(I&&W(!1),Y&&oe(!1),g.current&&He?.({...i,target:g.current,currentTarget:g.current}))}l.useLayoutEffect(()=>{O===void 0&&G===void 0&&g.current?.value!=null&&ie(Number(g.current.value))},[]);function Q(i){return typeof i=="function"?i({value:b,min:y,max:x,step:c}):i}const Z=Q(t),ee=Q(n),k=Q(e),[Me]=l.useState(ae()),de=xe||(Z?Me:void 0),[Be]=l.useState(ae()),me=ke||(ee?Be:void 0),[ze]=l.useState(ae()),pe=Ee||(k&&k!==!0?ze:void 0),j=Ge(b,y,x),De=Ie(r),K=Xe({sizer:De,isDisabled:o,isFocused:Y&&!o&&!I,hasFieldHeader:!!Z,hasFieldFooter:!!(k&&k!==!0||ee),hasError:!!k,atMin:j===0,atMax:j===100});return l.createElement(Ue,{className:s,sizer:r,label:Z,labelId:de,hint:ee,hintId:me,error:k,errorId:pe,disabled:o,required:_},l.createElement("div",{...Ve,ref:ne,className:K.root(),role:"slider",tabIndex:o?-1:ve||0,onMouseDown:Ce,onTouchStart:Te,onFocus:Re,onBlur:Ne,onKeyDown:Le,"aria-disabled":o,"aria-valuemax":x,"aria-valuemin":y,"aria-valuenow":b,"aria-labelledby":de,"aria-describedby":me,"aria-errormessage":pe,"aria-invalid":se!==void 0?se:!!k},l.createElement("div",{ref:$,className:K.track()},l.createElement("div",{className:K.fill(),style:{right:`${100-j}%`},"data-testid":"fill"}),l.createElement("div",{className:K.thumb(),style:{left:`${j}%`},"data-testid":"thumb"}))),l.createElement("input",{ref:i=>{g.current=i,typeof H=="function"?H(i):H&&(H.current=i)},type:"text",name:m,className:"hidden","aria-hidden":!0,defaultValue:O,onChange:ge}))}u.sizer=f;u.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:a,fn:te}=__STORYBOOK_MODULE_TEST__,$e={title:"Form controls/Slider",component:u};function w(s){return{hint:({value:r})=>l.createElement("div",{className:"flex"},l.createElement("div",null,s),l.createElement("div",{className:"ml-auto"},r)),"aria-label":s}}const z={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50"},play:async({canvas:s,step:r})=>{const t=s.getByLabelText("A label*"),e=s.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{a(t).toHaveRole("slider"),a(t).toHaveAccessibleDescription("A hint"),a(t).toHaveAccessibleErrorMessage("An error message"),a(t).toHaveValue(50),a(t).toHaveAttribute("aria-valuemin","0"),a(t).toHaveAttribute("aria-valuemax","100"),a(e).toHaveTextContent("*")}),await r("Assert the error style",async()=>{a(s.getByTestId("fill")).toHaveClass("bg-rose-800")})}},A={args:{...w("Slider with no valueish prop"),onChange:te()},play:async({args:s,canvas:r,step:t,userEvent:e})=>{const n=r.getByRole("slider");await t("Increase value using right arrow",async()=>{a(n).toHaveValue(0),await e.tab(),a(n).toHaveFocus(),await e.keyboard("{ArrowRight}"),a(n).toHaveValue(1),a(s.onChange).toHaveBeenCalledOnce(),await e.keyboard("{Shift>}{ArrowRight}{/Shift}"),a(n).toHaveValue(11)}),await t("Increase value using up arrow",async()=>{await e.keyboard("{ArrowUp}"),a(n).toHaveValue(12),await e.keyboard("{Shift>}{ArrowUp}{/Shift}"),a(n).toHaveValue(22)}),await t("Increase value using page up",async()=>{await e.keyboard("{PageUp}"),a(n).toHaveValue(32)}),await t("Decrease value using left arrow",async()=>{await e.keyboard("{ArrowLeft}"),a(n).toHaveValue(31),await e.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(n).toHaveValue(21)}),await t("Decrease value using down arrow",async()=>{await e.keyboard("{ArrowDown}"),a(n).toHaveValue(20),await e.keyboard("{Shift>}{ArrowDown}{/Shift}"),a(n).toHaveValue(10)}),await t("Increase value using page up",async()=>{await e.keyboard("{PageDown}"),a(n).toHaveValue(0)}),await t("Set value to max using end key",async()=>{await e.keyboard("{End}"),a(n).toHaveValue(100)}),await t("Set value to min using home key",async()=>{await e.keyboard("{Home}"),a(n).toHaveValue(0),a(s.onChange).toHaveBeenCalledTimes(12)}),await t("Unfocus the Slider",async()=>{await e.tab(),a(n).not.toHaveFocus()})}},F={args:{...w("Slider with controlled value"),value:"50",onChange:te()},play:async({args:s,canvas:r,step:t,userEvent:e})=>{const n=r.getByRole("slider");await t("Assert `value` works",async()=>{a(n).toHaveValue(50)}),await t("Focus the Slider",async()=>{await e.tab(),a(n).toHaveFocus()}),await t("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await e.keyboard("{ArrowRight}"),a(s.onChange).toHaveBeenCalledOnce(),a(n).toHaveValue(50)}),await t("Unfocus the Slider",async()=>{await e.tab(),a(n).not.toHaveFocus()})}},C={args:{...w("Slider with uncontrolled value"),defaultValue:"50",onChange:te()},play:async({args:s,canvas:r,step:t,userEvent:e})=>{const n=r.getByRole("slider");await t("Assert `defaultValue` works",async()=>{a(n).toHaveValue(50)}),await t("Focus the Slider",async()=>{await e.tab(),a(n).toHaveFocus()}),await t("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await e.keyboard("{ArrowRight}"),a(n).toHaveValue(51),a(s.onChange).toHaveBeenCalledOnce()}),await t("Reset the value",async()=>{await e.keyboard("{ArrowLeft}"),a(n).toHaveValue(50)}),await t("Unfocus the Slider",async()=>{await e.tab(),a(n).not.toHaveFocus()})}},T={args:{...w("Disabled Slider"),disabled:!0,defaultValue:"50"},play:async({canvas:s,step:r,userEvent:t})=>{const e=s.getByRole("slider");await r("Assert disabled state",async()=>{a(e).toHaveAttribute("aria-disabled","true"),await t.tab(),a(e).not.toHaveFocus()})}},D={args:{...w("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500},play:async({canvas:s,step:r,userEvent:t})=>{const e=s.getByRole("slider");await r("Focus the Slider",async()=>{await t.tab(),a(e).toHaveFocus()}),await r("Increase the value by one step",async()=>{a(e).toHaveValue(0),await t.keyboard("{ArrowRight}"),a(e).toHaveValue(.01)}),await r('Use the shift key to decrease by one "shift step"',async()=>{await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),a(e).toHaveValue(-4.99)}),await r("Go to the max value",async()=>{await t.keyboard("{End}"),a(e).toHaveValue(1e3)}),await r("Go to the min value",async()=>{await t.keyboard("{Home}"),a(e).toHaveValue(-1e3)}),await r("Reset back to the initial value",async()=>{await t.keyboard("{Escape}"),a(e).toHaveValue(0)}),await r("Unfocus the Slider",async()=>{await t.tab(),a(e).not.toHaveFocus()})}},L={args:{sizer:u.sizer.small,...w("Small Slider (default)"),defaultValue:"50"},play:async({canvas:s,step:r})=>{await r("Assert the small style on both the Slider & Field",async()=>{a(s.getByLabelText("Small Slider (default)")).toHaveClass("h-5"),a(s.getByText("Small Slider (default)").parentNode?.parentNode).toHaveClass("text-xs")})}},R={args:{sizer:u.sizer.medium,...w("Medium Slider"),defaultValue:"50"},play:async({canvas:s,step:r})=>{await r("Assert the medium style on both the Slider & Field",async()=>{a(s.getByLabelText("Medium Slider")).toHaveClass("h-6"),a(s.getByText("Medium Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},N={args:{sizer:u.sizer.large,...w("Large Slider"),defaultValue:"50"},play:async({canvas:s,step:r})=>{await r("Assert the large style on both the Slider & Field",async()=>{a(s.getByLabelText("Large Slider")).toHaveClass("h-7"),a(s.getByText("Large Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},M={tags:["!test"],args:{sizer:[u.sizer.smMedium,u.sizer.mdLarge],...w("Responsive Slider"),defaultValue:"50"}},q={tags:["!dev","!test"],render:s=>l.createElement("div",{className:"flex flex-col gap-4"},l.createElement(u,{...A.args}),l.createElement(u,{...F.args}),l.createElement(u,{...C.args}),l.createElement(u,{...T.args}))},U={tags:["!dev","!test"],render:s=>l.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},l.createElement(u,{...L.args,className:"sm:flex-1"}),l.createElement(u,{...R.args,className:"sm:flex-1"}),l.createElement(u,{...N.args,className:"sm:flex-1"}),l.createElement(u,{...M.args,className:"sm:flex-1"}))};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...withMetaHint('Slider with custom range'),
    defaultValue: '0',
    min: -1000,
    max: 1000,
    step: 0.01,
    shiftSteps: 500
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
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.small,
    ...withMetaHint('Small Slider (default)'),
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
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.medium,
    ...withMetaHint('Medium Slider'),
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
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sizer: Slider.sizer.large,
    ...withMetaHint('Large Slider'),
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
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  args: {
    sizer: [Slider.sizer.smMedium, Slider.sizer.mdLarge],
    ...withMetaHint('Responsive Slider'),
    defaultValue: '50'
  }
}`,...M.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
      <Slider {...Responsive.args} className="sm:flex-1" />
    </div>
}`,...U.parameters?.docs?.source}}};const We=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Small","Medium","Large","Responsive","AllControlStates","AllSizes"],aa=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:q,AllSizes:U,Controlled:F,CustomRange:D,Disabled:T,FieldLayout:z,Large:N,Medium:R,NoValue:A,Responsive:M,Small:L,Uncontrolled:C,__namedExportsOrder:We,default:$e},Symbol.toStringTag,{value:"Module"}));export{D as C,aa as S,u as a};
