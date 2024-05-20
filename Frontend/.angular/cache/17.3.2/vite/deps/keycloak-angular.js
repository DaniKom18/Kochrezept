import {
  HTTP_INTERCEPTORS,
  HttpHeaders
} from "./chunk-JK6DN3ZH.js";
import {
  CommonModule
} from "./chunk-GR7PAGTY.js";
import {
  Injectable,
  NgModule,
  Subject,
  __async,
  __commonJS,
  __toESM,
  combineLatest,
  from,
  map,
  mergeMap,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-T7VOUWWB.js";

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports2) {
    "use strict";
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "node_modules/js-sha256/src/sha256.js"(exports, module) {
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is2242) {
        return function(message) {
          return new Sha256(is2242, true).update(message)[outputType]();
        };
      };
      var createMethod = function(is2242) {
        var method2 = createOutputMethod("hex", is2242);
        if (NODE_JS) {
          method2 = nodeWrap(method2, is2242);
        }
        method2.create = function() {
          return new Sha256(is2242);
        };
        method2.update = function(message) {
          return method2.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createOutputMethod(type, is2242);
        }
        return method2;
      };
      var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? "sha224" : "sha256";
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash(algorithm).update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
            return crypto.createHash(algorithm).update(new Buffer(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is2242) {
        return function(key, message) {
          return new HmacSha256(key, is2242, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function(is2242) {
        var method2 = createHmacOutputMethod("hex", is2242);
        method2.create = function(key) {
          return new HmacSha256(key, is2242);
        };
        method2.update = function(key, message) {
          return method2.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createHmacOutputMethod(type, is2242);
        }
        return method2;
      };
      function Sha256(is2242, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is2242) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is2242;
      }
      Sha256.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks2[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >> 24 & 255,
          h0 >> 16 & 255,
          h0 >> 8 & 255,
          h0 & 255,
          h1 >> 24 & 255,
          h1 >> 16 & 255,
          h1 >> 8 & 255,
          h1 & 255,
          h2 >> 24 & 255,
          h2 >> 16 & 255,
          h2 >> 8 & 255,
          h2 & 255,
          h3 >> 24 & 255,
          h3 >> 16 & 255,
          h3 >> 8 & 255,
          h3 & 255,
          h4 >> 24 & 255,
          h4 >> 16 & 255,
          h4 >> 8 & 255,
          h4 & 255,
          h5 >> 24 & 255,
          h5 >> 16 & 255,
          h5 >> 8 & 255,
          h5 & 255,
          h6 >> 24 & 255,
          h6 >> 16 & 255,
          h6 >> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer;
      };
      function HmacSha256(key, is2242, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >> 12;
              bytes[index++] = 128 | code >> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >> 18;
              bytes[index++] = 128 | code >> 12 & 63;
              bytes[index++] = 128 | code >> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        } else {
          if (type === "object") {
            if (key === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
              key = new Uint8Array(key);
            } else if (!Array.isArray(key)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key.length > 64) {
          key = new Sha256(is2242, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is2242, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports = createMethod();
      exports.sha256 = exports;
      exports.sha224 = createMethod(true);
      exports.sha256.hmac = createHmacMethod();
      exports.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module.exports = exports;
      } else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) {
          define(function() {
            return exports;
          });
        }
      }
    })();
  }
});

// node_modules/keycloak-js/dist/keycloak.mjs
var import_base64_js = __toESM(require_base64_js(), 1);
var import_js_sha256 = __toESM(require_sha256(), 1);
if (typeof Promise === "undefined") {
  throw Error("Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.");
}
function Keycloak(config) {
  if (!(this instanceof Keycloak)) {
    throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");
  }
  var kc = this;
  var adapter;
  var refreshQueue = [];
  var callbackStorage;
  var loginIframe = {
    enable: true,
    callbackList: [],
    interval: 5
  };
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if ((scripts[i].src.indexOf("keycloak.js") !== -1 || scripts[i].src.indexOf("keycloak.min.js") !== -1) && scripts[i].src.indexOf("version=") !== -1) {
      kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf("version=") + 8).split("&")[0];
    }
  }
  var useNonce = true;
  var logInfo = createLogger(console.info);
  var logWarn = createLogger(console.warn);
  kc.init = function(initOptions) {
    if (kc.didInitialize) {
      throw new Error("A 'Keycloak' instance can only be initialized once.");
    }
    kc.didInitialize = true;
    kc.authenticated = false;
    callbackStorage = createCallbackStorage();
    var adapters = ["default", "cordova", "cordova-native"];
    if (initOptions && adapters.indexOf(initOptions.adapter) > -1) {
      adapter = loadAdapter(initOptions.adapter);
    } else if (initOptions && typeof initOptions.adapter === "object") {
      adapter = initOptions.adapter;
    } else {
      if (window.Cordova || window.cordova) {
        adapter = loadAdapter("cordova");
      } else {
        adapter = loadAdapter();
      }
    }
    if (initOptions) {
      if (typeof initOptions.useNonce !== "undefined") {
        useNonce = initOptions.useNonce;
      }
      if (typeof initOptions.checkLoginIframe !== "undefined") {
        loginIframe.enable = initOptions.checkLoginIframe;
      }
      if (initOptions.checkLoginIframeInterval) {
        loginIframe.interval = initOptions.checkLoginIframeInterval;
      }
      if (initOptions.onLoad === "login-required") {
        kc.loginRequired = true;
      }
      if (initOptions.responseMode) {
        if (initOptions.responseMode === "query" || initOptions.responseMode === "fragment") {
          kc.responseMode = initOptions.responseMode;
        } else {
          throw "Invalid value for responseMode";
        }
      }
      if (initOptions.flow) {
        switch (initOptions.flow) {
          case "standard":
            kc.responseType = "code";
            break;
          case "implicit":
            kc.responseType = "id_token token";
            break;
          case "hybrid":
            kc.responseType = "code id_token token";
            break;
          default:
            throw "Invalid value for flow";
        }
        kc.flow = initOptions.flow;
      }
      if (initOptions.timeSkew != null) {
        kc.timeSkew = initOptions.timeSkew;
      }
      if (initOptions.redirectUri) {
        kc.redirectUri = initOptions.redirectUri;
      }
      if (initOptions.silentCheckSsoRedirectUri) {
        kc.silentCheckSsoRedirectUri = initOptions.silentCheckSsoRedirectUri;
      }
      if (typeof initOptions.silentCheckSsoFallback === "boolean") {
        kc.silentCheckSsoFallback = initOptions.silentCheckSsoFallback;
      } else {
        kc.silentCheckSsoFallback = true;
      }
      if (initOptions.pkceMethod) {
        if (initOptions.pkceMethod !== "S256") {
          throw "Invalid value for pkceMethod";
        }
        kc.pkceMethod = initOptions.pkceMethod;
      }
      if (typeof initOptions.enableLogging === "boolean") {
        kc.enableLogging = initOptions.enableLogging;
      } else {
        kc.enableLogging = false;
      }
      if (typeof initOptions.scope === "string") {
        kc.scope = initOptions.scope;
      }
      if (typeof initOptions.messageReceiveTimeout === "number" && initOptions.messageReceiveTimeout > 0) {
        kc.messageReceiveTimeout = initOptions.messageReceiveTimeout;
      } else {
        kc.messageReceiveTimeout = 1e4;
      }
    }
    if (!kc.responseMode) {
      kc.responseMode = "fragment";
    }
    if (!kc.responseType) {
      kc.responseType = "code";
      kc.flow = "standard";
    }
    var promise = createPromise();
    var initPromise = createPromise();
    initPromise.promise.then(function() {
      kc.onReady && kc.onReady(kc.authenticated);
      promise.setSuccess(kc.authenticated);
    }).catch(function(error) {
      promise.setError(error);
    });
    var configPromise = loadConfig();
    function onLoad() {
      var doLogin = function(prompt) {
        if (!prompt) {
          options.prompt = "none";
        }
        if (initOptions && initOptions.locale) {
          options.locale = initOptions.locale;
        }
        kc.login(options).then(function() {
          initPromise.setSuccess();
        }).catch(function(error) {
          initPromise.setError(error);
        });
      };
      var checkSsoSilently = function() {
        var ifrm = document.createElement("iframe");
        var src = kc.createLoginUrl({ prompt: "none", redirectUri: kc.silentCheckSsoRedirectUri });
        ifrm.setAttribute("src", src);
        ifrm.setAttribute("sandbox", "allow-scripts allow-same-origin");
        ifrm.setAttribute("title", "keycloak-silent-check-sso");
        ifrm.style.display = "none";
        document.body.appendChild(ifrm);
        var messageCallback = function(event) {
          if (event.origin !== window.location.origin || ifrm.contentWindow !== event.source) {
            return;
          }
          var oauth = parseCallback(event.data);
          processCallback(oauth, initPromise);
          document.body.removeChild(ifrm);
          window.removeEventListener("message", messageCallback);
        };
        window.addEventListener("message", messageCallback);
      };
      var options = {};
      switch (initOptions.onLoad) {
        case "check-sso":
          if (loginIframe.enable) {
            setupCheckLoginIframe().then(function() {
              checkLoginIframe().then(function(unchanged) {
                if (!unchanged) {
                  kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
                } else {
                  initPromise.setSuccess();
                }
              }).catch(function(error) {
                initPromise.setError(error);
              });
            });
          } else {
            kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
          }
          break;
        case "login-required":
          doLogin(true);
          break;
        default:
          throw "Invalid value for onLoad";
      }
    }
    function processInit() {
      var callback = parseCallback(window.location.href);
      if (callback) {
        window.history.replaceState(window.history.state, null, callback.newUrl);
      }
      if (callback && callback.valid) {
        return setupCheckLoginIframe().then(function() {
          processCallback(callback, initPromise);
        }).catch(function(error) {
          initPromise.setError(error);
        });
      } else if (initOptions) {
        if (initOptions.token && initOptions.refreshToken) {
          setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);
          if (loginIframe.enable) {
            setupCheckLoginIframe().then(function() {
              checkLoginIframe().then(function(unchanged) {
                if (unchanged) {
                  kc.onAuthSuccess && kc.onAuthSuccess();
                  initPromise.setSuccess();
                  scheduleCheckIframe();
                } else {
                  initPromise.setSuccess();
                }
              }).catch(function(error) {
                initPromise.setError(error);
              });
            });
          } else {
            kc.updateToken(-1).then(function() {
              kc.onAuthSuccess && kc.onAuthSuccess();
              initPromise.setSuccess();
            }).catch(function(error) {
              kc.onAuthError && kc.onAuthError();
              if (initOptions.onLoad) {
                onLoad();
              } else {
                initPromise.setError(error);
              }
            });
          }
        } else if (initOptions.onLoad) {
          onLoad();
        } else {
          initPromise.setSuccess();
        }
      } else {
        initPromise.setSuccess();
      }
    }
    function domReady() {
      var promise2 = createPromise();
      var checkReadyState = function() {
        if (document.readyState === "interactive" || document.readyState === "complete") {
          document.removeEventListener("readystatechange", checkReadyState);
          promise2.setSuccess();
        }
      };
      document.addEventListener("readystatechange", checkReadyState);
      checkReadyState();
      return promise2.promise;
    }
    configPromise.then(function() {
      domReady().then(check3pCookiesSupported).then(processInit).catch(function(error) {
        promise.setError(error);
      });
    });
    configPromise.catch(function(error) {
      promise.setError(error);
    });
    return promise.promise;
  };
  kc.login = function(options) {
    return adapter.login(options);
  };
  function generateRandomData(len) {
    var array = null;
    var crypto2 = window.crypto || window.msCrypto;
    if (crypto2 && crypto2.getRandomValues && window.Uint8Array) {
      array = new Uint8Array(len);
      crypto2.getRandomValues(array);
      return array;
    }
    array = new Array(len);
    for (var j = 0; j < array.length; j++) {
      array[j] = Math.floor(256 * Math.random());
    }
    return array;
  }
  function generateCodeVerifier(len) {
    return generateRandomString(len, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
  }
  function generateRandomString(len, alphabet) {
    var randomData = generateRandomData(len);
    var chars = new Array(len);
    for (var i2 = 0; i2 < len; i2++) {
      chars[i2] = alphabet.charCodeAt(randomData[i2] % alphabet.length);
    }
    return String.fromCharCode.apply(null, chars);
  }
  function generatePkceChallenge(pkceMethod, codeVerifier) {
    switch (pkceMethod) {
      case "S256":
        var hashBytes = new Uint8Array(import_js_sha256.default.arrayBuffer(codeVerifier));
        var encodedHash = import_base64_js.default.fromByteArray(hashBytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
        return encodedHash;
      default:
        throw "Invalid value for pkceMethod";
    }
  }
  function buildClaimsParameter(requestedAcr) {
    var claims = {
      id_token: {
        acr: requestedAcr
      }
    };
    return JSON.stringify(claims);
  }
  kc.createLoginUrl = function(options) {
    var state = createUUID();
    var nonce = createUUID();
    var redirectUri = adapter.redirectUri(options);
    var callbackState = {
      state,
      nonce,
      redirectUri: encodeURIComponent(redirectUri)
    };
    if (options && options.prompt) {
      callbackState.prompt = options.prompt;
    }
    var baseUrl;
    if (options && options.action == "register") {
      baseUrl = kc.endpoints.register();
    } else {
      baseUrl = kc.endpoints.authorize();
    }
    var scope = options && options.scope || kc.scope;
    if (!scope) {
      scope = "openid";
    } else if (scope.indexOf("openid") === -1) {
      scope = "openid " + scope;
    }
    var url = baseUrl + "?client_id=" + encodeURIComponent(kc.clientId) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&state=" + encodeURIComponent(state) + "&response_mode=" + encodeURIComponent(kc.responseMode) + "&response_type=" + encodeURIComponent(kc.responseType) + "&scope=" + encodeURIComponent(scope);
    if (useNonce) {
      url = url + "&nonce=" + encodeURIComponent(nonce);
    }
    if (options && options.prompt) {
      url += "&prompt=" + encodeURIComponent(options.prompt);
    }
    if (options && options.maxAge) {
      url += "&max_age=" + encodeURIComponent(options.maxAge);
    }
    if (options && options.loginHint) {
      url += "&login_hint=" + encodeURIComponent(options.loginHint);
    }
    if (options && options.idpHint) {
      url += "&kc_idp_hint=" + encodeURIComponent(options.idpHint);
    }
    if (options && options.action && options.action != "register") {
      url += "&kc_action=" + encodeURIComponent(options.action);
    }
    if (options && options.locale) {
      url += "&ui_locales=" + encodeURIComponent(options.locale);
    }
    if (options && options.acr) {
      var claimsParameter = buildClaimsParameter(options.acr);
      url += "&claims=" + encodeURIComponent(claimsParameter);
    }
    if (kc.pkceMethod) {
      var codeVerifier = generateCodeVerifier(96);
      callbackState.pkceCodeVerifier = codeVerifier;
      var pkceChallenge = generatePkceChallenge(kc.pkceMethod, codeVerifier);
      url += "&code_challenge=" + pkceChallenge;
      url += "&code_challenge_method=" + kc.pkceMethod;
    }
    callbackStorage.add(callbackState);
    return url;
  };
  kc.logout = function(options) {
    return adapter.logout(options);
  };
  kc.createLogoutUrl = function(options) {
    var url = kc.endpoints.logout() + "?client_id=" + encodeURIComponent(kc.clientId) + "&post_logout_redirect_uri=" + encodeURIComponent(adapter.redirectUri(options, false));
    if (kc.idToken) {
      url += "&id_token_hint=" + encodeURIComponent(kc.idToken);
    }
    return url;
  };
  kc.register = function(options) {
    return adapter.register(options);
  };
  kc.createRegisterUrl = function(options) {
    if (!options) {
      options = {};
    }
    options.action = "register";
    return kc.createLoginUrl(options);
  };
  kc.createAccountUrl = function(options) {
    var realm = getRealmUrl();
    var url = void 0;
    if (typeof realm !== "undefined") {
      url = realm + "/account?referrer=" + encodeURIComponent(kc.clientId) + "&referrer_uri=" + encodeURIComponent(adapter.redirectUri(options));
    }
    return url;
  };
  kc.accountManagement = function() {
    return adapter.accountManagement();
  };
  kc.hasRealmRole = function(role) {
    var access = kc.realmAccess;
    return !!access && access.roles.indexOf(role) >= 0;
  };
  kc.hasResourceRole = function(role, resource) {
    if (!kc.resourceAccess) {
      return false;
    }
    var access = kc.resourceAccess[resource || kc.clientId];
    return !!access && access.roles.indexOf(role) >= 0;
  };
  kc.loadUserProfile = function() {
    var url = getRealmUrl() + "/account";
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Authorization", "bearer " + kc.token);
    var promise = createPromise();
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status == 200) {
          kc.profile = JSON.parse(req.responseText);
          promise.setSuccess(kc.profile);
        } else {
          promise.setError();
        }
      }
    };
    req.send();
    return promise.promise;
  };
  kc.loadUserInfo = function() {
    var url = kc.endpoints.userinfo();
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Authorization", "bearer " + kc.token);
    var promise = createPromise();
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status == 200) {
          kc.userInfo = JSON.parse(req.responseText);
          promise.setSuccess(kc.userInfo);
        } else {
          promise.setError();
        }
      }
    };
    req.send();
    return promise.promise;
  };
  kc.isTokenExpired = function(minValidity) {
    if (!kc.tokenParsed || !kc.refreshToken && kc.flow != "implicit") {
      throw "Not authenticated";
    }
    if (kc.timeSkew == null) {
      logInfo("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set");
      return true;
    }
    var expiresIn = kc.tokenParsed["exp"] - Math.ceil((/* @__PURE__ */ new Date()).getTime() / 1e3) + kc.timeSkew;
    if (minValidity) {
      if (isNaN(minValidity)) {
        throw "Invalid minValidity";
      }
      expiresIn -= minValidity;
    }
    return expiresIn < 0;
  };
  kc.updateToken = function(minValidity) {
    var promise = createPromise();
    if (!kc.refreshToken) {
      promise.setError();
      return promise.promise;
    }
    minValidity = minValidity || 5;
    var exec = function() {
      var refreshToken = false;
      if (minValidity == -1) {
        refreshToken = true;
        logInfo("[KEYCLOAK] Refreshing token: forced refresh");
      } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
        refreshToken = true;
        logInfo("[KEYCLOAK] Refreshing token: token expired");
      }
      if (!refreshToken) {
        promise.setSuccess(false);
      } else {
        var params = "grant_type=refresh_token&refresh_token=" + kc.refreshToken;
        var url = kc.endpoints.token();
        refreshQueue.push(promise);
        if (refreshQueue.length == 1) {
          var req = new XMLHttpRequest();
          req.open("POST", url, true);
          req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          req.withCredentials = true;
          params += "&client_id=" + encodeURIComponent(kc.clientId);
          var timeLocal = (/* @__PURE__ */ new Date()).getTime();
          req.onreadystatechange = function() {
            if (req.readyState == 4) {
              if (req.status == 200) {
                logInfo("[KEYCLOAK] Token refreshed");
                timeLocal = (timeLocal + (/* @__PURE__ */ new Date()).getTime()) / 2;
                var tokenResponse = JSON.parse(req.responseText);
                setToken(tokenResponse["access_token"], tokenResponse["refresh_token"], tokenResponse["id_token"], timeLocal);
                kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                  p.setSuccess(true);
                }
              } else {
                logWarn("[KEYCLOAK] Failed to refresh token");
                if (req.status == 400) {
                  kc.clearToken();
                }
                kc.onAuthRefreshError && kc.onAuthRefreshError();
                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                  p.setError(true);
                }
              }
            }
          };
          req.send(params);
        }
      }
    };
    if (loginIframe.enable) {
      var iframePromise = checkLoginIframe();
      iframePromise.then(function() {
        exec();
      }).catch(function(error) {
        promise.setError(error);
      });
    } else {
      exec();
    }
    return promise.promise;
  };
  kc.clearToken = function() {
    if (kc.token) {
      setToken(null, null, null);
      kc.onAuthLogout && kc.onAuthLogout();
      if (kc.loginRequired) {
        kc.login();
      }
    }
  };
  function getRealmUrl() {
    if (typeof kc.authServerUrl !== "undefined") {
      if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == "/") {
        return kc.authServerUrl + "realms/" + encodeURIComponent(kc.realm);
      } else {
        return kc.authServerUrl + "/realms/" + encodeURIComponent(kc.realm);
      }
    } else {
      return void 0;
    }
  }
  function getOrigin() {
    if (!window.location.origin) {
      return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    } else {
      return window.location.origin;
    }
  }
  function processCallback(oauth, promise) {
    var code = oauth.code;
    var error = oauth.error;
    var prompt = oauth.prompt;
    var timeLocal = (/* @__PURE__ */ new Date()).getTime();
    if (oauth["kc_action_status"]) {
      kc.onActionUpdate && kc.onActionUpdate(oauth["kc_action_status"]);
    }
    if (error) {
      if (prompt != "none") {
        var errorData = { error, error_description: oauth.error_description };
        kc.onAuthError && kc.onAuthError(errorData);
        promise && promise.setError(errorData);
      } else {
        promise && promise.setSuccess();
      }
      return;
    } else if (kc.flow != "standard" && (oauth.access_token || oauth.id_token)) {
      authSuccess(oauth.access_token, null, oauth.id_token, true);
    }
    if (kc.flow != "implicit" && code) {
      var params = "code=" + code + "&grant_type=authorization_code";
      var url = kc.endpoints.token();
      var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      params += "&client_id=" + encodeURIComponent(kc.clientId);
      params += "&redirect_uri=" + oauth.redirectUri;
      if (oauth.pkceCodeVerifier) {
        params += "&code_verifier=" + oauth.pkceCodeVerifier;
      }
      req.withCredentials = true;
      req.onreadystatechange = function() {
        if (req.readyState == 4) {
          if (req.status == 200) {
            var tokenResponse = JSON.parse(req.responseText);
            authSuccess(tokenResponse["access_token"], tokenResponse["refresh_token"], tokenResponse["id_token"], kc.flow === "standard");
            scheduleCheckIframe();
          } else {
            kc.onAuthError && kc.onAuthError();
            promise && promise.setError();
          }
        }
      };
      req.send(params);
    }
    function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
      timeLocal = (timeLocal + (/* @__PURE__ */ new Date()).getTime()) / 2;
      setToken(accessToken, refreshToken, idToken, timeLocal);
      if (useNonce && (kc.tokenParsed && kc.tokenParsed.nonce != oauth.storedNonce || kc.refreshTokenParsed && kc.refreshTokenParsed.nonce != oauth.storedNonce || kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce)) {
        logInfo("[KEYCLOAK] Invalid nonce, clearing token");
        kc.clearToken();
        promise && promise.setError();
      } else {
        if (fulfillPromise) {
          kc.onAuthSuccess && kc.onAuthSuccess();
          promise && promise.setSuccess();
        }
      }
    }
  }
  function loadConfig(url) {
    var promise = createPromise();
    var configUrl;
    if (!config) {
      configUrl = "keycloak.json";
    } else if (typeof config === "string") {
      configUrl = config;
    }
    function setupOidcEndoints(oidcConfiguration) {
      if (!oidcConfiguration) {
        kc.endpoints = {
          authorize: function() {
            return getRealmUrl() + "/protocol/openid-connect/auth";
          },
          token: function() {
            return getRealmUrl() + "/protocol/openid-connect/token";
          },
          logout: function() {
            return getRealmUrl() + "/protocol/openid-connect/logout";
          },
          checkSessionIframe: function() {
            var src = getRealmUrl() + "/protocol/openid-connect/login-status-iframe.html";
            if (kc.iframeVersion) {
              src = src + "?version=" + kc.iframeVersion;
            }
            return src;
          },
          thirdPartyCookiesIframe: function() {
            var src = getRealmUrl() + "/protocol/openid-connect/3p-cookies/step1.html";
            if (kc.iframeVersion) {
              src = src + "?version=" + kc.iframeVersion;
            }
            return src;
          },
          register: function() {
            return getRealmUrl() + "/protocol/openid-connect/registrations";
          },
          userinfo: function() {
            return getRealmUrl() + "/protocol/openid-connect/userinfo";
          }
        };
      } else {
        kc.endpoints = {
          authorize: function() {
            return oidcConfiguration.authorization_endpoint;
          },
          token: function() {
            return oidcConfiguration.token_endpoint;
          },
          logout: function() {
            if (!oidcConfiguration.end_session_endpoint) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.end_session_endpoint;
          },
          checkSessionIframe: function() {
            if (!oidcConfiguration.check_session_iframe) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.check_session_iframe;
          },
          register: function() {
            throw 'Redirection to "Register user" page not supported in standard OIDC mode';
          },
          userinfo: function() {
            if (!oidcConfiguration.userinfo_endpoint) {
              throw "Not supported by the OIDC server";
            }
            return oidcConfiguration.userinfo_endpoint;
          }
        };
      }
    }
    if (configUrl) {
      var req = new XMLHttpRequest();
      req.open("GET", configUrl, true);
      req.setRequestHeader("Accept", "application/json");
      req.onreadystatechange = function() {
        if (req.readyState == 4) {
          if (req.status == 200 || fileLoaded(req)) {
            var config2 = JSON.parse(req.responseText);
            kc.authServerUrl = config2["auth-server-url"];
            kc.realm = config2["realm"];
            kc.clientId = config2["resource"];
            setupOidcEndoints(null);
            promise.setSuccess();
          } else {
            promise.setError();
          }
        }
      };
      req.send();
    } else {
      if (!config.clientId) {
        throw "clientId missing";
      }
      kc.clientId = config.clientId;
      var oidcProvider = config["oidcProvider"];
      if (!oidcProvider) {
        if (!config["url"]) {
          var scripts2 = document.getElementsByTagName("script");
          for (var i2 = 0; i2 < scripts2.length; i2++) {
            if (scripts2[i2].src.match(/.*keycloak\.js/)) {
              config.url = scripts2[i2].src.substr(0, scripts2[i2].src.indexOf("/js/keycloak.js"));
              break;
            }
          }
        }
        if (!config.realm) {
          throw "realm missing";
        }
        kc.authServerUrl = config.url;
        kc.realm = config.realm;
        setupOidcEndoints(null);
        promise.setSuccess();
      } else {
        if (typeof oidcProvider === "string") {
          var oidcProviderConfigUrl;
          if (oidcProvider.charAt(oidcProvider.length - 1) == "/") {
            oidcProviderConfigUrl = oidcProvider + ".well-known/openid-configuration";
          } else {
            oidcProviderConfigUrl = oidcProvider + "/.well-known/openid-configuration";
          }
          var req = new XMLHttpRequest();
          req.open("GET", oidcProviderConfigUrl, true);
          req.setRequestHeader("Accept", "application/json");
          req.onreadystatechange = function() {
            if (req.readyState == 4) {
              if (req.status == 200 || fileLoaded(req)) {
                var oidcProviderConfig = JSON.parse(req.responseText);
                setupOidcEndoints(oidcProviderConfig);
                promise.setSuccess();
              } else {
                promise.setError();
              }
            }
          };
          req.send();
        } else {
          setupOidcEndoints(oidcProvider);
          promise.setSuccess();
        }
      }
    }
    return promise.promise;
  }
  function fileLoaded(xhr) {
    return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith("file:");
  }
  function setToken(token, refreshToken, idToken, timeLocal) {
    if (kc.tokenTimeoutHandle) {
      clearTimeout(kc.tokenTimeoutHandle);
      kc.tokenTimeoutHandle = null;
    }
    if (refreshToken) {
      kc.refreshToken = refreshToken;
      kc.refreshTokenParsed = decodeToken(refreshToken);
    } else {
      delete kc.refreshToken;
      delete kc.refreshTokenParsed;
    }
    if (idToken) {
      kc.idToken = idToken;
      kc.idTokenParsed = decodeToken(idToken);
    } else {
      delete kc.idToken;
      delete kc.idTokenParsed;
    }
    if (token) {
      kc.token = token;
      kc.tokenParsed = decodeToken(token);
      kc.sessionId = kc.tokenParsed.session_state;
      kc.authenticated = true;
      kc.subject = kc.tokenParsed.sub;
      kc.realmAccess = kc.tokenParsed.realm_access;
      kc.resourceAccess = kc.tokenParsed.resource_access;
      if (timeLocal) {
        kc.timeSkew = Math.floor(timeLocal / 1e3) - kc.tokenParsed.iat;
      }
      if (kc.timeSkew != null) {
        logInfo("[KEYCLOAK] Estimated time difference between browser and server is " + kc.timeSkew + " seconds");
        if (kc.onTokenExpired) {
          var expiresIn = (kc.tokenParsed["exp"] - (/* @__PURE__ */ new Date()).getTime() / 1e3 + kc.timeSkew) * 1e3;
          logInfo("[KEYCLOAK] Token expires in " + Math.round(expiresIn / 1e3) + " s");
          if (expiresIn <= 0) {
            kc.onTokenExpired();
          } else {
            kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
          }
        }
      }
    } else {
      delete kc.token;
      delete kc.tokenParsed;
      delete kc.subject;
      delete kc.realmAccess;
      delete kc.resourceAccess;
      kc.authenticated = false;
    }
  }
  function decodeToken(str) {
    str = str.split(".")[1];
    str = str.replace(/-/g, "+");
    str = str.replace(/_/g, "/");
    switch (str.length % 4) {
      case 0:
        break;
      case 2:
        str += "==";
        break;
      case 3:
        str += "=";
        break;
      default:
        throw "Invalid token";
    }
    str = decodeURIComponent(escape(atob(str)));
    str = JSON.parse(str);
    return str;
  }
  function createUUID() {
    var hexDigits = "0123456789abcdef";
    var s = generateRandomString(36, hexDigits).split("");
    s[14] = "4";
    s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  }
  function parseCallback(url) {
    var oauth = parseCallbackUrl(url);
    if (!oauth) {
      return;
    }
    var oauthState = callbackStorage.get(oauth.state);
    if (oauthState) {
      oauth.valid = true;
      oauth.redirectUri = oauthState.redirectUri;
      oauth.storedNonce = oauthState.nonce;
      oauth.prompt = oauthState.prompt;
      oauth.pkceCodeVerifier = oauthState.pkceCodeVerifier;
    }
    return oauth;
  }
  function parseCallbackUrl(url) {
    var supportedParams;
    switch (kc.flow) {
      case "standard":
        supportedParams = ["code", "state", "session_state", "kc_action_status", "iss"];
        break;
      case "implicit":
        supportedParams = ["access_token", "token_type", "id_token", "state", "session_state", "expires_in", "kc_action_status", "iss"];
        break;
      case "hybrid":
        supportedParams = ["access_token", "token_type", "id_token", "code", "state", "session_state", "expires_in", "kc_action_status", "iss"];
        break;
    }
    supportedParams.push("error");
    supportedParams.push("error_description");
    supportedParams.push("error_uri");
    var queryIndex = url.indexOf("?");
    var fragmentIndex = url.indexOf("#");
    var newUrl;
    var parsed;
    if (kc.responseMode === "query" && queryIndex !== -1) {
      newUrl = url.substring(0, queryIndex);
      parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
      if (parsed.paramsString !== "") {
        newUrl += "?" + parsed.paramsString;
      }
      if (fragmentIndex !== -1) {
        newUrl += url.substring(fragmentIndex);
      }
    } else if (kc.responseMode === "fragment" && fragmentIndex !== -1) {
      newUrl = url.substring(0, fragmentIndex);
      parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
      if (parsed.paramsString !== "") {
        newUrl += "#" + parsed.paramsString;
      }
    }
    if (parsed && parsed.oauthParams) {
      if (kc.flow === "standard" || kc.flow === "hybrid") {
        if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
          parsed.oauthParams.newUrl = newUrl;
          return parsed.oauthParams;
        }
      } else if (kc.flow === "implicit") {
        if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
          parsed.oauthParams.newUrl = newUrl;
          return parsed.oauthParams;
        }
      }
    }
  }
  function parseCallbackParams(paramsString, supportedParams) {
    var p = paramsString.split("&");
    var result = {
      paramsString: "",
      oauthParams: {}
    };
    for (var i2 = 0; i2 < p.length; i2++) {
      var split = p[i2].indexOf("=");
      var key = p[i2].slice(0, split);
      if (supportedParams.indexOf(key) !== -1) {
        result.oauthParams[key] = p[i2].slice(split + 1);
      } else {
        if (result.paramsString !== "") {
          result.paramsString += "&";
        }
        result.paramsString += p[i2];
      }
    }
    return result;
  }
  function createPromise() {
    var p = {
      setSuccess: function(result) {
        p.resolve(result);
      },
      setError: function(result) {
        p.reject(result);
      }
    };
    p.promise = new Promise(function(resolve, reject) {
      p.resolve = resolve;
      p.reject = reject;
    });
    return p;
  }
  function applyTimeoutToPromise(promise, timeout, errorMessage) {
    var timeoutHandle = null;
    var timeoutPromise = new Promise(function(resolve, reject) {
      timeoutHandle = setTimeout(function() {
        reject({ "error": errorMessage || "Promise is not settled within timeout of " + timeout + "ms" });
      }, timeout);
    });
    return Promise.race([promise, timeoutPromise]).finally(function() {
      clearTimeout(timeoutHandle);
    });
  }
  function setupCheckLoginIframe() {
    var promise = createPromise();
    if (!loginIframe.enable) {
      promise.setSuccess();
      return promise.promise;
    }
    if (loginIframe.iframe) {
      promise.setSuccess();
      return promise.promise;
    }
    var iframe = document.createElement("iframe");
    loginIframe.iframe = iframe;
    iframe.onload = function() {
      var authUrl = kc.endpoints.authorize();
      if (authUrl.charAt(0) === "/") {
        loginIframe.iframeOrigin = getOrigin();
      } else {
        loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf("/", 8));
      }
      promise.setSuccess();
    };
    var src = kc.endpoints.checkSessionIframe();
    iframe.setAttribute("src", src);
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
    iframe.setAttribute("title", "keycloak-session-iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var messageCallback = function(event) {
      if (event.origin !== loginIframe.iframeOrigin || loginIframe.iframe.contentWindow !== event.source) {
        return;
      }
      if (!(event.data == "unchanged" || event.data == "changed" || event.data == "error")) {
        return;
      }
      if (event.data != "unchanged") {
        kc.clearToken();
      }
      var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);
      for (var i2 = callbacks.length - 1; i2 >= 0; --i2) {
        var promise2 = callbacks[i2];
        if (event.data == "error") {
          promise2.setError();
        } else {
          promise2.setSuccess(event.data == "unchanged");
        }
      }
    };
    window.addEventListener("message", messageCallback, false);
    return promise.promise;
  }
  function scheduleCheckIframe() {
    if (loginIframe.enable) {
      if (kc.token) {
        setTimeout(function() {
          checkLoginIframe().then(function(unchanged) {
            if (unchanged) {
              scheduleCheckIframe();
            }
          });
        }, loginIframe.interval * 1e3);
      }
    }
  }
  function checkLoginIframe() {
    var promise = createPromise();
    if (loginIframe.iframe && loginIframe.iframeOrigin) {
      var msg = kc.clientId + " " + (kc.sessionId ? kc.sessionId : "");
      loginIframe.callbackList.push(promise);
      var origin = loginIframe.iframeOrigin;
      if (loginIframe.callbackList.length == 1) {
        loginIframe.iframe.contentWindow.postMessage(msg, origin);
      }
    } else {
      promise.setSuccess();
    }
    return promise.promise;
  }
  function check3pCookiesSupported() {
    var promise = createPromise();
    if (loginIframe.enable || kc.silentCheckSsoRedirectUri) {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", kc.endpoints.thirdPartyCookiesIframe());
      iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
      iframe.setAttribute("title", "keycloak-3p-check-iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      var messageCallback = function(event) {
        if (iframe.contentWindow !== event.source) {
          return;
        }
        if (event.data !== "supported" && event.data !== "unsupported") {
          return;
        } else if (event.data === "unsupported") {
          logWarn(
            "[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:\n\n - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).\n - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).\n\nFor more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers"
          );
          loginIframe.enable = false;
          if (kc.silentCheckSsoFallback) {
            kc.silentCheckSsoRedirectUri = false;
          }
        }
        document.body.removeChild(iframe);
        window.removeEventListener("message", messageCallback);
        promise.setSuccess();
      };
      window.addEventListener("message", messageCallback, false);
    } else {
      promise.setSuccess();
    }
    return applyTimeoutToPromise(promise.promise, kc.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
  }
  function loadAdapter(type) {
    if (!type || type == "default") {
      return {
        login: function(options) {
          window.location.assign(kc.createLoginUrl(options));
          return createPromise().promise;
        },
        logout: function(options) {
          window.location.replace(kc.createLogoutUrl(options));
          return createPromise().promise;
        },
        register: function(options) {
          window.location.assign(kc.createRegisterUrl(options));
          return createPromise().promise;
        },
        accountManagement: function() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== "undefined") {
            window.location.href = accountUrl;
          } else {
            throw "Not supported by the OIDC server";
          }
          return createPromise().promise;
        },
        redirectUri: function(options, encodeHash) {
          if (options && options.redirectUri) {
            return options.redirectUri;
          } else if (kc.redirectUri) {
            return kc.redirectUri;
          } else {
            return location.href;
          }
        }
      };
    }
    if (type == "cordova") {
      loginIframe.enable = false;
      var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
        if (window.cordova && window.cordova.InAppBrowser) {
          return window.cordova.InAppBrowser.open(loginUrl, target, options);
        } else {
          return window.open(loginUrl, target, options);
        }
      };
      var shallowCloneCordovaOptions = function(userOptions) {
        if (userOptions && userOptions.cordovaOptions) {
          return Object.keys(userOptions.cordovaOptions).reduce(function(options, optionName) {
            options[optionName] = userOptions.cordovaOptions[optionName];
            return options;
          }, {});
        } else {
          return {};
        }
      };
      var formatCordovaOptions = function(cordovaOptions) {
        return Object.keys(cordovaOptions).reduce(function(options, optionName) {
          options.push(optionName + "=" + cordovaOptions[optionName]);
          return options;
        }, []).join(",");
      };
      var createCordovaOptions = function(userOptions) {
        var cordovaOptions = shallowCloneCordovaOptions(userOptions);
        cordovaOptions.location = "no";
        if (userOptions && userOptions.prompt == "none") {
          cordovaOptions.hidden = "yes";
        }
        return formatCordovaOptions(cordovaOptions);
      };
      var cordovaRedirectUri = kc.redirectUri || "http://localhost";
      return {
        login: function(options) {
          var promise = createPromise();
          var cordovaOptions = createCordovaOptions(options);
          var loginUrl = kc.createLoginUrl(options);
          var ref = cordovaOpenWindowWrapper(loginUrl, "_blank", cordovaOptions);
          var completed = false;
          var closed = false;
          var closeBrowser = function() {
            closed = true;
            ref.close();
          };
          ref.addEventListener("loadstart", function(event) {
            if (event.url.indexOf(cordovaRedirectUri) == 0) {
              var callback = parseCallback(event.url);
              processCallback(callback, promise);
              closeBrowser();
              completed = true;
            }
          });
          ref.addEventListener("loaderror", function(event) {
            if (!completed) {
              if (event.url.indexOf(cordovaRedirectUri) == 0) {
                var callback = parseCallback(event.url);
                processCallback(callback, promise);
                closeBrowser();
                completed = true;
              } else {
                promise.setError();
                closeBrowser();
              }
            }
          });
          ref.addEventListener("exit", function(event) {
            if (!closed) {
              promise.setError({
                reason: "closed_by_user"
              });
            }
          });
          return promise.promise;
        },
        logout: function(options) {
          var promise = createPromise();
          var logoutUrl = kc.createLogoutUrl(options);
          var ref = cordovaOpenWindowWrapper(logoutUrl, "_blank", "location=no,hidden=yes,clearcache=yes");
          var error;
          ref.addEventListener("loadstart", function(event) {
            if (event.url.indexOf(cordovaRedirectUri) == 0) {
              ref.close();
            }
          });
          ref.addEventListener("loaderror", function(event) {
            if (event.url.indexOf(cordovaRedirectUri) == 0) {
              ref.close();
            } else {
              error = true;
              ref.close();
            }
          });
          ref.addEventListener("exit", function(event) {
            if (error) {
              promise.setError();
            } else {
              kc.clearToken();
              promise.setSuccess();
            }
          });
          return promise.promise;
        },
        register: function(options) {
          var promise = createPromise();
          var registerUrl = kc.createRegisterUrl();
          var cordovaOptions = createCordovaOptions(options);
          var ref = cordovaOpenWindowWrapper(registerUrl, "_blank", cordovaOptions);
          ref.addEventListener("loadstart", function(event) {
            if (event.url.indexOf(cordovaRedirectUri) == 0) {
              ref.close();
              var oauth = parseCallback(event.url);
              processCallback(oauth, promise);
            }
          });
          return promise.promise;
        },
        accountManagement: function() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== "undefined") {
            var ref = cordovaOpenWindowWrapper(accountUrl, "_blank", "location=no");
            ref.addEventListener("loadstart", function(event) {
              if (event.url.indexOf(cordovaRedirectUri) == 0) {
                ref.close();
              }
            });
          } else {
            throw "Not supported by the OIDC server";
          }
        },
        redirectUri: function(options) {
          return cordovaRedirectUri;
        }
      };
    }
    if (type == "cordova-native") {
      loginIframe.enable = false;
      return {
        login: function(options) {
          var promise = createPromise();
          var loginUrl = kc.createLoginUrl(options);
          universalLinks.subscribe("keycloak", function(event) {
            universalLinks.unsubscribe("keycloak");
            window.cordova.plugins.browsertab.close();
            var oauth = parseCallback(event.url);
            processCallback(oauth, promise);
          });
          window.cordova.plugins.browsertab.openUrl(loginUrl);
          return promise.promise;
        },
        logout: function(options) {
          var promise = createPromise();
          var logoutUrl = kc.createLogoutUrl(options);
          universalLinks.subscribe("keycloak", function(event) {
            universalLinks.unsubscribe("keycloak");
            window.cordova.plugins.browsertab.close();
            kc.clearToken();
            promise.setSuccess();
          });
          window.cordova.plugins.browsertab.openUrl(logoutUrl);
          return promise.promise;
        },
        register: function(options) {
          var promise = createPromise();
          var registerUrl = kc.createRegisterUrl(options);
          universalLinks.subscribe("keycloak", function(event) {
            universalLinks.unsubscribe("keycloak");
            window.cordova.plugins.browsertab.close();
            var oauth = parseCallback(event.url);
            processCallback(oauth, promise);
          });
          window.cordova.plugins.browsertab.openUrl(registerUrl);
          return promise.promise;
        },
        accountManagement: function() {
          var accountUrl = kc.createAccountUrl();
          if (typeof accountUrl !== "undefined") {
            window.cordova.plugins.browsertab.openUrl(accountUrl);
          } else {
            throw "Not supported by the OIDC server";
          }
        },
        redirectUri: function(options) {
          if (options && options.redirectUri) {
            return options.redirectUri;
          } else if (kc.redirectUri) {
            return kc.redirectUri;
          } else {
            return "http://localhost";
          }
        }
      };
    }
    throw "invalid adapter type: " + type;
  }
  var LocalStorage = function() {
    if (!(this instanceof LocalStorage)) {
      return new LocalStorage();
    }
    localStorage.setItem("kc-test", "test");
    localStorage.removeItem("kc-test");
    var cs = this;
    function clearExpired() {
      var time = (/* @__PURE__ */ new Date()).getTime();
      for (var i2 = 0; i2 < localStorage.length; i2++) {
        var key = localStorage.key(i2);
        if (key && key.indexOf("kc-callback-") == 0) {
          var value = localStorage.getItem(key);
          if (value) {
            try {
              var expires = JSON.parse(value).expires;
              if (!expires || expires < time) {
                localStorage.removeItem(key);
              }
            } catch (err) {
              localStorage.removeItem(key);
            }
          }
        }
      }
    }
    cs.get = function(state) {
      if (!state) {
        return;
      }
      var key = "kc-callback-" + state;
      var value = localStorage.getItem(key);
      if (value) {
        localStorage.removeItem(key);
        value = JSON.parse(value);
      }
      clearExpired();
      return value;
    };
    cs.add = function(state) {
      clearExpired();
      var key = "kc-callback-" + state.state;
      state.expires = (/* @__PURE__ */ new Date()).getTime() + 60 * 60 * 1e3;
      localStorage.setItem(key, JSON.stringify(state));
    };
  };
  var CookieStorage = function() {
    if (!(this instanceof CookieStorage)) {
      return new CookieStorage();
    }
    var cs = this;
    cs.get = function(state) {
      if (!state) {
        return;
      }
      var value = getCookie("kc-callback-" + state);
      setCookie("kc-callback-" + state, "", cookieExpiration(-100));
      if (value) {
        return JSON.parse(value);
      }
    };
    cs.add = function(state) {
      setCookie("kc-callback-" + state.state, JSON.stringify(state), cookieExpiration(60));
    };
    cs.removeItem = function(key) {
      setCookie(key, "", cookieExpiration(-100));
    };
    var cookieExpiration = function(minutes) {
      var exp = /* @__PURE__ */ new Date();
      exp.setTime(exp.getTime() + minutes * 60 * 1e3);
      return exp;
    };
    var getCookie = function(key) {
      var name = key + "=";
      var ca = document.cookie.split(";");
      for (var i2 = 0; i2 < ca.length; i2++) {
        var c = ca[i2];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };
    var setCookie = function(key, value, expirationDate) {
      var cookie = key + "=" + value + "; expires=" + expirationDate.toUTCString() + "; ";
      document.cookie = cookie;
    };
  };
  function createCallbackStorage() {
    try {
      return new LocalStorage();
    } catch (err) {
    }
    return new CookieStorage();
  }
  function createLogger(fn) {
    return function() {
      if (kc.enableLogging) {
        fn.apply(console, Array.prototype.slice.call(arguments));
      }
    };
  }
}

// node_modules/keycloak-angular/fesm2022/keycloak-angular.mjs
var KeycloakEventType;
(function(KeycloakEventType2) {
  KeycloakEventType2[KeycloakEventType2["OnAuthError"] = 0] = "OnAuthError";
  KeycloakEventType2[KeycloakEventType2["OnAuthLogout"] = 1] = "OnAuthLogout";
  KeycloakEventType2[KeycloakEventType2["OnAuthRefreshError"] = 2] = "OnAuthRefreshError";
  KeycloakEventType2[KeycloakEventType2["OnAuthRefreshSuccess"] = 3] = "OnAuthRefreshSuccess";
  KeycloakEventType2[KeycloakEventType2["OnAuthSuccess"] = 4] = "OnAuthSuccess";
  KeycloakEventType2[KeycloakEventType2["OnReady"] = 5] = "OnReady";
  KeycloakEventType2[KeycloakEventType2["OnTokenExpired"] = 6] = "OnTokenExpired";
  KeycloakEventType2[KeycloakEventType2["OnActionUpdate"] = 7] = "OnActionUpdate";
})(KeycloakEventType || (KeycloakEventType = {}));
var KeycloakAuthGuard = class {
  constructor(router, keycloakAngular) {
    this.router = router;
    this.keycloakAngular = keycloakAngular;
  }
  canActivate(route, state) {
    return __async(this, null, function* () {
      try {
        this.authenticated = yield this.keycloakAngular.isLoggedIn();
        this.roles = yield this.keycloakAngular.getUserRoles(true);
        return yield this.isAccessAllowed(route, state);
      } catch (error) {
        throw new Error("An error happened during access validation. Details:" + error);
      }
    });
  }
};
var _KeycloakService = class _KeycloakService {
  constructor() {
    this._keycloakEvents$ = new Subject();
  }
  bindsKeycloakEvents() {
    this._instance.onAuthError = (errorData) => {
      this._keycloakEvents$.next({
        args: errorData,
        type: KeycloakEventType.OnAuthError
      });
    };
    this._instance.onAuthLogout = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthLogout
      });
    };
    this._instance.onAuthRefreshSuccess = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthRefreshSuccess
      });
    };
    this._instance.onAuthRefreshError = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthRefreshError
      });
    };
    this._instance.onAuthSuccess = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnAuthSuccess
      });
    };
    this._instance.onTokenExpired = () => {
      this._keycloakEvents$.next({
        type: KeycloakEventType.OnTokenExpired
      });
    };
    this._instance.onActionUpdate = (state) => {
      this._keycloakEvents$.next({
        args: state,
        type: KeycloakEventType.OnActionUpdate
      });
    };
    this._instance.onReady = (authenticated) => {
      this._keycloakEvents$.next({
        args: authenticated,
        type: KeycloakEventType.OnReady
      });
    };
  }
  loadExcludedUrls(bearerExcludedUrls) {
    const excludedUrls = [];
    for (const item of bearerExcludedUrls) {
      let excludedUrl;
      if (typeof item === "string") {
        excludedUrl = {
          urlPattern: new RegExp(item, "i"),
          httpMethods: []
        };
      } else {
        excludedUrl = {
          urlPattern: new RegExp(item.url, "i"),
          httpMethods: item.httpMethods
        };
      }
      excludedUrls.push(excludedUrl);
    }
    return excludedUrls;
  }
  initServiceValues({
    enableBearerInterceptor = true,
    loadUserProfileAtStartUp = false,
    bearerExcludedUrls = [],
    authorizationHeaderName = "Authorization",
    bearerPrefix = "Bearer",
    initOptions,
    updateMinValidity = 20,
    shouldAddToken = () => true,
    shouldUpdateToken = () => true
  }) {
    this._enableBearerInterceptor = enableBearerInterceptor;
    this._loadUserProfileAtStartUp = loadUserProfileAtStartUp;
    this._authorizationHeaderName = authorizationHeaderName;
    this._bearerPrefix = bearerPrefix.trim().concat(" ");
    this._excludedUrls = this.loadExcludedUrls(bearerExcludedUrls);
    this._silentRefresh = initOptions ? initOptions.flow === "implicit" : false;
    this._updateMinValidity = updateMinValidity;
    this.shouldAddToken = shouldAddToken;
    this.shouldUpdateToken = shouldUpdateToken;
  }
  init() {
    return __async(this, arguments, function* (options = {}) {
      this.initServiceValues(options);
      const {
        config,
        initOptions
      } = options;
      this._instance = new Keycloak(config);
      this.bindsKeycloakEvents();
      const authenticated = yield this._instance.init(initOptions);
      if (authenticated && this._loadUserProfileAtStartUp) {
        yield this.loadUserProfile();
      }
      return authenticated;
    });
  }
  login() {
    return __async(this, arguments, function* (options = {}) {
      yield this._instance.login(options);
      if (this._loadUserProfileAtStartUp) {
        yield this.loadUserProfile();
      }
    });
  }
  logout(redirectUri) {
    return __async(this, null, function* () {
      const options = {
        redirectUri
      };
      yield this._instance.logout(options);
      this._userProfile = void 0;
    });
  }
  register() {
    return __async(this, arguments, function* (options = {
      action: "register"
    }) {
      yield this._instance.register(options);
    });
  }
  isUserInRole(role, resource) {
    let hasRole;
    hasRole = this._instance.hasResourceRole(role, resource);
    if (!hasRole) {
      hasRole = this._instance.hasRealmRole(role);
    }
    return hasRole;
  }
  getUserRoles(realmRoles = true, resource) {
    let roles = [];
    if (this._instance.resourceAccess) {
      Object.keys(this._instance.resourceAccess).forEach((key) => {
        if (resource && resource !== key) {
          return;
        }
        const resourceAccess = this._instance.resourceAccess[key];
        const clientRoles = resourceAccess["roles"] || [];
        roles = roles.concat(clientRoles);
      });
    }
    if (realmRoles && this._instance.realmAccess) {
      const realmRoles2 = this._instance.realmAccess["roles"] || [];
      roles.push(...realmRoles2);
    }
    return roles;
  }
  isLoggedIn() {
    if (!this._instance) {
      return false;
    }
    return this._instance.authenticated;
  }
  isTokenExpired(minValidity = 0) {
    return this._instance.isTokenExpired(minValidity);
  }
  updateToken() {
    return __async(this, arguments, function* (minValidity = this._updateMinValidity) {
      if (this._silentRefresh) {
        if (this.isTokenExpired()) {
          throw new Error("Failed to refresh the token, or the session is expired");
        }
        return true;
      }
      if (!this._instance) {
        throw new Error("Keycloak Angular library is not initialized.");
      }
      try {
        return yield this._instance.updateToken(minValidity);
      } catch (error) {
        return false;
      }
    });
  }
  loadUserProfile(forceReload = false) {
    return __async(this, null, function* () {
      if (this._userProfile && !forceReload) {
        return this._userProfile;
      }
      if (!this._instance.authenticated) {
        throw new Error("The user profile was not loaded as the user is not logged in.");
      }
      return this._userProfile = yield this._instance.loadUserProfile();
    });
  }
  getToken() {
    return __async(this, null, function* () {
      return this._instance.token;
    });
  }
  getUsername() {
    if (!this._userProfile) {
      throw new Error("User not logged in or user profile was not loaded.");
    }
    return this._userProfile.username;
  }
  clearToken() {
    this._instance.clearToken();
  }
  addTokenToHeader(headers = new HttpHeaders()) {
    return from(this.getToken()).pipe(map((token) => token ? headers.set(this._authorizationHeaderName, this._bearerPrefix + token) : headers));
  }
  getKeycloakInstance() {
    return this._instance;
  }
  get excludedUrls() {
    return this._excludedUrls;
  }
  get enableBearerInterceptor() {
    return this._enableBearerInterceptor;
  }
  get keycloakEvents$() {
    return this._keycloakEvents$;
  }
};
_KeycloakService.ɵfac = function KeycloakService_Factory(t) {
  return new (t || _KeycloakService)();
};
_KeycloakService.ɵprov = ɵɵdefineInjectable({
  token: _KeycloakService,
  factory: _KeycloakService.ɵfac
});
var KeycloakService = _KeycloakService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeycloakService, [{
    type: Injectable
  }], null, null);
})();
var _KeycloakBearerInterceptor = class _KeycloakBearerInterceptor {
  constructor(keycloak) {
    this.keycloak = keycloak;
  }
  conditionallyUpdateToken(req) {
    return __async(this, null, function* () {
      if (this.keycloak.shouldUpdateToken(req)) {
        return yield this.keycloak.updateToken();
      }
      return true;
    });
  }
  isUrlExcluded({
    method: method2,
    url
  }, {
    urlPattern,
    httpMethods
  }) {
    const httpTest = httpMethods.length === 0 || httpMethods.join().indexOf(method2.toUpperCase()) > -1;
    const urlTest = urlPattern.test(url);
    return httpTest && urlTest;
  }
  intercept(req, next) {
    const {
      enableBearerInterceptor,
      excludedUrls
    } = this.keycloak;
    if (!enableBearerInterceptor) {
      return next.handle(req);
    }
    const shallPass = !this.keycloak.shouldAddToken(req) || excludedUrls.findIndex((item) => this.isUrlExcluded(req, item)) > -1;
    if (shallPass) {
      return next.handle(req);
    }
    return combineLatest([from(this.conditionallyUpdateToken(req)), of(this.keycloak.isLoggedIn())]).pipe(mergeMap(([_, isLoggedIn]) => isLoggedIn ? this.handleRequestWithTokenHeader(req, next) : next.handle(req)));
  }
  handleRequestWithTokenHeader(req, next) {
    return this.keycloak.addTokenToHeader(req.headers).pipe(mergeMap((headersWithBearer) => {
      const kcReq = req.clone({
        headers: headersWithBearer
      });
      return next.handle(kcReq);
    }));
  }
};
_KeycloakBearerInterceptor.ɵfac = function KeycloakBearerInterceptor_Factory(t) {
  return new (t || _KeycloakBearerInterceptor)(ɵɵinject(KeycloakService));
};
_KeycloakBearerInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _KeycloakBearerInterceptor,
  factory: _KeycloakBearerInterceptor.ɵfac
});
var KeycloakBearerInterceptor = _KeycloakBearerInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeycloakBearerInterceptor, [{
    type: Injectable
  }], () => [{
    type: KeycloakService
  }], null);
})();
var _CoreModule = class _CoreModule {
};
_CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || _CoreModule)();
};
_CoreModule.ɵmod = ɵɵdefineNgModule({
  type: _CoreModule,
  imports: [CommonModule]
});
_CoreModule.ɵinj = ɵɵdefineInjector({
  providers: [KeycloakService, {
    provide: HTTP_INTERCEPTORS,
    useClass: KeycloakBearerInterceptor,
    multi: true
  }],
  imports: [CommonModule]
});
var CoreModule = _CoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [KeycloakService, {
        provide: HTTP_INTERCEPTORS,
        useClass: KeycloakBearerInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var _KeycloakAngularModule = class _KeycloakAngularModule {
};
_KeycloakAngularModule.ɵfac = function KeycloakAngularModule_Factory(t) {
  return new (t || _KeycloakAngularModule)();
};
_KeycloakAngularModule.ɵmod = ɵɵdefineNgModule({
  type: _KeycloakAngularModule,
  imports: [CoreModule]
});
_KeycloakAngularModule.ɵinj = ɵɵdefineInjector({
  imports: [CoreModule]
});
var KeycloakAngularModule = _KeycloakAngularModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeycloakAngularModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule]
    }]
  }], null, null);
})();
export {
  CoreModule,
  KeycloakAngularModule,
  KeycloakAuthGuard,
  KeycloakBearerInterceptor,
  KeycloakEventType,
  KeycloakService
};
/*! Bundled license information:

js-sha256/src/sha256.js:
  (**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.9.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   *)
*/
//# sourceMappingURL=keycloak-angular.js.map
