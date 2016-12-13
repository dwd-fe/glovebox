(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var BoxImage_1 = __webpack_require__(2);
	exports.BoxImage = BoxImage_1.default;
	var LineMesh_1 = __webpack_require__(31);
	exports.LineMesh = LineMesh_1.default;
	var Text_1 = __webpack_require__(37);
	exports.Text = Text_1.default;
	var Sprite_1 = __webpack_require__(41);
	exports.Sprite = Sprite_1.default;
	var Box_1 = __webpack_require__(44);
	exports.Box = Box_1.default;
	var AbstractUniform_1 = __webpack_require__(8);
	exports.AbstractUniform = AbstractUniform_1.default;
	var ArrayUniform_1 = __webpack_require__(49);
	exports.ArrayUniform = ArrayUniform_1.default;
	var Attribute_1 = __webpack_require__(3);
	exports.Attribute = Attribute_1.default;
	var Color_1 = __webpack_require__(32);
	exports.Color = Color_1.default;
	var Constants_1 = __webpack_require__(6);
	exports.Constants = Constants_1.default;
	var Drawable_1 = __webpack_require__(5);
	exports.Drawable = Drawable_1.default;
	var Font_1 = __webpack_require__(50);
	exports.Font = Font_1.default;
	var MatrixUniform_1 = __webpack_require__(21);
	exports.MatrixUniform = MatrixUniform_1.default;
	var Stage_1 = __webpack_require__(89);
	exports.Stage = Stage_1.default;
	var Texture_1 = __webpack_require__(38);
	exports.Texture = Texture_1.default;
	var TextureUniform_1 = __webpack_require__(22);
	exports.TextureUniform = TextureUniform_1.default;
	var Uniform_1 = __webpack_require__(7);
	exports.Uniform = Uniform_1.default;
	var Line_1 = __webpack_require__(33);
	exports.Line = Line_1.default;
	var Matrix2_1 = __webpack_require__(34);
	exports.Matrix2 = Matrix2_1.default;
	var Matrix3_1 = __webpack_require__(9);
	exports.Matrix3 = Matrix3_1.default;
	var Vector2_1 = __webpack_require__(20);
	exports.Vector2 = Vector2_1.default;
	var Vector3_1 = __webpack_require__(90);
	exports.Vector3 = Vector3_1.default;
	var ImageUtil_1 = __webpack_require__(91);
	exports.ImageUtil = ImageUtil_1.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attribute_1 = __webpack_require__(3);
	var Drawable_1 = __webpack_require__(5);
	var TextureUniform_1 = __webpack_require__(22);
	var BoxImage_glsl_1 = __webpack_require__(29);
	var BoxImage_glsl_2 = __webpack_require__(30);
	
	var BoxImage = function (_Drawable_1$default) {
	    _inherits(BoxImage, _Drawable_1$default);
	
	    function BoxImage(texture, _width, _height) {
	        _classCallCheck(this, BoxImage);
	
	        var _this = _possibleConstructorReturn(this, (BoxImage.__proto__ || Object.getPrototypeOf(BoxImage)).call(this, BoxImage_glsl_1.default, BoxImage_glsl_2.default));
	
	        _this._width = _width;
	        _this._height = _height;
	        _this.a_vertex = new Attribute_1.default(new Float32Array(8), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_vertex', _this.a_vertex);
	        _this.a_uv = new Attribute_1.default(new Float32Array(8), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_uv', _this.a_uv);
	        _this.u_tex = new TextureUniform_1.default(texture);
	        _this.attachUniform('u_tex', _this.u_tex);
	        _this.a_uv.set(0, 0, 0);
	        _this.a_uv.set(1, 0, 1);
	        _this.a_uv.set(2, 1, 0);
	        _this.a_uv.set(3, 1, 1);
	        _this.createVertex();
	        _this.endIndex = 4;
	        _this._drawType = Attribute_1.default.TRIANGLE_STRIP;
	        return _this;
	    }
	
	    _createClass(BoxImage, [{
	        key: 'createVertex',
	        value: function createVertex() {
	            this.a_vertex.set(0, 0, 0);
	            this.a_vertex.set(2, this._width, 0);
	            this.a_vertex.set(1, 0, this._height);
	            this.a_vertex.set(3, this._width, this._height);
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	            this.createVertex();
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	            this.createVertex();
	        }
	    }]);
	
	    return BoxImage;
	}(Drawable_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BoxImage;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_1 = __webpack_require__(4);
	
	var Attribute = function () {
	    function Attribute(buffer, type, dataSize) {
	        _classCallCheck(this, Attribute);
	
	        this.updated = true;
	        this._usage = gl_1.default.STATIC_DRAW;
	        this._normalized = false;
	        this._stride = 0;
	        this._offset = 0;
	        this._type = type;
	        this._buffer = buffer;
	        this.dataSize = dataSize;
	    }
	
	    _createClass(Attribute, [{
	        key: "set",
	        value: function set(index) {
	            for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                data[_key - 1] = arguments[_key];
	            }
	
	            if (data.length > this.dataSize) {
	                throw new Error("This attribute is for " + this.dataSize + "-byte size array");
	            }
	            for (var i = 0; i < data.length; i++) {
	                this._buffer[index * this.dataSize + i] = data[i];
	            }
	            this.updated = true;
	        }
	    }, {
	        key: "get",
	        value: function get(index) {
	            var result = [];
	            for (var i = 0; i < this.dataSize; i++) {
	                result.push(this._buffer[index * this.dataSize + i]);
	            }
	            return result;
	        }
	    }, {
	        key: "replaceWith",
	        value: function replaceWith(buffer) {
	            this._buffer = buffer;
	        }
	    }, {
	        key: "update",
	        value: function update(loc) {
	            if (!this._bufferPointer) {
	                this._bufferPointer = gl_1.default.createBuffer();
	            }
	            gl_1.default.bindBuffer(gl_1.default.ARRAY_BUFFER, this._bufferPointer);
	            gl_1.default.bufferData(gl_1.default.ARRAY_BUFFER, this._buffer, this._usage);
	            gl_1.default.vertexAttribPointer(loc, this.dataSize, this._type, this._normalized, this._stride, this._offset);
	            if (this._indexBuffer) {
	                var buffer = gl_1.default.createBuffer();
	                gl_1.default.bindBuffer(gl_1.default.ELEMENT_ARRAY_BUFFER, buffer);
	                gl_1.default.bufferData(gl_1.default.ELEMENT_ARRAY_BUFFER, this._indexBuffer, this._usage);
	            }
	            this.updated = false;
	        }
	    }, {
	        key: "needsUpdate",
	        get: function get() {
	            return this.updated;
	        }
	    }, {
	        key: "buffer",
	        get: function get() {
	            return this._bufferPointer;
	        }
	    }, {
	        key: "indexBuffer",
	        get: function get() {
	            return this._indexBuffer;
	        },
	        set: function set(indexBuffer) {
	            this._indexBuffer = indexBuffer;
	            this.updated = true;
	        }
	    }]);
	
	    return Attribute;
	}();
	
	Attribute.STATIC_DRAW = gl_1.default.STATIC_DRAW;
	Attribute.DYNAMIC_DRA = gl_1.default.DYNAMIC_DRAW;
	Attribute.STREAM_DRAW = gl_1.default.STREAM_DRAW;
	Attribute.BYTE = gl_1.default.BYTE;
	Attribute.UNSIGNED_BYTE = gl_1.default.UNSIGNED_BYTE;
	Attribute.SHORT = gl_1.default.SHORT;
	Attribute.UNSIGNED_SHORT = gl_1.default.UNSIGNED_SHORT;
	Attribute.FLOAT = gl_1.default.FLOAT;
	Attribute.POINTS = gl_1.default.POINTS;
	Attribute.LINES = gl_1.default.LINES;
	Attribute.LINE_STRIP = gl_1.default.LINE_STRIP;
	Attribute.LINE_LOOP = gl_1.default.LINE_LOOP;
	Attribute.TRIANGLES = gl_1.default.TRIANGLES;
	Attribute.TRIANGLE_STRIP = gl_1.default.TRIANGLE_STRIP;
	Attribute.TRIANGLE_FAN = gl_1.default.TRIANGLE_FAN;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Attribute;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var canvas = document.createElement('canvas');
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	var gl = canvas.getContext('webgl');
	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(0, 0, 0, 0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = gl;
	function mountGl(dom) {
	    dom.appendChild(canvas);
	}
	exports.mountGl = mountGl;
	function setGlSize(width, height) {
	    canvas.width = width || canvas.width;
	    canvas.height = height || canvas.height;
	    gl.viewport(0, 0, canvas.width, canvas.height);
	}
	exports.setGlSize = setGlSize;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_1 = __webpack_require__(4);
	var Constants_1 = __webpack_require__(6);
	var Uniform_1 = __webpack_require__(7);
	var Matrix3_1 = __webpack_require__(9);
	var Vector2_1 = __webpack_require__(20);
	var MatrixUniform_1 = __webpack_require__(21);
	var TextureUniform_1 = __webpack_require__(22);
	var viewport_1 = __webpack_require__(23);
	var scale_1 = __webpack_require__(24);
	var Camera_1 = __webpack_require__(25);
	var guid_1 = __webpack_require__(26);
	var common_glsl_1 = __webpack_require__(27);
	var common_glsl_2 = __webpack_require__(28);
	function pad(str, size) {
	    return ' '.repeat(size).slice(0, size - str.toString().length) + str;
	}
	function createShader(type, source) {
	    var shader = gl_1.default.createShader(type);
	    gl_1.default.shaderSource(shader, source);
	    gl_1.default.compileShader(shader);
	    if (!gl_1.default.getShaderParameter(shader, gl_1.default.COMPILE_STATUS)) {
	        (function () {
	            var size = source.split('\n').length.toString().length;
	            console.warn('\n' + source.split('\n').map(function (line, i) {
	                return pad(i + 1, size) + ': ' + line;
	            }).join('\n'));
	            throw gl_1.default.getShaderInfoLog(shader);
	        })();
	    }
	    return shader;
	}
	function patchFragment(shader) {
	    var regex = /void\s+main\(\s*\)\s*\{\s*/;
	    var regexResult = regex.exec(shader);
	    var index = regexResult.index;
	    var result = shader.substr(0, index);
	    result += '\nvoid main() {\n    if (u_offscreen == 1) {\n        gl_FragColor = vec4(u_id, 1.0);\n        return;\n    }\n    ';
	    result += shader.substr(index + regexResult[0].length);
	    return result;
	}
	
	var Drawable = function () {
	    function Drawable(vertexShaderString, fragmentShaderString) {
	        _classCallCheck(this, Drawable);
	
	        this.attributes = {};
	        this.uniforms = {};
	        this._program = gl_1.default.createProgram();
	        this._drawType = gl_1.default.TRIANGLES;
	        this._startIndex = 0;
	        this._endIndex = 0;
	        this._id = guid_1.getId();
	        this._zIndex = 0;
	        this._name = '';
	        this._drawMethod = Constants_1.default.DrawMethod.ARRAYS;
	        this._elementType = Constants_1.default.ElementType.UNSIGNED_BYTE;
	        this.position = new Vector2_1.default(0, 0);
	        this.scale = new Vector2_1.default(1, 1);
	        this._rotation = 0;
	        this.rotationUpdated = true;
	        this.u_offscreen = new Uniform_1.default(Uniform_1.default.INT, 1);
	        this._viewMatrix = new MatrixUniform_1.default(3);
	        var vertexShader = createShader(gl_1.default.VERTEX_SHADER, common_glsl_1.default + vertexShaderString);
	        var fragmentShader = createShader(gl_1.default.FRAGMENT_SHADER, common_glsl_2.default + patchFragment(fragmentShaderString));
	        gl_1.default.attachShader(this.program, vertexShader);
	        gl_1.default.attachShader(this.program, fragmentShader);
	        gl_1.default.linkProgram(this._program);
	        if (!gl_1.default.getProgramParameter(this.program, gl_1.default.LINK_STATUS)) {
	            throw gl_1.default.getProgramInfoLog(this.program);
	        }
	        this.u_offscreen.set(0);
	        this.attachUniform('viewMatrix', this._viewMatrix);
	        this.attachUniform('u_offscreen', this.u_offscreen);
	        var u_id = new Uniform_1.default(Uniform_1.default.FLOAT, 3);
	        u_id.set((this._id >> 16) / 255, (this._id >> 8 & 0xff) / 255, (this._id & 0xff) / 255);
	        this.attachUniform('u_id', u_id);
	        gl_1.default.deleteShader(vertexShader);
	        gl_1.default.deleteShader(fragmentShader);
	    }
	
	    _createClass(Drawable, [{
	        key: 'updateAttribuets',
	        value: function updateAttribuets() {
	            for (var name in this.attributes) {
	                var _attributes$name = this.attributes[name],
	                    attribute = _attributes$name.attribute,
	                    attached = _attributes$name.attached;
	
	                var loc = gl_1.default.getAttribLocation(this.program, name);
	                if (loc < 0) {
	                    throw new Error('Failed to get attribute location for \'' + name + '\'');
	                }
	                attribute.update(loc);
	                if (!attached) {
	                    gl_1.default.enableVertexAttribArray(loc);
	                    this.attributes[name].attached = true;
	                }
	            }
	        }
	    }, {
	        key: 'updateUniforms',
	        value: function updateUniforms() {
	            var textureCount = 0;
	            for (var name in this.uniforms) {
	                var uniform = this.uniforms[name];
	                var loc = gl_1.default.getUniformLocation(this.program, name);
	                if (loc < 0) {
	                    throw new Error('Failed to get uniform location for \'' + name + '\'');
	                }
	                if (uniform instanceof TextureUniform_1.default) {
	                    uniform.setActiveIndex(textureCount++);
	                }
	                if (uniform instanceof TextureUniform_1.default || uniform.needsUpdate) {
	                    uniform.update(loc);
	                }
	            }
	        }
	    }, {
	        key: 'attachAttribute',
	        value: function attachAttribute(name, attribute) {
	            if (this.attributes[name] && this.attributes[name].attached) {
	                gl_1.default.disableVertexAttribArray(gl_1.default.getAttribLocation(this.program, name));
	            }
	            this.attributes[name] = {
	                attribute: attribute,
	                attached: false
	            };
	        }
	    }, {
	        key: 'detachAttribute',
	        value: function detachAttribute(name) {
	            if (this.attributes[name]) {
	                delete this.attributes[name];
	                gl_1.default.disableVertexAttribArray(gl_1.default.getAttribLocation(this.program, name));
	            }
	        }
	    }, {
	        key: 'attachUniform',
	        value: function attachUniform(name, uniform) {
	            this.uniforms[name] = uniform;
	        }
	    }, {
	        key: 'detachUniform',
	        value: function detachUniform(name) {
	            delete this.uniforms[name];
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            if (this.position.updated || this.rotationUpdated || this.scale.updated || scale_1.default.updated || Camera_1.default.updated) {
	                this.position.updated = false;
	                this.rotationUpdated = false;
	                this.scale.updated = false;
	                var s = Math.sin(this._rotation);
	                var c = Math.cos(this._rotation);
	                this._viewMatrix.replace(viewport_1.default.mul(new Matrix3_1.default(1, 0, 0, 0, 1, 0, Camera_1.default.x, Camera_1.default.y, 1)).mul(new Matrix3_1.default(scale_1.default.x, 0, 0, 0, scale_1.default.y, 0, 0, 0, 1)).mul(new Matrix3_1.default(c, -s, 0, s, c, 0, 0, 0, 1)).mul(new Matrix3_1.default(1, 0, 0, 0, 1, 0, this.position.x, this.position.y, 1)).mul(new Matrix3_1.default(this.scale.x, 0, 0, 0, this.scale.y, 0, 0, 0, 1)).toMat3());
	            }
	            this.updateAttribuets();
	            this.updateUniforms();
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'offscreen',
	        set: function set(offscreen) {
	            this.u_offscreen.set(offscreen ? 1 : 0);
	        }
	    }, {
	        key: 'rotation',
	        get: function get() {
	            return this._rotation;
	        },
	        set: function set(rotation) {
	            this._rotation = rotation;
	            this.rotationUpdated = true;
	        }
	    }, {
	        key: 'zIndex',
	        get: function get() {
	            return this._zIndex;
	        },
	        set: function set(zIndex) {
	            this._zIndex = zIndex;
	        }
	    }, {
	        key: 'program',
	        get: function get() {
	            return this._program;
	        }
	    }, {
	        key: 'drawType',
	        get: function get() {
	            return this._drawType;
	        }
	    }, {
	        key: 'drawMethod',
	        get: function get() {
	            return this._drawMethod;
	        }
	    }, {
	        key: 'elementType',
	        get: function get() {
	            return this._elementType;
	        }
	    }, {
	        key: 'startIndex',
	        get: function get() {
	            return this._startIndex;
	        },
	        set: function set(startIndex) {
	            this._startIndex = startIndex;
	        }
	    }, {
	        key: 'endIndex',
	        get: function get() {
	            return this._endIndex;
	        },
	        set: function set(endIndex) {
	            this._endIndex = endIndex;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        },
	        set: function set(name) {
	            this._name = name;
	        }
	    }]);
	
	    return Drawable;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Drawable;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var gl_1 = __webpack_require__(4);
	var Constants;
	(function (Constants) {
	    (function (AttributeUsage) {
	        AttributeUsage[AttributeUsage["STATIC_DRAW"] = gl_1.default.STATIC_DRAW] = "STATIC_DRAW";
	        AttributeUsage[AttributeUsage["DYNAMIC_DRAW"] = gl_1.default.DYNAMIC_DRAW] = "DYNAMIC_DRAW";
	        AttributeUsage[AttributeUsage["STREAM_DRAW"] = gl_1.default.STREAM_DRAW] = "STREAM_DRAW";
	    })(Constants.AttributeUsage || (Constants.AttributeUsage = {}));
	    var AttributeUsage = Constants.AttributeUsage;
	    (function (AttributeType) {
	        AttributeType[AttributeType["BYTE"] = gl_1.default.BYTE] = "BYTE";
	        AttributeType[AttributeType["UNSIGNED_BYTE"] = gl_1.default.UNSIGNED_BYTE] = "UNSIGNED_BYTE";
	        AttributeType[AttributeType["SHORT"] = gl_1.default.SHORT] = "SHORT";
	        AttributeType[AttributeType["UNSIGNED_SHORT"] = gl_1.default.UNSIGNED_SHORT] = "UNSIGNED_SHORT";
	        AttributeType[AttributeType["FLOAT"] = gl_1.default.FLOAT] = "FLOAT";
	    })(Constants.AttributeType || (Constants.AttributeType = {}));
	    var AttributeType = Constants.AttributeType;
	    (function (DrawType) {
	        DrawType[DrawType["POINTS"] = gl_1.default.POINTS] = "POINTS";
	        DrawType[DrawType["LINES"] = gl_1.default.LINES] = "LINES";
	        DrawType[DrawType["LINE_STRIP"] = gl_1.default.LINE_STRIP] = "LINE_STRIP";
	        DrawType[DrawType["LINE_LOOP"] = gl_1.default.LINE_LOOP] = "LINE_LOOP";
	        DrawType[DrawType["TRIANGLES"] = gl_1.default.TRIANGLES] = "TRIANGLES";
	        DrawType[DrawType["TRIANGLE_STRIP"] = gl_1.default.TRIANGLE_STRIP] = "TRIANGLE_STRIP";
	        DrawType[DrawType["TRIANGLE_FAN"] = gl_1.default.TRIANGLE_FAN] = "TRIANGLE_FAN";
	    })(Constants.DrawType || (Constants.DrawType = {}));
	    var DrawType = Constants.DrawType;
	    (function (DrawMethod) {
	        DrawMethod[DrawMethod["ARRAYS"] = 0] = "ARRAYS";
	        DrawMethod[DrawMethod["ELEMENTS"] = 1] = "ELEMENTS";
	    })(Constants.DrawMethod || (Constants.DrawMethod = {}));
	    var DrawMethod = Constants.DrawMethod;
	    (function (ElementType) {
	        ElementType[ElementType["UNSIGNED_BYTE"] = gl_1.default.UNSIGNED_BYTE] = "UNSIGNED_BYTE";
	        ElementType[ElementType["UNSIGNED_SHORT"] = gl_1.default.UNSIGNED_SHORT] = "UNSIGNED_SHORT";
	    })(Constants.ElementType || (Constants.ElementType = {}));
	    var ElementType = Constants.ElementType;
	    (function (UniformType) {
	        UniformType[UniformType["INT"] = 0] = "INT";
	        UniformType[UniformType["FLOAT"] = 1] = "FLOAT";
	    })(Constants.UniformType || (Constants.UniformType = {}));
	    var UniformType = Constants.UniformType;
	    (function (TextureMagFilter) {
	        TextureMagFilter[TextureMagFilter["LINEAR"] = gl_1.default.LINEAR] = "LINEAR";
	        TextureMagFilter[TextureMagFilter["NEAREST"] = gl_1.default.NEAREST] = "NEAREST";
	    })(Constants.TextureMagFilter || (Constants.TextureMagFilter = {}));
	    var TextureMagFilter = Constants.TextureMagFilter;
	    (function (TextureMinFilter) {
	        TextureMinFilter[TextureMinFilter["LINEAR"] = gl_1.default.LINEAR] = "LINEAR";
	        TextureMinFilter[TextureMinFilter["NEAREST_MIPMAP_NEAREST"] = gl_1.default.NEAREST_MIPMAP_NEAREST] = "NEAREST_MIPMAP_NEAREST";
	        TextureMinFilter[TextureMinFilter["LINEAR_MIPMAP_NEAREST"] = gl_1.default.LINEAR_MIPMAP_NEAREST] = "LINEAR_MIPMAP_NEAREST";
	        TextureMinFilter[TextureMinFilter["NEAREST_MIPMAP_LINEAR"] = gl_1.default.NEAREST_MIPMAP_LINEAR] = "NEAREST_MIPMAP_LINEAR";
	        TextureMinFilter[TextureMinFilter["LINEAR_MIPMAP_LINEAR"] = gl_1.default.LINEAR_MIPMAP_LINEAR] = "LINEAR_MIPMAP_LINEAR";
	    })(Constants.TextureMinFilter || (Constants.TextureMinFilter = {}));
	    var TextureMinFilter = Constants.TextureMinFilter;
	    (function (TextureWrap) {
	        TextureWrap[TextureWrap["REPEAT"] = gl_1.default.REPEAT] = "REPEAT";
	        TextureWrap[TextureWrap["CLAMP_TO_EDGE"] = gl_1.default.CLAMP_TO_EDGE] = "CLAMP_TO_EDGE";
	        TextureWrap[TextureWrap["MIRRORED_REPEAT"] = gl_1.default.MIRRORED_REPEAT] = "MIRRORED_REPEAT";
	    })(Constants.TextureWrap || (Constants.TextureWrap = {}));
	    var TextureWrap = Constants.TextureWrap;
	    (function (TextureFormat) {
	        TextureFormat[TextureFormat["ALPHA"] = gl_1.default.ALPHA] = "ALPHA";
	        TextureFormat[TextureFormat["RGB"] = gl_1.default.RGB] = "RGB";
	        TextureFormat[TextureFormat["RGBA"] = gl_1.default.RGBA] = "RGBA";
	        TextureFormat[TextureFormat["LUMINANCE"] = gl_1.default.LUMINANCE] = "LUMINANCE";
	        TextureFormat[TextureFormat["LUMINANCE_ALPHA"] = gl_1.default.LUMINANCE_ALPHA] = "LUMINANCE_ALPHA";
	    })(Constants.TextureFormat || (Constants.TextureFormat = {}));
	    var TextureFormat = Constants.TextureFormat;
	    (function (TextureTexelFormat) {
	        TextureTexelFormat[TextureTexelFormat["UNSIGNED_BYTE"] = gl_1.default.UNSIGNED_BYTE] = "UNSIGNED_BYTE";
	        TextureTexelFormat[TextureTexelFormat["UNSIGNED_SHORT_5_6_5"] = gl_1.default.UNSIGNED_SHORT_5_6_5] = "UNSIGNED_SHORT_5_6_5";
	        TextureTexelFormat[TextureTexelFormat["UNSIGNED_SHORT_4_4_4_4"] = gl_1.default.UNSIGNED_SHORT_4_4_4_4] = "UNSIGNED_SHORT_4_4_4_4";
	        TextureTexelFormat[TextureTexelFormat["UNSIGNED_SHORT_5_5_5_1"] = gl_1.default.UNSIGNED_SHORT_5_5_5_1] = "UNSIGNED_SHORT_5_5_5_1";
	    })(Constants.TextureTexelFormat || (Constants.TextureTexelFormat = {}));
	    var TextureTexelFormat = Constants.TextureTexelFormat;
	})(Constants || (Constants = {}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Constants;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gl_1 = __webpack_require__(4);
	var AbstractUniform_1 = __webpack_require__(8);
	var Constants_1 = __webpack_require__(6);
	
	var Uniform = function (_AbstractUniform_1$de) {
	    _inherits(Uniform, _AbstractUniform_1$de);
	
	    function Uniform(type, size) {
	        _classCallCheck(this, Uniform);
	
	        var _this = _possibleConstructorReturn(this, (Uniform.__proto__ || Object.getPrototypeOf(Uniform)).call(this));
	
	        _this.buffer = [];
	        _this.type = type;
	        _this.size = size;
	        return _this;
	    }
	
	    _createClass(Uniform, [{
	        key: '_update',
	        value: function _update(loc) {
	            var _gl_1$default;
	
	            var type = this.type === Constants_1.default.UniformType.INT ? 'i' : 'f';
	            (_gl_1$default = gl_1.default)['uniform' + this.size + type].apply(_gl_1$default, [loc].concat(_toConsumableArray(this.buffer)));
	        }
	    }, {
	        key: 'set',
	        value: function set() {
	            for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
	                data[_key] = arguments[_key];
	            }
	
	            if (data.length > this.size) {
	                throw new Error('This attribute is for ' + this.size + '-number sized uniform');
	            }
	            for (var i = 0; i < data.length; i++) {
	                this.buffer[i] = data[i];
	            }
	            this.updated = true;
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            return this.buffer;
	        }
	    }]);
	
	    return Uniform;
	}(AbstractUniform_1.default);
	
	Uniform.INT = Constants_1.default.UniformType.INT;
	Uniform.FLOAT = Constants_1.default.UniformType.FLOAT;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Uniform;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractUniform = function () {
	    function AbstractUniform() {
	        _classCallCheck(this, AbstractUniform);
	
	        this.updated = true;
	    }
	
	    _createClass(AbstractUniform, [{
	        key: "update",
	        value: function update(loc) {
	            this._update(loc);
	            this.updated = false;
	        }
	    }, {
	        key: "needsUpdate",
	        get: function get() {
	            return this.updated;
	        }
	    }]);
	
	    return AbstractUniform;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AbstractUniform;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_matrix_1 = __webpack_require__(10);
	
	var Matrix3 = function () {
	    function Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	        _classCallCheck(this, Matrix3);
	
	        this._updated = true;
	        if (m00 instanceof Float32Array) {
	            this.instance = m00;
	        } else {
	            this.instance = gl_matrix_1.mat3.fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22);
	        }
	    }
	
	    _createClass(Matrix3, [{
	        key: "mul",
	        value: function mul(mat) {
	            return new Matrix3(gl_matrix_1.mat3.multiply(gl_matrix_1.mat3.create(), this.instance, mat.instance));
	        }
	    }, {
	        key: "get",
	        value: function get(index) {
	            return this.instance[index];
	        }
	    }, {
	        key: "set",
	        value: function set(index, value) {
	            this.instance[index] = value;
	            this._updated = true;
	        }
	    }, {
	        key: "toMat3",
	        value: function toMat3() {
	            var m = this.instance;
	            /*
	            return new Float32Array([
	                m[0], m[1], m[2],
	                m[3], m[4], m[5],
	                m[6], m[7], m[8]
	            ]);
	            */
	            return new Float32Array([m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]]);
	        }
	    }, {
	        key: "updated",
	        get: function get() {
	            return this._updated;
	        },
	        set: function set(updated) {
	            this._updated = updated;
	        }
	    }, {
	        key: "raw",
	        get: function get() {
	            return this.instance;
	        }
	    }]);
	
	    return Matrix3;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Matrix3;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview gl-matrix - High performance matrix and vector operations
	 * @author Brandon Jones
	 * @author Colin MacKenzie IV
	 * @version 2.3.2
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	// END HEADER
	
	exports.glMatrix = __webpack_require__(11);
	exports.mat2 = __webpack_require__(12);
	exports.mat2d = __webpack_require__(13);
	exports.mat3 = __webpack_require__(14);
	exports.mat4 = __webpack_require__(15);
	exports.quat = __webpack_require__(16);
	exports.vec2 = __webpack_require__(19);
	exports.vec3 = __webpack_require__(17);
	exports.vec4 = __webpack_require__(18);

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Configuration Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	glMatrix.ENABLE_SIMD = false;
	
	// Capability detection
	glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
	glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function(type) {
	    glMatrix.ARRAY_TYPE = type;
	}
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function(a){
	     return a * degree;
	}
	
	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 * 
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	glMatrix.equals = function(a, b) {
		return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
	}
	
	module.exports = glMatrix;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 2x2 Matrix
	 * @name mat2
	 */
	var mat2 = {};
	
	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	mat2.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Create a new mat2 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out A new 2x2 matrix
	 */
	mat2.fromValues = function(m00, m01, m10, m11) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	/**
	 * Set the components of a mat2 to the given values
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out
	 */
	mat2.set = function(out, m00, m01, m10, m11) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	
	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a1 = a[1];
	        out[1] = a[2];
	        out[2] = a1;
	    } else {
	        out[0] = a[0];
	        out[1] = a[2];
	        out[2] = a[1];
	        out[3] = a[3];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	
	        // Calculate the determinant
	        det = a0 * a3 - a2 * a1;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	    
	    out[0] =  a3 * det;
	    out[1] = -a1 * det;
	    out[2] = -a2 * det;
	    out[3] =  a0 * det;
	
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.adjoint = function(out, a) {
	    // Caching this value is nessecary if out == a
	    var a0 = a[0];
	    out[0] =  a[3];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] =  a0;
	
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2.determinant = function (a) {
	    return a[0] * a[3] - a[2] * a[1];
	};
	
	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	mat2.mul = mat2.multiply;
	
	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    return out;
	};
	
	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	mat2.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.fromRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	mat2.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2.str = function (a) {
	    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
	};
	
	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix 
	 * @param {mat2} D the diagonal matrix 
	 * @param {mat2} U the upper triangular matrix 
	 * @param {mat2} a the input matrix to factorize
	 */
	
	mat2.LDU = function (L, D, U, a) { 
	    L[2] = a[2]/a[0]; 
	    U[0] = a[0]; 
	    U[1] = a[1]; 
	    U[3] = a[3] - L[2] * U[1]; 
	    return [L, D, U];       
	}; 
	
	/**
	 * Adds two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.subtract}
	 * @function
	 */
	mat2.sub = mat2.subtract;
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2} out
	 */
	mat2.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2} out the receiving vector
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2} out
	 */
	mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	module.exports = mat2;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 2x3 Matrix
	 * @name mat2d
	 * 
	 * @description 
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */
	var mat2d = {};
	
	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	mat2d.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Create a new mat2d with the given values
	 *
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} A new mat2d
	 */
	mat2d.fromValues = function(a, b, c, d, tx, ty) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Set the components of a mat2d to the given values
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} out
	 */
	mat2d.set = function(out, a, b, c, d, tx, ty) {
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.invert = function(out, a) {
	    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
	        atx = a[4], aty = a[5];
	
	    var det = aa * ad - ab * ac;
	    if(!det){
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = ad * det;
	    out[1] = -ab * det;
	    out[2] = -ac * det;
	    out[3] = aa * det;
	    out[4] = (ac * aty - ad * atx) * det;
	    out[5] = (ab * atx - aa * aty) * det;
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2d.determinant = function (a) {
	    return a[0] * a[3] - a[1] * a[2];
	};
	
	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    out[4] = a0 * b4 + a2 * b5 + a4;
	    out[5] = a1 * b4 + a3 * b5 + a5;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	mat2d.mul = mat2d.multiply;
	
	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.translate = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;
	    out[4] = a0 * v0 + a2 * v1 + a4;
	    out[5] = a1 * v0 + a3 * v1 + a5;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	mat2d.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	mat2d.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = v[0];
	    out[5] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2d.str = function (a) {
	    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2d.frob = function (a) { 
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
	}; 
	
	/**
	 * Adds two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.subtract}
	 * @function
	 */
	mat2d.sub = mat2d.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2d} out the receiving vector
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
	};
	
	module.exports = mat2d;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};
	
	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};
	
	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,
	
	        // Calculate the determinant
	        det = a00 * b01 + a01 * b11 + a02 * b21;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    out[0] = (a11 * a22 - a12 * a21);
	    out[1] = (a02 * a21 - a01 * a22);
	    out[2] = (a01 * a12 - a02 * a11);
	    out[3] = (a12 * a20 - a10 * a22);
	    out[4] = (a00 * a22 - a02 * a20);
	    out[5] = (a02 * a10 - a00 * a12);
	    out[6] = (a10 * a21 - a11 * a20);
	    out[7] = (a01 * a20 - a00 * a21);
	    out[8] = (a00 * a11 - a01 * a10);
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};
	
	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b00 = b[0], b01 = b[1], b02 = b[2],
	        b10 = b[3], b11 = b[4], b12 = b[5],
	        b20 = b[6], b21 = b[7], b22 = b[8];
	
	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	
	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	
	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;
	
	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function(out, a, v) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	        x = v[0], y = v[1];
	
	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;
	
	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;
	
	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};
	
	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;
	
	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;
	
	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};
	
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function(out, a, v) {
	    var x = v[0], y = v[1];
	
	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];
	
	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];
	
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	
	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	
	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;
	
	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;
	
	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};
	
	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;
	
	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;
	
	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;
	
	    return out;
	};
	
	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	
	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	
	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
	                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
	};
	
	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	mat3.sub = mat3.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	mat3.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    return out;
	};
	
	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    return out;
	};
	
	/*
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
	           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
	           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
	};
	
	
	module.exports = mat3;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {
	  scalar: {},
	  SIMD: {},
	};
	
	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a03 = a[3],
	            a12 = a[6], a13 = a[7],
	            a23 = a[11];
	
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.transpose = function(out, a) {
	    var a0, a1, a2, a3,
	        tmp01, tmp23,
	        out0, out1, out2, out3;
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    a1 = SIMD.Float32x4.load(a, 4);
	    a2 = SIMD.Float32x4.load(a, 8);
	    a3 = SIMD.Float32x4.load(a, 12);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 0,  out0);
	    SIMD.Float32x4.store(out, 4,  out1);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 8,  out2);
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Transpse a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;
	
	/**
	 * Inverts a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Inverts a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.invert = function(out, a) {
	  var row0, row1, row2, row3,
	      tmp1,
	      minor0, minor1, minor2, minor3,
	      det,
	      a0 = SIMD.Float32x4.load(a, 0),
	      a1 = SIMD.Float32x4.load(a, 4),
	      a2 = SIMD.Float32x4.load(a, 8),
	      a3 = SIMD.Float32x4.load(a, 12);
	
	  // Compute matrix adjugate
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  // Compute matrix determinant
	  det   = SIMD.Float32x4.mul(row0, minor0);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
	  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
	  det   = SIMD.Float32x4.sub(
	               SIMD.Float32x4.add(tmp1, tmp1),
	               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
	  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
	  if (!det) {
	      return null;
	  }
	
	  // Compute matrix inverse
	  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
	  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
	  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
	  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
	  return out;
	}
	
	/**
	 * Inverts a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;
	
	/**
	 * Calculates the adjugate of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
	    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
	    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
	    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
	    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
	    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.adjoint = function(out, a) {
	  var a0, a1, a2, a3;
	  var row0, row1, row2, row3;
	  var tmp1;
	  var minor0, minor1, minor2, minor3;
	
	  var a0 = SIMD.Float32x4.load(a, 0);
	  var a1 = SIMD.Float32x4.load(a, 4);
	  var a2 = SIMD.Float32x4.load(a, 8);
	  var a3 = SIMD.Float32x4.load(a, 12);
	
	  // Transpose the source matrix.  Sort of.  Not a true transpose operation
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  SIMD.Float32x4.store(out, 0,  minor0);
	  SIMD.Float32x4.store(out, 4,  minor1);
	  SIMD.Float32x4.store(out, 8,  minor2);
	  SIMD.Float32x4.store(out, 12, minor3);
	  return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;
	
	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;
	
	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};
	
	/**
	 * Multiplies two mat4's explicitly using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand, must be a Float32Array
	 * @param {mat4} b the second operand, must be a Float32Array
	 * @returns {mat4} out
	 */
	mat4.SIMD.multiply = function (out, a, b) {
	    var a0 = SIMD.Float32x4.load(a, 0);
	    var a1 = SIMD.Float32x4.load(a, 4);
	    var a2 = SIMD.Float32x4.load(a, 8);
	    var a3 = SIMD.Float32x4.load(a, 12);
	
	    var b0 = SIMD.Float32x4.load(b, 0);
	    var out0 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 0, out0);
	
	    var b1 = SIMD.Float32x4.load(b, 4);
	    var out1 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 4, out1);
	
	    var b2 = SIMD.Float32x4.load(b, 8);
	    var out2 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 8, out2);
	
	    var b3 = SIMD.Float32x4.load(b, 12);
	    var out3 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
	                        SIMD.Float32x4.add(
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Multiplies two mat4's explicitly not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.scalar.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    // Cache only the current line of the second matrix
	    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
	    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
	    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
	    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	    return out;
	};
	
	/**
	 * Multiplies two mat4's using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;
	
	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;
	
	/**
	 * Translate a mat4 by the given vector not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.scalar.translate = function (out, a, v) {
	    var x = v[0], y = v[1], z = v[2],
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23;
	
	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
	        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
	        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
	
	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.SIMD.translate = function (out, a, v) {
	    var a0 = SIMD.Float32x4.load(a, 0),
	        a1 = SIMD.Float32x4.load(a, 4),
	        a2 = SIMD.Float32x4.load(a, 8),
	        a3 = SIMD.Float32x4.load(a, 12),
	        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);
	
	    if (a !== out) {
	        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
	        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
	        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
	    }
	
	    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
	    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
	    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));
	
	    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
	    SIMD.Float32x4.store(out, 12, t0);
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scalar.scale = function(out, a, v) {
	    var x = v[0], y = v[1], z = v[2];
	
	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.SIMD.scale = function(out, a, v) {
	    var a0, a1, a2;
	    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    SIMD.Float32x4.store(
	        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));
	
	    a1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(
	        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));
	
	    a2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(
	        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));
	
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 */
	mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;
	
	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t,
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23,
	        b00, b01, b02,
	        b10, b11, b12,
	        b20, b21, b22;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[0]  = a[0];
	        out[1]  = a[1];
	        out[2]  = a[2];
	        out[3]  = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateX = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	      out[0]  = a[0];
	      out[1]  = a[1];
	      out[2]  = a[2];
	      out[3]  = a[3];
	      out[12] = a[12];
	      out[13] = a[13];
	      out[14] = a[14];
	      out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;
	
	/**
	 * Rotates a matrix by the given angle around the Y axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateY = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;
	
	/**
	 * Rotates a matrix by the given angle around the Z axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateZ = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function(out, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = 1;
	    out[1]  = 0;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = 0;
	    out[2]  = -s;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = s;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	mat4.getTranslation = function (out, mat) {
	  out[0] = mat[12];
	  out[1] = mat[13];
	  out[2] = mat[14];
	
	  return out;
	};
	
	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	mat4.getRotation = function (out, mat) {
	  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	  var trace = mat[0] + mat[5] + mat[10];
	  var S = 0;
	
	  if (trace > 0) { 
	    S = Math.sqrt(trace + 1.0) * 2;
	    out[3] = 0.25 * S;
	    out[0] = (mat[6] - mat[9]) / S;
	    out[1] = (mat[8] - mat[2]) / S; 
	    out[2] = (mat[1] - mat[4]) / S; 
	  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
	    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	    out[3] = (mat[6] - mat[9]) / S;
	    out[0] = 0.25 * S;
	    out[1] = (mat[1] + mat[4]) / S; 
	    out[2] = (mat[8] + mat[2]) / S; 
	  } else if (mat[5] > mat[10]) { 
	    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	    out[3] = (mat[8] - mat[2]) / S;
	    out[0] = (mat[1] + mat[4]) / S; 
	    out[1] = 0.25 * S;
	    out[2] = (mat[6] + mat[9]) / S; 
	  } else { 
	    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	    out[3] = (mat[1] - mat[4]) / S;
	    out[0] = (mat[8] + mat[2]) / S;
	    out[1] = (mat[6] + mat[9]) / S;
	    out[2] = 0.25 * S;
	  }
	
	  return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0], y = q[1], z = q[2], w = q[3],
	      x2 = x + x,
	      y2 = y + y,
	      z2 = z + z,
	
	      xx = x * x2,
	      xy = x * y2,
	      xz = x * z2,
	      yy = y * y2,
	      yz = y * z2,
	      zz = z * z2,
	      wx = w * x2,
	      wy = w * y2,
	      wz = w * z2,
	
	      sx = s[0],
	      sy = s[1],
	      sz = s[2],
	
	      ox = o[0],
	      oy = o[1],
	      oz = o[2];
	
	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	  out[15] = 1;
	
	  return out;
	};
	
	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	mat4.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;
	
	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;
	
	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = (near * 2) * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = (near * 2) * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (far * near * 2) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (2 * far * near) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);
	
	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = ((upTan - downTan) * yScale * 0.5);
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = (far * near) / (near - far);
	    out[15] = 0.0;
	    return out;
	}
	
	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
	        Math.abs(eyey - centery) < glMatrix.EPSILON &&
	        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
	                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
	                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
	                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
	};
	
	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    out[9] = a[9] + b[9];
	    out[10] = a[10] + b[10];
	    out[11] = a[11] + b[11];
	    out[12] = a[12] + b[12];
	    out[13] = a[13] + b[13];
	    out[14] = a[14] + b[14];
	    out[15] = a[15] + b[15];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    out[9] = a[9] - b[9];
	    out[10] = a[10] - b[10];
	    out[11] = a[11] - b[11];
	    out[12] = a[12] - b[12];
	    out[13] = a[13] - b[13];
	    out[14] = a[14] - b[14];
	    out[15] = a[15] - b[15];
	    return out;
	};
	
	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	mat4.sub = mat4.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	mat4.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    out[9] = a[9] * b;
	    out[10] = a[10] * b;
	    out[11] = a[11] * b;
	    out[12] = a[12] * b;
	    out[13] = a[13] * b;
	    out[14] = a[14] * b;
	    out[15] = a[15] * b;
	    return out;
	};
	
	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    out[9] = a[9] + (b[9] * scale);
	    out[10] = a[10] + (b[10] * scale);
	    out[11] = a[11] + (b[11] * scale);
	    out[12] = a[12] + (b[12] * scale);
	    out[13] = a[13] + (b[13] * scale);
	    out[14] = a[14] + (b[14] * scale);
	    out[15] = a[15] + (b[15] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
	           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
	           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
	           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.equals = function (a, b) {
	    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
	        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
	        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
	        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
	
	    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
	        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
	        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
	        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
	
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
	            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
	            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
	            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
	            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
	            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
	            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
	            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
	};
	
	
	
	module.exports = mat4;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	var mat3 = __webpack_require__(14);
	var vec3 = __webpack_require__(17);
	var vec4 = __webpack_require__(18);
	
	/**
	 * @class Quaternion
	 * @name quat
	 */
	var quat = {};
	
	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	quat.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	quat.rotationTo = (function() {
	    var tmpvec3 = vec3.create();
	    var xUnitVec3 = vec3.fromValues(1,0,0);
	    var yUnitVec3 = vec3.fromValues(0,1,0);
	
	    return function(out, a, b) {
	        var dot = vec3.dot(a, b);
	        if (dot < -0.999999) {
	            vec3.cross(tmpvec3, xUnitVec3, a);
	            if (vec3.length(tmpvec3) < 0.000001)
	                vec3.cross(tmpvec3, yUnitVec3, a);
	            vec3.normalize(tmpvec3, tmpvec3);
	            quat.setAxisAngle(out, tmpvec3, Math.PI);
	            return out;
	        } else if (dot > 0.999999) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        } else {
	            vec3.cross(tmpvec3, a, b);
	            out[0] = tmpvec3[0];
	            out[1] = tmpvec3[1];
	            out[2] = tmpvec3[2];
	            out[3] = 1 + dot;
	            return quat.normalize(out, out);
	        }
	    };
	})();
	
	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	quat.setAxes = (function() {
	    var matr = mat3.create();
	
	    return function(out, view, right, up) {
	        matr[0] = right[0];
	        matr[3] = right[1];
	        matr[6] = right[2];
	
	        matr[1] = up[0];
	        matr[4] = up[1];
	        matr[7] = up[2];
	
	        matr[2] = -view[0];
	        matr[5] = -view[1];
	        matr[8] = -view[2];
	
	        return quat.normalize(out, quat.fromMat3(out, matr));
	    };
	})();
	
	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.clone = vec4.clone;
	
	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.fromValues = vec4.fromValues;
	
	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	quat.copy = vec4.copy;
	
	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	quat.set = vec4.set;
	
	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	quat.identity = function(out) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	quat.setAxisAngle = function(out, axis, rad) {
	    rad = rad * 0.5;
	    var s = Math.sin(rad);
	    out[0] = s * axis[0];
	    out[1] = s * axis[1];
	    out[2] = s * axis[2];
	    out[3] = Math.cos(rad);
	    return out;
	};
	
	/**
	 * Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setAxisAngle, this method will return the same
	 *  values as providied in the original parameter list
	 *  OR functionally equivalent values.
	 * Example: The quaternion formed by axis [0, 0, 1] and
	 *  angle -90 is the same as the quaternion formed by
	 *  [0, 0, 1] and 270. This method favors the latter.
	 * @param  {vec3} out_axis  Vector receiving the axis of rotation
	 * @param  {quat} q     Quaternion to be decomposed
	 * @return {Number}     Angle, in radians, of the rotation
	 */
	quat.getAxisAngle = function(out_axis, q) {
	    var rad = Math.acos(q[3]) * 2.0;
	    var s = Math.sin(rad / 2.0);
	    if (s != 0.0) {
	        out_axis[0] = q[0] / s;
	        out_axis[1] = q[1] / s;
	        out_axis[2] = q[2] / s;
	    } else {
	        // If s is zero, return any axis (no rotation - axis does not matter)
	        out_axis[0] = 1;
	        out_axis[1] = 0;
	        out_axis[2] = 0;
	    }
	    return rad;
	};
	
	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	quat.add = vec4.add;
	
	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	quat.multiply = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    out[0] = ax * bw + aw * bx + ay * bz - az * by;
	    out[1] = ay * bw + aw * by + az * bx - ax * bz;
	    out[2] = az * bw + aw * bz + ax * by - ay * bx;
	    out[3] = aw * bw - ax * bx - ay * by - az * bz;
	    return out;
	};
	
	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	quat.mul = quat.multiply;
	
	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	quat.scale = vec4.scale;
	
	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateX = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + aw * bx;
	    out[1] = ay * bw + az * bx;
	    out[2] = az * bw - ay * bx;
	    out[3] = aw * bw - ax * bx;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateY = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        by = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw - az * by;
	    out[1] = ay * bw + aw * by;
	    out[2] = az * bw + ax * by;
	    out[3] = aw * bw - ay * by;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateZ = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bz = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + ay * bz;
	    out[1] = ay * bw - ax * bz;
	    out[2] = az * bw + aw * bz;
	    out[3] = aw * bw - az * bz;
	    return out;
	};
	
	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	quat.calculateW = function (out, a) {
	    var x = a[0], y = a[1], z = a[2];
	
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	    return out;
	};
	
	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	quat.dot = vec4.dot;
	
	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	quat.lerp = vec4.lerp;
	
	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 */
	quat.slerp = function (out, a, b, t) {
	    // benchmarks:
	    //    http://jsperf.com/quaternion-slerp-implementations
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    var        omega, cosom, sinom, scale0, scale1;
	
	    // calc cosine
	    cosom = ax * bx + ay * by + az * bz + aw * bw;
	    // adjust signs (if necessary)
	    if ( cosom < 0.0 ) {
	        cosom = -cosom;
	        bx = - bx;
	        by = - by;
	        bz = - bz;
	        bw = - bw;
	    }
	    // calculate coefficients
	    if ( (1.0 - cosom) > 0.000001 ) {
	        // standard case (slerp)
	        omega  = Math.acos(cosom);
	        sinom  = Math.sin(omega);
	        scale0 = Math.sin((1.0 - t) * omega) / sinom;
	        scale1 = Math.sin(t * omega) / sinom;
	    } else {        
	        // "from" and "to" quaternions are very close 
	        //  ... so we can do a linear interpolation
	        scale0 = 1.0 - t;
	        scale1 = t;
	    }
	    // calculate final values
	    out[0] = scale0 * ax + scale1 * bx;
	    out[1] = scale0 * ay + scale1 * by;
	    out[2] = scale0 * az + scale1 * bz;
	    out[3] = scale0 * aw + scale1 * bw;
	    
	    return out;
	};
	
	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount
	 * @returns {quat} out
	 */
	quat.sqlerp = (function () {
	  var temp1 = quat.create();
	  var temp2 = quat.create();
	  
	  return function (out, a, b, c, d, t) {
	    quat.slerp(temp1, a, d, t);
	    quat.slerp(temp2, b, c, t);
	    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
	    
	    return out;
	  };
	}());
	
	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	quat.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
	        invDot = dot ? 1.0/dot : 0;
	    
	    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	
	    out[0] = -a0*invDot;
	    out[1] = -a1*invDot;
	    out[2] = -a2*invDot;
	    out[3] = a3*invDot;
	    return out;
	};
	
	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	quat.conjugate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	quat.length = vec4.length;
	
	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	quat.len = quat.length;
	
	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	quat.squaredLength = vec4.squaredLength;
	
	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	quat.sqrLen = quat.squaredLength;
	
	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	quat.normalize = vec4.normalize;
	
	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	quat.fromMat3 = function(out, m) {
	    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	    // article "Quaternion Calculus and Fast Animation".
	    var fTrace = m[0] + m[4] + m[8];
	    var fRoot;
	
	    if ( fTrace > 0.0 ) {
	        // |w| > 1/2, may as well choose w > 1/2
	        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
	        out[3] = 0.5 * fRoot;
	        fRoot = 0.5/fRoot;  // 1/(4w)
	        out[0] = (m[5]-m[7])*fRoot;
	        out[1] = (m[6]-m[2])*fRoot;
	        out[2] = (m[1]-m[3])*fRoot;
	    } else {
	        // |w| <= 1/2
	        var i = 0;
	        if ( m[4] > m[0] )
	          i = 1;
	        if ( m[8] > m[i*3+i] )
	          i = 2;
	        var j = (i+1)%3;
	        var k = (i+2)%3;
	        
	        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
	        out[i] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot;
	        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
	        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
	        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
	    }
	    
	    return out;
	};
	
	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	quat.str = function (a) {
	    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat} a The first quaternion.
	 * @param {quat} b The second quaternion.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.exactEquals = vec4.exactEquals;
	
	/**
	 * Returns whether or not the quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat} a The first vector.
	 * @param {quat} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.equals = vec4.equals;
	
	module.exports = quat;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 3 Dimensional Vector
	 * @name vec3
	 */
	var vec3 = {};
	
	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	vec3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	vec3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	vec3.fromValues = function(x, y, z) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	vec3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	vec3.set = function(out, x, y, z) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	vec3.sub = vec3.subtract;
	
	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	vec3.mul = vec3.multiply;
	
	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	vec3.div = vec3.divide;
	
	/**
	 * Math.ceil the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to ceil
	 * @returns {vec3} out
	 */
	vec3.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to floor
	 * @returns {vec3} out
	 */
	vec3.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to round
	 * @returns {vec3} out
	 */
	vec3.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    return out;
	};
	
	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	vec3.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    return out;
	};
	
	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	vec3.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec3.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	vec3.dist = vec3.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec3.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	vec3.sqrDist = vec3.squaredDistance;
	
	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec3.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	vec3.len = vec3.length;
	
	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec3.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	vec3.sqrLen = vec3.squaredLength;
	
	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	vec3.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	vec3.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	};
	
	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	vec3.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    var len = x*x + y*y + z*z;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	        out[2] = a[2] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec3.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	};
	
	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.cross = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2],
	        bx = b[0], by = b[1], bz = b[2];
	
	    out[0] = ay * bz - az * by;
	    out[1] = az * bx - ax * bz;
	    out[2] = ax * by - ay * bx;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    return out;
	};
	
	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.hermite = function (out, a, b, c, d, t) {
	  var factorTimes2 = t * t,
	      factor1 = factorTimes2 * (2 * t - 3) + 1,
	      factor2 = factorTimes2 * (t - 2) + t,
	      factor3 = factorTimes2 * (t - 1),
	      factor4 = factorTimes2 * (3 - 2 * t);
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.bezier = function (out, a, b, c, d, t) {
	  var inverseFactor = 1 - t,
	      inverseFactorTimesTwo = inverseFactor * inverseFactor,
	      factorTimes2 = t * t,
	      factor1 = inverseFactorTimesTwo * inverseFactor,
	      factor2 = 3 * t * inverseFactorTimesTwo,
	      factor3 = 3 * factorTimes2 * inverseFactor,
	      factor4 = factorTimes2 * t;
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	vec3.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
	    var zScale = Math.sqrt(1.0-z*z) * scale;
	
	    out[0] = Math.cos(r) * zScale;
	    out[1] = Math.sin(r) * zScale;
	    out[2] = z * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2],
	        w = m[3] * x + m[7] * y + m[11] * z + m[15];
	    w = w || 1.0;
	    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat3 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2];
	    out[0] = x * m[0] + y * m[3] + z * m[6];
	    out[1] = x * m[1] + y * m[4] + z * m[7];
	    out[2] = x * m[2] + y * m[5] + z * m[8];
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a quat
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	vec3.transformQuat = function(out, a, q) {
	    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
	
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    return out;
	};
	
	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateX = function(out, a, b, c){
	   var p = [], r=[];
		  //Translate point to the origin
		  p[0] = a[0] - b[0];
		  p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	
		  //perform rotation
		  r[0] = p[0];
		  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
		  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);
	
		  //translate to correct position
		  out[0] = r[0] + b[0];
		  out[1] = r[1] + b[1];
		  out[2] = r[2] + b[2];
	
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateY = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
	  	r[1] = p[1];
	  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateZ = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
	  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
	  	r[2] = p[2];
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec3.forEach = (function() {
	    var vec = vec3.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 3;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	vec3.angle = function(a, b) {
	   
	    var tempA = vec3.fromValues(a[0], a[1], a[2]);
	    var tempB = vec3.fromValues(b[0], b[1], b[2]);
	 
	    vec3.normalize(tempA, tempA);
	    vec3.normalize(tempB, tempB);
	 
	    var cosine = vec3.dot(tempA, tempB);
	
	    if(cosine > 1.0){
	        return 0;
	    } else {
	        return Math.acos(cosine);
	    }     
	};
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec3.str = function (a) {
	    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2];
	    var b0 = b[0], b1 = b[1], b2 = b[2];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
	};
	
	module.exports = vec3;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 4 Dimensional Vector
	 * @name vec4
	 */
	var vec4 = {};
	
	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	vec4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	vec4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	vec4.fromValues = function(x, y, z, w) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	vec4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	vec4.set = function(out, x, y, z, w) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	vec4.sub = vec4.subtract;
	
	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    out[3] = a[3] * b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	vec4.mul = vec4.multiply;
	
	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    out[3] = a[3] / b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	vec4.div = vec4.divide;
	
	/**
	 * Math.ceil the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to ceil
	 * @returns {vec4} out
	 */
	vec4.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    out[3] = Math.ceil(a[3]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to floor
	 * @returns {vec4} out
	 */
	vec4.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    out[3] = Math.floor(a[3]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    out[3] = Math.min(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    out[3] = Math.max(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to round
	 * @returns {vec4} out
	 */
	vec4.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    out[3] = Math.round(a[3]);
	    return out;
	};
	
	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	vec4.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	vec4.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec4.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	vec4.dist = vec4.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec4.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	vec4.sqrDist = vec4.squaredDistance;
	
	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec4.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	vec4.len = vec4.length;
	
	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec4.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	vec4.sqrLen = vec4.squaredLength;
	
	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	vec4.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = -a[3];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	vec4.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	};
	
	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	vec4.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    var len = x*x + y*y + z*z + w*w;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = x * len;
	        out[1] = y * len;
	        out[2] = z * len;
	        out[3] = w * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec4.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	};
	
	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec4} out
	 */
	vec4.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    out[3] = aw + t * (b[3] - aw);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	vec4.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    //TODO: This is a pretty awful way of doing this. Find something better.
	    out[0] = glMatrix.RANDOM();
	    out[1] = glMatrix.RANDOM();
	    out[2] = glMatrix.RANDOM();
	    out[3] = glMatrix.RANDOM();
	    vec4.normalize(out, out);
	    vec4.scale(out, out, scale);
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	vec4.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2], w = a[3];
	    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	vec4.transformQuat = function(out, a, q) {
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec4.forEach = (function() {
	    var vec = vec4.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 4;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec4.str = function (a) {
	    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	module.exports = vec4;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(11);
	
	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};
	
	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function(x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function(out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;
	
	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;
	
	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;
	
	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	vec2.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	vec2.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	vec2.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    return out;
	};
	
	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};
	
	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;
	
	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;
	
	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;
	
	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	};
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x*x + y*y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};
	
	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function(out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function(out, a, m) {
	    var x = a[0], 
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = (function() {
	    var vec = vec2.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 2;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};
	
	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1];
	    var b0 = b[0], b1 = b[1];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
	};
	
	module.exports = vec2;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_matrix_1 = __webpack_require__(10);
	
	var Vector2 = function () {
	    function Vector2(x, y) {
	        _classCallCheck(this, Vector2);
	
	        this._updated = true;
	        if (x instanceof Float32Array) {
	            this.instance = x;
	        } else {
	            this.instance = gl_matrix_1.vec2.fromValues(x, y === undefined ? x : y);
	        }
	    }
	
	    _createClass(Vector2, [{
	        key: "add",
	        value: function add(vec) {
	            return new Vector2(gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this.instance, vec.instance));
	        }
	    }, {
	        key: "sub",
	        value: function sub(vec) {
	            return new Vector2(gl_matrix_1.vec2.sub(gl_matrix_1.vec2.create(), this.instance, vec.instance));
	        }
	    }, {
	        key: "div",
	        value: function div(vec) {
	            return new Vector2(gl_matrix_1.vec2.div(gl_matrix_1.vec2.create(), this.instance, vec.instance));
	        }
	    }, {
	        key: "mul",
	        value: function mul(vec) {
	            return new Vector2(gl_matrix_1.vec2.mul(gl_matrix_1.vec2.create(), this.instance, vec.instance));
	        }
	    }, {
	        key: "dist",
	        value: function dist(vec) {
	            return gl_matrix_1.vec2.dist(this.instance, vec.instance);
	        }
	    }, {
	        key: "dot",
	        value: function dot(vec) {
	            return gl_matrix_1.vec2.dot(this.instance, vec.instance);
	        }
	    }, {
	        key: "rotate",
	        value: function rotate(vec, rad) {
	            var m = this.sub(vec);
	            var s = Math.sin(rad);
	            var c = Math.cos(rad);
	            return new Vector2(m.dot(new Vector2(c, -s)), m.dot(new Vector2(s, c))).add(vec);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.x + "," + this.y + ")";
	        }
	    }, {
	        key: "updated",
	        get: function get() {
	            return this._updated;
	        },
	        set: function set(updated) {
	            this._updated = updated;
	        }
	    }, {
	        key: "x",
	        get: function get() {
	            return this.instance[0];
	        },
	        set: function set(x) {
	            this.instance[0] = x;
	            this._updated = true;
	        }
	    }, {
	        key: "y",
	        get: function get() {
	            return this.instance[1];
	        },
	        set: function set(y) {
	            this.instance[1] = y;
	            this._updated = true;
	        }
	    }]);
	
	    return Vector2;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Vector2;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gl_1 = __webpack_require__(4);
	var AbstractUniform_1 = __webpack_require__(8);
	
	var MatrixUniform = function (_AbstractUniform_1$de) {
	    _inherits(MatrixUniform, _AbstractUniform_1$de);
	
	    function MatrixUniform(size) {
	        _classCallCheck(this, MatrixUniform);
	
	        var _this = _possibleConstructorReturn(this, (MatrixUniform.__proto__ || Object.getPrototypeOf(MatrixUniform)).call(this));
	
	        _this._size = size;
	        _this.buffer = new Float32Array(size * size);
	        return _this;
	    }
	
	    _createClass(MatrixUniform, [{
	        key: '_update',
	        value: function _update(loc) {
	            gl_1.default['uniformMatrix' + this._size + 'fv'](loc, false, this.buffer);
	        }
	    }, {
	        key: 'set',
	        value: function set(col, row, value) {
	            this.buffer[col * this._size + row] = value;
	        }
	    }, {
	        key: 'replace',
	        value: function replace(buffer) {
	            this.buffer = buffer;
	            this.updated = true;
	        }
	    }, {
	        key: 'get',
	        value: function get(col, row) {
	            return this.buffer[col * this.size + row];
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this._size;
	        }
	    }]);
	
	    return MatrixUniform;
	}(AbstractUniform_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MatrixUniform;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gl_1 = __webpack_require__(4);
	var AbstractUniform_1 = __webpack_require__(8);
	var Constants_1 = __webpack_require__(6);
	
	var TextureUniform = function (_AbstractUniform_1$de) {
	    _inherits(TextureUniform, _AbstractUniform_1$de);
	
	    function TextureUniform(_image) {
	        _classCallCheck(this, TextureUniform);
	
	        var _this = _possibleConstructorReturn(this, (TextureUniform.__proto__ || Object.getPrototypeOf(TextureUniform)).call(this));
	
	        _this._image = _image;
	        _this.index = 0;
	        _this.attached = false;
	        _this._packAlignment = 4;
	        _this._unpackAlignment = 4;
	        _this._unpackFlipY = false;
	        _this._unpackPremultiplyAlpha = false;
	        _this._magFilter = gl_1.default.LINEAR;
	        _this._minFilter = gl_1.default.LINEAR;
	        _this._wrapS = gl_1.default.REPEAT;
	        _this._wrapT = gl_1.default.REPEAT;
	        _this._format = gl_1.default.RGBA;
	        _this._level = 0;
	        _this._texelFormat = gl_1.default.UNSIGNED_BYTE;
	        return _this;
	    }
	
	    _createClass(TextureUniform, [{
	        key: 'setActiveIndex',
	        value: function setActiveIndex(index) {
	            this.index = index;
	        }
	    }, {
	        key: '_update',
	        value: function _update(loc) {
	            gl_1.default.activeTexture(gl_1.default.TEXTURE0 + this.index);
	            if (!this.attached) {
	                this.texture = gl_1.default.createTexture();
	                gl_1.default.pixelStorei(gl_1.default.PACK_ALIGNMENT, this._packAlignment);
	                gl_1.default.pixelStorei(gl_1.default.UNPACK_ALIGNMENT, this._unpackAlignment);
	                gl_1.default.pixelStorei(gl_1.default.UNPACK_FLIP_Y_WEBGL, this._unpackFlipY ? 1 : 0);
	                gl_1.default.pixelStorei(gl_1.default.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._unpackPremultiplyAlpha ? 1 : 0);
	                gl_1.default.bindTexture(gl_1.default.TEXTURE_2D, this.texture);
	                gl_1.default.texParameteri(gl_1.default.TEXTURE_2D, gl_1.default.TEXTURE_MAG_FILTER, this._magFilter);
	                gl_1.default.texParameteri(gl_1.default.TEXTURE_2D, gl_1.default.TEXTURE_MIN_FILTER, this._minFilter);
	                gl_1.default.texParameteri(gl_1.default.TEXTURE_2D, gl_1.default.TEXTURE_WRAP_S, this._wrapS);
	                gl_1.default.texParameteri(gl_1.default.TEXTURE_2D, gl_1.default.TEXTURE_WRAP_T, this._wrapT);
	                gl_1.default.texImage2D(gl_1.default.TEXTURE_2D, this._level, this._format, this._format, this._texelFormat, this._image.image);
	                this.attached = true;
	            } else {
	                gl_1.default.bindTexture(gl_1.default.TEXTURE_2D, this.texture);
	            }
	            gl_1.default.uniform1i(loc, this.index);
	        }
	    }, {
	        key: 'image',
	        get: function get() {
	            return this._image;
	        },
	        set: function set(image) {
	            this._image = image;
	            this.attached = false;
	        }
	    }, {
	        key: 'packAlignment',
	        get: function get() {
	            return this._packAlignment;
	        },
	        set: function set(packAlignment) {
	            this._packAlignment = packAlignment;
	        }
	    }, {
	        key: 'unpackAlignment',
	        get: function get() {
	            return this._unpackAlignment;
	        },
	        set: function set(unpackAlignment) {
	            this._unpackAlignment = unpackAlignment;
	        }
	    }, {
	        key: 'unpackFlipY',
	        get: function get() {
	            return this._unpackFlipY;
	        },
	        set: function set(unpackFlipY) {
	            this._unpackFlipY = unpackFlipY;
	        }
	    }, {
	        key: 'unpackPremultiplyAlpha',
	        get: function get() {
	            return this._unpackPremultiplyAlpha;
	        },
	        set: function set(unpackPremultiplyAlpha) {
	            this._unpackPremultiplyAlpha = unpackPremultiplyAlpha;
	        }
	    }, {
	        key: 'magFilter',
	        get: function get() {
	            return this._magFilter;
	        },
	        set: function set(magFilter) {
	            this._magFilter = magFilter;
	        }
	    }, {
	        key: 'minFilter',
	        get: function get() {
	            return this._minFilter;
	        },
	        set: function set(minFilter) {
	            this._minFilter = minFilter;
	        }
	    }, {
	        key: 'wrapS',
	        get: function get() {
	            return this._wrapS;
	        },
	        set: function set(wrapS) {
	            this._wrapS = wrapS;
	        }
	    }, {
	        key: 'wrapT',
	        get: function get() {
	            return this._wrapT;
	        },
	        set: function set(wrapT) {
	            this._wrapT = wrapT;
	        }
	    }, {
	        key: 'format',
	        get: function get() {
	            return this._format;
	        },
	        set: function set(format) {
	            this._format = format;
	        }
	    }, {
	        key: 'level',
	        get: function get() {
	            return this._level;
	        },
	        set: function set(level) {
	            this._level = level;
	        }
	    }, {
	        key: 'texelFormat',
	        get: function get() {
	            return this._texelFormat;
	        },
	        set: function set(texelFormat) {
	            this._texelFormat = texelFormat;
	        }
	    }]);
	
	    return TextureUniform;
	}(AbstractUniform_1.default);
	
	TextureUniform.MAG_FILTER = Constants_1.default.TextureMagFilter;
	TextureUniform.MIN_FILTER = Constants_1.default.TextureMinFilter;
	TextureUniform.WRAP = Constants_1.default.TextureWrap;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TextureUniform;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var gl_1 = __webpack_require__(4);
	var Matrix3_1 = __webpack_require__(9);
	var viewport = new Matrix3_1.default(2.0 / gl_1.default.canvas.width, 0.0, 1.0, 0.0, -2.0 / gl_1.default.canvas.height, 1.0, -1.0, 1.0, 1.0);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = viewport;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vector2_1 = __webpack_require__(20);
	var scale = new Vector2_1.default(1.0, 1.0);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = scale;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vector2_1 = __webpack_require__(20);
	var camera = new Vector2_1.default(0, 0);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = camera;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	var cache = [];
	var count = 1;
	function getId() {
	    var result = cache.shift();
	    if (result === undefined) {
	        result = count;
	        count++;
	    }
	    return result;
	}
	exports.getId = getId;
	function removeId(id) {
	    cache.push(id);
	}
	exports.removeId = removeId;

/***/ },
/* 27 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "precision highp float;\nprecision highp int;\n\n#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n\n\nuniform mat3 viewMatrix;\nvec4 projection(vec2 pos) {\n  return vec4((vec3(pos, 1.0) * viewMatrix).xy, 0.0, 1.0);\n}\n"

/***/ },
/* 28 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "precision highp float;\nprecision highp int;\nuniform int u_offscreen;\nuniform vec3 u_id;\n"

/***/ },
/* 29 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "attribute vec2 a_vertex;\nattribute vec2 a_uv;\nvarying vec2 v_uv;\n\nvoid main() {\n  gl_Position =  projection(a_vertex);\n  v_uv = a_uv;\n}\n"

/***/ },
/* 30 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "uniform sampler2D u_tex;\nvarying vec2 v_uv;\n\nvoid main() {\n  gl_FragColor = texture2D(u_tex, v_uv);\n}\n"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attribute_1 = __webpack_require__(3);
	var Drawable_1 = __webpack_require__(5);
	var Uniform_1 = __webpack_require__(7);
	var Vector2_1 = __webpack_require__(20);
	var Color_1 = __webpack_require__(32);
	var Line_1 = __webpack_require__(33);
	var LineMesh_glsl_1 = __webpack_require__(35);
	var LineMesh_glsl_2 = __webpack_require__(36);
	
	var LineMesh = function (_Drawable_1$default) {
	    _inherits(LineMesh, _Drawable_1$default);
	
	    function LineMesh(points, _width) {
	        var _this$u_color;
	
	        _classCallCheck(this, LineMesh);
	
	        var _this = _possibleConstructorReturn(this, (LineMesh.__proto__ || Object.getPrototypeOf(LineMesh)).call(this, LineMesh_glsl_1.default, LineMesh_glsl_2.default));
	
	        _this.points = points;
	        _this._width = _width;
	        _this._color = new Color_1.default(0xff0000);
	        var length = _this.points.length;
	        _this.a_vertex = new Attribute_1.default(new Float32Array(length * 2 * 2), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_vertex', _this.a_vertex);
	        _this.u_color = new Uniform_1.default(Uniform_1.default.FLOAT, 4);
	        (_this$u_color = _this.u_color).set.apply(_this$u_color, _toConsumableArray(_this._color.toGl()));
	        _this.attachUniform('u_color', _this.u_color);
	        _this.createVertex(_width);
	        _this.endIndex = points.length * 2;
	        _this._drawType = Attribute_1.default.TRIANGLE_STRIP;
	        return _this;
	    }
	
	    _createClass(LineMesh, [{
	        key: 'createVertex',
	        value: function createVertex(width) {
	            for (var i = 0, length = this.points.length - 1; i < length; i++) {
	                var v0 = this.points[i];
	                var v1 = this.points[i + 1];
	                var startOffset = new Line_1.default(v0, v1).offset(width / 2);
	                var endOffset = new Line_1.default(v1, v0).offset(-width / 2);
	                var startPositive = startOffset.rotate(v0, Math.PI / 2);
	                var startNegative = startOffset.rotate(v0, -Math.PI / 2);
	                var endPositive = endOffset.rotate(v1, Math.PI / 2);
	                var endNegative = endOffset.rotate(v1, -Math.PI / 2);
	                this.a_vertex.set((i + 1) * 2 + 0, endPositive.x, endPositive.y);
	                this.a_vertex.set((i + 1) * 2 + 1, endNegative.x, endNegative.y);
	                if (i === 0) {
	                    this.a_vertex.set(i * 2 + 0, startPositive.x, startPositive.y);
	                    this.a_vertex.set(i * 2 + 1, startNegative.x, startNegative.y);
	                    continue;
	                }
	                var lastStartPositiveVertex = this.a_vertex.get((i - 1) * 2);
	                var lastStartPositive = new Vector2_1.default(lastStartPositiveVertex[0], lastStartPositiveVertex[1]);
	                var currentStartPositiveVertex = this.a_vertex.get(i * 2);
	                var currentStartPositive = new Vector2_1.default(currentStartPositiveVertex[0], currentStartPositiveVertex[1]);
	                var positiveIntersection = new Line_1.default(lastStartPositive, currentStartPositive).intersect(new Line_1.default(startPositive, endPositive));
	                this.a_vertex.set(i * 2 + 0, positiveIntersection.x, positiveIntersection.y);
	                var lastStartNegativeVertex = this.a_vertex.get((i - 1) * 2 + 1);
	                var lastStartNegative = new Vector2_1.default(lastStartNegativeVertex[0], lastStartNegativeVertex[1]);
	                var currentStartNegativeVertex = this.a_vertex.get(i * 2 + 1);
	                var currentStartNegative = new Vector2_1.default(currentStartNegativeVertex[0], currentStartNegativeVertex[1]);
	                var negativeIntersection = new Line_1.default(lastStartNegative, currentStartNegative).intersect(new Line_1.default(startNegative, endNegative));
	                this.a_vertex.set(i * 2 + 1, negativeIntersection.x, negativeIntersection.y);
	            }
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this._color.value;
	        },
	        set: function set(color) {
	            var _u_color;
	
	            this._color.value = color;
	            (_u_color = this.u_color).set.apply(_u_color, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'opacity',
	        get: function get() {
	            return this._color.opacity;
	        },
	        set: function set(opacity) {
	            var _u_color2;
	
	            this._color.opacity = opacity;
	            (_u_color2 = this.u_color).set.apply(_u_color2, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	            this.createVertex(width);
	        }
	    }]);
	
	    return LineMesh;
	}(Drawable_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LineMesh;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Color = function () {
	    function Color(hex) {
	        var _opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
	
	        _classCallCheck(this, Color);
	
	        this.hex = hex;
	        this._opacity = _opacity;
	    }
	
	    _createClass(Color, [{
	        key: "toGl",
	        value: function toGl() {
	            return [(this.hex >> 16) / 255, (this.hex >> 8 & 0xff) / 255, (this.hex & 0xff) / 255, this._opacity];
	        }
	    }, {
	        key: "value",
	        get: function get() {
	            return this.hex;
	        },
	        set: function set(hex) {
	            this.hex = hex;
	        }
	    }, {
	        key: "opacity",
	        get: function get() {
	            return this._opacity;
	        },
	        set: function set(opacity) {
	            this._opacity = opacity;
	        }
	    }, {
	        key: "r",
	        get: function get() {
	            return this.hex >> 16;
	        }
	    }, {
	        key: "g",
	        get: function get() {
	            return this.hex >> 8 & 0xff;
	        }
	    }, {
	        key: "b",
	        get: function get() {
	            return this.hex & 0xff;
	        }
	    }]);
	
	    return Color;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Color;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector2_1 = __webpack_require__(20);
	var Matrix2_1 = __webpack_require__(34);
	
	var Line = function () {
	    function Line(start, end) {
	        _classCallCheck(this, Line);
	
	        this.start = start;
	        this.end = end;
	    }
	
	    _createClass(Line, [{
	        key: 'offset',
	        value: function offset(distance) {
	            return this.start.add(new Vector2_1.default(distance).mul(this.end.sub(this.start)).div(new Vector2_1.default(this.length)));
	        }
	        // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
	
	    }, {
	        key: 'intersect',
	        value: function intersect(line) {
	            var d1 = new Matrix2_1.default(this.start, this.end).det();
	            var d2 = new Matrix2_1.default(line.start, line.end).det();
	            var x1 = new Matrix2_1.default(this.start.x, 1, this.end.x, 1).det();
	            var x2 = new Matrix2_1.default(line.start.x, 1, line.end.x, 1).det();
	            var y1 = new Matrix2_1.default(this.start.y, 1, this.end.y, 1).det();
	            var y2 = new Matrix2_1.default(line.start.y, 1, line.end.y, 1).det();
	            var base = new Matrix2_1.default(x1, y1, x2, y2).det();
	            return new Vector2_1.default(new Matrix2_1.default(d1, x1, d2, x2).det() / base, new Matrix2_1.default(d1, y1, d2, y2).det() / base);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.start.toString() + ' -> ' + this.end.toString();
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.start.dist(this.end);
	        }
	    }]);
	
	    return Line;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Line;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_matrix_1 = __webpack_require__(10);
	var Vector2_1 = __webpack_require__(20);
	
	var Matrix2 = function () {
	    function Matrix2(a, b, c, d) {
	        _classCallCheck(this, Matrix2);
	
	        if (a instanceof Float32Array) {
	            this.instance = a;
	        } else if (a instanceof Vector2_1.default && b instanceof Vector2_1.default) {
	            this.instance = gl_matrix_1.mat2.fromValues(a.x, a.y, b.x, b.y);
	        } else {
	            this.instance = gl_matrix_1.mat2.fromValues(a, b, c, d);
	        }
	    }
	
	    _createClass(Matrix2, [{
	        key: 'det',
	        value: function det() {
	            return gl_matrix_1.mat2.determinant(this.instance);
	        }
	    }, {
	        key: 'get',
	        value: function get(index) {
	            return this.instance[index];
	        }
	    }, {
	        key: 'set',
	        value: function set(index, value) {
	            this.instance[index] = value;
	        }
	    }]);
	
	    return Matrix2;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Matrix2;

/***/ },
/* 35 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "attribute vec2 a_vertex;\n\nvoid main() {\n  gl_Position =  projection(a_vertex);\n}\n"

/***/ },
/* 36 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "uniform vec4 u_color;\nvoid main() {\n  gl_FragColor = vec4(u_color);\n}\n"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attribute_1 = __webpack_require__(3);
	var Drawable_1 = __webpack_require__(5);
	var TextureUniform_1 = __webpack_require__(22);
	var Texture_1 = __webpack_require__(38);
	var Color_1 = __webpack_require__(32);
	var Uniform_1 = __webpack_require__(7);
	var Text_glsl_1 = __webpack_require__(39);
	var Text_glsl_2 = __webpack_require__(40);
	
	var Text = function (_Drawable_1$default) {
	    _inherits(Text, _Drawable_1$default);
	
	    function Text(_font, _text, _height) {
	        var _this$u_color;
	
	        _classCallCheck(this, Text);
	
	        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, Text_glsl_1.default, Text_glsl_2.default));
	
	        _this._font = _font;
	        _this._text = _text;
	        _this._height = _height;
	        _this._color = new Color_1.default(0xff0000);
	        _this._width = 0;
	        _this.a_vertex = new Attribute_1.default(new Float32Array(null), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_vertex', _this.a_vertex);
	        _this.a_uv = new Attribute_1.default(new Float32Array(null), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_uv', _this.a_uv);
	        _this.u_tex = new TextureUniform_1.default(Texture_1.default.fromImage(_font.image));
	        _this.attachUniform('u_tex', _this.u_tex);
	        _this.u_color = new Uniform_1.default(Uniform_1.default.FLOAT, 4);
	        (_this$u_color = _this.u_color).set.apply(_this$u_color, _toConsumableArray(_this._color.toGl()));
	        _this.attachUniform('u_color', _this.u_color);
	        _this.createVertex();
	        return _this;
	    }
	
	    _createClass(Text, [{
	        key: 'createVertex',
	        value: function createVertex() {
	            var vertices = [];
	            var uvs = [];
	            var font = this._font;
	            var coords = font.getText.apply(font, _toConsumableArray(this.text.split('').map(function (c) {
	                return c.charCodeAt(0);
	            })));
	            var ratio = this._height / font.height * font.width;
	            var cursorX = 0;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = coords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2),
	                        x1 = _step$value[0],
	                        x2 = _step$value[1];
	
	                    var width = (x2 - x1) * ratio;
	                    vertices.push(cursorX, 0);
	                    vertices.push(cursorX, this._height);
	                    vertices.push(cursorX + width, 0);
	                    vertices.push(cursorX, this._height);
	                    vertices.push(cursorX + width, 0);
	                    vertices.push(cursorX + width, this._height);
	                    uvs.push(x1, 0);
	                    uvs.push(x1, font.heightRatio);
	                    uvs.push(x2, 0);
	                    uvs.push(x1, font.heightRatio);
	                    uvs.push(x2, 0);
	                    uvs.push(x2, font.heightRatio);
	                    cursorX += width;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            this.a_uv.replaceWith(new Float32Array(uvs));
	            this.a_vertex.replaceWith(new Float32Array(vertices));
	            this._endIndex = this._text.length * 6;
	            this._width = cursorX;
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this._color.value;
	        },
	        set: function set(color) {
	            var _u_color;
	
	            this._color.value = color;
	            (_u_color = this.u_color).set.apply(_u_color, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'opacity',
	        get: function get() {
	            return this._color.opacity;
	        },
	        set: function set(opacity) {
	            var _u_color2;
	
	            this._color.opacity = opacity;
	            (_u_color2 = this.u_color).set.apply(_u_color2, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'font',
	        get: function get() {
	            return this._font;
	        },
	        set: function set(font) {
	            this._font = font;
	            this.u_tex.image = Texture_1.default.fromImage(font.image);
	        }
	    }, {
	        key: 'text',
	        get: function get() {
	            return this._text;
	        },
	        set: function set(text) {
	            this._text = text;
	            this.createVertex();
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	            this.createVertex();
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        }
	    }]);
	
	    return Text;
	}(Drawable_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Text;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	var Texture = function () {
	    function Texture() {
	        _classCallCheck(this, Texture);
	    }
	
	    _createClass(Texture, [{
	        key: "image",
	        get: function get() {
	            return this._image;
	        }
	    }], [{
	        key: "loadTexture",
	        value: function loadTexture(src) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                return _context.abrupt("return", new Promise(function (resolve, reject) {
	                                    var image = new Image();
	                                    var texture = new Texture();
	                                    image.src = src;
	                                    texture._image = image;
	                                    image.onload = function () {
	                                        resolve(texture);
	                                    };
	                                    image.onerror = function (e) {
	                                        reject(e);
	                                    };
	                                }));
	
	                            case 1:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "fromImage",
	        value: function fromImage(image) {
	            var t = new Texture();
	            t._image = image;
	            return t;
	        }
	    }]);
	
	    return Texture;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Texture;

/***/ },
/* 39 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "attribute vec2 a_vertex;\nattribute vec2 a_uv;\nvarying vec2 v_uv;\n\nvoid main() {\n  gl_Position =  projection(a_vertex);\n  v_uv = a_uv;\n}\n"

/***/ },
/* 40 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "uniform sampler2D u_tex;\nvarying vec2 v_uv;\nuniform vec4 u_color;\n\nvoid main() {\n  gl_FragColor = texture2D(u_tex, v_uv);\n  if (gl_FragColor.r == 0.0) {\n    discard;\n  } else {\n    gl_FragColor = gl_FragColor * u_color;\n  }\n}\n"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attribute_1 = __webpack_require__(3);
	var Drawable_1 = __webpack_require__(5);
	var TextureUniform_1 = __webpack_require__(22);
	var Sprite_glsl_1 = __webpack_require__(42);
	var Sprite_glsl_2 = __webpack_require__(43);
	
	var Sprite = function (_Drawable_1$default) {
	    _inherits(Sprite, _Drawable_1$default);
	
	    function Sprite(texture, _tileWidth, _tileHeight, _width, _height) {
	        _classCallCheck(this, Sprite);
	
	        var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, Sprite_glsl_1.default, Sprite_glsl_2.default));
	
	        _this.texture = texture;
	        _this._tileWidth = _tileWidth;
	        _this._tileHeight = _tileHeight;
	        _this._width = _width;
	        _this._height = _height;
	        _this._xIndex = 0;
	        _this._yIndex = 0;
	        _this.a_vertex = new Attribute_1.default(new Float32Array(8), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_vertex', _this.a_vertex);
	        _this.a_uv = new Attribute_1.default(new Float32Array(8), Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_uv', _this.a_uv);
	        _this.u_tex = new TextureUniform_1.default(texture);
	        _this.attachUniform('u_tex', _this.u_tex);
	        _this.createVertex();
	        _this.endIndex = 4;
	        _this._drawType = Attribute_1.default.TRIANGLE_STRIP;
	        return _this;
	    }
	
	    _createClass(Sprite, [{
	        key: 'createVertex',
	        value: function createVertex() {
	            this.a_vertex.set(0, 0, 0);
	            this.a_vertex.set(2, this._width, 0);
	            this.a_vertex.set(1, 0, this._height);
	            this.a_vertex.set(3, this._width, this._height);
	            var xRatio = this._tileWidth / this.texture.image.width;
	            var yRatio = this._tileHeight / this.texture.image.height;
	            this.a_uv.set(0, this._xIndex * xRatio, this._yIndex * yRatio);
	            this.a_uv.set(1, this._xIndex * xRatio, (this._yIndex + 1) * yRatio);
	            this.a_uv.set(2, (this._xIndex + 1) * xRatio, this._yIndex * yRatio);
	            this.a_uv.set(3, (this._xIndex + 1) * xRatio, (this._yIndex + 1) * yRatio);
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	            this.createVertex();
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	            this.createVertex();
	        }
	    }, {
	        key: 'tileWidth',
	        get: function get() {
	            return this._tileWidth;
	        },
	        set: function set(tileWidth) {
	            this._tileWidth = tileWidth;
	            this.createVertex();
	        }
	    }, {
	        key: 'tileHeight',
	        get: function get() {
	            return this._tileHeight;
	        },
	        set: function set(tileHeight) {
	            this._tileHeight = tileHeight;
	            this.createVertex();
	        }
	    }, {
	        key: 'xIndex',
	        get: function get() {
	            return this._xIndex;
	        },
	        set: function set(xIndex) {
	            this._xIndex = xIndex;
	            this.createVertex();
	        }
	    }, {
	        key: 'yIndex',
	        get: function get() {
	            return this._yIndex;
	        },
	        set: function set(yIndex) {
	            this._yIndex = yIndex;
	            this.createVertex();
	        }
	    }]);
	
	    return Sprite;
	}(Drawable_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Sprite;

/***/ },
/* 42 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "attribute vec2 a_vertex;\nattribute vec2 a_uv;\nvarying vec2 v_uv;\n\nvoid main() {\n  gl_Position =  projection(a_vertex);\n  v_uv = a_uv;\n}\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "uniform sampler2D u_tex;\nvarying vec2 v_uv;\n\nvoid main() {\n  gl_FragColor = texture2D(u_tex, v_uv);\n}\n"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Polygon_1 = __webpack_require__(45);
	var Vector2_1 = __webpack_require__(20);
	
	var Box = function (_Polygon_1$default) {
	    _inherits(Box, _Polygon_1$default);
	
	    function Box(_width, _height) {
	        _classCallCheck(this, Box);
	
	        var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, []));
	
	        _this._width = _width;
	        _this._height = _height;
	        _this.createVertex();
	        return _this;
	    }
	
	    _createClass(Box, [{
	        key: 'createVertex',
	        value: function createVertex() {
	            var points = [];
	            points.push(new Vector2_1.default(0, 0));
	            points.push(new Vector2_1.default(0, this._height));
	            points.push(new Vector2_1.default(this._width, this._height));
	            points.push(new Vector2_1.default(this._width, 0));
	            this._points = points;
	            this.calculateVertices();
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        },
	        set: function set(width) {
	            this._width = width;
	            this.createVertex();
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        },
	        set: function set(height) {
	            this._height = height;
	            this.createVertex();
	        }
	    }]);
	
	    return Box;
	}(Polygon_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Box;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attribute_1 = __webpack_require__(3);
	var Drawable_1 = __webpack_require__(5);
	var Color_1 = __webpack_require__(32);
	var Uniform_1 = __webpack_require__(7);
	var Constants_1 = __webpack_require__(6);
	var earcut = __webpack_require__(46);
	var Polygon_glsl_1 = __webpack_require__(47);
	var Polygon_glsl_2 = __webpack_require__(48);
	
	var Polygon = function (_Drawable_1$default) {
	    _inherits(Polygon, _Drawable_1$default);
	
	    function Polygon(_points) {
	        var _this$u_color;
	
	        _classCallCheck(this, Polygon);
	
	        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, Polygon_glsl_1.default, Polygon_glsl_2.default));
	
	        _this._points = _points;
	        _this._color = new Color_1.default(0xff0000);
	        _this.a_vertex = new Attribute_1.default(null, Attribute_1.default.FLOAT, 2);
	        _this.attachAttribute('a_vertex', _this.a_vertex);
	        _this.u_color = new Uniform_1.default(Uniform_1.default.FLOAT, 4);
	        (_this$u_color = _this.u_color).set.apply(_this$u_color, _toConsumableArray(_this._color.toGl()));
	        _this.attachUniform('u_color', _this.u_color);
	        _this._drawMethod = Constants_1.default.DrawMethod.ELEMENTS;
	        _this.calculateVertices();
	        return _this;
	    }
	
	    _createClass(Polygon, [{
	        key: 'calculateVertices',
	        value: function calculateVertices() {
	            if (this._points.length) {
	                var points = this._points.map(function (vec) {
	                    return [vec.x, vec.y];
	                }).reduce(function (l, v) {
	                    return l.concat(v);
	                }, []);
	                this.a_vertex.replaceWith(new Float32Array(points));
	                var indices = earcut(points);
	                if (indices.length > 255) {
	                    this._elementType = Constants_1.default.ElementType.UNSIGNED_SHORT;
	                    this.a_vertex.indexBuffer = new Uint16Array(indices);
	                } else {
	                    this._elementType = Constants_1.default.ElementType.UNSIGNED_BYTE;
	                    this.a_vertex.indexBuffer = new Uint8Array(indices);
	                }
	                this._endIndex = indices.length;
	            }
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this._color.value;
	        },
	        set: function set(color) {
	            var _u_color;
	
	            this._color.value = color;
	            (_u_color = this.u_color).set.apply(_u_color, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'opacity',
	        get: function get() {
	            return this._color.opacity;
	        },
	        set: function set(opacity) {
	            var _u_color2;
	
	            this._color.opacity = opacity;
	            (_u_color2 = this.u_color).set.apply(_u_color2, _toConsumableArray(this._color.toGl()));
	        }
	    }, {
	        key: 'points',
	        get: function get() {
	            return this._points;
	        },
	        set: function set(points) {
	            this._points = points;
	        }
	    }]);
	
	    return Polygon;
	}(Drawable_1.default);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Polygon;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = earcut;
	
	function earcut(data, holeIndices, dim) {
	
	    dim = dim || 2;
	
	    var hasHoles = holeIndices && holeIndices.length,
	        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
	        outerNode = linkedList(data, 0, outerLen, dim, true),
	        triangles = [];
	
	    if (!outerNode) return triangles;
	
	    var minX, minY, maxX, maxY, x, y, size;
	
	    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
	
	    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
	    if (data.length > 80 * dim) {
	        minX = maxX = data[0];
	        minY = maxY = data[1];
	
	        for (var i = dim; i < outerLen; i += dim) {
	            x = data[i];
	            y = data[i + 1];
	            if (x < minX) minX = x;
	            if (y < minY) minY = y;
	            if (x > maxX) maxX = x;
	            if (y > maxY) maxY = y;
	        }
	
	        // minX, minY and size are later used to transform coords into integers for z-order calculation
	        size = Math.max(maxX - minX, maxY - minY);
	    }
	
	    earcutLinked(outerNode, triangles, dim, minX, minY, size);
	
	    return triangles;
	}
	
	// create a circular doubly linked list from polygon points in the specified winding order
	function linkedList(data, start, end, dim, clockwise) {
	    var i, last;
	
	    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
	        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
	    } else {
	        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
	    }
	
	    if (last && equals(last, last.next)) {
	        removeNode(last);
	        last = last.next;
	    }
	
	    return last;
	}
	
	// eliminate colinear or duplicate points
	function filterPoints(start, end) {
	    if (!start) return start;
	    if (!end) end = start;
	
	    var p = start,
	        again;
	    do {
	        again = false;
	
	        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
	            removeNode(p);
	            p = end = p.prev;
	            if (p === p.next) return null;
	            again = true;
	
	        } else {
	            p = p.next;
	        }
	    } while (again || p !== end);
	
	    return end;
	}
	
	// main ear slicing loop which triangulates a polygon (given as a linked list)
	function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
	    if (!ear) return;
	
	    // interlink polygon nodes in z-order
	    if (!pass && size) indexCurve(ear, minX, minY, size);
	
	    var stop = ear,
	        prev, next;
	
	    // iterate through ears, slicing them one by one
	    while (ear.prev !== ear.next) {
	        prev = ear.prev;
	        next = ear.next;
	
	        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
	            // cut off the triangle
	            triangles.push(prev.i / dim);
	            triangles.push(ear.i / dim);
	            triangles.push(next.i / dim);
	
	            removeNode(ear);
	
	            // skipping the next vertice leads to less sliver triangles
	            ear = next.next;
	            stop = next.next;
	
	            continue;
	        }
	
	        ear = next;
	
	        // if we looped through the whole remaining polygon and can't find any more ears
	        if (ear === stop) {
	            // try filtering points and slicing again
	            if (!pass) {
	                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
	
	            // if this didn't work, try curing all small self-intersections locally
	            } else if (pass === 1) {
	                ear = cureLocalIntersections(ear, triangles, dim);
	                earcutLinked(ear, triangles, dim, minX, minY, size, 2);
	
	            // as a last resort, try splitting the remaining polygon into two
	            } else if (pass === 2) {
	                splitEarcut(ear, triangles, dim, minX, minY, size);
	            }
	
	            break;
	        }
	    }
	}
	
	// check whether a polygon node forms a valid ear with adjacent nodes
	function isEar(ear) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;
	
	    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
	
	    // now make sure we don't have other points inside the potential ear
	    var p = ear.next.next;
	
	    while (p !== ear.prev) {
	        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.next;
	    }
	
	    return true;
	}
	
	function isEarHashed(ear, minX, minY, size) {
	    var a = ear.prev,
	        b = ear,
	        c = ear.next;
	
	    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
	
	    // triangle bbox; min & max are calculated like this for speed
	    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
	        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
	        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
	        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);
	
	    // z-order range for the current triangle bbox;
	    var minZ = zOrder(minTX, minTY, minX, minY, size),
	        maxZ = zOrder(maxTX, maxTY, minX, minY, size);
	
	    // first look for points inside the triangle in increasing z-order
	    var p = ear.nextZ;
	
	    while (p && p.z <= maxZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.nextZ;
	    }
	
	    // then look for points in decreasing z-order
	    p = ear.prevZ;
	
	    while (p && p.z >= minZ) {
	        if (p !== ear.prev && p !== ear.next &&
	            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
	            area(p.prev, p, p.next) >= 0) return false;
	        p = p.prevZ;
	    }
	
	    return true;
	}
	
	// go through all polygon nodes and cure small local self-intersections
	function cureLocalIntersections(start, triangles, dim) {
	    var p = start;
	    do {
	        var a = p.prev,
	            b = p.next.next;
	
	        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
	
	            triangles.push(a.i / dim);
	            triangles.push(p.i / dim);
	            triangles.push(b.i / dim);
	
	            // remove two nodes involved
	            removeNode(p);
	            removeNode(p.next);
	
	            p = start = b;
	        }
	        p = p.next;
	    } while (p !== start);
	
	    return p;
	}
	
	// try splitting polygon into two and triangulate them independently
	function splitEarcut(start, triangles, dim, minX, minY, size) {
	    // look for a valid diagonal that divides the polygon into two
	    var a = start;
	    do {
	        var b = a.next.next;
	        while (b !== a.prev) {
	            if (a.i !== b.i && isValidDiagonal(a, b)) {
	                // split the polygon in two by the diagonal
	                var c = splitPolygon(a, b);
	
	                // filter colinear points around the cuts
	                a = filterPoints(a, a.next);
	                c = filterPoints(c, c.next);
	
	                // run earcut on each half
	                earcutLinked(a, triangles, dim, minX, minY, size);
	                earcutLinked(c, triangles, dim, minX, minY, size);
	                return;
	            }
	            b = b.next;
	        }
	        a = a.next;
	    } while (a !== start);
	}
	
	// link every hole into the outer loop, producing a single-ring polygon without holes
	function eliminateHoles(data, holeIndices, outerNode, dim) {
	    var queue = [],
	        i, len, start, end, list;
	
	    for (i = 0, len = holeIndices.length; i < len; i++) {
	        start = holeIndices[i] * dim;
	        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	        list = linkedList(data, start, end, dim, false);
	        if (list === list.next) list.steiner = true;
	        queue.push(getLeftmost(list));
	    }
	
	    queue.sort(compareX);
	
	    // process holes from left to right
	    for (i = 0; i < queue.length; i++) {
	        eliminateHole(queue[i], outerNode);
	        outerNode = filterPoints(outerNode, outerNode.next);
	    }
	
	    return outerNode;
	}
	
	function compareX(a, b) {
	    return a.x - b.x;
	}
	
	// find a bridge between vertices that connects hole with an outer ring and and link it
	function eliminateHole(hole, outerNode) {
	    outerNode = findHoleBridge(hole, outerNode);
	    if (outerNode) {
	        var b = splitPolygon(outerNode, hole);
	        filterPoints(b, b.next);
	    }
	}
	
	// David Eberly's algorithm for finding a bridge between hole and outer polygon
	function findHoleBridge(hole, outerNode) {
	    var p = outerNode,
	        hx = hole.x,
	        hy = hole.y,
	        qx = -Infinity,
	        m;
	
	    // find a segment intersected by a ray from the hole's leftmost point to the left;
	    // segment's endpoint with lesser x will be potential connection point
	    do {
	        if (hy <= p.y && hy >= p.next.y) {
	            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
	            if (x <= hx && x > qx) {
	                qx = x;
	                if (x === hx) {
	                    if (hy === p.y) return p;
	                    if (hy === p.next.y) return p.next;
	                }
	                m = p.x < p.next.x ? p : p.next;
	            }
	        }
	        p = p.next;
	    } while (p !== outerNode);
	
	    if (!m) return null;
	
	    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint
	
	    // look for points inside the triangle of hole point, segment intersection and endpoint;
	    // if there are no points found, we have a valid connection;
	    // otherwise choose the point of the minimum angle with the ray as connection point
	
	    var stop = m,
	        mx = m.x,
	        my = m.y,
	        tanMin = Infinity,
	        tan;
	
	    p = m.next;
	
	    while (p !== stop) {
	        if (hx >= p.x && p.x >= mx &&
	                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
	
	            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential
	
	            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
	                m = p;
	                tanMin = tan;
	            }
	        }
	
	        p = p.next;
	    }
	
	    return m;
	}
	
	// interlink polygon nodes in z-order
	function indexCurve(start, minX, minY, size) {
	    var p = start;
	    do {
	        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
	        p.prevZ = p.prev;
	        p.nextZ = p.next;
	        p = p.next;
	    } while (p !== start);
	
	    p.prevZ.nextZ = null;
	    p.prevZ = null;
	
	    sortLinked(p);
	}
	
	// Simon Tatham's linked list merge sort algorithm
	// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
	function sortLinked(list) {
	    var i, p, q, e, tail, numMerges, pSize, qSize,
	        inSize = 1;
	
	    do {
	        p = list;
	        list = null;
	        tail = null;
	        numMerges = 0;
	
	        while (p) {
	            numMerges++;
	            q = p;
	            pSize = 0;
	            for (i = 0; i < inSize; i++) {
	                pSize++;
	                q = q.nextZ;
	                if (!q) break;
	            }
	
	            qSize = inSize;
	
	            while (pSize > 0 || (qSize > 0 && q)) {
	
	                if (pSize === 0) {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                } else if (qSize === 0 || !q) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else if (p.z <= q.z) {
	                    e = p;
	                    p = p.nextZ;
	                    pSize--;
	                } else {
	                    e = q;
	                    q = q.nextZ;
	                    qSize--;
	                }
	
	                if (tail) tail.nextZ = e;
	                else list = e;
	
	                e.prevZ = tail;
	                tail = e;
	            }
	
	            p = q;
	        }
	
	        tail.nextZ = null;
	        inSize *= 2;
	
	    } while (numMerges > 1);
	
	    return list;
	}
	
	// z-order of a point given coords and size of the data bounding box
	function zOrder(x, y, minX, minY, size) {
	    // coords are transformed into non-negative 15-bit integer range
	    x = 32767 * (x - minX) / size;
	    y = 32767 * (y - minY) / size;
	
	    x = (x | (x << 8)) & 0x00FF00FF;
	    x = (x | (x << 4)) & 0x0F0F0F0F;
	    x = (x | (x << 2)) & 0x33333333;
	    x = (x | (x << 1)) & 0x55555555;
	
	    y = (y | (y << 8)) & 0x00FF00FF;
	    y = (y | (y << 4)) & 0x0F0F0F0F;
	    y = (y | (y << 2)) & 0x33333333;
	    y = (y | (y << 1)) & 0x55555555;
	
	    return x | (y << 1);
	}
	
	// find the leftmost node of a polygon ring
	function getLeftmost(start) {
	    var p = start,
	        leftmost = start;
	    do {
	        if (p.x < leftmost.x) leftmost = p;
	        p = p.next;
	    } while (p !== start);
	
	    return leftmost;
	}
	
	// check if a point lies within a convex triangle
	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
	    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
	           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
	           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
	}
	
	// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
	function isValidDiagonal(a, b) {
	    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
	           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
	}
	
	// signed area of a triangle
	function area(p, q, r) {
	    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}
	
	// check if two points are equal
	function equals(p1, p2) {
	    return p1.x === p2.x && p1.y === p2.y;
	}
	
	// check if two segments intersect
	function intersects(p1, q1, p2, q2) {
	    if ((equals(p1, q1) && equals(p2, q2)) ||
	        (equals(p1, q2) && equals(p2, q1))) return true;
	    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
	           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
	}
	
	// check if a polygon diagonal intersects any polygon segments
	function intersectsPolygon(a, b) {
	    var p = a;
	    do {
	        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
	                intersects(p, p.next, a, b)) return true;
	        p = p.next;
	    } while (p !== a);
	
	    return false;
	}
	
	// check if a polygon diagonal is locally inside the polygon
	function locallyInside(a, b) {
	    return area(a.prev, a, a.next) < 0 ?
	        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
	        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}
	
	// check if the middle point of a polygon diagonal is inside the polygon
	function middleInside(a, b) {
	    var p = a,
	        inside = false,
	        px = (a.x + b.x) / 2,
	        py = (a.y + b.y) / 2;
	    do {
	        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
	            inside = !inside;
	        p = p.next;
	    } while (p !== a);
	
	    return inside;
	}
	
	// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
	// if one belongs to the outer ring and another to a hole, it merges it into a single ring
	function splitPolygon(a, b) {
	    var a2 = new Node(a.i, a.x, a.y),
	        b2 = new Node(b.i, b.x, b.y),
	        an = a.next,
	        bp = b.prev;
	
	    a.next = b;
	    b.prev = a;
	
	    a2.next = an;
	    an.prev = a2;
	
	    b2.next = a2;
	    a2.prev = b2;
	
	    bp.next = b2;
	    b2.prev = bp;
	
	    return b2;
	}
	
	// create a node and optionally link it with previous one (in a circular doubly linked list)
	function insertNode(i, x, y, last) {
	    var p = new Node(i, x, y);
	
	    if (!last) {
	        p.prev = p;
	        p.next = p;
	
	    } else {
	        p.next = last.next;
	        p.prev = last;
	        last.next.prev = p;
	        last.next = p;
	    }
	    return p;
	}
	
	function removeNode(p) {
	    p.next.prev = p.prev;
	    p.prev.next = p.next;
	
	    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
	    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
	}
	
	function Node(i, x, y) {
	    // vertice index in coordinates array
	    this.i = i;
	
	    // vertex coordinates
	    this.x = x;
	    this.y = y;
	
	    // previous and next vertice nodes in a polygon ring
	    this.prev = null;
	    this.next = null;
	
	    // z-order curve value
	    this.z = null;
	
	    // previous and next nodes in z-order
	    this.prevZ = null;
	    this.nextZ = null;
	
	    // indicates whether this is a steiner point
	    this.steiner = false;
	}
	
	// return a percentage difference between the polygon area and its triangulation area;
	// used to verify correctness of triangulation
	earcut.deviation = function (data, holeIndices, dim, triangles) {
	    var hasHoles = holeIndices && holeIndices.length;
	    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
	
	    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
	    if (hasHoles) {
	        for (var i = 0, len = holeIndices.length; i < len; i++) {
	            var start = holeIndices[i] * dim;
	            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
	            polygonArea -= Math.abs(signedArea(data, start, end, dim));
	        }
	    }
	
	    var trianglesArea = 0;
	    for (i = 0; i < triangles.length; i += 3) {
	        var a = triangles[i] * dim;
	        var b = triangles[i + 1] * dim;
	        var c = triangles[i + 2] * dim;
	        trianglesArea += Math.abs(
	            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
	            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
	    }
	
	    return polygonArea === 0 && trianglesArea === 0 ? 0 :
	        Math.abs((trianglesArea - polygonArea) / polygonArea);
	};
	
	function signedArea(data, start, end, dim) {
	    var sum = 0;
	    for (var i = start, j = end - dim; i < end; i += dim) {
	        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
	        j = i;
	    }
	    return sum;
	}
	
	// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
	earcut.flatten = function (data) {
	    var dim = data[0][0].length,
	        result = {vertices: [], holes: [], dimensions: dim},
	        holeIndex = 0;
	
	    for (var i = 0; i < data.length; i++) {
	        for (var j = 0; j < data[i].length; j++) {
	            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
	        }
	        if (i > 0) {
	            holeIndex += data[i - 1].length;
	            result.holes.push(holeIndex);
	        }
	    }
	    return result;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "attribute vec2 a_vertex;\n\nvoid main() {\n  gl_Position =  projection(a_vertex);\n}\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = "uniform vec4 u_color;\n\nvoid main() {\n  gl_FragColor = u_color;\n}\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var gl_1 = __webpack_require__(4);
	var AbstractUniform_1 = __webpack_require__(8);
	var Constants_1 = __webpack_require__(6);
	
	var ArrayUniform = function (_AbstractUniform_1$de) {
	    _inherits(ArrayUniform, _AbstractUniform_1$de);
	
	    function ArrayUniform(type, size) {
	        _classCallCheck(this, ArrayUniform);
	
	        var _this = _possibleConstructorReturn(this, (ArrayUniform.__proto__ || Object.getPrototypeOf(ArrayUniform)).call(this));
	
	        _this.buffer = [];
	        _this.type = type;
	        _this.size = size;
	        return _this;
	    }
	
	    _createClass(ArrayUniform, [{
	        key: '_update',
	        value: function _update(loc) {
	            var type = this.type === Constants_1.default.UniformType.INT ? 'iv' : 'fv';
	            var buffer = null;
	            if (this.type === Constants_1.default.UniformType.INT) {
	                buffer = new Int32Array(this.buffer);
	            }
	            if (this.type === Constants_1.default.UniformType.FLOAT) {
	                buffer = new Float32Array(this.buffer);
	            }
	            gl_1.default['uniform' + this.size + type](loc, buffer);
	        }
	    }, {
	        key: 'set',
	        value: function set(index) {
	            for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                data[_key - 1] = arguments[_key];
	            }
	
	            if (data.length > this.size) {
	                throw new Error('This attribute is for ' + this.size + '-number sized uniform');
	            }
	            for (var i = 0; i < data.length; i++) {
	                this.buffer[index * this.size + i] = data[i];
	            }
	            this.updated = true;
	        }
	    }]);
	
	    return ArrayUniform;
	}(AbstractUniform_1.default);
	
	ArrayUniform.INT = Constants_1.default.UniformType.INT;
	ArrayUniform.FLOAT = Constants_1.default.UniformType.FLOAT;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ArrayUniform;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var opentype = __webpack_require__(51);
	function toNearestBase(n, e) {
	    return Math.pow(e, Math.ceil(Math.log(n) / Math.log(e)));
	}
	var CHARS = [];
	for (var i = 0x21; i < 0x7f; i++) {
	    CHARS.push(String.fromCharCode(i));
	}
	
	var Font = function () {
	    function Font() {
	        _classCallCheck(this, Font);
	    }
	
	    _createClass(Font, [{
	        key: 'getText',
	        value: function getText() {
	            var result = [];
	
	            for (var _len = arguments.length, charCodes = Array(_len), _key = 0; _key < _len; _key++) {
	                charCodes[_key] = arguments[_key];
	            }
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = charCodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var charCode = _step.value;
	
	                    var m = this.manifest[charCode];
	                    result.push(m);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return result;
	        }
	    }, {
	        key: 'width',
	        get: function get() {
	            return this._width;
	        }
	    }, {
	        key: 'height',
	        get: function get() {
	            return this._height;
	        }
	    }, {
	        key: 'heightRatio',
	        get: function get() {
	            return this._heightRatio;
	        }
	    }, {
	        key: 'widthRatio',
	        get: function get() {
	            return this._widthRatio;
	        }
	    }, {
	        key: 'image',
	        get: function get() {
	            return this.canvas;
	        }
	    }], [{
	        key: 'loadFont',
	        value: function loadFont(fontFile, fontSize) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                return _context.abrupt('return', new Promise(function (resolve, reject) {
	                                    opentype.load(fontFile, function (err, font) {
	                                        if (err) return reject(err);
	                                        var charStrokes = [];
	                                        var canvasWidth = 0;
	                                        var canvasHeight = 0;
	                                        var maxStrokeY = 0;
	                                        var minStrokeY = 0;
	                                        var spaceWidth = Infinity;
	                                        var _iteratorNormalCompletion2 = true;
	                                        var _didIteratorError2 = false;
	                                        var _iteratorError2 = undefined;
	
	                                        try {
	                                            for (var _iterator2 = CHARS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                                var char = _step2.value;
	
	                                                var stroke = {
	                                                    code: char.charCodeAt(0),
	                                                    path: font.getPath(char, 0, 0).commands,
	                                                    width: 0
	                                                };
	                                                var maxX = 0;
	                                                var minX = 0;
	                                                var _iteratorNormalCompletion4 = true;
	                                                var _didIteratorError4 = false;
	                                                var _iteratorError4 = undefined;
	
	                                                try {
	                                                    for (var _iterator4 = stroke.path[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                                        var path = _step4.value;
	
	                                                        switch (path.type) {
	                                                            case 'M':
	                                                            case 'L':
	                                                                maxStrokeY = Math.max(path.y, maxStrokeY);
	                                                                minStrokeY = Math.min(path.y, minStrokeY);
	                                                                maxX = Math.max(path.x, maxX);
	                                                                minX = Math.min(path.x, minX);
	                                                                break;
	                                                            case 'C':
	                                                                maxStrokeY = Math.max(path.y, path.y1, path.y2, maxStrokeY);
	                                                                minStrokeY = Math.min(path.y, path.y1, path.y2, minStrokeY);
	                                                                maxX = Math.max(path.x, path.x1, path.x2, maxX);
	                                                                minX = Math.min(path.x, path.x1, path.x2, minX);
	                                                                break;
	                                                            case 'Q':
	                                                                maxStrokeY = Math.max(path.y, path.y1, maxStrokeY);
	                                                                minStrokeY = Math.min(path.y, path.y1, minStrokeY);
	                                                                maxX = Math.max(path.x, path.x1, maxX);
	                                                                minX = Math.min(path.x, path.x1, minX);
	                                                                break;
	                                                        }
	                                                    }
	                                                } catch (err) {
	                                                    _didIteratorError4 = true;
	                                                    _iteratorError4 = err;
	                                                } finally {
	                                                    try {
	                                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                                                            _iterator4.return();
	                                                        }
	                                                    } finally {
	                                                        if (_didIteratorError4) {
	                                                            throw _iteratorError4;
	                                                        }
	                                                    }
	                                                }
	
	                                                stroke.width = maxX - minX + 1;
	                                                canvasWidth += stroke.width;
	                                                spaceWidth = Math.min(spaceWidth, stroke.width);
	                                                charStrokes.push(stroke);
	                                            }
	                                        } catch (err) {
	                                            _didIteratorError2 = true;
	                                            _iteratorError2 = err;
	                                        } finally {
	                                            try {
	                                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                                    _iterator2.return();
	                                                }
	                                            } finally {
	                                                if (_didIteratorError2) {
	                                                    throw _iteratorError2;
	                                                }
	                                            }
	                                        }
	
	                                        charStrokes.unshift({
	                                            code: 0x20,
	                                            path: [],
	                                            width: spaceWidth
	                                        });
	                                        canvasHeight = maxStrokeY - minStrokeY;
	                                        var canvas = document.createElement('canvas');
	                                        canvas.height = toNearestBase(Math.ceil(canvasHeight), 2);
	                                        canvas.width = toNearestBase(Math.ceil(canvasWidth), 2);
	                                        var context = canvas.getContext('2d');
	                                        var manifest = {};
	                                        var cursorX = 0;
	                                        var _iteratorNormalCompletion3 = true;
	                                        var _didIteratorError3 = false;
	                                        var _iteratorError3 = undefined;
	
	                                        try {
	                                            for (var _iterator3 = charStrokes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                                var _stroke = _step3.value;
	
	                                                manifest[_stroke.code] = [cursorX / canvas.width, (cursorX + _stroke.width) / canvas.width];
	                                                var _iteratorNormalCompletion5 = true;
	                                                var _didIteratorError5 = false;
	                                                var _iteratorError5 = undefined;
	
	                                                try {
	                                                    for (var _iterator5 = _stroke.path[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                                        var _path = _step5.value;
	                                                        var x = _path.x,
	                                                            y = _path.y,
	                                                            x1 = _path.x1,
	                                                            y1 = _path.y1,
	                                                            x2 = _path.x2,
	                                                            y2 = _path.y2,
	                                                            type = _path.type;
	
	                                                        switch (type) {
	                                                            case 'M':
	                                                                context.moveTo(x + cursorX, y - minStrokeY);
	                                                                break;
	                                                            case 'L':
	                                                                context.lineTo(x + cursorX, y - minStrokeY);
	                                                                break;
	                                                            case 'C':
	                                                                context.bezierCurveTo(x1 + cursorX, y1 - minStrokeY, x2 + cursorX, y2 - minStrokeY, x + cursorX, y - minStrokeY);
	                                                                break;
	                                                            case 'Q':
	                                                                context.quadraticCurveTo(x1 + cursorX, y1 - minStrokeY, x + cursorX, y - minStrokeY);
	                                                                break;
	                                                            case 'Z':
	                                                                context.closePath();
	                                                                break;
	                                                        }
	                                                    }
	                                                } catch (err) {
	                                                    _didIteratorError5 = true;
	                                                    _iteratorError5 = err;
	                                                } finally {
	                                                    try {
	                                                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                                            _iterator5.return();
	                                                        }
	                                                    } finally {
	                                                        if (_didIteratorError5) {
	                                                            throw _iteratorError5;
	                                                        }
	                                                    }
	                                                }
	
	                                                cursorX += _stroke.width;
	                                            }
	                                        } catch (err) {
	                                            _didIteratorError3 = true;
	                                            _iteratorError3 = err;
	                                        } finally {
	                                            try {
	                                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                                    _iterator3.return();
	                                                }
	                                            } finally {
	                                                if (_didIteratorError3) {
	                                                    throw _iteratorError3;
	                                                }
	                                            }
	                                        }
	
	                                        context.fillStyle = '#fff';
	                                        context.fill();
	                                        var f = new Font();
	                                        f.canvas = canvas;
	                                        f.manifest = manifest;
	                                        f._width = canvasWidth;
	                                        f._height = canvasHeight;
	                                        f._heightRatio = canvasHeight / canvas.height;
	                                        f._widthRatio = canvasWidth / canvas.width;
	                                        resolve(f);
	                                    });
	                                }));
	
	                            case 1:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);
	
	    return Font;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Font;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// opentype.js
	// https://github.com/nodebox/opentype.js
	// (c) 2015 Frederik De Bleser
	// opentype.js may be freely distributed under the MIT license.
	
	/* global DataView, Uint8Array, XMLHttpRequest  */
	
	'use strict';
	
	var inflate = __webpack_require__(52);
	
	var encoding = __webpack_require__(53);
	var _font = __webpack_require__(54);
	var glyph = __webpack_require__(64);
	var parse = __webpack_require__(61);
	var path = __webpack_require__(55);
	var util = __webpack_require__(78);
	
	var cmap = __webpack_require__(60);
	var cff = __webpack_require__(62);
	var fvar = __webpack_require__(84);
	var glyf = __webpack_require__(85);
	var gpos = __webpack_require__(86);
	var gsub = __webpack_require__(74);
	var head = __webpack_require__(66);
	var hhea = __webpack_require__(67);
	var hmtx = __webpack_require__(68);
	var kern = __webpack_require__(87);
	var ltag = __webpack_require__(69);
	var loca = __webpack_require__(88);
	var maxp = __webpack_require__(70);
	var _name = __webpack_require__(71);
	var os2 = __webpack_require__(72);
	var post = __webpack_require__(73);
	var meta = __webpack_require__(75);
	
	/**
	 * The opentype library.
	 * @namespace opentype
	 */
	
	// File loaders /////////////////////////////////////////////////////////
	/**
	 * Loads a font from a file. The callback throws an error message as the first parameter if it fails
	 * and the font as an ArrayBuffer in the second parameter if it succeeds.
	 * @param  {string} path - The path of the file
	 * @param  {Function} callback - The function to call when the font load completes
	 */
	function loadFromFile(path, callback) {
	    var fs = __webpack_require__(83);
	    fs.readFile(path, function(err, buffer) {
	        if (err) {
	            return callback(err.message);
	        }
	
	        callback(null, util.nodeBufferToArrayBuffer(buffer));
	    });
	}
	/**
	 * Loads a font from a URL. The callback throws an error message as the first parameter if it fails
	 * and the font as an ArrayBuffer in the second parameter if it succeeds.
	 * @param  {string} url - The URL of the font file.
	 * @param  {Function} callback - The function to call when the font load completes
	 */
	function loadFromUrl(url, callback) {
	    var request = new XMLHttpRequest();
	    request.open('get', url, true);
	    request.responseType = 'arraybuffer';
	    request.onload = function() {
	        if (request.status !== 200) {
	            return callback('Font could not be loaded: ' + request.statusText);
	        }
	
	        return callback(null, request.response);
	    };
	
	    request.send();
	}
	
	// Table Directory Entries //////////////////////////////////////////////
	/**
	 * Parses OpenType table entries.
	 * @param  {DataView}
	 * @param  {Number}
	 * @return {Object[]}
	 */
	function parseOpenTypeTableEntries(data, numTables) {
	    var tableEntries = [];
	    var p = 12;
	    for (var i = 0; i < numTables; i += 1) {
	        var tag = parse.getTag(data, p);
	        var checksum = parse.getULong(data, p + 4);
	        var offset = parse.getULong(data, p + 8);
	        var length = parse.getULong(data, p + 12);
	        tableEntries.push({tag: tag, checksum: checksum, offset: offset, length: length, compression: false});
	        p += 16;
	    }
	
	    return tableEntries;
	}
	
	/**
	 * Parses WOFF table entries.
	 * @param  {DataView}
	 * @param  {Number}
	 * @return {Object[]}
	 */
	function parseWOFFTableEntries(data, numTables) {
	    var tableEntries = [];
	    var p = 44; // offset to the first table directory entry.
	    for (var i = 0; i < numTables; i += 1) {
	        var tag = parse.getTag(data, p);
	        var offset = parse.getULong(data, p + 4);
	        var compLength = parse.getULong(data, p + 8);
	        var origLength = parse.getULong(data, p + 12);
	        var compression;
	        if (compLength < origLength) {
	            compression = 'WOFF';
	        } else {
	            compression = false;
	        }
	
	        tableEntries.push({tag: tag, offset: offset, compression: compression,
	            compressedLength: compLength, originalLength: origLength});
	        p += 20;
	    }
	
	    return tableEntries;
	}
	
	/**
	 * @typedef TableData
	 * @type Object
	 * @property {DataView} data - The DataView
	 * @property {number} offset - The data offset.
	 */
	
	/**
	 * @param  {DataView}
	 * @param  {Object}
	 * @return {TableData}
	 */
	function uncompressTable(data, tableEntry) {
	    if (tableEntry.compression === 'WOFF') {
	        var inBuffer = new Uint8Array(data.buffer, tableEntry.offset + 2, tableEntry.compressedLength - 2);
	        var outBuffer = new Uint8Array(tableEntry.originalLength);
	        inflate(inBuffer, outBuffer);
	        if (outBuffer.byteLength !== tableEntry.originalLength) {
	            throw new Error('Decompression error: ' + tableEntry.tag + ' decompressed length doesn\'t match recorded length');
	        }
	
	        var view = new DataView(outBuffer.buffer, 0);
	        return {data: view, offset: 0};
	    } else {
	        return {data: data, offset: tableEntry.offset};
	    }
	}
	
	// Public API ///////////////////////////////////////////////////////////
	
	/**
	 * Parse the OpenType file data (as an ArrayBuffer) and return a Font object.
	 * Throws an error if the font could not be parsed.
	 * @param  {ArrayBuffer}
	 * @return {opentype.Font}
	 */
	function parseBuffer(buffer) {
	    var indexToLocFormat;
	    var ltagTable;
	
	    // Since the constructor can also be called to create new fonts from scratch, we indicate this
	    // should be an empty font that we'll fill with our own data.
	    var font = new _font.Font({empty: true});
	
	    // OpenType fonts use big endian byte ordering.
	    // We can't rely on typed array view types, because they operate with the endianness of the host computer.
	    // Instead we use DataViews where we can specify endianness.
	    var data = new DataView(buffer, 0);
	    var numTables;
	    var tableEntries = [];
	    var signature = parse.getTag(data, 0);
	    if (signature === String.fromCharCode(0, 1, 0, 0)) {
	        font.outlinesFormat = 'truetype';
	        numTables = parse.getUShort(data, 4);
	        tableEntries = parseOpenTypeTableEntries(data, numTables);
	    } else if (signature === 'OTTO') {
	        font.outlinesFormat = 'cff';
	        numTables = parse.getUShort(data, 4);
	        tableEntries = parseOpenTypeTableEntries(data, numTables);
	    } else if (signature === 'wOFF') {
	        var flavor = parse.getTag(data, 4);
	        if (flavor === String.fromCharCode(0, 1, 0, 0)) {
	            font.outlinesFormat = 'truetype';
	        } else if (flavor === 'OTTO') {
	            font.outlinesFormat = 'cff';
	        } else {
	            throw new Error('Unsupported OpenType flavor ' + signature);
	        }
	
	        numTables = parse.getUShort(data, 12);
	        tableEntries = parseWOFFTableEntries(data, numTables);
	    } else {
	        throw new Error('Unsupported OpenType signature ' + signature);
	    }
	
	    var cffTableEntry;
	    var fvarTableEntry;
	    var glyfTableEntry;
	    var gposTableEntry;
	    var gsubTableEntry;
	    var hmtxTableEntry;
	    var kernTableEntry;
	    var locaTableEntry;
	    var nameTableEntry;
	    var metaTableEntry;
	
	    for (var i = 0; i < numTables; i += 1) {
	        var tableEntry = tableEntries[i];
	        var table;
	        switch (tableEntry.tag) {
	            case 'cmap':
	                table = uncompressTable(data, tableEntry);
	                font.tables.cmap = cmap.parse(table.data, table.offset);
	                font.encoding = new encoding.CmapEncoding(font.tables.cmap);
	                break;
	            case 'fvar':
	                fvarTableEntry = tableEntry;
	                break;
	            case 'head':
	                table = uncompressTable(data, tableEntry);
	                font.tables.head = head.parse(table.data, table.offset);
	                font.unitsPerEm = font.tables.head.unitsPerEm;
	                indexToLocFormat = font.tables.head.indexToLocFormat;
	                break;
	            case 'hhea':
	                table = uncompressTable(data, tableEntry);
	                font.tables.hhea = hhea.parse(table.data, table.offset);
	                font.ascender = font.tables.hhea.ascender;
	                font.descender = font.tables.hhea.descender;
	                font.numberOfHMetrics = font.tables.hhea.numberOfHMetrics;
	                break;
	            case 'hmtx':
	                hmtxTableEntry = tableEntry;
	                break;
	            case 'ltag':
	                table = uncompressTable(data, tableEntry);
	                ltagTable = ltag.parse(table.data, table.offset);
	                break;
	            case 'maxp':
	                table = uncompressTable(data, tableEntry);
	                font.tables.maxp = maxp.parse(table.data, table.offset);
	                font.numGlyphs = font.tables.maxp.numGlyphs;
	                break;
	            case 'name':
	                nameTableEntry = tableEntry;
	                break;
	            case 'OS/2':
	                table = uncompressTable(data, tableEntry);
	                font.tables.os2 = os2.parse(table.data, table.offset);
	                break;
	            case 'post':
	                table = uncompressTable(data, tableEntry);
	                font.tables.post = post.parse(table.data, table.offset);
	                font.glyphNames = new encoding.GlyphNames(font.tables.post);
	                break;
	            case 'glyf':
	                glyfTableEntry = tableEntry;
	                break;
	            case 'loca':
	                locaTableEntry = tableEntry;
	                break;
	            case 'CFF ':
	                cffTableEntry = tableEntry;
	                break;
	            case 'kern':
	                kernTableEntry = tableEntry;
	                break;
	            case 'GPOS':
	                gposTableEntry = tableEntry;
	                break;
	            case 'GSUB':
	                gsubTableEntry = tableEntry;
	                break;
	            case 'meta':
	                metaTableEntry = tableEntry;
	                break;
	        }
	    }
	
	    var nameTable = uncompressTable(data, nameTableEntry);
	    font.tables.name = _name.parse(nameTable.data, nameTable.offset, ltagTable);
	    font.names = font.tables.name;
	
	    if (glyfTableEntry && locaTableEntry) {
	        var shortVersion = indexToLocFormat === 0;
	        var locaTable = uncompressTable(data, locaTableEntry);
	        var locaOffsets = loca.parse(locaTable.data, locaTable.offset, font.numGlyphs, shortVersion);
	        var glyfTable = uncompressTable(data, glyfTableEntry);
	        font.glyphs = glyf.parse(glyfTable.data, glyfTable.offset, locaOffsets, font);
	    } else if (cffTableEntry) {
	        var cffTable = uncompressTable(data, cffTableEntry);
	        cff.parse(cffTable.data, cffTable.offset, font);
	    } else {
	        throw new Error('Font doesn\'t contain TrueType or CFF outlines.');
	    }
	
	    var hmtxTable = uncompressTable(data, hmtxTableEntry);
	    hmtx.parse(hmtxTable.data, hmtxTable.offset, font.numberOfHMetrics, font.numGlyphs, font.glyphs);
	    encoding.addGlyphNames(font);
	
	    if (kernTableEntry) {
	        var kernTable = uncompressTable(data, kernTableEntry);
	        font.kerningPairs = kern.parse(kernTable.data, kernTable.offset);
	    } else {
	        font.kerningPairs = {};
	    }
	
	    if (gposTableEntry) {
	        var gposTable = uncompressTable(data, gposTableEntry);
	        gpos.parse(gposTable.data, gposTable.offset, font);
	    }
	
	    if (gsubTableEntry) {
	        var gsubTable = uncompressTable(data, gsubTableEntry);
	        font.tables.gsub = gsub.parse(gsubTable.data, gsubTable.offset);
	    }
	
	    if (fvarTableEntry) {
	        var fvarTable = uncompressTable(data, fvarTableEntry);
	        font.tables.fvar = fvar.parse(fvarTable.data, fvarTable.offset, font.names);
	    }
	
	    if (metaTableEntry) {
	        var metaTable = uncompressTable(data, metaTableEntry);
	        font.tables.meta = meta.parse(metaTable.data, metaTable.offset);
	        font.metas = font.tables.meta;
	    }
	
	    return font;
	}
	
	/**
	 * Asynchronously load the font from a URL or a filesystem. When done, call the callback
	 * with two arguments `(err, font)`. The `err` will be null on success,
	 * the `font` is a Font object.
	 * We use the node.js callback convention so that
	 * opentype.js can integrate with frameworks like async.js.
	 * @alias opentype.load
	 * @param  {string} url - The URL of the font to load.
	 * @param  {Function} callback - The callback.
	 */
	function load(url, callback) {
	    var isNode = typeof window === 'undefined';
	    var loadFn = isNode ? loadFromFile : loadFromUrl;
	    loadFn(url, function(err, arrayBuffer) {
	        if (err) {
	            return callback(err);
	        }
	        var font;
	        try {
	            font = parseBuffer(arrayBuffer);
	        } catch (e) {
	            return callback(e, null);
	        }
	        return callback(null, font);
	    });
	}
	
	/**
	 * Synchronously load the font from a URL or file.
	 * When done, returns the font object or throws an error.
	 * @alias opentype.loadSync
	 * @param  {string} url - The URL of the font to load.
	 * @return {opentype.Font}
	 */
	function loadSync(url) {
	    var fs = __webpack_require__(83);
	    var buffer = fs.readFileSync(url);
	    return parseBuffer(util.nodeBufferToArrayBuffer(buffer));
	}
	
	exports._parse = parse;
	exports.Font = _font.Font;
	exports.Glyph = glyph.Glyph;
	exports.Path = path.Path;
	exports.parse = parseBuffer;
	exports.load = load;
	exports.loadSync = loadSync;


/***/ },
/* 52 */
/***/ function(module, exports) {

	var TINF_OK = 0;
	var TINF_DATA_ERROR = -3;
	
	function Tree() {
	  this.table = new Uint16Array(16);   /* table of code length counts */
	  this.trans = new Uint16Array(288);  /* code -> symbol translation table */
	}
	
	function Data(source, dest) {
	  this.source = source;
	  this.sourceIndex = 0;
	  this.tag = 0;
	  this.bitcount = 0;
	  
	  this.dest = dest;
	  this.destLen = 0;
	  
	  this.ltree = new Tree();  /* dynamic length/symbol tree */
	  this.dtree = new Tree();  /* dynamic distance tree */
	}
	
	/* --------------------------------------------------- *
	 * -- uninitialized global data (static structures) -- *
	 * --------------------------------------------------- */
	
	var sltree = new Tree();
	var sdtree = new Tree();
	
	/* extra bits and base tables for length codes */
	var length_bits = new Uint8Array(30);
	var length_base = new Uint16Array(30);
	
	/* extra bits and base tables for distance codes */
	var dist_bits = new Uint8Array(30);
	var dist_base = new Uint16Array(30);
	
	/* special ordering of code length codes */
	var clcidx = new Uint8Array([
	  16, 17, 18, 0, 8, 7, 9, 6,
	  10, 5, 11, 4, 12, 3, 13, 2,
	  14, 1, 15
	]);
	
	/* used by tinf_decode_trees, avoids allocations every call */
	var code_tree = new Tree();
	var lengths = new Uint8Array(288 + 32);
	
	/* ----------------------- *
	 * -- utility functions -- *
	 * ----------------------- */
	
	/* build extra bits and base tables */
	function tinf_build_bits_base(bits, base, delta, first) {
	  var i, sum;
	
	  /* build bits table */
	  for (i = 0; i < delta; ++i) bits[i] = 0;
	  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = i / delta | 0;
	
	  /* build base table */
	  for (sum = first, i = 0; i < 30; ++i) {
	    base[i] = sum;
	    sum += 1 << bits[i];
	  }
	}
	
	/* build the fixed huffman trees */
	function tinf_build_fixed_trees(lt, dt) {
	  var i;
	
	  /* build fixed length tree */
	  for (i = 0; i < 7; ++i) lt.table[i] = 0;
	
	  lt.table[7] = 24;
	  lt.table[8] = 152;
	  lt.table[9] = 112;
	
	  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
	  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
	  for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
	  for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;
	
	  /* build fixed distance tree */
	  for (i = 0; i < 5; ++i) dt.table[i] = 0;
	
	  dt.table[5] = 32;
	
	  for (i = 0; i < 32; ++i) dt.trans[i] = i;
	}
	
	/* given an array of code lengths, build a tree */
	var offs = new Uint16Array(16);
	
	function tinf_build_tree(t, lengths, off, num) {
	  var i, sum;
	
	  /* clear code length count table */
	  for (i = 0; i < 16; ++i) t.table[i] = 0;
	
	  /* scan symbol lengths, and sum code length counts */
	  for (i = 0; i < num; ++i) t.table[lengths[off + i]]++;
	
	  t.table[0] = 0;
	
	  /* compute offset table for distribution sort */
	  for (sum = 0, i = 0; i < 16; ++i) {
	    offs[i] = sum;
	    sum += t.table[i];
	  }
	
	  /* create code->symbol translation table (symbols sorted by code) */
	  for (i = 0; i < num; ++i) {
	    if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
	  }
	}
	
	/* ---------------------- *
	 * -- decode functions -- *
	 * ---------------------- */
	
	/* get one bit from source stream */
	function tinf_getbit(d) {
	  /* check if tag is empty */
	  if (!d.bitcount--) {
	    /* load next tag */
	    d.tag = d.source[d.sourceIndex++];
	    d.bitcount = 7;
	  }
	
	  /* shift bit out of tag */
	  var bit = d.tag & 1;
	  d.tag >>>= 1;
	
	  return bit;
	}
	
	/* read a num bit value from a stream and add base */
	function tinf_read_bits(d, num, base) {
	  if (!num)
	    return base;
	
	  while (d.bitcount < 24) {
	    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
	    d.bitcount += 8;
	  }
	
	  var val = d.tag & (0xffff >>> (16 - num));
	  d.tag >>>= num;
	  d.bitcount -= num;
	  return val + base;
	}
	
	/* given a data stream and a tree, decode a symbol */
	function tinf_decode_symbol(d, t) {
	  while (d.bitcount < 24) {
	    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
	    d.bitcount += 8;
	  }
	  
	  var sum = 0, cur = 0, len = 0;
	  var tag = d.tag;
	
	  /* get more bits while code value is above sum */
	  do {
	    cur = 2 * cur + (tag & 1);
	    tag >>>= 1;
	    ++len;
	
	    sum += t.table[len];
	    cur -= t.table[len];
	  } while (cur >= 0);
	  
	  d.tag = tag;
	  d.bitcount -= len;
	
	  return t.trans[sum + cur];
	}
	
	/* given a data stream, decode dynamic trees from it */
	function tinf_decode_trees(d, lt, dt) {
	  var hlit, hdist, hclen;
	  var i, num, length;
	
	  /* get 5 bits HLIT (257-286) */
	  hlit = tinf_read_bits(d, 5, 257);
	
	  /* get 5 bits HDIST (1-32) */
	  hdist = tinf_read_bits(d, 5, 1);
	
	  /* get 4 bits HCLEN (4-19) */
	  hclen = tinf_read_bits(d, 4, 4);
	
	  for (i = 0; i < 19; ++i) lengths[i] = 0;
	
	  /* read code lengths for code length alphabet */
	  for (i = 0; i < hclen; ++i) {
	    /* get 3 bits code length (0-7) */
	    var clen = tinf_read_bits(d, 3, 0);
	    lengths[clcidx[i]] = clen;
	  }
	
	  /* build code length tree */
	  tinf_build_tree(code_tree, lengths, 0, 19);
	
	  /* decode code lengths for the dynamic trees */
	  for (num = 0; num < hlit + hdist;) {
	    var sym = tinf_decode_symbol(d, code_tree);
	
	    switch (sym) {
	      case 16:
	        /* copy previous code length 3-6 times (read 2 bits) */
	        var prev = lengths[num - 1];
	        for (length = tinf_read_bits(d, 2, 3); length; --length) {
	          lengths[num++] = prev;
	        }
	        break;
	      case 17:
	        /* repeat code length 0 for 3-10 times (read 3 bits) */
	        for (length = tinf_read_bits(d, 3, 3); length; --length) {
	          lengths[num++] = 0;
	        }
	        break;
	      case 18:
	        /* repeat code length 0 for 11-138 times (read 7 bits) */
	        for (length = tinf_read_bits(d, 7, 11); length; --length) {
	          lengths[num++] = 0;
	        }
	        break;
	      default:
	        /* values 0-15 represent the actual code lengths */
	        lengths[num++] = sym;
	        break;
	    }
	  }
	
	  /* build dynamic trees */
	  tinf_build_tree(lt, lengths, 0, hlit);
	  tinf_build_tree(dt, lengths, hlit, hdist);
	}
	
	/* ----------------------------- *
	 * -- block inflate functions -- *
	 * ----------------------------- */
	
	/* given a stream and two trees, inflate a block of data */
	function tinf_inflate_block_data(d, lt, dt) {
	  while (1) {
	    var sym = tinf_decode_symbol(d, lt);
	
	    /* check for end of block */
	    if (sym === 256) {
	      return TINF_OK;
	    }
	
	    if (sym < 256) {
	      d.dest[d.destLen++] = sym;
	    } else {
	      var length, dist, offs;
	      var i;
	
	      sym -= 257;
	
	      /* possibly get more bits from length code */
	      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);
	
	      dist = tinf_decode_symbol(d, dt);
	
	      /* possibly get more bits from distance code */
	      offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);
	
	      /* copy match */
	      for (i = offs; i < offs + length; ++i) {
	        d.dest[d.destLen++] = d.dest[i];
	      }
	    }
	  }
	}
	
	/* inflate an uncompressed block of data */
	function tinf_inflate_uncompressed_block(d) {
	  var length, invlength;
	  var i;
	  
	  /* unread from bitbuffer */
	  while (d.bitcount > 8) {
	    d.sourceIndex--;
	    d.bitcount -= 8;
	  }
	
	  /* get length */
	  length = d.source[d.sourceIndex + 1];
	  length = 256 * length + d.source[d.sourceIndex];
	
	  /* get one's complement of length */
	  invlength = d.source[d.sourceIndex + 3];
	  invlength = 256 * invlength + d.source[d.sourceIndex + 2];
	
	  /* check length */
	  if (length !== (~invlength & 0x0000ffff))
	    return TINF_DATA_ERROR;
	
	  d.sourceIndex += 4;
	
	  /* copy block */
	  for (i = length; i; --i)
	    d.dest[d.destLen++] = d.source[d.sourceIndex++];
	
	  /* make sure we start next block on a byte boundary */
	  d.bitcount = 0;
	
	  return TINF_OK;
	}
	
	/* inflate stream from source to dest */
	function tinf_uncompress(source, dest) {
	  var d = new Data(source, dest);
	  var bfinal, btype, res;
	
	  do {
	    /* read final block flag */
	    bfinal = tinf_getbit(d);
	
	    /* read block type (2 bits) */
	    btype = tinf_read_bits(d, 2, 0);
	
	    /* decompress block */
	    switch (btype) {
	      case 0:
	        /* decompress uncompressed block */
	        res = tinf_inflate_uncompressed_block(d);
	        break;
	      case 1:
	        /* decompress block with fixed huffman trees */
	        res = tinf_inflate_block_data(d, sltree, sdtree);
	        break;
	      case 2:
	        /* decompress block with dynamic huffman trees */
	        tinf_decode_trees(d, d.ltree, d.dtree);
	        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
	        break;
	      default:
	        res = TINF_DATA_ERROR;
	    }
	
	    if (res !== TINF_OK)
	      throw new Error('Data error');
	
	  } while (!bfinal);
	
	  if (d.destLen < d.dest.length) {
	    if (typeof d.dest.slice === 'function')
	      return d.dest.slice(0, d.destLen);
	    else
	      return d.dest.subarray(0, d.destLen);
	  }
	  
	  return d.dest;
	}
	
	/* -------------------- *
	 * -- initialization -- *
	 * -------------------- */
	
	/* build fixed huffman trees */
	tinf_build_fixed_trees(sltree, sdtree);
	
	/* build extra bits and base tables */
	tinf_build_bits_base(length_bits, length_base, 4, 3);
	tinf_build_bits_base(dist_bits, dist_base, 2, 1);
	
	/* fix a special case */
	length_bits[28] = 0;
	length_base[28] = 258;
	
	module.exports = tinf_uncompress;


/***/ },
/* 53 */
/***/ function(module, exports) {

	// Glyph encoding
	
	'use strict';
	
	var cffStandardStrings = [
	    '.notdef', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright',
	    'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two',
	    'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater',
	    'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
	    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore',
	    'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	    'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', 'exclamdown', 'cent', 'sterling',
	    'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle', 'quotedblleft', 'guillemotleft',
	    'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'endash', 'dagger', 'daggerdbl', 'periodcentered', 'paragraph',
	    'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright', 'guillemotright', 'ellipsis', 'perthousand',
	    'questiondown', 'grave', 'acute', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'dieresis', 'ring',
	    'cedilla', 'hungarumlaut', 'ogonek', 'caron', 'emdash', 'AE', 'ordfeminine', 'Lslash', 'Oslash', 'OE',
	    'ordmasculine', 'ae', 'dotlessi', 'lslash', 'oslash', 'oe', 'germandbls', 'onesuperior', 'logicalnot', 'mu',
	    'trademark', 'Eth', 'onehalf', 'plusminus', 'Thorn', 'onequarter', 'divide', 'brokenbar', 'degree', 'thorn',
	    'threequarters', 'twosuperior', 'registered', 'minus', 'eth', 'multiply', 'threesuperior', 'copyright',
	    'Aacute', 'Acircumflex', 'Adieresis', 'Agrave', 'Aring', 'Atilde', 'Ccedilla', 'Eacute', 'Ecircumflex',
	    'Edieresis', 'Egrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Igrave', 'Ntilde', 'Oacute', 'Ocircumflex',
	    'Odieresis', 'Ograve', 'Otilde', 'Scaron', 'Uacute', 'Ucircumflex', 'Udieresis', 'Ugrave', 'Yacute',
	    'Ydieresis', 'Zcaron', 'aacute', 'acircumflex', 'adieresis', 'agrave', 'aring', 'atilde', 'ccedilla', 'eacute',
	    'ecircumflex', 'edieresis', 'egrave', 'iacute', 'icircumflex', 'idieresis', 'igrave', 'ntilde', 'oacute',
	    'ocircumflex', 'odieresis', 'ograve', 'otilde', 'scaron', 'uacute', 'ucircumflex', 'udieresis', 'ugrave',
	    'yacute', 'ydieresis', 'zcaron', 'exclamsmall', 'Hungarumlautsmall', 'dollaroldstyle', 'dollarsuperior',
	    'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', '266 ff', 'onedotenleader',
	    'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle', 'sixoldstyle',
	    'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'commasuperior', 'threequartersemdash', 'periodsuperior',
	    'questionsmall', 'asuperior', 'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', 'isuperior', 'lsuperior',
	    'msuperior', 'nsuperior', 'osuperior', 'rsuperior', 'ssuperior', 'tsuperior', 'ff', 'ffi', 'ffl',
	    'parenleftinferior', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall',
	    'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall',
	    'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall',
	    'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', 'exclamdownsmall',
	    'centoldstyle', 'Lslashsmall', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall', 'Brevesmall', 'Caronsmall',
	    'Dotaccentsmall', 'Macronsmall', 'figuredash', 'hypheninferior', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall',
	    'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds',
	    'zerosuperior', 'foursuperior', 'fivesuperior', 'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior',
	    'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior',
	    'seveninferior', 'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior',
	    'commainferior', 'Agravesmall', 'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall',
	    'Aringsmall', 'AEsmall', 'Ccedillasmall', 'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall',
	    'Igravesmall', 'Iacutesmall', 'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall',
	    'Oacutesmall', 'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall',
	    'Uacutesmall', 'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall', '001.000',
	    '001.001', '001.002', '001.003', 'Black', 'Bold', 'Book', 'Light', 'Medium', 'Regular', 'Roman', 'Semibold'];
	
	var cffStandardEncoding = [
	    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	    '', '', '', '', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright',
	    'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two',
	    'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater',
	    'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
	    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore',
	    'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
	    'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', '', '', '', '', '', '', '', '',
	    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	    'exclamdown', 'cent', 'sterling', 'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle',
	    'quotedblleft', 'guillemotleft', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', '', 'endash', 'dagger',
	    'daggerdbl', 'periodcentered', '', 'paragraph', 'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright',
	    'guillemotright', 'ellipsis', 'perthousand', '', 'questiondown', '', 'grave', 'acute', 'circumflex', 'tilde',
	    'macron', 'breve', 'dotaccent', 'dieresis', '', 'ring', 'cedilla', '', 'hungarumlaut', 'ogonek', 'caron',
	    'emdash', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'AE', '', 'ordfeminine', '', '', '',
	    '', 'Lslash', 'Oslash', 'OE', 'ordmasculine', '', '', '', '', '', 'ae', '', '', '', 'dotlessi', '', '',
	    'lslash', 'oslash', 'oe', 'germandbls'];
	
	var cffExpertEncoding = [
	    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	    '', '', '', '', 'space', 'exclamsmall', 'Hungarumlautsmall', '', 'dollaroldstyle', 'dollarsuperior',
	    'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', 'twodotenleader', 'onedotenleader',
	    'comma', 'hyphen', 'period', 'fraction', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle',
	    'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'colon',
	    'semicolon', 'commasuperior', 'threequartersemdash', 'periodsuperior', 'questionsmall', '', 'asuperior',
	    'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', '', '', 'isuperior', '', '', 'lsuperior', 'msuperior',
	    'nsuperior', 'osuperior', '', '', 'rsuperior', 'ssuperior', 'tsuperior', '', 'ff', 'fi', 'fl', 'ffi', 'ffl',
	    'parenleftinferior', '', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall',
	    'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall',
	    'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall',
	    'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', '', '', '', '', '', '', '',
	    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
	    'exclamdownsmall', 'centoldstyle', 'Lslashsmall', '', '', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall',
	    'Brevesmall', 'Caronsmall', '', 'Dotaccentsmall', '', '', 'Macronsmall', '', '', 'figuredash', 'hypheninferior',
	    '', '', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall', '', '', '', 'onequarter', 'onehalf', 'threequarters',
	    'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', '',
	    '', 'zerosuperior', 'onesuperior', 'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior',
	    'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior', 'zeroinferior', 'oneinferior', 'twoinferior',
	    'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior', 'eightinferior',
	    'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior', 'commainferior', 'Agravesmall',
	    'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall', 'AEsmall', 'Ccedillasmall',
	    'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall',
	    'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall', 'Oacutesmall',
	    'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall',
	    'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall'];
	
	var standardNames = [
	    '.notdef', '.null', 'nonmarkingreturn', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent',
	    'ampersand', 'quotesingle', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash',
	    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less',
	    'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
	    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright',
	    'asciicircum', 'underscore', 'grave', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
	    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde',
	    'Adieresis', 'Aring', 'Ccedilla', 'Eacute', 'Ntilde', 'Odieresis', 'Udieresis', 'aacute', 'agrave',
	    'acircumflex', 'adieresis', 'atilde', 'aring', 'ccedilla', 'eacute', 'egrave', 'ecircumflex', 'edieresis',
	    'iacute', 'igrave', 'icircumflex', 'idieresis', 'ntilde', 'oacute', 'ograve', 'ocircumflex', 'odieresis',
	    'otilde', 'uacute', 'ugrave', 'ucircumflex', 'udieresis', 'dagger', 'degree', 'cent', 'sterling', 'section',
	    'bullet', 'paragraph', 'germandbls', 'registered', 'copyright', 'trademark', 'acute', 'dieresis', 'notequal',
	    'AE', 'Oslash', 'infinity', 'plusminus', 'lessequal', 'greaterequal', 'yen', 'mu', 'partialdiff', 'summation',
	    'product', 'pi', 'integral', 'ordfeminine', 'ordmasculine', 'Omega', 'ae', 'oslash', 'questiondown',
	    'exclamdown', 'logicalnot', 'radical', 'florin', 'approxequal', 'Delta', 'guillemotleft', 'guillemotright',
	    'ellipsis', 'nonbreakingspace', 'Agrave', 'Atilde', 'Otilde', 'OE', 'oe', 'endash', 'emdash', 'quotedblleft',
	    'quotedblright', 'quoteleft', 'quoteright', 'divide', 'lozenge', 'ydieresis', 'Ydieresis', 'fraction',
	    'currency', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'daggerdbl', 'periodcentered', 'quotesinglbase',
	    'quotedblbase', 'perthousand', 'Acircumflex', 'Ecircumflex', 'Aacute', 'Edieresis', 'Egrave', 'Iacute',
	    'Icircumflex', 'Idieresis', 'Igrave', 'Oacute', 'Ocircumflex', 'apple', 'Ograve', 'Uacute', 'Ucircumflex',
	    'Ugrave', 'dotlessi', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'ring', 'cedilla', 'hungarumlaut',
	    'ogonek', 'caron', 'Lslash', 'lslash', 'Scaron', 'scaron', 'Zcaron', 'zcaron', 'brokenbar', 'Eth', 'eth',
	    'Yacute', 'yacute', 'Thorn', 'thorn', 'minus', 'multiply', 'onesuperior', 'twosuperior', 'threesuperior',
	    'onehalf', 'onequarter', 'threequarters', 'franc', 'Gbreve', 'gbreve', 'Idotaccent', 'Scedilla', 'scedilla',
	    'Cacute', 'cacute', 'Ccaron', 'ccaron', 'dcroat'];
	
	/**
	 * This is the encoding used for fonts created from scratch.
	 * It loops through all glyphs and finds the appropriate unicode value.
	 * Since it's linear time, other encodings will be faster.
	 * @exports opentype.DefaultEncoding
	 * @class
	 * @constructor
	 * @param {opentype.Font}
	 */
	function DefaultEncoding(font) {
	    this.font = font;
	}
	
	DefaultEncoding.prototype.charToGlyphIndex = function(c) {
	    var code = c.charCodeAt(0);
	    var glyphs = this.font.glyphs;
	    if (glyphs) {
	        for (var i = 0; i < glyphs.length; i += 1) {
	            var glyph = glyphs.get(i);
	            for (var j = 0; j < glyph.unicodes.length; j += 1) {
	                if (glyph.unicodes[j] === code) {
	                    return i;
	                }
	            }
	        }
	    } else {
	        return null;
	    }
	};
	
	/**
	 * @exports opentype.CmapEncoding
	 * @class
	 * @constructor
	 * @param {Object} cmap - a object with the cmap encoded data
	 */
	function CmapEncoding(cmap) {
	    this.cmap = cmap;
	}
	
	/**
	 * @param  {string} c - the character
	 * @return {number} The glyph index.
	 */
	CmapEncoding.prototype.charToGlyphIndex = function(c) {
	    return this.cmap.glyphIndexMap[c.charCodeAt(0)] || 0;
	};
	
	/**
	 * @exports opentype.CffEncoding
	 * @class
	 * @constructor
	 * @param {string} encoding - The encoding
	 * @param {Array} charset - The charcater set.
	 */
	function CffEncoding(encoding, charset) {
	    this.encoding = encoding;
	    this.charset = charset;
	}
	
	/**
	 * @param  {string} s - The character
	 * @return {number} The index.
	 */
	CffEncoding.prototype.charToGlyphIndex = function(s) {
	    var code = s.charCodeAt(0);
	    var charName = this.encoding[code];
	    return this.charset.indexOf(charName);
	};
	
	/**
	 * @exports opentype.GlyphNames
	 * @class
	 * @constructor
	 * @param {Object} post
	 */
	function GlyphNames(post) {
	    var i;
	    switch (post.version) {
	        case 1:
	            this.names = exports.standardNames.slice();
	            break;
	        case 2:
	            this.names = new Array(post.numberOfGlyphs);
	            for (i = 0; i < post.numberOfGlyphs; i++) {
	                if (post.glyphNameIndex[i] < exports.standardNames.length) {
	                    this.names[i] = exports.standardNames[post.glyphNameIndex[i]];
	                } else {
	                    this.names[i] = post.names[post.glyphNameIndex[i] - exports.standardNames.length];
	                }
	            }
	
	            break;
	        case 2.5:
	            this.names = new Array(post.numberOfGlyphs);
	            for (i = 0; i < post.numberOfGlyphs; i++) {
	                this.names[i] = exports.standardNames[i + post.glyphNameIndex[i]];
	            }
	
	            break;
	        case 3:
	            this.names = [];
	            break;
	    }
	}
	
	/**
	 * Gets the index of a glyph by name.
	 * @param  {string} name - The glyph name
	 * @return {number} The index
	 */
	GlyphNames.prototype.nameToGlyphIndex = function(name) {
	    return this.names.indexOf(name);
	};
	
	/**
	 * @param  {number} gid
	 * @return {string}
	 */
	GlyphNames.prototype.glyphIndexToName = function(gid) {
	    return this.names[gid];
	};
	
	/**
	 * @alias opentype.addGlyphNames
	 * @param {opentype.Font}
	 */
	function addGlyphNames(font) {
	    var glyph;
	    var glyphIndexMap = font.tables.cmap.glyphIndexMap;
	    var charCodes = Object.keys(glyphIndexMap);
	
	    for (var i = 0; i < charCodes.length; i += 1) {
	        var c = charCodes[i];
	        var glyphIndex = glyphIndexMap[c];
	        glyph = font.glyphs.get(glyphIndex);
	        glyph.addUnicode(parseInt(c));
	    }
	
	    for (i = 0; i < font.glyphs.length; i += 1) {
	        glyph = font.glyphs.get(i);
	        if (font.cffEncoding) {
	            glyph.name = font.cffEncoding.charset[i];
	        } else if (font.glyphNames.names) {
	            glyph.name = font.glyphNames.glyphIndexToName(i);
	        }
	    }
	}
	
	exports.cffStandardStrings = cffStandardStrings;
	exports.cffStandardEncoding = cffStandardEncoding;
	exports.cffExpertEncoding = cffExpertEncoding;
	exports.standardNames = standardNames;
	exports.DefaultEncoding = DefaultEncoding;
	exports.CmapEncoding = CmapEncoding;
	exports.CffEncoding = CffEncoding;
	exports.GlyphNames = GlyphNames;
	exports.addGlyphNames = addGlyphNames;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// The Font object
	
	'use strict';
	
	var path = __webpack_require__(55);
	var sfnt = __webpack_require__(56);
	var encoding = __webpack_require__(53);
	var glyphset = __webpack_require__(63);
	var Substitution = __webpack_require__(76);
	var util = __webpack_require__(78);
	
	/**
	 * @typedef FontOptions
	 * @type Object
	 * @property {Boolean} empty - whether to create a new empty font
	 * @property {string} familyName
	 * @property {string} styleName
	 * @property {string=} fullName
	 * @property {string=} postScriptName
	 * @property {string=} designer
	 * @property {string=} designerURL
	 * @property {string=} manufacturer
	 * @property {string=} manufacturerURL
	 * @property {string=} license
	 * @property {string=} licenseURL
	 * @property {string=} version
	 * @property {string=} description
	 * @property {string=} copyright
	 * @property {string=} trademark
	 * @property {Number} unitsPerEm
	 * @property {Number} ascender
	 * @property {Number} descender
	 * @property {Number} createdTimestamp
	 * @property {string=} weightClass
	 * @property {string=} widthClass
	 * @property {string=} fsSelection
	 */
	
	/**
	 * A Font represents a loaded OpenType font file.
	 * It contains a set of glyphs and methods to draw text on a drawing context,
	 * or to get a path representing the text.
	 * @exports opentype.Font
	 * @class
	 * @param {FontOptions}
	 * @constructor
	 */
	function Font(options) {
	    options = options || {};
	
	    if (!options.empty) {
	        // Check that we've provided the minimum set of names.
	        util.checkArgument(options.familyName, 'When creating a new Font object, familyName is required.');
	        util.checkArgument(options.styleName, 'When creating a new Font object, styleName is required.');
	        util.checkArgument(options.unitsPerEm, 'When creating a new Font object, unitsPerEm is required.');
	        util.checkArgument(options.ascender, 'When creating a new Font object, ascender is required.');
	        util.checkArgument(options.descender, 'When creating a new Font object, descender is required.');
	        util.checkArgument(options.descender < 0, 'Descender should be negative (e.g. -512).');
	
	        // OS X will complain if the names are empty, so we put a single space everywhere by default.
	        this.names = {
	            fontFamily: {en: options.familyName || ' '},
	            fontSubfamily: {en: options.styleName || ' '},
	            fullName: {en: options.fullName || options.familyName + ' ' + options.styleName},
	            postScriptName: {en: options.postScriptName || options.familyName + options.styleName},
	            designer: {en: options.designer || ' '},
	            designerURL: {en: options.designerURL || ' '},
	            manufacturer: {en: options.manufacturer || ' '},
	            manufacturerURL: {en: options.manufacturerURL || ' '},
	            license: {en: options.license || ' '},
	            licenseURL: {en: options.licenseURL || ' '},
	            version: {en: options.version || 'Version 0.1'},
	            description: {en: options.description || ' '},
	            copyright: {en: options.copyright || ' '},
	            trademark: {en: options.trademark || ' '}
	        };
	        this.unitsPerEm = options.unitsPerEm || 1000;
	        this.ascender = options.ascender;
	        this.descender = options.descender;
	        this.createdTimestamp = options.createdTimestamp;
	        this.tables = { os2: {
	            usWeightClass: options.weightClass || this.usWeightClasses.MEDIUM,
	            usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,
	            fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR
	        } };
	    }
	
	    this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.
	    this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);
	    this.encoding = new encoding.DefaultEncoding(this);
	    this.substitution = new Substitution(this);
	    this.tables = this.tables || {};
	}
	
	/**
	 * Check if the font has a glyph for the given character.
	 * @param  {string}
	 * @return {Boolean}
	 */
	Font.prototype.hasChar = function(c) {
	    return this.encoding.charToGlyphIndex(c) !== null;
	};
	
	/**
	 * Convert the given character to a single glyph index.
	 * Note that this function assumes that there is a one-to-one mapping between
	 * the given character and a glyph; for complex scripts this might not be the case.
	 * @param  {string}
	 * @return {Number}
	 */
	Font.prototype.charToGlyphIndex = function(s) {
	    return this.encoding.charToGlyphIndex(s);
	};
	
	/**
	 * Convert the given character to a single Glyph object.
	 * Note that this function assumes that there is a one-to-one mapping between
	 * the given character and a glyph; for complex scripts this might not be the case.
	 * @param  {string}
	 * @return {opentype.Glyph}
	 */
	Font.prototype.charToGlyph = function(c) {
	    var glyphIndex = this.charToGlyphIndex(c);
	    var glyph = this.glyphs.get(glyphIndex);
	    if (!glyph) {
	        // .notdef
	        glyph = this.glyphs.get(0);
	    }
	
	    return glyph;
	};
	
	/**
	 * Convert the given text to a list of Glyph objects.
	 * Note that there is no strict one-to-one mapping between characters and
	 * glyphs, so the list of returned glyphs can be larger or smaller than the
	 * length of the given string.
	 * @param  {string}
	 * @return {opentype.Glyph[]}
	 */
	Font.prototype.stringToGlyphs = function(s) {
	    var glyphs = [];
	    for (var i = 0; i < s.length; i += 1) {
	        var c = s[i];
	        glyphs.push(this.charToGlyph(c));
	    }
	
	    return glyphs;
	};
	
	/**
	 * @param  {string}
	 * @return {Number}
	 */
	Font.prototype.nameToGlyphIndex = function(name) {
	    return this.glyphNames.nameToGlyphIndex(name);
	};
	
	/**
	 * @param  {string}
	 * @return {opentype.Glyph}
	 */
	Font.prototype.nameToGlyph = function(name) {
	    var glyphIndex = this.nameToGlyphIndex(name);
	    var glyph = this.glyphs.get(glyphIndex);
	    if (!glyph) {
	        // .notdef
	        glyph = this.glyphs.get(0);
	    }
	
	    return glyph;
	};
	
	/**
	 * @param  {Number}
	 * @return {String}
	 */
	Font.prototype.glyphIndexToName = function(gid) {
	    if (!this.glyphNames.glyphIndexToName) {
	        return '';
	    }
	
	    return this.glyphNames.glyphIndexToName(gid);
	};
	
	/**
	 * Retrieve the value of the kerning pair between the left glyph (or its index)
	 * and the right glyph (or its index). If no kerning pair is found, return 0.
	 * The kerning value gets added to the advance width when calculating the spacing
	 * between glyphs.
	 * @param  {opentype.Glyph} leftGlyph
	 * @param  {opentype.Glyph} rightGlyph
	 * @return {Number}
	 */
	Font.prototype.getKerningValue = function(leftGlyph, rightGlyph) {
	    leftGlyph = leftGlyph.index || leftGlyph;
	    rightGlyph = rightGlyph.index || rightGlyph;
	    var gposKerning = this.getGposKerningValue;
	    return gposKerning ? gposKerning(leftGlyph, rightGlyph) :
	        (this.kerningPairs[leftGlyph + ',' + rightGlyph] || 0);
	};
	
	/**
	 * @typedef GlyphRenderOptions
	 * @type Object
	 * @property {boolean} [kerning] - whether to include kerning values
	 */
	
	/**
	 * Helper function that invokes the given callback for each glyph in the given text.
	 * The callback gets `(glyph, x, y, fontSize, options)`.* @param  {string} text
	 * @param {string} text - The text to apply.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {GlyphRenderOptions=} options
	 * @param  {Function} callback
	 */
	Font.prototype.forEachGlyph = function(text, x, y, fontSize, options, callback) {
	    x = x !== undefined ? x : 0;
	    y = y !== undefined ? y : 0;
	    fontSize = fontSize !== undefined ? fontSize : 72;
	    options = options || {};
	    var kerning = options.kerning === undefined ? true : options.kerning;
	    var fontScale = 1 / this.unitsPerEm * fontSize;
	    var glyphs = this.stringToGlyphs(text);
	    for (var i = 0; i < glyphs.length; i += 1) {
	        var glyph = glyphs[i];
	        callback(glyph, x, y, fontSize, options);
	        if (glyph.advanceWidth) {
	            x += glyph.advanceWidth * fontScale;
	        }
	
	        if (kerning && i < glyphs.length - 1) {
	            var kerningValue = this.getKerningValue(glyph, glyphs[i + 1]);
	            x += kerningValue * fontScale;
	        }
	
	        if (options.letterSpacing) {
	            x += options.letterSpacing * fontSize;
	        } else if (options.tracking) {
	            x += (options.tracking / 1000) * fontSize;
	        }
	    }
	};
	
	/**
	 * Create a Path object that represents the given text.
	 * @param  {string} text - The text to create.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {GlyphRenderOptions=} options
	 * @return {opentype.Path}
	 */
	Font.prototype.getPath = function(text, x, y, fontSize, options) {
	    var fullPath = new path.Path();
	    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
	        var glyphPath = glyph.getPath(gX, gY, gFontSize);
	        fullPath.extend(glyphPath);
	    });
	
	    return fullPath;
	};
	
	/**
	 * Create an array of Path objects that represent the glyps of a given text.
	 * @param  {string} text - The text to create.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {GlyphRenderOptions=} options
	 * @return {opentype.Path[]}
	 */
	Font.prototype.getPaths = function(text, x, y, fontSize, options) {
	    var glyphPaths = [];
	    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
	        var glyphPath = glyph.getPath(gX, gY, gFontSize);
	        glyphPaths.push(glyphPath);
	    });
	
	    return glyphPaths;
	};
	
	/**
	 * Draw the text on the given drawing context.
	 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param  {string} text - The text to create.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {GlyphRenderOptions=} options
	 */
	Font.prototype.draw = function(ctx, text, x, y, fontSize, options) {
	    this.getPath(text, x, y, fontSize, options).draw(ctx);
	};
	
	/**
	 * Draw the points of all glyphs in the text.
	 * On-curve points will be drawn in blue, off-curve points will be drawn in red.
	 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param {string} text - The text to create.
	 * @param {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param {GlyphRenderOptions=} options
	 */
	Font.prototype.drawPoints = function(ctx, text, x, y, fontSize, options) {
	    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
	        glyph.drawPoints(ctx, gX, gY, gFontSize);
	    });
	};
	
	/**
	 * Draw lines indicating important font measurements for all glyphs in the text.
	 * Black lines indicate the origin of the coordinate system (point 0,0).
	 * Blue lines indicate the glyph bounding box.
	 * Green line indicates the advance width of the glyph.
	 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param {string} text - The text to create.
	 * @param {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param {GlyphRenderOptions=} options
	 */
	Font.prototype.drawMetrics = function(ctx, text, x, y, fontSize, options) {
	    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
	        glyph.drawMetrics(ctx, gX, gY, gFontSize);
	    });
	};
	
	/**
	 * @param  {string}
	 * @return {string}
	 */
	Font.prototype.getEnglishName = function(name) {
	    var translations = this.names[name];
	    if (translations) {
	        return translations.en;
	    }
	};
	
	/**
	 * Validate
	 */
	Font.prototype.validate = function() {
	    var warnings = [];
	    var _this = this;
	
	    function assert(predicate, message) {
	        if (!predicate) {
	            warnings.push(message);
	        }
	    }
	
	    function assertNamePresent(name) {
	        var englishName = _this.getEnglishName(name);
	        assert(englishName && englishName.trim().length > 0,
	               'No English ' + name + ' specified.');
	    }
	
	    // Identification information
	    assertNamePresent('fontFamily');
	    assertNamePresent('weightName');
	    assertNamePresent('manufacturer');
	    assertNamePresent('copyright');
	    assertNamePresent('version');
	
	    // Dimension information
	    assert(this.unitsPerEm > 0, 'No unitsPerEm specified.');
	};
	
	/**
	 * Convert the font object to a SFNT data structure.
	 * This structure contains all the necessary tables and metadata to create a binary OTF file.
	 * @return {opentype.Table}
	 */
	Font.prototype.toTables = function() {
	    return sfnt.fontToTable(this);
	};
	/**
	 * @deprecated Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.
	 */
	Font.prototype.toBuffer = function() {
	    console.warn('Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.');
	    return this.toArrayBuffer();
	};
	/**
	 * Converts a `opentype.Font` into an `ArrayBuffer`
	 * @return {ArrayBuffer}
	 */
	Font.prototype.toArrayBuffer = function() {
	    var sfntTable = this.toTables();
	    var bytes = sfntTable.encode();
	    var buffer = new ArrayBuffer(bytes.length);
	    var intArray = new Uint8Array(buffer);
	    for (var i = 0; i < bytes.length; i++) {
	        intArray[i] = bytes[i];
	    }
	
	    return buffer;
	};
	
	/**
	 * Initiate a download of the OpenType font.
	 */
	Font.prototype.download = function(fileName) {
	    var familyName = this.getEnglishName('fontFamily');
	    var styleName = this.getEnglishName('fontSubfamily');
	    fileName = fileName || familyName.replace(/\s/g, '') + '-' + styleName + '.otf';
	    var arrayBuffer = this.toArrayBuffer();
	
	    if (util.isBrowser()) {
	        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
	        window.requestFileSystem(window.TEMPORARY, arrayBuffer.byteLength, function(fs) {
	            fs.root.getFile(fileName, {create: true}, function(fileEntry) {
	                fileEntry.createWriter(function(writer) {
	                    var dataView = new DataView(arrayBuffer);
	                    var blob = new Blob([dataView], {type: 'font/opentype'});
	                    writer.write(blob);
	
	                    writer.addEventListener('writeend', function() {
	                        // Navigating to the file will download it.
	                        location.href = fileEntry.toURL();
	                    }, false);
	                });
	            });
	        },
	        function(err) {
	            throw new Error(err.name + ': ' + err.message);
	        });
	    } else {
	        var fs = __webpack_require__(83);
	        var buffer = util.arrayBufferToNodeBuffer(arrayBuffer);
	        fs.writeFileSync(fileName, buffer);
	    }
	};
	/**
	 * @private
	 */
	Font.prototype.fsSelectionValues = {
	    ITALIC:              0x001, //1
	    UNDERSCORE:          0x002, //2
	    NEGATIVE:            0x004, //4
	    OUTLINED:            0x008, //8
	    STRIKEOUT:           0x010, //16
	    BOLD:                0x020, //32
	    REGULAR:             0x040, //64
	    USER_TYPO_METRICS:   0x080, //128
	    WWS:                 0x100, //256
	    OBLIQUE:             0x200  //512
	};
	
	/**
	 * @private
	 */
	Font.prototype.usWidthClasses = {
	    ULTRA_CONDENSED: 1,
	    EXTRA_CONDENSED: 2,
	    CONDENSED: 3,
	    SEMI_CONDENSED: 4,
	    MEDIUM: 5,
	    SEMI_EXPANDED: 6,
	    EXPANDED: 7,
	    EXTRA_EXPANDED: 8,
	    ULTRA_EXPANDED: 9
	};
	
	/**
	 * @private
	 */
	Font.prototype.usWeightClasses = {
	    THIN: 100,
	    EXTRA_LIGHT: 200,
	    LIGHT: 300,
	    NORMAL: 400,
	    MEDIUM: 500,
	    SEMI_BOLD: 600,
	    BOLD: 700,
	    EXTRA_BOLD: 800,
	    BLACK:    900
	};
	
	exports.Font = Font;


/***/ },
/* 55 */
/***/ function(module, exports) {

	// Geometric objects
	
	'use strict';
	
	/**
	 * A bézier path containing a set of path commands similar to a SVG path.
	 * Paths can be drawn on a context using `draw`.
	 * @exports opentype.Path
	 * @class
	 * @constructor
	 */
	function Path() {
	    this.commands = [];
	    this.fill = 'black';
	    this.stroke = null;
	    this.strokeWidth = 1;
	}
	
	/**
	 * @param  {number} x
	 * @param  {number} y
	 */
	Path.prototype.moveTo = function(x, y) {
	    this.commands.push({
	        type: 'M',
	        x: x,
	        y: y
	    });
	};
	
	/**
	 * @param  {number} x
	 * @param  {number} y
	 */
	Path.prototype.lineTo = function(x, y) {
	    this.commands.push({
	        type: 'L',
	        x: x,
	        y: y
	    });
	};
	
	/**
	 * Draws cubic curve
	 * @function
	 * curveTo
	 * @memberof opentype.Path.prototype
	 * @param  {number} x1 - x of control 1
	 * @param  {number} y1 - y of control 1
	 * @param  {number} x2 - x of control 2
	 * @param  {number} y2 - y of control 2
	 * @param  {number} x - x of path point
	 * @param  {number} y - y of path point
	 */
	
	/**
	 * Draws cubic curve
	 * @function
	 * bezierCurveTo
	 * @memberof opentype.Path.prototype
	 * @param  {number} x1 - x of control 1
	 * @param  {number} y1 - y of control 1
	 * @param  {number} x2 - x of control 2
	 * @param  {number} y2 - y of control 2
	 * @param  {number} x - x of path point
	 * @param  {number} y - y of path point
	 * @see curveTo
	 */
	Path.prototype.curveTo = Path.prototype.bezierCurveTo = function(x1, y1, x2, y2, x, y) {
	    this.commands.push({
	        type: 'C',
	        x1: x1,
	        y1: y1,
	        x2: x2,
	        y2: y2,
	        x: x,
	        y: y
	    });
	};
	
	/**
	 * Draws quadratic curve
	 * @function
	 * quadraticCurveTo
	 * @memberof opentype.Path.prototype
	 * @param  {number} x1 - x of control
	 * @param  {number} y1 - y of control
	 * @param  {number} x - x of path point
	 * @param  {number} y - y of path point
	 */
	
	/**
	 * Draws quadratic curve
	 * @function
	 * quadTo
	 * @memberof opentype.Path.prototype
	 * @param  {number} x1 - x of control
	 * @param  {number} y1 - y of control
	 * @param  {number} x - x of path point
	 * @param  {number} y - y of path point
	 */
	Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function(x1, y1, x, y) {
	    this.commands.push({
	        type: 'Q',
	        x1: x1,
	        y1: y1,
	        x: x,
	        y: y
	    });
	};
	
	/**
	 * Closes the path
	 * @function closePath
	 * @memberof opentype.Path.prototype
	 */
	
	/**
	 * Close the path
	 * @function close
	 * @memberof opentype.Path.prototype
	 */
	Path.prototype.close = Path.prototype.closePath = function() {
	    this.commands.push({
	        type: 'Z'
	    });
	};
	
	/**
	 * Add the given path or list of commands to the commands of this path.
	 * @param  {Array}
	 */
	Path.prototype.extend = function(pathOrCommands) {
	    if (pathOrCommands.commands) {
	        pathOrCommands = pathOrCommands.commands;
	    }
	
	    Array.prototype.push.apply(this.commands, pathOrCommands);
	};
	
	/**
	 * Draw the path to a 2D context.
	 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context.
	 */
	Path.prototype.draw = function(ctx) {
	    ctx.beginPath();
	    for (var i = 0; i < this.commands.length; i += 1) {
	        var cmd = this.commands[i];
	        if (cmd.type === 'M') {
	            ctx.moveTo(cmd.x, cmd.y);
	        } else if (cmd.type === 'L') {
	            ctx.lineTo(cmd.x, cmd.y);
	        } else if (cmd.type === 'C') {
	            ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
	        } else if (cmd.type === 'Q') {
	            ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
	        } else if (cmd.type === 'Z') {
	            ctx.closePath();
	        }
	    }
	
	    if (this.fill) {
	        ctx.fillStyle = this.fill;
	        ctx.fill();
	    }
	
	    if (this.stroke) {
	        ctx.strokeStyle = this.stroke;
	        ctx.lineWidth = this.strokeWidth;
	        ctx.stroke();
	    }
	};
	
	/**
	 * Convert the Path to a string of path data instructions
	 * See http://www.w3.org/TR/SVG/paths.html#PathData
	 * @param  {number} [decimalPlaces=2] - The amount of decimal places for floating-point values
	 * @return {string}
	 */
	Path.prototype.toPathData = function(decimalPlaces) {
	    decimalPlaces = decimalPlaces !== undefined ? decimalPlaces : 2;
	
	    function floatToString(v) {
	        if (Math.round(v) === v) {
	            return '' + Math.round(v);
	        } else {
	            return v.toFixed(decimalPlaces);
	        }
	    }
	
	    function packValues() {
	        var s = '';
	        for (var i = 0; i < arguments.length; i += 1) {
	            var v = arguments[i];
	            if (v >= 0 && i > 0) {
	                s += ' ';
	            }
	
	            s += floatToString(v);
	        }
	
	        return s;
	    }
	
	    var d = '';
	    for (var i = 0; i < this.commands.length; i += 1) {
	        var cmd = this.commands[i];
	        if (cmd.type === 'M') {
	            d += 'M' + packValues(cmd.x, cmd.y);
	        } else if (cmd.type === 'L') {
	            d += 'L' + packValues(cmd.x, cmd.y);
	        } else if (cmd.type === 'C') {
	            d += 'C' + packValues(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
	        } else if (cmd.type === 'Q') {
	            d += 'Q' + packValues(cmd.x1, cmd.y1, cmd.x, cmd.y);
	        } else if (cmd.type === 'Z') {
	            d += 'Z';
	        }
	    }
	
	    return d;
	};
	
	/**
	 * Convert the path to an SVG <path> element, as a string.
	 * @param  {number} [decimalPlaces=2] - The amount of decimal places for floating-point values
	 * @return {string}
	 */
	Path.prototype.toSVG = function(decimalPlaces) {
	    var svg = '<path d="';
	    svg += this.toPathData(decimalPlaces);
	    svg += '"';
	    if (this.fill && this.fill !== 'black') {
	        if (this.fill === null) {
	            svg += ' fill="none"';
	        } else {
	            svg += ' fill="' + this.fill + '"';
	        }
	    }
	
	    if (this.stroke) {
	        svg += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"';
	    }
	
	    svg += '/>';
	    return svg;
	};
	
	exports.Path = Path;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// The `sfnt` wrapper provides organization for the tables in the font.
	// It is the top-level data structure in a font.
	// https://www.microsoft.com/typography/OTSPEC/otff.htm
	// Recommendations for creating OpenType Fonts:
	// http://www.microsoft.com/typography/otspec140/recom.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var table = __webpack_require__(58);
	
	var cmap = __webpack_require__(60);
	var cff = __webpack_require__(62);
	var head = __webpack_require__(66);
	var hhea = __webpack_require__(67);
	var hmtx = __webpack_require__(68);
	var ltag = __webpack_require__(69);
	var maxp = __webpack_require__(70);
	var _name = __webpack_require__(71);
	var os2 = __webpack_require__(72);
	var post = __webpack_require__(73);
	var gsub = __webpack_require__(74);
	var meta = __webpack_require__(75);
	
	function log2(v) {
	    return Math.log(v) / Math.log(2) | 0;
	}
	
	function computeCheckSum(bytes) {
	    while (bytes.length % 4 !== 0) {
	        bytes.push(0);
	    }
	
	    var sum = 0;
	    for (var i = 0; i < bytes.length; i += 4) {
	        sum += (bytes[i] << 24) +
	            (bytes[i + 1] << 16) +
	            (bytes[i + 2] << 8) +
	            (bytes[i + 3]);
	    }
	
	    sum %= Math.pow(2, 32);
	    return sum;
	}
	
	function makeTableRecord(tag, checkSum, offset, length) {
	    return new table.Record('Table Record', [
	        {name: 'tag', type: 'TAG', value: tag !== undefined ? tag : ''},
	        {name: 'checkSum', type: 'ULONG', value: checkSum !== undefined ? checkSum : 0},
	        {name: 'offset', type: 'ULONG', value: offset !== undefined ? offset : 0},
	        {name: 'length', type: 'ULONG', value: length !== undefined ? length : 0}
	    ]);
	}
	
	function makeSfntTable(tables) {
	    var sfnt = new table.Table('sfnt', [
	        {name: 'version', type: 'TAG', value: 'OTTO'},
	        {name: 'numTables', type: 'USHORT', value: 0},
	        {name: 'searchRange', type: 'USHORT', value: 0},
	        {name: 'entrySelector', type: 'USHORT', value: 0},
	        {name: 'rangeShift', type: 'USHORT', value: 0}
	    ]);
	    sfnt.tables = tables;
	    sfnt.numTables = tables.length;
	    var highestPowerOf2 = Math.pow(2, log2(sfnt.numTables));
	    sfnt.searchRange = 16 * highestPowerOf2;
	    sfnt.entrySelector = log2(highestPowerOf2);
	    sfnt.rangeShift = sfnt.numTables * 16 - sfnt.searchRange;
	
	    var recordFields = [];
	    var tableFields = [];
	
	    var offset = sfnt.sizeOf() + (makeTableRecord().sizeOf() * sfnt.numTables);
	    while (offset % 4 !== 0) {
	        offset += 1;
	        tableFields.push({name: 'padding', type: 'BYTE', value: 0});
	    }
	
	    for (var i = 0; i < tables.length; i += 1) {
	        var t = tables[i];
	        check.argument(t.tableName.length === 4, 'Table name' + t.tableName + ' is invalid.');
	        var tableLength = t.sizeOf();
	        var tableRecord = makeTableRecord(t.tableName, computeCheckSum(t.encode()), offset, tableLength);
	        recordFields.push({name: tableRecord.tag + ' Table Record', type: 'RECORD', value: tableRecord});
	        tableFields.push({name: t.tableName + ' table', type: 'RECORD', value: t});
	        offset += tableLength;
	        check.argument(!isNaN(offset), 'Something went wrong calculating the offset.');
	        while (offset % 4 !== 0) {
	            offset += 1;
	            tableFields.push({name: 'padding', type: 'BYTE', value: 0});
	        }
	    }
	
	    // Table records need to be sorted alphabetically.
	    recordFields.sort(function(r1, r2) {
	        if (r1.value.tag > r2.value.tag) {
	            return 1;
	        } else {
	            return -1;
	        }
	    });
	
	    sfnt.fields = sfnt.fields.concat(recordFields);
	    sfnt.fields = sfnt.fields.concat(tableFields);
	    return sfnt;
	}
	
	// Get the metrics for a character. If the string has more than one character
	// this function returns metrics for the first available character.
	// You can provide optional fallback metrics if no characters are available.
	function metricsForChar(font, chars, notFoundMetrics) {
	    for (var i = 0; i < chars.length; i += 1) {
	        var glyphIndex = font.charToGlyphIndex(chars[i]);
	        if (glyphIndex > 0) {
	            var glyph = font.glyphs.get(glyphIndex);
	            return glyph.getMetrics();
	        }
	    }
	
	    return notFoundMetrics;
	}
	
	function average(vs) {
	    var sum = 0;
	    for (var i = 0; i < vs.length; i += 1) {
	        sum += vs[i];
	    }
	
	    return sum / vs.length;
	}
	
	// Convert the font object to a SFNT data structure.
	// This structure contains all the necessary tables and metadata to create a binary OTF file.
	function fontToSfntTable(font) {
	    var xMins = [];
	    var yMins = [];
	    var xMaxs = [];
	    var yMaxs = [];
	    var advanceWidths = [];
	    var leftSideBearings = [];
	    var rightSideBearings = [];
	    var firstCharIndex;
	    var lastCharIndex = 0;
	    var ulUnicodeRange1 = 0;
	    var ulUnicodeRange2 = 0;
	    var ulUnicodeRange3 = 0;
	    var ulUnicodeRange4 = 0;
	
	    for (var i = 0; i < font.glyphs.length; i += 1) {
	        var glyph = font.glyphs.get(i);
	        var unicode = glyph.unicode | 0;
	
	        if (isNaN(glyph.advanceWidth)) {
	            throw new Error('Glyph ' + glyph.name + ' (' + i + '): advanceWidth is not a number.');
	        }
	
	        if (firstCharIndex > unicode || firstCharIndex === undefined) {
	            // ignore .notdef char
	            if (unicode > 0) {
	                firstCharIndex = unicode;
	            }
	        }
	
	        if (lastCharIndex < unicode) {
	            lastCharIndex = unicode;
	        }
	
	        var position = os2.getUnicodeRange(unicode);
	        if (position < 32) {
	            ulUnicodeRange1 |= 1 << position;
	        } else if (position < 64) {
	            ulUnicodeRange2 |= 1 << position - 32;
	        } else if (position < 96) {
	            ulUnicodeRange3 |= 1 << position - 64;
	        } else if (position < 123) {
	            ulUnicodeRange4 |= 1 << position - 96;
	        } else {
	            throw new Error('Unicode ranges bits > 123 are reserved for internal usage');
	        }
	        // Skip non-important characters.
	        if (glyph.name === '.notdef') continue;
	        var metrics = glyph.getMetrics();
	        xMins.push(metrics.xMin);
	        yMins.push(metrics.yMin);
	        xMaxs.push(metrics.xMax);
	        yMaxs.push(metrics.yMax);
	        leftSideBearings.push(metrics.leftSideBearing);
	        rightSideBearings.push(metrics.rightSideBearing);
	        advanceWidths.push(glyph.advanceWidth);
	    }
	
	    var globals = {
	        xMin: Math.min.apply(null, xMins),
	        yMin: Math.min.apply(null, yMins),
	        xMax: Math.max.apply(null, xMaxs),
	        yMax: Math.max.apply(null, yMaxs),
	        advanceWidthMax: Math.max.apply(null, advanceWidths),
	        advanceWidthAvg: average(advanceWidths),
	        minLeftSideBearing: Math.min.apply(null, leftSideBearings),
	        maxLeftSideBearing: Math.max.apply(null, leftSideBearings),
	        minRightSideBearing: Math.min.apply(null, rightSideBearings)
	    };
	    globals.ascender = font.ascender;
	    globals.descender = font.descender;
	
	    var headTable = head.make({
	        flags: 3, // 00000011 (baseline for font at y=0; left sidebearing point at x=0)
	        unitsPerEm: font.unitsPerEm,
	        xMin: globals.xMin,
	        yMin: globals.yMin,
	        xMax: globals.xMax,
	        yMax: globals.yMax,
	        lowestRecPPEM: 3,
	        createdTimestamp: font.createdTimestamp
	    });
	
	    var hheaTable = hhea.make({
	        ascender: globals.ascender,
	        descender: globals.descender,
	        advanceWidthMax: globals.advanceWidthMax,
	        minLeftSideBearing: globals.minLeftSideBearing,
	        minRightSideBearing: globals.minRightSideBearing,
	        xMaxExtent: globals.maxLeftSideBearing + (globals.xMax - globals.xMin),
	        numberOfHMetrics: font.glyphs.length
	    });
	
	    var maxpTable = maxp.make(font.glyphs.length);
	
	    var os2Table = os2.make({
	        xAvgCharWidth: Math.round(globals.advanceWidthAvg),
	        usWeightClass: font.tables.os2.usWeightClass,
	        usWidthClass: font.tables.os2.usWidthClass,
	        usFirstCharIndex: firstCharIndex,
	        usLastCharIndex: lastCharIndex,
	        ulUnicodeRange1: ulUnicodeRange1,
	        ulUnicodeRange2: ulUnicodeRange2,
	        ulUnicodeRange3: ulUnicodeRange3,
	        ulUnicodeRange4: ulUnicodeRange4,
	        fsSelection: font.tables.os2.fsSelection, // REGULAR
	        // See http://typophile.com/node/13081 for more info on vertical metrics.
	        // We get metrics for typical characters (such as "x" for xHeight).
	        // We provide some fallback characters if characters are unavailable: their
	        // ordering was chosen experimentally.
	        sTypoAscender: globals.ascender,
	        sTypoDescender: globals.descender,
	        sTypoLineGap: 0,
	        usWinAscent: globals.yMax,
	        usWinDescent: Math.abs(globals.yMin),
	        ulCodePageRange1: 1, // FIXME: hard-code Latin 1 support for now
	        sxHeight: metricsForChar(font, 'xyvw', {yMax: Math.round(globals.ascender / 2)}).yMax,
	        sCapHeight: metricsForChar(font, 'HIKLEFJMNTZBDPRAGOQSUVWXY', globals).yMax,
	        usDefaultChar: font.hasChar(' ') ? 32 : 0, // Use space as the default character, if available.
	        usBreakChar: font.hasChar(' ') ? 32 : 0 // Use space as the break character, if available.
	    });
	
	    var hmtxTable = hmtx.make(font.glyphs);
	    var cmapTable = cmap.make(font.glyphs);
	
	    var englishFamilyName = font.getEnglishName('fontFamily');
	    var englishStyleName = font.getEnglishName('fontSubfamily');
	    var englishFullName = englishFamilyName + ' ' + englishStyleName;
	    var postScriptName = font.getEnglishName('postScriptName');
	    if (!postScriptName) {
	        postScriptName = englishFamilyName.replace(/\s/g, '') + '-' + englishStyleName;
	    }
	
	    var names = {};
	    for (var n in font.names) {
	        names[n] = font.names[n];
	    }
	
	    if (!names.uniqueID) {
	        names.uniqueID = {en: font.getEnglishName('manufacturer') + ':' + englishFullName};
	    }
	
	    if (!names.postScriptName) {
	        names.postScriptName = {en: postScriptName};
	    }
	
	    if (!names.preferredFamily) {
	        names.preferredFamily = font.names.fontFamily;
	    }
	
	    if (!names.preferredSubfamily) {
	        names.preferredSubfamily = font.names.fontSubfamily;
	    }
	
	    var languageTags = [];
	    var nameTable = _name.make(names, languageTags);
	    var ltagTable = (languageTags.length > 0 ? ltag.make(languageTags) : undefined);
	
	    var postTable = post.make();
	    var cffTable = cff.make(font.glyphs, {
	        version: font.getEnglishName('version'),
	        fullName: englishFullName,
	        familyName: englishFamilyName,
	        weightName: englishStyleName,
	        postScriptName: postScriptName,
	        unitsPerEm: font.unitsPerEm,
	        fontBBox: [0, globals.yMin, globals.ascender, globals.advanceWidthMax]
	    });
	
	    var metaTable = (font.metas && Object.keys(font.metas).length > 0) ? meta.make(font.metas) : undefined;
	
	    // The order does not matter because makeSfntTable() will sort them.
	    var tables = [headTable, hheaTable, maxpTable, os2Table, nameTable, cmapTable, postTable, cffTable, hmtxTable];
	    if (ltagTable) {
	        tables.push(ltagTable);
	    }
	    // Optional tables
	    if (font.tables.gsub) {
	        tables.push(gsub.make(font.tables.gsub));
	    }
	    if (metaTable) {
	        tables.push(metaTable);
	    }
	
	    var sfntTable = makeSfntTable(tables);
	
	    // Compute the font's checkSum and store it in head.checkSumAdjustment.
	    var bytes = sfntTable.encode();
	    var checkSum = computeCheckSum(bytes);
	    var tableFields = sfntTable.fields;
	    var checkSumAdjusted = false;
	    for (i = 0; i < tableFields.length; i += 1) {
	        if (tableFields[i].name === 'head table') {
	            tableFields[i].value.checkSumAdjustment = 0xB1B0AFBA - checkSum;
	            checkSumAdjusted = true;
	            break;
	        }
	    }
	
	    if (!checkSumAdjusted) {
	        throw new Error('Could not find head table with checkSum to adjust.');
	    }
	
	    return sfntTable;
	}
	
	exports.computeCheckSum = computeCheckSum;
	exports.make = makeSfntTable;
	exports.fontToTable = fontToSfntTable;


/***/ },
/* 57 */
/***/ function(module, exports) {

	// Run-time checking of preconditions.
	
	'use strict';
	
	exports.fail = function(message) {
	    throw new Error(message);
	};
	
	// Precondition function that checks if the given predicate is true.
	// If not, it will throw an error.
	exports.argument = function(predicate, message) {
	    if (!predicate) {
	        exports.fail(message);
	    }
	};
	
	// Precondition function that checks if the given assertion is true.
	// If not, it will throw an error.
	exports.assert = exports.argument;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Table metadata
	
	'use strict';
	
	var check = __webpack_require__(57);
	var encode = __webpack_require__(59).encode;
	var sizeOf = __webpack_require__(59).sizeOf;
	/**
	 * @exports opentype.Table
	 * @class
	 * @param {string} tableName
	 * @param {Array} fields
	 * @param {Object} options
	 * @constructor
	 */
	function Table(tableName, fields, options) {
	    var i;
	    for (i = 0; i < fields.length; i += 1) {
	        var field = fields[i];
	        this[field.name] = field.value;
	    }
	
	    this.tableName = tableName;
	    this.fields = fields;
	    if (options) {
	        var optionKeys = Object.keys(options);
	        for (i = 0; i < optionKeys.length; i += 1) {
	            var k = optionKeys[i];
	            var v = options[k];
	            if (this[k] !== undefined) {
	                this[k] = v;
	            }
	        }
	    }
	}
	
	/**
	 * Encodes the table and returns an array of bytes
	 * @return {Array}
	 */
	Table.prototype.encode = function() {
	    return encode.TABLE(this);
	};
	
	/**
	 * Get the size of the table.
	 * @return {number}
	 */
	Table.prototype.sizeOf = function() {
	    return sizeOf.TABLE(this);
	};
	
	/**
	 * @private
	 */
	function ushortList(itemName, list, count) {
	    if (count === undefined) {
	        count = list.length;
	    }
	    var fields = new Array(list.length + 1);
	    fields[0] = {name: itemName + 'Count', type: 'USHORT', value: count};
	    for (var i = 0; i < list.length; i++) {
	        fields[i + 1] = {name: itemName + i, type: 'USHORT', value: list[i]};
	    }
	    return fields;
	}
	
	/**
	 * @private
	 */
	function tableList(itemName, records, itemCallback) {
	    var count = records.length;
	    var fields = new Array(count + 1);
	    fields[0] = {name: itemName + 'Count', type: 'USHORT', value: count};
	    for (var i = 0; i < count; i++) {
	        fields[i + 1] = {name: itemName + i, type: 'TABLE', value: itemCallback(records[i], i)};
	    }
	    return fields;
	}
	
	/**
	 * @private
	 */
	function recordList(itemName, records, itemCallback) {
	    var count = records.length;
	    var fields = [];
	    fields[0] = {name: itemName + 'Count', type: 'USHORT', value: count};
	    for (var i = 0; i < count; i++) {
	        fields = fields.concat(itemCallback(records[i], i));
	    }
	    return fields;
	}
	
	// Common Layout Tables
	
	/**
	 * @exports opentype.Coverage
	 * @class
	 * @param {opentype.Table}
	 * @constructor
	 * @extends opentype.Table
	 */
	function Coverage(coverageTable) {
	    if (coverageTable.format === 1) {
	        Table.call(this, 'coverageTable',
	            [{name: 'coverageFormat', type: 'USHORT', value: 1}]
	            .concat(ushortList('glyph', coverageTable.glyphs))
	        );
	    } else {
	        check.assert(false, 'Can\'t create coverage table format 2 yet.');
	    }
	}
	Coverage.prototype = Object.create(Table.prototype);
	Coverage.prototype.constructor = Coverage;
	
	function ScriptList(scriptListTable) {
	    Table.call(this, 'scriptListTable',
	        recordList('scriptRecord', scriptListTable, function(scriptRecord, i) {
	            var script = scriptRecord.script;
	            var defaultLangSys = script.defaultLangSys;
	            check.assert(!!defaultLangSys, 'Unable to write GSUB: script ' + scriptRecord.tag + ' has no default language system.');
	            return [
	                {name: 'scriptTag' + i, type: 'TAG', value: scriptRecord.tag},
	                {name: 'script' + i, type: 'TABLE', value: new Table('scriptTable', [
	                    {name: 'defaultLangSys', type: 'TABLE', value: new Table('defaultLangSys', [
	                        {name: 'lookupOrder', type: 'USHORT', value: 0},
	                        {name: 'reqFeatureIndex', type: 'USHORT', value: defaultLangSys.reqFeatureIndex}]
	                        .concat(ushortList('featureIndex', defaultLangSys.featureIndexes)))}
	                    ].concat(recordList('langSys', script.langSysRecords, function(langSysRecord, i) {
	                        var langSys = langSysRecord.langSys;
	                        return [
	                            {name: 'langSysTag' + i, type: 'TAG', value: langSysRecord.tag},
	                            {name: 'langSys' + i, type: 'TABLE', value: new Table('langSys', [
	                                {name: 'lookupOrder', type: 'USHORT', value: 0},
	                                {name: 'reqFeatureIndex', type: 'USHORT', value: langSys.reqFeatureIndex}
	                                ].concat(ushortList('featureIndex', langSys.featureIndexes)))}
	                        ];
	                    })))}
	            ];
	        })
	    );
	}
	ScriptList.prototype = Object.create(Table.prototype);
	ScriptList.prototype.constructor = ScriptList;
	
	/**
	 * @exports opentype.FeatureList
	 * @class
	 * @param {opentype.Table}
	 * @constructor
	 * @extends opentype.Table
	 */
	function FeatureList(featureListTable) {
	    Table.call(this, 'featureListTable',
	        recordList('featureRecord', featureListTable, function(featureRecord, i) {
	            var feature = featureRecord.feature;
	            return [
	                {name: 'featureTag' + i, type: 'TAG', value: featureRecord.tag},
	                {name: 'feature' + i, type: 'TABLE', value: new Table('featureTable', [
	                    {name: 'featureParams', type: 'USHORT', value: feature.featureParams},
	                    ].concat(ushortList('lookupListIndex', feature.lookupListIndexes)))}
	            ];
	        })
	    );
	}
	FeatureList.prototype = Object.create(Table.prototype);
	FeatureList.prototype.constructor = FeatureList;
	
	/**
	 * @exports opentype.LookupList
	 * @class
	 * @param {opentype.Table}
	 * @param {Object}
	 * @constructor
	 * @extends opentype.Table
	 */
	function LookupList(lookupListTable, subtableMakers) {
	    Table.call(this, 'lookupListTable', tableList('lookup', lookupListTable, function(lookupTable) {
	        var subtableCallback = subtableMakers[lookupTable.lookupType];
	        check.assert(!!subtableCallback, 'Unable to write GSUB lookup type ' + lookupTable.lookupType + ' tables.');
	        return new Table('lookupTable', [
	            {name: 'lookupType', type: 'USHORT', value: lookupTable.lookupType},
	            {name: 'lookupFlag', type: 'USHORT', value: lookupTable.lookupFlag}
	        ].concat(tableList('subtable', lookupTable.subtables, subtableCallback)));
	    }));
	}
	LookupList.prototype = Object.create(Table.prototype);
	LookupList.prototype.constructor = LookupList;
	
	// Record = same as Table, but inlined (a Table has an offset and its data is further in the stream)
	// Don't use offsets inside Records (probable bug), only in Tables.
	exports.Record = exports.Table = Table;
	exports.Coverage = Coverage;
	exports.ScriptList = ScriptList;
	exports.FeatureList = FeatureList;
	exports.LookupList = LookupList;
	
	exports.ushortList = ushortList;
	exports.tableList = tableList;
	exports.recordList = recordList;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Data types used in the OpenType font file.
	// All OpenType fonts use Motorola-style byte ordering (Big Endian)
	
	/* global WeakMap */
	
	'use strict';
	
	var check = __webpack_require__(57);
	
	var LIMIT16 = 32768; // The limit at which a 16-bit number switches signs == 2^15
	var LIMIT32 = 2147483648; // The limit at which a 32-bit number switches signs == 2 ^ 31
	
	/**
	 * @exports opentype.decode
	 * @class
	 */
	var decode = {};
	/**
	 * @exports opentype.encode
	 * @class
	 */
	var encode = {};
	/**
	 * @exports opentype.sizeOf
	 * @class
	 */
	var sizeOf = {};
	
	// Return a function that always returns the same value.
	function constant(v) {
	    return function() {
	        return v;
	    };
	}
	
	// OpenType data types //////////////////////////////////////////////////////
	
	/**
	 * Convert an 8-bit unsigned integer to a list of 1 byte.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.BYTE = function(v) {
	    check.argument(v >= 0 && v <= 255, 'Byte value should be between 0 and 255.');
	    return [v];
	};
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.BYTE = constant(1);
	
	/**
	 * Convert a 8-bit signed integer to a list of 1 byte.
	 * @param {string}
	 * @returns {Array}
	 */
	encode.CHAR = function(v) {
	    return [v.charCodeAt(0)];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.CHAR = constant(1);
	
	/**
	 * Convert an ASCII string to a list of bytes.
	 * @param {string}
	 * @returns {Array}
	 */
	encode.CHARARRAY = function(v) {
	    var b = [];
	    for (var i = 0; i < v.length; i += 1) {
	        b[i] = v.charCodeAt(i);
	    }
	
	    return b;
	};
	
	/**
	 * @param {Array}
	 * @returns {number}
	 */
	sizeOf.CHARARRAY = function(v) {
	    return v.length;
	};
	
	/**
	 * Convert a 16-bit unsigned integer to a list of 2 bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.USHORT = function(v) {
	    return [(v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.USHORT = constant(2);
	
	/**
	 * Convert a 16-bit signed integer to a list of 2 bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.SHORT = function(v) {
	    // Two's complement
	    if (v >= LIMIT16) {
	        v = -(2 * LIMIT16 - v);
	    }
	
	    return [(v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.SHORT = constant(2);
	
	/**
	 * Convert a 24-bit unsigned integer to a list of 3 bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.UINT24 = function(v) {
	    return [(v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.UINT24 = constant(3);
	
	/**
	 * Convert a 32-bit unsigned integer to a list of 4 bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.ULONG = function(v) {
	    return [(v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.ULONG = constant(4);
	
	/**
	 * Convert a 32-bit unsigned integer to a list of 4 bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.LONG = function(v) {
	    // Two's complement
	    if (v >= LIMIT32) {
	        v = -(2 * LIMIT32 - v);
	    }
	
	    return [(v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.LONG = constant(4);
	
	encode.FIXED = encode.ULONG;
	sizeOf.FIXED = sizeOf.ULONG;
	
	encode.FWORD = encode.SHORT;
	sizeOf.FWORD = sizeOf.SHORT;
	
	encode.UFWORD = encode.USHORT;
	sizeOf.UFWORD = sizeOf.USHORT;
	
	/**
	 * Convert a 32-bit Apple Mac timestamp integer to a list of 8 bytes, 64-bit timestamp.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.LONGDATETIME = function(v) {
	    return [0, 0, 0, 0, (v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.LONGDATETIME = constant(8);
	
	/**
	 * Convert a 4-char tag to a list of 4 bytes.
	 * @param {string}
	 * @returns {Array}
	 */
	encode.TAG = function(v) {
	    check.argument(v.length === 4, 'Tag should be exactly 4 ASCII characters.');
	    return [v.charCodeAt(0),
	            v.charCodeAt(1),
	            v.charCodeAt(2),
	            v.charCodeAt(3)];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.TAG = constant(4);
	
	// CFF data types ///////////////////////////////////////////////////////////
	
	encode.Card8 = encode.BYTE;
	sizeOf.Card8 = sizeOf.BYTE;
	
	encode.Card16 = encode.USHORT;
	sizeOf.Card16 = sizeOf.USHORT;
	
	encode.OffSize = encode.BYTE;
	sizeOf.OffSize = sizeOf.BYTE;
	
	encode.SID = encode.USHORT;
	sizeOf.SID = sizeOf.USHORT;
	
	// Convert a numeric operand or charstring number to a variable-size list of bytes.
	/**
	 * Convert a numeric operand or charstring number to a variable-size list of bytes.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.NUMBER = function(v) {
	    if (v >= -107 && v <= 107) {
	        return [v + 139];
	    } else if (v >= 108 && v <= 1131) {
	        v = v - 108;
	        return [(v >> 8) + 247, v & 0xFF];
	    } else if (v >= -1131 && v <= -108) {
	        v = -v - 108;
	        return [(v >> 8) + 251, v & 0xFF];
	    } else if (v >= -32768 && v <= 32767) {
	        return encode.NUMBER16(v);
	    } else {
	        return encode.NUMBER32(v);
	    }
	};
	
	/**
	 * @param {number}
	 * @returns {number}
	 */
	sizeOf.NUMBER = function(v) {
	    return encode.NUMBER(v).length;
	};
	
	/**
	 * Convert a signed number between -32768 and +32767 to a three-byte value.
	 * This ensures we always use three bytes, but is not the most compact format.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.NUMBER16 = function(v) {
	    return [28, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.NUMBER16 = constant(3);
	
	/**
	 * Convert a signed number between -(2^31) and +(2^31-1) to a five-byte value.
	 * This is useful if you want to be sure you always use four bytes,
	 * at the expense of wasting a few bytes for smaller numbers.
	 * @param {number}
	 * @returns {Array}
	 */
	encode.NUMBER32 = function(v) {
	    return [29, (v >> 24) & 0xFF, (v >> 16) & 0xFF, (v >> 8) & 0xFF, v & 0xFF];
	};
	
	/**
	 * @constant
	 * @type {number}
	 */
	sizeOf.NUMBER32 = constant(5);
	
	/**
	 * @param {number}
	 * @returns {Array}
	 */
	encode.REAL = function(v) {
	    var value = v.toString();
	
	    // Some numbers use an epsilon to encode the value. (e.g. JavaScript will store 0.0000001 as 1e-7)
	    // This code converts it back to a number without the epsilon.
	    var m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
	    if (m) {
	        var epsilon = parseFloat('1e' + ((m[2] ? +m[2] : 0) + m[1].length));
	        value = (Math.round(v * epsilon) / epsilon).toString();
	    }
	
	    var nibbles = '';
	    var i;
	    var ii;
	    for (i = 0, ii = value.length; i < ii; i += 1) {
	        var c = value[i];
	        if (c === 'e') {
	            nibbles += value[++i] === '-' ? 'c' : 'b';
	        } else if (c === '.') {
	            nibbles += 'a';
	        } else if (c === '-') {
	            nibbles += 'e';
	        } else {
	            nibbles += c;
	        }
	    }
	
	    nibbles += (nibbles.length & 1) ? 'f' : 'ff';
	    var out = [30];
	    for (i = 0, ii = nibbles.length; i < ii; i += 2) {
	        out.push(parseInt(nibbles.substr(i, 2), 16));
	    }
	
	    return out;
	};
	
	/**
	 * @param {number}
	 * @returns {number}
	 */
	sizeOf.REAL = function(v) {
	    return encode.REAL(v).length;
	};
	
	encode.NAME = encode.CHARARRAY;
	sizeOf.NAME = sizeOf.CHARARRAY;
	
	encode.STRING = encode.CHARARRAY;
	sizeOf.STRING = sizeOf.CHARARRAY;
	
	/**
	 * @param {DataView} data
	 * @param {number} offset
	 * @param {number} numBytes
	 * @returns {string}
	 */
	decode.UTF8 = function(data, offset, numBytes) {
	    var codePoints = [];
	    var numChars = numBytes;
	    for (var j = 0; j < numChars; j++, offset += 1) {
	        codePoints[j] = data.getUint8(offset);
	    }
	
	    return String.fromCharCode.apply(null, codePoints);
	};
	
	/**
	 * @param {DataView} data
	 * @param {number} offset
	 * @param {number} numBytes
	 * @returns {string}
	 */
	decode.UTF16 = function(data, offset, numBytes) {
	    var codePoints = [];
	    var numChars = numBytes / 2;
	    for (var j = 0; j < numChars; j++, offset += 2) {
	        codePoints[j] = data.getUint16(offset);
	    }
	
	    return String.fromCharCode.apply(null, codePoints);
	};
	
	/**
	 * Convert a JavaScript string to UTF16-BE.
	 * @param {string}
	 * @returns {Array}
	 */
	encode.UTF16 = function(v) {
	    var b = [];
	    for (var i = 0; i < v.length; i += 1) {
	        var codepoint = v.charCodeAt(i);
	        b[b.length] = (codepoint >> 8) & 0xFF;
	        b[b.length] = codepoint & 0xFF;
	    }
	
	    return b;
	};
	
	/**
	 * @param {string}
	 * @returns {number}
	 */
	sizeOf.UTF16 = function(v) {
	    return v.length * 2;
	};
	
	// Data for converting old eight-bit Macintosh encodings to Unicode.
	// This representation is optimized for decoding; encoding is slower
	// and needs more memory. The assumption is that all opentype.js users
	// want to open fonts, but saving a font will be comperatively rare
	// so it can be more expensive. Keyed by IANA character set name.
	//
	// Python script for generating these strings:
	//
	//     s = u''.join([chr(c).decode('mac_greek') for c in range(128, 256)])
	//     print(s.encode('utf-8'))
	/**
	 * @private
	 */
	var eightBitMacEncodings = {
	    'x-mac-croatian':  // Python: 'mac_croatian'
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø' +
	        '¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ',
	    'x-mac-cyrillic':  // Python: 'mac_cyrillic'
	        'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњ' +
	        'јЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю',
	    'x-mac-gaelic':
	        // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæø' +
	        'ṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ',
	    'x-mac-greek':  // Python: 'mac_greek'
	        'Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩ' +
	        'άΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\u00AD',
	    'x-mac-icelandic':  // Python: 'mac_iceland'
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' +
	        '¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ',
	    'x-mac-inuit':
	        // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
	        'ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗ' +
	        'ᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł',
	    'x-mac-ce':  // Python: 'mac_latin2'
	        'ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅ' +
	        'ņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ',
	    macintosh:  // Python: 'mac_roman'
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' +
	        '¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ',
	    'x-mac-romanian':  // Python: 'mac_romanian'
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș' +
	        '¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ',
	    'x-mac-turkish':  // Python: 'mac_turkish'
	        'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' +
	        '¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ'
	};
	
	/**
	 * Decodes an old-style Macintosh string. Returns either a Unicode JavaScript
	 * string, or 'undefined' if the encoding is unsupported. For example, we do
	 * not support Chinese, Japanese or Korean because these would need large
	 * mapping tables.
	 * @param {DataView} dataView
	 * @param {number} offset
	 * @param {number} dataLength
	 * @param {string} encoding
	 * @returns {string}
	 */
	decode.MACSTRING = function(dataView, offset, dataLength, encoding) {
	    var table = eightBitMacEncodings[encoding];
	    if (table === undefined) {
	        return undefined;
	    }
	
	    var result = '';
	    for (var i = 0; i < dataLength; i++) {
	        var c = dataView.getUint8(offset + i);
	        // In all eight-bit Mac encodings, the characters 0x00..0x7F are
	        // mapped to U+0000..U+007F; we only need to look up the others.
	        if (c <= 0x7F) {
	            result += String.fromCharCode(c);
	        } else {
	            result += table[c & 0x7F];
	        }
	    }
	
	    return result;
	};
	
	// Helper function for encode.MACSTRING. Returns a dictionary for mapping
	// Unicode character codes to their 8-bit MacOS equivalent. This table
	// is not exactly a super cheap data structure, but we do not care because
	// encoding Macintosh strings is only rarely needed in typical applications.
	var macEncodingTableCache = typeof WeakMap === 'function' && new WeakMap();
	var macEncodingCacheKeys;
	var getMacEncodingTable = function(encoding) {
	    // Since we use encoding as a cache key for WeakMap, it has to be
	    // a String object and not a literal. And at least on NodeJS 2.10.1,
	    // WeakMap requires that the same String instance is passed for cache hits.
	    if (!macEncodingCacheKeys) {
	        macEncodingCacheKeys = {};
	        for (var e in eightBitMacEncodings) {
	            /*jshint -W053 */  // Suppress "Do not use String as a constructor."
	            macEncodingCacheKeys[e] = new String(e);
	        }
	    }
	
	    var cacheKey = macEncodingCacheKeys[encoding];
	    if (cacheKey === undefined) {
	        return undefined;
	    }
	
	    // We can't do "if (cache.has(key)) {return cache.get(key)}" here:
	    // since garbage collection may run at any time, it could also kick in
	    // between the calls to cache.has() and cache.get(). In that case,
	    // we would return 'undefined' even though we do support the encoding.
	    if (macEncodingTableCache) {
	        var cachedTable = macEncodingTableCache.get(cacheKey);
	        if (cachedTable !== undefined) {
	            return cachedTable;
	        }
	    }
	
	    var decodingTable = eightBitMacEncodings[encoding];
	    if (decodingTable === undefined) {
	        return undefined;
	    }
	
	    var encodingTable = {};
	    for (var i = 0; i < decodingTable.length; i++) {
	        encodingTable[decodingTable.charCodeAt(i)] = i + 0x80;
	    }
	
	    if (macEncodingTableCache) {
	        macEncodingTableCache.set(cacheKey, encodingTable);
	    }
	
	    return encodingTable;
	};
	
	/**
	 * Encodes an old-style Macintosh string. Returns a byte array upon success.
	 * If the requested encoding is unsupported, or if the input string contains
	 * a character that cannot be expressed in the encoding, the function returns
	 * 'undefined'.
	 * @param {string} str
	 * @param {string} encoding
	 * @returns {Array}
	 */
	encode.MACSTRING = function(str, encoding) {
	    var table = getMacEncodingTable(encoding);
	    if (table === undefined) {
	        return undefined;
	    }
	
	    var result = [];
	    for (var i = 0; i < str.length; i++) {
	        var c = str.charCodeAt(i);
	
	        // In all eight-bit Mac encodings, the characters 0x00..0x7F are
	        // mapped to U+0000..U+007F; we only need to look up the others.
	        if (c >= 0x80) {
	            c = table[c];
	            if (c === undefined) {
	                // str contains a Unicode character that cannot be encoded
	                // in the requested encoding.
	                return undefined;
	            }
	        }
	        result[i] = c;
	        // result.push(c);
	    }
	
	    return result;
	};
	
	/**
	 * @param {string} str
	 * @param {string} encoding
	 * @returns {number}
	 */
	sizeOf.MACSTRING = function(str, encoding) {
	    var b = encode.MACSTRING(str, encoding);
	    if (b !== undefined) {
	        return b.length;
	    } else {
	        return 0;
	    }
	};
	
	// Convert a list of values to a CFF INDEX structure.
	// The values should be objects containing name / type / value.
	/**
	 * @param {Array} l
	 * @returns {Array}
	 */
	encode.INDEX = function(l) {
	    var i;
	    //var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
	    //    i, v;
	    // Because we have to know which data type to use to encode the offsets,
	    // we have to go through the values twice: once to encode the data and
	    // calculate the offets, then again to encode the offsets using the fitting data type.
	    var offset = 1; // First offset is always 1.
	    var offsets = [offset];
	    var data = [];
	    for (i = 0; i < l.length; i += 1) {
	        var v = encode.OBJECT(l[i]);
	        Array.prototype.push.apply(data, v);
	        offset += v.length;
	        offsets.push(offset);
	    }
	
	    if (data.length === 0) {
	        return [0, 0];
	    }
	
	    var encodedOffsets = [];
	    var offSize = (1 + Math.floor(Math.log(offset) / Math.log(2)) / 8) | 0;
	    var offsetEncoder = [undefined, encode.BYTE, encode.USHORT, encode.UINT24, encode.ULONG][offSize];
	    for (i = 0; i < offsets.length; i += 1) {
	        var encodedOffset = offsetEncoder(offsets[i]);
	        Array.prototype.push.apply(encodedOffsets, encodedOffset);
	    }
	
	    return Array.prototype.concat(encode.Card16(l.length),
	                           encode.OffSize(offSize),
	                           encodedOffsets,
	                           data);
	};
	
	/**
	 * @param {Array}
	 * @returns {number}
	 */
	sizeOf.INDEX = function(v) {
	    return encode.INDEX(v).length;
	};
	
	/**
	 * Convert an object to a CFF DICT structure.
	 * The keys should be numeric.
	 * The values should be objects containing name / type / value.
	 * @param {Object} m
	 * @returns {Array}
	 */
	encode.DICT = function(m) {
	    var d = [];
	    var keys = Object.keys(m);
	    var length = keys.length;
	
	    for (var i = 0; i < length; i += 1) {
	        // Object.keys() return string keys, but our keys are always numeric.
	        var k = parseInt(keys[i], 0);
	        var v = m[k];
	        // Value comes before the key.
	        d = d.concat(encode.OPERAND(v.value, v.type));
	        d = d.concat(encode.OPERATOR(k));
	    }
	
	    return d;
	};
	
	/**
	 * @param {Object}
	 * @returns {number}
	 */
	sizeOf.DICT = function(m) {
	    return encode.DICT(m).length;
	};
	
	/**
	 * @param {number}
	 * @returns {Array}
	 */
	encode.OPERATOR = function(v) {
	    if (v < 1200) {
	        return [v];
	    } else {
	        return [12, v - 1200];
	    }
	};
	
	/**
	 * @param {Array} v
	 * @param {string}
	 * @returns {Array}
	 */
	encode.OPERAND = function(v, type) {
	    var d = [];
	    if (Array.isArray(type)) {
	        for (var i = 0; i < type.length; i += 1) {
	            check.argument(v.length === type.length, 'Not enough arguments given for type' + type);
	            d = d.concat(encode.OPERAND(v[i], type[i]));
	        }
	    } else {
	        if (type === 'SID') {
	            d = d.concat(encode.NUMBER(v));
	        } else if (type === 'offset') {
	            // We make it easy for ourselves and always encode offsets as
	            // 4 bytes. This makes offset calculation for the top dict easier.
	            d = d.concat(encode.NUMBER32(v));
	        } else if (type === 'number') {
	            d = d.concat(encode.NUMBER(v));
	        } else if (type === 'real') {
	            d = d.concat(encode.REAL(v));
	        } else {
	            throw new Error('Unknown operand type ' + type);
	            // FIXME Add support for booleans
	        }
	    }
	
	    return d;
	};
	
	encode.OP = encode.BYTE;
	sizeOf.OP = sizeOf.BYTE;
	
	// memoize charstring encoding using WeakMap if available
	var wmm = typeof WeakMap === 'function' && new WeakMap();
	
	/**
	 * Convert a list of CharString operations to bytes.
	 * @param {Array}
	 * @returns {Array}
	 */
	encode.CHARSTRING = function(ops) {
	    // See encode.MACSTRING for why we don't do "if (wmm && wmm.has(ops))".
	    if (wmm) {
	        var cachedValue = wmm.get(ops);
	        if (cachedValue !== undefined) {
	            return cachedValue;
	        }
	    }
	
	    var d = [];
	    var length = ops.length;
	
	    for (var i = 0; i < length; i += 1) {
	        var op = ops[i];
	        d = d.concat(encode[op.type](op.value));
	    }
	
	    if (wmm) {
	        wmm.set(ops, d);
	    }
	
	    return d;
	};
	
	/**
	 * @param {Array}
	 * @returns {number}
	 */
	sizeOf.CHARSTRING = function(ops) {
	    return encode.CHARSTRING(ops).length;
	};
	
	// Utility functions ////////////////////////////////////////////////////////
	
	/**
	 * Convert an object containing name / type / value to bytes.
	 * @param {Object}
	 * @returns {Array}
	 */
	encode.OBJECT = function(v) {
	    var encodingFunction = encode[v.type];
	    check.argument(encodingFunction !== undefined, 'No encoding function for type ' + v.type);
	    return encodingFunction(v.value);
	};
	
	/**
	 * @param {Object}
	 * @returns {number}
	 */
	sizeOf.OBJECT = function(v) {
	    var sizeOfFunction = sizeOf[v.type];
	    check.argument(sizeOfFunction !== undefined, 'No sizeOf function for type ' + v.type);
	    return sizeOfFunction(v.value);
	};
	
	/**
	 * Convert a table object to bytes.
	 * A table contains a list of fields containing the metadata (name, type and default value).
	 * The table itself has the field values set as attributes.
	 * @param {opentype.Table}
	 * @returns {Array}
	 */
	encode.TABLE = function(table) {
	    var d = [];
	    var length = table.fields.length;
	    var subtables = [];
	    var subtableOffsets = [];
	    var i;
	
	    for (i = 0; i < length; i += 1) {
	        var field = table.fields[i];
	        var encodingFunction = encode[field.type];
	        check.argument(encodingFunction !== undefined, 'No encoding function for field type ' + field.type + ' (' + field.name + ')');
	        var value = table[field.name];
	        if (value === undefined) {
	            value = field.value;
	        }
	
	        var bytes = encodingFunction(value);
	
	        if (field.type === 'TABLE') {
	            subtableOffsets.push(d.length);
	            d = d.concat([0, 0]);
	            subtables.push(bytes);
	        } else {
	            d = d.concat(bytes);
	        }
	    }
	
	    for (i = 0; i < subtables.length; i += 1) {
	        var o = subtableOffsets[i];
	        var offset = d.length;
	        check.argument(offset < 65536, 'Table ' + table.tableName + ' too big.');
	        d[o] = offset >> 8;
	        d[o + 1] = offset & 0xff;
	        d = d.concat(subtables[i]);
	    }
	
	    return d;
	};
	
	/**
	 * @param {opentype.Table}
	 * @returns {number}
	 */
	sizeOf.TABLE = function(table) {
	    var numBytes = 0;
	    var length = table.fields.length;
	
	    for (var i = 0; i < length; i += 1) {
	        var field = table.fields[i];
	        var sizeOfFunction = sizeOf[field.type];
	        check.argument(sizeOfFunction !== undefined, 'No sizeOf function for field type ' + field.type + ' (' + field.name + ')');
	        var value = table[field.name];
	        if (value === undefined) {
	            value = field.value;
	        }
	
	        numBytes += sizeOfFunction(value);
	
	        // Subtables take 2 more bytes for offsets.
	        if (field.type === 'TABLE') {
	            numBytes += 2;
	        }
	    }
	
	    return numBytes;
	};
	
	encode.RECORD = encode.TABLE;
	sizeOf.RECORD = sizeOf.TABLE;
	
	// Merge in a list of bytes.
	encode.LITERAL = function(v) {
	    return v;
	};
	
	sizeOf.LITERAL = function(v) {
	    return v.length;
	};
	
	exports.decode = decode;
	exports.encode = encode;
	exports.sizeOf = sizeOf;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// The `cmap` table stores the mappings from characters to glyphs.
	// https://www.microsoft.com/typography/OTSPEC/cmap.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	function parseCmapTableFormat12(cmap, p) {
	    var i;
	
	    //Skip reserved.
	    p.parseUShort();
	
	    // Length in bytes of the sub-tables.
	    cmap.length = p.parseULong();
	    cmap.language = p.parseULong();
	
	    var groupCount;
	    cmap.groupCount = groupCount = p.parseULong();
	    cmap.glyphIndexMap = {};
	
	    for (i = 0; i < groupCount; i += 1) {
	        var startCharCode = p.parseULong();
	        var endCharCode = p.parseULong();
	        var startGlyphId = p.parseULong();
	
	        for (var c = startCharCode; c <= endCharCode; c += 1) {
	            cmap.glyphIndexMap[c] = startGlyphId;
	            startGlyphId++;
	        }
	    }
	}
	
	function parseCmapTableFormat4(cmap, p, data, start, offset) {
	    var i;
	
	    // Length in bytes of the sub-tables.
	    cmap.length = p.parseUShort();
	    cmap.language = p.parseUShort();
	
	    // segCount is stored x 2.
	    var segCount;
	    cmap.segCount = segCount = p.parseUShort() >> 1;
	
	    // Skip searchRange, entrySelector, rangeShift.
	    p.skip('uShort', 3);
	
	    // The "unrolled" mapping from character codes to glyph indices.
	    cmap.glyphIndexMap = {};
	    var endCountParser = new parse.Parser(data, start + offset + 14);
	    var startCountParser = new parse.Parser(data, start + offset + 16 + segCount * 2);
	    var idDeltaParser = new parse.Parser(data, start + offset + 16 + segCount * 4);
	    var idRangeOffsetParser = new parse.Parser(data, start + offset + 16 + segCount * 6);
	    var glyphIndexOffset = start + offset + 16 + segCount * 8;
	    for (i = 0; i < segCount - 1; i += 1) {
	        var glyphIndex;
	        var endCount = endCountParser.parseUShort();
	        var startCount = startCountParser.parseUShort();
	        var idDelta = idDeltaParser.parseShort();
	        var idRangeOffset = idRangeOffsetParser.parseUShort();
	        for (var c = startCount; c <= endCount; c += 1) {
	            if (idRangeOffset !== 0) {
	                // The idRangeOffset is relative to the current position in the idRangeOffset array.
	                // Take the current offset in the idRangeOffset array.
	                glyphIndexOffset = (idRangeOffsetParser.offset + idRangeOffsetParser.relativeOffset - 2);
	
	                // Add the value of the idRangeOffset, which will move us into the glyphIndex array.
	                glyphIndexOffset += idRangeOffset;
	
	                // Then add the character index of the current segment, multiplied by 2 for USHORTs.
	                glyphIndexOffset += (c - startCount) * 2;
	                glyphIndex = parse.getUShort(data, glyphIndexOffset);
	                if (glyphIndex !== 0) {
	                    glyphIndex = (glyphIndex + idDelta) & 0xFFFF;
	                }
	            } else {
	                glyphIndex = (c + idDelta) & 0xFFFF;
	            }
	
	            cmap.glyphIndexMap[c] = glyphIndex;
	        }
	    }
	}
	
	// Parse the `cmap` table. This table stores the mappings from characters to glyphs.
	// There are many available formats, but we only support the Windows format 4 and 12.
	// This function returns a `CmapEncoding` object or null if no supported format could be found.
	function parseCmapTable(data, start) {
	    var i;
	    var cmap = {};
	    cmap.version = parse.getUShort(data, start);
	    check.argument(cmap.version === 0, 'cmap table version should be 0.');
	
	    // The cmap table can contain many sub-tables, each with their own format.
	    // We're only interested in a "platform 3" table. This is a Windows format.
	    cmap.numTables = parse.getUShort(data, start + 2);
	    var offset = -1;
	    for (i = cmap.numTables - 1; i >= 0; i -= 1) {
	        var platformId = parse.getUShort(data, start + 4 + (i * 8));
	        var encodingId = parse.getUShort(data, start + 4 + (i * 8) + 2);
	        if (platformId === 3 && (encodingId === 0 || encodingId === 1 || encodingId === 10)) {
	            offset = parse.getULong(data, start + 4 + (i * 8) + 4);
	            break;
	        }
	    }
	
	    if (offset === -1) {
	        // There is no cmap table in the font that we support, so return null.
	        // This font will be marked as unsupported.
	        return null;
	    }
	
	    var p = new parse.Parser(data, start + offset);
	    cmap.format = p.parseUShort();
	
	    if (cmap.format === 12) {
	        parseCmapTableFormat12(cmap, p);
	    } else if (cmap.format === 4) {
	        parseCmapTableFormat4(cmap, p, data, start, offset);
	    } else {
	        throw new Error('Only format 4 and 12 cmap tables are supported.');
	    }
	
	    return cmap;
	}
	
	function addSegment(t, code, glyphIndex) {
	    t.segments.push({
	        end: code,
	        start: code,
	        delta: -(code - glyphIndex),
	        offset: 0
	    });
	}
	
	function addTerminatorSegment(t) {
	    t.segments.push({
	        end: 0xFFFF,
	        start: 0xFFFF,
	        delta: 1,
	        offset: 0
	    });
	}
	
	function makeCmapTable(glyphs) {
	    var i;
	    var t = new table.Table('cmap', [
	        {name: 'version', type: 'USHORT', value: 0},
	        {name: 'numTables', type: 'USHORT', value: 1},
	        {name: 'platformID', type: 'USHORT', value: 3},
	        {name: 'encodingID', type: 'USHORT', value: 1},
	        {name: 'offset', type: 'ULONG', value: 12},
	        {name: 'format', type: 'USHORT', value: 4},
	        {name: 'length', type: 'USHORT', value: 0},
	        {name: 'language', type: 'USHORT', value: 0},
	        {name: 'segCountX2', type: 'USHORT', value: 0},
	        {name: 'searchRange', type: 'USHORT', value: 0},
	        {name: 'entrySelector', type: 'USHORT', value: 0},
	        {name: 'rangeShift', type: 'USHORT', value: 0}
	    ]);
	
	    t.segments = [];
	    for (i = 0; i < glyphs.length; i += 1) {
	        var glyph = glyphs.get(i);
	        for (var j = 0; j < glyph.unicodes.length; j += 1) {
	            addSegment(t, glyph.unicodes[j], i);
	        }
	
	        t.segments = t.segments.sort(function(a, b) {
	            return a.start - b.start;
	        });
	    }
	
	    addTerminatorSegment(t);
	
	    var segCount;
	    segCount = t.segments.length;
	    t.segCountX2 = segCount * 2;
	    t.searchRange = Math.pow(2, Math.floor(Math.log(segCount) / Math.log(2))) * 2;
	    t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
	    t.rangeShift = t.segCountX2 - t.searchRange;
	
	    // Set up parallel segment arrays.
	    var endCounts = [];
	    var startCounts = [];
	    var idDeltas = [];
	    var idRangeOffsets = [];
	    var glyphIds = [];
	
	    for (i = 0; i < segCount; i += 1) {
	        var segment = t.segments[i];
	        endCounts = endCounts.concat({name: 'end_' + i, type: 'USHORT', value: segment.end});
	        startCounts = startCounts.concat({name: 'start_' + i, type: 'USHORT', value: segment.start});
	        idDeltas = idDeltas.concat({name: 'idDelta_' + i, type: 'SHORT', value: segment.delta});
	        idRangeOffsets = idRangeOffsets.concat({name: 'idRangeOffset_' + i, type: 'USHORT', value: segment.offset});
	        if (segment.glyphId !== undefined) {
	            glyphIds = glyphIds.concat({name: 'glyph_' + i, type: 'USHORT', value: segment.glyphId});
	        }
	    }
	
	    t.fields = t.fields.concat(endCounts);
	    t.fields.push({name: 'reservedPad', type: 'USHORT', value: 0});
	    t.fields = t.fields.concat(startCounts);
	    t.fields = t.fields.concat(idDeltas);
	    t.fields = t.fields.concat(idRangeOffsets);
	    t.fields = t.fields.concat(glyphIds);
	
	    t.length = 14 + // Subtable header
	        endCounts.length * 2 +
	        2 + // reservedPad
	        startCounts.length * 2 +
	        idDeltas.length * 2 +
	        idRangeOffsets.length * 2 +
	        glyphIds.length * 2;
	
	    return t;
	}
	
	exports.parse = parseCmapTable;
	exports.make = makeCmapTable;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// Parsing utility functions
	
	'use strict';
	
	var check = __webpack_require__(57);
	
	// Retrieve an unsigned byte from the DataView.
	exports.getByte = function getByte(dataView, offset) {
	    return dataView.getUint8(offset);
	};
	
	exports.getCard8 = exports.getByte;
	
	// Retrieve an unsigned 16-bit short from the DataView.
	// The value is stored in big endian.
	function getUShort(dataView, offset) {
	    return dataView.getUint16(offset, false);
	}
	
	exports.getUShort = exports.getCard16 = getUShort;
	
	// Retrieve a signed 16-bit short from the DataView.
	// The value is stored in big endian.
	exports.getShort = function(dataView, offset) {
	    return dataView.getInt16(offset, false);
	};
	
	// Retrieve an unsigned 32-bit long from the DataView.
	// The value is stored in big endian.
	exports.getULong = function(dataView, offset) {
	    return dataView.getUint32(offset, false);
	};
	
	// Retrieve a 32-bit signed fixed-point number (16.16) from the DataView.
	// The value is stored in big endian.
	exports.getFixed = function(dataView, offset) {
	    var decimal = dataView.getInt16(offset, false);
	    var fraction = dataView.getUint16(offset + 2, false);
	    return decimal + fraction / 65535;
	};
	
	// Retrieve a 4-character tag from the DataView.
	// Tags are used to identify tables.
	exports.getTag = function(dataView, offset) {
	    var tag = '';
	    for (var i = offset; i < offset + 4; i += 1) {
	        tag += String.fromCharCode(dataView.getInt8(i));
	    }
	
	    return tag;
	};
	
	// Retrieve an offset from the DataView.
	// Offsets are 1 to 4 bytes in length, depending on the offSize argument.
	exports.getOffset = function(dataView, offset, offSize) {
	    var v = 0;
	    for (var i = 0; i < offSize; i += 1) {
	        v <<= 8;
	        v += dataView.getUint8(offset + i);
	    }
	
	    return v;
	};
	
	// Retrieve a number of bytes from start offset to the end offset from the DataView.
	exports.getBytes = function(dataView, startOffset, endOffset) {
	    var bytes = [];
	    for (var i = startOffset; i < endOffset; i += 1) {
	        bytes.push(dataView.getUint8(i));
	    }
	
	    return bytes;
	};
	
	// Convert the list of bytes to a string.
	exports.bytesToString = function(bytes) {
	    var s = '';
	    for (var i = 0; i < bytes.length; i += 1) {
	        s += String.fromCharCode(bytes[i]);
	    }
	
	    return s;
	};
	
	var typeOffsets = {
	    byte: 1,
	    uShort: 2,
	    short: 2,
	    uLong: 4,
	    fixed: 4,
	    longDateTime: 8,
	    tag: 4
	};
	
	// A stateful parser that changes the offset whenever a value is retrieved.
	// The data is a DataView.
	function Parser(data, offset) {
	    this.data = data;
	    this.offset = offset;
	    this.relativeOffset = 0;
	}
	
	Parser.prototype.parseByte = function() {
	    var v = this.data.getUint8(this.offset + this.relativeOffset);
	    this.relativeOffset += 1;
	    return v;
	};
	
	Parser.prototype.parseChar = function() {
	    var v = this.data.getInt8(this.offset + this.relativeOffset);
	    this.relativeOffset += 1;
	    return v;
	};
	
	Parser.prototype.parseCard8 = Parser.prototype.parseByte;
	
	Parser.prototype.parseUShort = function() {
	    var v = this.data.getUint16(this.offset + this.relativeOffset);
	    this.relativeOffset += 2;
	    return v;
	};
	
	Parser.prototype.parseCard16 = Parser.prototype.parseUShort;
	Parser.prototype.parseSID = Parser.prototype.parseUShort;
	Parser.prototype.parseOffset16 = Parser.prototype.parseUShort;
	
	Parser.prototype.parseShort = function() {
	    var v = this.data.getInt16(this.offset + this.relativeOffset);
	    this.relativeOffset += 2;
	    return v;
	};
	
	Parser.prototype.parseF2Dot14 = function() {
	    var v = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
	    this.relativeOffset += 2;
	    return v;
	};
	
	Parser.prototype.parseULong = function() {
	    var v = exports.getULong(this.data, this.offset + this.relativeOffset);
	    this.relativeOffset += 4;
	    return v;
	};
	
	Parser.prototype.parseFixed = function() {
	    var v = exports.getFixed(this.data, this.offset + this.relativeOffset);
	    this.relativeOffset += 4;
	    return v;
	};
	
	Parser.prototype.parseString = function(length) {
	    var dataView = this.data;
	    var offset = this.offset + this.relativeOffset;
	    var string = '';
	    this.relativeOffset += length;
	    for (var i = 0; i < length; i++) {
	        string += String.fromCharCode(dataView.getUint8(offset + i));
	    }
	
	    return string;
	};
	
	Parser.prototype.parseTag = function() {
	    return this.parseString(4);
	};
	
	// LONGDATETIME is a 64-bit integer.
	// JavaScript and unix timestamps traditionally use 32 bits, so we
	// only take the last 32 bits.
	// + Since until 2038 those bits will be filled by zeros we can ignore them.
	Parser.prototype.parseLongDateTime = function() {
	    var v = exports.getULong(this.data, this.offset + this.relativeOffset + 4);
	    // Subtract seconds between 01/01/1904 and 01/01/1970
	    // to convert Apple Mac timstamp to Standard Unix timestamp
	    v -= 2082844800;
	    this.relativeOffset += 8;
	    return v;
	};
	
	Parser.prototype.parseVersion = function() {
	    var major = getUShort(this.data, this.offset + this.relativeOffset);
	
	    // How to interpret the minor version is very vague in the spec. 0x5000 is 5, 0x1000 is 1
	    // This returns the correct number if minor = 0xN000 where N is 0-9
	    var minor = getUShort(this.data, this.offset + this.relativeOffset + 2);
	    this.relativeOffset += 4;
	    return major + minor / 0x1000 / 10;
	};
	
	Parser.prototype.skip = function(type, amount) {
	    if (amount === undefined) {
	        amount = 1;
	    }
	
	    this.relativeOffset += typeOffsets[type] * amount;
	};
	
	///// Parsing lists and records ///////////////////////////////
	
	// Parse a list of 16 bit integers. The length of the list can be read on the stream
	// or provided as an argument.
	Parser.prototype.parseOffset16List =
	Parser.prototype.parseUShortList = function(count) {
	    if (count === undefined) { count = this.parseUShort(); }
	    var offsets = new Array(count);
	    var dataView = this.data;
	    var offset = this.offset + this.relativeOffset;
	    for (var i = 0; i < count; i++) {
	        offsets[i] = dataView.getUint16(offset);
	        offset += 2;
	    }
	
	    this.relativeOffset += count * 2;
	    return offsets;
	};
	
	/**
	 * Parse a list of items.
	 * Record count is optional, if omitted it is read from the stream.
	 * itemCallback is one of the Parser methods.
	 */
	Parser.prototype.parseList = function(count, itemCallback) {
	    if (!itemCallback) {
	        itemCallback = count;
	        count = this.parseUShort();
	    }
	    var list = new Array(count);
	    for (var i = 0; i < count; i++) {
	        list[i] = itemCallback.call(this);
	    }
	    return list;
	};
	
	/**
	 * Parse a list of records.
	 * Record count is optional, if omitted it is read from the stream.
	 * Example of recordDescription: { sequenceIndex: Parser.uShort, lookupListIndex: Parser.uShort }
	 */
	Parser.prototype.parseRecordList = function(count, recordDescription) {
	    // If the count argument is absent, read it in the stream.
	    if (!recordDescription) {
	        recordDescription = count;
	        count = this.parseUShort();
	    }
	    var records = new Array(count);
	    var fields = Object.keys(recordDescription);
	    for (var i = 0; i < count; i++) {
	        var rec = {};
	        for (var j = 0; j < fields.length; j++) {
	            var fieldName = fields[j];
	            var fieldType = recordDescription[fieldName];
	            rec[fieldName] = fieldType.call(this);
	        }
	        records[i] = rec;
	    }
	    return records;
	};
	
	// Parse a data structure into an object
	// Example of description: { sequenceIndex: Parser.uShort, lookupListIndex: Parser.uShort }
	Parser.prototype.parseStruct = function(description) {
	    if (typeof description === 'function') {
	        return description.call(this);
	    } else {
	        var fields = Object.keys(description);
	        var struct = {};
	        for (var j = 0; j < fields.length; j++) {
	            var fieldName = fields[j];
	            var fieldType = description[fieldName];
	            struct[fieldName] = fieldType.call(this);
	        }
	        return struct;
	    }
	};
	
	Parser.prototype.parsePointer = function(description) {
	    var structOffset = this.parseOffset16();
	    if (structOffset > 0) {                         // NULL offset => return indefined
	        return new Parser(this.data, this.offset + structOffset).parseStruct(description);
	    }
	};
	
	/**
	 * Parse a list of offsets to lists of 16-bit integers,
	 * or a list of offsets to lists of offsets to any kind of items.
	 * If itemCallback is not provided, a list of list of UShort is assumed.
	 * If provided, itemCallback is called on each item and must parse the item.
	 * See examples in tables/gsub.js
	 */
	Parser.prototype.parseListOfLists = function(itemCallback) {
	    var offsets = this.parseOffset16List();
	    var count = offsets.length;
	    var relativeOffset = this.relativeOffset;
	    var list = new Array(count);
	    for (var i = 0; i < count; i++) {
	        var start = offsets[i];
	        if (start === 0) {                  // NULL offset
	            list[i] = undefined;            // Add i as owned property to list. Convenient with assert.
	            continue;
	        }
	        this.relativeOffset = start;
	        if (itemCallback) {
	            var subOffsets = this.parseOffset16List();
	            var subList = new Array(subOffsets.length);
	            for (var j = 0; j < subOffsets.length; j++) {
	                this.relativeOffset = start + subOffsets[j];
	                subList[j] = itemCallback.call(this);
	            }
	            list[i] = subList;
	        } else {
	            list[i] = this.parseUShortList();
	        }
	    }
	    this.relativeOffset = relativeOffset;
	    return list;
	};
	
	///// Complex tables parsing //////////////////////////////////
	
	// Parse a coverage table in a GSUB, GPOS or GDEF table.
	// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
	// parser.offset must point to the start of the table containing the coverage.
	Parser.prototype.parseCoverage = function() {
	    var startOffset = this.offset + this.relativeOffset;
	    var format = this.parseUShort();
	    var count = this.parseUShort();
	    if (format === 1) {
	        return {
	            format: 1,
	            glyphs: this.parseUShortList(count)
	        };
	    } else if (format === 2) {
	        var ranges = new Array(count);
	        for (var i = 0; i < count; i++) {
	            ranges[i] = {
	                start: this.parseUShort(),
	                end: this.parseUShort(),
	                index: this.parseUShort()
	            };
	        }
	        return {
	            format: 2,
	            ranges: ranges
	        };
	    }
	    check.assert(false, '0x' + startOffset.toString(16) + ': Coverage format must be 1 or 2.');
	};
	
	// Parse a Class Definition Table in a GSUB, GPOS or GDEF table.
	// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
	Parser.prototype.parseClassDef = function() {
	    var startOffset = this.offset + this.relativeOffset;
	    var format = this.parseUShort();
	    if (format === 1) {
	        return {
	            format: 1,
	            startGlyph: this.parseUShort(),
	            classes: this.parseUShortList()
	        };
	    } else if (format === 2) {
	        return {
	            format: 2,
	            ranges: this.parseRecordList({
	                start: Parser.uShort,
	                end: Parser.uShort,
	                classId: Parser.uShort
	            })
	        };
	    }
	    check.assert(false, '0x' + startOffset.toString(16) + ': ClassDef format must be 1 or 2.');
	};
	
	///// Static methods ///////////////////////////////////
	// These convenience methods can be used as callbacks and should be called with "this" context set to a Parser instance.
	
	Parser.list = function(count, itemCallback) {
	    return function() {
	        return this.parseList(count, itemCallback);
	    };
	};
	
	Parser.recordList = function(count, recordDescription) {
	    return function() {
	        return this.parseRecordList(count, recordDescription);
	    };
	};
	
	Parser.pointer = function(description) {
	    return function() {
	        return this.parsePointer(description);
	    };
	};
	
	Parser.tag = Parser.prototype.parseTag;
	Parser.byte = Parser.prototype.parseByte;
	Parser.uShort = Parser.offset16 = Parser.prototype.parseUShort;
	Parser.uShortList = Parser.prototype.parseUShortList;
	Parser.struct = Parser.prototype.parseStruct;
	Parser.coverage = Parser.prototype.parseCoverage;
	Parser.classDef = Parser.prototype.parseClassDef;
	
	///// Script, Feature, Lookup lists ///////////////////////////////////////////////
	// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
	
	var langSysTable = {
	    reserved: Parser.uShort,
	    reqFeatureIndex: Parser.uShort,
	    featureIndexes: Parser.uShortList
	};
	
	Parser.prototype.parseScriptList = function() {
	    return this.parsePointer(Parser.recordList({
	        tag: Parser.tag,
	        script: Parser.pointer({
	            defaultLangSys: Parser.pointer(langSysTable),
	            langSysRecords: Parser.recordList({
	                tag: Parser.tag,
	                langSys: Parser.pointer(langSysTable)
	            })
	        })
	    }));
	};
	
	Parser.prototype.parseFeatureList = function() {
	    return this.parsePointer(Parser.recordList({
	        tag: Parser.tag,
	        feature: Parser.pointer({
	            featureParams: Parser.offset16,
	            lookupListIndexes: Parser.uShortList
	        })
	    }));
	};
	
	Parser.prototype.parseLookupList = function(lookupTableParsers) {
	    return this.parsePointer(Parser.list(Parser.pointer(function() {
	        var lookupType = this.parseUShort();
	        check.argument(1 <= lookupType && lookupType <= 8, 'GSUB lookup type ' + lookupType + ' unknown.');
	        var lookupFlag = this.parseUShort();
	        var useMarkFilteringSet = lookupFlag & 0x10;
	        return {
	            lookupType: lookupType,
	            lookupFlag: lookupFlag,
	            subtables: this.parseList(Parser.pointer(lookupTableParsers[lookupType])),
	            markFilteringSet: useMarkFilteringSet ? this.parseUShort() : undefined
	        };
	    })));
	};
	
	exports.Parser = Parser;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// The `CFF` table contains the glyph outlines in PostScript format.
	// https://www.microsoft.com/typography/OTSPEC/cff.htm
	// http://download.microsoft.com/download/8/0/1/801a191c-029d-4af3-9642-555f6fe514ee/cff.pdf
	// http://download.microsoft.com/download/8/0/1/801a191c-029d-4af3-9642-555f6fe514ee/type2.pdf
	
	'use strict';
	
	var encoding = __webpack_require__(53);
	var glyphset = __webpack_require__(63);
	var parse = __webpack_require__(61);
	var path = __webpack_require__(55);
	var table = __webpack_require__(58);
	
	// Custom equals function that can also check lists.
	function equals(a, b) {
	    if (a === b) {
	        return true;
	    } else if (Array.isArray(a) && Array.isArray(b)) {
	        if (a.length !== b.length) {
	            return false;
	        }
	
	        for (var i = 0; i < a.length; i += 1) {
	            if (!equals(a[i], b[i])) {
	                return false;
	            }
	        }
	
	        return true;
	    } else {
	        return false;
	    }
	}
	
	// Parse a `CFF` INDEX array.
	// An index array consists of a list of offsets, then a list of objects at those offsets.
	function parseCFFIndex(data, start, conversionFn) {
	    //var i, objectOffset, endOffset;
	    var offsets = [];
	    var objects = [];
	    var count = parse.getCard16(data, start);
	    var i;
	    var objectOffset;
	    var endOffset;
	    if (count !== 0) {
	        var offsetSize = parse.getByte(data, start + 2);
	        objectOffset = start + ((count + 1) * offsetSize) + 2;
	        var pos = start + 3;
	        for (i = 0; i < count + 1; i += 1) {
	            offsets.push(parse.getOffset(data, pos, offsetSize));
	            pos += offsetSize;
	        }
	
	        // The total size of the index array is 4 header bytes + the value of the last offset.
	        endOffset = objectOffset + offsets[count];
	    } else {
	        endOffset = start + 2;
	    }
	
	    for (i = 0; i < offsets.length - 1; i += 1) {
	        var value = parse.getBytes(data, objectOffset + offsets[i], objectOffset + offsets[i + 1]);
	        if (conversionFn) {
	            value = conversionFn(value);
	        }
	
	        objects.push(value);
	    }
	
	    return {objects: objects, startOffset: start, endOffset: endOffset};
	}
	
	// Parse a `CFF` DICT real value.
	function parseFloatOperand(parser) {
	    var s = '';
	    var eof = 15;
	    var lookup = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'E', 'E-', null, '-'];
	    while (true) {
	        var b = parser.parseByte();
	        var n1 = b >> 4;
	        var n2 = b & 15;
	
	        if (n1 === eof) {
	            break;
	        }
	
	        s += lookup[n1];
	
	        if (n2 === eof) {
	            break;
	        }
	
	        s += lookup[n2];
	    }
	
	    return parseFloat(s);
	}
	
	// Parse a `CFF` DICT operand.
	function parseOperand(parser, b0) {
	    var b1;
	    var b2;
	    var b3;
	    var b4;
	    if (b0 === 28) {
	        b1 = parser.parseByte();
	        b2 = parser.parseByte();
	        return b1 << 8 | b2;
	    }
	
	    if (b0 === 29) {
	        b1 = parser.parseByte();
	        b2 = parser.parseByte();
	        b3 = parser.parseByte();
	        b4 = parser.parseByte();
	        return b1 << 24 | b2 << 16 | b3 << 8 | b4;
	    }
	
	    if (b0 === 30) {
	        return parseFloatOperand(parser);
	    }
	
	    if (b0 >= 32 && b0 <= 246) {
	        return b0 - 139;
	    }
	
	    if (b0 >= 247 && b0 <= 250) {
	        b1 = parser.parseByte();
	        return (b0 - 247) * 256 + b1 + 108;
	    }
	
	    if (b0 >= 251 && b0 <= 254) {
	        b1 = parser.parseByte();
	        return -(b0 - 251) * 256 - b1 - 108;
	    }
	
	    throw new Error('Invalid b0 ' + b0);
	}
	
	// Convert the entries returned by `parseDict` to a proper dictionary.
	// If a value is a list of one, it is unpacked.
	function entriesToObject(entries) {
	    var o = {};
	    for (var i = 0; i < entries.length; i += 1) {
	        var key = entries[i][0];
	        var values = entries[i][1];
	        var value;
	        if (values.length === 1) {
	            value = values[0];
	        } else {
	            value = values;
	        }
	
	        if (o.hasOwnProperty(key)) {
	            throw new Error('Object ' + o + ' already has key ' + key);
	        }
	
	        o[key] = value;
	    }
	
	    return o;
	}
	
	// Parse a `CFF` DICT object.
	// A dictionary contains key-value pairs in a compact tokenized format.
	function parseCFFDict(data, start, size) {
	    start = start !== undefined ? start : 0;
	    var parser = new parse.Parser(data, start);
	    var entries = [];
	    var operands = [];
	    size = size !== undefined ? size : data.length;
	
	    while (parser.relativeOffset < size) {
	        var op = parser.parseByte();
	
	        // The first byte for each dict item distinguishes between operator (key) and operand (value).
	        // Values <= 21 are operators.
	        if (op <= 21) {
	            // Two-byte operators have an initial escape byte of 12.
	            if (op === 12) {
	                op = 1200 + parser.parseByte();
	            }
	
	            entries.push([op, operands]);
	            operands = [];
	        } else {
	            // Since the operands (values) come before the operators (keys), we store all operands in a list
	            // until we encounter an operator.
	            operands.push(parseOperand(parser, op));
	        }
	    }
	
	    return entriesToObject(entries);
	}
	
	// Given a String Index (SID), return the value of the string.
	// Strings below index 392 are standard CFF strings and are not encoded in the font.
	function getCFFString(strings, index) {
	    if (index <= 390) {
	        index = encoding.cffStandardStrings[index];
	    } else {
	        index = strings[index - 391];
	    }
	
	    return index;
	}
	
	// Interpret a dictionary and return a new dictionary with readable keys and values for missing entries.
	// This function takes `meta` which is a list of objects containing `operand`, `name` and `default`.
	function interpretDict(dict, meta, strings) {
	    var newDict = {};
	
	    // Because we also want to include missing values, we start out from the meta list
	    // and lookup values in the dict.
	    for (var i = 0; i < meta.length; i += 1) {
	        var m = meta[i];
	        var value = dict[m.op];
	        if (value === undefined) {
	            value = m.value !== undefined ? m.value : null;
	        }
	
	        if (m.type === 'SID') {
	            value = getCFFString(strings, value);
	        }
	
	        newDict[m.name] = value;
	    }
	
	    return newDict;
	}
	
	// Parse the CFF header.
	function parseCFFHeader(data, start) {
	    var header = {};
	    header.formatMajor = parse.getCard8(data, start);
	    header.formatMinor = parse.getCard8(data, start + 1);
	    header.size = parse.getCard8(data, start + 2);
	    header.offsetSize = parse.getCard8(data, start + 3);
	    header.startOffset = start;
	    header.endOffset = start + 4;
	    return header;
	}
	
	var TOP_DICT_META = [
	    {name: 'version', op: 0, type: 'SID'},
	    {name: 'notice', op: 1, type: 'SID'},
	    {name: 'copyright', op: 1200, type: 'SID'},
	    {name: 'fullName', op: 2, type: 'SID'},
	    {name: 'familyName', op: 3, type: 'SID'},
	    {name: 'weight', op: 4, type: 'SID'},
	    {name: 'isFixedPitch', op: 1201, type: 'number', value: 0},
	    {name: 'italicAngle', op: 1202, type: 'number', value: 0},
	    {name: 'underlinePosition', op: 1203, type: 'number', value: -100},
	    {name: 'underlineThickness', op: 1204, type: 'number', value: 50},
	    {name: 'paintType', op: 1205, type: 'number', value: 0},
	    {name: 'charstringType', op: 1206, type: 'number', value: 2},
	    {name: 'fontMatrix', op: 1207, type: ['real', 'real', 'real', 'real', 'real', 'real'], value: [0.001, 0, 0, 0.001, 0, 0]},
	    {name: 'uniqueId', op: 13, type: 'number'},
	    {name: 'fontBBox', op: 5, type: ['number', 'number', 'number', 'number'], value: [0, 0, 0, 0]},
	    {name: 'strokeWidth', op: 1208, type: 'number', value: 0},
	    {name: 'xuid', op: 14, type: [], value: null},
	    {name: 'charset', op: 15, type: 'offset', value: 0},
	    {name: 'encoding', op: 16, type: 'offset', value: 0},
	    {name: 'charStrings', op: 17, type: 'offset', value: 0},
	    {name: 'private', op: 18, type: ['number', 'offset'], value: [0, 0]}
	];
	
	var PRIVATE_DICT_META = [
	    {name: 'subrs', op: 19, type: 'offset', value: 0},
	    {name: 'defaultWidthX', op: 20, type: 'number', value: 0},
	    {name: 'nominalWidthX', op: 21, type: 'number', value: 0}
	];
	
	// Parse the CFF top dictionary. A CFF table can contain multiple fonts, each with their own top dictionary.
	// The top dictionary contains the essential metadata for the font, together with the private dictionary.
	function parseCFFTopDict(data, strings) {
	    var dict = parseCFFDict(data, 0, data.byteLength);
	    return interpretDict(dict, TOP_DICT_META, strings);
	}
	
	// Parse the CFF private dictionary. We don't fully parse out all the values, only the ones we need.
	function parseCFFPrivateDict(data, start, size, strings) {
	    var dict = parseCFFDict(data, start, size);
	    return interpretDict(dict, PRIVATE_DICT_META, strings);
	}
	
	// Parse the CFF charset table, which contains internal names for all the glyphs.
	// This function will return a list of glyph names.
	// See Adobe TN #5176 chapter 13, "Charsets".
	function parseCFFCharset(data, start, nGlyphs, strings) {
	    var i;
	    var sid;
	    var count;
	    var parser = new parse.Parser(data, start);
	
	    // The .notdef glyph is not included, so subtract 1.
	    nGlyphs -= 1;
	    var charset = ['.notdef'];
	
	    var format = parser.parseCard8();
	    if (format === 0) {
	        for (i = 0; i < nGlyphs; i += 1) {
	            sid = parser.parseSID();
	            charset.push(getCFFString(strings, sid));
	        }
	    } else if (format === 1) {
	        while (charset.length <= nGlyphs) {
	            sid = parser.parseSID();
	            count = parser.parseCard8();
	            for (i = 0; i <= count; i += 1) {
	                charset.push(getCFFString(strings, sid));
	                sid += 1;
	            }
	        }
	    } else if (format === 2) {
	        while (charset.length <= nGlyphs) {
	            sid = parser.parseSID();
	            count = parser.parseCard16();
	            for (i = 0; i <= count; i += 1) {
	                charset.push(getCFFString(strings, sid));
	                sid += 1;
	            }
	        }
	    } else {
	        throw new Error('Unknown charset format ' + format);
	    }
	
	    return charset;
	}
	
	// Parse the CFF encoding data. Only one encoding can be specified per font.
	// See Adobe TN #5176 chapter 12, "Encodings".
	function parseCFFEncoding(data, start, charset) {
	    var i;
	    var code;
	    var enc = {};
	    var parser = new parse.Parser(data, start);
	    var format = parser.parseCard8();
	    if (format === 0) {
	        var nCodes = parser.parseCard8();
	        for (i = 0; i < nCodes; i += 1) {
	            code = parser.parseCard8();
	            enc[code] = i;
	        }
	    } else if (format === 1) {
	        var nRanges = parser.parseCard8();
	        code = 1;
	        for (i = 0; i < nRanges; i += 1) {
	            var first = parser.parseCard8();
	            var nLeft = parser.parseCard8();
	            for (var j = first; j <= first + nLeft; j += 1) {
	                enc[j] = code;
	                code += 1;
	            }
	        }
	    } else {
	        throw new Error('Unknown encoding format ' + format);
	    }
	
	    return new encoding.CffEncoding(enc, charset);
	}
	
	// Take in charstring code and return a Glyph object.
	// The encoding is described in the Type 2 Charstring Format
	// https://www.microsoft.com/typography/OTSPEC/charstr2.htm
	function parseCFFCharstring(font, glyph, code) {
	    var c1x;
	    var c1y;
	    var c2x;
	    var c2y;
	    var p = new path.Path();
	    var stack = [];
	    var nStems = 0;
	    var haveWidth = false;
	    var width = font.defaultWidthX;
	    var open = false;
	    var x = 0;
	    var y = 0;
	
	    function newContour(x, y) {
	        if (open) {
	            p.closePath();
	        }
	
	        p.moveTo(x, y);
	        open = true;
	    }
	
	    function parseStems() {
	        var hasWidthArg;
	
	        // The number of stem operators on the stack is always even.
	        // If the value is uneven, that means a width is specified.
	        hasWidthArg = stack.length % 2 !== 0;
	        if (hasWidthArg && !haveWidth) {
	            width = stack.shift() + font.nominalWidthX;
	        }
	
	        nStems += stack.length >> 1;
	        stack.length = 0;
	        haveWidth = true;
	    }
	
	    function parse(code) {
	        var b1;
	        var b2;
	        var b3;
	        var b4;
	        var codeIndex;
	        var subrCode;
	        var jpx;
	        var jpy;
	        var c3x;
	        var c3y;
	        var c4x;
	        var c4y;
	
	        var i = 0;
	        while (i < code.length) {
	            var v = code[i];
	            i += 1;
	            switch (v) {
	                case 1: // hstem
	                    parseStems();
	                    break;
	                case 3: // vstem
	                    parseStems();
	                    break;
	                case 4: // vmoveto
	                    if (stack.length > 1 && !haveWidth) {
	                        width = stack.shift() + font.nominalWidthX;
	                        haveWidth = true;
	                    }
	
	                    y += stack.pop();
	                    newContour(x, y);
	                    break;
	                case 5: // rlineto
	                    while (stack.length > 0) {
	                        x += stack.shift();
	                        y += stack.shift();
	                        p.lineTo(x, y);
	                    }
	
	                    break;
	                case 6: // hlineto
	                    while (stack.length > 0) {
	                        x += stack.shift();
	                        p.lineTo(x, y);
	                        if (stack.length === 0) {
	                            break;
	                        }
	
	                        y += stack.shift();
	                        p.lineTo(x, y);
	                    }
	
	                    break;
	                case 7: // vlineto
	                    while (stack.length > 0) {
	                        y += stack.shift();
	                        p.lineTo(x, y);
	                        if (stack.length === 0) {
	                            break;
	                        }
	
	                        x += stack.shift();
	                        p.lineTo(x, y);
	                    }
	
	                    break;
	                case 8: // rrcurveto
	                    while (stack.length > 0) {
	                        c1x = x + stack.shift();
	                        c1y = y + stack.shift();
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x + stack.shift();
	                        y = c2y + stack.shift();
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    break;
	                case 10: // callsubr
	                    codeIndex = stack.pop() + font.subrsBias;
	                    subrCode = font.subrs[codeIndex];
	                    if (subrCode) {
	                        parse(subrCode);
	                    }
	
	                    break;
	                case 11: // return
	                    return;
	                case 12: // flex operators
	                    v = code[i];
	                    i += 1;
	                    switch (v) {
	                        case 35: // flex
	                            // |- dx1 dy1 dx2 dy2 dx3 dy3 dx4 dy4 dx5 dy5 dx6 dy6 fd flex (12 35) |-
	                            c1x = x   + stack.shift();    // dx1
	                            c1y = y   + stack.shift();    // dy1
	                            c2x = c1x + stack.shift();    // dx2
	                            c2y = c1y + stack.shift();    // dy2
	                            jpx = c2x + stack.shift();    // dx3
	                            jpy = c2y + stack.shift();    // dy3
	                            c3x = jpx + stack.shift();    // dx4
	                            c3y = jpy + stack.shift();    // dy4
	                            c4x = c3x + stack.shift();    // dx5
	                            c4y = c3y + stack.shift();    // dy5
	                            x = c4x + stack.shift();      // dx6
	                            y = c4y + stack.shift();      // dy6
	                            stack.shift();                // flex depth
	                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
	                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
	                            break;
	                        case 34: // hflex
	                            // |- dx1 dx2 dy2 dx3 dx4 dx5 dx6 hflex (12 34) |-
	                            c1x = x   + stack.shift();    // dx1
	                            c1y = y;                      // dy1
	                            c2x = c1x + stack.shift();    // dx2
	                            c2y = c1y + stack.shift();    // dy2
	                            jpx = c2x + stack.shift();    // dx3
	                            jpy = c2y;                    // dy3
	                            c3x = jpx + stack.shift();    // dx4
	                            c3y = c2y;                    // dy4
	                            c4x = c3x + stack.shift();    // dx5
	                            c4y = y;                      // dy5
	                            x = c4x + stack.shift();      // dx6
	                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
	                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
	                            break;
	                        case 36: // hflex1
	                            // |- dx1 dy1 dx2 dy2 dx3 dx4 dx5 dy5 dx6 hflex1 (12 36) |-
	                            c1x = x   + stack.shift();    // dx1
	                            c1y = y   + stack.shift();    // dy1
	                            c2x = c1x + stack.shift();    // dx2
	                            c2y = c1y + stack.shift();    // dy2
	                            jpx = c2x + stack.shift();    // dx3
	                            jpy = c2y;                    // dy3
	                            c3x = jpx + stack.shift();    // dx4
	                            c3y = c2y;                    // dy4
	                            c4x = c3x + stack.shift();    // dx5
	                            c4y = c3y + stack.shift();    // dy5
	                            x = c4x + stack.shift();      // dx6
	                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
	                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
	                            break;
	                        case 37: // flex1
	                            // |- dx1 dy1 dx2 dy2 dx3 dy3 dx4 dy4 dx5 dy5 d6 flex1 (12 37) |-
	                            c1x = x   + stack.shift();    // dx1
	                            c1y = y   + stack.shift();    // dy1
	                            c2x = c1x + stack.shift();    // dx2
	                            c2y = c1y + stack.shift();    // dy2
	                            jpx = c2x + stack.shift();    // dx3
	                            jpy = c2y + stack.shift();    // dy3
	                            c3x = jpx + stack.shift();    // dx4
	                            c3y = jpy + stack.shift();    // dy4
	                            c4x = c3x + stack.shift();    // dx5
	                            c4y = c3y + stack.shift();    // dy5
	                            if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
	                                x = c4x + stack.shift();
	                            } else {
	                                y = c4y + stack.shift();
	                            }
	
	                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
	                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
	                            break;
	                        default:
	                            console.log('Glyph ' + glyph.index + ': unknown operator ' + 1200 + v);
	                            stack.length = 0;
	                    }
	                    break;
	                case 14: // endchar
	                    if (stack.length > 0 && !haveWidth) {
	                        width = stack.shift() + font.nominalWidthX;
	                        haveWidth = true;
	                    }
	
	                    if (open) {
	                        p.closePath();
	                        open = false;
	                    }
	
	                    break;
	                case 18: // hstemhm
	                    parseStems();
	                    break;
	                case 19: // hintmask
	                case 20: // cntrmask
	                    parseStems();
	                    i += (nStems + 7) >> 3;
	                    break;
	                case 21: // rmoveto
	                    if (stack.length > 2 && !haveWidth) {
	                        width = stack.shift() + font.nominalWidthX;
	                        haveWidth = true;
	                    }
	
	                    y += stack.pop();
	                    x += stack.pop();
	                    newContour(x, y);
	                    break;
	                case 22: // hmoveto
	                    if (stack.length > 1 && !haveWidth) {
	                        width = stack.shift() + font.nominalWidthX;
	                        haveWidth = true;
	                    }
	
	                    x += stack.pop();
	                    newContour(x, y);
	                    break;
	                case 23: // vstemhm
	                    parseStems();
	                    break;
	                case 24: // rcurveline
	                    while (stack.length > 2) {
	                        c1x = x + stack.shift();
	                        c1y = y + stack.shift();
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x + stack.shift();
	                        y = c2y + stack.shift();
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    x += stack.shift();
	                    y += stack.shift();
	                    p.lineTo(x, y);
	                    break;
	                case 25: // rlinecurve
	                    while (stack.length > 6) {
	                        x += stack.shift();
	                        y += stack.shift();
	                        p.lineTo(x, y);
	                    }
	
	                    c1x = x + stack.shift();
	                    c1y = y + stack.shift();
	                    c2x = c1x + stack.shift();
	                    c2y = c1y + stack.shift();
	                    x = c2x + stack.shift();
	                    y = c2y + stack.shift();
	                    p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    break;
	                case 26: // vvcurveto
	                    if (stack.length % 2) {
	                        x += stack.shift();
	                    }
	
	                    while (stack.length > 0) {
	                        c1x = x;
	                        c1y = y + stack.shift();
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x;
	                        y = c2y + stack.shift();
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    break;
	                case 27: // hhcurveto
	                    if (stack.length % 2) {
	                        y += stack.shift();
	                    }
	
	                    while (stack.length > 0) {
	                        c1x = x + stack.shift();
	                        c1y = y;
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x + stack.shift();
	                        y = c2y;
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    break;
	                case 28: // shortint
	                    b1 = code[i];
	                    b2 = code[i + 1];
	                    stack.push(((b1 << 24) | (b2 << 16)) >> 16);
	                    i += 2;
	                    break;
	                case 29: // callgsubr
	                    codeIndex = stack.pop() + font.gsubrsBias;
	                    subrCode = font.gsubrs[codeIndex];
	                    if (subrCode) {
	                        parse(subrCode);
	                    }
	
	                    break;
	                case 30: // vhcurveto
	                    while (stack.length > 0) {
	                        c1x = x;
	                        c1y = y + stack.shift();
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x + stack.shift();
	                        y = c2y + (stack.length === 1 ? stack.shift() : 0);
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                        if (stack.length === 0) {
	                            break;
	                        }
	
	                        c1x = x + stack.shift();
	                        c1y = y;
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        y = c2y + stack.shift();
	                        x = c2x + (stack.length === 1 ? stack.shift() : 0);
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    break;
	                case 31: // hvcurveto
	                    while (stack.length > 0) {
	                        c1x = x + stack.shift();
	                        c1y = y;
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        y = c2y + stack.shift();
	                        x = c2x + (stack.length === 1 ? stack.shift() : 0);
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                        if (stack.length === 0) {
	                            break;
	                        }
	
	                        c1x = x;
	                        c1y = y + stack.shift();
	                        c2x = c1x + stack.shift();
	                        c2y = c1y + stack.shift();
	                        x = c2x + stack.shift();
	                        y = c2y + (stack.length === 1 ? stack.shift() : 0);
	                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
	                    }
	
	                    break;
	                default:
	                    if (v < 32) {
	                        console.log('Glyph ' + glyph.index + ': unknown operator ' + v);
	                    } else if (v < 247) {
	                        stack.push(v - 139);
	                    } else if (v < 251) {
	                        b1 = code[i];
	                        i += 1;
	                        stack.push((v - 247) * 256 + b1 + 108);
	                    } else if (v < 255) {
	                        b1 = code[i];
	                        i += 1;
	                        stack.push(-(v - 251) * 256 - b1 - 108);
	                    } else {
	                        b1 = code[i];
	                        b2 = code[i + 1];
	                        b3 = code[i + 2];
	                        b4 = code[i + 3];
	                        i += 4;
	                        stack.push(((b1 << 24) | (b2 << 16) | (b3 << 8) | b4) / 65536);
	                    }
	            }
	        }
	    }
	
	    parse(code);
	
	    glyph.advanceWidth = width;
	    return p;
	}
	
	// Subroutines are encoded using the negative half of the number space.
	// See type 2 chapter 4.7 "Subroutine operators".
	function calcCFFSubroutineBias(subrs) {
	    var bias;
	    if (subrs.length < 1240) {
	        bias = 107;
	    } else if (subrs.length < 33900) {
	        bias = 1131;
	    } else {
	        bias = 32768;
	    }
	
	    return bias;
	}
	
	// Parse the `CFF` table, which contains the glyph outlines in PostScript format.
	function parseCFFTable(data, start, font) {
	    font.tables.cff = {};
	    var header = parseCFFHeader(data, start);
	    var nameIndex = parseCFFIndex(data, header.endOffset, parse.bytesToString);
	    var topDictIndex = parseCFFIndex(data, nameIndex.endOffset);
	    var stringIndex = parseCFFIndex(data, topDictIndex.endOffset, parse.bytesToString);
	    var globalSubrIndex = parseCFFIndex(data, stringIndex.endOffset);
	    font.gsubrs = globalSubrIndex.objects;
	    font.gsubrsBias = calcCFFSubroutineBias(font.gsubrs);
	
	    var topDictData = new DataView(new Uint8Array(topDictIndex.objects[0]).buffer);
	    var topDict = parseCFFTopDict(topDictData, stringIndex.objects);
	    font.tables.cff.topDict = topDict;
	
	    var privateDictOffset = start + topDict['private'][1];
	    var privateDict = parseCFFPrivateDict(data, privateDictOffset, topDict['private'][0], stringIndex.objects);
	    font.defaultWidthX = privateDict.defaultWidthX;
	    font.nominalWidthX = privateDict.nominalWidthX;
	
	    if (privateDict.subrs !== 0) {
	        var subrOffset = privateDictOffset + privateDict.subrs;
	        var subrIndex = parseCFFIndex(data, subrOffset);
	        font.subrs = subrIndex.objects;
	        font.subrsBias = calcCFFSubroutineBias(font.subrs);
	    } else {
	        font.subrs = [];
	        font.subrsBias = 0;
	    }
	
	    // Offsets in the top dict are relative to the beginning of the CFF data, so add the CFF start offset.
	    var charStringsIndex = parseCFFIndex(data, start + topDict.charStrings);
	    font.nGlyphs = charStringsIndex.objects.length;
	
	    var charset = parseCFFCharset(data, start + topDict.charset, font.nGlyphs, stringIndex.objects);
	    if (topDict.encoding === 0) { // Standard encoding
	        font.cffEncoding = new encoding.CffEncoding(encoding.cffStandardEncoding, charset);
	    } else if (topDict.encoding === 1) { // Expert encoding
	        font.cffEncoding = new encoding.CffEncoding(encoding.cffExpertEncoding, charset);
	    } else {
	        font.cffEncoding = parseCFFEncoding(data, start + topDict.encoding, charset);
	    }
	
	    // Prefer the CMAP encoding to the CFF encoding.
	    font.encoding = font.encoding || font.cffEncoding;
	
	    font.glyphs = new glyphset.GlyphSet(font);
	    for (var i = 0; i < font.nGlyphs; i += 1) {
	        var charString = charStringsIndex.objects[i];
	        font.glyphs.push(i, glyphset.cffGlyphLoader(font, i, parseCFFCharstring, charString));
	    }
	}
	
	// Convert a string to a String ID (SID).
	// The list of strings is modified in place.
	function encodeString(s, strings) {
	    var sid;
	
	    // Is the string in the CFF standard strings?
	    var i = encoding.cffStandardStrings.indexOf(s);
	    if (i >= 0) {
	        sid = i;
	    }
	
	    // Is the string already in the string index?
	    i = strings.indexOf(s);
	    if (i >= 0) {
	        sid = i + encoding.cffStandardStrings.length;
	    } else {
	        sid = encoding.cffStandardStrings.length + strings.length;
	        strings.push(s);
	    }
	
	    return sid;
	}
	
	function makeHeader() {
	    return new table.Record('Header', [
	        {name: 'major', type: 'Card8', value: 1},
	        {name: 'minor', type: 'Card8', value: 0},
	        {name: 'hdrSize', type: 'Card8', value: 4},
	        {name: 'major', type: 'Card8', value: 1}
	    ]);
	}
	
	function makeNameIndex(fontNames) {
	    var t = new table.Record('Name INDEX', [
	        {name: 'names', type: 'INDEX', value: []}
	    ]);
	    t.names = [];
	    for (var i = 0; i < fontNames.length; i += 1) {
	        t.names.push({name: 'name_' + i, type: 'NAME', value: fontNames[i]});
	    }
	
	    return t;
	}
	
	// Given a dictionary's metadata, create a DICT structure.
	function makeDict(meta, attrs, strings) {
	    var m = {};
	    for (var i = 0; i < meta.length; i += 1) {
	        var entry = meta[i];
	        var value = attrs[entry.name];
	        if (value !== undefined && !equals(value, entry.value)) {
	            if (entry.type === 'SID') {
	                value = encodeString(value, strings);
	            }
	
	            m[entry.op] = {name: entry.name, type: entry.type, value: value};
	        }
	    }
	
	    return m;
	}
	
	// The Top DICT houses the global font attributes.
	function makeTopDict(attrs, strings) {
	    var t = new table.Record('Top DICT', [
	        {name: 'dict', type: 'DICT', value: {}}
	    ]);
	    t.dict = makeDict(TOP_DICT_META, attrs, strings);
	    return t;
	}
	
	function makeTopDictIndex(topDict) {
	    var t = new table.Record('Top DICT INDEX', [
	        {name: 'topDicts', type: 'INDEX', value: []}
	    ]);
	    t.topDicts = [{name: 'topDict_0', type: 'TABLE', value: topDict}];
	    return t;
	}
	
	function makeStringIndex(strings) {
	    var t = new table.Record('String INDEX', [
	        {name: 'strings', type: 'INDEX', value: []}
	    ]);
	    t.strings = [];
	    for (var i = 0; i < strings.length; i += 1) {
	        t.strings.push({name: 'string_' + i, type: 'STRING', value: strings[i]});
	    }
	
	    return t;
	}
	
	function makeGlobalSubrIndex() {
	    // Currently we don't use subroutines.
	    return new table.Record('Global Subr INDEX', [
	        {name: 'subrs', type: 'INDEX', value: []}
	    ]);
	}
	
	function makeCharsets(glyphNames, strings) {
	    var t = new table.Record('Charsets', [
	        {name: 'format', type: 'Card8', value: 0}
	    ]);
	    for (var i = 0; i < glyphNames.length; i += 1) {
	        var glyphName = glyphNames[i];
	        var glyphSID = encodeString(glyphName, strings);
	        t.fields.push({name: 'glyph_' + i, type: 'SID', value: glyphSID});
	    }
	
	    return t;
	}
	
	function glyphToOps(glyph) {
	    var ops = [];
	    var path = glyph.path;
	    ops.push({name: 'width', type: 'NUMBER', value: glyph.advanceWidth});
	    var x = 0;
	    var y = 0;
	    for (var i = 0; i < path.commands.length; i += 1) {
	        var dx;
	        var dy;
	        var cmd = path.commands[i];
	        if (cmd.type === 'Q') {
	            // CFF only supports bézier curves, so convert the quad to a bézier.
	            var _13 = 1 / 3;
	            var _23 = 2 / 3;
	
	            // We're going to create a new command so we don't change the original path.
	            cmd = {
	                type: 'C',
	                x: cmd.x,
	                y: cmd.y,
	                x1: _13 * x + _23 * cmd.x1,
	                y1: _13 * y + _23 * cmd.y1,
	                x2: _13 * cmd.x + _23 * cmd.x1,
	                y2: _13 * cmd.y + _23 * cmd.y1
	            };
	        }
	
	        if (cmd.type === 'M') {
	            dx = Math.round(cmd.x - x);
	            dy = Math.round(cmd.y - y);
	            ops.push({name: 'dx', type: 'NUMBER', value: dx});
	            ops.push({name: 'dy', type: 'NUMBER', value: dy});
	            ops.push({name: 'rmoveto', type: 'OP', value: 21});
	            x = Math.round(cmd.x);
	            y = Math.round(cmd.y);
	        } else if (cmd.type === 'L') {
	            dx = Math.round(cmd.x - x);
	            dy = Math.round(cmd.y - y);
	            ops.push({name: 'dx', type: 'NUMBER', value: dx});
	            ops.push({name: 'dy', type: 'NUMBER', value: dy});
	            ops.push({name: 'rlineto', type: 'OP', value: 5});
	            x = Math.round(cmd.x);
	            y = Math.round(cmd.y);
	        } else if (cmd.type === 'C') {
	            var dx1 = Math.round(cmd.x1 - x);
	            var dy1 = Math.round(cmd.y1 - y);
	            var dx2 = Math.round(cmd.x2 - cmd.x1);
	            var dy2 = Math.round(cmd.y2 - cmd.y1);
	            dx = Math.round(cmd.x - cmd.x2);
	            dy = Math.round(cmd.y - cmd.y2);
	            ops.push({name: 'dx1', type: 'NUMBER', value: dx1});
	            ops.push({name: 'dy1', type: 'NUMBER', value: dy1});
	            ops.push({name: 'dx2', type: 'NUMBER', value: dx2});
	            ops.push({name: 'dy2', type: 'NUMBER', value: dy2});
	            ops.push({name: 'dx', type: 'NUMBER', value: dx});
	            ops.push({name: 'dy', type: 'NUMBER', value: dy});
	            ops.push({name: 'rrcurveto', type: 'OP', value: 8});
	            x = Math.round(cmd.x);
	            y = Math.round(cmd.y);
	        }
	
	        // Contours are closed automatically.
	
	    }
	
	    ops.push({name: 'endchar', type: 'OP', value: 14});
	    return ops;
	}
	
	function makeCharStringsIndex(glyphs) {
	    var t = new table.Record('CharStrings INDEX', [
	        {name: 'charStrings', type: 'INDEX', value: []}
	    ]);
	
	    for (var i = 0; i < glyphs.length; i += 1) {
	        var glyph = glyphs.get(i);
	        var ops = glyphToOps(glyph);
	        t.charStrings.push({name: glyph.name, type: 'CHARSTRING', value: ops});
	    }
	
	    return t;
	}
	
	function makePrivateDict(attrs, strings) {
	    var t = new table.Record('Private DICT', [
	        {name: 'dict', type: 'DICT', value: {}}
	    ]);
	    t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
	    return t;
	}
	
	function makeCFFTable(glyphs, options) {
	    var t = new table.Table('CFF ', [
	        {name: 'header', type: 'RECORD'},
	        {name: 'nameIndex', type: 'RECORD'},
	        {name: 'topDictIndex', type: 'RECORD'},
	        {name: 'stringIndex', type: 'RECORD'},
	        {name: 'globalSubrIndex', type: 'RECORD'},
	        {name: 'charsets', type: 'RECORD'},
	        {name: 'charStringsIndex', type: 'RECORD'},
	        {name: 'privateDict', type: 'RECORD'}
	    ]);
	
	    var fontScale = 1 / options.unitsPerEm;
	    // We use non-zero values for the offsets so that the DICT encodes them.
	    // This is important because the size of the Top DICT plays a role in offset calculation,
	    // and the size shouldn't change after we've written correct offsets.
	    var attrs = {
	        version: options.version,
	        fullName: options.fullName,
	        familyName: options.familyName,
	        weight: options.weightName,
	        fontBBox: options.fontBBox || [0, 0, 0, 0],
	        fontMatrix: [fontScale, 0, 0, fontScale, 0, 0],
	        charset: 999,
	        encoding: 0,
	        charStrings: 999,
	        private: [0, 999]
	    };
	
	    var privateAttrs = {};
	
	    var glyphNames = [];
	    var glyph;
	
	    // Skip first glyph (.notdef)
	    for (var i = 1; i < glyphs.length; i += 1) {
	        glyph = glyphs.get(i);
	        glyphNames.push(glyph.name);
	    }
	
	    var strings = [];
	
	    t.header = makeHeader();
	    t.nameIndex = makeNameIndex([options.postScriptName]);
	    var topDict = makeTopDict(attrs, strings);
	    t.topDictIndex = makeTopDictIndex(topDict);
	    t.globalSubrIndex = makeGlobalSubrIndex();
	    t.charsets = makeCharsets(glyphNames, strings);
	    t.charStringsIndex = makeCharStringsIndex(glyphs);
	    t.privateDict = makePrivateDict(privateAttrs, strings);
	
	    // Needs to come at the end, to encode all custom strings used in the font.
	    t.stringIndex = makeStringIndex(strings);
	
	    var startOffset = t.header.sizeOf() +
	        t.nameIndex.sizeOf() +
	        t.topDictIndex.sizeOf() +
	        t.stringIndex.sizeOf() +
	        t.globalSubrIndex.sizeOf();
	    attrs.charset = startOffset;
	
	    // We use the CFF standard encoding; proper encoding will be handled in cmap.
	    attrs.encoding = 0;
	    attrs.charStrings = attrs.charset + t.charsets.sizeOf();
	    attrs.private[1] = attrs.charStrings + t.charStringsIndex.sizeOf();
	
	    // Recreate the Top DICT INDEX with the correct offsets.
	    topDict = makeTopDict(attrs, strings);
	    t.topDictIndex = makeTopDictIndex(topDict);
	
	    return t;
	}
	
	exports.parse = parseCFFTable;
	exports.make = makeCFFTable;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// The GlyphSet object
	
	'use strict';
	
	var _glyph = __webpack_require__(64);
	
	// Define a property on the glyph that depends on the path being loaded.
	function defineDependentProperty(glyph, externalName, internalName) {
	    Object.defineProperty(glyph, externalName, {
	        get: function() {
	            // Request the path property to make sure the path is loaded.
	            glyph.path; // jshint ignore:line
	            return glyph[internalName];
	        },
	        set: function(newValue) {
	            glyph[internalName] = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	}
	
	/**
	 * A GlyphSet represents all glyphs available in the font, but modelled using
	 * a deferred glyph loader, for retrieving glyphs only once they are absolutely
	 * necessary, to keep the memory footprint down.
	 * @exports opentype.GlyphSet
	 * @class
	 * @param {opentype.Font}
	 * @param {Array}
	 */
	function GlyphSet(font, glyphs) {
	    this.font = font;
	    this.glyphs = {};
	    if (Array.isArray(glyphs)) {
	        for (var i = 0; i < glyphs.length; i++) {
	            this.glyphs[i] = glyphs[i];
	        }
	    }
	
	    this.length = (glyphs && glyphs.length) || 0;
	}
	
	/**
	 * @param  {number} index
	 * @return {opentype.Glyph}
	 */
	GlyphSet.prototype.get = function(index) {
	    if (typeof this.glyphs[index] === 'function') {
	        this.glyphs[index] = this.glyphs[index]();
	    }
	
	    return this.glyphs[index];
	};
	
	/**
	 * @param  {number} index
	 * @param  {Object}
	 */
	GlyphSet.prototype.push = function(index, loader) {
	    this.glyphs[index] = loader;
	    this.length++;
	};
	
	/**
	 * @alias opentype.glyphLoader
	 * @param  {opentype.Font} font
	 * @param  {number} index
	 * @return {opentype.Glyph}
	 */
	function glyphLoader(font, index) {
	    return new _glyph.Glyph({index: index, font: font});
	}
	
	/**
	 * Generate a stub glyph that can be filled with all metadata *except*
	 * the "points" and "path" properties, which must be loaded only once
	 * the glyph's path is actually requested for text shaping.
	 * @alias opentype.ttfGlyphLoader
	 * @param  {opentype.Font} font
	 * @param  {number} index
	 * @param  {Function} parseGlyph
	 * @param  {Object} data
	 * @param  {number} position
	 * @param  {Function} buildPath
	 * @return {opentype.Glyph}
	 */
	function ttfGlyphLoader(font, index, parseGlyph, data, position, buildPath) {
	    return function() {
	        var glyph = new _glyph.Glyph({index: index, font: font});
	
	        glyph.path = function() {
	            parseGlyph(glyph, data, position);
	            var path = buildPath(font.glyphs, glyph);
	            path.unitsPerEm = font.unitsPerEm;
	            return path;
	        };
	
	        defineDependentProperty(glyph, 'xMin', '_xMin');
	        defineDependentProperty(glyph, 'xMax', '_xMax');
	        defineDependentProperty(glyph, 'yMin', '_yMin');
	        defineDependentProperty(glyph, 'yMax', '_yMax');
	
	        return glyph;
	    };
	}
	/**
	 * @alias opentype.cffGlyphLoader
	 * @param  {opentype.Font} font
	 * @param  {number} index
	 * @param  {Function} parseCFFCharstring
	 * @param  {string} charstring
	 * @return {opentype.Glyph}
	 */
	function cffGlyphLoader(font, index, parseCFFCharstring, charstring) {
	    return function() {
	        var glyph = new _glyph.Glyph({index: index, font: font});
	
	        glyph.path = function() {
	            var path = parseCFFCharstring(font, glyph, charstring);
	            path.unitsPerEm = font.unitsPerEm;
	            return path;
	        };
	
	        return glyph;
	    };
	}
	
	exports.GlyphSet = GlyphSet;
	exports.glyphLoader = glyphLoader;
	exports.ttfGlyphLoader = ttfGlyphLoader;
	exports.cffGlyphLoader = cffGlyphLoader;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// The Glyph object
	
	'use strict';
	
	var check = __webpack_require__(57);
	var draw = __webpack_require__(65);
	var path = __webpack_require__(55);
	
	function getPathDefinition(glyph, path) {
	    var _path = path || { commands: [] };
	    return {
	        configurable: true,
	
	        get: function() {
	            if (typeof _path === 'function') {
	                _path = _path();
	            }
	
	            return _path;
	        },
	
	        set: function(p) {
	            _path = p;
	        }
	    };
	}
	/**
	 * @typedef GlyphOptions
	 * @type Object
	 * @property {string} [name] - The glyph name
	 * @property {number} [unicode]
	 * @property {Array} [unicodes]
	 * @property {number} [xMin]
	 * @property {number} [yMin]
	 * @property {number} [xMax]
	 * @property {number} [yMax]
	 * @property {number} [advanceWidth]
	 */
	
	// A Glyph is an individual mark that often corresponds to a character.
	// Some glyphs, such as ligatures, are a combination of many characters.
	// Glyphs are the basic building blocks of a font.
	//
	// The `Glyph` class contains utility methods for drawing the path and its points.
	/**
	 * @exports opentype.Glyph
	 * @class
	 * @param {GlyphOptions}
	 * @constructor
	 */
	function Glyph(options) {
	    // By putting all the code on a prototype function (which is only declared once)
	    // we reduce the memory requirements for larger fonts by some 2%
	    this.bindConstructorValues(options);
	}
	
	/**
	 * @param  {GlyphOptions}
	 */
	Glyph.prototype.bindConstructorValues = function(options) {
	    this.index = options.index || 0;
	
	    // These three values cannnot be deferred for memory optimization:
	    this.name = options.name || null;
	    this.unicode = options.unicode || undefined;
	    this.unicodes = options.unicodes || options.unicode !== undefined ? [options.unicode] : [];
	
	    // But by binding these values only when necessary, we reduce can
	    // the memory requirements by almost 3% for larger fonts.
	    if (options.xMin) {
	        this.xMin = options.xMin;
	    }
	
	    if (options.yMin) {
	        this.yMin = options.yMin;
	    }
	
	    if (options.xMax) {
	        this.xMax = options.xMax;
	    }
	
	    if (options.yMax) {
	        this.yMax = options.yMax;
	    }
	
	    if (options.advanceWidth) {
	        this.advanceWidth = options.advanceWidth;
	    }
	
	    // The path for a glyph is the most memory intensive, and is bound as a value
	    // with a getter/setter to ensure we actually do path parsing only once the
	    // path is actually needed by anything.
	    Object.defineProperty(this, 'path', getPathDefinition(this, options.path));
	};
	
	/**
	 * @param {number}
	 */
	Glyph.prototype.addUnicode = function(unicode) {
	    if (this.unicodes.length === 0) {
	        this.unicode = unicode;
	    }
	
	    this.unicodes.push(unicode);
	};
	
	/**
	 * Convert the glyph to a Path we can draw on a drawing context.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {Object=} options - xScale, yScale to strech the glyph.
	 * @return {opentype.Path}
	 */
	Glyph.prototype.getPath = function(x, y, fontSize, options) {
	    x = x !== undefined ? x : 0;
	    y = y !== undefined ? y : 0;
	    options = options !== undefined ? options : {xScale: 1.0, yScale: 1.0};
	    fontSize = fontSize !== undefined ? fontSize : 72;
	    var scale = 1 / this.path.unitsPerEm * fontSize;
	    var xScale = options.xScale * scale;
	    var yScale = options.yScale * scale;
	
	    var p = new path.Path();
	    var commands = this.path.commands;
	    for (var i = 0; i < commands.length; i += 1) {
	        var cmd = commands[i];
	        if (cmd.type === 'M') {
	            p.moveTo(x + (cmd.x * xScale), y + (-cmd.y * yScale));
	        } else if (cmd.type === 'L') {
	            p.lineTo(x + (cmd.x * xScale), y + (-cmd.y * yScale));
	        } else if (cmd.type === 'Q') {
	            p.quadraticCurveTo(x + (cmd.x1 * xScale), y + (-cmd.y1 * yScale),
	                               x + (cmd.x * xScale), y + (-cmd.y * yScale));
	        } else if (cmd.type === 'C') {
	            p.curveTo(x + (cmd.x1 * xScale), y + (-cmd.y1 * yScale),
	                      x + (cmd.x2 * xScale), y + (-cmd.y2 * yScale),
	                      x + (cmd.x * xScale), y + (-cmd.y * yScale));
	        } else if (cmd.type === 'Z') {
	            p.closePath();
	        }
	    }
	
	    return p;
	};
	
	/**
	 * Split the glyph into contours.
	 * This function is here for backwards compatibility, and to
	 * provide raw access to the TrueType glyph outlines.
	 * @return {Array}
	 */
	Glyph.prototype.getContours = function() {
	    if (this.points === undefined) {
	        return [];
	    }
	
	    var contours = [];
	    var currentContour = [];
	    for (var i = 0; i < this.points.length; i += 1) {
	        var pt = this.points[i];
	        currentContour.push(pt);
	        if (pt.lastPointOfContour) {
	            contours.push(currentContour);
	            currentContour = [];
	        }
	    }
	
	    check.argument(currentContour.length === 0, 'There are still points left in the current contour.');
	    return contours;
	};
	
	/**
	 * Calculate the xMin/yMin/xMax/yMax/lsb/rsb for a Glyph.
	 * @return {Object}
	 */
	Glyph.prototype.getMetrics = function() {
	    var commands = this.path.commands;
	    var xCoords = [];
	    var yCoords = [];
	    for (var i = 0; i < commands.length; i += 1) {
	        var cmd = commands[i];
	        if (cmd.type !== 'Z') {
	            xCoords.push(cmd.x);
	            yCoords.push(cmd.y);
	        }
	
	        if (cmd.type === 'Q' || cmd.type === 'C') {
	            xCoords.push(cmd.x1);
	            yCoords.push(cmd.y1);
	        }
	
	        if (cmd.type === 'C') {
	            xCoords.push(cmd.x2);
	            yCoords.push(cmd.y2);
	        }
	    }
	
	    var metrics = {
	        xMin: Math.min.apply(null, xCoords),
	        yMin: Math.min.apply(null, yCoords),
	        xMax: Math.max.apply(null, xCoords),
	        yMax: Math.max.apply(null, yCoords),
	        leftSideBearing: this.leftSideBearing
	    };
	
	    if (!isFinite(metrics.xMin)) {
	        metrics.xMin = 0;
	    }
	
	    if (!isFinite(metrics.xMax)) {
	        metrics.xMax = this.advanceWidth;
	    }
	
	    if (!isFinite(metrics.yMin)) {
	        metrics.yMin = 0;
	    }
	
	    if (!isFinite(metrics.yMax)) {
	        metrics.yMax = 0;
	    }
	
	    metrics.rightSideBearing = this.advanceWidth - metrics.leftSideBearing - (metrics.xMax - metrics.xMin);
	    return metrics;
	};
	
	/**
	 * Draw the glyph on the given context.
	 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 * @param  {Object=} options - xScale, yScale to strech the glyph.
	 */
	Glyph.prototype.draw = function(ctx, x, y, fontSize, options) {
	    this.getPath(x, y, fontSize, options).draw(ctx);
	};
	
	/**
	 * Draw the points of the glyph.
	 * On-curve points will be drawn in blue, off-curve points will be drawn in red.
	 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 */
	Glyph.prototype.drawPoints = function(ctx, x, y, fontSize) {
	
	    function drawCircles(l, x, y, scale) {
	        var PI_SQ = Math.PI * 2;
	        ctx.beginPath();
	        for (var j = 0; j < l.length; j += 1) {
	            ctx.moveTo(x + (l[j].x * scale), y + (l[j].y * scale));
	            ctx.arc(x + (l[j].x * scale), y + (l[j].y * scale), 2, 0, PI_SQ, false);
	        }
	
	        ctx.closePath();
	        ctx.fill();
	    }
	
	    x = x !== undefined ? x : 0;
	    y = y !== undefined ? y : 0;
	    fontSize = fontSize !== undefined ? fontSize : 24;
	    var scale = 1 / this.path.unitsPerEm * fontSize;
	
	    var blueCircles = [];
	    var redCircles = [];
	    var path = this.path;
	    for (var i = 0; i < path.commands.length; i += 1) {
	        var cmd = path.commands[i];
	        if (cmd.x !== undefined) {
	            blueCircles.push({x: cmd.x, y: -cmd.y});
	        }
	
	        if (cmd.x1 !== undefined) {
	            redCircles.push({x: cmd.x1, y: -cmd.y1});
	        }
	
	        if (cmd.x2 !== undefined) {
	            redCircles.push({x: cmd.x2, y: -cmd.y2});
	        }
	    }
	
	    ctx.fillStyle = 'blue';
	    drawCircles(blueCircles, x, y, scale);
	    ctx.fillStyle = 'red';
	    drawCircles(redCircles, x, y, scale);
	};
	
	/**
	 * Draw lines indicating important font measurements.
	 * Black lines indicate the origin of the coordinate system (point 0,0).
	 * Blue lines indicate the glyph bounding box.
	 * Green line indicates the advance width of the glyph.
	 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
	 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
	 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
	 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
	 */
	Glyph.prototype.drawMetrics = function(ctx, x, y, fontSize) {
	    var scale;
	    x = x !== undefined ? x : 0;
	    y = y !== undefined ? y : 0;
	    fontSize = fontSize !== undefined ? fontSize : 24;
	    scale = 1 / this.path.unitsPerEm * fontSize;
	    ctx.lineWidth = 1;
	
	    // Draw the origin
	    ctx.strokeStyle = 'black';
	    draw.line(ctx, x, -10000, x, 10000);
	    draw.line(ctx, -10000, y, 10000, y);
	
	    // This code is here due to memory optimization: by not using
	    // defaults in the constructor, we save a notable amount of memory.
	    var xMin = this.xMin || 0;
	    var yMin = this.yMin || 0;
	    var xMax = this.xMax || 0;
	    var yMax = this.yMax || 0;
	    var advanceWidth = this.advanceWidth || 0;
	
	    // Draw the glyph box
	    ctx.strokeStyle = 'blue';
	    draw.line(ctx, x + (xMin * scale), -10000, x + (xMin * scale), 10000);
	    draw.line(ctx, x + (xMax * scale), -10000, x + (xMax * scale), 10000);
	    draw.line(ctx, -10000, y + (-yMin * scale), 10000, y + (-yMin * scale));
	    draw.line(ctx, -10000, y + (-yMax * scale), 10000, y + (-yMax * scale));
	
	    // Draw the advance width
	    ctx.strokeStyle = 'green';
	    draw.line(ctx, x + (advanceWidth * scale), -10000, x + (advanceWidth * scale), 10000);
	};
	
	exports.Glyph = Glyph;


/***/ },
/* 65 */
/***/ function(module, exports) {

	// Drawing utility functions.
	
	'use strict';
	
	// Draw a line on the given context from point `x1,y1` to point `x2,y2`.
	function line(ctx, x1, y1, x2, y2) {
	    ctx.beginPath();
	    ctx.moveTo(x1, y1);
	    ctx.lineTo(x2, y2);
	    ctx.stroke();
	}
	
	exports.line = line;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// The `head` table contains global information about the font.
	// https://www.microsoft.com/typography/OTSPEC/head.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the header `head` table
	function parseHeadTable(data, start) {
	    var head = {};
	    var p = new parse.Parser(data, start);
	    head.version = p.parseVersion();
	    head.fontRevision = Math.round(p.parseFixed() * 1000) / 1000;
	    head.checkSumAdjustment = p.parseULong();
	    head.magicNumber = p.parseULong();
	    check.argument(head.magicNumber === 0x5F0F3CF5, 'Font header has wrong magic number.');
	    head.flags = p.parseUShort();
	    head.unitsPerEm = p.parseUShort();
	    head.created = p.parseLongDateTime();
	    head.modified = p.parseLongDateTime();
	    head.xMin = p.parseShort();
	    head.yMin = p.parseShort();
	    head.xMax = p.parseShort();
	    head.yMax = p.parseShort();
	    head.macStyle = p.parseUShort();
	    head.lowestRecPPEM = p.parseUShort();
	    head.fontDirectionHint = p.parseShort();
	    head.indexToLocFormat = p.parseShort();
	    head.glyphDataFormat = p.parseShort();
	    return head;
	}
	
	function makeHeadTable(options) {
	    // Apple Mac timestamp epoch is 01/01/1904 not 01/01/1970
	    var timestamp = Math.round(new Date().getTime() / 1000) + 2082844800;
	    var createdTimestamp = timestamp;
	
	    if (options.createdTimestamp) {
	        createdTimestamp = options.createdTimestamp + 2082844800;
	    }
	
	    return new table.Table('head', [
	        {name: 'version', type: 'FIXED', value: 0x00010000},
	        {name: 'fontRevision', type: 'FIXED', value: 0x00010000},
	        {name: 'checkSumAdjustment', type: 'ULONG', value: 0},
	        {name: 'magicNumber', type: 'ULONG', value: 0x5F0F3CF5},
	        {name: 'flags', type: 'USHORT', value: 0},
	        {name: 'unitsPerEm', type: 'USHORT', value: 1000},
	        {name: 'created', type: 'LONGDATETIME', value: createdTimestamp},
	        {name: 'modified', type: 'LONGDATETIME', value: timestamp},
	        {name: 'xMin', type: 'SHORT', value: 0},
	        {name: 'yMin', type: 'SHORT', value: 0},
	        {name: 'xMax', type: 'SHORT', value: 0},
	        {name: 'yMax', type: 'SHORT', value: 0},
	        {name: 'macStyle', type: 'USHORT', value: 0},
	        {name: 'lowestRecPPEM', type: 'USHORT', value: 0},
	        {name: 'fontDirectionHint', type: 'SHORT', value: 2},
	        {name: 'indexToLocFormat', type: 'SHORT', value: 0},
	        {name: 'glyphDataFormat', type: 'SHORT', value: 0}
	    ], options);
	}
	
	exports.parse = parseHeadTable;
	exports.make = makeHeadTable;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// The `hhea` table contains information for horizontal layout.
	// https://www.microsoft.com/typography/OTSPEC/hhea.htm
	
	'use strict';
	
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the horizontal header `hhea` table
	function parseHheaTable(data, start) {
	    var hhea = {};
	    var p = new parse.Parser(data, start);
	    hhea.version = p.parseVersion();
	    hhea.ascender = p.parseShort();
	    hhea.descender = p.parseShort();
	    hhea.lineGap = p.parseShort();
	    hhea.advanceWidthMax = p.parseUShort();
	    hhea.minLeftSideBearing = p.parseShort();
	    hhea.minRightSideBearing = p.parseShort();
	    hhea.xMaxExtent = p.parseShort();
	    hhea.caretSlopeRise = p.parseShort();
	    hhea.caretSlopeRun = p.parseShort();
	    hhea.caretOffset = p.parseShort();
	    p.relativeOffset += 8;
	    hhea.metricDataFormat = p.parseShort();
	    hhea.numberOfHMetrics = p.parseUShort();
	    return hhea;
	}
	
	function makeHheaTable(options) {
	    return new table.Table('hhea', [
	        {name: 'version', type: 'FIXED', value: 0x00010000},
	        {name: 'ascender', type: 'FWORD', value: 0},
	        {name: 'descender', type: 'FWORD', value: 0},
	        {name: 'lineGap', type: 'FWORD', value: 0},
	        {name: 'advanceWidthMax', type: 'UFWORD', value: 0},
	        {name: 'minLeftSideBearing', type: 'FWORD', value: 0},
	        {name: 'minRightSideBearing', type: 'FWORD', value: 0},
	        {name: 'xMaxExtent', type: 'FWORD', value: 0},
	        {name: 'caretSlopeRise', type: 'SHORT', value: 1},
	        {name: 'caretSlopeRun', type: 'SHORT', value: 0},
	        {name: 'caretOffset', type: 'SHORT', value: 0},
	        {name: 'reserved1', type: 'SHORT', value: 0},
	        {name: 'reserved2', type: 'SHORT', value: 0},
	        {name: 'reserved3', type: 'SHORT', value: 0},
	        {name: 'reserved4', type: 'SHORT', value: 0},
	        {name: 'metricDataFormat', type: 'SHORT', value: 0},
	        {name: 'numberOfHMetrics', type: 'USHORT', value: 0}
	    ], options);
	}
	
	exports.parse = parseHheaTable;
	exports.make = makeHheaTable;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// The `hmtx` table contains the horizontal metrics for all glyphs.
	// https://www.microsoft.com/typography/OTSPEC/hmtx.htm
	
	'use strict';
	
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the `hmtx` table, which contains the horizontal metrics for all glyphs.
	// This function augments the glyph array, adding the advanceWidth and leftSideBearing to each glyph.
	function parseHmtxTable(data, start, numMetrics, numGlyphs, glyphs) {
	    var advanceWidth;
	    var leftSideBearing;
	    var p = new parse.Parser(data, start);
	    for (var i = 0; i < numGlyphs; i += 1) {
	        // If the font is monospaced, only one entry is needed. This last entry applies to all subsequent glyphs.
	        if (i < numMetrics) {
	            advanceWidth = p.parseUShort();
	            leftSideBearing = p.parseShort();
	        }
	
	        var glyph = glyphs.get(i);
	        glyph.advanceWidth = advanceWidth;
	        glyph.leftSideBearing = leftSideBearing;
	    }
	}
	
	function makeHmtxTable(glyphs) {
	    var t = new table.Table('hmtx', []);
	    for (var i = 0; i < glyphs.length; i += 1) {
	        var glyph = glyphs.get(i);
	        var advanceWidth = glyph.advanceWidth || 0;
	        var leftSideBearing = glyph.leftSideBearing || 0;
	        t.fields.push({name: 'advanceWidth_' + i, type: 'USHORT', value: advanceWidth});
	        t.fields.push({name: 'leftSideBearing_' + i, type: 'SHORT', value: leftSideBearing});
	    }
	
	    return t;
	}
	
	exports.parse = parseHmtxTable;
	exports.make = makeHmtxTable;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// The `ltag` table stores IETF BCP-47 language tags. It allows supporting
	// languages for which TrueType does not assign a numeric code.
	// https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6ltag.html
	// http://www.w3.org/International/articles/language-tags/
	// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	function makeLtagTable(tags) {
	    var result = new table.Table('ltag', [
	        {name: 'version', type: 'ULONG', value: 1},
	        {name: 'flags', type: 'ULONG', value: 0},
	        {name: 'numTags', type: 'ULONG', value: tags.length}
	    ]);
	
	    var stringPool = '';
	    var stringPoolOffset = 12 + tags.length * 4;
	    for (var i = 0; i < tags.length; ++i) {
	        var pos = stringPool.indexOf(tags[i]);
	        if (pos < 0) {
	            pos = stringPool.length;
	            stringPool += tags[i];
	        }
	
	        result.fields.push({name: 'offset ' + i, type: 'USHORT', value: stringPoolOffset + pos});
	        result.fields.push({name: 'length ' + i, type: 'USHORT', value: tags[i].length});
	    }
	
	    result.fields.push({name: 'stringPool', type: 'CHARARRAY', value: stringPool});
	    return result;
	}
	
	function parseLtagTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var tableVersion = p.parseULong();
	    check.argument(tableVersion === 1, 'Unsupported ltag table version.');
	    // The 'ltag' specification does not define any flags; skip the field.
	    p.skip('uLong', 1);
	    var numTags = p.parseULong();
	
	    var tags = [];
	    for (var i = 0; i < numTags; i++) {
	        var tag = '';
	        var offset = start + p.parseUShort();
	        var length = p.parseUShort();
	        for (var j = offset; j < offset + length; ++j) {
	            tag += String.fromCharCode(data.getInt8(j));
	        }
	
	        tags.push(tag);
	    }
	
	    return tags;
	}
	
	exports.make = makeLtagTable;
	exports.parse = parseLtagTable;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// The `maxp` table establishes the memory requirements for the font.
	// We need it just to get the number of glyphs in the font.
	// https://www.microsoft.com/typography/OTSPEC/maxp.htm
	
	'use strict';
	
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the maximum profile `maxp` table.
	function parseMaxpTable(data, start) {
	    var maxp = {};
	    var p = new parse.Parser(data, start);
	    maxp.version = p.parseVersion();
	    maxp.numGlyphs = p.parseUShort();
	    if (maxp.version === 1.0) {
	        maxp.maxPoints = p.parseUShort();
	        maxp.maxContours = p.parseUShort();
	        maxp.maxCompositePoints = p.parseUShort();
	        maxp.maxCompositeContours = p.parseUShort();
	        maxp.maxZones = p.parseUShort();
	        maxp.maxTwilightPoints = p.parseUShort();
	        maxp.maxStorage = p.parseUShort();
	        maxp.maxFunctionDefs = p.parseUShort();
	        maxp.maxInstructionDefs = p.parseUShort();
	        maxp.maxStackElements = p.parseUShort();
	        maxp.maxSizeOfInstructions = p.parseUShort();
	        maxp.maxComponentElements = p.parseUShort();
	        maxp.maxComponentDepth = p.parseUShort();
	    }
	
	    return maxp;
	}
	
	function makeMaxpTable(numGlyphs) {
	    return new table.Table('maxp', [
	        {name: 'version', type: 'FIXED', value: 0x00005000},
	        {name: 'numGlyphs', type: 'USHORT', value: numGlyphs}
	    ]);
	}
	
	exports.parse = parseMaxpTable;
	exports.make = makeMaxpTable;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// The `name` naming table.
	// https://www.microsoft.com/typography/OTSPEC/name.htm
	
	'use strict';
	
	var types = __webpack_require__(59);
	var decode = types.decode;
	var encode = types.encode;
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// NameIDs for the name table.
	var nameTableNames = [
	    'copyright',              // 0
	    'fontFamily',             // 1
	    'fontSubfamily',          // 2
	    'uniqueID',               // 3
	    'fullName',               // 4
	    'version',                // 5
	    'postScriptName',         // 6
	    'trademark',              // 7
	    'manufacturer',           // 8
	    'designer',               // 9
	    'description',            // 10
	    'manufacturerURL',        // 11
	    'designerURL',            // 12
	    'license',                // 13
	    'licenseURL',             // 14
	    'reserved',               // 15
	    'preferredFamily',        // 16
	    'preferredSubfamily',     // 17
	    'compatibleFullName',     // 18
	    'sampleText',             // 19
	    'postScriptFindFontName', // 20
	    'wwsFamily',              // 21
	    'wwsSubfamily'            // 22
	];
	
	var macLanguages = {
	    0: 'en',
	    1: 'fr',
	    2: 'de',
	    3: 'it',
	    4: 'nl',
	    5: 'sv',
	    6: 'es',
	    7: 'da',
	    8: 'pt',
	    9: 'no',
	    10: 'he',
	    11: 'ja',
	    12: 'ar',
	    13: 'fi',
	    14: 'el',
	    15: 'is',
	    16: 'mt',
	    17: 'tr',
	    18: 'hr',
	    19: 'zh-Hant',
	    20: 'ur',
	    21: 'hi',
	    22: 'th',
	    23: 'ko',
	    24: 'lt',
	    25: 'pl',
	    26: 'hu',
	    27: 'es',
	    28: 'lv',
	    29: 'se',
	    30: 'fo',
	    31: 'fa',
	    32: 'ru',
	    33: 'zh',
	    34: 'nl-BE',
	    35: 'ga',
	    36: 'sq',
	    37: 'ro',
	    38: 'cz',
	    39: 'sk',
	    40: 'si',
	    41: 'yi',
	    42: 'sr',
	    43: 'mk',
	    44: 'bg',
	    45: 'uk',
	    46: 'be',
	    47: 'uz',
	    48: 'kk',
	    49: 'az-Cyrl',
	    50: 'az-Arab',
	    51: 'hy',
	    52: 'ka',
	    53: 'mo',
	    54: 'ky',
	    55: 'tg',
	    56: 'tk',
	    57: 'mn-CN',
	    58: 'mn',
	    59: 'ps',
	    60: 'ks',
	    61: 'ku',
	    62: 'sd',
	    63: 'bo',
	    64: 'ne',
	    65: 'sa',
	    66: 'mr',
	    67: 'bn',
	    68: 'as',
	    69: 'gu',
	    70: 'pa',
	    71: 'or',
	    72: 'ml',
	    73: 'kn',
	    74: 'ta',
	    75: 'te',
	    76: 'si',
	    77: 'my',
	    78: 'km',
	    79: 'lo',
	    80: 'vi',
	    81: 'id',
	    82: 'tl',
	    83: 'ms',
	    84: 'ms-Arab',
	    85: 'am',
	    86: 'ti',
	    87: 'om',
	    88: 'so',
	    89: 'sw',
	    90: 'rw',
	    91: 'rn',
	    92: 'ny',
	    93: 'mg',
	    94: 'eo',
	    128: 'cy',
	    129: 'eu',
	    130: 'ca',
	    131: 'la',
	    132: 'qu',
	    133: 'gn',
	    134: 'ay',
	    135: 'tt',
	    136: 'ug',
	    137: 'dz',
	    138: 'jv',
	    139: 'su',
	    140: 'gl',
	    141: 'af',
	    142: 'br',
	    143: 'iu',
	    144: 'gd',
	    145: 'gv',
	    146: 'ga',
	    147: 'to',
	    148: 'el-polyton',
	    149: 'kl',
	    150: 'az',
	    151: 'nn'
	};
	
	// MacOS language ID → MacOS script ID
	//
	// Note that the script ID is not sufficient to determine what encoding
	// to use in TrueType files. For some languages, MacOS used a modification
	// of a mainstream script. For example, an Icelandic name would be stored
	// with smRoman in the TrueType naming table, but the actual encoding
	// is a special Icelandic version of the normal Macintosh Roman encoding.
	// As another example, Inuktitut uses an 8-bit encoding for Canadian Aboriginal
	// Syllables but MacOS had run out of available script codes, so this was
	// done as a (pretty radical) "modification" of Ethiopic.
	//
	// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
	var macLanguageToScript = {
	    0: 0,  // langEnglish → smRoman
	    1: 0,  // langFrench → smRoman
	    2: 0,  // langGerman → smRoman
	    3: 0,  // langItalian → smRoman
	    4: 0,  // langDutch → smRoman
	    5: 0,  // langSwedish → smRoman
	    6: 0,  // langSpanish → smRoman
	    7: 0,  // langDanish → smRoman
	    8: 0,  // langPortuguese → smRoman
	    9: 0,  // langNorwegian → smRoman
	    10: 5,  // langHebrew → smHebrew
	    11: 1,  // langJapanese → smJapanese
	    12: 4,  // langArabic → smArabic
	    13: 0,  // langFinnish → smRoman
	    14: 6,  // langGreek → smGreek
	    15: 0,  // langIcelandic → smRoman (modified)
	    16: 0,  // langMaltese → smRoman
	    17: 0,  // langTurkish → smRoman (modified)
	    18: 0,  // langCroatian → smRoman (modified)
	    19: 2,  // langTradChinese → smTradChinese
	    20: 4,  // langUrdu → smArabic
	    21: 9,  // langHindi → smDevanagari
	    22: 21,  // langThai → smThai
	    23: 3,  // langKorean → smKorean
	    24: 29,  // langLithuanian → smCentralEuroRoman
	    25: 29,  // langPolish → smCentralEuroRoman
	    26: 29,  // langHungarian → smCentralEuroRoman
	    27: 29,  // langEstonian → smCentralEuroRoman
	    28: 29,  // langLatvian → smCentralEuroRoman
	    29: 0,  // langSami → smRoman
	    30: 0,  // langFaroese → smRoman (modified)
	    31: 4,  // langFarsi → smArabic (modified)
	    32: 7,  // langRussian → smCyrillic
	    33: 25,  // langSimpChinese → smSimpChinese
	    34: 0,  // langFlemish → smRoman
	    35: 0,  // langIrishGaelic → smRoman (modified)
	    36: 0,  // langAlbanian → smRoman
	    37: 0,  // langRomanian → smRoman (modified)
	    38: 29,  // langCzech → smCentralEuroRoman
	    39: 29,  // langSlovak → smCentralEuroRoman
	    40: 0,  // langSlovenian → smRoman (modified)
	    41: 5,  // langYiddish → smHebrew
	    42: 7,  // langSerbian → smCyrillic
	    43: 7,  // langMacedonian → smCyrillic
	    44: 7,  // langBulgarian → smCyrillic
	    45: 7,  // langUkrainian → smCyrillic (modified)
	    46: 7,  // langByelorussian → smCyrillic
	    47: 7,  // langUzbek → smCyrillic
	    48: 7,  // langKazakh → smCyrillic
	    49: 7,  // langAzerbaijani → smCyrillic
	    50: 4,  // langAzerbaijanAr → smArabic
	    51: 24,  // langArmenian → smArmenian
	    52: 23,  // langGeorgian → smGeorgian
	    53: 7,  // langMoldavian → smCyrillic
	    54: 7,  // langKirghiz → smCyrillic
	    55: 7,  // langTajiki → smCyrillic
	    56: 7,  // langTurkmen → smCyrillic
	    57: 27,  // langMongolian → smMongolian
	    58: 7,  // langMongolianCyr → smCyrillic
	    59: 4,  // langPashto → smArabic
	    60: 4,  // langKurdish → smArabic
	    61: 4,  // langKashmiri → smArabic
	    62: 4,  // langSindhi → smArabic
	    63: 26,  // langTibetan → smTibetan
	    64: 9,  // langNepali → smDevanagari
	    65: 9,  // langSanskrit → smDevanagari
	    66: 9,  // langMarathi → smDevanagari
	    67: 13,  // langBengali → smBengali
	    68: 13,  // langAssamese → smBengali
	    69: 11,  // langGujarati → smGujarati
	    70: 10,  // langPunjabi → smGurmukhi
	    71: 12,  // langOriya → smOriya
	    72: 17,  // langMalayalam → smMalayalam
	    73: 16,  // langKannada → smKannada
	    74: 14,  // langTamil → smTamil
	    75: 15,  // langTelugu → smTelugu
	    76: 18,  // langSinhalese → smSinhalese
	    77: 19,  // langBurmese → smBurmese
	    78: 20,  // langKhmer → smKhmer
	    79: 22,  // langLao → smLao
	    80: 30,  // langVietnamese → smVietnamese
	    81: 0,  // langIndonesian → smRoman
	    82: 0,  // langTagalog → smRoman
	    83: 0,  // langMalayRoman → smRoman
	    84: 4,  // langMalayArabic → smArabic
	    85: 28,  // langAmharic → smEthiopic
	    86: 28,  // langTigrinya → smEthiopic
	    87: 28,  // langOromo → smEthiopic
	    88: 0,  // langSomali → smRoman
	    89: 0,  // langSwahili → smRoman
	    90: 0,  // langKinyarwanda → smRoman
	    91: 0,  // langRundi → smRoman
	    92: 0,  // langNyanja → smRoman
	    93: 0,  // langMalagasy → smRoman
	    94: 0,  // langEsperanto → smRoman
	    128: 0,  // langWelsh → smRoman (modified)
	    129: 0,  // langBasque → smRoman
	    130: 0,  // langCatalan → smRoman
	    131: 0,  // langLatin → smRoman
	    132: 0,  // langQuechua → smRoman
	    133: 0,  // langGuarani → smRoman
	    134: 0,  // langAymara → smRoman
	    135: 7,  // langTatar → smCyrillic
	    136: 4,  // langUighur → smArabic
	    137: 26,  // langDzongkha → smTibetan
	    138: 0,  // langJavaneseRom → smRoman
	    139: 0,  // langSundaneseRom → smRoman
	    140: 0,  // langGalician → smRoman
	    141: 0,  // langAfrikaans → smRoman
	    142: 0,  // langBreton → smRoman (modified)
	    143: 28,  // langInuktitut → smEthiopic (modified)
	    144: 0,  // langScottishGaelic → smRoman (modified)
	    145: 0,  // langManxGaelic → smRoman (modified)
	    146: 0,  // langIrishGaelicScript → smRoman (modified)
	    147: 0,  // langTongan → smRoman
	    148: 6,  // langGreekAncient → smRoman
	    149: 0,  // langGreenlandic → smRoman
	    150: 0,  // langAzerbaijanRoman → smRoman
	    151: 0   // langNynorsk → smRoman
	};
	
	// While Microsoft indicates a region/country for all its language
	// IDs, we omit the region code if it's equal to the "most likely
	// region subtag" according to Unicode CLDR. For scripts, we omit
	// the subtag if it is equal to the Suppress-Script entry in the
	// IANA language subtag registry for IETF BCP 47.
	//
	// For example, Microsoft states that its language code 0x041A is
	// Croatian in Croatia. We transform this to the BCP 47 language code 'hr'
	// and not 'hr-HR' because Croatia is the default country for Croatian,
	// according to Unicode CLDR. As another example, Microsoft states
	// that 0x101A is Croatian (Latin) in Bosnia-Herzegovina. We transform
	// this to 'hr-BA' and not 'hr-Latn-BA' because Latin is the default script
	// for the Croatian language, according to IANA.
	//
	// http://www.unicode.org/cldr/charts/latest/supplemental/likely_subtags.html
	// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
	var windowsLanguages = {
	    0x0436: 'af',
	    0x041C: 'sq',
	    0x0484: 'gsw',
	    0x045E: 'am',
	    0x1401: 'ar-DZ',
	    0x3C01: 'ar-BH',
	    0x0C01: 'ar',
	    0x0801: 'ar-IQ',
	    0x2C01: 'ar-JO',
	    0x3401: 'ar-KW',
	    0x3001: 'ar-LB',
	    0x1001: 'ar-LY',
	    0x1801: 'ary',
	    0x2001: 'ar-OM',
	    0x4001: 'ar-QA',
	    0x0401: 'ar-SA',
	    0x2801: 'ar-SY',
	    0x1C01: 'aeb',
	    0x3801: 'ar-AE',
	    0x2401: 'ar-YE',
	    0x042B: 'hy',
	    0x044D: 'as',
	    0x082C: 'az-Cyrl',
	    0x042C: 'az',
	    0x046D: 'ba',
	    0x042D: 'eu',
	    0x0423: 'be',
	    0x0845: 'bn',
	    0x0445: 'bn-IN',
	    0x201A: 'bs-Cyrl',
	    0x141A: 'bs',
	    0x047E: 'br',
	    0x0402: 'bg',
	    0x0403: 'ca',
	    0x0C04: 'zh-HK',
	    0x1404: 'zh-MO',
	    0x0804: 'zh',
	    0x1004: 'zh-SG',
	    0x0404: 'zh-TW',
	    0x0483: 'co',
	    0x041A: 'hr',
	    0x101A: 'hr-BA',
	    0x0405: 'cs',
	    0x0406: 'da',
	    0x048C: 'prs',
	    0x0465: 'dv',
	    0x0813: 'nl-BE',
	    0x0413: 'nl',
	    0x0C09: 'en-AU',
	    0x2809: 'en-BZ',
	    0x1009: 'en-CA',
	    0x2409: 'en-029',
	    0x4009: 'en-IN',
	    0x1809: 'en-IE',
	    0x2009: 'en-JM',
	    0x4409: 'en-MY',
	    0x1409: 'en-NZ',
	    0x3409: 'en-PH',
	    0x4809: 'en-SG',
	    0x1C09: 'en-ZA',
	    0x2C09: 'en-TT',
	    0x0809: 'en-GB',
	    0x0409: 'en',
	    0x3009: 'en-ZW',
	    0x0425: 'et',
	    0x0438: 'fo',
	    0x0464: 'fil',
	    0x040B: 'fi',
	    0x080C: 'fr-BE',
	    0x0C0C: 'fr-CA',
	    0x040C: 'fr',
	    0x140C: 'fr-LU',
	    0x180C: 'fr-MC',
	    0x100C: 'fr-CH',
	    0x0462: 'fy',
	    0x0456: 'gl',
	    0x0437: 'ka',
	    0x0C07: 'de-AT',
	    0x0407: 'de',
	    0x1407: 'de-LI',
	    0x1007: 'de-LU',
	    0x0807: 'de-CH',
	    0x0408: 'el',
	    0x046F: 'kl',
	    0x0447: 'gu',
	    0x0468: 'ha',
	    0x040D: 'he',
	    0x0439: 'hi',
	    0x040E: 'hu',
	    0x040F: 'is',
	    0x0470: 'ig',
	    0x0421: 'id',
	    0x045D: 'iu',
	    0x085D: 'iu-Latn',
	    0x083C: 'ga',
	    0x0434: 'xh',
	    0x0435: 'zu',
	    0x0410: 'it',
	    0x0810: 'it-CH',
	    0x0411: 'ja',
	    0x044B: 'kn',
	    0x043F: 'kk',
	    0x0453: 'km',
	    0x0486: 'quc',
	    0x0487: 'rw',
	    0x0441: 'sw',
	    0x0457: 'kok',
	    0x0412: 'ko',
	    0x0440: 'ky',
	    0x0454: 'lo',
	    0x0426: 'lv',
	    0x0427: 'lt',
	    0x082E: 'dsb',
	    0x046E: 'lb',
	    0x042F: 'mk',
	    0x083E: 'ms-BN',
	    0x043E: 'ms',
	    0x044C: 'ml',
	    0x043A: 'mt',
	    0x0481: 'mi',
	    0x047A: 'arn',
	    0x044E: 'mr',
	    0x047C: 'moh',
	    0x0450: 'mn',
	    0x0850: 'mn-CN',
	    0x0461: 'ne',
	    0x0414: 'nb',
	    0x0814: 'nn',
	    0x0482: 'oc',
	    0x0448: 'or',
	    0x0463: 'ps',
	    0x0415: 'pl',
	    0x0416: 'pt',
	    0x0816: 'pt-PT',
	    0x0446: 'pa',
	    0x046B: 'qu-BO',
	    0x086B: 'qu-EC',
	    0x0C6B: 'qu',
	    0x0418: 'ro',
	    0x0417: 'rm',
	    0x0419: 'ru',
	    0x243B: 'smn',
	    0x103B: 'smj-NO',
	    0x143B: 'smj',
	    0x0C3B: 'se-FI',
	    0x043B: 'se',
	    0x083B: 'se-SE',
	    0x203B: 'sms',
	    0x183B: 'sma-NO',
	    0x1C3B: 'sms',
	    0x044F: 'sa',
	    0x1C1A: 'sr-Cyrl-BA',
	    0x0C1A: 'sr',
	    0x181A: 'sr-Latn-BA',
	    0x081A: 'sr-Latn',
	    0x046C: 'nso',
	    0x0432: 'tn',
	    0x045B: 'si',
	    0x041B: 'sk',
	    0x0424: 'sl',
	    0x2C0A: 'es-AR',
	    0x400A: 'es-BO',
	    0x340A: 'es-CL',
	    0x240A: 'es-CO',
	    0x140A: 'es-CR',
	    0x1C0A: 'es-DO',
	    0x300A: 'es-EC',
	    0x440A: 'es-SV',
	    0x100A: 'es-GT',
	    0x480A: 'es-HN',
	    0x080A: 'es-MX',
	    0x4C0A: 'es-NI',
	    0x180A: 'es-PA',
	    0x3C0A: 'es-PY',
	    0x280A: 'es-PE',
	    0x500A: 'es-PR',
	
	    // Microsoft has defined two different language codes for
	    // “Spanish with modern sorting” and “Spanish with traditional
	    // sorting”. This makes sense for collation APIs, and it would be
	    // possible to express this in BCP 47 language tags via Unicode
	    // extensions (eg., es-u-co-trad is Spanish with traditional
	    // sorting). However, for storing names in fonts, the distinction
	    // does not make sense, so we give “es” in both cases.
	    0x0C0A: 'es',
	    0x040A: 'es',
	
	    0x540A: 'es-US',
	    0x380A: 'es-UY',
	    0x200A: 'es-VE',
	    0x081D: 'sv-FI',
	    0x041D: 'sv',
	    0x045A: 'syr',
	    0x0428: 'tg',
	    0x085F: 'tzm',
	    0x0449: 'ta',
	    0x0444: 'tt',
	    0x044A: 'te',
	    0x041E: 'th',
	    0x0451: 'bo',
	    0x041F: 'tr',
	    0x0442: 'tk',
	    0x0480: 'ug',
	    0x0422: 'uk',
	    0x042E: 'hsb',
	    0x0420: 'ur',
	    0x0843: 'uz-Cyrl',
	    0x0443: 'uz',
	    0x042A: 'vi',
	    0x0452: 'cy',
	    0x0488: 'wo',
	    0x0485: 'sah',
	    0x0478: 'ii',
	    0x046A: 'yo'
	};
	
	// Returns a IETF BCP 47 language code, for example 'zh-Hant'
	// for 'Chinese in the traditional script'.
	function getLanguageCode(platformID, languageID, ltag) {
	    switch (platformID) {
	        case 0:  // Unicode
	            if (languageID === 0xFFFF) {
	                return 'und';
	            } else if (ltag) {
	                return ltag[languageID];
	            }
	
	            break;
	
	        case 1:  // Macintosh
	            return macLanguages[languageID];
	
	        case 3:  // Windows
	            return windowsLanguages[languageID];
	    }
	
	    return undefined;
	}
	
	var utf16 = 'utf-16';
	
	// MacOS script ID → encoding. This table stores the default case,
	// which can be overridden by macLanguageEncodings.
	var macScriptEncodings = {
	    0: 'macintosh',           // smRoman
	    1: 'x-mac-japanese',      // smJapanese
	    2: 'x-mac-chinesetrad',   // smTradChinese
	    3: 'x-mac-korean',        // smKorean
	    6: 'x-mac-greek',         // smGreek
	    7: 'x-mac-cyrillic',      // smCyrillic
	    9: 'x-mac-devanagai',     // smDevanagari
	    10: 'x-mac-gurmukhi',     // smGurmukhi
	    11: 'x-mac-gujarati',     // smGujarati
	    12: 'x-mac-oriya',        // smOriya
	    13: 'x-mac-bengali',      // smBengali
	    14: 'x-mac-tamil',        // smTamil
	    15: 'x-mac-telugu',       // smTelugu
	    16: 'x-mac-kannada',      // smKannada
	    17: 'x-mac-malayalam',    // smMalayalam
	    18: 'x-mac-sinhalese',    // smSinhalese
	    19: 'x-mac-burmese',      // smBurmese
	    20: 'x-mac-khmer',        // smKhmer
	    21: 'x-mac-thai',         // smThai
	    22: 'x-mac-lao',          // smLao
	    23: 'x-mac-georgian',     // smGeorgian
	    24: 'x-mac-armenian',     // smArmenian
	    25: 'x-mac-chinesesimp',  // smSimpChinese
	    26: 'x-mac-tibetan',      // smTibetan
	    27: 'x-mac-mongolian',    // smMongolian
	    28: 'x-mac-ethiopic',     // smEthiopic
	    29: 'x-mac-ce',           // smCentralEuroRoman
	    30: 'x-mac-vietnamese',   // smVietnamese
	    31: 'x-mac-extarabic'     // smExtArabic
	};
	
	// MacOS language ID → encoding. This table stores the exceptional
	// cases, which override macScriptEncodings. For writing MacOS naming
	// tables, we need to emit a MacOS script ID. Therefore, we cannot
	// merge macScriptEncodings into macLanguageEncodings.
	//
	// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
	var macLanguageEncodings = {
	    15: 'x-mac-icelandic',    // langIcelandic
	    17: 'x-mac-turkish',      // langTurkish
	    18: 'x-mac-croatian',     // langCroatian
	    24: 'x-mac-ce',           // langLithuanian
	    25: 'x-mac-ce',           // langPolish
	    26: 'x-mac-ce',           // langHungarian
	    27: 'x-mac-ce',           // langEstonian
	    28: 'x-mac-ce',           // langLatvian
	    30: 'x-mac-icelandic',    // langFaroese
	    37: 'x-mac-romanian',     // langRomanian
	    38: 'x-mac-ce',           // langCzech
	    39: 'x-mac-ce',           // langSlovak
	    40: 'x-mac-ce',           // langSlovenian
	    143: 'x-mac-inuit',       // langInuktitut
	    146: 'x-mac-gaelic'       // langIrishGaelicScript
	};
	
	function getEncoding(platformID, encodingID, languageID) {
	    switch (platformID) {
	        case 0:  // Unicode
	            return utf16;
	
	        case 1:  // Apple Macintosh
	            return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];
	
	        case 3:  // Microsoft Windows
	            if (encodingID === 1 || encodingID === 10) {
	                return utf16;
	            }
	
	            break;
	    }
	
	    return undefined;
	}
	
	// Parse the naming `name` table.
	// FIXME: Format 1 additional fields are not supported yet.
	// ltag is the content of the `ltag' table, such as ['en', 'zh-Hans', 'de-CH-1904'].
	function parseNameTable(data, start, ltag) {
	    var name = {};
	    var p = new parse.Parser(data, start);
	    var format = p.parseUShort();
	    var count = p.parseUShort();
	    var stringOffset = p.offset + p.parseUShort();
	    for (var i = 0; i < count; i++) {
	        var platformID = p.parseUShort();
	        var encodingID = p.parseUShort();
	        var languageID = p.parseUShort();
	        var nameID = p.parseUShort();
	        var property = nameTableNames[nameID] || nameID;
	        var byteLength = p.parseUShort();
	        var offset = p.parseUShort();
	        var language = getLanguageCode(platformID, languageID, ltag);
	        var encoding = getEncoding(platformID, encodingID, languageID);
	        if (encoding !== undefined && language !== undefined) {
	            var text;
	            if (encoding === utf16) {
	                text = decode.UTF16(data, stringOffset + offset, byteLength);
	            } else {
	                text = decode.MACSTRING(data, stringOffset + offset, byteLength, encoding);
	            }
	
	            if (text) {
	                var translations = name[property];
	                if (translations === undefined) {
	                    translations = name[property] = {};
	                }
	
	                translations[language] = text;
	            }
	        }
	    }
	
	    var langTagCount = 0;
	    if (format === 1) {
	        // FIXME: Also handle Microsoft's 'name' table 1.
	        langTagCount = p.parseUShort();
	    }
	
	    return name;
	}
	
	// {23: 'foo'} → {'foo': 23}
	// ['bar', 'baz'] → {'bar': 0, 'baz': 1}
	function reverseDict(dict) {
	    var result = {};
	    for (var key in dict) {
	        result[dict[key]] = parseInt(key);
	    }
	
	    return result;
	}
	
	function makeNameRecord(platformID, encodingID, languageID, nameID, length, offset) {
	    return new table.Record('NameRecord', [
	        {name: 'platformID', type: 'USHORT', value: platformID},
	        {name: 'encodingID', type: 'USHORT', value: encodingID},
	        {name: 'languageID', type: 'USHORT', value: languageID},
	        {name: 'nameID', type: 'USHORT', value: nameID},
	        {name: 'length', type: 'USHORT', value: length},
	        {name: 'offset', type: 'USHORT', value: offset}
	    ]);
	}
	
	// Finds the position of needle in haystack, or -1 if not there.
	// Like String.indexOf(), but for arrays.
	function findSubArray(needle, haystack) {
	    var needleLength = needle.length;
	    var limit = haystack.length - needleLength + 1;
	
	    loop:
	    for (var pos = 0; pos < limit; pos++) {
	        for (; pos < limit; pos++) {
	            for (var k = 0; k < needleLength; k++) {
	                if (haystack[pos + k] !== needle[k]) {
	                    continue loop;
	                }
	            }
	
	            return pos;
	        }
	    }
	
	    return -1;
	}
	
	function addStringToPool(s, pool) {
	    var offset = findSubArray(s, pool);
	    if (offset < 0) {
	        offset = pool.length;
	        for (var i = 0, len = s.length; i < len; ++i) {
	            pool.push(s[i]);
	        }
	
	    }
	
	    return offset;
	}
	
	function makeNameTable(names, ltag) {
	    var nameID;
	    var nameIDs = [];
	
	    var namesWithNumericKeys = {};
	    var nameTableIds = reverseDict(nameTableNames);
	    for (var key in names) {
	        var id = nameTableIds[key];
	        if (id === undefined) {
	            id = key;
	        }
	
	        nameID = parseInt(id);
	
	        if (isNaN(nameID)) {
	            throw new Error('Name table entry "' + key + '" does not exist, see nameTableNames for complete list.');
	        }
	
	        namesWithNumericKeys[nameID] = names[key];
	        nameIDs.push(nameID);
	    }
	
	    var macLanguageIds = reverseDict(macLanguages);
	    var windowsLanguageIds = reverseDict(windowsLanguages);
	
	    var nameRecords = [];
	    var stringPool = [];
	
	    for (var i = 0; i < nameIDs.length; i++) {
	        nameID = nameIDs[i];
	        var translations = namesWithNumericKeys[nameID];
	        for (var lang in translations) {
	            var text = translations[lang];
	
	            // For MacOS, we try to emit the name in the form that was introduced
	            // in the initial version of the TrueType spec (in the late 1980s).
	            // However, this can fail for various reasons: the requested BCP 47
	            // language code might not have an old-style Mac equivalent;
	            // we might not have a codec for the needed character encoding;
	            // or the name might contain characters that cannot be expressed
	            // in the old-style Macintosh encoding. In case of failure, we emit
	            // the name in a more modern fashion (Unicode encoding with BCP 47
	            // language tags) that is recognized by MacOS 10.5, released in 2009.
	            // If fonts were only read by operating systems, we could simply
	            // emit all names in the modern form; this would be much easier.
	            // However, there are many applications and libraries that read
	            // 'name' tables directly, and these will usually only recognize
	            // the ancient form (silently skipping the unrecognized names).
	            var macPlatform = 1;  // Macintosh
	            var macLanguage = macLanguageIds[lang];
	            var macScript = macLanguageToScript[macLanguage];
	            var macEncoding = getEncoding(macPlatform, macScript, macLanguage);
	            var macName = encode.MACSTRING(text, macEncoding);
	            if (macName === undefined) {
	                macPlatform = 0;  // Unicode
	                macLanguage = ltag.indexOf(lang);
	                if (macLanguage < 0) {
	                    macLanguage = ltag.length;
	                    ltag.push(lang);
	                }
	
	                macScript = 4;  // Unicode 2.0 and later
	                macName = encode.UTF16(text);
	            }
	
	            var macNameOffset = addStringToPool(macName, stringPool);
	            nameRecords.push(makeNameRecord(macPlatform, macScript, macLanguage,
	                                            nameID, macName.length, macNameOffset));
	
	            var winLanguage = windowsLanguageIds[lang];
	            if (winLanguage !== undefined) {
	                var winName = encode.UTF16(text);
	                var winNameOffset = addStringToPool(winName, stringPool);
	                nameRecords.push(makeNameRecord(3, 1, winLanguage,
	                                                nameID, winName.length, winNameOffset));
	            }
	        }
	    }
	
	    nameRecords.sort(function(a, b) {
	        return ((a.platformID - b.platformID) ||
	                (a.encodingID - b.encodingID) ||
	                (a.languageID - b.languageID) ||
	                (a.nameID - b.nameID));
	    });
	
	    var t = new table.Table('name', [
	        {name: 'format', type: 'USHORT', value: 0},
	        {name: 'count', type: 'USHORT', value: nameRecords.length},
	        {name: 'stringOffset', type: 'USHORT', value: 6 + nameRecords.length * 12}
	    ]);
	
	    for (var r = 0; r < nameRecords.length; r++) {
	        t.fields.push({name: 'record_' + r, type: 'RECORD', value: nameRecords[r]});
	    }
	
	    t.fields.push({name: 'strings', type: 'LITERAL', value: stringPool});
	    return t;
	}
	
	exports.parse = parseNameTable;
	exports.make = makeNameTable;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// The `OS/2` table contains metrics required in OpenType fonts.
	// https://www.microsoft.com/typography/OTSPEC/os2.htm
	
	'use strict';
	
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	var unicodeRanges = [
	    {begin: 0x0000, end: 0x007F}, // Basic Latin
	    {begin: 0x0080, end: 0x00FF}, // Latin-1 Supplement
	    {begin: 0x0100, end: 0x017F}, // Latin Extended-A
	    {begin: 0x0180, end: 0x024F}, // Latin Extended-B
	    {begin: 0x0250, end: 0x02AF}, // IPA Extensions
	    {begin: 0x02B0, end: 0x02FF}, // Spacing Modifier Letters
	    {begin: 0x0300, end: 0x036F}, // Combining Diacritical Marks
	    {begin: 0x0370, end: 0x03FF}, // Greek and Coptic
	    {begin: 0x2C80, end: 0x2CFF}, // Coptic
	    {begin: 0x0400, end: 0x04FF}, // Cyrillic
	    {begin: 0x0530, end: 0x058F}, // Armenian
	    {begin: 0x0590, end: 0x05FF}, // Hebrew
	    {begin: 0xA500, end: 0xA63F}, // Vai
	    {begin: 0x0600, end: 0x06FF}, // Arabic
	    {begin: 0x07C0, end: 0x07FF}, // NKo
	    {begin: 0x0900, end: 0x097F}, // Devanagari
	    {begin: 0x0980, end: 0x09FF}, // Bengali
	    {begin: 0x0A00, end: 0x0A7F}, // Gurmukhi
	    {begin: 0x0A80, end: 0x0AFF}, // Gujarati
	    {begin: 0x0B00, end: 0x0B7F}, // Oriya
	    {begin: 0x0B80, end: 0x0BFF}, // Tamil
	    {begin: 0x0C00, end: 0x0C7F}, // Telugu
	    {begin: 0x0C80, end: 0x0CFF}, // Kannada
	    {begin: 0x0D00, end: 0x0D7F}, // Malayalam
	    {begin: 0x0E00, end: 0x0E7F}, // Thai
	    {begin: 0x0E80, end: 0x0EFF}, // Lao
	    {begin: 0x10A0, end: 0x10FF}, // Georgian
	    {begin: 0x1B00, end: 0x1B7F}, // Balinese
	    {begin: 0x1100, end: 0x11FF}, // Hangul Jamo
	    {begin: 0x1E00, end: 0x1EFF}, // Latin Extended Additional
	    {begin: 0x1F00, end: 0x1FFF}, // Greek Extended
	    {begin: 0x2000, end: 0x206F}, // General Punctuation
	    {begin: 0x2070, end: 0x209F}, // Superscripts And Subscripts
	    {begin: 0x20A0, end: 0x20CF}, // Currency Symbol
	    {begin: 0x20D0, end: 0x20FF}, // Combining Diacritical Marks For Symbols
	    {begin: 0x2100, end: 0x214F}, // Letterlike Symbols
	    {begin: 0x2150, end: 0x218F}, // Number Forms
	    {begin: 0x2190, end: 0x21FF}, // Arrows
	    {begin: 0x2200, end: 0x22FF}, // Mathematical Operators
	    {begin: 0x2300, end: 0x23FF}, // Miscellaneous Technical
	    {begin: 0x2400, end: 0x243F}, // Control Pictures
	    {begin: 0x2440, end: 0x245F}, // Optical Character Recognition
	    {begin: 0x2460, end: 0x24FF}, // Enclosed Alphanumerics
	    {begin: 0x2500, end: 0x257F}, // Box Drawing
	    {begin: 0x2580, end: 0x259F}, // Block Elements
	    {begin: 0x25A0, end: 0x25FF}, // Geometric Shapes
	    {begin: 0x2600, end: 0x26FF}, // Miscellaneous Symbols
	    {begin: 0x2700, end: 0x27BF}, // Dingbats
	    {begin: 0x3000, end: 0x303F}, // CJK Symbols And Punctuation
	    {begin: 0x3040, end: 0x309F}, // Hiragana
	    {begin: 0x30A0, end: 0x30FF}, // Katakana
	    {begin: 0x3100, end: 0x312F}, // Bopomofo
	    {begin: 0x3130, end: 0x318F}, // Hangul Compatibility Jamo
	    {begin: 0xA840, end: 0xA87F}, // Phags-pa
	    {begin: 0x3200, end: 0x32FF}, // Enclosed CJK Letters And Months
	    {begin: 0x3300, end: 0x33FF}, // CJK Compatibility
	    {begin: 0xAC00, end: 0xD7AF}, // Hangul Syllables
	    {begin: 0xD800, end: 0xDFFF}, // Non-Plane 0 *
	    {begin: 0x10900, end: 0x1091F}, // Phoenicia
	    {begin: 0x4E00, end: 0x9FFF}, // CJK Unified Ideographs
	    {begin: 0xE000, end: 0xF8FF}, // Private Use Area (plane 0)
	    {begin: 0x31C0, end: 0x31EF}, // CJK Strokes
	    {begin: 0xFB00, end: 0xFB4F}, // Alphabetic Presentation Forms
	    {begin: 0xFB50, end: 0xFDFF}, // Arabic Presentation Forms-A
	    {begin: 0xFE20, end: 0xFE2F}, // Combining Half Marks
	    {begin: 0xFE10, end: 0xFE1F}, // Vertical Forms
	    {begin: 0xFE50, end: 0xFE6F}, // Small Form Variants
	    {begin: 0xFE70, end: 0xFEFF}, // Arabic Presentation Forms-B
	    {begin: 0xFF00, end: 0xFFEF}, // Halfwidth And Fullwidth Forms
	    {begin: 0xFFF0, end: 0xFFFF}, // Specials
	    {begin: 0x0F00, end: 0x0FFF}, // Tibetan
	    {begin: 0x0700, end: 0x074F}, // Syriac
	    {begin: 0x0780, end: 0x07BF}, // Thaana
	    {begin: 0x0D80, end: 0x0DFF}, // Sinhala
	    {begin: 0x1000, end: 0x109F}, // Myanmar
	    {begin: 0x1200, end: 0x137F}, // Ethiopic
	    {begin: 0x13A0, end: 0x13FF}, // Cherokee
	    {begin: 0x1400, end: 0x167F}, // Unified Canadian Aboriginal Syllabics
	    {begin: 0x1680, end: 0x169F}, // Ogham
	    {begin: 0x16A0, end: 0x16FF}, // Runic
	    {begin: 0x1780, end: 0x17FF}, // Khmer
	    {begin: 0x1800, end: 0x18AF}, // Mongolian
	    {begin: 0x2800, end: 0x28FF}, // Braille Patterns
	    {begin: 0xA000, end: 0xA48F}, // Yi Syllables
	    {begin: 0x1700, end: 0x171F}, // Tagalog
	    {begin: 0x10300, end: 0x1032F}, // Old Italic
	    {begin: 0x10330, end: 0x1034F}, // Gothic
	    {begin: 0x10400, end: 0x1044F}, // Deseret
	    {begin: 0x1D000, end: 0x1D0FF}, // Byzantine Musical Symbols
	    {begin: 0x1D400, end: 0x1D7FF}, // Mathematical Alphanumeric Symbols
	    {begin: 0xFF000, end: 0xFFFFD}, // Private Use (plane 15)
	    {begin: 0xFE00, end: 0xFE0F}, // Variation Selectors
	    {begin: 0xE0000, end: 0xE007F}, // Tags
	    {begin: 0x1900, end: 0x194F}, // Limbu
	    {begin: 0x1950, end: 0x197F}, // Tai Le
	    {begin: 0x1980, end: 0x19DF}, // New Tai Lue
	    {begin: 0x1A00, end: 0x1A1F}, // Buginese
	    {begin: 0x2C00, end: 0x2C5F}, // Glagolitic
	    {begin: 0x2D30, end: 0x2D7F}, // Tifinagh
	    {begin: 0x4DC0, end: 0x4DFF}, // Yijing Hexagram Symbols
	    {begin: 0xA800, end: 0xA82F}, // Syloti Nagri
	    {begin: 0x10000, end: 0x1007F}, // Linear B Syllabary
	    {begin: 0x10140, end: 0x1018F}, // Ancient Greek Numbers
	    {begin: 0x10380, end: 0x1039F}, // Ugaritic
	    {begin: 0x103A0, end: 0x103DF}, // Old Persian
	    {begin: 0x10450, end: 0x1047F}, // Shavian
	    {begin: 0x10480, end: 0x104AF}, // Osmanya
	    {begin: 0x10800, end: 0x1083F}, // Cypriot Syllabary
	    {begin: 0x10A00, end: 0x10A5F}, // Kharoshthi
	    {begin: 0x1D300, end: 0x1D35F}, // Tai Xuan Jing Symbols
	    {begin: 0x12000, end: 0x123FF}, // Cuneiform
	    {begin: 0x1D360, end: 0x1D37F}, // Counting Rod Numerals
	    {begin: 0x1B80, end: 0x1BBF}, // Sundanese
	    {begin: 0x1C00, end: 0x1C4F}, // Lepcha
	    {begin: 0x1C50, end: 0x1C7F}, // Ol Chiki
	    {begin: 0xA880, end: 0xA8DF}, // Saurashtra
	    {begin: 0xA900, end: 0xA92F}, // Kayah Li
	    {begin: 0xA930, end: 0xA95F}, // Rejang
	    {begin: 0xAA00, end: 0xAA5F}, // Cham
	    {begin: 0x10190, end: 0x101CF}, // Ancient Symbols
	    {begin: 0x101D0, end: 0x101FF}, // Phaistos Disc
	    {begin: 0x102A0, end: 0x102DF}, // Carian
	    {begin: 0x1F030, end: 0x1F09F}  // Domino Tiles
	];
	
	function getUnicodeRange(unicode) {
	    for (var i = 0; i < unicodeRanges.length; i += 1) {
	        var range = unicodeRanges[i];
	        if (unicode >= range.begin && unicode < range.end) {
	            return i;
	        }
	    }
	
	    return -1;
	}
	
	// Parse the OS/2 and Windows metrics `OS/2` table
	function parseOS2Table(data, start) {
	    var os2 = {};
	    var p = new parse.Parser(data, start);
	    os2.version = p.parseUShort();
	    os2.xAvgCharWidth = p.parseShort();
	    os2.usWeightClass = p.parseUShort();
	    os2.usWidthClass = p.parseUShort();
	    os2.fsType = p.parseUShort();
	    os2.ySubscriptXSize = p.parseShort();
	    os2.ySubscriptYSize = p.parseShort();
	    os2.ySubscriptXOffset = p.parseShort();
	    os2.ySubscriptYOffset = p.parseShort();
	    os2.ySuperscriptXSize = p.parseShort();
	    os2.ySuperscriptYSize = p.parseShort();
	    os2.ySuperscriptXOffset = p.parseShort();
	    os2.ySuperscriptYOffset = p.parseShort();
	    os2.yStrikeoutSize = p.parseShort();
	    os2.yStrikeoutPosition = p.parseShort();
	    os2.sFamilyClass = p.parseShort();
	    os2.panose = [];
	    for (var i = 0; i < 10; i++) {
	        os2.panose[i] = p.parseByte();
	    }
	
	    os2.ulUnicodeRange1 = p.parseULong();
	    os2.ulUnicodeRange2 = p.parseULong();
	    os2.ulUnicodeRange3 = p.parseULong();
	    os2.ulUnicodeRange4 = p.parseULong();
	    os2.achVendID = String.fromCharCode(p.parseByte(), p.parseByte(), p.parseByte(), p.parseByte());
	    os2.fsSelection = p.parseUShort();
	    os2.usFirstCharIndex = p.parseUShort();
	    os2.usLastCharIndex = p.parseUShort();
	    os2.sTypoAscender = p.parseShort();
	    os2.sTypoDescender = p.parseShort();
	    os2.sTypoLineGap = p.parseShort();
	    os2.usWinAscent = p.parseUShort();
	    os2.usWinDescent = p.parseUShort();
	    if (os2.version >= 1) {
	        os2.ulCodePageRange1 = p.parseULong();
	        os2.ulCodePageRange2 = p.parseULong();
	    }
	
	    if (os2.version >= 2) {
	        os2.sxHeight = p.parseShort();
	        os2.sCapHeight = p.parseShort();
	        os2.usDefaultChar = p.parseUShort();
	        os2.usBreakChar = p.parseUShort();
	        os2.usMaxContent = p.parseUShort();
	    }
	
	    return os2;
	}
	
	function makeOS2Table(options) {
	    return new table.Table('OS/2', [
	        {name: 'version', type: 'USHORT', value: 0x0003},
	        {name: 'xAvgCharWidth', type: 'SHORT', value: 0},
	        {name: 'usWeightClass', type: 'USHORT', value: 0},
	        {name: 'usWidthClass', type: 'USHORT', value: 0},
	        {name: 'fsType', type: 'USHORT', value: 0},
	        {name: 'ySubscriptXSize', type: 'SHORT', value: 650},
	        {name: 'ySubscriptYSize', type: 'SHORT', value: 699},
	        {name: 'ySubscriptXOffset', type: 'SHORT', value: 0},
	        {name: 'ySubscriptYOffset', type: 'SHORT', value: 140},
	        {name: 'ySuperscriptXSize', type: 'SHORT', value: 650},
	        {name: 'ySuperscriptYSize', type: 'SHORT', value: 699},
	        {name: 'ySuperscriptXOffset', type: 'SHORT', value: 0},
	        {name: 'ySuperscriptYOffset', type: 'SHORT', value: 479},
	        {name: 'yStrikeoutSize', type: 'SHORT', value: 49},
	        {name: 'yStrikeoutPosition', type: 'SHORT', value: 258},
	        {name: 'sFamilyClass', type: 'SHORT', value: 0},
	        {name: 'bFamilyType', type: 'BYTE', value: 0},
	        {name: 'bSerifStyle', type: 'BYTE', value: 0},
	        {name: 'bWeight', type: 'BYTE', value: 0},
	        {name: 'bProportion', type: 'BYTE', value: 0},
	        {name: 'bContrast', type: 'BYTE', value: 0},
	        {name: 'bStrokeVariation', type: 'BYTE', value: 0},
	        {name: 'bArmStyle', type: 'BYTE', value: 0},
	        {name: 'bLetterform', type: 'BYTE', value: 0},
	        {name: 'bMidline', type: 'BYTE', value: 0},
	        {name: 'bXHeight', type: 'BYTE', value: 0},
	        {name: 'ulUnicodeRange1', type: 'ULONG', value: 0},
	        {name: 'ulUnicodeRange2', type: 'ULONG', value: 0},
	        {name: 'ulUnicodeRange3', type: 'ULONG', value: 0},
	        {name: 'ulUnicodeRange4', type: 'ULONG', value: 0},
	        {name: 'achVendID', type: 'CHARARRAY', value: 'XXXX'},
	        {name: 'fsSelection', type: 'USHORT', value: 0},
	        {name: 'usFirstCharIndex', type: 'USHORT', value: 0},
	        {name: 'usLastCharIndex', type: 'USHORT', value: 0},
	        {name: 'sTypoAscender', type: 'SHORT', value: 0},
	        {name: 'sTypoDescender', type: 'SHORT', value: 0},
	        {name: 'sTypoLineGap', type: 'SHORT', value: 0},
	        {name: 'usWinAscent', type: 'USHORT', value: 0},
	        {name: 'usWinDescent', type: 'USHORT', value: 0},
	        {name: 'ulCodePageRange1', type: 'ULONG', value: 0},
	        {name: 'ulCodePageRange2', type: 'ULONG', value: 0},
	        {name: 'sxHeight', type: 'SHORT', value: 0},
	        {name: 'sCapHeight', type: 'SHORT', value: 0},
	        {name: 'usDefaultChar', type: 'USHORT', value: 0},
	        {name: 'usBreakChar', type: 'USHORT', value: 0},
	        {name: 'usMaxContext', type: 'USHORT', value: 0}
	    ], options);
	}
	
	exports.unicodeRanges = unicodeRanges;
	exports.getUnicodeRange = getUnicodeRange;
	exports.parse = parseOS2Table;
	exports.make = makeOS2Table;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// The `post` table stores additional PostScript information, such as glyph names.
	// https://www.microsoft.com/typography/OTSPEC/post.htm
	
	'use strict';
	
	var encoding = __webpack_require__(53);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the PostScript `post` table
	function parsePostTable(data, start) {
	    var post = {};
	    var p = new parse.Parser(data, start);
	    var i;
	    post.version = p.parseVersion();
	    post.italicAngle = p.parseFixed();
	    post.underlinePosition = p.parseShort();
	    post.underlineThickness = p.parseShort();
	    post.isFixedPitch = p.parseULong();
	    post.minMemType42 = p.parseULong();
	    post.maxMemType42 = p.parseULong();
	    post.minMemType1 = p.parseULong();
	    post.maxMemType1 = p.parseULong();
	    switch (post.version) {
	        case 1:
	            post.names = encoding.standardNames.slice();
	            break;
	        case 2:
	            post.numberOfGlyphs = p.parseUShort();
	            post.glyphNameIndex = new Array(post.numberOfGlyphs);
	            for (i = 0; i < post.numberOfGlyphs; i++) {
	                post.glyphNameIndex[i] = p.parseUShort();
	            }
	
	            post.names = [];
	            for (i = 0; i < post.numberOfGlyphs; i++) {
	                if (post.glyphNameIndex[i] >= encoding.standardNames.length) {
	                    var nameLength = p.parseChar();
	                    post.names.push(p.parseString(nameLength));
	                }
	            }
	
	            break;
	        case 2.5:
	            post.numberOfGlyphs = p.parseUShort();
	            post.offset = new Array(post.numberOfGlyphs);
	            for (i = 0; i < post.numberOfGlyphs; i++) {
	                post.offset[i] = p.parseChar();
	            }
	
	            break;
	    }
	    return post;
	}
	
	function makePostTable() {
	    return new table.Table('post', [
	        {name: 'version', type: 'FIXED', value: 0x00030000},
	        {name: 'italicAngle', type: 'FIXED', value: 0},
	        {name: 'underlinePosition', type: 'FWORD', value: 0},
	        {name: 'underlineThickness', type: 'FWORD', value: 0},
	        {name: 'isFixedPitch', type: 'ULONG', value: 0},
	        {name: 'minMemType42', type: 'ULONG', value: 0},
	        {name: 'maxMemType42', type: 'ULONG', value: 0},
	        {name: 'minMemType1', type: 'ULONG', value: 0},
	        {name: 'maxMemType1', type: 'ULONG', value: 0}
	    ]);
	}
	
	exports.parse = parsePostTable;
	exports.make = makePostTable;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// The `GSUB` table contains ligatures, among other things.
	// https://www.microsoft.com/typography/OTSPEC/gsub.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var Parser = __webpack_require__(61).Parser;
	var subtableParsers = new Array(9);         // subtableParsers[0] is unused
	var table = __webpack_require__(58);
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#SS
	subtableParsers[1] = function parseLookup1() {
	    var start = this.offset + this.relativeOffset;
	    var substFormat = this.parseUShort();
	    if (substFormat === 1) {
	        return {
	            substFormat: 1,
	            coverage: this.parsePointer(Parser.coverage),
	            deltaGlyphId: this.parseUShort()
	        };
	    } else if (substFormat === 2) {
	        return {
	            substFormat: 2,
	            coverage: this.parsePointer(Parser.coverage),
	            substitute: this.parseOffset16List()
	        };
	    }
	    check.assert(false, '0x' + start.toString(16) + ': lookup type 1 format must be 1 or 2.');
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#MS
	subtableParsers[2] = function parseLookup2() {
	    var substFormat = this.parseUShort();
	    check.argument(substFormat === 1, 'GSUB Multiple Substitution Subtable identifier-format must be 1');
	    return {
	        substFormat: substFormat,
	        coverage: this.parsePointer(Parser.coverage),
	        sequences: this.parseListOfLists()
	    };
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#AS
	subtableParsers[3] = function parseLookup3() {
	    var substFormat = this.parseUShort();
	    check.argument(substFormat === 1, 'GSUB Alternate Substitution Subtable identifier-format must be 1');
	    return {
	        substFormat: substFormat,
	        coverage: this.parsePointer(Parser.coverage),
	        alternateSets: this.parseListOfLists()
	    };
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#LS
	subtableParsers[4] = function parseLookup4() {
	    var substFormat = this.parseUShort();
	    check.argument(substFormat === 1, 'GSUB ligature table identifier-format must be 1');
	    return {
	        substFormat: substFormat,
	        coverage: this.parsePointer(Parser.coverage),
	        ligatureSets: this.parseListOfLists(function() {
	            return {
	                ligGlyph: this.parseUShort(),
	                components: this.parseUShortList(this.parseUShort() - 1)
	            };
	        })
	    };
	};
	
	var lookupRecordDesc = {
	    sequenceIndex: Parser.uShort,
	    lookupListIndex: Parser.uShort
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#CSF
	subtableParsers[5] = function parseLookup5() {
	    var start = this.offset + this.relativeOffset;
	    var substFormat = this.parseUShort();
	
	    if (substFormat === 1) {
	        return {
	            substFormat: substFormat,
	            coverage: this.parsePointer(Parser.coverage),
	            ruleSets: this.parseListOfLists(function() {
	                var glyphCount = this.parseUShort();
	                var substCount = this.parseUShort();
	                return {
	                    input: this.parseUShortList(glyphCount - 1),
	                    lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
	                };
	            })
	        };
	    } else if (substFormat === 2) {
	        return {
	            substFormat: substFormat,
	            coverage: this.parsePointer(Parser.coverage),
	            classDef: this.parsePointer(Parser.classDef),
	            classSets: this.parseListOfLists(function() {
	                var glyphCount = this.parseUShort();
	                var substCount = this.parseUShort();
	                return {
	                    classes: this.parseUShortList(glyphCount - 1),
	                    lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
	                };
	            })
	        };
	    } else if (substFormat === 3) {
	        var glyphCount = this.parseUShort();
	        var substCount = this.parseUShort();
	        return {
	            substFormat: substFormat,
	            coverages: this.parseList(glyphCount, Parser.pointer(Parser.coverage)),
	            lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
	        };
	    }
	    check.assert(false, '0x' + start.toString(16) + ': lookup type 5 format must be 1, 2 or 3.');
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#CC
	subtableParsers[6] = function parseLookup6() {
	    var start = this.offset + this.relativeOffset;
	    var substFormat = this.parseUShort();
	    if (substFormat === 1) {
	        return {
	            substFormat: 1,
	            coverage: this.parsePointer(Parser.coverage),
	            chainRuleSets: this.parseListOfLists(function() {
	                return {
	                    backtrack: this.parseUShortList(),
	                    input: this.parseUShortList(this.parseShort() - 1),
	                    lookahead: this.parseUShortList(),
	                    lookupRecords: this.parseRecordList(lookupRecordDesc)
	                };
	            })
	        };
	    } else if (substFormat === 2) {
	        return {
	            substFormat: 2,
	            coverage: this.parsePointer(Parser.coverage),
	            backtrackClassDef: this.parsePointer(Parser.classDef),
	            inputClassDef: this.parsePointer(Parser.classDef),
	            lookaheadClassDef: this.parsePointer(Parser.classDef),
	            chainClassSet: this.parseListOfLists(function() {
	                return {
	                    backtrack: this.parseUShortList(),
	                    input: this.parseUShortList(this.parseShort() - 1),
	                    lookahead: this.parseUShortList(),
	                    lookupRecords: this.parseRecordList(lookupRecordDesc)
	                };
	            })
	        };
	    } else if (substFormat === 3) {
	        return {
	            substFormat: 3,
	            backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
	            inputCoverage: this.parseList(Parser.pointer(Parser.coverage)),
	            lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
	            lookupRecords: this.parseRecordList(lookupRecordDesc)
	        };
	    }
	    check.assert(false, '0x' + start.toString(16) + ': lookup type 6 format must be 1, 2 or 3.');
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#ES
	subtableParsers[7] = function parseLookup7() {
	    // Extension Substitution subtable
	    var substFormat = this.parseUShort();
	    check.argument(substFormat === 1, 'GSUB Extension Substitution subtable identifier-format must be 1');
	    var extensionLookupType = this.parseUShort();
	    var extensionParser = new Parser(this.data, this.offset + this.parseULong());
	    return {
	        substFormat: 1,
	        lookupType: extensionLookupType,
	        extension: subtableParsers[extensionLookupType].call(extensionParser)
	    };
	};
	
	// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#RCCS
	subtableParsers[8] = function parseLookup8() {
	    var substFormat = this.parseUShort();
	    check.argument(substFormat === 1, 'GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1');
	    return {
	        substFormat: substFormat,
	        coverage: this.parsePointer(Parser.coverage),
	        backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
	        lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
	        substitutes: this.parseUShortList()
	    };
	};
	
	// https://www.microsoft.com/typography/OTSPEC/gsub.htm
	function parseGsubTable(data, start) {
	    start = start || 0;
	    var p = new Parser(data, start);
	    var tableVersion = p.parseVersion();
	    check.argument(tableVersion === 1, 'Unsupported GSUB table version.');
	    return {
	        version: tableVersion,
	        scripts: p.parseScriptList(),
	        features: p.parseFeatureList(),
	        lookups: p.parseLookupList(subtableParsers)
	    };
	}
	
	// GSUB Writing //////////////////////////////////////////////
	var subtableMakers = new Array(9);
	
	subtableMakers[1] = function makeLookup1(subtable) {
	    if (subtable.substFormat === 1) {
	        return new table.Table('substitutionTable', [
	            {name: 'substFormat', type: 'USHORT', value: 1},
	            {name: 'coverage', type: 'TABLE', value: new table.Coverage(subtable.coverage)},
	            {name: 'deltaGlyphID', type: 'USHORT', value: subtable.deltaGlyphId}
	        ]);
	    } else {
	        return new table.Table('substitutionTable', [
	            {name: 'substFormat', type: 'USHORT', value: 2},
	            {name: 'coverage', type: 'TABLE', value: new table.Coverage(subtable.coverage)}
	        ].concat(table.ushortList('substitute', subtable.substitute)));
	    }
	    check.fail('Lookup type 1 substFormat must be 1 or 2.');
	};
	
	subtableMakers[3] = function makeLookup3(subtable) {
	    check.assert(subtable.substFormat === 1, 'Lookup type 3 substFormat must be 1.');
	    return new table.Table('substitutionTable', [
	        {name: 'substFormat', type: 'USHORT', value: 1},
	        {name: 'coverage', type: 'TABLE', value: new table.Coverage(subtable.coverage)}
	    ].concat(table.tableList('altSet', subtable.alternateSets, function(alternateSet) {
	        return new table.Table('alternateSetTable', table.ushortList('alternate', alternateSet));
	    })));
	};
	
	subtableMakers[4] = function makeLookup4(subtable) {
	    check.assert(subtable.substFormat === 1, 'Lookup type 4 substFormat must be 1.');
	    return new table.Table('substitutionTable', [
	        {name: 'substFormat', type: 'USHORT', value: 1},
	        {name: 'coverage', type: 'TABLE', value: new table.Coverage(subtable.coverage)}
	    ].concat(table.tableList('ligSet', subtable.ligatureSets, function(ligatureSet) {
	        return new table.Table('ligatureSetTable', table.tableList('ligature', ligatureSet, function(ligature) {
	            return new table.Table('ligatureTable',
	                [{name: 'ligGlyph', type: 'USHORT', value: ligature.ligGlyph}]
	                .concat(table.ushortList('component', ligature.components, ligature.components.length + 1))
	            );
	        }));
	    })));
	};
	
	function makeGsubTable(gsub) {
	    return new table.Table('GSUB', [
	        {name: 'version', type: 'ULONG', value: 0x10000},
	        {name: 'scripts', type: 'TABLE', value: new table.ScriptList(gsub.scripts)},
	        {name: 'features', type: 'TABLE', value: new table.FeatureList(gsub.features)},
	        {name: 'lookups', type: 'TABLE', value: new table.LookupList(gsub.lookups, subtableMakers)}
	    ]);
	}
	
	exports.parse = parseGsubTable;
	exports.make = makeGsubTable;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// The `GPOS` table contains kerning pairs, among other things.
	// https://www.microsoft.com/typography/OTSPEC/gpos.htm
	
	'use strict';
	
	var types = __webpack_require__(59);
	var decode = types.decode;
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	// Parse the metadata `meta` table.
	// https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6meta.html
	function parseMetaTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var tableVersion = p.parseULong();
	    check.argument(tableVersion === 1, 'Unsupported META table version.');
	    p.parseULong(); // flags - currently unused and set to 0
	    p.parseULong(); // tableOffset
	    var numDataMaps = p.parseULong();
	
	    var tags = {};
	    for (var i = 0; i < numDataMaps; i++) {
	        var tag = p.parseTag();
	        var dataOffset = p.parseULong();
	        var dataLength = p.parseULong();
	        var text = decode.UTF8(data, start + dataOffset, dataLength);
	
	        tags[tag] = text;
	    }
	    return tags;
	}
	
	function makeMetaTable(tags) {
	    var numTags = Object.keys(tags).length;
	    var stringPool = '';
	    var stringPoolOffset = 16 + numTags * 12;
	
	    var result = new table.Table('meta', [
	        {name: 'version', type: 'ULONG', value: 1},
	        {name: 'flags', type: 'ULONG', value: 0},
	        {name: 'offset', type: 'ULONG', value: stringPoolOffset},
	        {name: 'numTags', type: 'ULONG', value: numTags}
	    ]);
	
	    for (var tag in tags) {
	        var pos = stringPool.length;
	        stringPool += tags[tag];
	
	        result.fields.push({name: 'tag ' + tag, type: 'TAG', value: tag});
	        result.fields.push({name: 'offset ' + tag, type: 'ULONG', value: stringPoolOffset + pos});
	        result.fields.push({name: 'length ' + tag, type: 'ULONG', value: tags[tag].length});
	    }
	
	    result.fields.push({name: 'stringPool', type: 'CHARARRAY', value: stringPool});
	
	    return result;
	}
	
	exports.parse = parseMetaTable;
	exports.make = makeMetaTable;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// The Substitution object provides utility methods to manipulate
	// the GSUB substitution table.
	
	'use strict';
	
	var check = __webpack_require__(57);
	var Layout = __webpack_require__(77);
	
	/**
	 * @exports opentype.Substitution
	 * @class
	 * @extends opentype.Layout
	 * @param {opentype.Font}
	 * @constructor
	 */
	var Substitution = function(font) {
	    this.font = font;
	};
	
	// Check if 2 arrays of primitives are equal.
	function arraysEqual(ar1, ar2) {
	    var n = ar1.length;
	    if (n !== ar2.length) { return false; }
	    for (var i = 0; i < n; i++) {
	        if (ar1[i] !== ar2[i]) { return false; }
	    }
	    return true;
	}
	
	// Find the first subtable of a lookup table in a particular format.
	function getSubstFormat(lookupTable, format, defaultSubtable) {
	    var subtables = lookupTable.subtables;
	    for (var i = 0; i < subtables.length; i++) {
	        var subtable = subtables[i];
	        if (subtable.substFormat === format) {
	            return subtable;
	        }
	    }
	    if (defaultSubtable) {
	        subtables.push(defaultSubtable);
	        return defaultSubtable;
	    }
	}
	
	Substitution.prototype = Layout;
	
	/**
	 * Get or create the GSUB table.
	 * @param  {boolean} create - Whether to create a new one.
	 * @return {Object} gsub - The GSUB table.
	 */
	Substitution.prototype.getGsubTable = function(create) {
	    var gsub = this.font.tables.gsub;
	    if (!gsub && create) {
	        // Generate a default empty GSUB table with just a DFLT script and dflt lang sys.
	        this.font.tables.gsub = gsub = {
	            version: 1,
	            scripts: [{
	                tag: 'DFLT',
	                script: {
	                    defaultLangSys: { reserved: 0, reqFeatureIndex: 0xffff, featureIndexes: [] },
	                    langSysRecords: []
	                }
	            }],
	            features: [],
	            lookups: []
	        };
	    }
	    return gsub;
	};
	
	/**
	 * List all single substitutions (lookup type 1) for a given script, language, and feature.
	 * @param {string} script
	 * @param {string} language
	 * @param {string} feature - 4-character feature name ('aalt', 'salt', 'ss01'...)
	 * @return {Array} substitutions - The list of substitutions.
	 */
	Substitution.prototype.getSingle = function(feature, script, language) {
	    var substitutions = [];
	    var lookupTable = this.getLookupTable(script, language, feature, 1);
	    if (!lookupTable) { return substitutions; }
	    var subtables = lookupTable.subtables;
	    for (var i = 0; i < subtables.length; i++) {
	        var subtable = subtables[i];
	        var glyphs = this.expandCoverage(subtable.coverage);
	        var j;
	        if (subtable.substFormat === 1) {
	            var delta = subtable.deltaGlyphId;
	            for (j = 0; j < glyphs.length; j++) {
	                var glyph = glyphs[j];
	                substitutions.push({ sub: glyph, by: glyph + delta });
	            }
	        } else {
	            var substitute = subtable.substitute;
	            for (j = 0; j < glyphs.length; j++) {
	                substitutions.push({ sub: glyphs[j], by: substitute[j] });
	            }
	        }
	    }
	    return substitutions;
	};
	
	/**
	 * List all alternates (lookup type 3) for a given script, language, and feature.
	 * @param {string} script
	 * @param {string} language
	 * @param {string} feature - 4-character feature name ('aalt', 'salt'...)
	 * @return {Array} alternates - The list of alternates
	 */
	Substitution.prototype.getAlternates = function(feature, script, language) {
	    var alternates = [];
	    var lookupTable = this.getLookupTable(script, language, feature, 3);
	    if (!lookupTable) { return alternates; }
	    var subtables = lookupTable.subtables;
	    for (var i = 0; i < subtables.length; i++) {
	        var subtable = subtables[i];
	        var glyphs = this.expandCoverage(subtable.coverage);
	        var alternateSets = subtable.alternateSets;
	        for (var j = 0; j < glyphs.length; j++) {
	            alternates.push({ sub: glyphs[j], by: alternateSets[j] });
	        }
	    }
	    return alternates;
	};
	
	/**
	 * List all ligatures (lookup type 4) for a given script, language, and feature.
	 * The result is an array of ligature objects like { sub: [ids], by: id }
	 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
	 * @param {string} script
	 * @param {string} language
	 * @return {Array} ligatures - The list of ligatures.
	 */
	Substitution.prototype.getLigatures = function(feature, script, language) {
	    var ligatures = [];
	    var lookupTable = this.getLookupTable(script, language, feature, 4);
	    if (!lookupTable) { return []; }
	    var subtables = lookupTable.subtables;
	    for (var i = 0; i < subtables.length; i++) {
	        var subtable = subtables[i];
	        var glyphs = this.expandCoverage(subtable.coverage);
	        var ligatureSets = subtable.ligatureSets;
	        for (var j = 0; j < glyphs.length; j++) {
	            var startGlyph = glyphs[j];
	            var ligSet = ligatureSets[j];
	            for (var k = 0; k < ligSet.length; k++) {
	                var lig = ligSet[k];
	                ligatures.push({
	                    sub: [startGlyph].concat(lig.components),
	                    by: lig.ligGlyph
	                });
	            }
	        }
	    }
	    return ligatures;
	};
	
	/**
	 * Add or modify a single substitution (lookup type 1)
	 * Format 2, more flexible, is always used.
	 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
	 * @param {Object} substitution - { sub: id, delta: number } for format 1 or { sub: id, by: id } for format 2.
	 * @param {string} [script='DFLT']
	 * @param {string} [language='DFLT']
	 */
	Substitution.prototype.addSingle = function(feature, substitution, script, language) {
	    var lookupTable = this.getLookupTable(script, language, feature, 1, true);
	    var subtable = getSubstFormat(lookupTable, 2, {                // lookup type 1 subtable, format 2, coverage format 1
	        substFormat: 2,
	        coverage: { format: 1, glyphs: [] },
	        substitute: []
	    });
	    check.assert(subtable.coverage.format === 1, 'Ligature: unable to modify coverage table format ' + subtable.coverage.format);
	    var coverageGlyph = substitution.sub;
	    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
	    if (pos < 0) {
	        pos = -1 - pos;
	        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
	        subtable.substitute.splice(pos, 0, 0);
	    }
	    subtable.substitute[pos] = substitution.by;
	};
	
	/**
	 * Add or modify an alternate substitution (lookup type 1)
	 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
	 * @param {Object} substitution - { sub: id, by: [ids] }
	 * @param {string} [script='DFLT']
	 * @param {string} [language='DFLT']
	 */
	Substitution.prototype.addAlternate = function(feature, substitution, script, language) {
	    var lookupTable = this.getLookupTable(script, language, feature, 3, true);
	    var subtable = getSubstFormat(lookupTable, 1, {                // lookup type 3 subtable, format 1, coverage format 1
	        substFormat: 1,
	        coverage: { format: 1, glyphs: [] },
	        alternateSets: []
	    });
	    check.assert(subtable.coverage.format === 1, 'Ligature: unable to modify coverage table format ' + subtable.coverage.format);
	    var coverageGlyph = substitution.sub;
	    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
	    if (pos < 0) {
	        pos = -1 - pos;
	        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
	        subtable.alternateSets.splice(pos, 0, 0);
	    }
	    subtable.alternateSets[pos] = substitution.by;
	};
	
	/**
	 * Add a ligature (lookup type 4)
	 * Ligatures with more components must be stored ahead of those with fewer components in order to be found
	 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
	 * @param {Object} ligature - { sub: [ids], by: id }
	 * @param {string} [script='DFLT']
	 * @param {string} [language='DFLT']
	 */
	Substitution.prototype.addLigature = function(feature, ligature, script, language) {
	    script = script || 'DFLT';
	    language = language || 'DFLT';
	    var lookupTable = this.getLookupTable(script, language, feature, 4, true);
	    var subtable = lookupTable.subtables[0];
	    if (!subtable) {
	        subtable = {                // lookup type 4 subtable, format 1, coverage format 1
	            substFormat: 1,
	            coverage: { format: 1, glyphs: [] },
	            ligatureSets: []
	        };
	        lookupTable.subtables[0] = subtable;
	    }
	    check.assert(subtable.coverage.format === 1, 'Ligature: unable to modify coverage table format ' + subtable.coverage.format);
	    var coverageGlyph = ligature.sub[0];
	    var ligComponents = ligature.sub.slice(1);
	    var ligatureTable = {
	        ligGlyph: ligature.by,
	        components: ligComponents
	    };
	    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
	    if (pos >= 0) {
	        // ligatureSet already exists
	        var ligatureSet = subtable.ligatureSets[pos];
	        for (var i = 0; i < ligatureSet.length; i++) {
	            // If ligature already exists, return.
	            if (arraysEqual(ligatureSet[i].components, ligComponents)) {
	                return;
	            }
	        }
	        // ligature does not exist: add it.
	        ligatureSet.push(ligatureTable);
	    } else {
	        // Create a new ligatureSet and add coverage for the first glyph.
	        pos = -1 - pos;
	        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
	        subtable.ligatureSets.splice(pos, 0, [ligatureTable]);
	    }
	};
	
	/**
	 * List all feature data for a given script and language.
	 * @param {string} feature - 4-letter feature name
	 * @param {string} [script='DFLT']
	 * @param {string} [language='DFLT']
	 * @return {Array} substitutions - The list of substitutions.
	 */
	Substitution.prototype.getFeature = function(feature, script, language) {
	    script = script || 'DFLT';
	    language = language || 'DFLT';
	    if (/ss\d\d/.test(feature)) {               // ss01 - ss20
	        return this.getSingle(feature, script, language);
	    }
	    switch (feature) {
	        case 'aalt':
	        case 'salt':
	            return this.getSingle(feature, script, language)
	                    .concat(this.getAlternates(feature, script, language));
	        case 'dlig':
	        case 'liga':
	        case 'rlig': return this.getLigatures(feature, script, language);
	    }
	};
	
	/**
	 * Add a substitution to a feature for a given script and language.
	 * @param {string} feature - 4-letter feature name
	 * @param {Object} sub - the substitution to add (an object like { sub: id or [ids], by: id or [ids] })
	 * @param {string} [script='DFLT']
	 * @param {string} [language='DFLT']
	 */
	Substitution.prototype.add = function(feature, sub, script, language) {
	    script = script || 'DFLT';
	    language = language || 'DFLT';
	    if (/ss\d\d/.test(feature)) {               // ss01 - ss20
	        return this.addSingle(feature, sub, script, language);
	    }
	    switch (feature) {
	        case 'aalt':
	        case 'salt':
	            if (typeof sub.by === 'number') {
	                return this.addSingle(feature, sub, script, language);
	            }
	            return this.addAlternate(feature, sub, script, language);
	        case 'dlig':
	        case 'liga':
	        case 'rlig':
	            return this.addLigature(feature, sub, script, language);
	    }
	};
	
	module.exports = Substitution;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// The Layout object is the prototype of Substition objects, and provides utility methods to manipulate
	// common layout tables (GPOS, GSUB, GDEF...)
	
	'use strict';
	
	var check = __webpack_require__(57);
	
	function searchTag(arr, tag) {
	    /* jshint bitwise: false */
	    var imin = 0;
	    var imax = arr.length - 1;
	    while (imin <= imax) {
	        var imid = (imin + imax) >>> 1;
	        var val = arr[imid].tag;
	        if (val === tag) {
	            return imid;
	        } else if (val < tag) {
	            imin = imid + 1;
	        } else { imax = imid - 1; }
	    }
	    // Not found: return -1-insertion point
	    return -imin - 1;
	}
	
	function binSearch(arr, value) {
	    /* jshint bitwise: false */
	    var imin = 0;
	    var imax = arr.length - 1;
	    while (imin <= imax) {
	        var imid = (imin + imax) >>> 1;
	        var val = arr[imid];
	        if (val === value) {
	            return imid;
	        } else if (val < value) {
	            imin = imid + 1;
	        } else { imax = imid - 1; }
	    }
	    // Not found: return -1-insertion point
	    return -imin - 1;
	}
	
	/**
	 * @exports opentype.Layout
	 * @class
	 */
	var Layout = {
	
	    /**
	     * Binary search an object by "tag" property
	     * @instance
	     * @function searchTag
	     * @memberof opentype.Layout
	     * @param  {Array} arr
	     * @param  {string} tag
	     * @return {number}
	     */
	    searchTag: searchTag,
	    /**
	     * Binary search in a list of numbers
	     * @instance
	     * @function binSearch
	     * @memberof opentype.Layout
	     * @param  {Array} arr
	     * @param  {number} value
	     * @return {number}
	     */
	    binSearch: binSearch,
	
	    /**
	     * Returns all scripts in the substitution table.
	     * @instance
	     * @return {Array}
	     */
	    getScriptNames: function() {
	        var gsub = this.getGsubTable();
	        if (!gsub) { return []; }
	        return gsub.scripts.map(function(script) {
	            return script.tag;
	        });
	    },
	
	    /**
	     * Returns all LangSysRecords in the given script.
	     * @instance
	     * @param {string} script - Use 'DFLT' for default script
	     * @param {boolean} create - forces the creation of this script table if it doesn't exist.
	     * @return {Object} An object with tag and script properties.
	     */
	    getScriptTable: function(script, create) {
	        var gsub = this.getGsubTable(create);
	        if (gsub) {
	            var scripts = gsub.scripts;
	            var pos = searchTag(gsub.scripts, script);
	            if (pos >= 0) {
	                return scripts[pos].script;
	            } else {
	                var scr = {
	                    tag: script,
	                    script: {
	                        defaultLangSys: { reserved: 0, reqFeatureIndex: 0xffff, featureIndexes: [] },
	                        langSysRecords: []
	                    }
	                };
	                scripts.splice(-1 - pos, 0, scr.script);
	                return scr;
	            }
	        }
	    },
	
	    /**
	     * Returns a language system table
	     * @instance
	     * @param {string} script - Use 'DFLT' for default script
	     * @param {string} language - Use 'DFLT' for default language
	     * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
	     * @return {Object}
	     */
	    getLangSysTable: function(script, language, create) {
	        var scriptTable = this.getScriptTable(script, create);
	        if (scriptTable) {
	            if (language === 'DFLT') {
	                return scriptTable.defaultLangSys;
	            }
	            var pos = searchTag(scriptTable.langSysRecords, language);
	            if (pos >= 0) {
	                return scriptTable.langSysRecords[pos].langSys;
	            } else if (create) {
	                var langSysRecord = {
	                    tag: language,
	                    langSys: { reserved: 0, reqFeatureIndex: 0xffff, featureIndexes: [] }
	                };
	                scriptTable.langSysRecords.splice(-1 - pos, 0, langSysRecord);
	                return langSysRecord.langSys;
	            }
	        }
	    },
	
	    /**
	     * Get a specific feature table.
	     * @instance
	     * @param {string} script - Use 'DFLT' for default script
	     * @param {string} language - Use 'DFLT' for default language
	     * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
	     * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
	     * @return {Object}
	     */
	    getFeatureTable: function(script, language, feature, create) {
	        var langSysTable = this.getLangSysTable(script, language, create);
	        if (langSysTable) {
	            var featureRecord;
	            var featIndexes = langSysTable.featureIndexes;
	            var allFeatures = this.font.tables.gsub.features;
	            // The FeatureIndex array of indices is in arbitrary order,
	            // even if allFeatures is sorted alphabetically by feature tag.
	            for (var i = 0; i < featIndexes.length; i++) {
	                featureRecord = allFeatures[featIndexes[i]];
	                if (featureRecord.tag === feature) {
	                    return featureRecord.feature;
	                }
	            }
	            if (create) {
	                var index = allFeatures.length;
	                // Automatic ordering of features would require to shift feature indexes in the script list.
	                check.assert(index === 0 || feature >= allFeatures[index - 1].tag, 'Features must be added in alphabetical order.');
	                featureRecord = {
	                    tag: feature,
	                    feature: { params: 0, lookupListIndexes: [] }
	                };
	                allFeatures.push(featureRecord);
	                featIndexes.push(index);
	                return featureRecord.feature;
	            }
	        }
	    },
	
	    /**
	     * Get the first lookup table of a given type for a script/language/feature.
	     * @instance
	     * @param {string} script - Use 'DFLT' for default script
	     * @param {string} language - Use 'DFLT' for default language
	     * @param {string} feature - 4-letter feature code
	     * @param {number} lookupType - 1 to 8
	     * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
	     * @return {Object}
	     */
	    getLookupTable: function(script, language, feature, lookupType, create) {
	        var featureTable = this.getFeatureTable(script, language, feature, create);
	        if (featureTable) {
	            var lookupTable;
	            var lookupListIndexes = featureTable.lookupListIndexes;
	            var allLookups = this.font.tables.gsub.lookups;
	            // lookupListIndexes are in no particular order, so use naïve search.
	            for (var i = 0; i < lookupListIndexes.length; i++) {
	                lookupTable = allLookups[lookupListIndexes[i]];
	                if (lookupTable.lookupType === lookupType) {
	                    return lookupTable;
	                }
	            }
	            if (create) {
	                lookupTable = {
	                    lookupType: lookupType,
	                    lookupFlag: 0,
	                    subtables: [],
	                    markFilteringSet: undefined
	                };
	                var index = allLookups.length;
	                allLookups.push(lookupTable);
	                lookupListIndexes.push(index);
	                return lookupTable;
	            }
	        }
	    },
	
	    /**
	     * Returns the list of glyph indexes of a coverage table.
	     * Format 1: the list is stored raw
	     * Format 2: compact list as range records.
	     * @instance
	     * @param  {Object} coverageTable
	     * @return {Array}
	     */
	    expandCoverage: function(coverageTable) {
	        if (coverageTable.format === 1) {
	            return coverageTable.glyphs;
	        } else {
	            var glyphs = [];
	            var ranges = coverageTable.ranges;
	            for (var i = 0; i < ranges; i++) {
	                var range = ranges[i];
	                var start = range.start;
	                var end = range.end;
	                for (var j = start; j <= end; j++) {
	                    glyphs.push(j);
	                }
	            }
	            return glyphs;
	        }
	    }
	
	};
	
	module.exports = Layout;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	
	exports.isBrowser = function() {
	    return typeof window !== 'undefined';
	};
	
	exports.isNode = function() {
	    return typeof window === 'undefined';
	};
	
	exports.nodeBufferToArrayBuffer = function(buffer) {
	    var ab = new ArrayBuffer(buffer.length);
	    var view = new Uint8Array(ab);
	    for (var i = 0; i < buffer.length; ++i) {
	        view[i] = buffer[i];
	    }
	
	    return ab;
	};
	
	exports.arrayBufferToNodeBuffer = function(ab) {
	    var buffer = new Buffer(ab.byteLength);
	    var view = new Uint8Array(ab);
	    for (var i = 0; i < buffer.length; ++i) {
	        buffer[i] = view[i];
	    }
	
	    return buffer;
	};
	
	exports.checkArgument = function(expression, message) {
	    if (!expression) {
	        throw message;
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79).Buffer))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(80)
	var ieee754 = __webpack_require__(81)
	var isArray = __webpack_require__(82)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79).Buffer))

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 81 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 82 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 83 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// The `fvar` table stores font variation axes and instances.
	// https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6fvar.html
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	var table = __webpack_require__(58);
	
	function addName(name, names) {
	    var nameString = JSON.stringify(name);
	    var nameID = 256;
	    for (var nameKey in names) {
	        var n = parseInt(nameKey);
	        if (!n || n < 256) {
	            continue;
	        }
	
	        if (JSON.stringify(names[nameKey]) === nameString) {
	            return n;
	        }
	
	        if (nameID <= n) {
	            nameID = n + 1;
	        }
	    }
	
	    names[nameID] = name;
	    return nameID;
	}
	
	function makeFvarAxis(n, axis, names) {
	    var nameID = addName(axis.name, names);
	    return [
	        {name: 'tag_' + n, type: 'TAG', value: axis.tag},
	        {name: 'minValue_' + n, type: 'FIXED', value: axis.minValue << 16},
	        {name: 'defaultValue_' + n, type: 'FIXED', value: axis.defaultValue << 16},
	        {name: 'maxValue_' + n, type: 'FIXED', value: axis.maxValue << 16},
	        {name: 'flags_' + n, type: 'USHORT', value: 0},
	        {name: 'nameID_' + n, type: 'USHORT', value: nameID}
	    ];
	}
	
	function parseFvarAxis(data, start, names) {
	    var axis = {};
	    var p = new parse.Parser(data, start);
	    axis.tag = p.parseTag();
	    axis.minValue = p.parseFixed();
	    axis.defaultValue = p.parseFixed();
	    axis.maxValue = p.parseFixed();
	    p.skip('uShort', 1);  // reserved for flags; no values defined
	    axis.name = names[p.parseUShort()] || {};
	    return axis;
	}
	
	function makeFvarInstance(n, inst, axes, names) {
	    var nameID = addName(inst.name, names);
	    var fields = [
	        {name: 'nameID_' + n, type: 'USHORT', value: nameID},
	        {name: 'flags_' + n, type: 'USHORT', value: 0}
	    ];
	
	    for (var i = 0; i < axes.length; ++i) {
	        var axisTag = axes[i].tag;
	        fields.push({
	            name: 'axis_' + n + ' ' + axisTag,
	            type: 'FIXED',
	            value: inst.coordinates[axisTag] << 16
	        });
	    }
	
	    return fields;
	}
	
	function parseFvarInstance(data, start, axes, names) {
	    var inst = {};
	    var p = new parse.Parser(data, start);
	    inst.name = names[p.parseUShort()] || {};
	    p.skip('uShort', 1);  // reserved for flags; no values defined
	
	    inst.coordinates = {};
	    for (var i = 0; i < axes.length; ++i) {
	        inst.coordinates[axes[i].tag] = p.parseFixed();
	    }
	
	    return inst;
	}
	
	function makeFvarTable(fvar, names) {
	    var result = new table.Table('fvar', [
	        {name: 'version', type: 'ULONG', value: 0x10000},
	        {name: 'offsetToData', type: 'USHORT', value: 0},
	        {name: 'countSizePairs', type: 'USHORT', value: 2},
	        {name: 'axisCount', type: 'USHORT', value: fvar.axes.length},
	        {name: 'axisSize', type: 'USHORT', value: 20},
	        {name: 'instanceCount', type: 'USHORT', value: fvar.instances.length},
	        {name: 'instanceSize', type: 'USHORT', value: 4 + fvar.axes.length * 4}
	    ]);
	    result.offsetToData = result.sizeOf();
	
	    for (var i = 0; i < fvar.axes.length; i++) {
	        result.fields = result.fields.concat(makeFvarAxis(i, fvar.axes[i], names));
	    }
	
	    for (var j = 0; j < fvar.instances.length; j++) {
	        result.fields = result.fields.concat(makeFvarInstance(j, fvar.instances[j], fvar.axes, names));
	    }
	
	    return result;
	}
	
	function parseFvarTable(data, start, names) {
	    var p = new parse.Parser(data, start);
	    var tableVersion = p.parseULong();
	    check.argument(tableVersion === 0x00010000, 'Unsupported fvar table version.');
	    var offsetToData = p.parseOffset16();
	    // Skip countSizePairs.
	    p.skip('uShort', 1);
	    var axisCount = p.parseUShort();
	    var axisSize = p.parseUShort();
	    var instanceCount = p.parseUShort();
	    var instanceSize = p.parseUShort();
	
	    var axes = [];
	    for (var i = 0; i < axisCount; i++) {
	        axes.push(parseFvarAxis(data, start + offsetToData + i * axisSize, names));
	    }
	
	    var instances = [];
	    var instanceStart = start + offsetToData + axisCount * axisSize;
	    for (var j = 0; j < instanceCount; j++) {
	        instances.push(parseFvarInstance(data, instanceStart + j * instanceSize, axes, names));
	    }
	
	    return {axes: axes, instances: instances};
	}
	
	exports.make = makeFvarTable;
	exports.parse = parseFvarTable;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// The `glyf` table describes the glyphs in TrueType outline format.
	// http://www.microsoft.com/typography/otspec/glyf.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var glyphset = __webpack_require__(63);
	var parse = __webpack_require__(61);
	var path = __webpack_require__(55);
	
	// Parse the coordinate data for a glyph.
	function parseGlyphCoordinate(p, flag, previousValue, shortVectorBitMask, sameBitMask) {
	    var v;
	    if ((flag & shortVectorBitMask) > 0) {
	        // The coordinate is 1 byte long.
	        v = p.parseByte();
	        // The `same` bit is re-used for short values to signify the sign of the value.
	        if ((flag & sameBitMask) === 0) {
	            v = -v;
	        }
	
	        v = previousValue + v;
	    } else {
	        //  The coordinate is 2 bytes long.
	        // If the `same` bit is set, the coordinate is the same as the previous coordinate.
	        if ((flag & sameBitMask) > 0) {
	            v = previousValue;
	        } else {
	            // Parse the coordinate as a signed 16-bit delta value.
	            v = previousValue + p.parseShort();
	        }
	    }
	
	    return v;
	}
	
	// Parse a TrueType glyph.
	function parseGlyph(glyph, data, start) {
	    var p = new parse.Parser(data, start);
	    glyph.numberOfContours = p.parseShort();
	    glyph._xMin = p.parseShort();
	    glyph._yMin = p.parseShort();
	    glyph._xMax = p.parseShort();
	    glyph._yMax = p.parseShort();
	    var flags;
	    var flag;
	    if (glyph.numberOfContours > 0) {
	        var i;
	        // This glyph is not a composite.
	        var endPointIndices = glyph.endPointIndices = [];
	        for (i = 0; i < glyph.numberOfContours; i += 1) {
	            endPointIndices.push(p.parseUShort());
	        }
	
	        glyph.instructionLength = p.parseUShort();
	        glyph.instructions = [];
	        for (i = 0; i < glyph.instructionLength; i += 1) {
	            glyph.instructions.push(p.parseByte());
	        }
	
	        var numberOfCoordinates = endPointIndices[endPointIndices.length - 1] + 1;
	        flags = [];
	        for (i = 0; i < numberOfCoordinates; i += 1) {
	            flag = p.parseByte();
	            flags.push(flag);
	            // If bit 3 is set, we repeat this flag n times, where n is the next byte.
	            if ((flag & 8) > 0) {
	                var repeatCount = p.parseByte();
	                for (var j = 0; j < repeatCount; j += 1) {
	                    flags.push(flag);
	                    i += 1;
	                }
	            }
	        }
	
	        check.argument(flags.length === numberOfCoordinates, 'Bad flags.');
	
	        if (endPointIndices.length > 0) {
	            var points = [];
	            var point;
	            // X/Y coordinates are relative to the previous point, except for the first point which is relative to 0,0.
	            if (numberOfCoordinates > 0) {
	                for (i = 0; i < numberOfCoordinates; i += 1) {
	                    flag = flags[i];
	                    point = {};
	                    point.onCurve = !!(flag & 1);
	                    point.lastPointOfContour = endPointIndices.indexOf(i) >= 0;
	                    points.push(point);
	                }
	
	                var px = 0;
	                for (i = 0; i < numberOfCoordinates; i += 1) {
	                    flag = flags[i];
	                    point = points[i];
	                    point.x = parseGlyphCoordinate(p, flag, px, 2, 16);
	                    px = point.x;
	                }
	
	                var py = 0;
	                for (i = 0; i < numberOfCoordinates; i += 1) {
	                    flag = flags[i];
	                    point = points[i];
	                    point.y = parseGlyphCoordinate(p, flag, py, 4, 32);
	                    py = point.y;
	                }
	            }
	
	            glyph.points = points;
	        } else {
	            glyph.points = [];
	        }
	    } else if (glyph.numberOfContours === 0) {
	        glyph.points = [];
	    } else {
	        glyph.isComposite = true;
	        glyph.points = [];
	        glyph.components = [];
	        var moreComponents = true;
	        while (moreComponents) {
	            flags = p.parseUShort();
	            var component = {
	                glyphIndex: p.parseUShort(),
	                xScale: 1,
	                scale01: 0,
	                scale10: 0,
	                yScale: 1,
	                dx: 0,
	                dy: 0
	            };
	            if ((flags & 1) > 0) {
	                // The arguments are words
	                if ((flags & 2) > 0) {
	                    // values are offset
	                    component.dx = p.parseShort();
	                    component.dy = p.parseShort();
	                } else {
	                    // values are matched points
	                    component.matchedPoints = [p.parseUShort(), p.parseUShort()];
	                }
	
	            } else {
	                // The arguments are bytes
	                if ((flags & 2) > 0) {
	                    // values are offset
	                    component.dx = p.parseChar();
	                    component.dy = p.parseChar();
	                } else {
	                    // values are matched points
	                    component.matchedPoints = [p.parseByte(), p.parseByte()];
	                }
	            }
	
	            if ((flags & 8) > 0) {
	                // We have a scale
	                component.xScale = component.yScale = p.parseF2Dot14();
	            } else if ((flags & 64) > 0) {
	                // We have an X / Y scale
	                component.xScale = p.parseF2Dot14();
	                component.yScale = p.parseF2Dot14();
	            } else if ((flags & 128) > 0) {
	                // We have a 2x2 transformation
	                component.xScale = p.parseF2Dot14();
	                component.scale01 = p.parseF2Dot14();
	                component.scale10 = p.parseF2Dot14();
	                component.yScale = p.parseF2Dot14();
	            }
	
	            glyph.components.push(component);
	            moreComponents = !!(flags & 32);
	        }
	    }
	}
	
	// Transform an array of points and return a new array.
	function transformPoints(points, transform) {
	    var newPoints = [];
	    for (var i = 0; i < points.length; i += 1) {
	        var pt = points[i];
	        var newPt = {
	            x: transform.xScale * pt.x + transform.scale01 * pt.y + transform.dx,
	            y: transform.scale10 * pt.x + transform.yScale * pt.y + transform.dy,
	            onCurve: pt.onCurve,
	            lastPointOfContour: pt.lastPointOfContour
	        };
	        newPoints.push(newPt);
	    }
	
	    return newPoints;
	}
	
	function getContours(points) {
	    var contours = [];
	    var currentContour = [];
	    for (var i = 0; i < points.length; i += 1) {
	        var pt = points[i];
	        currentContour.push(pt);
	        if (pt.lastPointOfContour) {
	            contours.push(currentContour);
	            currentContour = [];
	        }
	    }
	
	    check.argument(currentContour.length === 0, 'There are still points left in the current contour.');
	    return contours;
	}
	
	// Convert the TrueType glyph outline to a Path.
	function getPath(points) {
	    var p = new path.Path();
	    if (!points) {
	        return p;
	    }
	
	    var contours = getContours(points);
	    for (var i = 0; i < contours.length; i += 1) {
	        var contour = contours[i];
	        var firstPt = contour[0];
	        var lastPt = contour[contour.length - 1];
	        var curvePt;
	        var realFirstPoint;
	        if (firstPt.onCurve) {
	            curvePt = null;
	            // The first point will be consumed by the moveTo command,
	            // so skip it in the loop.
	            realFirstPoint = true;
	        } else {
	            if (lastPt.onCurve) {
	                // If the first point is off-curve and the last point is on-curve,
	                // start at the last point.
	                firstPt = lastPt;
	            } else {
	                // If both first and last points are off-curve, start at their middle.
	                firstPt = { x: (firstPt.x + lastPt.x) / 2, y: (firstPt.y + lastPt.y) / 2 };
	            }
	
	            curvePt = firstPt;
	            // The first point is synthesized, so don't skip the real first point.
	            realFirstPoint = false;
	        }
	
	        p.moveTo(firstPt.x, firstPt.y);
	
	        for (var j = realFirstPoint ? 1 : 0; j < contour.length; j += 1) {
	            var pt = contour[j];
	            var prevPt = j === 0 ? firstPt : contour[j - 1];
	            if (prevPt.onCurve && pt.onCurve) {
	                // This is a straight line.
	                p.lineTo(pt.x, pt.y);
	            } else if (prevPt.onCurve && !pt.onCurve) {
	                curvePt = pt;
	            } else if (!prevPt.onCurve && !pt.onCurve) {
	                var midPt = { x: (prevPt.x + pt.x) / 2, y: (prevPt.y + pt.y) / 2 };
	                p.quadraticCurveTo(prevPt.x, prevPt.y, midPt.x, midPt.y);
	                curvePt = pt;
	            } else if (!prevPt.onCurve && pt.onCurve) {
	                // Previous point off-curve, this point on-curve.
	                p.quadraticCurveTo(curvePt.x, curvePt.y, pt.x, pt.y);
	                curvePt = null;
	            } else {
	                throw new Error('Invalid state.');
	            }
	        }
	
	        if (firstPt !== lastPt) {
	            // Connect the last and first points
	            if (curvePt) {
	                p.quadraticCurveTo(curvePt.x, curvePt.y, firstPt.x, firstPt.y);
	            } else {
	                p.lineTo(firstPt.x, firstPt.y);
	            }
	        }
	    }
	
	    p.closePath();
	    return p;
	}
	
	function buildPath(glyphs, glyph) {
	    if (glyph.isComposite) {
	        for (var j = 0; j < glyph.components.length; j += 1) {
	            var component = glyph.components[j];
	            var componentGlyph = glyphs.get(component.glyphIndex);
	            // Force the ttfGlyphLoader to parse the glyph.
	            componentGlyph.getPath();
	            if (componentGlyph.points) {
	                var transformedPoints;
	                if (component.matchedPoints === undefined) {
	                    // component positioned by offset
	                    transformedPoints = transformPoints(componentGlyph.points, component);
	                } else {
	                    // component positioned by matched points
	                    if ((component.matchedPoints[0] > glyph.points.length - 1) ||
	                        (component.matchedPoints[1] > componentGlyph.points.length - 1)) {
	                        throw Error('Matched points out of range in ' + glyph.name);
	                    }
	                    var firstPt = glyph.points[component.matchedPoints[0]];
	                    var secondPt = componentGlyph.points[component.matchedPoints[1]];
	                    var transform = {
	                        xScale: component.xScale, scale01: component.scale01,
	                        scale10: component.scale10, yScale: component.yScale,
	                        dx: 0, dy: 0
	                    };
	                    secondPt = transformPoints([secondPt], transform)[0];
	                    transform.dx = firstPt.x - secondPt.x;
	                    transform.dy = firstPt.y - secondPt.y;
	                    transformedPoints = transformPoints(componentGlyph.points, transform);
	                }
	                glyph.points = glyph.points.concat(transformedPoints);
	            }
	        }
	    }
	
	    return getPath(glyph.points);
	}
	
	// Parse all the glyphs according to the offsets from the `loca` table.
	function parseGlyfTable(data, start, loca, font) {
	    var glyphs = new glyphset.GlyphSet(font);
	    var i;
	
	    // The last element of the loca table is invalid.
	    for (i = 0; i < loca.length - 1; i += 1) {
	        var offset = loca[i];
	        var nextOffset = loca[i + 1];
	        if (offset !== nextOffset) {
	            glyphs.push(i, glyphset.ttfGlyphLoader(font, i, parseGlyph, data, start + offset, buildPath));
	        } else {
	            glyphs.push(i, glyphset.glyphLoader(font, i));
	        }
	    }
	
	    return glyphs;
	}
	
	exports.parse = parseGlyfTable;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// The `GPOS` table contains kerning pairs, among other things.
	// https://www.microsoft.com/typography/OTSPEC/gpos.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	
	// Parse ScriptList and FeatureList tables of GPOS, GSUB, GDEF, BASE, JSTF tables.
	// These lists are unused by now, this function is just the basis for a real parsing.
	function parseTaggedListTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var n = p.parseUShort();
	    var list = [];
	    for (var i = 0; i < n; i++) {
	        list[p.parseTag()] = { offset: p.parseUShort() };
	    }
	
	    return list;
	}
	
	// Parse a coverage table in a GSUB, GPOS or GDEF table.
	// Format 1 is a simple list of glyph ids,
	// Format 2 is a list of ranges. It is expanded in a list of glyphs, maybe not the best idea.
	function parseCoverageTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var format = p.parseUShort();
	    var count =  p.parseUShort();
	    if (format === 1) {
	        return p.parseUShortList(count);
	    } else if (format === 2) {
	        var coverage = [];
	        for (; count--;) {
	            var begin = p.parseUShort();
	            var end = p.parseUShort();
	            var index = p.parseUShort();
	            for (var i = begin; i <= end; i++) {
	                coverage[index++] = i;
	            }
	        }
	
	        return coverage;
	    }
	}
	
	// Parse a Class Definition Table in a GSUB, GPOS or GDEF table.
	// Returns a function that gets a class value from a glyph ID.
	function parseClassDefTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var format = p.parseUShort();
	    if (format === 1) {
	        // Format 1 specifies a range of consecutive glyph indices, one class per glyph ID.
	        var startGlyph = p.parseUShort();
	        var glyphCount = p.parseUShort();
	        var classes = p.parseUShortList(glyphCount);
	        return function(glyphID) {
	            return classes[glyphID - startGlyph] || 0;
	        };
	    } else if (format === 2) {
	        // Format 2 defines multiple groups of glyph indices that belong to the same class.
	        var rangeCount = p.parseUShort();
	        var startGlyphs = [];
	        var endGlyphs = [];
	        var classValues = [];
	        for (var i = 0; i < rangeCount; i++) {
	            startGlyphs[i] = p.parseUShort();
	            endGlyphs[i] = p.parseUShort();
	            classValues[i] = p.parseUShort();
	        }
	
	        return function(glyphID) {
	            var l = 0;
	            var r = startGlyphs.length - 1;
	            while (l < r) {
	                var c = (l + r + 1) >> 1;
	                if (glyphID < startGlyphs[c]) {
	                    r = c - 1;
	                } else {
	                    l = c;
	                }
	            }
	
	            if (startGlyphs[l] <= glyphID && glyphID <= endGlyphs[l]) {
	                return classValues[l] || 0;
	            }
	
	            return 0;
	        };
	    }
	}
	
	// Parse a pair adjustment positioning subtable, format 1 or format 2
	// The subtable is returned in the form of a lookup function.
	function parsePairPosSubTable(data, start) {
	    var p = new parse.Parser(data, start);
	    // This part is common to format 1 and format 2 subtables
	    var format = p.parseUShort();
	    var coverageOffset = p.parseUShort();
	    var coverage = parseCoverageTable(data, start + coverageOffset);
	    // valueFormat 4: XAdvance only, 1: XPlacement only, 0: no ValueRecord for second glyph
	    // Only valueFormat1=4 and valueFormat2=0 is supported.
	    var valueFormat1 = p.parseUShort();
	    var valueFormat2 = p.parseUShort();
	    var value1;
	    var value2;
	    if (valueFormat1 !== 4 || valueFormat2 !== 0) return;
	    var sharedPairSets = {};
	    if (format === 1) {
	        // Pair Positioning Adjustment: Format 1
	        var pairSetCount = p.parseUShort();
	        var pairSet = [];
	        // Array of offsets to PairSet tables-from beginning of PairPos subtable-ordered by Coverage Index
	        var pairSetOffsets = p.parseOffset16List(pairSetCount);
	        for (var firstGlyph = 0; firstGlyph < pairSetCount; firstGlyph++) {
	            var pairSetOffset = pairSetOffsets[firstGlyph];
	            var sharedPairSet = sharedPairSets[pairSetOffset];
	            if (!sharedPairSet) {
	                // Parse a pairset table in a pair adjustment subtable format 1
	                sharedPairSet = {};
	                p.relativeOffset = pairSetOffset;
	                var pairValueCount = p.parseUShort();
	                for (; pairValueCount--;) {
	                    var secondGlyph = p.parseUShort();
	                    if (valueFormat1) value1 = p.parseShort();
	                    if (valueFormat2) value2 = p.parseShort();
	                    // We only support valueFormat1 = 4 and valueFormat2 = 0,
	                    // so value1 is the XAdvance and value2 is empty.
	                    sharedPairSet[secondGlyph] = value1;
	                }
	            }
	
	            pairSet[coverage[firstGlyph]] = sharedPairSet;
	        }
	
	        return function(leftGlyph, rightGlyph) {
	            var pairs = pairSet[leftGlyph];
	            if (pairs) return pairs[rightGlyph];
	        };
	    } else if (format === 2) {
	        // Pair Positioning Adjustment: Format 2
	        var classDef1Offset = p.parseUShort();
	        var classDef2Offset = p.parseUShort();
	        var class1Count = p.parseUShort();
	        var class2Count = p.parseUShort();
	        var getClass1 = parseClassDefTable(data, start + classDef1Offset);
	        var getClass2 = parseClassDefTable(data, start + classDef2Offset);
	
	        // Parse kerning values by class pair.
	        var kerningMatrix = [];
	        for (var i = 0; i < class1Count; i++) {
	            var kerningRow = kerningMatrix[i] = [];
	            for (var j = 0; j < class2Count; j++) {
	                if (valueFormat1) value1 = p.parseShort();
	                if (valueFormat2) value2 = p.parseShort();
	                // We only support valueFormat1 = 4 and valueFormat2 = 0,
	                // so value1 is the XAdvance and value2 is empty.
	                kerningRow[j] = value1;
	            }
	        }
	
	        // Convert coverage list to a hash
	        var covered = {};
	        for (i = 0; i < coverage.length; i++) covered[coverage[i]] = 1;
	
	        // Get the kerning value for a specific glyph pair.
	        return function(leftGlyph, rightGlyph) {
	            if (!covered[leftGlyph]) return;
	            var class1 = getClass1(leftGlyph);
	            var class2 = getClass2(rightGlyph);
	            var kerningRow = kerningMatrix[class1];
	
	            if (kerningRow) {
	                return kerningRow[class2];
	            }
	        };
	    }
	}
	
	// Parse a LookupTable (present in of GPOS, GSUB, GDEF, BASE, JSTF tables).
	function parseLookupTable(data, start) {
	    var p = new parse.Parser(data, start);
	    var lookupType = p.parseUShort();
	    var lookupFlag = p.parseUShort();
	    var useMarkFilteringSet = lookupFlag & 0x10;
	    var subTableCount = p.parseUShort();
	    var subTableOffsets = p.parseOffset16List(subTableCount);
	    var table = {
	        lookupType: lookupType,
	        lookupFlag: lookupFlag,
	        markFilteringSet: useMarkFilteringSet ? p.parseUShort() : -1
	    };
	    // LookupType 2, Pair adjustment
	    if (lookupType === 2) {
	        var subtables = [];
	        for (var i = 0; i < subTableCount; i++) {
	            subtables.push(parsePairPosSubTable(data, start + subTableOffsets[i]));
	        }
	        // Return a function which finds the kerning values in the subtables.
	        table.getKerningValue = function(leftGlyph, rightGlyph) {
	            for (var i = subtables.length; i--;) {
	                var value = subtables[i](leftGlyph, rightGlyph);
	                if (value !== undefined) return value;
	            }
	
	            return 0;
	        };
	    }
	
	    return table;
	}
	
	// Parse the `GPOS` table which contains, among other things, kerning pairs.
	// https://www.microsoft.com/typography/OTSPEC/gpos.htm
	function parseGposTable(data, start, font) {
	    var p = new parse.Parser(data, start);
	    var tableVersion = p.parseFixed();
	    check.argument(tableVersion === 1, 'Unsupported GPOS table version.');
	
	    // ScriptList and FeatureList - ignored for now
	    parseTaggedListTable(data, start + p.parseUShort());
	    // 'kern' is the feature we are looking for.
	    parseTaggedListTable(data, start + p.parseUShort());
	
	    // LookupList
	    var lookupListOffset = p.parseUShort();
	    p.relativeOffset = lookupListOffset;
	    var lookupCount = p.parseUShort();
	    var lookupTableOffsets = p.parseOffset16List(lookupCount);
	    var lookupListAbsoluteOffset = start + lookupListOffset;
	    for (var i = 0; i < lookupCount; i++) {
	        var table = parseLookupTable(data, lookupListAbsoluteOffset + lookupTableOffsets[i]);
	        if (table.lookupType === 2 && !font.getGposKerningValue) font.getGposKerningValue = table.getKerningValue;
	    }
	}
	
	exports.parse = parseGposTable;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// The `kern` table contains kerning pairs.
	// Note that some fonts use the GPOS OpenType layout table to specify kerning.
	// https://www.microsoft.com/typography/OTSPEC/kern.htm
	
	'use strict';
	
	var check = __webpack_require__(57);
	var parse = __webpack_require__(61);
	
	// Parse the `kern` table which contains kerning pairs.
	function parseKernTable(data, start) {
	    var pairs = {};
	    var p = new parse.Parser(data, start);
	    var tableVersion = p.parseUShort();
	    check.argument(tableVersion === 0, 'Unsupported kern table version.');
	    // Skip nTables.
	    p.skip('uShort', 1);
	    var subTableVersion = p.parseUShort();
	    check.argument(subTableVersion === 0, 'Unsupported kern sub-table version.');
	    // Skip subTableLength, subTableCoverage
	    p.skip('uShort', 2);
	    var nPairs = p.parseUShort();
	    // Skip searchRange, entrySelector, rangeShift.
	    p.skip('uShort', 3);
	    for (var i = 0; i < nPairs; i += 1) {
	        var leftIndex = p.parseUShort();
	        var rightIndex = p.parseUShort();
	        var value = p.parseShort();
	        pairs[leftIndex + ',' + rightIndex] = value;
	    }
	
	    return pairs;
	}
	
	exports.parse = parseKernTable;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// The `loca` table stores the offsets to the locations of the glyphs in the font.
	// https://www.microsoft.com/typography/OTSPEC/loca.htm
	
	'use strict';
	
	var parse = __webpack_require__(61);
	
	// Parse the `loca` table. This table stores the offsets to the locations of the glyphs in the font,
	// relative to the beginning of the glyphData table.
	// The number of glyphs stored in the `loca` table is specified in the `maxp` table (under numGlyphs)
	// The loca table has two versions: a short version where offsets are stored as uShorts, and a long
	// version where offsets are stored as uLongs. The `head` table specifies which version to use
	// (under indexToLocFormat).
	function parseLocaTable(data, start, numGlyphs, shortVersion) {
	    var p = new parse.Parser(data, start);
	    var parseFn = shortVersion ? p.parseUShort : p.parseULong;
	    // There is an extra entry after the last index element to compute the length of the last glyph.
	    // That's why we use numGlyphs + 1.
	    var glyphOffsets = [];
	    for (var i = 0; i < numGlyphs + 1; i += 1) {
	        var glyphOffset = parseFn.call(p);
	        if (shortVersion) {
	            // The short table version stores the actual offset divided by 2.
	            glyphOffset *= 2;
	        }
	
	        glyphOffsets.push(glyphOffset);
	    }
	
	    return glyphOffsets;
	}
	
	exports.parse = parseLocaTable;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_1 = __webpack_require__(4);
	var Constants_1 = __webpack_require__(6);
	var Vector2_1 = __webpack_require__(20);
	var guid_1 = __webpack_require__(26);
	var scale_1 = __webpack_require__(24);
	var Camera_1 = __webpack_require__(25);
	var gl_2 = __webpack_require__(4);
	
	var Stage = function () {
	    function Stage(width, height, dom) {
	        _classCallCheck(this, Stage);
	
	        this._children = [];
	        this.camera = new Vector2_1.default(0, 0);
	        this.scale = new Vector2_1.default(1, 1);
	        gl_2.setGlSize(width, height);
	        if (dom) {
	            gl_2.mountGl(dom);
	        } else {
	            gl_2.mountGl(document.body);
	        }
	        var texture = gl_1.default.createTexture();
	        gl_1.default.bindTexture(gl_1.default.TEXTURE_2D, texture);
	        gl_1.default.texImage2D(gl_1.default.TEXTURE_2D, 0, gl_1.default.RGBA, gl_1.default.drawingBufferWidth, gl_1.default.drawingBufferHeight, 0, gl_1.default.RGBA, gl_1.default.UNSIGNED_BYTE, null);
	        var rb = gl_1.default.createRenderbuffer();
	        gl_1.default.bindRenderbuffer(gl_1.default.RENDERBUFFER, rb);
	        gl_1.default.renderbufferStorage(gl_1.default.RENDERBUFFER, gl_1.default.DEPTH_COMPONENT16, gl_1.default.drawingBufferWidth, gl_1.default.drawingBufferHeight);
	        var fb = gl_1.default.createFramebuffer();
	        gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, fb);
	        gl_1.default.framebufferTexture2D(gl_1.default.FRAMEBUFFER, gl_1.default.COLOR_ATTACHMENT0, gl_1.default.TEXTURE_2D, texture, 0);
	        gl_1.default.framebufferRenderbuffer(gl_1.default.FRAMEBUFFER, gl_1.default.DEPTH_ATTACHMENT, gl_1.default.RENDERBUFFER, rb);
	        this.hitMap = fb;
	        gl_1.default.bindTexture(gl_1.default.TEXTURE_2D, null);
	        gl_1.default.bindRenderbuffer(gl_1.default.RENDERBUFFER, null);
	        gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, null);
	    }
	
	    _createClass(Stage, [{
	        key: 'add',
	        value: function add(child) {
	            this._children.push(child);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            var index = this._children.indexOf(child);
	            if (index !== -1) {
	                this._children.splice(index, 1);
	                guid_1.removeId(child.id);
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            gl_1.default.clear(gl_1.default.COLOR_BUFFER_BIT);
	        }
	    }, {
	        key: 'clickTest',
	        value: function clickTest(x, y) {
	            gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, this.hitMap);
	            var bytes = new Uint8Array(4);
	            gl_1.default.readPixels(x, gl_1.default.drawingBufferHeight - y, 1, 1, gl_1.default.RGBA, gl_1.default.UNSIGNED_BYTE, bytes);
	            gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, null);
	            return bytes[0] * 255 * 255 + bytes[1] * 255 + bytes[2];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.camera.updated || this.scale.updated) {
	                scale_1.default.x = this.scale.x;
	                scale_1.default.y = this.scale.y;
	                Camera_1.default.x = this.camera.x;
	                Camera_1.default.y = this.camera.y;
	            }
	            var children = this._children.sort(function (a, b) {
	                return a.zIndex - b.zIndex;
	            });
	            gl_1.default.disable(gl_1.default.DEPTH_TEST);
	            gl_1.default.enable(gl_1.default.BLEND);
	            gl_1.default.blendFunc(gl_1.default.SRC_ALPHA, gl_1.default.ONE_MINUS_SRC_ALPHA);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;
	
	                    gl_1.default.useProgram(child.program);
	                    child.offscreen = false;
	                    child.update();
	                    if (child.drawMethod === Constants_1.default.DrawMethod.ARRAYS) {
	                        gl_1.default.drawArrays(child.drawType, child.startIndex, child.endIndex);
	                    } else {
	                        gl_1.default.drawElements(child.drawType, child.endIndex, child.elementType, child.startIndex);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            scale_1.default.updated = false;
	            Camera_1.default.updated = false;
	            gl_1.default.disable(gl_1.default.BLEND);
	            gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, this.hitMap);
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _child = _step2.value;
	
	                    gl_1.default.useProgram(_child.program);
	                    _child.offscreen = true;
	                    _child.update();
	                    if (_child.drawMethod === Constants_1.default.DrawMethod.ARRAYS) {
	                        gl_1.default.drawArrays(_child.drawType, _child.startIndex, _child.endIndex);
	                    } else {
	                        gl_1.default.drawElements(_child.drawType, _child.endIndex, _child.elementType, _child.startIndex);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            gl_1.default.bindFramebuffer(gl_1.default.FRAMEBUFFER, null);
	        }
	    }, {
	        key: 'children',
	        get: function get() {
	            return this._children;
	        }
	    }]);
	
	    return Stage;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Stage;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var gl_matrix_1 = __webpack_require__(10);
	
	var Vector3 = function () {
	    function Vector3(x, y, z) {
	        _classCallCheck(this, Vector3);
	
	        this._updated = true;
	        if (typeof x === 'number') {
	            this.instance = gl_matrix_1.vec3.fromValues(x, y, z);
	        } else if (x instanceof Float32Array) {
	            this.instance = x;
	        }
	    }
	
	    _createClass(Vector3, [{
	        key: 'transform',
	        value: function transform(mat) {
	            var x = this.x * mat.raw.slice(0, 3).reduce(function (a, b) {
	                return a + b;
	            }, 0);
	            var y = this.y * mat.raw.slice(3, 6).reduce(function (a, b) {
	                return a + b;
	            }, 0);
	            var z = this.z * mat.raw.slice(6, 9).reduce(function (a, b) {
	                return a + b;
	            }, 0);
	            return new Vector3(x, y, z);
	        }
	    }, {
	        key: 'updated',
	        get: function get() {
	            return this._updated;
	        },
	        set: function set(updated) {
	            this._updated = updated;
	        }
	    }, {
	        key: 'xy',
	        get: function get() {
	            return [this.instance[0], this.instance[1]];
	        }
	    }, {
	        key: 'x',
	        get: function get() {
	            return this.instance[0];
	        },
	        set: function set(x) {
	            this.instance[0] = x;
	            this._updated = true;
	        }
	    }, {
	        key: 'y',
	        get: function get() {
	            return this.instance[1];
	        },
	        set: function set(y) {
	            this.instance[1] = y;
	            this._updated = true;
	        }
	    }, {
	        key: 'z',
	        get: function get() {
	            return this.instance[2];
	        },
	        set: function set(z) {
	            this.instance[2] = z;
	            this._updated = true;
	        }
	    }]);
	
	    return Vector3;
	}();
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Vector3;

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	function toNearestBase(n, e) {
	    return Math.pow(e, Math.ceil(Math.log(n) / Math.log(e)));
	}
	var ImageUtil;
	(function (ImageUtil) {
	    function loadAsScaled(src) {
	        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            return _context.abrupt('return', new Promise(function (resolve, reject) {
	                                var image = new Image();
	                                image.onload = function () {
	                                    var width = toNearestBase(image.width, 2);
	                                    var height = toNearestBase(image.height, 2);
	                                    var canvas = document.createElement('canvas');
	                                    canvas.width = width;
	                                    canvas.height = height;
	                                    var context = canvas.getContext('2d');
	                                    context.drawImage(image, 0, 0, width, height);
	                                    resolve(canvas);
	                                };
	                                image.onerror = function (e) {
	                                    return reject(e);
	                                };
	                                image.src = src;
	                            }));
	
	                        case 1:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    }
	    ImageUtil.loadAsScaled = loadAsScaled;
	    function loadAsPadded(src, padColor) {
	        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                while (1) {
	                    switch (_context2.prev = _context2.next) {
	                        case 0:
	                            return _context2.abrupt('return', new Promise(function (resolve, reject) {
	                                var image = new Image();
	                                image.onload = function () {
	                                    var width = toNearestBase(image.width, 2);
	                                    var height = toNearestBase(image.height, 2);
	                                    var canvas = document.createElement('canvas');
	                                    canvas.width = width;
	                                    canvas.height = height;
	                                    var context = canvas.getContext('2d');
	                                    context.fillStyle = 'rgba(' + padColor.r + ',' + padColor.g + ',' + padColor.b + ',' + padColor.opacity + ')';
	                                    context.fillRect(0, 0, width, height);
	                                    context.drawImage(image, 0, 0, image.width, image.height);
	                                    resolve(canvas);
	                                };
	                                image.onerror = function (e) {
	                                    return reject(e);
	                                };
	                                image.src = src;
	                            }));
	
	                        case 1:
	                        case 'end':
	                            return _context2.stop();
	                    }
	                }
	            }, _callee2, this);
	        }));
	    }
	    ImageUtil.loadAsPadded = loadAsPadded;
	})(ImageUtil || (ImageUtil = {}));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ImageUtil;

/***/ }
/******/ ])));
//# sourceMappingURL=index.js.map