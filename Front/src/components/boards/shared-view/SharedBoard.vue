<template lang="pug">
canvas.full-height(
  ref="canvas"
  :width="width" 
  :height="height"
  v-on:wheel='onScroll',
  @mouseover='onMouseOver',
  @mouseleave='onMouseLeave',
  @mousemove='onDrag',
  @mouseup='isClickNow = false',
  @mousedown='isClickNow = true',
  class="bg-gray-50 min-h-screen"
)
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import * as lodash from 'lodash'

interface Transform {
  x: number
  y: number
  scale: number
}
export default defineComponent({
  name: 'SharedBoard',
  props: {
    transform: {
      type: Object as PropType<Transform>,
      require: true,
    },
  },
  emits: ['transform-changed'],
  setup(props, context) {
    const _ = lodash
    const canvas = ref<HTMLCanvasElement | null>(null)
    const width: number = window.innerWidth
    const height: number = window.innerHeight

    const draw = () => {
      const ctx = canvas.value.getContext('2d')
      if (ctx === null) return
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 0.03
      for (let h = 0; h < 20; h++) {
        const y = 100 * h
        for (let i = 0; i < 38; i++) {
          const x = 100 * i
          if (ctx !== null) {
            ctx.strokeRect(x, y, 100, 100)
          }
        }
      }
    }

    onMounted(() => {
      draw()
    })

    const onScroll = (event: WheelEvent) => {
      event.preventDefault()
      const transform = _.cloneDeep(props.transform)
      if (event.ctrlKey) {
        transform.scale = transform.scale - event.deltaY * 0.005
      } else {
        transform.x = transform.x + (event.deltaX * 0.5) / transform.scale
        transform.y = transform.y + (event.deltaY * 0.5) / transform.scale
      }
      console.log(`Y座標：${transform.x}`)
      console.log(`X座標：${transform.y}`)
      changeTransform(transform)
    }

    const changeTransform = (transform: Transform) => {
      console.log(`${transform}`)
      context.emit('transform-changed', transform)
    }

    return {
      canvas,
      width,
      height,
      onScroll,
      changeTransform,
    }
  },
})
</script>
