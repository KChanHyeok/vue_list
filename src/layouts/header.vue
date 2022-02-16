<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav pills align="center" >
          <b-nav-item to='/home'  active-class='active'>마이홈</b-nav-item>
          <b-nav-item to='/image' active-class='active'>이미지</b-nav-item>
          <b-nav-item to='/list' active-class='active'>게시판</b-nav-item>
        </b-nav>
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