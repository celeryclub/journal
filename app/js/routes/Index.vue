<template>
  <ul>
    <Note v-for="(note, index) in notes" :key="note.id" :note="note" />
  </ul>
</template>

<script>
import api from '@/js/api'
import Note from '@/js/components/Note'

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
