<template>
    <div class="sidebar">
        <nav>
            <ul>
                <li><i @click.prevent="hideSidebar" class="fas fa-window-close"></i></li>
            </ul>
        </nav>
        <div>
            <NoteForm @on-note-submit="onNoteSubmit"/>
            <div class="notes-container">
                <header>
                    <h3>Notes</h3>
                </header>
                <div class="notes-list-container">
                    <div class="note-card" 
                        v-for="note of getNotes" :key="note._id">
                        <NoterCard
                            :noteId="note._id"
                            :title="note.title"
                            :description="note.description"
                            :date="note.date"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import vuescroll from 'vuescroll';

import NoteForm from '../note/NoteForm.vue';
import NoterCard from '../note/NoteCard.vue';

import noteAxios from '../../services/note-axios'

export default {
  props: {

  },
  components: {
    // vuescroll,
    NoteForm,
    NoterCard
  },
  data () {
      return {
        notes: [],
        // ops: {
        //     vuescroll: {
        //         mode: 'native',
        //     },
        //     scrollPanel: {
        //         initialScrollY: false,
        //         initialScrollX: false,
        //         scrollingX: true,
        //         scrollingY: true,
        //         speed: 300,
        //         easing: undefined,
        //         verticalNativeBarPos: 'right'
        //     },
        //     rail: {},
        //     bar: {}
        // }
      }
  },
  computed: {
    getNotes() {
        return this.notes;
    }
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('showHideSidebar');
    },
    onNoteSubmit(note) {
      this.notes.push(note);
    },
  },
  async created() {
      try { 
          const resNote = await noteAxios.listNotes();
          this.notes = resNote.data;
      } catch (error) {
          console.log(error);
      }
  }
};
</script>

<style>


.sidebar {
    padding: 0 0.2em;
    background: rgb(240, 240, 240);
}

.sidebar nav {
    width: 100%;
    padding: 1em 1.4em;
}

.sidebar nav ul {
    width: 100%;
}

.sidebar nav ul li:first-child {
    /* margin-left: auto; */
}

.sidebar nav ul li {
    display: block;
    width: 2em;
    cursor: pointer;
}

.sidebar nav ul li i {
    display: block;
    font-size: 3em;;
    color: rgb(221, 98, 98);
}


.notes-container header {
    padding: 0.4em;
    text-align: center;
}

.notes-list-container {
    height: 34em;
    padding: 0 0.4em;
    overflow-y: scroll;
    scrollbar-width: 0.6em;
    scrollbar-color: var(--scroll-bar-color) var(--scroll-bar-background-color);
}

.note-card {
    padding: 1em;
    margin-top: 0.4em;
    background: white;
}

.note-card:last-child {
    margin-bottom: 4em;
}

::-webkit-scrollbar {
  width: 0.6em;
}

::-webkit-scrollbar-track {
  background: var(--scroll-bar-background-color); /* color of the tracking area */
  border-radius: 0.2em;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color); /* color of the scroll thumb */
  border-radius: 0.2em; /* roundness of the scroll thumb */
}

</style>