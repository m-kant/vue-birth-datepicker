export default {

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
    const d = this.dayStr? this.dayStr : '??';
    const m = this.monthStr? this.months[this.month] : '???';
    const y = this.year? this.year : '????';

    return this.yearFirst? `${y} ${m} ${d}` : `${d} ${m} ${y}`;
  },


  clickOutHandler(){ return ( function closeBdpicker(){ this.close(); } ).bind(this); },
};
