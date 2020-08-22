<template>
  <v-dialog v-model="dialog" persistant max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        :style="styles"
        color="secondary"
        fab
        fixed
        rel="noopener"
        right
        target="_blank"
        top
        v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <message-form v-on:cancel-dialog="handleDialog()" />
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MessageForm from "@/components/MessageForm.vue";

@Component({
  components: {
    MessageForm,
  },
})
export default class Cta extends Vue {
  dialog = false;

  handleDialog() {
    this.dialog = !this.dialog;
  }

  get styles() {
    return {
      marginTop: `${this.$vuetify.application.top}px`,
    };
  }
}
</script>