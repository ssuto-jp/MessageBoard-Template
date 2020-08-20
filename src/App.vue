<template>
  <v-app>
    <core-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CoreView from "@/components/View.vue";

@Component({
  components: {
    CoreView,
  },
})
export default class App extends Vue {}
</script>
