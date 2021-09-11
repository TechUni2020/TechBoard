<template lang="pug">
div
  canvas.full-height(id="canvas" class="bg-gray-50 min-h-screen" v-on:wheel="onScroll")
    p deltaY: {{ deltaY }}
    p deltaX: {{ deltaX }}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as _ from 'lodash'

export default defineComponent({
  name: 'Board',
  emits: ['transform-changed'],
  props: {
    transform: {
      type: Object,
      require: true,
      default: () => {
        return { x: 0.0, y: 0.0, scale: 1.0 }
      },
    },
  },
  setup(_, context) {
    const deltaY = ref('')
    const deltaX = ref('')

    const onScroll = (event: WheelEvent) => {
      event.preventDefault()
      scale += event.deltaY * -0.01

      // Restrict scale
      scale = Math.min(Math.max(0.125, scale), 4)

      // Apply scale transform
      el.style.transform = `scale(${scale})`
      // const transform = { x: 0.0, y: 0.0, scale: 1.0 }
      // if (event.ctrlKey) {
      //   transform.scale = transform.scale - event.deltaY * 0.005
      // } else {
      //   transform.x = transform.x + (event.deltaX * 0.5) / transform.scale
      //   transform.y = transform.y + (event.deltaY * 0.5) / transform.scale
      // }
      // changeTransform(transform)
      deltaY.value += event.deltaY
      deltaX.value += event.deltaX
      // console.log(`Y座標：${event.deltaY}`)
      // console.log(`X座標：${event.deltaX}`)
    }
    let scale = 1
    const el = document.querySelector('div')
    el.onwheel = onScroll

    const changeTransform = (transform) => {
      context.emit('transform-changed', transform)
      console.log(transform)
      console.log('emitしてます')
    }

    onMounted(() => {
      const canvas = document.getElementById('canvas')
      if (!(canvas instanceof HTMLCanvasElement)) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const ctx = canvas.getContext('2d')
      if (ctx === null) return
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 0.03
      for (let h = 0; h < 1000; h++) {
        const y = 100 * h
        for (let i = 0; i < 2000; i++) {
          const x = 100 * i
          if (ctx !== null) {
            ctx.strokeRect(x, y, 100, 100)
          }
        }
      }
      console.log(ctx)
    })

    return {
      deltaY,
      deltaX,
      onScroll,
    }
  },
})
</script>
<style scoped></style>
