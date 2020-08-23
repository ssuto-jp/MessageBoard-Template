<template>
  <v-col>
    <v-card color="#FFFFFF">
      <v-card-subtitle class="pa-3">Name, Date</v-card-subtitle>
      <v-card-text class="pa-3 font-weight-medium">Content</v-card-text>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <div class="pa-3" align="end">
            <v-btn v-on="on">Comment</v-btn>
          </div>
        </template>
        <comment-form v-on:cancel-dialog="handleDialog()" />
      </v-dialog>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CommentForm from "@/components/CommentForm.vue";

@Component({
  components: {
    CommentForm,
  },
})
export default class CommentCard extends Vue {
  dialog = false;

  handleDialog() {
    this.dialog = !this.dialog;
  }
}
</script>