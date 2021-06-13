<template>
  <div class='hello'>
    <HotelDatePicker
    :halfDay='false'
    :disabledDates="disabledDates"
    :singleDaySelection="true"
    >
    </HotelDatePicker>
  </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';

export default {
  name: 'HelloWorld',
  components: {
    HotelDatePicker
  },
  data () {
    return {
      periodDates: [
        {
          startAt: '2021-06-10',
          endAt: '2021-06-20',
          periodType: 'nightly',
          price: '300起'
        },
        {
          startAt: '2021-06-22',
          endAt: '2021-06-22',
          periodType: 'nightly',
          price: '300起'
        },
        {
          startAt: '2021-06-24',
          endAt: '2021-06-24',
          periodType: 'nightly',
          price: '300起'
        },
      ],
      disabledDates:['2021-06-23','2021-06-24','2021-06-25','2021-06-28','2021-06-29','2021-06-30']
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vhd__datepicker__month-day-wrapper{
  position:relative !important;
  size: 3em !important;
  color: red !important;
}
</style>
