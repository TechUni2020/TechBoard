<template>
  <div class="flex flex-wrap">
    <div
      v-for="board in boards"
      :key="board"
      class="
        m-4
        px-3
        py-2
        h-60
        w-48
        bg-white
        rounded-md
        shadow
        hover:bg-gray-100
      "
      @click="selectBoard(board)"
    >
      <div class="mt-5">
        <img v-bind:src="image" class="w-48" />
      </div>
      <p>{{ board.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Board } from '../../store/board'

export default defineComponent({
  name: 'BoardsList',
  emits: ['select-board'],
  props: {
    boards: {
      type: Object as PropType<Board>,
      default: null,
    },
  },
  setup(props, context) {
    const selectBoard = (board: Board) => {
      console.log(board)
      context.emit('select-board', board)
    }

    return {
      image: 'src/assets/logo.png',
      selectBoard,
    }
  },
})
</script>
