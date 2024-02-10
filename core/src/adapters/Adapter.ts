export interface Adapter {
  getMiniUrl(key: string): Promise<string | boolean>
  setMiniUrl(key: string, url: string): Promise<boolean>
  delMiniUrl(key: string): Promise<boolean>
}
