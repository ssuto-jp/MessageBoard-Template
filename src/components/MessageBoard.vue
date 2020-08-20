<template>
  <v-container>
    <message-card />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MessageCard from "@/components/MessageCard.vue";

@Component({
  components: {
    MessageCard,
  },
})
export default class MessageBoard extends Vue {}
</script>