import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";function i({count:a,active:n,onChange:f,className:b=""}){return e.jsx("div",{role:"tablist","aria-label":"Slide navigation",className:["flex items-center gap-2",b].join(" "),children:Array.from({length:a},(y,t)=>e.jsx("button",{role:"tab","aria-selected":t===n,"aria-label":`Go to slide ${t+1}`,onClick:()=>f(t),className:["w-2 h-2 rounded-full border-0 p-0 cursor-pointer","transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",t===n?"bg-black opacity-40 scale-125":"bg-black/20 hover:bg-black/30"].join(" ")},t))})}i.__docgenInfo={description:"",methods:[],displayName:"NavDots",props:{count:{required:!0,tsType:{name:"number"},description:"Total number of slides/items"},active:{required:!0,tsType:{name:"number"},description:"Currently active index"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called with new index on click"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const w={title:"Components/NavDots",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{count:{control:{type:"range",min:2,max:8,step:1}},active:{control:{type:"range",min:0,max:7,step:1}}}},r={args:{count:3,active:0,onChange:()=>{}}},s={render:()=>{const[a,n]=h.useState(0);return e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsx("div",{className:"w-64 h-32 rounded-xl bg-gradient-heading flex items-center justify-center",children:e.jsxs("span",{className:"text-white font-switzer font-semibold",children:["Slide ",a+1]})}),e.jsx(i,{count:4,active:a,onChange:n})]})}},o={args:{count:6,active:2,onChange:()=>{}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    count: 3,
    active: 0,
    onChange: () => {}
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(0);
    return <div className="flex flex-col items-center gap-6">
        <div className="w-64 h-32 rounded-xl bg-gradient-heading flex items-center justify-center">
          <span className="text-white font-switzer font-semibold">Slide {active + 1}</span>
        </div>
        <NavDots count={4} active={active} onChange={setActive} />
      </div>;
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    count: 6,
    active: 2,
    onChange: () => {}
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const D=["Default","Interactive","ManyDots"];export{r as Default,s as Interactive,o as ManyDots,D as __namedExportsOrder,w as default};
