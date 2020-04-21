<template>
  <div>
    <a-button type="primary" shape="square" @click="change" :loading="flag">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <a-config-provider :autoInsertSpaceInButton="false">
      <a-button type="primary">按钮</a-button>
    </a-config-provider>
    <a-button type="primary">按钮</a-button>
    <a-button type="link">Link</a-button>
  </div>
</template>

<script>
  export default {
    name:"App",
    data(){
      return {
        flag:false
      }
    },
    methods:{
      change(){
        this.flag=true;
        setTimeout(()=>{
          this.flag=false;
        },3000)
      }
    }
  }
</script>

<style scoped>

</style>