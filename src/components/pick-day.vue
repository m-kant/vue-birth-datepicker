<template>

  <div class="birthday-picker_btn-pane birthday-picker_days">
    <div class="birthday-picker_row"></div>
    <div
      v-for="(dayRow, i) in dayRows"
      :key="'dayrow'+i"
      class="birthday-picker_row"
    >
      <span
        v-for="dayItem in dayRow"
        :key="dayItem"
        class="birthday-picker_btn birthday-picker_day"
        :class="{'bdp-active': dayItem===value}"
        @click.stop="emitInput(dayItem)"
      >{{dayItem}}</span>
    </div>
  </div>

</template>

<script>

export default {

  props: {
    value: { type: [Number] },
  },

  data(){ return {

    dayCols: 5,

  }; },

  computed: {

    dayRows(){
      const res = [];
      const max = 31;
      let day = 1;
      let row;

      for(let r=0; day <= max; r++){
        row = [];
        for(let i=0; i < this.dayCols && day <= max; i++) row.push(day++);
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
