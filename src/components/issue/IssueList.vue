<template>
    <div class="feature-block">
      <header>
        <span><i class="fas fa-exclamation-circle"></i></span>
        <h2>Issues</h2>
      </header>
      <div class="feature-issues" v-for="issue of getIssues" :key="issue._id">
        <IssueCard
          :issueId="issue._id"
          :name="issue.name"
          :date="issue.date"
          :description="issue.description"
          :status="issue.status"
          :creator="issue.creator"
        />
        <IssueNavigation
          :issueId="issue._id"
          :projectCreatorId="issue.project.creator"
          :featureCreatorId="issue.feature.creator"
          :status="issue.status"
          @on-issue-delete="onIssueDelete"
          @on-issue-update-status="onIssueUpdateStatus"
        />
      </div>
    </div>
</template>

<script>

import IssueCard from './IssueCard.vue';
import IssueNavigation from './IssueNavigation.vue';

export default {
  props: {
    issues: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
        value: {}
    }
  },
  components: {
    IssueCard,
    IssueNavigation
  },
  computed: {
    getIssues() {
        if(this.value.type === 'deleteIssue') {
            return this.issues.filter(f => f._id !== this.value.issueId);
        }

        if(this.value.type === 'updateIssueStatus') {
            return this.issues.map(e => {
                        if(e._id === this.value.issueId) {
                            e.status = this.value.status;
                        }
                        return e;
                    });
        }

        return this.issues; 
    },
  },
  methods: {
    onIssueDelete(value) {
        this.value = value;
        this.getIssues;
    },
    onIssueUpdateStatus(value) {
        this.value = value;
        this.getIssues;
    }
  },
};
</script>

<style>

</style>
