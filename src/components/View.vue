<template>
  <v-main id="home">
    <router-view />
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class View extends Vue {}
</script>