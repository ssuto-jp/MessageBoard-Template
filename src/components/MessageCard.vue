<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card color="#FFFFFF">
        <v-card-title class="pa-3">{{ message.title }}</v-card-title>
        <v-card-subtitle
          class="pa-3"
        >{{ message.name }} {{ message.timeCreated && message.timeCreated.toDate().toLocaleString() }}</v-card-subtitle>
        <v-card-text class="pa-3 font-weight-medium">{{ message.message }}</v-card-text>
        <div class="pa-3" align="end">
          <v-btn>Comment</v-btn>
        </div>

        <comment-card />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import CommentCard from "@/components/CommentCard.vue";

@Component({
  components: {
    CommentCard,
  },
})
export default class MessageCard extends Vue {
  @Prop(Object) readonly message: object | undefined;
}
</script>