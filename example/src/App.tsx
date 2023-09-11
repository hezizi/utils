export default function App() {
  return (
    <section class="min-h-screen p-5">
      <header class="text-center">
        <h3 class="text-2xl mb-10">@yuci/utils</h3>
      </header>

      <main class="grid grid-cols-4 gap-6">
        <Debounce />
        <Throttle />
        <CapitalizeFirstLetter />
        <KebabToCamel />
      </main>
    </section>
  )
}
