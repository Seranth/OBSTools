<template>
  <span class="my-timer" :class="{ 'my-timer-black': black }">
    {{
      (timer.days > 0 ? timer.days + ':' : '') +
      (timer.hours > 0 ? timer.hours + ':' : '') +
      (10 > timer.minutes ? '0' : '') +
      (0 > timer.minutes ? '0' : timer.minutes) +
      ':' +
      (10 > timer.seconds ? '0' : '') +
      (0 > timer.seconds ? '0' : timer.seconds)
    }}
  </span>
</template>
<script>
export default {
  layout: 'none',
  data() {
    return {
      black: false,
      timer: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  mounted() {
    const self = this;
    console.log(self.$route.query);
    if (self.$route.query.black !== undefined) {
      self.black = true;
    }

    const times = self.$route.query.for.split(':').reverse();
    const timerVals = [1000, 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000];
    // Set the date we're counting down to
    let countDownDate = new Date().getTime();
    times.forEach((t, index) => {
      self.timer[timerVals[index]] = t;
      countDownDate += t * timerVals[index];
    });

    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      self.timer.days = days;
      self.timer.hours = hours;
      self.timer.minutes = minutes;
      self.timer.seconds = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  },
};
</script>

<style scoped>
.my-timer {
  font-size: 200px;
  font-family: 'FORCED SQUARE', serif;
  color: white;
}
.my-timer-black {
  color: black !important;
}
</style>
