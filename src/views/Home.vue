<template>
  <div id="home">
    <message-board />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MessageBoard from "@/components/MessageBoard.vue";

@Component({
  components: {
    MessageBoard,
  },
})
export default class Home extends Vue {}
</script>
