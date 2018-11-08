<template>
  <div class="demo">
      <a class="btn btn-default" href="http://mkant.ru">MKant.ru</a>
      <a class="btn btn-default" href="https://github.com/m-kant/vue-birth-datepicker">View at <b>GIT Hub</b></a>
      <!-- <a class="btn btn-default" href="https://www.npmjs.com/package/vue-birth-datepicker">View at <b>NPM</b></a> -->
      <h1>vue-birth-datepicker demo</h1>
      <p>Date picker for distant dates, such as birthday.
        Just three clicks to choose any month and day 20 or 50 years ago.</p>

      <h3>Basic</h3>
      <div class='code-pane'>{{codeBasic}}</div>
      <birth-datepicker v-model="date" />

      <h3>Inline</h3>
      <div class='code-pane'>{{codeInline}}</div>
      <birth-datepicker v-model="date" :inline="true" />

      <h3>Playground</h3>
      <birth-datepicker
        v-model="date"
        :valueIsString="valueIsString"
        :inline="inline"
        :high="high"
        :placeholder="placeholder"
        :attachment="attachment"
        :closeOnSet="closeOnSet"
        :yearFirst="yearFirst"
        :delimiter="delimiter"
        :hideHeader="hideHeader"
        :minYear="minYear?Number(minYear):null"
        :maxYear="maxYear?Number(maxYear):null"
        :locale="calcLocale"
      />

      <p>Specify attributes:</p>
      <div class='input-pane'>
        <div class="col4">
          <h4>Output</h4>
          <label>
            <div class="remark">String or timestamp for local date 00 hours 00 minutes</div>
            value: {{date}}</label>
          <label>
            <div class="remark">Reselect date after changing "valueIsString" to affect value</div>
            <input type="checkbox" v-model="valueIsString"> valueIsString</label>
          <h4>Flags</h4>
          <label><input type="checkbox" v-model="inline"> inline</label>
          <label><input type="checkbox" v-model="high"> high</label>
          <label><input type="checkbox" v-model="hideHeader"> hideHeader</label>
        </div>
        <div class="col4">
          <h4>For not-inline</h4>
          <label><input type="checkbox" v-model="closeOnSet"> closeOnSet</label>
          <label>placeholder <input type="text" v-model="placeholder"></label>
          <label>attachment <div class="remark">combination of top/bottom/left/right</div> <input type="text" v-model="attachment"></label>
        </div>
        <div class="col4">
          <h4>Date format</h4>
          <label><input type="checkbox" v-model="yearFirst"> yearFirst</label>
          <label>delimiter <div class="remark">for not-inline input and string output</div> <input type="text" v-model="delimiter"></label>
          <label>maxYear   <div class="remark">leave empty for unlimited</div>              <input type="number" v-model="maxYear"></label>
          <label>minYear   <div class="remark">leave empty for unlimited</div>              <input type="number" v-model="minYear"></label>
        </div>
        <div class="col4">
          <h4>Locale (I18n)</h4>
          <label>locale
            <div class="remark">Can be a string ('en' or 'ru'), or an array of month names</div>
            <select v-model="demolocale">
              <option>en</option>
              <option>ru</option>
              <option value="">custom month names</option>
            </select>
          </label>
          <label><input type="text" :disabled="Boolean(demolocale)" v-model="customLocale"></label>
        </div>
      </div>


  </div>
</template>

<script>

import birthDatepicker from './birth-datepicker';

export default {

    beforeMount(){
        // this.date = Date.now();
    },

  components: {
    birthDatepicker,
  },

  data(){ return {
      date: null,

      inline: false,
      high: false,
      closeOnSet: false,
      valueIsString: false,
      yearFirst: false,
      hideHeader: false,
      delimiter: '.',
      placeholder: 'Wow!',
      attachment: 'bottom left',
      maxYear: (new Date().getFullYear()) - 5,
      minYear: (new Date().getFullYear()) - 40,
      demolocale: 'en',
      customLocale: 'JN FB MR AP MY JU JL AG SP OK NV DC',

      codeBasic: '<birth-datepicker v-model="date" />',
      codeInline: '<birth-datepicker v-model="date" :inline="true" />'
  }; },

  computed: {
    calcLocale(){
      if(this.demolocale) return this.demolocale;
      return this.customLocale.split(/[,\s]+/);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    *{
      block-size: border-box;
    }

    .demo{
        max-width: 960px;
        margin: auto;
    }
    .btn{
      display: inline-block;
      border: 1px solid #ccc;
      padding: 7px 10px;
      margin: 1px;
      border-radius: 3px;
      color: inherit;
      text-decoration: none;
    }
    .input-pane{
      background-color: #eee;
      padding: 15px;
      margin-top: 20px;
      margin-bottom: 20px;

      label{
        margin: 5px;
        display: block;
        background-color: rgba(255,255,255,0.5);
        padding: 5px;
        border-top: 1px solid rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      select,
      input[type=number],
      input[type=text]{
        width: 100%;
      }
    }
    .col4{
      display: inline-block;
      vertical-align: top;
      margin: 5px;
      width: calc(25% - 10px)
    }

    .remark{
      color: #777;
      font-size: 0.9em;
    }

    .code-pane{
      background-color: #eee;
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 20px;
      font-family:'Courier New', Courier, monospace;
      color: #555;
    }
</style>
