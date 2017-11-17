<template>
  <li><router-link v-if="note" :to="{ name: 'edit', params: { noteId: note.id }}">{{ note.name }}</router-link></li>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
}
</script>
