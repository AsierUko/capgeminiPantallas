<template>
  <div class="detail">
        <!-- <div class="sub-title">circle</div> -->
        <div class="detail__block1">
          <div class="detail__user">
            <p class="detail__name">{{ dataDetail.name.first }} {{ dataDetail.name.last }}</p>
            <p>Email: {{ dataDetail.email }}</p>
            <p>Edad: {{ dataDetail.dob.age }}</p>
          </div>
          <div class="detail__avatar">
            <el-avatar :size="200" :src="dataDetail.picture.large"></el-avatar>
          </div>
          <div class="block">
            <div>
            </div>
          </div>
        </div>
        <div class="detail__block2">
          <div class="detail__user">
            <p>Ciudad: {{ dataDetail.location.city }}</p>
            <p>Calle: {{ dataDetail.location.street.name }}</p>
            <p>telefono: {{ dataDetail.phone }}</p>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    title: String,
    drawer: Boolean,
    dataDetail: null,
  },
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  mounted() {
    console.log(this.dataDetail, '------------')
  },
  computed: {

  },
  methods: {

  }
}
</script>


<style scoped lang="scss">
.detail{

  &__block1{
    height: 30%;
      display: flex;
      background: aliceblue;
  }
  &__block2{
    height: 70%;
  }
  &__user{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 30px;
  }
  &__avatar{
    align-items: flex-end;
    display: flex;
    span {
      margin: 0 0 -47px 0;
    }
  }

}
.el-avatar img{
  height: 90px;
  width: 90px;
}
</style>
