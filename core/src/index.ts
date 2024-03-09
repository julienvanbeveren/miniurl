import { RedisAdapter } from "./adapters/redis/RedisAdapter"
import { InlineAdapter } from "./adapters/inline/InlineAdapter"

type Adapter = RedisAdapter | InlineAdapter

export { RedisAdapter, InlineAdapter, Adapter }
