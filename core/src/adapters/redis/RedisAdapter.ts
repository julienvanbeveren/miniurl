import { Adapter } from "../Adapter";
import { RedisAdapterOptions } from ".";
import { RedisClientType, createClient } from "redis";


export class RedisAdapter implements Adapter {

  private client: RedisClientType;
  private prefix: string;

  constructor(options: RedisAdapterOptions) {
    this.client = createClient({
      url: options.connectionString
    });
    this.prefix = options.prefix || "miniurl"
  }

  async setMiniUrl(key: string, url: string) {
    try {
      await this.client.set(`${this.prefix}:url:${key}`, url)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async getMiniUrl(key: string) {
    try {
      const url = await this.client.get(`${this.prefix}:url:${key}`)
      return url || false
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async delMiniUrl(key: string) {
    try {
      await this.client.get(`${this.prefix}:url:${key}`)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async checkAuth(token: string) {
    try {

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

