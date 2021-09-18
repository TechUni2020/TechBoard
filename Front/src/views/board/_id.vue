<template lang="pug">
div
  SharedBoard(
    :transform='sharedBoardTransform',
    @transform-changed='changeTransform',)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SharedBoard from '../../components/boards/shared-view/SharedBoard.vue'

interface SharedBoardTransform {
  x: number
  y: number
  scale: number
}
export default defineComponent({
  name: 'Board',
  components: { SharedBoard },

  data() {
    return {
      sharedBoardTransform: {
        x: 0.0,
        y: 0.0,
        scale: 0.8,
      } as SharedBoardTransform,
    }
  },
  setup() {
    // const changeTransform = (transform: SharedBoardTransform) => {
    //   transform.scale = this.$utils.limit(
    //     transform.scale,
    //     minTransformScale,
    //     this.$const.MAX_BOARD_SCALE
    //   )
    //   transform.x = this.$utils.limit(
    //     transform.x,
    //     this.$const.MIN_BOARD_X,
    //     this.$const.MAX_BOARD_X
    //   )
    //   transform.y = this.$utils.limit(
    //     transform.y,
    //     this.$const.MIN_BOARD_Y,
    //     this.$const.MAX_BOARD_Y
    //   )
    //   this.sharedBoardTransform = transform
    // }
    return {}
  },
})
</script>
