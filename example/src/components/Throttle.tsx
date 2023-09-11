import { defineComponent, ref } from 'vue'
import { throttle } from '@yuci/utils'

const name = 'Throttle'

export default defineComponent({
  name,
  setup() {
    const count = ref(0)

    // 默认延迟300ms
    const onClick = throttle(() => {
      count.value++
    })

    // 默认1000ms
    const onClick2 = throttle(() => {
      count.value++
    }, 1000)

    return () => (
      <Block name={name}>
        <p class="text-lg mb-3">{count.value}</p>
        <a-space>
          <a-button type="primary" onClick={onClick}>
            300ms Delay
          </a-button>

          <a-button type="primary" onClick={onClick2}>
            1s Delay
          </a-button>
        </a-space>
      </Block>
    )
  }
})
