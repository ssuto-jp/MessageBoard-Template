<template>
  <v-app>
    <core-view />
    <core-cta />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CoreView from "@/components/View.vue";
import CoreCta from "@/components/Cta.vue";

@Component({
  components: {
    CoreView,
    CoreCta,
  },
})
export default class App extends Vue {}
</script>
