<template>
  <table class="tracker" cellpadding="0" cellspacing="0">
    <tr>
      <td align="right">
        <img :src="iconCharge" :class="{ active: items.charge }" />
      </td>
      <td><img :src="iconIce" :class="{ active: items.ice }" /></td>
      <td><img :src="iconWave" :class="{ active: items.wave }" /></td>
      <td><img :src="iconSpazer" :class="{ active: items.spazer }" /></td>
      <td><img :src="iconPlasma" :class="{ active: items.plasma }" /></td>
    </tr>
    <tr>
      <td rowspan="3" colspan="2">
        <div style="display: block; width: 3cm"></div>
      </td>
      <td><img :src="iconVaria" :class="{ active: items.varia }" /></td>
      <td><img :src="iconGravity" :class="{ active: items.gravity }" /></td>
      <td><img :src="iconMorphBall" :class="{ active: items.morph }" /></td>
    </tr>
    <tr>
      <td><img :src="iconBombs" :class="{ active: items.bombs }" /></td>
      <td><img :src="iconSpringBall" :class="{ active: items.spring }" /></td>
      <td><img :src="iconScrew" :class="{ active: items.screw }" /></td>
    </tr>
    <tr>
      <td><img :src="iconHigh" :class="{ active: items.hijump }" /></td>
      <td><img :src="iconSpace" :class="{ active: items.space }" /></td>
      <td><img :src="iconSpeed" :class="{ active: items.speed }" /></td>
    </tr>
  </table>
</template>

<script>
import io from 'socket.io-client';
import iconMorphBall from '~/assets/images/powerups/morph-ball.png';
import iconSpringBall from '~/assets/images/powerups/spring-ball.png';
import iconScrew from '~/assets/images/powerups/screw.png';
import iconBombs from '~/assets/images/powerups/bombs.png';
import iconHigh from '~/assets/images/powerups/hi-jump.png';
import iconSpace from '~/assets/images/powerups/space-jump.png';
import iconSpeed from '~/assets/images/powerups/speed-booster.png';
import iconVaria from '~/assets/images/powerups/varia.png';
import iconGravity from '~/assets/images/powerups/gravity.png';
import iconCharge from '~/assets/images/powerups/charge-beam.png';
import iconIce from '~/assets/images/powerups/ice-beam.png';
import iconWave from '~/assets/images/powerups/wave-beam.png';
import iconSpazer from '~/assets/images/powerups/spazer-beam.png';
import iconPlasma from '~/assets/images/powerups/plasma-beam.png';

export default {
  layout: 'none',
  data() {
    return {
      iconMorphBall,
      iconSpringBall,
      iconScrew,
      iconBombs,
      iconHigh,
      iconSpace,
      iconSpeed,
      iconVaria,
      iconGravity,
      iconCharge,
      iconIce,
      iconWave,
      iconSpazer,
      iconPlasma,
      items: {
        charge: false,
        ice: false,
        wave: false,
        spazer: false,
        plasma: false,
        varia: false,
        gravity: false,
        morph: false,
        bombs: false,
        spring: false,
        screw: false,
        hijump: false,
        space: false,
        speed: false,
      },
    };
  },
  mounted() {
    const self = this;
    const socket = io('http://localhost:3000');
    socket.on('metroid update', function (event) {
      self.items = event;
    });
  },
};
</script>

<style lang="less">
.tracker {
  margin: auto;
  img {
    width: 50px;
    height: 50px;
    filter: brightness(0.3);
  }
}
.active {
  filter: brightness(1) !important;
}
</style>
