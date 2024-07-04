<script>
export default {
  data() {
    return {
      notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#'] // 钢琴键盘上的音符
    };
  },
  mounted() {
    // 创建音频上下文
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  },
  methods: {
    play(note) {
      // 在这里处理播放音符的逻辑，可以使用HTML5 Audio API或其它音频库来播放音符
      console.log('Playing note:', note);
      const frequency = this.getFrequency(note);

      // 创建音调
      const oscillator = this.audioContext.createOscillator();
      oscillator.type = 'sine'; // 波形类型为正弦波
      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

      // 连接音调到扬声器输出
      oscillator.connect(this.audioContext.destination);

      // 开始播放音调
      oscillator.start();

      // 停止音调
      setTimeout(() => {
        oscillator.stop();
      }, 500); // 播放音符持续时间为500ms，可以根据需要调整
      // 这里可以写播放音符的代码，例如使用Web Audio API
    },
    isSharp(note) {
      // 判断是否为半音
      return note.includes('#');
    },
    getFrequency(note) {
      const baseFrequency = 440; // A4音的频率
      const semitoneSteps = this.notes.indexOf(note) - this.notes.indexOf('A');
      const factor = Math.pow(2, semitoneSteps / 12);
      return baseFrequency * factor;
    }
  }
};
</script>

<template>
  <div class="piano">
    <div
        v-for="(note, index) in notes"
        :key="index"
        class="key"
        :class="{ sharp: isSharp(note) }"
        @mousedown="play(note)"
        @touchstart.prevent="play(note)"
    >
      {{ note }}
    </div>
  </div>
</template>

<style scoped>
.piano {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
}

.key {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px solid #000;
  background-color: white;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
}

.key.sharp {
  position: absolute;
  width: 40px;
  height: 60%;
  background-color: black;
  color: white;
  z-index: 1;
}
</style>