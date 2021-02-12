<template>
  <div class="snes-controller">
    <div
      v-show="key.w"
      class="io-icon"
      style="top:224px;left: 222px;height:51px;width:51px;"
    ></div>
    <div
      v-show="key.a"
      class="io-icon"
      style="top:274px;left: 172px;height:51px;width:51px;"
    ></div>
    <div
      v-show="key.s"
      class="io-icon"
      style="top:325px;left: 222px;height:51px;width:51px;"
    ></div>
    <div
      v-show="key.d"
      class="io-icon"
      style="top:274px;left: 272px;height:51px;width:51px;"
    ></div>
    <div
      v-show="key.up"
      class="io-icon"
      style="top:199px;left: 712px;height:58px;width:58px;border-radius: 100%;"
    ></div>
    <div
      v-show="key.left"
      class="io-icon"
      style="top:266px;left: 644px;height:58px;width:58px;border-radius: 100%;"
    ></div>
    <div
      v-show="key.right"
      class="io-icon"
      style="top:274px;left: 793px;height:58px;width:58px;border-radius: 100%;"
    ></div>
    <div
      v-show="key.down"
      class="io-icon"
      style="top:342px;left: 725px;height:58px;width:58px;border-radius: 100%;"
    ></div>
    <div
      v-show="key.e"
      class="io-icon"
      style="top:110px;left: 235px;height:23px;width:113px;border-radius: 0 23px 23px 0"
    ></div>
    <div
      v-show="key.lctrl"
      class="io-icon"
      style="top:110px;left: 653px;height:23px;width:113px;border-radius: 23px 0 0 23px"
    ></div>
    <div
      v-show="key.q"
      class="io-icon"
      style="top:321px;left: 404px;height:18px;width:70px;border-radius: 23px 23px 23px 23px;transform: rotate(135deg)"
    ></div>
    <div
      v-show="key.lshift"
      class="io-icon"
      style="top:321px;left: 499px;height:18px;width:70px;border-radius: 23px 23px 23px 23px;transform: rotate(135deg)"
    ></div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  layout: 'none',
  data() {
    return {
      key: {
        up: false,
        left: false,
        down: false,
        right: false,
        w: false,
        a: false,
        s: false,
        d: false,
        e: false,
        lctrl: false,
        q: false,
        lshift: false
      }
    };
  },
  mounted() {
    const self = this;
    const socket = io('http://localhost:3000');
    socket.on('keydown', function(event) {
      console.log('Key pressed:');
      console.log(event.rawcode);
      if (event.rawcode === 38) {
        self.key.up = true;
      }
      if (event.rawcode === 37) {
        self.key.left = true;
      }
      if (event.rawcode === 40) {
        self.key.down = true;
      }
      if (event.rawcode === 39) {
        self.key.right = true;
      }
      if (event.rawcode === 87) {
        self.key.w = true;
      }
      if (event.rawcode === 65) {
        self.key.a = true;
      }
      if (event.rawcode === 83) {
        self.key.s = true;
      }
      if (event.rawcode === 68) {
        self.key.d = true;
      }
      if (event.rawcode === 69) {
        self.key.e = true;
      }
      if (event.rawcode === 163) {
        self.key.lctrl = true;
      }
      if (event.rawcode === 81) {
        self.key.q = true;
      }
      if (event.rawcode === 161) {
        self.key.lshift = true;
      }
    });
    socket.on('keyup', function(event) {
      if (event.rawcode === 38) {
        self.key.up = false;
      }
      if (event.rawcode === 37) {
        self.key.left = false;
      }
      if (event.rawcode === 40) {
        self.key.down = false;
      }
      if (event.rawcode === 39) {
        self.key.right = false;
      }
      if (event.rawcode === 87) {
        self.key.w = false;
      }
      if (event.rawcode === 65) {
        self.key.a = false;
      }
      if (event.rawcode === 83) {
        self.key.s = false;
      }
      if (event.rawcode === 68) {
        self.key.d = false;
      }
      if (event.rawcode === 69) {
        self.key.e = false;
      }
      if (event.rawcode === 163) {
        self.key.lctrl = false;
      }
      if (event.rawcode === 81) {
        self.key.q = false;
      }
      if (event.rawcode === 161) {
        self.key.lshift = false;
      }
    });
  }
};
</script>

<style lang="less">
.snes-controller {
  display: block;
  width: 1000px;
  height: 600px;
  background: url('~assets/images/snes-controller.png');
  background-size: contain;
  //background-color: #3b8070;
  position: absolute;
}
.io-icon {
  position: absolute;
  z-index: 999;
  display: block;
  background: darkorange;
}
</style>
