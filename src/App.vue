<template>
  <div id="app">
    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Open modal</button>
    <modal ref="modalName"
      :TITLE="TITLE"
      :BODY="BODY"
      :SUCCESS_BTN_TEXT="SUCCESS_BTN_TEXT"
      :CANCEL_BTN_TEXT="CANCEL_BTN_TEXT"
      :BACKDROP_CLOSE="true"
    >
    </modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      TITLE:'TITLE',
      BODY:'BODY',
      SUCCESS_BTN_TEXT:'Save',
      CANCEL_BTN_TEXT:'Cancel',
    };
  },
};
</script>

