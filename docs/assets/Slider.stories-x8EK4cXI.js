import{g as De,r as i}from"./iframe-DOqKYI6o.js";import{F as qe}from"./Field-DBcgitAT.js";import{a as Ue,S as h,u as _e,d as Ie}from"./index-D3vd8min.js";import{r as ee}from"./randomId-Dfhrkieu.js";var K={exports:{}},he;function Oe(){return he||(he=1,function(n,r){function t(m){if(m&&typeof m=="object"){var f=m.which||m.keyCode||m.charCode;f&&(m=f)}if(typeof m=="number")return U[m];var p=String(m),c=a[p.toLowerCase()];if(c)return c;var c=s[p.toLowerCase()];if(c)return c;if(p.length===1)return p.charCodeAt(0)}t.isEventKey=function(f,p){if(f&&typeof f=="object"){var c=f.which||f.keyCode||f.charCode;if(c==null)return!1;if(typeof p=="string"){var v=a[p.toLowerCase()];if(v)return v===c;var v=s[p.toLowerCase()];if(v)return v===c}else if(typeof p=="number")return p===c;return!1}},r=n.exports=t;var a=r.code=r.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},s=r.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(o=97;o<123;o++)a[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)a[o-48]=o;for(o=1;o<13;o++)a["f"+o]=o+111;for(o=0;o<10;o++)a["numpad "+o]=o+96;var U=r.names=r.title={};for(o in a)U[a[o]]=o;for(var H in s)a[H]=s[H]}(K,K.exports)),K.exports}var Pe=Oe();const je=De(Pe),Ke=Ue({slots:{root:"w-full relative outline-0 cursor-pointer",track:`
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
        `}},isDisabled:{true:{root:"cursor-not-allowed",track:"bg-gray-100 before:bg-gray-300",fill:"bg-gray-300",thumb:"bg-gray-100 border-gray-300 shadow-none"}},hasError:{true:{track:"before:bg-rose-800",fill:"bg-rose-800",thumb:"border-rose-800"}},hasFieldHeader:{true:{}},hasFieldFooter:{true:{}},atMin:{true:{track:"before:hidden"}},atMax:{true:{track:"after:hidden"}}},compoundVariants:[{isFocused:!0,hasError:!0,className:{thumb:"after:bg-rose-800"}},{hasFieldHeader:!0,sizer:h.small,className:{root:"mt-2"}},{hasFieldHeader:!0,sizer:h.medium,className:{root:"mt-3"}},{hasFieldHeader:!0,sizer:h.large,className:{root:"mt-4"}},{hasFieldFooter:!0,sizer:h.small,className:{root:"mb-2"}},{hasFieldFooter:!0,sizer:h.medium,className:{root:"mb-3"}},{hasFieldFooter:!0,sizer:h.large,className:{root:"mb-4"}}],defaultVariants:{sizer:h.small,isFocused:!1,isDisabled:!1,atMin:!0,atMax:!1}});function Xe(n,r,t){return((n-r)/(t-r)||0)*100}function d({className:n,sizer:r,label:t,error:a,hint:s,disabled:o,required:U,ref:H,name:m,max:f=100,min:p=0,step:c=1,shiftSteps:v=10,tabIndex:fe,value:te,defaultValue:X,onChange:ve,onMouseDown:ge,onTouchStart:ye,onKeyDown:we,onFocus:be,onBlur:Se,"aria-labelledby":He,"aria-describedby":xe,"aria-errormessage":ke,"aria-invalid":re,...Ee}){const ne=i.useRef(null),G=i.useRef(null),g=i.useRef(null),[_,$]=i.useState(!1),[W,se]=i.useState(!1),[Ve,oe]=i.useState(X!==void 0?Number(X):void 0),x=Number(f),y=Number(p),I=te!==void 0?Number(te):Ve,w=I===void 0?y:I,[le,Ae]=i.useState();function ie(l){const u=parseFloat(l.toFixed(5));if(oe(u),g.current){const E=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(E,"value").set;if(b){const B=new Event("input",{bubbles:!0});b.call(g.current,u),g.current.dispatchEvent(B)}}}function Y(l){if(!G.current)return;const{left:u,right:E,width:pe}=G.current.getBoundingClientRect();let b="touches"in l?l.touches[0].clientX:l.clientX;b<u?b=u:b>E&&(b=E);let B=(b-u)/pe*(x-y)+y;B=Math.round(B/c)*c,ie(B)}const O=Ie(l=>{Y(l)});function Fe(l){o||(document.addEventListener("mousemove",O),document.addEventListener("mouseup",ce),Y(l.nativeEvent),ge?.(l),l.preventDefault(),_||$(!0),ne.current?.focus())}function ce(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ce)}function Ce(l){o||(document.addEventListener("touchmove",O),document.addEventListener("touchup",V),document.addEventListener("touchend",V),document.addEventListener("touchcancel",V),Y(l.nativeEvent),ye?.(l),l.preventDefault())}function V(){document.removeEventListener("touchmove",O),document.removeEventListener("touchup",V),document.removeEventListener("touchend",V),document.removeEventListener("touchcancel",V)}function Te(l){if(!o){let u;const E=l.nativeEvent.shiftKey;switch(je(l.nativeEvent)||l.nativeEvent.key){case"right":case"ArrowRight":case"up":case"ArrowUp":u=Math.min(x,w+(E?c*v:c));break;case"page up":case"PageUp":u=Math.min(x,w+c*v);break;case"left":case"ArrowLeft":case"down":case"ArrowDown":u=Math.max(y,w-(E?c*v:c));break;case"page down":case"PageDown":u=Math.max(y,w-c*v);break;case"home":case"Home":u=y;break;case"end":case"End":u=x;break;case"esc":case"Escape":if(le!==void 0){u=le;break}else return;default:return}ie(u),we?.(l),l.preventDefault(),_&&$(!1)}}function Le(l){o||(W||(se(!0),Ae(w)),be?.(l))}function Ne(l){o||(_&&$(!1),W&&se(!1),g.current&&Se?.({...l,target:g.current,currentTarget:g.current}))}i.useLayoutEffect(()=>{I===void 0&&X===void 0&&g.current?.value!=null&&oe(Number(g.current.value))},[]);function J(l){return typeof l=="function"?l({value:w,min:y,max:x,step:c}):l}const Q=J(t),Z=J(s),k=J(a),[Re]=i.useState(ee()),ue=He||(Q?Re:void 0),[Be]=i.useState(ee()),de=xe||(Z?Be:void 0),[Me]=i.useState(ee()),me=ke||(k&&k!==!0?Me:void 0),P=Xe(w,y,x),ze=_e(r),j=Ke({sizer:ze,isDisabled:o,isFocused:W&&!o&&!_,hasFieldHeader:!!Q,hasFieldFooter:!!(k&&k!==!0||Z),hasError:!!k,atMin:P===0,atMax:P===100});return i.createElement(qe,{className:n,sizer:r,label:Q,labelId:ue,hint:Z,hintId:de,error:k,errorId:me,disabled:o,required:U},i.createElement("div",{...Ee,ref:ne,className:j.root(),role:"slider",tabIndex:o?-1:fe||0,onMouseDown:Fe,onTouchStart:Ce,onFocus:Le,onBlur:Ne,onKeyDown:Te,"aria-disabled":o,"aria-valuemax":x,"aria-valuemin":y,"aria-valuenow":w,"aria-labelledby":ue,"aria-describedby":de,"aria-errormessage":me,"aria-invalid":re!==void 0?re:!!k},i.createElement("div",{ref:G,className:j.track()},i.createElement("div",{className:j.fill(),style:{right:`${100-P}%`},"data-testid":"fill"}),i.createElement("div",{className:j.thumb(),style:{left:`${P}%`},"data-testid":"thumb"}))),i.createElement("input",{ref:l=>{g.current=l,typeof H=="function"?H(l):H&&(H.current=l)},type:"text",name:m,className:"hidden","aria-hidden":!0,defaultValue:I,onChange:ve}))}d.sizer=h;d.__docgenInfo={description:`A form control that allows users to choose a number within a range.
@param props {@link SliderProps} + {@link SliderFieldProps}`,methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the value of the Slider changes"},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Called when the Slider is unfocused"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The minimum allowed value, default is 0",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The maximum allowed value, default is 100",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Indicates the step by which the Slider's value can change, default is 1.\nFor example, to have possible values of [1, 3, 5, 7, 9], use:\n  `<Slider min={1} max={9} step={2} />`",defaultValue:{value:"1",computed:!1}},shiftSteps:{required:!1,tsType:{name:"number"},description:`The number of steps to move when the shift key is held while adjusting
the value via the keyboard, defaults to 10`,defaultValue:{value:"10",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The field name"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Sets the value of the Slider when using it as a
[controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Sets the value of the Slider when using it as an uncontrolled component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"The `ref` is for the hidden input"},sizer:{required:!1,tsType:{name:"union",raw:"Sizer | Sizer[]",elements:[{name:"Sizer"},{name:"Array",elements:[{name:"Sizer"}],raw:"Sizer[]"}]},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactNode"},description:"The main label to show above the form control, naming the field"},hint:{required:!1,tsType:{name:"ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"ReactNode"},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}},composes:["Omit"]};const{expect:e,fn:ae}=__STORYBOOK_MODULE_TEST__,Ge={title:"Form controls/Slider",component:d};function S(n){return{hint:({value:r})=>i.createElement("div",{className:"flex"},i.createElement("div",null,n),i.createElement("div",{className:"ml-auto"},r)),"aria-label":n}}const M={args:{required:!0,label:"A label",hint:"A hint",error:"An error message",defaultValue:"50"},play:async({canvas:n,step:r})=>{const t=n.getByLabelText("A label*"),a=n.getByTitle("required");await r("Assert accessibility of layout elements",async()=>{e(t).toHaveRole("slider"),e(t).toHaveAccessibleDescription("A hint"),e(t).toHaveAccessibleErrorMessage("An error message"),e(t).toHaveValue(50),e(t).toHaveAttribute("aria-valuemin","0"),e(t).toHaveAttribute("aria-valuemax","100"),e(a).toHaveTextContent("*")}),await r("Assert the error style",async()=>{e(n.getByTestId("fill")).toHaveClass("bg-rose-800")})}},A={args:{...S("Slider with no valueish prop"),onChange:ae()},play:async({args:n,canvas:r,step:t,userEvent:a})=>{const s=r.getByRole("slider");await t("Increase value using right arrow",async()=>{e(s).toHaveValue(0),await a.tab(),e(s).toHaveFocus(),await a.keyboard("{ArrowRight}"),e(s).toHaveValue(1),e(n.onChange).toHaveBeenCalledOnce(),await a.keyboard("{Shift>}{ArrowRight}{/Shift}"),e(s).toHaveValue(11)}),await t("Increase value using up arrow",async()=>{await a.keyboard("{ArrowUp}"),e(s).toHaveValue(12),await a.keyboard("{Shift>}{ArrowUp}{/Shift}"),e(s).toHaveValue(22)}),await t("Increase value using page up",async()=>{await a.keyboard("{PageUp}"),e(s).toHaveValue(32)}),await t("Decrease value using left arrow",async()=>{await a.keyboard("{ArrowLeft}"),e(s).toHaveValue(31),await a.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(s).toHaveValue(21)}),await t("Decrease value using down arrow",async()=>{await a.keyboard("{ArrowDown}"),e(s).toHaveValue(20),await a.keyboard("{Shift>}{ArrowDown}{/Shift}"),e(s).toHaveValue(10)}),await t("Increase value using page up",async()=>{await a.keyboard("{PageDown}"),e(s).toHaveValue(0)}),await t("Set value to max using end key",async()=>{await a.keyboard("{End}"),e(s).toHaveValue(100)}),await t("Set value to min using home key",async()=>{await a.keyboard("{Home}"),e(s).toHaveValue(0),e(n.onChange).toHaveBeenCalledTimes(12)}),await t("Unfocus the Slider",async()=>{await a.tab(),e(s).not.toHaveFocus()})}},F={args:{...S("Slider with controlled value"),value:"50",onChange:ae()},play:async({args:n,canvas:r,step:t,userEvent:a})=>{const s=r.getByRole("slider");await t("Assert `value` works",async()=>{e(s).toHaveValue(50)}),await t("Focus the Slider",async()=>{await a.tab(),e(s).toHaveFocus()}),await t("Try increasing the value. `onChange` should fire, but the value is controlled, so it shouldn’t change",async()=>{await a.keyboard("{ArrowRight}"),e(n.onChange).toHaveBeenCalledOnce(),e(s).toHaveValue(50)}),await t("Unfocus the Slider",async()=>{await a.tab(),e(s).not.toHaveFocus()})}},C={args:{...S("Slider with uncontrolled value"),defaultValue:"50",onChange:ae()},play:async({args:n,canvas:r,step:t,userEvent:a})=>{const s=r.getByRole("slider");await t("Assert `defaultValue` works",async()=>{e(s).toHaveValue(50)}),await t("Focus the Slider",async()=>{await a.tab(),e(s).toHaveFocus()}),await t("Sliding the Slider should change the value, since it’s uncontrolled",async()=>{await a.keyboard("{ArrowRight}"),e(s).toHaveValue(51),e(n.onChange).toHaveBeenCalledOnce()}),await t("Reset the value",async()=>{await a.keyboard("{ArrowLeft}"),e(s).toHaveValue(50)}),await t("Unfocus the Slider",async()=>{await a.tab(),e(s).not.toHaveFocus()})}},T={args:{...S("Disabled Slider"),disabled:!0,defaultValue:"50"},play:async({canvas:n,step:r,userEvent:t})=>{const a=n.getByRole("slider");await r("Assert disabled state",async()=>{e(a).toHaveAttribute("aria-disabled","true"),await t.tab(),e(a).not.toHaveFocus()})}},z={args:{...S("Slider with custom range"),defaultValue:"0",min:-1e3,max:1e3,step:.01,shiftSteps:500},play:async({canvas:n,step:r,userEvent:t})=>{const a=n.getByRole("slider");await r("Focus the Slider",async()=>{await t.tab(),e(a).toHaveFocus()}),await r("Increase the value by one step",async()=>{e(a).toHaveValue(0),await t.keyboard("{ArrowRight}"),e(a).toHaveValue(.01)}),await r('Use the shift key to decrease by one "shift step"',async()=>{await t.keyboard("{Shift>}{ArrowLeft}{/Shift}"),e(a).toHaveValue(-4.99)}),await r("Go to the max value",async()=>{await t.keyboard("{End}"),e(a).toHaveValue(1e3)}),await r("Go to the min value",async()=>{await t.keyboard("{Home}"),e(a).toHaveValue(-1e3)}),await r("Reset back to the initial value",async()=>{await t.keyboard("{Escape}"),e(a).toHaveValue(0)}),await r("Unfocus the Slider",async()=>{await t.tab(),e(a).not.toHaveFocus()})}},L={args:{...S("Small Slider (default)"),sizer:d.sizer.small,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the small style on both the Slider & Field",async()=>{e(n.getByLabelText("Small Slider (default)")).toHaveClass("h-5"),e(n.getByText("Small Slider (default)").parentNode?.parentNode).toHaveClass("text-xs")})}},N={args:{...S("Medium Slider"),sizer:d.sizer.medium,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the medium style on both the Slider & Field",async()=>{e(n.getByLabelText("Medium Slider")).toHaveClass("h-6"),e(n.getByText("Medium Slider").parentNode?.parentNode).toHaveClass("text-xs")})}},R={args:{...S("Large Slider"),sizer:d.sizer.large,defaultValue:"50"},play:async({canvas:n,step:r})=>{await r("Assert the large style on both the Slider & Field",async()=>{e(n.getByLabelText("Large Slider")).toHaveClass("h-7"),e(n.getByText("Large Slider").parentNode?.parentNode).toHaveClass("text-sm")})}},D={tags:["!dev","!test"],render:n=>i.createElement("div",{className:"flex flex-col gap-4"},i.createElement(d,{...A.args}),i.createElement(d,{...F.args}),i.createElement(d,{...C.args}),i.createElement(d,{...T.args}))},q={tags:["!dev","!test"],render:n=>i.createElement("div",{className:"flex flex-col items-center gap-5 sm:flex-row"},i.createElement(d,{...L.args,className:"sm:flex-1"}),i.createElement(d,{...N.args,className:"sm:flex-1"}),i.createElement(d,{...R.args,className:"sm:flex-1"}))};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Slider {...NoValue.args} />
      <Slider {...Controlled.args} />
      <Slider {...Uncontrolled.args} />
      <Slider {...Disabled.args} />
    </div>
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-center gap-5 sm:flex-row">
      <Slider {...Small.args} className="sm:flex-1" />
      <Slider {...Medium.args} className="sm:flex-1" />
      <Slider {...Large.args} className="sm:flex-1" />
    </div>
}`,...q.parameters?.docs?.source}}};const $e=["FieldLayout","NoValue","Controlled","Uncontrolled","Disabled","CustomRange","Small","Medium","Large","AllControlStates","AllSizes"],ea=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:D,AllSizes:q,Controlled:F,CustomRange:z,Disabled:T,FieldLayout:M,Large:R,Medium:N,NoValue:A,Small:L,Uncontrolled:C,__namedExportsOrder:$e,default:Ge},Symbol.toStringTag,{value:"Module"}));export{z as C,ea as S,d as a};
