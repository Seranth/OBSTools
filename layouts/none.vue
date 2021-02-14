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
