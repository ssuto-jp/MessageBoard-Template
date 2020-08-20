<template>
  <v-col>
    <v-card color="#FFFFFF">
      <v-card-subtitle class="pa-3">Name, Date</v-card-subtitle>
      <v-card-text class="pa-3 font-weight-medium">Content</v-card-text>
      <div class="pa-3" align="end">
        <v-btn>コメントする</v-btn>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CommentCard extends Vue {}
</script>