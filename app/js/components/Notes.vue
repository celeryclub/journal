<template>
  <ul>
    <li v-for="(note, index) in notes">{{ note.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Notes',
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
}
</script>
