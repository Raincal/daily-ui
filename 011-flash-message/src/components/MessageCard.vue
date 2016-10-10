<template>
  <div class="message-card">
    <img :src="images" alt="">
    <h2 class="title">{{ title | uppercase }}</h2>
    <p class="content" v-html="content"></p>
    <my-button :type="type"></my-button>
  </div>
</template>

<script>
  import MyButton from './Button';

  export default {
    name: 'message-card',
    props: ['type'],
    components: { MyButton },
    data() {
      if (this.type === 'success') {
        return {
          images: 'src/assets/success.png',
          title: 'oh hell yeah!',
          content: 'Looks like you\'re on <br/> the right path!',
          buttonText: 'Keep Going'
        };
      } else if (this.type === 'error') {
        return {
          images: 'src/assets/error.png',
          title: 'Really Dude?',
          content: 'This can\'t be good. You just <br/> broke the interwebs!',
          buttonText: 'Try Again'
        };
      }
    }
  };
</script>

<style lang="scss">
  @import url('https://fonts.gmirror.org/css?family=Montserrat');  

  .message-card {
    font-family: Montserrat, Arial;
    width: 370px;
    height: 536px;
    background: #fafafa;
    border-radius: 10px;
    margin-left: 30px;
    text-align: center;

    .title {
      margin: 48px 0 24px 0;
      font-size: 18px;
      font-weight: bold;
      color: #353434;
    }

    .content {
      font-size: 14px;
      color: #8a8a8a;
      font-weight: 100;
      line-height: 24px;
    }
  }
</style>