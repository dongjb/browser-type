import getBrowserTypeAndVersion from '../lib/index.es.js';

const userAgent: string = window.navigator.userAgent;
const input: any = document.getElementById('input');
const detection: any = document.getElementById('detection');
const typeElement: HTMLElement | null = document.getElementById('type');
const versionElement: HTMLElement | null = document.getElementById('version');
input.value = userAgent;

detection.addEventListener(
  'click',
  function () {
    const res = getBrowserTypeAndVersion();
    (<HTMLElement>typeElement).innerText = res.type;
    (<HTMLElement>versionElement).innerText = res.version;
  },
  false
);
