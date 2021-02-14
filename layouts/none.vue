<template>
  <nuxt class="no-overflow" />
</template>

<script>
export default {
  data() {
    return {};
  },

  head() {
    return {
      bodyAttrs: {
        class: 'no-overflow',
      },
      htmlAttrs: {
        class: 'no-overflow',
      },
    };
  },
};
</script>

<style>
.no-overflow {
  overflow: hidden !important;
}
</style>
