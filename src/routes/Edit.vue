<template>
  <div>
    <h1>Edit {{ $route.params.noteId }}</h1>
    <NoteForm v-if="note" :note="note" @save="save($event)" />
    <div v-else>No note</div>
  </div>
</template>

<script>
import api from '@/api'
import NoteForm from '@/components/NoteForm'

export default {
  name: 'Edit',
  components: {
    NoteForm,
  },
  data() {
    return {
      note: {},
    }
  },
  methods: {
    save(data) {
      api.updateNoteById(this.note.id, data)
    },
  },
  mounted() {
    api.getNoteById(1).then((data) => {
      this.note = data.note
    })
  },
}
</script>
