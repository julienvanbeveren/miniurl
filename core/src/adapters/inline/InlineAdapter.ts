import { Adapter } from "../Adapter"

export class InlineAdapter implements Adapter {

  private redirects: InlineAdapterOptions["redirects"]

  constructor(options: InlineAdapterOptions) {
    this.redirects = options.redirects
  }

  getMiniUrl(key: string): Promise<string | boolean> {
    throw new Error("Method not implemented.")
  }

  setMiniUrl(key: string, url: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }

  delMiniUrl(key: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }

  checkAuth(token: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
}

interface InlineAdapterOptions {
  /* an object mapping a path to an url to redirect to*/
  redirects: Record<string, string>
}
