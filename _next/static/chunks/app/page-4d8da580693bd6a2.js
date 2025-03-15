(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1463:(e,t,n)=>{Promise.resolve().then(n.bind(n,6483))},6483:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(5155);let r={nodes:[{id:"turing",name:"Alan Turing",type:"Person",year:1940,description:"Developed early programmable computers for codebreaking during World War II"},{id:"ww2",name:"World War II",type:"Event",year:1939,description:"Global war that accelerated technological development"},{id:"vonneumann",name:"John von Neumann",type:"Person",year:1945,description:"Developed the stored-program architecture that forms the basis of modern computing"},{id:"transistor",name:"Transistor",type:"Invention",year:1947,description:"Semiconductor device that replaced bulky vacuum tubes, making computers smaller and more reliable"},{id:"microprocessor",name:"Microprocessor",type:"Invention",year:1971,description:"Integrated circuit containing the entire CPU, enabling personal computing"}],links:[{source:"ww2",target:"turing",description:"created demand for"},{source:"turing",target:"vonneumann",description:"influenced"},{source:"vonneumann",target:"transistor",description:"made practical by"},{source:"transistor",target:"microprocessor",description:"enabled"}]};var s=n(2115),l=n(5028),i=n(6766),c=n(3984);let o={Person:"#4a4e69",Invention:"#c9ada7",Event:"#9a8c98"},d=(0,l.default)(()=>n.e(206).then(n.bind(n,206)),{loadableGenerated:{webpack:()=>[206]},ssr:!1,loading:()=>(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:"Loading visualization..."})});function m(e){let{data:t}=e,n=(0,s.useRef)(null),[r,l]=(0,s.useState)(null),[m,u]=(0,s.useState)(null),x=(0,s.useRef)({nodes:t.nodes.map(e=>({...e,color:o[e.type]})),links:t.links.map(e=>({...e}))}).current,h=(0,s.useCallback)(e=>{e&&(e.d3Force("link").distance(()=>120).strength(.8),e.d3Force("charge").strength(-180).distanceMax(300),e.d3Force("center").strength(.1),e.d3Force("collision",c.eRw(20)),e.d3ReheatSimulation())},[]);(0,s.useEffect)(()=>{n.current&&h(n.current)},[h]);let p=(0,s.useCallback)((e,t)=>{n.current&&(h(n.current),n.current.d3ReheatSimulation()),l(e),u(null)},[h]),g=(0,s.useCallback)((e,t)=>{n.current&&(h(n.current),n.current.d3ReheatSimulation()),u(e),l(null)},[h]),f=(0,s.useCallback)(()=>{l(null),u(null),n.current&&(h(n.current),n.current.d3ReheatSimulation())},[h]),y=e=>"object"==typeof e&&null!==e&&e.name||"Unknown";return(0,a.jsxs)("div",{className:"absolute inset-0 bg-white",children:[(0,a.jsx)("div",{className:"absolute inset-0 ml-[300px]",children:(0,a.jsx)(d,{ref:n,graphData:x,backgroundColor:"#ffffff",nodeLabel:e=>"".concat(e.name," (").concat(e.year||"unknown",")"),nodeColor:e=>e.color,nodeRelSize:8,linkColor:()=>"#9a8c98",linkWidth:2,linkLabel:e=>e.short||e.description,onNodeClick:p,onLinkClick:g,onEngineStop:()=>{n.current&&n.current.d3ReheatSimulation()},cooldownTicks:1/0,warmupTicks:100,onNodeDrag:e=>{e.fx=e.x,e.fy=e.y},onNodeDragEnd:e=>{e.fx=null,e.fy=null,n.current&&(h(n.current),n.current.d3ReheatSimulation())},linkDirectionalArrowLength:4,linkDirectionalArrowRelPos:1,nodeCanvasObject:(e,t,n)=>{t.beginPath(),t.arc(e.x,e.y,8,0,2*Math.PI),t.fillStyle=e.color,t.fill();let a=e.name,r=12/n;t.font="".concat(r,"px Sans-Serif"),t.textAlign="center",t.textBaseline="middle";let s=t.measureText(a).width;t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(e.x-s/2-2,e.y+8+2,s+4,r+4),t.fillStyle="#333333",t.fillText(a,e.x,e.y+8+r/2+4)},linkCanvasObjectMode:()=>"after",linkCanvasObject:(e,t,n)=>{let a=e.source,r=e.target,s=Object.assign({x:a.x+(r.x-a.x)*.5,y:a.y+(r.y-a.y)*.5}),l=e.short||e.description;if(!l)return;let i=10/n;t.font="".concat(i,"px Sans-Serif");let c=t.measureText(l).width;t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillRect(s.x-c/2-2,s.y-i/2-2,c+4,i+4),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#333333",t.fillText(l,s.x,s.y)}})}),(0,a.jsx)("div",{className:"absolute top-0 left-0 bottom-0 bg-white p-3 shadow-sm border-r border-gray-200",style:{width:"280px",overflow:"auto",pointerEvents:"auto"},children:(0,a.jsx)("div",{className:"flex flex-col h-full",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("h3",{className:"text-md font-medium text-gray-800",children:r.name}),(0,a.jsx)("button",{className:"ml-1 text-xs text-gray-400 hover:text-gray-700",onClick:f,children:"✕"})]}),(0,a.jsxs)("p",{className:"text-xs text-gray-500 mb-2",children:[r.type," | ",r.year||"unknown"]}),r.image&&(0,a.jsx)("div",{className:"mb-3 w-full h-36 relative",children:(0,a.jsx)(i.default,{src:r.image,alt:r.name,fill:!0,style:{objectFit:"contain"},unoptimized:!0})}),(0,a.jsx)("p",{className:"text-sm text-gray-700 mb-4",children:r.description}),r.source&&(0,a.jsx)("a",{href:r.source,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-blue-500 hover:underline",children:"Read more →"})]}):m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("h3",{className:"text-md font-medium text-gray-800",children:"Connection"}),(0,a.jsx)("button",{className:"ml-1 text-xs text-gray-400 hover:text-gray-700",onClick:f,children:"✕"})]}),(0,a.jsx)("p",{className:"text-sm text-gray-700 mb-4",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"font-medium",children:y(m.source)})," ",(0,a.jsx)("span",{className:"text-gray-700",children:m.short||m.description})," ",(0,a.jsx)("span",{className:"font-medium",children:y(m.target)})]})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"text-md font-medium text-gray-800 mb-2",children:"History of Computation"}),(0,a.jsx)("p",{className:"text-xs text-gray-600 mb-4",children:"This interactive visualization maps the evolution of computation through time, showing key inventions, people, and historical events that shaped our technological progress. Click on nodes or links to explore connections and learn more about each element."}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("h3",{className:"text-xs font-medium text-gray-600 uppercase tracking-wide mb-2",children:"Legend"}),(0,a.jsxs)("div",{className:"space-y-1.5",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-3 h-3 rounded-full bg-[#4a4e69] mr-2"}),(0,a.jsx)("span",{className:"text-xs text-gray-600",children:"Person"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-3 h-3 rounded-full bg-[#c9ada7] mr-2"}),(0,a.jsx)("span",{className:"text-xs text-gray-600",children:"Invention"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-3 h-3 rounded-full bg-[#9a8c98] mr-2"}),(0,a.jsx)("span",{className:"text-xs text-gray-600",children:"Event"})]})]})]}),(0,a.jsxs)("div",{className:"mt-auto pt-4 text-xs text-gray-500",children:[(0,a.jsx)("p",{children:"Interact with the visualization:"}),(0,a.jsx)("p",{children:"Click on a node to see details"}),(0,a.jsx)("p",{children:"Click on a link to view relationships"}),(0,a.jsx)("p",{children:"Drag nodes to rearrange the layout"}),(0,a.jsx)("p",{children:"Scroll to zoom in and out"})]})]})})})]})}function u(){return(0,a.jsx)("div",{className:"flex flex-col min-h-screen bg-white",children:(0,a.jsx)("main",{className:"flex-1 relative",children:(0,a.jsx)(m,{data:r})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[532,441,684,358],()=>t(1463)),_N_E=e.O()}]);