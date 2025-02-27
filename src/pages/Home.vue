<template>
  <div class="home">
    <div class="intro">
      <h1>Welcome to Learners Den!</h1>
      <p>{{ randomQuote }}</p>
    </div>

    <div class="year-cards" id="grid">
      <div
        v-for="(year, index) in years"
        :key="year"
        class="year-card card"
        @click="navigateToYear(year)"
        @mousemove="move(index)"
        @mouseleave="leave(index)"
        @mouseover="over(index)"
        ref="cards"
      >
     

        <div class="reflection" ref="reflections"></div>
        <h2>{{ convertToRoman(year) }} Year</h2>
        <p>Click to explore study materials.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      quotes: [
        "Education is the most powerful weapon which you can use to change the world.",
        "The roots of education are bitter, but the fruit is sweet.",
        "An investment in knowledge pays the best interest.",
        "What we learn with pleasure we never forget.",
        "The beautiful thing about learning is that no one can take it away from you."
      ],
      years: [1, 2, 3, 4],
      randomQuote: ''
    };
  },
  created() {
    this.setRandomQuote();
  },
  methods: {
    setRandomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.randomQuote = this.quotes[randomIndex];
    },
    navigateToYear(year) {
      this.$router.push({ path: `/year/${year}` });
    },
    convertToRoman(year) {
      const romanNumerals = ["I", "II", "III", "IV"];
      return romanNumerals[year - 1];
    },
    over(index) {
      const refl = this.$refs.reflections[index];
      refl.style.opacity = 1;
    },
    leave(index) {
      const card = this.$refs.cards[index];
      const refl = this.$refs.reflections[index];
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },
    move(index) {
      const card = this.$refs.cards[index];
      const refl = this.$refs.reflections[index];

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale(val, inMin, inMax, outMin, outMax) {
      return outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin);
    }
  }
};
</script>

<style scoped>
/* CSS styling as provided */

.home {
  text-align: center;
  padding: 20px;
  height: auto;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 100px; 
  animation: fadeIn 1s ease-out;
}

.intro {
  margin-bottom: 40px;
  animation: fadeIn 1s ease-out;
  font-family: monospace;
  font-size: 30px;
}

.year-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  animation: fadeIn 1s ease-out;
}

.card {
  background-color: rgba(255, 255, 255, 0.5); /* Add a semi-transparent background color */
  background-image: url('https://img.freepik.com/free-photo/one-person-typing-futuristic-glowing-computer-generated-by-ai_188544-13364.jpg?t=st=1731310365~exp=1731313965~hmac=1629feac919c8049666d5919c4163ea358772479ccf9ad0f9b514f4d8140e656&w=1380'); /* Keep the default background image */
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  transition: all 0.1s ease;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  cursor: pointer;
}

.card:hover {
  transform: scale(2);
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none; /* Hide the image inside the card, to only show the background */
}

.reflection {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  transition: all 0.1s ease;
  opacity: 0;
  mix-blend-mode: soft-light;
}


.year-card {
  font-family: monospace;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
  box-sizing: border-box;
  animation: slideUp 0.6s ease-out forwards;
}

.year-card h2 {
  margin: 0;
}

.year-card p {
  margin-top: 10px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .year-cards {
    gap: 15px;
  }

  .card {
    width: 180px;
    height: 180px;
  }
}

@media screen and (max-width: 480px) {
  .year-cards {
    gap: 10px;
  }

  .card {
    width: 150px;
    height: 150px;
  }

  .intro {
    font-size: 20px;
  }
}
</style>
