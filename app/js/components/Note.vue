<template>
  <li>{{ note.name }}</li>
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
