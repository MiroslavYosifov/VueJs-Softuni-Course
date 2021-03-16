<template>
    <nav class="issue-nav">
        <button></button>
        <button 
            class="accept" 
            data-status="accept"
            v-if="
                status === 'waiting for approval' && 
                (authUserInfo.userId === projectCreatorId || 
                authUserInfo.userId === featureCreatorId || 
                authUserInfo.roles.includes('admin'))"
            @click.prevent="changeIssueStatus">
            Accept
        </button>

        <button 
            class="decline"
            v-if="
                status != 'fixed' && 
                (authUserInfo.userId === projectCreatorId || 
                authUserInfo.userId === featureCreatorId || 
                authUserInfo.roles.includes('admin'))" 
            @click="deleteIssue">
            Decline
        </button>

        <button 
            class="fixed"
            data-status="fixed"
            v-if="
                status != 'fixed' &&
                (authUserInfo.roles.includes('developer') ||
                authUserInfo.roles.includes('admin'))" 
            @click.prevent="changeIssueStatus">
            Fixed
        </button>
    </nav>
</template>

<script>

import axiosIssue from '../../services/issue-axios';

export default {
    props: {
        issueId: {
            type: String,
            required: true,
        },
        projectCreatorId: {
            type: String,
            required: true,
        },
        featureCreatorId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    },
    data () {
      return {
   
      }
    },
    computed: {
        authUserInfo() {
            return this.$store.getters.authUserInfo;
        }
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
        },
        async changeIssueStatus (e) {
            const status = e.currentTarget.dataset.status;
            const data = {
                status: status
            }
            try {
                const resUpdatedIssue = await axiosIssue.changeIssueStatus(this.issueId, data);
                const emitInfo = { ...resUpdatedIssue.data, type: 'issue' };
                this.$emit('on-issue-update-status', emitInfo);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style >

.issue-nav {
  display: flex;
}

.issue-nav button:first-child {
    background: none;
    border: none;
    margin-left: auto;
}

.accept,
.decline,
.fixed {
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

.fixed {
 background: rgb(184, 140, 176);
}

</style>
