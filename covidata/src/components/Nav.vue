<template>
  <div id="nav">
    <div class="center">
      <vs-navbar fixed  target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active">
        <template #left>
          <router-link to="/">
          <img id="big-logo" src="../assets/img/covidata-logo.png" alt="">
          </router-link>
        </template>
        <template #right>
          <div class="routes-div">
            <router-link to="country">
            <vs-navbar-item :active="active == 'country'" id="country">
              Country
            </vs-navbar-item>
            </router-link>
            <router-link to="about">
            <vs-navbar-item :active="active == 'about'" id="about">
              About 
            </vs-navbar-item>
            </router-link>
              </div>
              <vs-button class="btn-gs">Get Started</vs-button>
            </template>
      </vs-navbar>
      <div id="padding-scroll-content" class="square">
        <div class="child">
          child 1
        </div>
        <div class="child">
          child 2
        </div>
        <div class="child">
          child 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data:() => ({
      active: 'statistics'
    })
  }
  </script>

<style>
.vs-navbar {
  max-height: 60px;
  overflow: hidden;
}

#big-logo {
  position: relative !important;
  height: 150px;
  width: 120px;
  margin-left: 100px;
  padding-top: 10px;

}
.vs-navbar__right {
    margin-right: 100px;
}
a {
  color: inherit;
}
</style>