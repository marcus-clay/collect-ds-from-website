import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const x={title:"Foundations/Colors",parameters:{layout:"padded"},tags:["autodocs"]},u=[{group:"Brand",tokens:[{name:"brand-dark",value:"#1a2a3a",usage:"Headings, gradient text start"},{name:"brand-mid",value:"#3a5a7a",usage:"Gradient text end"}]},{group:"Accent",tokens:[{name:"accent-bright",value:"#0097fe",usage:"CTA buttons, primary action"},{name:"accent-blue",value:"#0080e5",usage:"CTA gradient end"}]},{group:"Interactive",tokens:[{name:"interactive",value:"#0396df",usage:"Card selected start"},{name:"interactive-end",value:"#0282e8",usage:"Card selected end"},{name:"interactive-hover",value:"#006ec7",usage:"Hover state"}]},{group:"Border",tokens:[{name:"border",value:"#28476110",usage:"Default outline (6% opacity)"},{name:"border-hover",value:"#28476140",usage:"Hover outline (25% opacity)"}]},{group:"Accent / Decorative",tokens:[{name:"stroke-light",value:"#d1d7fe",usage:"SVG strokes, lavender accent"},{name:"overlay-dark",value:"#0000001a",usage:"10% black overlay"},{name:"overlay-light",value:"#ffffffe6",usage:"90% white overlay"}]},{group:"Base",tokens:[{name:"white",value:"#ffffff",usage:"Backgrounds"},{name:"black",value:"#000000",usage:"Body text"}]}];function m({name:a,value:n,usage:c}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"10px 0",borderBottom:"1px solid #f0f0f0"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:8,flexShrink:0,background:n,border:"1px solid rgba(0,0,0,0.08)",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.2)"}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:13,fontWeight:600,color:"#1a2a3a"},children:n}),e.jsxs("div",{style:{fontSize:12,color:"#666",marginTop:2},children:[e.jsxs("code",{style:{background:"#f4f4f4",padding:"1px 5px",borderRadius:3},children:["bg-",a]}),e.jsx("span",{style:{marginLeft:8},children:c})]})]})]})}const t={render:()=>e.jsx("div",{style:{fontFamily:"Switzer, sans-serif",maxWidth:700},children:u.map(a=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("h3",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#999",marginBottom:8},children:a.group}),a.tokens.map(n=>e.jsx(m,{...n},n.name))]},a.group))})},p=[{name:"gradient-heading",value:"linear-gradient(135deg, #1a2a3a, #3a5a7a)",usage:"Heading text (background-clip: text)"},{name:"gradient-heading-muted",value:"linear-gradient(135deg, #1a2a3a99, #3a5a7a99)",usage:"Muted subheadings"},{name:"gradient-cta",value:"linear-gradient(180deg, #0097fe, #0080e5)",usage:"Primary CTA button"},{name:"gradient-card-selected",value:"linear-gradient(180deg, #0396df, #0282e8)",usage:"Feature card selected state"}],r={render:()=>e.jsx("div",{style:{fontFamily:"Switzer, sans-serif",display:"flex",flexDirection:"column",gap:16,maxWidth:700},children:p.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{style:{width:80,height:48,borderRadius:8,background:a.value,flexShrink:0}}),e.jsxs("div",{children:[e.jsxs("code",{style:{fontSize:12,background:"#f4f4f4",padding:"2px 6px",borderRadius:3},children:["bg-",a.name]}),e.jsx("div",{style:{fontSize:12,color:"#666",marginTop:4},children:a.usage}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:11,color:"#999",marginTop:2},children:a.value})]})]},a.name))})};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    maxWidth: 700
  }}>
      {colors.map(group => <div key={group.group} style={{
      marginBottom: 32
    }}>
          <h3 style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#999",
        marginBottom: 8
      }}>
            {group.group}
          </h3>
          {group.tokens.map(t => <Swatch key={t.name} {...t} />)}
        </div>)}
    </div>
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: "Switzer, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    maxWidth: 700
  }}>
      {gradients.map(g => <div key={g.name} style={{
      display: "flex",
      alignItems: "center",
      gap: 16
    }}>
          <div style={{
        width: 80,
        height: 48,
        borderRadius: 8,
        background: g.value,
        flexShrink: 0
      }} />
          <div>
            <code style={{
          fontSize: 12,
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: 3
        }}>
              bg-{g.name}
            </code>
            <div style={{
          fontSize: 12,
          color: "#666",
          marginTop: 4
        }}>{g.usage}</div>
            <div style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "#999",
          marginTop: 2
        }}>{g.value}</div>
          </div>
        </div>)}
    </div>
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const h=["All","Gradients"];export{t as All,r as Gradients,h as __namedExportsOrder,x as default};
