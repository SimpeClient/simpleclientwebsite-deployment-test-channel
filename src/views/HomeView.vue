<script>
</script>
<template>
  <main>
    <section class="start-section" id="start-section">
      <h1 class="Name">Simple Client</h1>
      <h3 class="slogan">Simply the Best Choice to enhance you're Minecraft Experience.</h3>

      <div class="button-wrapper">
        <nav>
      <RouterLink to="/download" class="button button-download">Download</RouterLink>
      <RouterLink to="/discord" class="button button-discord">Discord</RouterLink>
        </nav>
      </div>
    </section>

    <section class="support-section" id="support-section">
      <div class="support-wrapper">

        <div class="support-tile support-tile-support">
          <svg class="support-tile-icon" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>headset</title>
            <path d="M0 16q0 0.832 0.576 1.44t1.44 0.576q0.064 0 0.192-0.032t0.128-0.032q0.448 1.28 1.408 2.272t2.272 1.44v2.336q0 1.664 1.152 2.848t2.848 1.152q0 0.832 0.576 1.44t1.408 0.576h2.016q0.8 0 1.408-0.576t0.576-1.44v-1.984q0-0.832-0.576-1.408t-1.408-0.608h-2.016q-0.832 0-1.408 0.608t-0.576 1.408q-0.832 0-1.44-0.576t-0.576-1.44v-16h2.016q0-0.832 0.576-1.408t1.408-0.576h8q0.832 0 1.408 0.576t0.608 1.408h1.984v14.016q1.952 0 3.488-1.152t2.176-2.912q0.032 0 0.128 0.032t0.224 0.032q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576q-0.096 0-0.192 0.032t-0.16 0.032q-0.416-1.28-1.408-2.272t-2.24-1.44v-2.368q0-2.464-1.76-4.224t-4.256-1.76h-8q-2.496 0-4.256 1.76t-1.728 4.224v2.368q-1.312 0.48-2.272 1.44t-1.408 2.272q-0.032 0-0.16-0.032t-0.16-0.032q-0.832 0-1.44 0.576t-0.576 1.408zM4 18.016v-4h2.016v4h-2.016zM26.016 18.016v-4h1.984v4h-1.984z"></path>
          </svg>
          <h2 class="support-tile-title">Support</h2>
          <h4 class="support-tile-text">
            Join our Discord server to get Support from Us & the Community, you can also request Features there or chat with other People!
          </h4>
        </div>

        <div class="support-tile support-tile-bugs">
          <svg class="support-tile-icon" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>alt-cross-window</title>
            <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-18.016h24v18.016q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM4 4q0-0.832 0.576-1.408t1.44-0.576 1.408 0.576 0.576 1.408-0.576 1.44-1.408 0.576-1.44-0.576-0.576-1.44zM10.336 20.832l2.848 2.848 2.816-2.848 2.816 2.848 2.848-2.848-2.848-2.816 2.848-2.848-2.848-2.816-2.816 2.816-2.816-2.816-2.848 2.816 2.848 2.848z"></path>
          </svg>
          <h2 class="support-tile-title">Bugs</h2>
          <h4 class="support-tile-text">
            When you find any Bug in our Client Website or other Project related to the Simpleclient report it on our Discord Server and we will try to Fix it as Soon as Possible.
          </h4>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.support-section {
  position: relative;
  top: 450px;
}

.support-tile {
  background: #7619b4;
  width: 390px;
}

.support-tile-text {
  text-align: center;
  color: #9ba8b2;
  max-width: 300px;
}

.support-tile-title {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 30px;
}

.support-tile-icon {
  transform: translateX(140%);
  height: 100px;
  width: 100px;
  fill: white;
  background: #7619b4;
  padding: 10px;
  border-radius: 100%;
}

.support-wrapper {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.Name {
  text-align: center;
  position: absolute;
  top: 180px;
  font-family: "Arial Black";
  font-size: 50px;
  color: #64009f;
  left: 50%;
  transform: translateX(-50%);
}

.slogan {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  top: 290px;
  color: #9ba8b2;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  top: 320px;
}

.button {
  color: #EEEEEE;
  font-size: 20px;
  background: #2d2d2d;
  border: none;
  text-decoration: none;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.5s ease-in-out;
}

.button:hover {
  background: #414141;
}

.button-download {
  background: #5d009b;
}

.button-download:hover {
  background: #7619b4;
}
</style>
