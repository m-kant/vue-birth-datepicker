<template>

  <div
    class="birthday-picker"
    :class="{'birthday-picker_inline':inline, 'birthday-picker_high':high, 'disabled':disabled}"

    style=""
  >
    <input
     type="text"
     class=""
     :value="valueStr"
     :placeholder="placeholder"
     :disabled="disabled"
     @input="onManualInput"
     @focus="inputIsFocused=true;"
     @blur=" inputIsFocused=false; $nextTick(onWidgetBlur);"
     @click="toggle();"
    />
    <div class="birthday-picker_carriage" :class="{'bp-opened': active}"></div>

    <transition name="dropdown-trans">
      <button
        class="birthday-picker_dropdown"
        :class="'attach-'+attachmentX+' attach-'+attachmentY"
        v-if="active||inline"
        @focus="dropdownIsFocused=true;"
        @blur=" dropdownIsFocused=false; $nextTick(onWidgetBlur);"
        @click.stop.prevent="nothing"
      >

        <div v-if="!hideHeader" class="birthday-picker_dropdown-header">{{valueHeader}}</div>

        <div class="birthday-picker_dropdown-body">

          <div class="birthday-picker_days-months">
            <pick-day :value="day" @input="setDay" />
            <pick-month :value="month" @input="setMonth" :months="months" />
          </div>

          <pick-year :value="year" @input="setYear" :min="minYear" :max="maxYear" />

        </div>
      </button>
    </transition>

  </div>

</template>

<script>
import pickDay    from './components/pick-day';
import pickMonth  from './components/pick-month';
import pickYear   from './components/pick-year';

export default {
  name: 'vueBirthDatepicker',

  props: {
    value:        { type: [Number, String] },
    valueIsString:{ type: Boolean, default: false },
    disabled:     { type: Boolean },
    placeholder:  { type: String },
    attachment:   { type: String, default: 'bottom left' },
    wildcard:     { type: String, default: '_' },
    delimiter:    { type: String, default: '.'},
    yearFirst:    { type: Boolean, default: false },
    closeOnSet:   { type: Boolean, default: true },
    hideHeader:   { type: Boolean, default: false },
    inline:       { type: Boolean, default: false },
    high:         { type: Boolean, default: false },
    locale:       { type: [String, Array],  default: "en" },
    minYear:      { type: [Number] },
    maxYear:      { type: Number },
    selectYear:   { type: [Number, Boolean] },
  },

  components: { pickDay, pickMonth , pickYear },

  beforeMount(){
    this.assignValue();
    // preselect current year
    if(this.selectYear === true){
      this.year = (new Date()).getFullYear();
    // preselect given year
    } else if(typeof this.selectYear === 'number'){
      this.year = this.selectYear;
    }
  },
  beforeDestroy(){  this.removeClickOutHandler(); },
  watch: {
    value(){ this.assignValue(); },
  },

  data(){ return {
    inputIsFocused: false,
    dropdownIsFocused: false,
    skipToggle: false, // when switch between dropdown and input

    day:    null,
    month:  null,
    year:   null,

    active: false,
    monthLocales: {
      en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
      ru: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    }

  }; },

  computed: {
    isFilled(){ return !(this.day === null || this.month === null || this.year === null); },
    months(){
      let loc;
      if(typeof this.locale === 'string'){
        loc = this.monthLocales[this.locale];
      } else {
        loc = this.locale;
      }
      return (loc)? loc : this.monthLocales['en'];
    },
    valueTimestamp(){
      if(!this.isFilled) return null;
      return Date.UTC(this.year, this.month, this.day);
    },
    attachmentX(){
      return (this.attachment.includes('right'))? 'right' : 'left';
    },
    attachmentY(){
      return (this.attachment.includes('top'))? 'top' : 'bottom';
    },
    dayStr(){
      if(this.day === null) return '';
      if(this.day < 10) return  '0' + this.day;
      return String(this.day)
    },
    monthStr(){
      if(this.month === null) return '';
      const month = this.month + 1;
      if(month < 10) return  '0' + month;
      return String(month)
    },
    valueStr() {
      if(!this.isFilled) return '';
      const pre = this.yearFirst? [this.year, this.monthStr, this.dayStr] : [this.dayStr, this.monthStr, this.year] ;
      return pre.join(this.delimiter);
    },
    valueHeader() {
      const d = this.dayStr? this.dayStr : this.wildcard+this.wildcard;
      const m = this.monthStr? this.months[this.month] : this.wildcard+this.wildcard+this.wildcard;
      const y = this.year? this.year : this.wildcard+this.wildcard+this.wildcard+this.wildcard;

      return this.yearFirst? `${y} ${m} ${d}` : `${d} ${m} ${y}`;
    },


    // clickOutHandler(){ return ( function closeBdpicker(){ this.close(); } ).bind(this); },

  },

  methods: {
    nothing(){ },
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
      // this.addClickOutHandler();
    },
    close(){
      this.active = false;
      // this.removeClickOutHandler();
    },
    closeAfterSet(){
      if(!this.isFilled) return;
      if(!this.closeOnSet) return;
      this.close();
    },
    toggle(){ this.active = !this.active; },
    onWidgetBlur(){
      if(!this.inputIsFocused && !this.dropdownIsFocused){
        this.active = false;
      }
    },
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
