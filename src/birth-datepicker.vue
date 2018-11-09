<template>

  <div class="birthday-picker" :class="{'birthday-picker_inline':inline, 'birthday-picker_high':high}">
    <input type="text" class="" :value="valueStr" :placeholder="placeholder"  @click.stop.prevent="toggle()" @input="onManualInput" />
    <div class="birthday-picker_carriage" :class="{'bp-opened': active}" @click.stop.prevent="toggle()"></div>

    <transition name="dropdown-trans">
      <div class="birthday-picker_dropdown" :class="'attach-'+attachmentX+' attach-'+attachmentY" v-if="active||inline">

        <div v-if="!hideHeader" class="birthday-picker_dropdown-header">{{valueHeader}}</div>
        <pick-day :value="day" @input="setDay" />
        <pick-month :value="month" @input="setMonth" :months="months" />
        <pick-year :value="year" @input="setYear" :min="minYear" :max="maxYear" />

      </div>
    </transition>
  </div>

</template>

<script>
import computed   from './components/computed';
import pickDay    from './components/pick-day';
import pickMonth  from './components/pick-month';
import pickYear   from './components/pick-year';

export default {
  name: 'vueBirthDatepicker',

  props: {
    value:        { type: [Number, String] },
    valueIsString:{ type: Boolean, default: false },
    placeholder:  { type: String },
    attachment:   { type: String, default: 'bottom left' },
    delimiter:    { type: String, default: '.'},
    yearFirst:    { type: Boolean, default: false },
    closeOnSet:   { type: Boolean, default: false },
    hideHeader:   { type: Boolean, default: false },
    inline:       { type: Boolean, default: false },
    high:         { type: Boolean, default: false },
    locale:       { type: [String, Array],  default: "en" },
    minYear:      { type: [Number] },
    maxYear:      { type: Number },
  },

  components: { pickDay, pickMonth , pickYear },

  beforeMount(){    this.assignValue(); },
  beforeDestroy(){  this.removeClickOutHandler(); },
  watch: {
    value(){ this.assignValue(); },
  },

  data(){ return {

    day:    null,
    month:  null,
    year:   null,

    active: false,
    monthLocales: {
      en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
      ru: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    }

  }; },

  computed,

  methods: {
    assignValue(){
      if (this.valueIsString && this.value) {
        if(!this.parseStringDate(this.value)) throw new Error('Can not parse date string');

      // value is a timestamp
      } else  if (typeof this.value === 'number'){
        const date = new Date(this.value);
        this.day =   date.getUTCDate();
        this.month = date.getUTCMonth();
        this.year =  date.getUTCFullYear();

      // value is undefined or missformatted
      } else {
        this.day =   null;
        this.month = null;
        this.year =  null;
      }
    },
    open(){
      this.active = true;
      this.addClickOutHandler();
    },
    close(){
      this.active = false;
      this.removeClickOutHandler();
    },
    closeAfterSet(){
      if(!this.isFilled) return;
      if(!this.closeOnSet) return;
      this.close();
    },
    toggle(){ (this.active)? this.close() : this.open(); },
    setDay(val){
      this.day = val;
      this.emitInput();
      this.closeAfterSet();
    },
    setMonth(val){
      this.month = val;
      this.emitInput();
      this.closeAfterSet();
    },
    setYear(val){
      this.year = val;
      this.emitInput();
      this.closeAfterSet();
    },
    emitInput(){
      if(!this.isFilled) return;
      const val = this.valueIsString ? this.valueStr : this.valueTimestamp;
      this.$emit('input', val);
    },
    yearIsDecade(year){ return String(year).substr(-1) === '0'; },
    yearStr(year){
      year = String(year);
      return (this.yearIsDecade(year))? year : year.substr(-2);
    },
    onManualInput(ev){
      // get value
      const val = ev.target.value.replace(/\s+/g, '');
      // emit input if parsed successfully
      if(this.parseStringDate(val)) this.emitInput();
    },
    parseStringDate(str){
      // get array of numbers
      const chunks = str.split(this.delimiter).map(el => Number(el));
      // validate
      if(chunks.length < 3) return;
      if(chunks.includes(NaN)) return;
      // define meaning of chunks
      let y,m,d;
      if(this.yearFirst){
        [y, m, d] = chunks;
      } else {
        [d, m, y] = chunks;
      }
      m--; // month need to be decreased
      //check for restrictions
      if(m < 0) m = 0;
      if(m > 11) m = 11;
      if(d < 1) m = 1;
      if(d > 31) m = 31;
      if(y > this.maxYear) y = this.maxYear;
      if(y < this.minYear) y = this.minYear;
      // update local values
      this.year = y;
      this.month = m;
      this.day = d;
      return true; // date string is parsed successfully
    },
    addClickOutHandler(){
      window.addEventListener("click", this.clickOutHandler);
    },
    removeClickOutHandler(){
      window.removeEventListener("click", this.clickOutHandler);
    },

  },

};
</script>

<style lang="scss" src='./components/birth-datepicker.scss' />
