<template>
  <div id="app">
    <ul>
      <li v-for="file in files" :key="file">
        {{file}}
      </li>
    </ul>
    <button @click="newWin">New win</button>
  </div>
</template>

<script>
const { readdir } = require("fs/promises");
import { ipcRenderer } from "electron";

export default {
  name: "App",
  data() {
    return {
      files: [],
      dir: ".",
    };
  },
  mounted() {
    this.scan(this.dir)
  },
  methods: {
    newWin() {
      ipcRenderer.send('new-win')
    },
    scan(dir) {
      readdir(dir).then((files) => (this.files = files));
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
