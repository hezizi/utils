import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Block',
  props: {
    name: String
  },
  setup(props, { slots }) {
    return () => {
      const { name } = props
      return (
        <div class="border p-5">
          <div class="text-xl font-bold mb-6">{name}</div>
          {slots.default?.()}
        </div>
      )
    }
  }
})
