<template>
  <div class="year-page">
    <h1 class="title">{{ year }} Year</h1>

    <div class="subjects">
      <div v-for="subject in subjects" :key="subject.title" class="subject">
        <h2>{{ subject.title }}</h2>
        <div class="units">
          <transition-group name="fade" tag="div" class="cards-container">
            <div v-for="unit in subject.units" :key="unit.title" class="card">
              <h3>{{ unit.title }}</h3>
              <button @click="download(unit.pdf)">Download PDF</button>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearPage',
  data() {
    return {
      year: this.$route.params.year, // Get the year from route params
      subjects: this.getSubjects(this.$route.params.year) // Dynamically load subjects for the given year
    };
  },
  methods: {
    // Function to fetch the subjects for the specific year
    getSubjects(year) {
      const subjectsData = {
        1: [
          {
            title: 'GE3151 - Problem Solving and Python Programming',
            units: [
              { title: 'Unit 1 - COMPUTATIONAL THINKING AND PROBLEM SOLVING', pdf: 'https://drive.google.com/file/d/1Nt4z2bcAW31pAgLA2Tu7th9ruhz9IhMi/view?usp=sharing' },
              { title: 'Unit 2 - DATA TYPES, EXPRESSIONS, STATEMENTS', pdf: 'https://drive.google.com/file/d/1slbTHGec9122CD3MLCX8wFlIkx5ftPa8/view?usp=sharing' },
              { title: 'Unit 3 - CONTROL FLOW, FUNCTIONS, STRINGS', pdf: 'https://drive.google.com/file/d/1HzQx9oH207xCMRcDRSTO0Niu1WybQBBe/view?usp=sharing' },
              { title: 'Unit 4 - LISTS, TUPLES, DICTIONARIES', pdf: 'https://drive.google.com/file/d/10FtBJyLdyCMxioyKYWuow1DUe5ix01uS/view?usp=sharing' },
              { title: 'Unit 5 - FILES, MODULES, PACKAGES', pdf: 'https://drive.google.com/file/d/1gpJWvKQSWIPFMnaI-i9k8-C2VJqkC53n/view?usp=sharing' },
              { title: 'PSPP QB', pdf: 'https://docs.google.com/document/d/1zPpvWRQJCkWY3SWILEys90cNReKz6gWdzYdn1AiMq4Q/edit?usp=sharing' },
            ]
          },
          {
            title: 'GE3171 - Problem Solving and Python Programming Laboratory',
            units: [
              { title: 'LAB', pdf: 'https://docs.google.com/document/d/1BdbAPaVBjne_ISPnl0pCdTmPNxHV8_4m/edit?usp=sharing&ouid=114099811888996957917&rtpof=true&sd=true' },
            ]
          }
        ],
        3: [
          {
            title: 'CC3551  - DISTRIBUTED COMPUTING',
            units: [
              { title: 'Distributed Computing - Full Notes', pdf: 'https://docs.google.com/document/d/1laIYO5uzj2a3GTYoAdB24iUQJZGoTyJJ/edit?usp=sharing&ouid=114099811888996957917&rtpof=true&sd=true' },
              { title: 'Distributed Computing - QB', pdf: 'https://docs.google.com/document/d/1_b36Vck5ZiGqrb6Y6BjS0KAwUuI7lHri/edit?usp=sharing&ouid=114099811888996957917&rtpof=true&sd=true' },
            ]
          },
          {
            title: 'CCS335 - CLOUD COMPUTING & Lab',
            units: [
              { title: 'Cloud Computing - Full Notes', pdf: 'https://docs.google.com/document/d/1HQn4nlyaxlbtHQkNZDdZYbBnnhKCi-x4/edit?usp=sharing&ouid=114099811888996957917&rtpof=true&sd=true' },
              { title: 'Cloud Computing - QB', pdf: 'https://docs.google.com/document/d/1iRDNGX_71f2ucNA5oQ3YEHrObo4UMx6U/edit?usp=sharing&ouid=114099811888996957917&rtpof=true&sd=true' },
              { title: 'Cloud Computing - Lab Manual', pdf: 'https://drive.google.com/file/d/1C7O-XbjlmO6cc3s86dRSAXyat-fPi-Ua/view?usp=sharing' },
            ]
          }
        ],
        // Add more years and subjects here as needed
      };
      return subjectsData[year] || [];
    },

    // Method for downloading the PDF file
    download(filePath) {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filePath.split('/').pop(); // Use the filename from the path
      link.click();
    }
  }
};
</script>

<style scoped>
/* General layout */
.year-page {
  text-align: center;
  color: #ffffff;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.subjects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.subject {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  max-width: 100vw; /* Prevent horizontal overflow */
  overflow-x: hidden;
}

.card {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  width: calc(33% - 2rem); /* 3 cards per row on larger screens */
  max-width: 300px; /* Restrict max width for better mobile responsiveness */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.6s ease forwards;
  opacity: 0;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.card:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.card button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s ease;
}

.card button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter, .card {
  opacity: 0;
}

.fade-enter-to, .card {
  opacity: 1;
}

/* Keyframe for card fade-in effect */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    width: 100%; /* Full width on small screens */
  }

  .title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 1rem; /* Reduce padding on very small screens */
  }

  .title {
    font-size: 1.8rem;
  }

  .card button {
    padding: 0.4rem 0.8rem;
  }
}
</style>
