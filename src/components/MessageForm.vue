<template>
  <base-form
    v-bind.sync="items"
    :header="header"
    :titleMaxLength="titleMaxLength"
    :titleRules="titleRules"
    :nameMaxLength="nameMaxLength"
    :nameRules="nameRules"
    :contentMaxLength="contentMaxLength"
    :contentRules="contentRules"
    @post="handlePost()"
    @cancel="handleCancel()"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import BaseForm from "@/components/BaseForm.vue";
import { db, firestore } from "@/plugins/firebase";

@Component({
  components: {
    BaseForm,
  },
})
export default class MessageForm extends Vue {
  items = {
    title: "",
    name: "",
    content: "",
  };
  header = "Message";
  titleMaxLength = 30;
  titleRules = [
    (v: string) => !!v || "Title is required",
    (v: string) =>
      (!!v && v.length <= this.titleMaxLength) ||
      `Title must be less than ${this.titleMaxLength} character`,
  ];
  nameMaxLength = 10;
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (!!v && v.length <= this.nameMaxLength) ||
      `Name must be less than ${this.nameMaxLength} characters`,
  ];
  contentMaxLength = 1000;
  contentRules = [
    (v: string) => !!v || "Content is required",
    (v: string) =>
      (!!v && v.length <= this.contentMaxLength) ||
      `Content must be less than ${this.contentMaxLength} characters`,
  ];

  async handlePost() {
    const doc = db.collection("message-board").doc();
    await doc.set({
      postId: doc.id,
      timeCreated: firestore.FieldValue.serverTimestamp(),
      title: this.items.title,
      name: this.items.name,
      content: this.items.content,
    });
  }

  handleCancel() {
    this.$emit("cancel-dialog");
  }
}
</script>