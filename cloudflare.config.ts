import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "a1064032c43ba3189ba6f91468a55249",
  worker: defineWorker({
    name: "guidevale",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-26",
    compatibilityFlags: ["nodejs_compat", "nodejs_compat_populate_process_env"],
    domains: ["guidevale.com", "www.guidevale.com"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      SITE_URL: bindings.text("https://guidevale.com"),
      AMAZON_ASSOCIATE_TAG: bindings.secret(),
    },
  }),
});
