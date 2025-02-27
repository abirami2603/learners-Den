<template>
  <div class="card" @click="navigateToYear">
    <h2>{{ romanYear }} Year</h2>
  </div>
</template>

<script>
export default {
  props: ['year'],
  computed: {
    romanYear() {
      // Map numbers 1-4 to their Roman numeral equivalents
      const romanMap = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV'
      };
      
      // Return the Roman numeral if year is between 1 and 4, else return the number itself
      return romanMap[this.year] || this.year;
    }
  },
  methods: {
    navigateToYear() {
      this.$router.push({ name: 'YearPage', params: { year: this.year } });
    },
  },
};
</script>

<style scoped>
/* Your existing CSS code */
</style>
