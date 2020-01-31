(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{319:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],isValidKey=function(key){return-1!==validEvents.indexOf(key)};exports.bindHandlers=function(initEvent,listeners,editor){Object.keys(listeners).filter(isValidKey).forEach((function(key){var handler=listeners[key];"function"==typeof handler&&("onInit"===key?handler(initEvent,editor):editor.on(key.substring(2),(function(e){return handler(e,editor)})))}))},exports.bindModelHandlers=function(ctx,editor){var modelEvents=ctx.$props.modelEvents?ctx.$props.modelEvents:null,normalizedEvents=Array.isArray(modelEvents)?modelEvents.join(" "):modelEvents;ctx.$watch("value",(function(val,prevVal){editor&&"string"==typeof val&&val!==prevVal&&val!==editor.getContent()&&editor.setContent(val)})),editor.on(normalizedEvents||"change keyup undo redo",(function(){ctx.$emit("input",editor.getContent({format:ctx.$props.outputFormat}))}))},exports.initEditor=function(initEvent,ctx,editor){var value=ctx.$props.value?ctx.$props.value:"",initialValue=ctx.$props.initialValue?ctx.$props.initialValue:"";editor.setContent(value||initialValue),ctx.$listeners.input&&exports.bindModelHandlers(ctx,editor),exports.bindHandlers(initEvent,ctx.$listeners,editor)};var unique=0;exports.uuid=function(prefix){var time=Date.now();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)},exports.isTextarea=function(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))}},322:function(module,exports,__webpack_require__){__webpack_require__(323),__webpack_require__(506),module.exports=__webpack_require__(507)},361:function(module,exports){},507:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(321);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(693)}),module)}.call(this,__webpack_require__(508)(module))},693:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var vue_1=__webpack_require__(126),Editor_1=__webpack_require__(694),fakeContent_1=__webpack_require__(698),apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc";vue_1.storiesOf("TestComponent",module).add("inline",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:fakeContent_1.content}},template:'<div>\n      <editor api-key="'+apiKey+'" inline v-model="content" />\n      <textarea style="width: 100%;height:150px;" v-model="content"></textarea>\n      <div v-html="content"></div>\n    </div>'}})).add("disable button",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:fakeContent_1.content,disabled:!0}},methods:{toggleDisabled:function(e){this.disabled=!this.disabled}},template:"<div>\n      <button @click=\"toggleDisabled\">{{ disabled ? 'enable' : 'disable' }}</button>\n      <editor api-key=\""+apiKey+'" v-bind:disabled="disabled" v-model="content" />\n    </div>'}})).add("iframe",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:fakeContent_1.content,test:""}},methods:{log:function(e,editor){return console.log(e)}},template:'<div>\n      <editor\n        :init="{branding: false, height: 300}"\n        api-key="'+apiKey+'"\n        plugins="link"\n        toolbar="link bold italic"\n        v-model="content"\n        @onBlur="log"\n      />\n      <editor\n        :init="{branding: false, height: 300}"\n        api-key="'+apiKey+'"\n        v-model="content"\n      />\n      <textarea style="width: 100%;height:150px;" v-model="content"></textarea>\n      <div v-html="content"></div>\n    </div>'}})).add("cloudChannel set to 5-dev",(function(){return{components:{Editor:Editor_1.Editor},data:function(){return{content:fakeContent_1.content,test:""}},methods:{log:function(e,editor){return console.log(e)}},template:'<div>\n      <editor\n        api-key="'+apiKey+'"\n        plugins="link code media table"\n        cloudChannel="5-dev"\n      />\n    </div>'}}),{notes:"Please make sure to reload page to load Tinymce 5."})}).call(this,__webpack_require__(68)(module))},694:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var ScriptLoader=__webpack_require__(695),TinyMCE_1=__webpack_require__(696),Utils_1=__webpack_require__(319),EditorPropTypes_1=__webpack_require__(697),scriptState=ScriptLoader.create(),initialise=function(ctx){return function(){var finalInit=__assign(__assign({},ctx.$props.init),{readonly:ctx.$props.disabled,selector:"#"+ctx.elementId,plugins:Utils_1.mergePlugins(ctx.$props.init&&ctx.$props.init.plugins,ctx.$props.plugins),toolbar:ctx.$props.toolbar||ctx.$props.init&&ctx.$props.init.toolbar,inline:ctx.inlineEditor,setup:function(editor){ctx.editor=editor,editor.on("init",(function(e){return Utils_1.initEditor(e,ctx,editor)})),ctx.$props.init&&"function"==typeof ctx.$props.init.setup&&ctx.$props.init.setup(editor)}});Utils_1.isTextarea(ctx.element)&&(ctx.element.style.visibility=""),TinyMCE_1.getTinymce().init(finalInit)}};exports.Editor={props:EditorPropTypes_1.editorProps,created:function(){this.elementId=this.$props.id||Utils_1.uuid("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==TinyMCE_1.getTinymce())initialise(this)();else if(this.element&&this.element.ownerDocument){var doc=this.element.ownerDocument,channel=this.$props.cloudChannel?this.$props.cloudChannel:"5",apiKey=this.$props.apiKey?this.$props.apiKey:"no-api-key";ScriptLoader.load(scriptState,doc,"https://cdn.tiny.cloud/1/"+apiKey+"/tinymce/"+channel+"/tinymce.min.js",initialise(this))}},beforeDestroy:function(){null!==TinyMCE_1.getTinymce()&&TinyMCE_1.getTinymce().remove(this.editor)},render:function(h){return this.inlineEditor?function(h,id,tagName){return h(tagName||"div",{attrs:{id:id}})}(h,this.elementId,this.$props.tagName):function(h,id){return h("textarea",{attrs:{id:id},style:{visibility:"hidden"}})}(h,this.elementId)}}},695:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Utils_1=__webpack_require__(319);exports.create=function(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoaded:!1}},exports.load=function(state,doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.referrerPolicy="origin",scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.addEventListener("load",callback),scriptTag.src=url,doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,(function(){state.listeners.forEach((function(fn){return fn()})),state.scriptLoaded=!0})))}},696:function(module,exports,__webpack_require__){"use strict";(function(global){Object.defineProperty(exports,"__esModule",{value:!0});var getGlobal=function(){return"undefined"!=typeof window?window:global};exports.getTinymce=function(){var global=getGlobal();return global&&global.tinymce?global.tinymce:null}}).call(this,__webpack_require__(19))},697:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.editorProps={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,outputFormat:{type:String,validator:function(prop){return"html"===prop||"text"===prop}}}},698:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.content='<h1>HTML Ipsum Presents</h1>\n\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n\n<h2>Header Level 2</h2>\n\n<ol>\n   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   <li>Aliquam tincidunt mauris eu risus.</li>\n</ol>\n\n<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>\n\n<h3>Header Level 3</h3>\n\n<ul>\n   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   <li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n\n<pre><code>\n#header h1 a {\n  display: block;\n  width: 300px;\n  height: 80px;\n}\n</code></pre>'}},[[322,1,2]]]);
//# sourceMappingURL=main.5a23ec923b8f96f445a4.bundle.js.map