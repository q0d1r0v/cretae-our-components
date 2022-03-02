<template>
  <div style="text-align: center">
    <info-btn @onclick="showAlert()" class="value mt-5 info_btn large_btn" title="send" />
    <br />
    <br />
    <info-btn @onclick="showAlert2()" class="danger_btn large_btn" title="cancel" />
  </div>
</template>
<script>
import infoBtn from "../components/info-btn.vue";
export default {
  name: "Home",

  components: { infoBtn },

  data() {
    return {
      data: [
        {
          size: "small",
        },
        {
          title: "titl2",
        },
      ],
    };
  },

  created() {},

  methods: {
    showAlert() {
      console.log("parent1");
    },
    showAlert2() {
      console.log("parent2");
    },
  },
};
</script>

<style></style>
