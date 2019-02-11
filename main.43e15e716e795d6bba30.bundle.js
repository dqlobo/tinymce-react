(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{324:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var EditorPropTypes_1=__webpack_require__(325);exports.isFunction=function(x){return"function"==typeof x},exports.bindHandlers=function(props,editor,initEvent){var keys;Object.keys(props).filter((keys=Object.keys(EditorPropTypes_1.eventPropTypes),function(key){return-1!==keys.indexOf(key)})).forEach(function(key){var handler=props[key];exports.isFunction(handler)&&("onInit"===key?handler(initEvent,editor):editor.on(key.substring(2),function(e){return handler(e,editor)}))})};var unique=0;exports.uuid=function(prefix){var time=(new Date).getTime();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)},exports.isTextarea=function(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))}},325:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var PropTypes=__webpack_require__(301);exports.eventPropTypes={onActivate:PropTypes.func,onAddUndo:PropTypes.func,onBeforeAddUndo:PropTypes.func,onBeforeExecCommand:PropTypes.func,onBeforeGetContent:PropTypes.func,onBeforeRenderUI:PropTypes.func,onBeforeSetContent:PropTypes.func,onBeforePaste:PropTypes.func,onBlur:PropTypes.func,onChange:PropTypes.func,onClearUndos:PropTypes.func,onClick:PropTypes.func,onContextMenu:PropTypes.func,onCopy:PropTypes.func,onCut:PropTypes.func,onDblclick:PropTypes.func,onDeactivate:PropTypes.func,onDirty:PropTypes.func,onDrag:PropTypes.func,onDragDrop:PropTypes.func,onDragEnd:PropTypes.func,onDragGesture:PropTypes.func,onDragOver:PropTypes.func,onDrop:PropTypes.func,onExecCommand:PropTypes.func,onFocus:PropTypes.func,onFocusIn:PropTypes.func,onFocusOut:PropTypes.func,onGetContent:PropTypes.func,onHide:PropTypes.func,onInit:PropTypes.func,onKeyDown:PropTypes.func,onKeyPress:PropTypes.func,onKeyUp:PropTypes.func,onLoadContent:PropTypes.func,onMouseDown:PropTypes.func,onMouseEnter:PropTypes.func,onMouseLeave:PropTypes.func,onMouseMove:PropTypes.func,onMouseOut:PropTypes.func,onMouseOver:PropTypes.func,onMouseUp:PropTypes.func,onNodeChange:PropTypes.func,onObjectResizeStart:PropTypes.func,onObjectResized:PropTypes.func,onObjectSelected:PropTypes.func,onPaste:PropTypes.func,onPostProcess:PropTypes.func,onPostRender:PropTypes.func,onPreProcess:PropTypes.func,onProgressState:PropTypes.func,onRedo:PropTypes.func,onRemove:PropTypes.func,onReset:PropTypes.func,onSaveContent:PropTypes.func,onSelectionChange:PropTypes.func,onSetAttrib:PropTypes.func,onSetContent:PropTypes.func,onShow:PropTypes.func,onSubmit:PropTypes.func,onUndo:PropTypes.func,onVisualAid:PropTypes.func},exports.EditorPropTypes=__assign({apiKey:PropTypes.string,id:PropTypes.string,inline:PropTypes.bool,init:PropTypes.object,initialValue:PropTypes.string,onEditorChange:PropTypes.func,value:PropTypes.string,tagName:PropTypes.string,cloudChannel:PropTypes.string,plugins:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),toolbar:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),disabled:PropTypes.bool,textareaName:PropTypes.string},exports.eventPropTypes)},326:function(module,exports,__webpack_require__){__webpack_require__(327),__webpack_require__(446),module.exports=__webpack_require__(447)},447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(192);__webpack_require__(544);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(650)},module)}.call(this,__webpack_require__(448)(module))},650:function(module,exports,__webpack_require__){"use strict";(function(module){var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var addon_info_1=__webpack_require__(651),react_1=__webpack_require__(192),React=__webpack_require__(1),src_1=__webpack_require__(761),fakeContent_1=__webpack_require__(765);addon_info_1.setDefaults({inline:!0,source:!0,propTables:!1});var StateFulEditor=function(_super){function StateFulEditor(props){var _this=_super.call(this,props)||this;return _this.state={data:"<p>hello</p>"},_this}return __extends(StateFulEditor,_super),StateFulEditor.prototype.handleChange=function(data){this.setState({data:data})},StateFulEditor.prototype.render=function(){var _this=this;return React.createElement("div",null,React.createElement(src_1.Editor,__assign({},this.props,{value:this.state.data,onEditorChange:function(e){return _this.handleChange(e)}})),React.createElement("textarea",{style:{width:"100%",height:"200px",fontSize:"1em"},value:this.state.data,onChange:function(e){return _this.handleChange(e.target.value)}}))},StateFulEditor}(React.Component),DisablingEditor=function(_super){function DisablingEditor(props){var _this=_super.call(this,props)||this;return _this.state={disabled:!1},_this}return __extends(DisablingEditor,_super),DisablingEditor.prototype.toggleDisabled=function(){this.setState({disabled:!this.state.disabled})},DisablingEditor.prototype.render=function(){return console.log(this.state.disabled),React.createElement("div",null,React.createElement(src_1.Editor,{disabled:this.state.disabled}),React.createElement("button",{onClick:this.toggleDisabled.bind(this)},this.state.disabled?"enable":"disable"))},DisablingEditor}(React.Component);react_1.storiesOf("Editor",module).add("Controlled input editor",addon_info_1.withInfo({text:"Simple iframe editor with some initial html value. Logs editor content on change event."})(function(){return React.createElement(StateFulEditor,{plugins:"table"})})).add("Iframe editor",addon_info_1.withInfo({text:"Simple iframe editor with some initial html value. Logs editor content on change event."})(function(){return React.createElement(src_1.Editor,{initialValue:fakeContent_1.content,onChange:function(event,editor){return console.log(editor.getContent())},plugins:"link table"})})).add("Inline init editor",addon_info_1.withInfo({text:"Simple inline editor with some initial html value. Logs editor content on change event."})(function(){return React.createElement(src_1.Editor,{init:{inline:!0,plugins:"link table wordcount",toolbar:"bold link table"}})})).add("Inline editor",addon_info_1.withInfo({text:"Simple inline editor with some initial html value. Logs editor content on change event."})(function(){return React.createElement(src_1.Editor,{inline:!0,plugins:"link table wordcount",toolbar:"bold link table"})})).add("Disabled editor",addon_info_1.withInfo({text:"Simple disabled editor."})(function(){return React.createElement(src_1.Editor,{disabled:!0})})).add("Disable editor dynamically with button",addon_info_1.withInfo({text:"Shows example with setting the editor into readonly mode using the disabled prop. This is usage:\n      \n      class DisablingEditor extends React.Component {\n        constructor(props) {\n          super(props);\n          this.state = { disabled: false };\n        }\n      \n        public toggleDisabled() {\n          this.setState({ disabled: !this.state.disabled });\n        }\n      \n        public render() {\n          console.log(this.state.disabled);\n          return (\n            <div>\n              <Editor disabled={this.state.disabled} />\n              <button onClick={this.toggleDisabled.bind(this)}>{this.state.disabled ? 'enable' : 'disable'}</button>\n            </div>\n          );\n        }\n      }\n      "})(function(){return React.createElement(DisablingEditor,null)})).add("Inlite editor",addon_info_1.withInfo({text:"Simple inline editor with some initial html value. Logs editor content on change event."})(function(){return React.createElement(src_1.Editor,{inline:!0,init:{theme:"inlite"},initialValue:fakeContent_1.content,onChange:function(event,editor){return console.log(editor.getContent())}})})).add("editor with cloudchannel fixed to 4",addon_info_1.withInfo({text:"Editor with cloudChannel set to 4"})(function(){return React.createElement(src_1.Editor,{cloudChannel:"4",onChange:function(event,editor){return console.log(editor.getContent())}})})).add("editor with cloudchannel fixed to 5-dev",addon_info_1.withInfo({text:"Editor with cloudChannel set to 5-dev, please make sure to reload page to load tinymce 5"})(function(){return React.createElement(src_1.Editor,{cloudChannel:"5-dev",onChange:function(event,editor){return console.log(editor.getContent())}})}))}).call(this,__webpack_require__(87)(module))},654:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":174,"./nestedObjectAssign.js":174};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=654},761:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Editor_1=__webpack_require__(762);exports.Editor=Editor_1.Editor},762:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(1),ScriptLoader=__webpack_require__(763),TinyMCE_1=__webpack_require__(764),Utils_1=__webpack_require__(324),EditorPropTypes_1=__webpack_require__(325),scriptState=ScriptLoader.create(),Editor=function(_super){function Editor(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.element=null,_this.initialise=function(){var finalInit=__assign({},_this.props.init,{target:_this.element,readonly:_this.props.disabled,inline:_this.inline,plugins:Utils_1.mergePlugins(_this.props.init&&_this.props.init.plugins,_this.props.plugins),toolbar:_this.props.toolbar||_this.props.init&&_this.props.init.toolbar,setup:function(editor){_this.editor=editor,editor.on("init",function(e){_this.initEditor(e,editor)}),_this.props.init&&"function"==typeof _this.props.init.setup&&_this.props.init.setup(editor)}});Utils_1.isTextarea(_this.element)&&(_this.element.style.visibility=""),TinyMCE_1.getTinymce().init(finalInit)},_this}return __extends(Editor,_super),Editor.prototype.componentWillMount=function(){this.id=this.id||this.props.id||Utils_1.uuid("tiny-react"),this.inline=this.props.inline?this.props.inline:this.props.init&&this.props.init.inline},Editor.prototype.componentDidMount=function(){if(null!==TinyMCE_1.getTinymce())this.initialise();else if(this.element&&this.element.ownerDocument){var doc=this.element.ownerDocument,channel=this.props.cloudChannel,apiKey=this.props.apiKey?this.props.apiKey:"";ScriptLoader.load(scriptState,doc,"https://cloud.tinymce.com/"+channel+"/tinymce.min.js?apiKey="+apiKey,this.initialise)}},Editor.prototype.componentWillUnmount=function(){null!==TinyMCE_1.getTinymce()&&TinyMCE_1.getTinymce().remove(this.editor)},Editor.prototype.componentWillReceiveProps=function(nextProps){this.editor&&this.editor.initialized&&(this.currentContent=this.currentContent||this.editor.getContent(),"string"==typeof nextProps.value&&nextProps.value!==this.props.value&&nextProps.value!==this.currentContent&&this.editor.setContent(nextProps.value),"boolean"==typeof nextProps.disabled&&nextProps.disabled!==this.props.disabled&&this.editor.setMode(nextProps.disabled?"readonly":"design"))},Editor.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},Editor.prototype.initEditor=function(initEvent,editor){var _this=this,value="string"==typeof this.props.value?this.props.value:"string"==typeof this.props.initialValue?this.props.initialValue:"";editor.setContent(value),Utils_1.isFunction(this.props.onEditorChange)&&editor.on("change keyup setcontent",function(e){_this.currentContent=editor.getContent(),Utils_1.isFunction(_this.props.onEditorChange)&&_this.props.onEditorChange(_this.currentContent)}),Utils_1.bindHandlers(this.props,editor,initEvent)},Editor.prototype.renderInline=function(){var _this=this,_a=this.props.tagName,tagName=void 0===_a?"div":_a;return React.createElement(tagName,{ref:function(elm){return _this.element=elm},id:this.id})},Editor.prototype.renderIframe=function(){var _this=this;return React.createElement("textarea",{ref:function(elm){return _this.element=elm},style:{visibility:"hidden"},id:this.id,name:this.props.textareaName})},Editor.propTypes=EditorPropTypes_1.EditorPropTypes,Editor.defaultProps={cloudChannel:"5"},Editor}(React.Component);exports.Editor=Editor},763:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Utils_1=__webpack_require__(324);exports.create=function(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoaded:!1}},exports.load=function(state,doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.addEventListener("load",callback),scriptTag.src=url,doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,function(){state.listeners.forEach(function(fn){return fn()}),state.scriptLoaded=!0}))}},764:function(module,exports,__webpack_require__){"use strict";(function(global){Object.defineProperty(exports,"__esModule",{value:!0});var getGlobal=function(){return"undefined"!=typeof window?window:global};exports.getTinymce=function(){var global=getGlobal();return global&&global.tinymce?global.tinymce:null}}).call(this,__webpack_require__(23))},765:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.content='<h1>HTML Ipsum Presents</h1>\n\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n\n<h2>Header Level 2</h2>\n\n<ol>\n   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   <li>Aliquam tincidunt mauris eu risus.</li>\n</ol>\n\n<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>\n\n<h3>Header Level 3</h3>\n\n<ul>\n   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n   <li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n\n<pre><code>\n#header h1 a {\n  display: block;\n  width: 300px;\n  height: 80px;\n}\n</code></pre>'}},[[326,1,2]]]);
//# sourceMappingURL=main.43e15e716e795d6bba30.bundle.js.map