<!-- src/components/QuoteDisplay.vue -->
<template>
  <div class="quote">
    <transition name="fade">
      <p key="currentQuote">{{ currentQuote }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        "Education is the most powerful weapon which you can use to change the world.",
        "The roots of education are bitter, but the fruit is sweet.",
        "In learning, you will teach, and in teaching, you will learn.",
        "An investment in knowledge pays the best interest.",
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "The beautiful thing about learning is that no one can take it away from you.",
        "Learning never exhausts the mind.",
        "A teacher affects eternity; they can never tell where their influence stops.",
        "The whole purpose of education is to turn mirrors into windows.",
        "Education is not preparation for life; education is life itself.",
        "The only limit to our realization of tomorrow is our doubts of today.",
      ],
      currentQuote: "",
    };
  },
  mounted() {
    this.randomQuote();
    setInterval(this.randomQuote, 5000); // Change quote every 5 seconds
  },
  methods: {
    randomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes[randomIndex];
    },
  },
};
</script>

<style scoped>
.quote {
  font-size: 1.5em;
  text-align: center;
  margin: 20px 0;
  color: #f5f5f5;
  transition: color 0.5s ease;
}

/* Fade transition for quote changes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
