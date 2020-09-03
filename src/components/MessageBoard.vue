<template>
  <v-container>
    <message-card
      v-for="(message, i) in messages"
      :key="i"
      :message="message"
      :comments="comments"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MessageCard from "@/components/MessageCard.vue";
import { Unsubscribe } from "firebase";
import { db } from "@/plugins/firebase";

@Component({
  components: {
    MessageCard,
  },
})
export default class MessageBoard extends Vue {
  messageDetacher: Unsubscribe | undefined = undefined;
  commentDetacher: Unsubscribe | undefined = undefined;
  messages: Array<Record<string, any>> = [];
  comments: Array<Record<string, any>> = [];

  created() {
    this.messageDetacher = db
      .collection("message-board")
      .orderBy("timeCreated", "desc")
      .onSnapshot((snapshot) => {
        this.messages = snapshot.docs.map((doc) => {
          return Object.assign(doc.data());
        });
      });

    this.commentDetacher = db
      .collectionGroup("comments")
      .orderBy("timeCreated")
      .onSnapshot((snapshot) => {
        this.comments = snapshot.docs.map((doc) => {
          return Object.assign(doc.data());
        });
      });
  }

  destoryed() {
    this.messageDetacher && this.messageDetacher();
    this.commentDetacher && this.commentDetacher();
  }
}
</script>