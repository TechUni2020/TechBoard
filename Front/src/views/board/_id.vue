<template>
  <SharedBoard />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SharedBoard from '../../components/boards/shared-view/SharedBoard.vue'

export default defineComponent({
  name: 'Board',
  components: { SharedBoard },
  setup() {
    return {}
  },
})
</script>
