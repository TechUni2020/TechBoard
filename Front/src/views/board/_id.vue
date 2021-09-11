<template lang="pug">
div.full-height(ref="mainwindow")
  .board-page(@wheel='onScroll', @scroll='onScroll')
    SharedBoard(:transform='sharedBoardTransform')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SharedBoard from '../../components/boards/shared-view/SharedBoard.vue'
import Const from '../../libs/const'

export default defineComponent({
  name: 'Board',
  components: { SharedBoard },
  setup() {
    const minTransformScale = 10 / 16 / Const.fontSize.small
    return {}
  },
})
</script>
<style>
.board-page {
  height: 100%;
  overflow-y: hidden;
  background-color: #eeeeee;
}
</style>
