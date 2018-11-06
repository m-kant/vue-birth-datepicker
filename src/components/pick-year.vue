<template>

      <div class="birthday-picker_btn-pane birthday-picker_years">

        <div class="birthday-picker_row birthday-picker_row-header" @click.stop="increaseYear">
          <i class="birthday-picker_carriage-up" v-if="ableToIncrease"/>
        </div>

        <div class="birthday-picker_btn-pane-body">
          <div
            v-for="(yearRow, i) in rows"
            :key="'yearrow'+i"
            class="birthday-picker_row"
          >
            <span
              v-for="year in yearRow"
              :key="year"
              class="birthday-picker_btn birthday-picker_year"
              :class="{'bdp-active': year===value, 'disabled': year<min}"
              @click.stop="emitInput(year)"
            >{{yearStr(year)}}</span>
          </div>
        </div>

        <div class="birthday-picker_row-footer" @click.stop="decreaseYear">
          <i class="birthday-picker_carriage-down" v-if="ableToDecrease" />
        </div>

      </div>

</template>

<script>

export default {

  props: {
    value:    { type: [Number] },
    max:      { type: Number, default: () => (new Date()).getFullYear() },
    min:      { type: Number },
  },

  beforeMount(){
    this.yearFrom =  (new Date()).getFullYear();
    if(this.max && this.yearFrom > this.max) this.yearFrom = this.max;
  },

  data(){ return {

    active: false,
    year:   null,
    colsNum: 10,
    rowsNum: 6,
    yearFrom: null,

  }; },

  computed: {
    rows(){
      const res = [];
      const minDecade = this.min? this.floorToTens(this.min) : null;
      // round up to tens
      let rowYear = this.floorToTens(this.yearFrom);

      for(let r=0; r < this.rowsNum; r++){
        let row = [];

        for(let c=0; c < this.colsNum; c++){
          if(this.max && rowYear + c > this.max) break;
          row.push(rowYear + c);
        }

        res.push(row);
        rowYear = rowYear - this.colsNum;
        if(minDecade && rowYear < minDecade) break;
      }
      return res;
    },
    ableToDecrease(){
      if(!this.min) return true;
      const min = this.yearFrom - this.rowsNum*this.colsNum;
      return min > this.min;
    },
    ableToIncrease(){
      if(!this.max) return true;
      const max = this.ceilToTens(this.yearFrom);
      return max <= this.max;
    },
  },

  methods: {
    floorToTens(num){ return Math.floor(num/10) * 10; },
    ceilToTens(num) { return Math.ceil(num/10) * 10; },
    assignValue(){

    },
    decreaseYear(){
      if(!this.ableToDecrease) return;
      this.yearFrom -= this.colsNum*this.rowsNum; },
    increaseYear(){
      if(!this.ableToIncrease) return;
      this.yearFrom += this.colsNum*this.rowsNum; },
    emitInput(val){ this.$emit('input', val); },
    yearIsDecade(year){ return String(year).substr(-1) === '0'; },
    yearStr(year){
      year = String(year);
      return (this.yearIsDecade(year))? year : year.substr(-2);
    },


  },

};
</script>

<style lang="scss">

.birthday-picker{

  &_carriage-up{
    display: inline-block;
    width: 0px;
    height: 0px;
    border: .75em solid rgba(0,0,0,0.1);
    border-top: none;
    border-right-color: transparent;
    border-left-color: transparent;
  }
  &_carriage-down{
    display: inline-block;
    width: 0px;
    height: 0px;
    border: .75em solid rgba(0,0,0,0.1);
    border-bottom: none;
    border-right-color: transparent;
    border-left-color: transparent;
  }
  &_row-header,
  &_row-footer{
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  }

  &_year.disabled{
    pointer-events: none;
    opacity: 0.5;
  }
}

</style>
