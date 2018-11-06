<template>

  <div class="birthday-picker_btn-pane birthday-picker_months">
    <div class="birthday-picker_row" />
    <div
      v-for="(monthRow, i) in monthRows"
      :key="'monthrow'+i"
      class="birthday-picker_row"
    >
      <span
        v-for="monthNum in monthRow"
        :key="monthNum"
        class="birthday-picker_btn birthday-picker_month"
        :class="{'bdp-active': monthNum===value}"
        @click.stop="emitInput(monthNum)"
      >{{months[monthNum]}}</span>
    </div>
  </div>

</template>

<script>
export default {

  props: {
    value:        { type: Number },
    months:       { type: Array,  default: () => ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"] },

  },

  data(){ return {
    monthCols: 2,
  }; },

  computed: {
    monthRows(){
      const res = [];
      const max = 11;
      let month = 0;
      let row;

      for(let r=0; month <= max; r++){
        row = [];
        for(let i=0; i < this.monthCols && month <= max; i++) row.push(month++);
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

