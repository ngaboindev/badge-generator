<template>
  <div id="app">
    <div class="struct-form">
      <h1 class="title">Badge Generator</h1>
      <b-field label="Type">
        <b-select v-model="type">
          <option value="framework">Framework</option>
          <option value="language">Language</option>
        </b-select>
      </b-field>
      <b-field label="Framework/Language Name">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Icon Name" message="Get this from simpleicons.org">
        <b-input v-model="icon"></b-input>
      </b-field>
      <b-field
        label="Badge Color"
        message="Hex string. Get this from simpleicons.org, too"
      >
        <b-input v-model="color"></b-input>
      </b-field>

      <b-button type="is-primary" @click="generate">Generate</b-button>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      name: "Vue",
      icon: "vue.js",
      type: "framework",
      color: "4FC08D",
    };
  },
  computed: {
    badgeUrl() {
      return `http://img.shields.io/static/v1?label=${
        this.type == "framework" ? "Framework" : "Language"
      }&message=${encodeURIComponent(
        this.name || "React"
      )}&color=${encodeURIComponent(
        this.color.replace(/\#/g, "") || "blue"
      )}&logo=${encodeURIComponent(
        this.icon.toLowerCase().replace(/ /g, "-") || "react"
      )}&logoColor=white&style=for-the-badge`;
    },
  },
  methods: {
    generate() {
      this.$buefy.modal.open({
        component: Modal,
        props: {
          badgeUrl: this.badgeUrl,
        },
      });
    },
  },
};
</script>

<style>
html,
body {
  /* box-sizing: border-box; */
  margin: 0;
  height: 100%;
}

#app {
  overflow: auto;
}

body {
  background-color: #f0f0f0;
  overflow: auto;
}

.struct-form {
  padding: 30px;
  max-width: 500px;
  width: 80%;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  background-color: white;
  border-radius: 10px;
}
</style>
