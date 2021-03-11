<template>
    <nav class="issue-nav">
        <button class="accept">Accept</button>
        <button @click="deleteIssue" class="decline">Decline</button>
        <button class="edit">Edit</button>
        <button @click="deleteIssue" class="decline">Delete</button>
    </nav>
</template>

<script>

import axiosIssue from '../../services/issue-axios';

export default {
    props: {
        issueId: {
            type: String,
            required: true,
        }
    },
    data () {
      return {
   
      }
    },
    computed: {
      
    },
    methods: {
        async deleteIssue() {
            try {
                const resDeletedIssue = await axiosIssue.deleteIssue(this.issueId);
                const emitInfo = { ...resDeletedIssue.data, type: "issue" };
                this.$emit('on-issue-delete', emitInfo);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style>

.issue-nav ,
.issue-nav{
  display: flex;
}

.accept,
.decline,
.edit {
  padding: 0.4em 1em;
  border: none;
  cursor: pointer;
  margin-left: 0.4em;
  color: white;
}

.accept {
  margin-left: auto;
  background: rgb(164, 187, 128);
}

.decline {
  background: rgb(221, 91, 91);
}

.edit {
 background: rgb(99, 139, 214);
}

</style>
