function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function h(){var e=p();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function w(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function x(){var e=p(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(d)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},x.flush=function(){return void 0===a?f:w(p())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=JSON.parse(localStorage.getItem("feedback-form-state"))||{};console.log(y);const j={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500));
//# sourceMappingURL=03-feedback.978ce173.js.map
