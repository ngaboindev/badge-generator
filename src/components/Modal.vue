<template>
  <div class="modal-card" style="width: auto;">
    <header class="modal-card-head">
      <p class="modal-card-title">Your Badge</p>
    </header>
    <section class="modal-card-body badge-modal-content">
      <div class="badge">
        <a :href="badgeUrl"><img :src="badgeUrl" /></a>
      </div>
      <pre>{{ badgeMarkdown }}</pre>
      <div class="badge">
        <a :href="simpleBadgeUrl"><img :src="simpleBadgeUrl" /></a>
      </div>
      <pre>{{ simpleBadgeMarkdown }}</pre>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["badgeUrl", "simpleBadgeUrl", "name"],
  computed: {
    badgeMarkdown() {
      return `![${this.name}](${this.badgeUrl})`;
    },
    simpleBadgeMarkdown() {
      return `![${this.name}](${this.simpleBadgeUrl})`;
    },
  },
};
</script>

<style scoped>
.badge-modal-content {
  text-align: center;
}
.badge {
  display: block;
  margin: 10px auto;
}
</style>
