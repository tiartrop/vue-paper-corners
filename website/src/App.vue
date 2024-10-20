<script setup lang="ts">
import { ref } from 'vue';
import PaperCorners from 'vue-paper-corners';
import pkg from 'vue-paper-corners/package.json';
import ReadMe from 'vue-paper-corners/README.md';
import patternPng from './assets/pattern.png';

const { description } = pkg;
const link = 'https://github.com/tiartrop/vue-paper-corners';
const graph =
  'linear-gradient(rgba(212,  212 , 212, .35) 1px, transparent 0) 0 center / 20px 20px, linear-gradient(to right, rgba(212,  212 , 212, .35) 1px, var(--text-bg-primary) 0) 0 0 / 20px 20px;';
const dot =
  'radial-gradient(rgba(212,  212 , 212, .15) 2px, transparent 0) 0 0 / 20px 20px, radial-gradient(rgba(212,  212 , 212, .15) 2px, var(--text-bg-primary) 2px)  0 0 / 20px 20px;';
const pattern = `url("${patternPng}")`;

const size = ref(30);
const color = ref('var(--text-bg-primary)');
const positionX = ref<'right' | 'left'>('right');
const positionY = ref<'top' | 'bottom'>('bottom');
</script>

<template>
  <div>
    <header>
      <paper-corners
        :link="link"
        :size="size"
        :color="color"
        bg-color="var(--background-primary)"
        :position-x="positionX"
        :position-y="positionY"
      >
        <img alt="Vue logo" src="./assets/logo.svg" />
        <br />
        <a :href="link" target="__blank">Vue paper Corners</a>
        <p>{{ description }}</p>
      </paper-corners>
      <div class="button">
        <button @click="size = 60">Set Size 60px</button>
        <button @click="size = 30">Set Size 30px</button>
        <button @click="positionX = positionX === 'right' ? 'left' : 'right'">
          {{ positionX === 'right' ? 'Left' : 'Right' }}
        </button>
        <button @click="positionY = positionY === 'bottom' ? 'top' : 'bottom'">
          {{ positionY === 'bottom' ? 'Top' : 'Bottom' }}
        </button>
      </div>
      <div class="button">
        <button @click="color = graph">Graph</button>
        <button @click="color = dot">Dot</button>
        <button @click="color = pattern">Pattern</button>
        <button @click="color = 'var(--text-bg-primary)'">Solid</button>
      </div>
    </header>
    <div class="markdown-body markdown">
      <read-me />
    </div>
  </div>
</template>

<style scoped>
header {
  color: var(--text-primary);
  text-align: center;
  min-height: calc(100vh - 100px);
  padding-top: 47px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
}

header img {
  height: 10vmin;
  margin: 40px 0 20px;
}

header a {
  color: inherit;
  font-weight: bold;
  line-height: 40px;
}

header p {
  padding: 10px 40px 40px;
  max-width: 600px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.button {
  margin-top: 10px;
}

.button button {
  position: relative;
  display: inline-block;
  border: 0 solid;
  border-radius: 2px;
  padding: 5px 10px;
  margin: 0 2px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--text-bg-primary);
}

@media (prefers-color-scheme: light) {
  .button button {
    text-shadow: 0 1px hsla(0, 0%, 100%, 0.9);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}

@media (prefers-color-scheme: dark) {
  .button button {
    background: rgba(78, 78, 78);
    text-shadow: 0 1px hsla(0, 0%, 0%, 0.9);
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.1);
  }
}

.button button + button {
  margin-left: 5px;
}

.button button:hover {
  outline: 0;
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.3);
}

.button button:focus {
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.3);
}

.markdown {
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 110px;
  padding: 20px 40px;
  border-radius: 5px;
}
</style>
