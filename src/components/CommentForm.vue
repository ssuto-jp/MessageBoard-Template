<template>
  <v-card>
    <v-form ref="form">
      <v-card-title>
        <span class="headline">Comment Form</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="name" :counter="nameCount" :rules="nameRules"></v-text-field>
        <v-container fluid>
          <v-textarea
            label="Comment"
            v-model="comment"
            filled
            auto-grow
            rows="3"
            :counter="commentCount"
            :rules="commentRules"
          ></v-textarea>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn class="white--text" color="blue" @click="handlePost()">Post</v-btn>
        <v-btn @click="handleCancel()">Cancel</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CommentForm extends Vue {
  name = "";
  comment = "";
  nameCount = 10;
  commentCount = 1000;
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (!!v && v.length <= this.nameCount) ||
      `Name must be less than ${this.nameCount} characters`,
  ];
  commentRules = [
    (v: string) => !!v || "Comment is required",
    (v: string) =>
      (!!v && v.length <= this.commentCount) ||
      `Comment must be less than ${this.commentCount} characters`,
  ];

  handlePost() {
    console.log("post");
  }

  handleCancel() {
    console.log("cancel");
    this.$emit("cancel-dialog");
    this.handleReset();
  }

  handleReset() {
    (this.$refs.form as Vue & { reset: () => boolean }).reset();
  }

  get validate(): boolean {
    return (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }
}
</script>