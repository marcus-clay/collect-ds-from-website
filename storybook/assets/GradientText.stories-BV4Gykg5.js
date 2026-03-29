import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const G={heading:"bg-gradient-heading","heading-muted":"bg-gradient-heading-muted"},j={switzer:"font-switzer",gambarino:"font-gambarino",tanker:"font-tanker"};function a({children:N,variant:k="heading",as:z="span",font:S="switzer",className:y=""}){return e.jsx(z,{className:[G[k],j[S],"bg-clip-text text-transparent",y].filter(Boolean).join(" "),children:N})}a.__docgenInfo={description:"",methods:[],displayName:"GradientText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"heading" | "heading-muted"',elements:[{name:"literal",value:'"heading"'},{name:"literal",value:'"heading-muted"'}]},description:"Gradient style",defaultValue:{value:'"heading"',computed:!1}},as:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "p" | "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"p"'},{name:"literal",value:'"span"'}]},description:"HTML element to render",defaultValue:{value:'"span"',computed:!1}},font:{required:!1,tsType:{name:"union",raw:'"switzer" | "gambarino" | "tanker"',elements:[{name:"literal",value:'"switzer"'},{name:"literal",value:'"gambarino"'},{name:"literal",value:'"tanker"'}]},description:"Font family",defaultValue:{value:'"switzer"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const q={title:"Components/GradientText",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["heading","heading-muted"]},as:{control:"select",options:["h1","h2","h3","h4","p","span"]},font:{control:"select",options:["switzer","gambarino","tanker"]}}},t={args:{children:"Elevate your thinking",as:"h1",font:"switzer",variant:"heading",className:"text-5xl font-bold"}},n={args:{children:"Elevate your thinking",as:"h1",font:"gambarino",variant:"heading",className:"text-5xl"}},r={args:{children:"Elevate your thinking",as:"h1",font:"tanker",variant:"heading",className:"text-5xl"}},s={args:{children:"The browser built for people who think",as:"h2",font:"switzer",variant:"heading-muted",className:"text-2xl font-medium"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 items-center",children:[e.jsx(a,{as:"h1",font:"tanker",className:"text-5xl",children:"Surf — Tanker"}),e.jsx(a,{as:"h1",font:"gambarino",className:"text-5xl",children:"Surf — Gambarino"}),e.jsx(a,{as:"h1",font:"switzer",className:"text-5xl font-bold",children:"Surf — Switzer Bold"}),e.jsx(a,{as:"p",font:"switzer",variant:"heading-muted",className:"text-xl",children:"Muted subheading — Switzer regular"})]})};var o,l,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "switzer",
    variant: "heading",
    className: "text-5xl font-bold"
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "gambarino",
    variant: "heading",
    className: "text-5xl"
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,p,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "tanker",
    variant: "heading",
    className: "text-5xl"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "The browser built for people who think",
    as: "h2",
    font: "switzer",
    variant: "heading-muted",
    className: "text-2xl font-medium"
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,b,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 items-center">
      <GradientText as="h1" font="tanker" className="text-5xl">Surf — Tanker</GradientText>
      <GradientText as="h1" font="gambarino" className="text-5xl">Surf — Gambarino</GradientText>
      <GradientText as="h1" font="switzer" className="text-5xl font-bold">Surf — Switzer Bold</GradientText>
      <GradientText as="p" font="switzer" variant="heading-muted" className="text-xl">
        Muted subheading — Switzer regular
      </GradientText>
    </div>
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const M=["H1Switzer","H1Gambarino","H1Tanker","Muted","AllFonts"];export{i as AllFonts,n as H1Gambarino,t as H1Switzer,r as H1Tanker,s as Muted,M as __namedExportsOrder,q as default};
