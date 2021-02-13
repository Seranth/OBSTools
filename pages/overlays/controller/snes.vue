<template>
  <div id="overlay" class="snes-controller">
    <div
      v-show="key.w"
      class="io-icon"
      style="top: 224px; left: 222px; height: 51px; width: 51px"
    ></div>
    <div
      v-show="key.a"
      class="io-icon"
      style="top: 274px; left: 172px; height: 51px; width: 51px"
    ></div>
    <div
      v-show="key.s"
      class="io-icon"
      style="top: 325px; left: 222px; height: 51px; width: 51px"
    ></div>
    <div
      v-show="key.d"
      class="io-icon"
      style="top: 274px; left: 272px; height: 51px; width: 51px"
    ></div>
    <div
      v-show="key.up"
      class="io-icon"
      style="
        top: 199px;
        left: 712px;
        height: 58px;
        width: 58px;
        border-radius: 100%;
      "
    ></div>
    <div
      v-show="key.left"
      class="io-icon"
      style="
        top: 266px;
        left: 644px;
        height: 58px;
        width: 58px;
        border-radius: 100%;
      "
    ></div>
    <div
      v-show="key.right"
      class="io-icon"
      style="
        top: 274px;
        left: 793px;
        height: 58px;
        width: 58px;
        border-radius: 100%;
      "
    ></div>
    <div
      v-show="key.down"
      class="io-icon"
      style="
        top: 342px;
        left: 725px;
        height: 58px;
        width: 58px;
        border-radius: 100%;
      "
    ></div>
    <div
      v-show="key.e"
      class="io-icon"
      style="
        top: 110px;
        left: 235px;
        height: 23px;
        width: 113px;
        border-radius: 0 23px 23px 0;
      "
    ></div>
    <div
      v-show="key.lctrl"
      class="io-icon"
      style="
        top: 110px;
        left: 653px;
        height: 23px;
        width: 113px;
        border-radius: 23px 0 0 23px;
      "
    ></div>
    <div
      v-show="key.q"
      class="io-icon"
      style="
        top: 321px;
        left: 404px;
        height: 18px;
        width: 70px;
        border-radius: 23px 23px 23px 23px;
        transform: rotate(135deg);
      "
    ></div>
    <div
      v-show="key.lshift"
      class="io-icon"
      style="
        top: 321px;
        left: 499px;
        height: 18px;
        width: 70px;
        border-radius: 23px 23px 23px 23px;
        transform: rotate(135deg);
      "
    ></div>
  </div>
</template>

<script>
if (process.client) {
  require('gamecontroller.js/dist/gamecontroller.js');
}

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
        lshift: false,
      },
    };
  },
  mounted() {
    const self = this;
    if (process.client) {
      gameControl.on('connect', (gamepad) => {
        gamepad.before('button0', () => {
          console.log('Button A pressed');
          self.key.right = true;
        });
        gamepad.after('button0', () => {
          self.key.right = false;
        });
        gamepad.before('button1', () => {
          self.key.down = true;
        });
        gamepad.after('button1', () => {
          self.key.down = false;
        });
        gamepad.before('button3', () => {
          self.key.up = true;
        });
        gamepad.after('button3', () => {
          self.key.up = false;
        });
        gamepad.before('button4', () => {
          self.key.left = true;
        });
        gamepad.after('button4', () => {
          self.key.left = false;
        });

        gamepad.before('left0', () => {
          self.key.a = true;
        });
        gamepad.after('left0', () => {
          self.key.a = false;
        });

        gamepad.before('up0', () => {
          self.key.w = true;
        });
        gamepad.after('up0', () => {
          self.key.w = false;
        });

        gamepad.before('down0', () => {
          self.key.s = true;
        });
        gamepad.after('down0', () => {
          self.key.s = false;
        });

        gamepad.before('right0', () => {
          self.key.d = true;
        });
        gamepad.after('right0', () => {
          self.key.d = false;
        });

        gamepad.before('l2', () => {
          self.key.e = true;
        });
        gamepad.after('l2', () => {
          self.key.e = false;
        });

        gamepad.before('r2', () => {
          self.key.lctrl = true;
        });
        gamepad.after('r2', () => {
          self.key.lctrl = false;
        });
      });
    }
  },
};
</script>

<style lang="less">
#overlay {
  max-width: 100%;
}
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
