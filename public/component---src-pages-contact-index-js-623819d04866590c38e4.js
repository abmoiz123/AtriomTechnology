(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"C+wa":function(t,n,e){"use strict";e.r(n),e.d(n,"ContactQuery",(function(){return w}));var a=e("q1tI"),r=e.n(a),i=e("TJpk"),o=e.n(i),p=e("rEp9"),c=e("7vrA"),s=e("3Z9Z"),m=e("JI6e"),l=e("YZy7"),u=e("YNxu"),f=e("Quhn"),d=e("vQG3");e("dM3Z");var h=function(t){var n,e;function a(){return t.apply(this,arguments)||this}return e=t,(n=a).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,a.prototype.render=function(){return r.a.createElement(c.a,{fluid:!0,className:"creative_container_contactPage"},r.a.createElement(u.a,{text:"Contact Us"}),r.a.createElement(l.a,{animation:"fadeIn"},r.a.createElement(s.a,{className:"formRow"},r.a.createElement(m.a,{className:"form_col",lg:8,md:8,sm:12},r.a.createElement(f.a,null)),r.a.createElement(m.a,{className:"form_col",lg:4,md:4,sm:12},r.a.createElement(d.a,null)))))},a}(r.a.Component),y=e("SP5u");var x=function(t){var n,e;function a(){return t.apply(this,arguments)||this}return e=t,(n=a).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,a.prototype.render=function(){var t=this.props.data.site;return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("title",null,t.meta.title),r.a.createElement("meta",{name:"description",content:t.meta.description})),r.a.createElement(p.a,null),r.a.createElement(h,null),r.a.createElement(y.a,null))},a}(r.a.Component),w=(n.default=x,"2053861952")},YNxu:function(t,n,e){"use strict";e("KKXr");var a=e("q1tI"),r=e.n(a),i=e("uY+Z"),o=e.n(i),p=e("vOnD");function c(){var t=l(["\n            word-wrap: break-word;\n            font-size: 100px;\n            margin: 0 ",";\n            @media (max-width: 767px) {\n                font-size: 40px;\n                line-height: 40px;\n                margin: 0 5px;\n            }\n        "]);return c=function(){return t},t}function s(){var t=l(["\n            transform: translate(0, -100px);\n            display: inline-block;\n            transition: 1s;\n            opacity: 0;\n            font-size: ",";\n            line-height: ",";\n            font-family: Teko;\n            text-transform: uppercase;\n            word-wrap: break-word;\n            @media (max-width: 767px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n            &.animation_complete {\n                transform: translate(0, 0);\n                opacity: 1;\n            }\n            &.animate {\n                animation: "," forwards 1s;\n            }\n        "]);return s=function(){return t},t}function m(){var t=l(["\n            0% {\n                opacity: 0;\n            }\n            100% {\n                transform: translate(0,0);\n                opacity: 1;\n            }\n        "]);return m=function(){return t},t}function l(t,n){return n||(n=t.slice(0)),t.raw=n,t}var u=function(t){var n,e;function a(n){var e;return(e=t.call(this,n)||this).state={inViewport:!1,animation_complete:!1,animate:!1,force:!1},e}e=t,(n=a).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var i=a.prototype;return i.componentDidUpdate=function(){var t=this;if(this.state.inViewport!==this.props.inViewport&&!this.state.force&&!this.state.animation_complete){this.setState({inViewport:this.props.inViewport,animate:!0,force:!0});var n=1;this.props.text.split(" ").forEach((function(t,e){t.split("").forEach((function(t,e){++n}))})),setTimeout((function(){t.setState({animation_complete:!0})}),200*n+500)}this.state.inViewport!==this.props.inViewport&&this.state.force&&this.setState({animation_complete:!0,force:!1})},i.shouldComponentUpdate=function(t,n){return!(this.state.animation_complete&&!this.props.inViewport)},i.render=function(){return r.a.createElement("h2",{style:{textAlign:"center",marginBottom:"20px"},className:"heading"},this.animate())},i.animate=function(){var t=this,n=Object(p.c)(m()),e=p.b.span.withConfig({displayName:"animated-heading__AnimatedLetter",componentId:"sc-1bsrype-0"})(s(),this.props.fontSize?this.props.fontSize:"100px",this.props.lineHeight?this.props.lineHeight:"90px",n),a=p.b.span.withConfig({displayName:"animated-heading__Space",componentId:"sc-1bsrype-1"})(c(),this.props.space?this.props.space:"10px"),i=0;return this.props.text.split(" ").map((function(n,o){return n.split("").map((function(p,c){return++i,c+1!==n.length?r.a.createElement(e,{key:c,style:{animationDelay:100*i+"ms",color:o%2!=0||t.props.color?"#f6b10a":"#fff"},className:t.state.animation_complete?"animation_complete":t.state.animate?"animate":""},p):r.a.createElement("span",{key:c},r.a.createElement(e,{style:{animationDelay:100*i+"ms",color:o%2!=0||t.props.color?"#f6b10a":"#fff"},className:t.state.animation_complete?"animation_complete":t.state.animate?"animate":""},p),r.a.createElement(a,null))}))}))},a}(r.a.Component),f=o()(u);n.a=f},dM3Z:function(t,n,e){},rEp9:function(t,n,e){"use strict";var a=e("q1tI"),r=e.n(a),i=e("vOnD"),o=e("qer5"),p=e("7EEJ"),c=e.n(p);function s(){var t=f(["\n            height: auto !important;\n            width: 100%;\n            @media (max-width: 576px) {\n                height: auto !important;\n                width: 100%;\n            }\n            @media (max-width: 576px) {\n                height: auto !important;\n                width: 100%;\n            }\n        "]);return s=function(){return t},t}function m(){var t=f(["\n            flex: 0 0 30%;\n            max-width: 30%;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            @media (max-width: 576px) {\n                flex: 0 0 40%;\n                max-width: 40%;\n            }\n            @media (max-width: 400px) {\n                flex: 0 0 45%;\n                max-width: 45%;\n            }\n        "]);return m=function(){return t},t}function l(){var t=f(["\n            display: flex;\n            position: relative;\n            // @media (max-width: 500px) {\n            //     padding: 0;\n            // }\n            \n        "]);return l=function(){return t},t}function u(){var t=f(["\n            background-color: #013567;\n            width: 100%;\n            padding: 8px 30px;\n            @media (max-width: 992px) {\n                padding: 10px 30px;\n            }\n            @media (max-width: 400px) {\n                padding: 10px 15px;\n            }\n        "]);return u=function(){return t},t}function f(t,n){return n||(n=t.slice(0)),t.raw=n,t}var d=function(t){var n,e;function a(){return t.apply(this,arguments)||this}return e=t,(n=a).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,a.prototype.render=function(){var t=i.b.div.withConfig({displayName:"Header__NavbarWrapper",componentId:"meyjyr-0"})(u()),n=i.b.div.withConfig({displayName:"Header__NavbarContainer",componentId:"meyjyr-1"})(l()),e=i.b.div.withConfig({displayName:"Header__LogoWrapper",componentId:"meyjyr-2"})(m()),a=i.b.img.withConfig({displayName:"Header__Logo",componentId:"meyjyr-3"})(s());return r.a.createElement(t,null,r.a.createElement(n,null,r.a.createElement(e,{className:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement(a,{src:c.a,alt:"Atriom"}))),r.a.createElement(o.a,null)))},a}(r.a.Component);n.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-623819d04866590c38e4.js.map