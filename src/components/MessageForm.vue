<template>
  <v-card>
    <v-form ref="form">
      <v-card-title>
        <span class="headline">Message Form</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Title" v-model="title" :counter="titleCount" :rules="titleRules"></v-text-field>
        <v-text-field label="Name" v-model="name" :counter="nameCount" :rules="nameRules"></v-text-field>
        <v-container fluid>
          <v-textarea
            label="Message"
            v-model="content"
            filled
            auto-grow
            rows="3"
            :counter="contentCount"
            :rules="contentRules"
          ></v-textarea>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn class="white--text" color="blue" @click="handlePost()">Post</v-btn>
        <v-btn v-on:click="handleCancel()">Cancel</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { db, firestore } from "@/plugins/firebase";

@Component
export default class MessageForm extends Vue {
  title = "";
  name = "";
  content = "";
  titleCount = 30;
  nameCount = 10;
  contentCount = 1000;
  titleRules = [
    (v: string) => !!v || "Title is required",
    (v: string) =>
      (!!v && v.length <= 30) || "Title must be less than 30 characters",
  ];
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (!!v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  contentRules = [
    (v: string) => !!v || "Message is required",
    (v: string) =>
      (!!v && v.length <= 1000) || "Message must be less than 1000 characters",
  ];

  async handlePost() {
    if (this.validate) {
      const doc = db.collection("message-board").doc();
      await doc.set({
        postId: doc.id,
        timeCreated: firestore.FieldValue.serverTimestamp(),
        title: this.title,
        name: this.name,
        content: this.content,
      });

      this.handleCancel();
    } else {
      console.log("Failed post");
    }
  }

  handleCancel() {
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