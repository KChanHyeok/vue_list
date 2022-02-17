<template>
  <nav>
    <b-navbar toggleable type="dark" variant="info">
    <router-link
      to='/list' 
      custom v-slot="{navigate}"
    >
      <b-navbar-brand class="ml-2" @click="navigate">
        MYPAGE
      </b-navbar-brand>
    </router-link>
    <b-navbar-toggle class="mr-3" target="navbar-toggle-collapse">  
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-2">
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
  </nav>
</template>

<script>

export default {
}
</script>

<style>
</style>