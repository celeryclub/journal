<template>
  <div>
    <textarea></textarea>
    <button @click="$emit('save', note.body)">Save</button>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';

export default {
  name: 'Form',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    var simplemde = new SimpleMDE({
      initialValue: this.note.body,
      spellChecker: false,
      status: false,
    })
  },
}
</script>
