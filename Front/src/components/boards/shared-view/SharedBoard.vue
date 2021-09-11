<template>
  <canvas id="canvas" class="bg-gray-50 min-h-screen" @wheel="onScroll">
    <p>deltaY: {{ deltaY }}</p>
    <p>deltaX: {{ deltaX }}</p>
  </canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Board',
  setup() {
    const deltaY = ref('')
    const deltaX = ref('')

    const onScroll = (event: WheelEvent) => {
      // event.preventDefault()
      deltaY.value += event.deltaY
      deltaX.value += event.deltaX
      console.log(`Y座標：${event.deltaY}`)
      console.log(`X座標：${event.deltaX}`)
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
      for (let h = 0; h < 20; h++) {
        const y = 100 * h
        for (let i = 0; i < 38; i++) {
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
