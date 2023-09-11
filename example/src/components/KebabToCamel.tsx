import { defineComponent, ref } from 'vue'
import { kebabToCamel } from '@yuci/utils'

const name = 'KebabToCamel'

export default defineComponent({
  name,
  setup() {
    const text = ref('my-name-is-yucihent')

    const onInput = (val: string) => {
      text.value = val
    }

    return () => (
      <Block name={name}>
        <p class="text-lg mb-3">{kebabToCamel(text.value)}</p>
        <a-input onInput={onInput} defaultValue={text.value} />
      </Block>
    )
  }
})
