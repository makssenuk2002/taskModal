<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModalBackdrop()"/>

      <div class="modal__dialog">
        <div class="modal__header">
          <h1>{{TITLE}}</h1>
        </div>

        <div class="modal__body">
          <h4>{{BODY}}</h4>
        </div>

        <div class="modal__footer">
          <div class="d-flex align-items-center justify-content-between">
            <button class="btn btn--secondary" @click="closeModal()">{{CANCEL_BTN_TEXT}}</button>
            <button class="btn btn--primary" @click="closeModal()">{{SUCCESS_BTN_TEXT}}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props:['TITLE','BODY','SUCCESS_BTN_TEXT','CANCEL_BTN_TEXT','BACKDROP_CLOSE'],
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    },
    closeModalBackdrop() {
      if (this.BACKDROP_CLOSE){
        this.show = false;
      }
    },
    openModal() {
      this.show = true;
    }
  }
};
</script>
