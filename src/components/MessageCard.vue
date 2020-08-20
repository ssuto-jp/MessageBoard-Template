<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card color="#FFFFFF">
        <v-card-title class="pa-3">Title</v-card-title>
        <v-card-subtitle class="pa-3">Name, Date</v-card-subtitle>
        <v-card-text class="pa-3 font-weight-medium">Content</v-card-text>
        <div class="pa-3" align="end">
          <v-btn>コメントする</v-btn>
        </div>

        <comment-card />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CommentCard from "@/components/CommentCard.vue";

@Component({
  components: {
    CommentCard,
  },
})
export default class MessageCard extends Vue {}
</script>