(this["webpackJsonpreact-calculator-one"]=this["webpackJsonpreact-calculator-one"]||[]).push([[0],{17:function(t,n,e){},18:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var r,i,a,o,c,d,l,b,s,g,u,h,x,p=e(0),j=e.n(p),f=e(9),m=e.n(f),O=(e(17),e(4)),w=(e(18),e(2)),k=e(3),v="960px",A="959px",C="767px",z="479px",S={extraSmallMobile:"(max-width: ".concat("320px",")"),mobilePortrait:"(max-width: ".concat(z,")"),mobileLandscape:"(max-width: ".concat(C,")"),tabletPortrait:"(max-width: ".concat(A,")"),tabletLandscape:"(min-width: ".concat(v,")")},F=k.a.div(r||(r=Object(w.a)(["\ndisplay: block;\n/* margin: 3em auto; */\nmargin-left: auto;\nmargin-right: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmax-width: 1140px;\npadding-left: 15px;\npadding-right: 15px;\nmargin-left: auto;\nmargin-right: auto;\n\n@media "," {\n\tmax-width: 960px;\n}\n@media "," {\n\tmax-width:720px;\n}\n@media "," {\n\tmax-width: 540px;\n}\n@media "," {\n\tmax-width: 300px;\n\tpadding-left: 0;\n}\n@media "," {\n\tmax-width: 300px;\n\n}\n"])),S.tabletLandscape,S.tabletPortrait,S.mobileLandscape,S.mobilePortrait,S.extraSmallMobile),N=k.a.div(i||(i=Object(w.a)(["\n\tposition: relative;\n\twidth: 300px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-content: center;\n\tbackground-color: #808080;\n\tborder-radius: 10px;\n\tbox-shadow: 2px 2px 10px #333;\n\tcursor: pointer;\n"]))),y=k.a.div(a||(a=Object(w.a)(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 5;\n\twidth: 100%;\n\theight: 20%;\n\tpadding: 10px;\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\ttext-align: right;\n\tword-wrap: break-word;\n\tword-break: break-all;\n\tbackground-color: rgba(58, 58, 58, 1);\n\tborder-top-left-radius: 10px;\n\tborder-top-right-radius: 10px;\n\tborder-bottom: 2px solid rgb(139, 139, 137);\n\tcursor: default;\n"]))),U=k.a.div(o||(o=Object(w.a)(["\n\tcolor: rgba(255, 255, 255, 0.667);\n\tfont-size: 1.125rem;\n"]))),E=k.a.div(c||(c=Object(w.a)(["\n\tcolor: rgb(255, 255, 255);\n\tfont-size: 1.75rem;\n"]))),L=k.a.div(d||(d=Object(w.a)(["\n\theight: 375px;\n\tmargin-top: 5.6em;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'add sub mul div'\n\t\t'sev eig nin acc'\n\t\t'fou fiv six bcc'\n\t\t'one two thr equ'\n\t\t'pmm zeo dec equ';\n"]))),P=k.a.button(l||(l=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 1.75rem;\n\tfont-weight: 500;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tcolor: #b8bbb7;\n\t\tbackground-color: #5e615c;\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),q=k.a.button(b||(b=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 1.6rem;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tbackground-color: rgba(236, 229, 229, 0.9);\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),M=k.a.button(s||(s=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 1.6rem;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tbackground-color: #3abca5;\n\t\tcolor: rgb(255, 255, 255);\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),B=k.a.button(g||(g=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 2.5rem;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tbackground-color: #038069;\n\t\tcolor: rgb(255, 255, 255);\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),I=k.a.button(u||(u=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 150px;\n\tfont-size: 2.5rem;\n\tfont-weight: 800;\n\ttext-align: center;\n\toutline: none;\n\tcolor: #b8bbb7;\n\tbackground-color: #a6611a;\n\tborder: 1px outset white;\n\tborder-bottom-right-radius: 10px;\n\tcursor: pointer;\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tcolor: rgb(255, 255, 255);\n\t\tbackground-color: #bd6a17;\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),J=k.a.button(h||(h=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 1.75rem;\n\tfont-weight: 500;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\tborder-bottom-left-radius: 10px;\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tcolor: #b8bbb7;\n\t\tbackground-color: #5e615c;\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),T=k.a.button(x||(x=Object(w.a)(["\n\t","\n\twidth: 75px;\n\theight: 75px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-size: 2.75rem;\n\tfont-weight: 800;\n\tborder: 1px outset white;\n\toutline: none;\n\tcolor: #3a3a3a;\n\tbackground-color: rgba(194, 189, 189, 0.75);\n\ttransition: width 2s;\n\ttransition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);\n\t&:hover {\n\t\tcolor: #b8bbb7;\n\t\tbackground-color: #5e615c;\n\t}\n"])),(function(t){var n=t.gridArea;return n&&"grid-area: ".concat(n,";")})),D=e(1);function $(){var t=/^[- +]?[\d]+?(\.\d{0,4})?$/,n=Object(p.useState)("0"),e=Object(O.a)(n,2),r=e[0],i=e[1],a=Object(p.useState)(""),o=Object(O.a)(a,2),c=o[0],d=o[1],l=Object(p.useState)(""),b=Object(O.a)(l,2),s=b[0],g=b[1],u=Object(p.useState)("AC"),h=Object(O.a)(u,2),x=h[0],j=h[1],f=function(t){"Undefined"===r&&(console.log(r),d(""),g(""));var n=t.target.getAttribute("data");if(j("CE"),"."!==n||!String(r).includes("."))if(1===r.length&&"0"===r)n.replace(/^(0+)/g,""),i(n),j("CE");else if("Undefined"===r)n.replace("Undefined",""),i(n),j("CE");else{if(r.length>=9)return;i(r+n)}},m=function(){x.includes("AC")?(i("0"),d(""),g("")):"Undefined"===r||String(r).includes("NaN")?(i("0"),d(""),g(""),j("AC")):(i("0"),j("AC"))},w=function(n){if(""!==r&&"."!==r){if(""!==c){var e=k();t.test(e)||(e=e.toFixed(4)),d(e)}else d(r);i(""),g(n.target.getAttribute("data"))}},k=function(){var t,n=parseFloat(c),e=parseFloat(r);if(!isNaN(n)&&!isNaN(e)){switch(s){case"+":t=n+e;break;case"-":t=n-e;break;case"*":t=n*e;break;case"\xf7":t=n/e;break;default:return}return t}};return Object(D.jsx)(F,{children:Object(D.jsxs)(N,{children:[Object(D.jsxs)(y,{children:[Object(D.jsxs)(U,{children:[c,s]}),Object(D.jsxs)(E,{children:["\xa0",r]})]}),Object(D.jsxs)(L,{children:[Object(D.jsx)(P,{gridArea:"add",data:"+",onClick:w,children:"+"}),Object(D.jsx)(P,{gridArea:"sub",data:"-",onClick:w,children:"\u2212"}),Object(D.jsx)(P,{gridArea:"mul",data:"*",onClick:w,children:"\xd7"}),Object(D.jsx)(P,{gridArea:"div",data:"\xf7",onClick:w,children:"\xf7"}),Object(D.jsx)(q,{gridArea:"sev",data:"7",onClick:f,children:"7"}),Object(D.jsx)(q,{gridArea:"eig",data:"8",onClick:f,children:"8"}),Object(D.jsx)(q,{gridArea:"nin",data:"9",onClick:f,children:"9"}),Object(D.jsx)(M,{gridArea:"acc",onClick:m,children:x}),Object(D.jsx)(q,{gridArea:"fou",data:"4",onClick:f,children:"4"}),Object(D.jsx)(q,{gridArea:"fiv",data:"5",onClick:f,children:"5"}),Object(D.jsx)(q,{gridArea:"six",data:"6",onClick:f,children:"6"}),Object(D.jsx)(B,{gridArea:"bcc",onClick:function(){console.log(r),"Undefined"===r?m():i(String(r).slice(0,-1)),(2===r.length&&r.includes("-")||1===r.length)&&i("0")},children:"\xab"}),Object(D.jsx)(q,{gridArea:"one",data:"1",onClick:f,children:"1"}),Object(D.jsx)(q,{gridArea:"two",data:"2",onClick:f,children:"2"}),Object(D.jsx)(q,{gridArea:"thr",data:"3",onClick:f,children:"3"}),Object(D.jsx)(I,{gridArea:"equ",onClick:function(){var n=k();if(void 0!==n&&null!==n)return n===1/0||isNaN(n)?(i("Undefined"),d("Undefined"),void g("")):void(t.test(n)?(String(n).length>=9&&(n=(n=parseFloat(n)).toExponential()),console.log(n),i(n),d(""),g("")):((n=n.toFixed(4)).length>=9&&(n=n.toExponential()),i(n),d(""),g("")))},children:"="}),Object(D.jsxs)(J,{gridArea:"pmm",onClick:function(){console.log(r),"Undefined"!==r&&"Undefined"!==c&&""!==r||m();var t=parseFloat(r);String(t).includes("NaN")?m():(console.log(t),0!==t&&(t*=-1,toString(t),i(t)))},children:[" ","\xb1"]}),Object(D.jsx)(q,{gridArea:"zeo",data:"0",onClick:f,children:"0"}),Object(D.jsx)(T,{gridArea:"dec",data:".",onClick:f,children:"\u22c5"})]})]})})}function G(){return Object(D.jsx)($,{})}var H=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),r(t),i(t),a(t),o(t)}))};m.a.render(Object(D.jsx)(j.a.StrictMode,{children:Object(D.jsx)(G,{})}),document.getElementById("root")),H()}},[[22,1,2]]]);
//# sourceMappingURL=main.50139600.chunk.js.map