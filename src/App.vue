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
      <b-field label="Badge Color" message="Get this from simpleicons.org, too">
        <b-input v-model="color"></b-input>
      </b-field>

      <img :src="badgeUrl" style="display: block;margin-bottom:10px" />

      <b-button type="is-primary">Generate</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Vue",
      icon: "vue.js",
      type: "framework",
      color: "4FC08D"
    };
  },
  computed: {
    badgeUrl() {
      return `http://img.shields.io/static/v1?label=${
        this.type == "framework" ? "Framework" : "Language"
      }&message=${encodeURIComponent(
        this.name || "React"
      )}&color=${encodeURIComponent(
        this.color || "blue"
      )}&logo=${encodeURIComponent(
        this.icon || "react"
      )}&logoColor=white&style=for-the-badge`;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.struct-form {
  padding: 30px;
  width: 350px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
