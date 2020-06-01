<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Your Badge</p>
    </header>
    <section class="modal-card-body">
      <img :src="badgeUrl" />
      <a :href="badgeUrl">Link</a>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["badgeUrl"]
};
</script>