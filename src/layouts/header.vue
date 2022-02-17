<template>
  <div>
    <b-navbar toggleable type="dark" variant="info">
    <b-navbar-brand class="p-2" href="#">MYPAGE</b-navbar-brand>
    <b-navbar-toggle class="toggleBox" target="navbar-toggle-collapse">  
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="p-2">
        <router-link 
          to='/home' 
          custom v-slot="{navigate, isActive}"
        >
          <b-nav-item :active='isActive' @click='navigate'>
            마이홈
          </b-nav-item>
        </router-link>
        <router-link 
          to='/image' 
          custom v-slot="{navigate, isActive}"
        >
          <b-nav-item :active='isActive' @click='navigate'>
            이미지
          </b-nav-item>
        </router-link>
        <router-link 
          to='/list' 
          custom v-slot="{navigate, isActive}"
        >
          <b-nav-item :active='isActive' @click='navigate'>
            게시판
          </b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>