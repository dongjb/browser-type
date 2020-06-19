(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.device = factory());
}(this, (function () { 'use strict';

  function getBrowserTypeAndVersion() {
      const userAgent = window.navigator.userAgent;
      let type = '';
      let version = '';
      const matchEdge = userAgent.match(/(Edg|Edge)\/((\d{1,}.)+)/);
      const matchChrome = userAgent.match(/(Chrome)\/((\d{1,}.)+)/);
      const matchOPR = userAgent.match(/(OPR)\/((\d{1,}.)+)/);
      const matchFirefox = userAgent.match(/(Firefox)\/((\d{1,}.*)+)/);
      const matchIE = userAgent.match(/(MSIE)\s(\d{1,}\.\d)/);
      const matchIE11 = userAgent.match(/(rv):(\d{1,}\.\d)/);
      if (matchEdge) {
          type = 'Edge';
          version = matchEdge[2];
      }
      else if (matchFirefox) {
          type = matchFirefox[1];
          version = matchFirefox[2];
      }
      else if (matchOPR) {
          type = matchOPR[1];
          version = matchOPR[2];
      }
      else if (matchChrome) {
          type = matchChrome[1];
          version = matchChrome[2];
      }
      else if (matchIE) {
          type = 'IE';
          version = matchIE[2];
      }
      else if (matchIE11) {
          type = 'IE';
          version = matchIE11[2];
      }
      return {
          type,
          version
      };
  }

  return getBrowserTypeAndVersion;

})));
