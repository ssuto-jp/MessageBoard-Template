<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card color="#FFFFFF">
        <v-card-title class="pa-3">{{ message.title }}</v-card-title>
        <v-card-subtitle
          class="pa-3"
        >{{ message.name }} {{ message.timeCreated && message.timeCreated.toDate().toLocaleString() }}</v-card-subtitle>
        <v-card-text class="pa-3 font-weight-medium">{{ message.message }}</v-card-text>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <div class="pa-3" align="end">
              <v-btn v-on="on">Comment</v-btn>
            </div>
          </template>
          <comment-form v-on:cancel-dialog="handleDialog()" :messageId="message.messageId" />
        </v-dialog>

        <comment-card
          v-for="(comment, i) in filterdComments(message.messageId)"
          :key="i"
          :comment="comment"
          :messageId="message.messageId"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import CommentCard from "@/components/CommentCard.vue";
import CommentForm from "@/components/CommentForm.vue";

@Component({
  components: {
    CommentCard,
    CommentForm,
  },
})
export default class MessageCard extends Vue {
  @Prop(Object) readonly message: object | undefined;
  @Prop({ type: Array, required: true }) readonly comments!: Array<any>;

  dialog = false;

  handleDialog() {
    this.dialog = !this.dialog;
  }

  filterdComments(messageId: string) {
    return this.comments.filter((comment) => comment.messageId == messageId);
  }
}
</script>