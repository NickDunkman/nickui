import{r as e}from"./iframe-DVoMRv_a.js";import{F as ne}from"./Field-DsMG-wVd.js";import{c as ie,F as c}from"./index-Czi7Upa3.js";import{r as h}from"./randomId-Dfhrkieu.js";const f={sm:`after:bg-[url("data:image/svg+xml;charset=utf8,%3Csvg%20viewBox='0%200%207%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M3.85296%200.645978C3.75915%200.551937%203.63178%200.499084%203.49896%200.499084C3.36613%200.499084%203.23876%200.551937%203.14496%200.645978L0.144956%203.64598C0.00157937%203.78899%20-0.0413739%204.00437%200.0361719%204.19144C0.113718%204.37852%200.296447%204.50034%200.498956%204.49998H6.49896C6.70147%204.50034%206.88419%204.37852%206.96174%204.19144C7.03929%204.00437%206.99633%203.78899%206.85296%203.64598L3.85296%200.645978Z'%20fill='black'%20/%3E%3Cpath%20d='M6.49896%208.5H0.498956C0.296447%208.49964%200.113718%208.62146%200.0361719%208.80854C-0.0413739%208.99561%200.00157937%209.21099%200.144956%209.354L3.14496%2012.354C3.23876%2012.448%203.36613%2012.5009%203.49896%2012.5009C3.63178%2012.5009%203.75915%2012.448%203.85296%2012.354L6.85296%209.354C6.99633%209.21099%207.03929%208.99561%206.96174%208.80854C6.88419%208.62146%206.70147%208.49964%206.49896%208.5Z'%20fill='black'%20/%3E%3C/svg%3E")]`,md:`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0.853554%205.14645C0.538571%205.46143%200.761654%206%201.20711%206H10.7929C11.2383%206%2011.4614%205.46143%2011.1464%205.14645L6.35355%200.353553C6.15829%200.158291%205.84171%200.158291%205.64645%200.353553L0.853554%205.14645Z'%20fill='black'%20/%3E%3Cpath%20d='M5.64645%2015.6464C5.84171%2015.8417%206.15829%2015.8417%206.35355%2015.6464L11.1464%2010.8536C11.4614%2010.5386%2011.2383%2010%2010.7929%2010H1.20711C0.761654%2010%200.538571%2010.5386%200.853553%2010.8536L5.64645%2015.6464Z'%20fill='black'%20/%3E%3C/svg%3E")]`,lg:`after:bg-[url("data:image/svg+xml;utf8,%3Csvg%20viewBox='0%200%2012%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11.4%207.7C11.6472%208.02962%2011.412%208.5%2011%208.5H1C0.587977%208.5%200.352786%208.02962%200.6%207.7L5.6%201.03333C5.8%200.766667%206.2%200.766667%206.4%201.03333L11.4%207.7Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3Cpath%20d='M11.4%2015.3C11.6472%2014.9704%2011.412%2014.5%2011%2014.5H1C0.587977%2014.5%200.352786%2014.9704%200.6%2015.3L5.6%2021.9667C5.8%2022.2333%206.2%2022.2333%206.4%2021.9667L11.4%2015.3Z'%20fill='black'%20fill-opacity='0.86'%20/%3E%3C/svg%3E")]`},ce=ie({slots:{select:`
      appearance-none
      w-full
      border-2 rounded-sm
      focus:border-indigo-800 focus:shadow-[0_0_11px] focus:shadow-indigo-300 focus:outline-0 
      disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-100
    `,root:`
      relative after:block
      after:absolute after:top-[50%] after:-translate-y-1/2
      after:bg-cover after:bg-no-repeat
      after:pointer-events-none after:select-none
    `},variants:{sizer:{[c.small]:{select:"text-sm py-1.5 pl-2 pr-8",root:`after:w-[7px] after:h-[13px] after:right-3 ${f.sm}`},[c.medium]:{select:"text-base py-2.5 pl-3.5 pr-10",root:`after:w-[12px] after:h-[16px] after:right-3.75 ${f.md}`},[c.large]:{select:"text-lg py-3.5 pl-4.5 pr-12",root:`after:w-[12px] after:h-[23px] after:right-4.5 ${f.lg}`}},hasError:{true:{select:"border-rose-800 focus:border-rose-800 focus:shadow-rose-300"}},isDisabled:{true:{root:"after:opacity-40"}}},defaultVariants:{sizer:c.small,hasError:!1,isDisabled:!1}});function a({className:u,sizer:b,label:v,explainer:Y,hint:S,error:t,disabled:g,required:E,id:ee,"aria-describedby":ae,"aria-errormessage":te,"aria-invalid":x,...re}){const[le]=e.useState(h()),C=ee||(v?le:void 0),[oe]=e.useState(h()),w=ae||(S?oe:void 0),[se]=e.useState(h()),y=te||(t&&t!==!0?se:void 0),A=ce({sizer:b,hasError:!!t,isDisabled:!!g});return e.createElement(ne,{className:u,sizer:b,label:v,explainer:Y,hint:S,hintId:w,error:t!==!0?t:void 0,controlId:C,errorId:y,disabled:g,required:E},e.createElement("div",{className:A.root()},e.createElement("select",{...re,id:C,className:A.select(),disabled:g,required:E,"aria-describedby":w,"aria-errormessage":y,"aria-invalid":x!==void 0?x:!!t})))}a.sizer=c;a.__docgenInfo={description:`A form control that allows users to choose an option using a menu
@param props {@link SelectProps} + {@link CommonFieldProps}`,methods:[],displayName:"Select",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the value of the Select changes"},value:{required:!1,tsType:{name:"string"},description:`Sets the value of the Select when using it as a
[controlled component](https://react.dev/reference/react-dom/components/select#controlling-a-select-box-with-a-state-variable)`},defaultValue:{required:!1,tsType:{name:"string"},description:"Sets the value of the Select when using it as an uncontrolled component"},className:{required:!1,tsType:{name:"string"},description:"Optionally add utility classes to the root element"},sizer:{required:!1,tsType:{name:"FieldSizer"},description:'Changes the size of the field ("small", "medium", "large")'},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main label to show above the form control, naming the field"},explainer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A more detailed label explaining the purpose of the field, placed
directly below the main label`},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`A hint about what kind of value the control accepts, such as a phone
number format`},error:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Error message to show along with the field, or just `true` to trigger the\nerror style without showing an error message."},required:{required:!1,tsType:{name:"boolean"},description:"When `true`, adds an asterisk to the label"},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents the user from interacting with the control"}}};const de={title:"Form controls/Select",component:a},r={args:{value:"controlled",onChange:()=>{},"aria-label":"Example Select with a controlled value",children:[e.createElement("option",{value:"another",key:"another"},"Another option"),e.createElement("option",{value:"controlled",key:"controlled"},"Controlled Select")]}},l={args:{defaultValue:"uncontrolled","aria-label":"Example Select with an uncontrolled value",children:[e.createElement("option",{value:"another",key:"another"},"Another option"),e.createElement("option",{value:"uncontrolled",key:"uncontrolled"},"Uncontrolled Select")]}},o={args:{disabled:!0,"aria-label":"Example disabled Select",children:e.createElement("option",null,"Disabled Select")}},d={tags:["!dev","!test"],render:u=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(a,{...r.args}),e.createElement(a,{...l.args}),e.createElement(a,{...o.args}))},m={args:{label:"A label",explainer:"An explainer",error:"An error message",hint:"A hint",children:e.createElement("option",null,"An option")}},s={args:{sizer:a.sizer.small,"aria-label":"Example small Select",children:e.createElement("option",null,"Small Select (default)")}},n={args:{sizer:a.sizer.medium,"aria-label":"Example medium Select",children:e.createElement("option",null,"Medium Select")}},i={args:{sizer:a.sizer.large,"aria-label":"Example large Select",children:e.createElement("option",null,"Large Select")}},p={tags:["!dev","!test"],render:u=>e.createElement("div",{className:"flex flex-col items-baseline gap-4 sm:flex-row"},e.createElement("div",{className:"flex-1"},e.createElement(a,{...s.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...n.args})),e.createElement("div",{className:"flex-1"},e.createElement(a,{...i.args})))};var N,L,z;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'controlled',
    onChange: () => {},
    'aria-label': 'Example Select with a controlled value',
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="controlled" key="controlled">
        Controlled Select
      </option>]
  }
}`,...(z=(L=r.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var R,k,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: 'uncontrolled',
    'aria-label': 'Example Select with an uncontrolled value',
    children: [<option value="another" key="another">
        Another option
      </option>, <option value="uncontrolled" key="uncontrolled">
        Uncontrolled Select
      </option>]
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var T,_,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    'aria-label': 'Example disabled Select',
    children: <option>Disabled Select</option>
  }
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,F,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col gap-4">
      <Select {...Controlled.args} />
      <Select {...Uncontrolled.args} />
      <Select {...Disabled.args} />
    </div>
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var I,Z,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'A label',
    explainer: 'An explainer',
    error: 'An error message',
    hint: 'A hint',
    children: <option>An option</option>
  }
}`,...(B=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var U,O,P;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.small,
    'aria-label': 'Example small Select',
    children: <option>Small Select (default)</option>
  }
}`,...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,j,$;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.medium,
    'aria-label': 'Example medium Select',
    children: <option>Medium Select</option>
  }
}`,...($=(j=n.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var W,G,J;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    sizer: Select.sizer.large,
    'aria-label': 'Example large Select',
    children: <option>Large Select</option>
  }
}`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <div className="flex flex-col items-baseline gap-4 sm:flex-row">
      <div className="flex-1">
        <Select {...Small.args} />
      </div>
      <div className="flex-1">
        <Select {...Medium.args} />
      </div>
      <div className="flex-1">
        <Select {...Large.args} />
      </div>
    </div>
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const me=["Controlled","Uncontrolled","Disabled","AllControlStates","FieldLayout","Small","Medium","Large","AllSizes"],fe=Object.freeze(Object.defineProperty({__proto__:null,AllControlStates:d,AllSizes:p,Controlled:r,Disabled:o,FieldLayout:m,Large:i,Medium:n,Small:s,Uncontrolled:l,__namedExportsOrder:me,default:de},Symbol.toStringTag,{value:"Module"}));export{d as A,fe as S,a};
