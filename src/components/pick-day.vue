<template>

  <div class="birthday-picker_days">
    <table cellspacing="0" cellpadding="0">
      <tr><td :colspan="colsCount">&nbsp;</td></tr>
      <tr
        v-for="(dayRow, i) in dayRows"
        :key="'dayrow'+i"
      >
        <td
          v-for="(dayItem, j) in dayRow"
          :key="'daycell'+j"

        >
          <a
            v-if="dayItem"
           :class="{'bdp-active': dayItem===value, 'bdp-today': dayItem===today}"
           @click.stop="emitInput(dayItem)"
          >{{dayItem}}</a>
        </td>
      </tr>

    </table>
  </div>

</template>

<script>

export default {

  props: {
    value: { type: [Number] },
    today: { type: Number, default: () => (new Date()).getDay() }
  },

  data(){ return {

    colsCount: 5,

  }; },

  computed: {

    dayRows(){
      const res = [];
      const max = 31;
      const rowsCount = Math.ceil(max/this.colsCount);
      let day = 1;

      for(let r=0; r < rowsCount; r++){
        let row = [];
        for(let i=0; i < this.colsCount; i++){
          let val = day++;
          if(val > max) val = '';
          row.push(val);
        }
        res.push(row);
      }
      return res;
    },

  },

  methods: {
    emitInput(day){ this.$emit('input', day); },
  },

};
</script>
