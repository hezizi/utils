import { defineComponent, ref } from 'vue'
import { capitalizeFirstLetter } from '@yuci/utils'

const name = 'CapitalizeFirstLetter'

export default defineComponent({
  name,
  setup() {
    const text = ref('hello yuci')

    const onInput = (val: string) => {
      text.value = val
    }

    return () => (
      <Block name={name}>
        <p class="text-lg mb-3">{capitalizeFirstLetter(text.value)}</p>
        <a-input onInput={onInput} defaultValue={text.value} />
      </Block>
    )
  }
})
