import type { App } from 'vue'

const modules = import.meta.glob('./components/*.tsx')

export default async (app: App) => {
  for (const mod of Object.values(modules)) {
    const list = (await mod()) as Record<string, any>
    app.component(list.default.name, list.default)
  }
}
