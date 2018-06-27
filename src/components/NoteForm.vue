<template>
  <div class="codemirror-wrapper">
    <codemirror :value="note.body" :options="options"></codemirror>
    <button @click="$emit('save', note.body)">Save</button>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
import 'codemirror/mode/markdown/markdown'

export default {
  name: 'Form',
  components: {
    codemirror,
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: {
        mode: 'markdown',
        lineWrapping: true,
      },
    }
  },
}
</script>

<style scoped>
.codemirror-wrapper {
  border: 1px solid #ccc;
  font-family: 'Lato', sans-serif !important;
}
</style>
