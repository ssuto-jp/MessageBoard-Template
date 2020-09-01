<template>
  <base-form
    v-bind.sync="items"
    :header="header"
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
import { Component, Prop } from "vue-property-decorator";
import { db, firestore } from "@/plugins/firebase";
import BaseForm from "@/components/BaseForm.vue";

@Component({
  components: {
    BaseForm,
  },
})
export default class CommentForm extends Vue {
  @Prop(String) readonly postId: string | undefined;

  header = "Comment";
  items = {
    name: "",
    content: "",
  };
  nameMaxLength = 10;
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (!!v && v.length <= this.nameMaxLength) ||
      `Name must be less than ${this.nameMaxLength} characters`,
  ];
  contentMaxLength = 1000;
  contentRules = [
    (v: string) => !!v || "Comment is required",
    (v: string) =>
      (!!v && v.length <= this.contentMaxLength) ||
      `Comment must be less than ${this.contentMaxLength} characters`,
  ];

  async handlePost() {
    await db
      .collection("message-board")
      .doc(this.postId)
      .collection("comments")
      .add({
        postId: this.postId,
        timeCreated: firestore.FieldValue.serverTimestamp(),
        name: this.items.name,
        content: this.items.content,
      });
  }

  handleCancel() {
    this.$emit("cancel-dialog");
  }
}
</script>