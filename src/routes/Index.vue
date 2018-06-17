<template>
  <ul>
    <Note v-for="(note, index) in notes" :key="note.id" :note="note" />
  </ul>
</template>

<script>
import api from '@/api'
import Note from '@/components/Note'

export default {
  name: 'Notes',
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
    }
  },
  mounted() {
    api.getNotes().then((data) => {
      this.notes = data.notes
    })
  },
}
</script>
