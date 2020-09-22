export interface BrowserTypeVersion {
  type: string;
  version: string;
}

declare function getBrowserTypeAndVersion(): BrowserTypeVersion;

export default getBrowserTypeAndVersion;
