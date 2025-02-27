<template>
    <header class="header">
      <h1 class="site-title">Learners-Den</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #282c34;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: left; /* Center the title */
    align-items: center;
    height: 60px; /* Set a fixed height for the header */
    margin: 0; /* Remove any default margin */
    animation: slideDown 0.5s ease forwards; /* Slide down animation */
  }
  
  .site-title {
    font-size: 2.5rem; /* Increase font size for emphasis */
    text-align: left;
    opacity: 0; /* Start invisible for fade-in effect */
    animation: fadeIn 1s ease forwards; /* Fade-in animation */
    animation-delay: 0.5s; /* Delay to start after the slide down */
    font-family: monospace;
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%); /* Start above the view */
    }
    to {
      transform: translateY(0); /* End at its position */
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0; /* Start invisible */
    }
    to {
      opacity: 1; /* End fully visible */
    }
  }
  </style>
  