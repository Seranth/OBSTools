<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  layout: 'none',
  data() {
    return {
      title: ''
    };
  },
  mounted() {
    const self = this;
    const socket = io('http://localhost:3000');
    socket.on('keydown', function(event) {
      self.title = event;
    });
    socket.on('keyup', function(event) {
      self.title = event;
    });
  }
};
</script>

<style lang="less">
.io-icon {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
