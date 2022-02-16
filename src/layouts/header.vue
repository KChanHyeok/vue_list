<template>
  <div>
    <b-card bg-variant="info" title="Card Title" no-body>
      <b-card-header  header-tag="nav">
        <div class="button">
          <b-button v-b-toggle.collapse-1 class="menubtn" variant="light" >메뉴</b-button> 
        </div>
        <b-collapse id="collapse-1" class="mt-1" >
          <b-nav vertical >
            <b-nav-item to='/home'  active-class='active'>마이홈</b-nav-item>
            <b-nav-item to='/image' active-class='active'>이미지</b-nav-item>
            <b-nav-item to='/list' active-class='active'>게시판</b-nav-item>
          </b-nav>
        </b-collapse>
      </b-card-header>
    </b-card>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>