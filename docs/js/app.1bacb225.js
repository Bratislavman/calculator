(function(t){function n(n){for(var e,o,c=n[0],s=n[1],l=n[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,n=0;n<r.length;n++){for(var a=r[n],e=!0,c=1;c<a.length;c++){var s=a[c];0!==i[s]&&(e=!1)}e&&(r.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},r=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},1:function(t,n){},"2f4b":function(t,n,a){},"2fed":function(t,n,a){"use strict";a("604d")},"40a8":function(t,n,a){},"44b9":function(t,n,a){},"51a3":function(t,n,a){"use strict";a("40a8")},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("main",[a("calculator")],1)])},r=[],o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"calculator"},[a("container",{attrs:{title:"Калькулятор"}},[a("calculations-creator")],1),a("container",{attrs:{title:"Расчёты"}},[a("calculations-list",{attrs:{"calculations-list":t.calculations}})],1)],1)},c=[],s=a("5530"),l=(a("a434"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"content"},[t._t("default")],2)])}),u=[],f={name:"Container",props:{title:{type:String,required:!0}}},d=f,p=(a("a267"),a("2877")),v=Object(p["a"])(d,l,u,!1,null,"7a66d572",null),m=v.exports,h=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.fractionsList.length>0?a("div",{staticClass:"calculations-creator"},[a("fraction-expression",{attrs:{fractions:t.fractionsList,answer:t.answer,"fraction-component":t.fractionComponent}}),a("button",{staticClass:"button add-fraction",attrs:{disabled:!t.canAddFraction},on:{click:t.addFraction}},[t._v("Добавить дробь")]),a("br"),a("button",{staticClass:"button_style2",attrs:{disabled:t.isCalculationsInvalid},on:{click:t.saveCalculations}},[t._v("Сохранить расчёты")])],1):t._e()},b=[],C=a("3835"),_=a("2909"),O=(a("d81d"),a("159b"),a("99af"),a("ac1f"),a("1276"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"fraction-expression"},[a("div",{staticClass:"fractions"},t._l(t.fractions,(function(n,e){return a("div",{key:n.id,staticClass:"fraction-container"},[a(t.fractionComponent,{tag:"component",attrs:{fraction:n,index:e}}),e<t.fractions.length-1?a("div",{staticClass:"plus"},[t._v("+")]):t._e()],1)})),0),a("div",{staticClass:"equals"},[t._v("=")]),t.answer?[t.answerFraction.value?a("div",{staticClass:"value"},[t._v(t._s(t.answerFraction.value))]):a("fraction",{attrs:{fraction:t.answerFraction}})]:t._e()],2)}),j=[],y=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"fraction"},[t.fraction.wholePart?a("div",{staticClass:"fraction__whole-part"},[t._v(t._s(t.fraction.wholePart))]):t._e(),a("div",{staticClass:"container"},[a("div",{staticClass:"numerator fraction-value fraction-value_disabled"},[t._v(t._s(t.fraction.numerator))]),a("div",{staticClass:"line"}),a("div",{staticClass:"denominator fraction-value fraction-value_disabled"},[t._v(t._s(t.fraction.denominator))])])])},x=[],w={name:"Fraction",props:{fraction:{type:Object,required:!1}}},F=w,g=Object(p["a"])(F,y,x,!1,null,null,null),E=g.exports,S={name:"FractionExpression",props:{answer:{type:Object,required:!0},fractions:{type:Array,required:!0},fractionComponent:{type:Object,required:!0}},components:{Fraction:E},computed:{answerFraction:function(){return Object(s["a"])(Object(s["a"])({},this.answer),{},{canRemove:!1,canBeEdited:!1})}}},$=S,q=(a("6ad5"),Object(p["a"])($,O,j,!1,null,null,null)),L=q.exports,P=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"fraction"},[a("div",{staticClass:"container"},[t.fraction.canRemove?a("button",{staticClass:"fraction__remove",on:{click:function(n){return t.removeFraction(t.index)}}},[t._v("×")]):t._e(),a("fraction-editable-input",{attrs:{name:"numerator",value:t.fraction.numerator,index:t.index}}),a("div",{staticClass:"line"}),a("fraction-editable-input",{attrs:{name:"denominator",value:t.fraction.denominator,index:t.index}})],1)])},k=[],I=(a("a9e3"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("input",{ref:"input",class:t.classes,attrs:{placeholder:"00"},on:{input:t.input}})}),N=[],M=(a("b0c0"),{name:"FractionEditableInput",props:{name:{type:String,required:!0},index:{type:Number,required:!0},value:{type:[String,Number],required:!0}},data:function(){return{min:1,max:99}},inject:["updateFraction"],methods:{input:function(t){var n=this.value,a=t.target.value;""!==a&&(a=Number(a),isNaN(a)?a=n:a>this.max?a=this.max:a<this.min&&(a=this.min)),a!==n&&this.updateFraction(this.index,this.name,a),this.$refs.input.value=a}},computed:{classes:function(){return["fraction-value",this.name]}}}),R=M,A=Object(p["a"])(R,I,N,!1,null,null,null),J=A.exports,T={name:"FractionEditable",components:{FractionEditableInput:J},inject:["removeFraction"],props:{fraction:{type:Object,required:!0},index:{type:Number,required:!0}}},B=T,z=Object(p["a"])(B,P,k,!1,null,null,null),D=z.exports,G={name:"CalculationsCreator",components:{FractionExpression:L},data:function(){return{fractions:[],fractionsCounter:0,math:null,answer:null,fractionComponent:D}},created:function(){this.reloadForm(),this.math=this.$createMath("Fraction")},computed:{fractionsLength:function(){return this.fractions.length},fractionsList:function(){var t=this;return this.fractions.map((function(n){return n.canRemove=t.canRemoveFraction,n}))},canAddFraction:function(){return this.fractionsLength<5},canRemoveFraction:function(){return this.fractionsLength>2},isCalculationsInvalid:function(){return this.fractions.some((function(t){return!t.numerator||!t.denominator}))}},provide:function(){return{removeFraction:this.removeFraction,updateFraction:this.updateFraction}},inject:["addCalculations"],methods:{reloadForm:function(){this.fractions=[],this.answer=null;for(var t=0;t<2;t++)this.addFraction()},addFraction:function(){this.fractions.push({numerator:"",denominator:"",canRemove:!0,canBeEdited:!0,id:this.fractionsCounter}),this.fractionsCounter++,this.calculate()},removeFraction:function(t){this.fractions.splice(t,1),this.calculate()},updateFraction:function(t,n,a){this.fractions[t][n]=a,this.calculate()},saveCalculations:function(){this.addCalculations({fractions:Object(_["a"])(this.fractions),answer:Object(s["a"])({},this.answer)}),this.reloadForm()},calculate:function(){var t=this;if(this.isCalculationsInvalid)this.answer={value:"?"};else{var n="";this.fractions.forEach((function(a,e){n+="".concat(a.numerator,"/").concat(a.denominator),e<t.fractionsLength-1&&(n+="+")}));var a=this.math.evaluate(n).toFraction(!0);if(a.indexOf(" ")>-1){var e=a.split(" "),i=Object(C["a"])(e,2),r=i[0],o=i[1],c=o.split("/"),s=Object(C["a"])(c,2),l=s[0],u=s[1];this.answer={wholePart:r,numerator:l,denominator:u}}else if(a.indexOf("/")>-1){var f=a.split("/"),d=Object(C["a"])(f,2),p=d[0],v=d[1];this.answer={numerator:p,denominator:v}}else this.answer={value:a}}}}},H=G,K=(a("51a3"),Object(p["a"])(H,h,b,!1,null,"413d8969",null)),Q=K.exports,U=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.calculationsList.length>0?a("div",{staticClass:"calculations-list"},t._l(t.calculationsList,(function(n,e){return a("div",{key:n.id,staticClass:"calculations"},[a("fraction-expression",{attrs:{fractions:n.fractions,answer:n.answer,"fraction-component":t.fractionComponent}}),a("button",{staticClass:"button calculations__remove",on:{click:function(n){return t.removeCalculations(e)}}},[t._v("Удалить")])],1)})),0):t._e()},V=[],W={name:"CalculationsCreator",components:{FractionExpression:L},props:{calculationsList:{type:Array,required:!0}},data:function(){return{fractionComponent:E}},inject:["removeCalculations"]},X=W,Y=(a("2fed"),Object(p["a"])(X,U,V,!1,null,"0c7125cd",null)),Z=Y.exports,tt={name:"Calculator",components:{Container:m,CalculationsCreator:Q,CalculationsList:Z},data:function(){return{calculations:[],calculationsCounter:0}},mounted:function(){var t=localStorage.getItem("calculations");if(t)try{this.calculations=JSON.parse(t)}catch(n){localStorage.removeItem("calculations")}},methods:{addCalculations:function(t){this.calculations.push(Object(s["a"])(Object(s["a"])({},t),{},{id:this.calculationsCounter})),this.calculationsCounter++,this.saveCalculations()},removeCalculations:function(t){this.calculations.splice(t,1),this.saveCalculations()},saveCalculations:function(){var t=JSON.stringify(this.calculations);localStorage.setItem("calculations",t)}},provide:function(){return{addCalculations:this.addCalculations,removeCalculations:this.removeCalculations}}},nt=tt,at=Object(p["a"])(nt,o,c,!1,null,null,null),et=at.exports,it={name:"App",components:{Calculator:et}},rt=it,ot=(a("5c0b"),Object(p["a"])(rt,i,r,!1,null,null,null)),ct=ot.exports,st=a("1cd1"),lt=a("2bac"),ut={install:function(t){t.prototype.$createMath=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"number";return Object(st["a"])(lt["a"],{number:t})}}},ft=ut;e["a"].config.productionTip=!1,e["a"].use(ft),new e["a"]({render:function(t){return t(ct)}}).$mount("#app")},"5c0b":function(t,n,a){"use strict";a("9c0c")},"604d":function(t,n,a){},"6ad5":function(t,n,a){"use strict";a("2f4b")},"9c0c":function(t,n,a){},a267:function(t,n,a){"use strict";a("44b9")}});
//# sourceMappingURL=app.1bacb225.js.map