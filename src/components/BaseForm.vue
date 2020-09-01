<template>
  <v-card>
    <v-form ref="form">
      <v-card-title>
        <span class="headline">{{header}} Form</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Title"
          @input="updateValue('title', $event)"
          :counter="titleMaxLength"
          :rules="titleRules"
        ></v-text-field>
        <v-text-field
          label="Name"
          @input="updateValue('name', $event)"
          :counter="nameMaxLength"
          :rules="nameRules"
        ></v-text-field>
        <v-container fluid>
          <v-textarea
            label="Content"
            @input="updateValue('content', $event)"
            filled
            auto-grow
            rows="3"
            :counter="contentMaxLength"
            :rules="contentRules"
          ></v-textarea>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn class="white--text" color="blue" @click="handlePost()">Post</v-btn>
        <v-btn @click="handleCancel()">Cancel</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class BaseForm extends Vue {
  @Prop({ type: String, required: true }) readonly header!: string;
  @Prop({ type: Number, required: false }) readonly titleMaxLength!: number;
  @Prop({ type: Array, required: false }) readonly titleRules!: Array<object>;
  @Prop({ type: Number, required: true }) readonly nameMaxLength!: number;
  @Prop({ type: Array, required: true }) readonly nameRules!: Array<object>;
  @Prop({ type: Number, required: true }) readonly contentMaxLength!: number;
  @Prop({ type: Array, required: true }) readonly contentRules!: Array<object>;

  updateValue(key: string, e: any) {
    this.$emit(`update:${key}`, e);
  }

  handlePost() {
    if (this.validate) {
      this.$emit("post");
      this.handleCancel();
    } else {
      console.log("Filed post!");
    }
  }

  handleCancel() {
    this.$emit("cancel");
    this.handleReset();
  }

  handleReset() {
    (this.$refs.form as Vue & { reset: () => boolean }).reset();
  }

  get validate(): boolean {
    return (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }
}
</script>