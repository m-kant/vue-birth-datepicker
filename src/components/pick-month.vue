<template>

  <div class="birthday-picker_months">
    <table cellspacing="0" cellpadding="0">
      <tr><td :colspan="colsCount">&nbsp;</td></tr>

      <tr v-for="(monthRow, i) in monthRows" :key="'monthrow'+i">
        <td v-for="(monthNum, j) in monthRow" :key="'monthcell'+j">
          <a
           @click.stop.prevent="emitInput(monthNum)"
          :class="{'bdp-active': monthNum===value, 'bdp-today': monthNum===today}"
          >
           {{months[monthNum]}}
          </a>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {

  props: {
    value:        { type: Number },
    months:       { type: Array  },

  },

  data(){ return {
    colsCount: 2,
  }; },

  computed: {
    today(){ return (new Date()).getMonth(); },
    monthRows(){
      const res = [];
      const max = 11;
      const rowsCount = Math.ceil(max/this.colsCount);

      for(let r=0; r < rowsCount; r++){
        let row = [];
        for(let i=0; i < this.colsCount; i++){
          let month = r * this.colsCount + i;
          if(month > max) month = '';
          row.push(month);
        }
        res.push(row);
      }
      return res;
    },
  },

  methods: {
    emitInput(monthNum){ this.$emit('input', monthNum); },
  },

};
</script>

