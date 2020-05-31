<template>
  <div id="app">
    <div class="struct-form">
      <b-field label="Framework/Language Name">
        <b-input></b-input>
      </b-field>
      <b-button type="is-primary">Generate</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html, body {
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
