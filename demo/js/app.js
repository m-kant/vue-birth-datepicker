(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],d=0,h=[];d<s.length;d++)o=s[d],i[o]&&h.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2856:function(e,t,a){},"457e":function(e,t,a){},"4fcb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Demo")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("a",{staticClass:"btn btn-default",attrs:{href:"http://mkant.ru"}},[e._v("MKant.ru")]),e._m(0),e._m(1),a("h1",[e._v("vue-birth-datepicker demo")]),a("p",[e._v("Date picker for distant dates, such as birthday.\n      Just three clicks to choose any month and day 20 or 50 years ago.")]),a("h3",[e._v("Basic")]),a("div",{staticClass:"code-pane"},[e._v(e._s(e.codeBasic))]),a("birth-datepicker",{attrs:{selectYear:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("h3",[e._v("Inline")]),a("div",{staticClass:"code-pane"},[e._v(e._s(e.codeInline))]),a("birth-datepicker",{attrs:{inline:!0,selectYear:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("h3",[e._v("Playground")]),a("div",{staticStyle:{padding:"10px","background-color":"#eee"},on:{click:function(e){e.stopPropagation()}}},[a("birth-datepicker",{attrs:{valueIsString:e.valueIsString,inline:e.inline,high:e.high,placeholder:e.placeholder,attachment:e.attachment,closeOnSet:e.closeOnSet,yearFirst:e.yearFirst,delimiter:e.delimiter,hideHeader:e.hideHeader,minYear:e.minYear?Number(e.minYear):null,maxYear:e.maxYear?Number(e.maxYear):null,locale:e.calcLocale},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("p",[e._v("Specify attributes:")]),a("div",{staticClass:"input-pane"},[a("div",{staticClass:"col4"},[a("h4",[e._v("Output")]),a("label",[a("div",{staticClass:"remark"},[e._v("String or timestamp for local date 00 hours 00 minutes")]),e._v("\n          value: "+e._s(e.date))]),a("label",[a("div",{staticClass:"remark"},[e._v('Reselect date after changing "valueIsString" to affect value')]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.valueIsString,expression:"valueIsString"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.valueIsString)?e._i(e.valueIsString,null)>-1:e.valueIsString},on:{change:function(t){var a=e.valueIsString,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.valueIsString=a.concat([r])):o>-1&&(e.valueIsString=a.slice(0,o).concat(a.slice(o+1)))}else e.valueIsString=i}}}),e._v(" valueIsString")]),a("h4",[e._v("Flags")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inline,expression:"inline"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.inline)?e._i(e.inline,null)>-1:e.inline},on:{change:function(t){var a=e.inline,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.inline=a.concat([r])):o>-1&&(e.inline=a.slice(0,o).concat(a.slice(o+1)))}else e.inline=i}}}),e._v(" inline")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.high,expression:"high"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.high)?e._i(e.high,null)>-1:e.high},on:{change:function(t){var a=e.high,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.high=a.concat([r])):o>-1&&(e.high=a.slice(0,o).concat(a.slice(o+1)))}else e.high=i}}}),e._v(" high")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hideHeader,expression:"hideHeader"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hideHeader)?e._i(e.hideHeader,null)>-1:e.hideHeader},on:{change:function(t){var a=e.hideHeader,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.hideHeader=a.concat([r])):o>-1&&(e.hideHeader=a.slice(0,o).concat(a.slice(o+1)))}else e.hideHeader=i}}}),e._v(" hideHeader")])]),a("div",{staticClass:"col4"},[a("h4",[e._v("For not-inline")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.closeOnSet,expression:"closeOnSet"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.closeOnSet)?e._i(e.closeOnSet,null)>-1:e.closeOnSet},on:{change:function(t){var a=e.closeOnSet,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.closeOnSet=a.concat([r])):o>-1&&(e.closeOnSet=a.slice(0,o).concat(a.slice(o+1)))}else e.closeOnSet=i}}}),e._v(" closeOnSet")]),a("label",[e._v("placeholder "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.placeholder,expression:"placeholder"}],attrs:{type:"text"},domProps:{value:e.placeholder},on:{input:function(t){t.target.composing||(e.placeholder=t.target.value)}}})]),a("label",[e._v("attachment "),a("div",{staticClass:"remark"},[e._v("combination of top/bottom/left/right")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.attachment,expression:"attachment"}],attrs:{type:"text"},domProps:{value:e.attachment},on:{input:function(t){t.target.composing||(e.attachment=t.target.value)}}})])]),a("div",{staticClass:"col4"},[a("h4",[e._v("Date format")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.yearFirst,expression:"yearFirst"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.yearFirst)?e._i(e.yearFirst,null)>-1:e.yearFirst},on:{change:function(t){var a=e.yearFirst,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);n.checked?o<0&&(e.yearFirst=a.concat([r])):o>-1&&(e.yearFirst=a.slice(0,o).concat(a.slice(o+1)))}else e.yearFirst=i}}}),e._v(" yearFirst")]),a("label",[e._v("delimiter "),a("div",{staticClass:"remark"},[e._v("for not-inline input and string output")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],attrs:{type:"text"},domProps:{value:e.delimiter},on:{input:function(t){t.target.composing||(e.delimiter=t.target.value)}}})]),a("label",[e._v("maxYear   "),a("div",{staticClass:"remark"},[e._v("leave empty for unlimited")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maxYear,expression:"maxYear"}],attrs:{type:"number"},domProps:{value:e.maxYear},on:{input:function(t){t.target.composing||(e.maxYear=t.target.value)}}})]),a("label",[e._v("minYear   "),a("div",{staticClass:"remark"},[e._v("leave empty for unlimited")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.minYear,expression:"minYear"}],attrs:{type:"number"},domProps:{value:e.minYear},on:{input:function(t){t.target.composing||(e.minYear=t.target.value)}}})])]),a("div",{staticClass:"col4"},[a("h4",[e._v("Locale (I18n)")]),a("label",[e._v("locale\n          "),a("div",{staticClass:"remark"},[e._v("Can be a string ('en' or 'ru'), or an array of month names")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.demolocale,expression:"demolocale"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.demolocale=t.target.multiple?a:a[0]}}},[a("option",[e._v("en")]),a("option",[e._v("ru")]),a("option",{attrs:{value:""}},[e._v("custom month names")])])]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.customLocale,expression:"customLocale"}],attrs:{type:"text",disabled:Boolean(e.demolocale)},domProps:{value:e.customLocale},on:{input:function(t){t.target.composing||(e.customLocale=t.target.value)}}})])])])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"btn btn-default",attrs:{href:"https://github.com/m-kant/vue-birth-datepicker"}},[e._v("View at "),a("b",[e._v("GIT Hub")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"btn btn-default",attrs:{href:"https://www.npmjs.com/package/vue-birth-datepicker"}},[e._v("View at "),a("b",[e._v("NPM")])])}],l=(a("28a5"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"birthday-picker",class:{"birthday-picker_inline":e.inline,"birthday-picker_high":e.high}},[a("input",{attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.valueStr},on:{input:e.onManualInput,focus:function(t){e.inputIsFocused=!0},blur:function(t){e.inputIsFocused=!1,e.$nextTick(e.onWidgetBlur)},click:function(t){e.toggle()}}}),a("div",{staticClass:"birthday-picker_carriage",class:{"bp-opened":e.active}}),a("transition",{attrs:{name:"dropdown-trans"}},[e.active||e.inline?a("button",{staticClass:"birthday-picker_dropdown",class:"attach-"+e.attachmentX+" attach-"+e.attachmentY,attrs:{"click.stop":""},on:{focus:function(t){e.dropdownIsFocused=!0},blur:function(t){e.dropdownIsFocused=!1,e.$nextTick(e.onWidgetBlur)}}},[e.hideHeader?e._e():a("div",{staticClass:"birthday-picker_dropdown-header"},[e._v(e._s(e.valueHeader))]),a("div",{staticClass:"birthday-picker_dropdown-body"},[a("div",{staticClass:"birthday-picker_days-months"},[a("pick-day",{attrs:{value:e.day},on:{input:e.setDay}}),a("pick-month",{attrs:{value:e.month,months:e.months},on:{input:e.setMonth}})],1),a("pick-year",{attrs:{value:e.year,min:e.minYear,max:e.maxYear},on:{input:e.setYear}})],1)]):e._e()])],1)}),c=[],u=a("9393"),d=(a("a481"),a("6762"),a("2fdb"),a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"birthday-picker_days"},[a("table",{attrs:{cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{attrs:{colspan:e.colsCount}},[e._v(" ")])]),e._l(e.dayRows,function(t,n){return a("tr",{key:"dayrow"+n},e._l(t,function(t,n){return a("td",{key:"daycell"+n},[t?a("a",{class:{"bdp-active":t===e.value,"bdp-today":t===e.today},on:{click:function(a){a.stopPropagation(),e.emitInput(t)}}},[e._v(e._s(t))]):e._e()])}))})],2)])}),h=[],p={props:{value:{type:[Number]},today:{type:Number,default:function(){return(new Date).getDay()}}},data:function(){return{colsCount:5}},computed:{dayRows:function(){for(var e=[],t=31,a=Math.ceil(t/this.colsCount),n=1,i=0;i<a;i++){for(var r=[],o=0;o<this.colsCount;o++){var s=n++;s>t&&(s=""),r.push(s)}e.push(r)}return e}},methods:{emitInput:function(e){this.$emit("input",e)}}},m=p,v=a("2877"),f=Object(v["a"])(m,d,h,!1,null,null,null);f.options.__file="pick-day.vue";var y=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"birthday-picker_months"},[a("table",{attrs:{cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{attrs:{colspan:e.colsCount}},[e._v(" ")])]),e._l(e.monthRows,function(t,n){return a("tr",{key:"monthrow"+n},e._l(t,function(t,n){return a("td",{key:"monthcell"+n},[a("a",{class:{"bdp-active":t===e.value,"bdp-today":t===e.today},on:{click:function(a){a.stopPropagation(),e.emitInput(t)}}},[e._v("\n         "+e._s(e.months[t])+"\n        ")])])}))})],2)])},b=[],_={props:{value:{type:Number},months:{type:Array}},data:function(){return{colsCount:2}},computed:{today:function(){return(new Date).getMonth()},monthRows:function(){for(var e=[],t=11,a=Math.ceil(t/this.colsCount),n=0;n<a;n++){for(var i=[],r=0;r<this.colsCount;r++){var o=n*this.colsCount+r;o>t&&(o=""),i.push(o)}e.push(i)}return e}},methods:{emitInput:function(e){this.$emit("input",e)}}},k=_,w=Object(v["a"])(k,g,b,!1,null,null,null);w.options.__file="pick-month.vue";var S=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"birthday-picker_years"},[a("table",{attrs:{cellspacing:"0",cellpadding:"0"}},[a("tr",{staticClass:"bdp-increase-year",on:{click:function(t){return t.stopPropagation(),e.increaseYear(t)}}},[a("td",{attrs:{colspan:e.colsCount}},[e._v("\n          "),e.ableToIncrease?a("i",{staticClass:"birthday-picker_carriage-up"}):e._e(),e._v("  \n      ")])]),e._l(e.rows,function(t,n){return a("tr",{key:"yearrow"+n},e._l(t,function(t,n){return a("td",{key:"yearrow"+n},[t?a("a",{class:{"bdp-active":t===e.value,disabled:t<e.min||e.max&&t>e.max,"bdp-today":t===e.today},on:{click:function(a){a.stopPropagation(),e.emitInput(t)}}},[e._v("\n          "+e._s(e.yearStr(t))+"\n        ")]):e._e()])}))}),a("tr",{staticClass:"bdp-decrease-year",on:{click:function(t){return t.stopPropagation(),e.decreaseYear(t)}}},[a("td",{attrs:{colspan:e.colsCount}},[e._v("\n          "),e.ableToDecrease?a("i",{staticClass:"birthday-picker_carriage-down"}):e._e(),e._v("  \n      ")])])],2)])},C=[],F={props:{value:{type:[Number]},max:{type:Number,default:function(){return(new Date).getFullYear()}},min:{type:Number}},beforeMount:function(){this.yearFrom=this.max?this.max:(new Date).getFullYear()},data:function(){return{active:!1,year:null,colsCount:10,rowsCount:6,yearFrom:null}},computed:{today:function(){return(new Date).getFullYear()},rows:function(){for(var e=[],t=this.min?this.floorToTens(this.min):null,a=this.floorToTens(this.yearFrom),n=0;n<this.rowsCount;n++){for(var i=[],r=0;r<this.colsCount;r++){var o=a+r;i.push(o)}if(e.push(i),a-=this.colsCount,t&&a<t)break}return e},ableToDecrease:function(){if(!this.min)return!0;var e=this.ceilToTens(this.yearFrom)-this.rowsCount*this.colsCount;return e>this.min},ableToIncrease:function(){return!this.max||this.ceilToTens(this.yearFrom)<this.max+1}},methods:{setYearFrom:function(e){this.max?this.yearFrom=this.ceilToTens(this.max):this.yearFrom=this.ceilToTens(e)},floorToTens:function(e){return 10*Math.floor(e/10)},ceilToTens:function(e){return 10*Math.ceil(e/10)},assignValue:function(){},decreaseYear:function(){this.ableToDecrease&&(this.yearFrom-=this.colsCount*this.rowsCount)},increaseYear:function(){this.ableToIncrease&&this.setYearFrom(this.yearFrom+this.colsCount*this.rowsCount)},emitInput:function(e){this.$emit("input",e)},yearIsDecade:function(e){return"0"===String(e).substr(-1)},yearStr:function(e){return e=String(e),this.yearIsDecade(e)?e:e.substr(-2)}}},Y=F,I=(a("810a"),Object(v["a"])(Y,x,C,!1,null,null,null));I.options.__file="pick-year.vue";var O=I.exports,A={name:"vueBirthDatepicker",props:{value:{type:[Number,String]},valueIsString:{type:Boolean,default:!1},placeholder:{type:String},attachment:{type:String,default:"bottom left"},wildcard:{type:String,default:"_"},delimiter:{type:String,default:"."},yearFirst:{type:Boolean,default:!1},closeOnSet:{type:Boolean,default:!0},hideHeader:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},high:{type:Boolean,default:!1},locale:{type:[String,Array],default:"en"},minYear:{type:[Number]},maxYear:{type:Number},selectYear:{type:[Number,Boolean]}},components:{pickDay:y,pickMonth:S,pickYear:O},beforeMount:function(){this.assignValue(),!0===this.selectYear?this.year=(new Date).getFullYear():"number"===typeof this.selectYear&&(this.year=this.selectYear)},beforeDestroy:function(){this.removeClickOutHandler()},watch:{value:function(){this.assignValue()}},data:function(){return{inputIsFocused:!1,dropdownIsFocused:!1,skipToggle:!1,day:null,month:null,year:null,active:!1,monthLocales:{en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],ru:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]}}},computed:{isFilled:function(){return!(null===this.day||null===this.month||null===this.year)},months:function(){var e;return e="string"===typeof this.locale?this.monthLocales[this.locale]:this.locale,e||this.monthLocales["en"]},valueTimestamp:function(){return this.isFilled?Date.UTC(this.year,this.month,this.day):null},attachmentX:function(){return this.attachment.includes("right")?"right":"left"},attachmentY:function(){return this.attachment.includes("top")?"top":"bottom"},dayStr:function(){return null===this.day?"":this.day<10?"0"+this.day:String(this.day)},monthStr:function(){if(null===this.month)return"";var e=this.month+1;return e<10?"0"+e:String(e)},valueStr:function(){if(!this.isFilled)return"";var e=this.yearFirst?[this.year,this.monthStr,this.dayStr]:[this.dayStr,this.monthStr,this.year];return e.join(this.delimiter)},valueHeader:function(){var e=this.dayStr?this.dayStr:this.wildcard+this.wildcard,t=this.monthStr?this.months[this.month]:this.wildcard+this.wildcard+this.wildcard,a=this.year?this.year:this.wildcard+this.wildcard+this.wildcard+this.wildcard;return this.yearFirst?"".concat(a," ").concat(t," ").concat(e):"".concat(e," ").concat(t," ").concat(a)}},methods:{assignValue:function(){if(this.valueIsString&&this.value){if(!this.parseStringDate(this.value))throw new Error("Can not parse date string")}else if("number"===typeof this.value){var e=new Date(this.value);this.day=e.getUTCDate(),this.month=e.getUTCMonth(),this.year=e.getUTCFullYear()}else this.day=null,this.month=null,this.year=null},open:function(){this.active=!0},close:function(){this.active=!1},closeAfterSet:function(){this.isFilled&&this.closeOnSet&&this.close()},toggle:function(){this.active=!this.active},onWidgetBlur:function(){this.inputIsFocused||this.dropdownIsFocused||(this.active=!1)},setDay:function(e){this.day=e,this.emitInput(),this.closeAfterSet()},setMonth:function(e){this.month=e,this.emitInput(),this.closeAfterSet()},setYear:function(e){this.year=e,this.emitInput(),this.closeAfterSet()},emitInput:function(){if(this.isFilled){var e=this.valueIsString?this.valueStr:this.valueTimestamp;this.$emit("input",e)}},yearIsDecade:function(e){return"0"===String(e).substr(-1)},yearStr:function(e){return e=String(e),this.yearIsDecade(e)?e:e.substr(-2)},onManualInput:function(e){var t=e.target.value.replace(/\s+/g,"");this.parseStringDate(t)&&this.emitInput()},parseStringDate:function(e){var t=e.split(this.delimiter).map(function(e){return Number(e)});if(!(t.length<3)&&!t.includes(NaN)){var a,n,i;if(this.yearFirst){var r=Object(u["a"])(t,3);a=r[0],n=r[1],i=r[2]}else{var o=Object(u["a"])(t,3);i=o[0],n=o[1],a=o[2]}return n--,n<0&&(n=0),n>11&&(n=11),i<1&&(n=1),i>31&&(n=31),a>this.maxYear&&(a=this.maxYear),a<this.minYear&&(a=this.minYear),this.year=a,this.month=n,this.day=i,!0}},addClickOutHandler:function(){window.addEventListener("click",this.clickOutHandler)},removeClickOutHandler:function(){window.removeEventListener("click",this.clickOutHandler)}}},T=A,D=(a("ad52"),Object(v["a"])(T,l,c,!1,null,null,null));D.options.__file="birth-datepicker.vue";var N=D.exports,P={beforeMount:function(){},components:{birthDatepicker:N},data:function(){return{date:null,inline:!1,high:!1,closeOnSet:!1,valueIsString:!1,yearFirst:!1,hideHeader:!1,delimiter:".",placeholder:"Wow!",attachment:"bottom left",maxYear:(new Date).getFullYear()-5,minYear:1959,demolocale:"en",customLocale:"JN FB MR AP MY JU JL AG SP OK NV DC",codeBasic:'<birth-datepicker v-model="date" />',codeInline:'<birth-datepicker v-model="date" :inline="true" selectYear />'}},computed:{calcLocale:function(){return this.demolocale?this.demolocale:this.customLocale.split(/[,\s]+/)}},methods:{}},M=P,H=(a("a2f2"),Object(v["a"])(M,o,s,!1,null,"766d95dd",null));H.options.__file="Demo.vue";var j=H.exports,B={name:"app",components:{Demo:j}},L=B,$=(a("5c0b"),Object(v["a"])(L,i,r,!1,null,null,null));$.options.__file="App.vue";var E=$.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("2856"),i=a.n(n);i.a},"810a":function(e,t,a){"use strict";var n=a("f91b"),i=a.n(n);i.a},a2f2:function(e,t,a){"use strict";var n=a("457e"),i=a.n(n);i.a},ad52:function(e,t,a){"use strict";var n=a("4fcb"),i=a.n(n);i.a},f91b:function(e,t,a){}});
//# sourceMappingURL=app.js.map