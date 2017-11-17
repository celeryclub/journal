<template>
  <div>
    <h1>Edit {{ $route.params.noteId }}</h1>
    <NoteForm :note="note" @save="save($event)" />
  </div>
</template>

<script>
import api from '@/js/api'
import NoteForm from '@/js/components/NoteForm'

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
