<template>
  <Notes :notes="notes" />
</template>

<script>
import api from './api'
import Notes from './components/Notes'

export default {
  name: 'App',
  components: {
    Notes,
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
