<template>
  <ul>
    <Note v-for="(note, index) in notes" :key="note.id" :note="note" />
  </ul>
</template>

<script>
import Note from './Note'

export default {
  name: 'Notes',
  components: {
    Note,
  },
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
}
</script>
