import { defineComponent, ref } from 'vue'
import { debounce } from '@yuci/utils'

export default defineComponent({
  name: 'Debounce',
  setup() {
    const count = ref(0)

    // 默认延迟300ms
    const onClick = debounce(() => {
      count.value++
    })

    // 默认1000ms
    const onClick2 = debounce(() => {
      count.value++
    }, 1000)

    return () => (
      <>
        <h3 class="text-lg mb-3">{count.value}</h3>
        <a-space>
          <a-button type="primary" onClick={onClick}>
            300ms Delay
          </a-button>

          <a-button type="primary" onClick={onClick2}>
            1s Delay
          </a-button>
        </a-space>
      </>
    )
  }
})
