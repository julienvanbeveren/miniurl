import { Adapter } from "@miniurl/core"
import { Router } from "express"

export interface MiniUrlOptions {
  path: `/${string}`
  adapter: Adapter
}

export function miniUrl(options: MiniUrlOptions) {
  const router = Router()

  router.get(`${options.path}/:suffix`, async (req, res, next) => {
    const suffix = req.params.suffix
    const adapter = options.adapter
    const redirectUrl = await adapter.getMiniUrl(suffix)

    if (typeof redirectUrl !== "string") {
      return next()
    }

    return res.redirect(redirectUrl)
  })

  return router
}
