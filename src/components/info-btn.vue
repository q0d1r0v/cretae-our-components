<template>
  <div @click="emmit()" class="default_btn">
    <div>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "info-btn",
  props: ["title"],

  data() {
    return {};
  },
  created() {},

  methods: {
    emmit() {
      this.$emit("onclick");
    },
  },
};
</script>

<style scoped>
.default_btn {
  background: #2080f0;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
}

.default_btn:hover {
  background: #4098fc;
  transition: all 0.3s;
}
.default_btn:active {
  background: #1060c9;
  transition: all 0.3s;
  box-shadow: 0px 0px 0px 3px #4098fc3d;
}

.info_btn {
  background: #2080f0;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
}

.info_btn:hover {
  background: #4098fc;
  transition: all 0.3s;
}
.info_btn:active {
  background: #1060c9;
  transition: all 0.3s;
  box-shadow: 0px 0px 0px 3px #4098fc3d;
}

.danger_btn {
  background: #d03050;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
}

.danger_btn:hover {
  background: #de576d;
  transition: all 0.3s;
}

.danger_btn:active {
  background: #ab1f3f;
  transition: all 0.3s;
  box-shadow: 0px 0px 0px 3px #ab1f4036;
}

.small_btn {
  padding: 1px 6px;
}

.large_btn {
  padding: 8px 13px;
}

.br-1 {
  border-radius: 5px;
}
.br-2 {
  border-radius: 10px;
}
.br-3 {
  border-radius: 15px;
}

.block_btn {
  display: block;
  -webkit-user-select: none;
}

.outlined_btn {
  border: 1px solid black;
}
</style>
