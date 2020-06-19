type MatchType = any[] | null;
type BrowserType = 'Edge' | 'Chrome' | 'Firefox' | 'Safari' | 'OPR' | 'IE';

interface TypeVersion {
  type: string;
  version: string;
}

export default function getBrowserTypeAndVersion(): TypeVersion {
  const userAgent: string = window.navigator.userAgent;
  let type: BrowserType | string = '';
  let version: string = '';
  const matchEdge: MatchType = userAgent.match(/(Edg|Edge)\/((\d{1,}.)+)/);
  const matchChrome: MatchType = userAgent.match(/(Chrome)\/((\d{1,}.)+)/);
  const matchOPR: MatchType = userAgent.match(/(OPR)\/((\d{1,}.)+)/);
  const matchFirefox: MatchType = userAgent.match(/(Firefox)\/((\d{1,}.*)+)/);
  const matchIE: MatchType = userAgent.match(/(MSIE)\s(\d{1,}\.\d)/);
  const matchIE11: MatchType = userAgent.match(/(rv):(\d{1,}\.\d)/);
  if (matchEdge) {
    type = 'Edge';
    version = matchEdge[2];
  } else if (matchFirefox) {
    type = matchFirefox[1];
    version = matchFirefox[2];
  } else if (matchOPR) {
    type = matchOPR[1];
    version = matchOPR[2];
  } else if (matchChrome) {
    type = matchChrome[1];
    version = matchChrome[2];
  } else if (matchIE) {
    type = 'IE';
    version = matchIE[2];
  } else if (matchIE11) {
    type = 'IE';
    version = matchIE11[2];
  }
  return {
    type,
    version
  };
}
