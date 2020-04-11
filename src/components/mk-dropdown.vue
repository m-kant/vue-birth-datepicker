<template>
    <transition name="dropdown-trans">
      <div
        tabindex="-1"
        class="birthday-picker_dropdown"
        :class="'attach-'+attachmentX+' attach-'+attachmentY"
        v-if="localOpen||inline"
        @focus="focusDropdown();"
        @blur=" focusDropdown(false);"
      ><slot/></div>
    </transition>
</template>

<script>
export default {
  name: 'vueBirthDatepicker',

  props: {
    attachment: { type: String, default: 'bottom left' },
    open:       { type: Boolean }
  },

  beforeMount(){ },
  beforeDestroy(){ this.removeClickOutHandler(); },

  watch:{
    open(){ this.localOpen = this.open; }
  },

  data(){ return {
    localOpen: false,
  }; },

  computed: {
    attachmentX(){
      return (this.attachment.includes('right'))? 'right' : 'left';
    },
    attachmentY(){
      return (this.attachment.includes('top'))? 'top' : 'bottom';
    },

  },

  methods: {
    nothing(){ },
    // log(m){ console.log(m); },

    open(){this.localOpen = true;},
    close(){this.localOpen = false;},
    toggle(){ this.localOpen = !this.localOpen; },


    // addClickOutHandler(){
    //   window.addEventListener("click", this.clickOutHandler);
    // },
    // removeClickOutHandler(){
    //   window.removeEventListener("click", this.clickOutHandler);
    // },

  },

};
</script>

<style lang="scss" src='./components/birth-datepicker.scss' />
