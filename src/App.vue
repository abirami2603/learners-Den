<template>
  <div id="app">
    <Header />
    <div class="video-container">
      <video id="background-video" muted autoplay loop playsinline>
        <source src="./assets/videos/background.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
    <main class="router-view">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  position: relative;
  height: 100vh; /* Set height to 100% of viewport */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack children vertically */
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Send the video behind other content */
}

#background-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the whole area */
  filter: brightness(50%); /* Dims the video */
}

main {
  position: relative;
  z-index: 1; /* Keep content above the video */
  color: white; /* Adjust text color for visibility */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add shadow for better contrast */
  flex: 1; /* Allow main to grow and fill available space */
  display: flex; /* Allow flexbox properties */
  flex-direction: column; /* Align children vertically */
  justify-content: center; /* Center content vertically */
  background-color: rgba(0, 0, 0, 0.5); /* Temporary background color for visibility */
}

footer {
  z-index: 1; /* Ensure footer is above the video */
  margin: 0; /* Remove margin for no unwanted space */
  padding: 10px 20px; /* Add some padding for internal spacing */
  width: 100%; /* Ensure footer spans the full width */
  background-color: rgba(255, 255, 255, 0.1); /* Optional: add background color for visibility */
  text-align: center; /* Center align text in footer */
}

</style>
