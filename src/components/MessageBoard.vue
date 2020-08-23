/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <v-container>
    <message-card v-for="(message, i) in messages" :key="i" :message="message" />
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
  detacher: Unsubscribe | undefined = undefined;
  messages: Array<Record<string, any>> = [];

  created() {
    this.detacher = db.collection("message-board").onSnapshot((snapshot) => {
      this.messages = snapshot.docs.map((doc) => {
        return Object.assign(doc.data());
      });
    });
  }
}
</script>