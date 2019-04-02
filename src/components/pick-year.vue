<template>

      <div class="birthday-picker_years">
        <table cellspacing="0" cellpadding="0">

          <tr class="bdp-increase-year" @click.stop.prevent="increaseYear">
            <td :colspan="colsCount">
              &nbsp; <i class="birthday-picker_carriage-up" v-if="ableToIncrease"/> &nbsp;
            </td>
          </tr>

          <tr v-for="(yearRow, i) in rows" :key="'yearrow'+i">
            <td v-for="(year, j) in yearRow" :key="'yearrow'+j">
              <a
               v-if="year"
               :class="{'bdp-active': year===value, 'disabled': year<min || (max&&year>max), 'bdp-today':year===today}"
               @click.stop.prevent="emitInput(year)"
              >
                {{yearStr(year)}}
              </a>
            </td>
          </tr>

          <tr class="bdp-decrease-year" @click.stop.prevent="decreaseYear">
            <td :colspan="colsCount">
              &nbsp; <i class="birthday-picker_carriage-down" v-if="ableToDecrease"/> &nbsp;
            </td>
          </tr>

        </table>

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
    this.yearFrom =  this.max ? this.max : (new Date()).getFullYear();
  },

  data(){ return {

    active: false,
    year:   null,
    colsCount: 10,
    rowsCount: 6,
    yearFrom: null,

  }; },

  computed: {
    today(){ return (new Date()).getFullYear(); },
    rows(){
      const res = [];
      const minDecade = this.min? this.floorToTens(this.min) : null;
      // round up to tens
      let rowYear = this.floorToTens(this.yearFrom);

      for(let r=0; r < this.rowsCount; r++){
        let row = [];

        for(let c=0; c < this.colsCount; c++){
          let curYear = rowYear + c;
          // if(this.max && curYear > this.max) curYear = '';
          row.push(curYear);
        }

        res.push(row);
        rowYear = rowYear - this.colsCount;
        if(minDecade && rowYear < minDecade) break;
      }
      return res;
    },
    ableToDecrease(){
      if(!this.min) return true;
      const min = this.ceilToTens(this.yearFrom) - this.rowsCount*this.colsCount;
      return min > this.min;
    },
    ableToIncrease(){
      if(!this.max) return true;
      return this.ceilToTens(this.yearFrom) < this.max + 1;
    },
  },

  methods: {
    setYearFrom(y){
      if(!this.max){
        this.yearFrom = this.ceilToTens(y);
      } else {
        this.yearFrom = this.ceilToTens(this.max);
      }
    },
    floorToTens(num){ return Math.floor(num/10) * 10; },
    ceilToTens(num) { return Math.ceil(num/10) * 10; },
    assignValue(){

    },
    decreaseYear(){
      if(!this.ableToDecrease) return;
      this.yearFrom -= this.colsCount*this.rowsCount; },
    increaseYear(){
      if(!this.ableToIncrease) return;
      this.setYearFrom( this.yearFrom + this.colsCount*this.rowsCount );
    },
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
  .bdp-increase-year,
  .bdp-decrease-year{
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  }

}

</style>
