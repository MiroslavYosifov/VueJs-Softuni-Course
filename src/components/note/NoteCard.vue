<template>
  <div :id="noteId">
    <section>
      <div>
        <span class="note-delete-button">
          <i :id="noteId" @click.prevent="onDeleteNote" class="fas fa-window-close"></i>
        </span>
      </div>
      <h4>Title: {{title}}</h4>
      <p>Created On: {{dateFormatted(date)}}</p>
      <p>Description: {{description}}</p>
    </section>
  </div>
</template>

<script>

import dateOptions from '../../mixins/dateOptions';

import axiosNote from '../../services/note-axios';

export default {
  mixins: [dateOptions],
  props: {
    noteId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
  },
  computed: {

  },
  methods: {
    async onDeleteNote(e) {
      const noteId = e.target.id;

      try {
        const resDeletedNote = await axiosNote.deleteNote(noteId);
        this.$emit('on-delete-note', resDeletedNote.data);
      } 
      catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style>

.note-delete-button {
  display: block;
  width: 1em;
  margin-left: auto;
}

.note-delete-button i {
  display: block;
  color: rgb(214, 67, 67);
}

.note-delete-button i:hover {
  cursor: pointer;
}
</style>
