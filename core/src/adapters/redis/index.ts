
export interface RedisAdapterOptions {
  connectionString: string,
  /* The prefix to use in all redis keys, defaults to miniurl*/
  prefix?: string
}
