<template>
  <div
    @touchmove="handleTouchMove"
    class="container"
    :class="{ hide: loading }"
  >
    <video ref="videoRef" controls playsinline id="video">
      <source
        src="https://www.duety.top/plugins/plyr.js/plyr-demo.mp4"
        type="video/mp4"
        size="576"
      />
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const videoRef = ref()
const loading = ref<boolean>(true)
let player: any

function addHeadNode(tag: string, attrs: any) {
  return new Promise((s, j) => {
    const domNode = document.createElement(tag)
    for (const key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key)) {
        const val = attrs[key]
        domNode.setAttribute(key, val)
      }
    }
    domNode.onload = () => {
      s("加载完成")
    }
    document.head.appendChild(domNode)
  })
}
Promise.all([
  addHeadNode("link", {
    rel: "stylesheet",
    href: "https://www.duety.top/plugins/plyr.js/plyr.css",
  }),
  addHeadNode("script", {
    src: "https://www.duety.top/plugins/plyr.js/plyr.js",
  }),
]).then(() => {
  loading.value = false
  player = new window.Plyr(videoRef.value, {
    controls: [
      "play",
      "current-time",
      "mute",
      "volume",
      "captions",
      "fullscreen",
      "settings",
    ],
    speed: { selected: 1, options: [0.5, 1, 1.25, 1.5, 2] },
    i18n: {
      speed: "速度",
      normal: "正常",
    },
    iconUrl: "https://www.duety.top/plugins/plyr.js/plyr.svg",
  })
})
function handleTouchMove() {
  console.log("here")
}

window.addEventListener("visibilitychange", () => {
  const { visibilityState } = document
  visibilityState === "hidden" && player.pause()
})
</script>

<style scoped>
@media (max-width: 767px) {
  /*当屏幕宽度小于等于767像素时的样式*/
  .container {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /*当屏幕宽度在768px和991px之间时的样式*/
  .container {
    width: 500px;
    margin: auto;
  }
}

@media (min-width: 992px) {
  /*当屏幕宽度大于等于992px时的样式*/
  .container {
    width: 500px;
    margin: auto;
  }
}

.hide {
  opacity: 0;
}
</style>
