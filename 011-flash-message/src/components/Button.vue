<template>
  <div class="button" v-bind:class="status">
    {{ text | uppercase }}
  </div>
</template>

<script>
  export default {
    name: 'my-button',
    props: ['type'],
    data() {
      return {
        text: this.type === 'success' ? 'Keep Going' : 'Try Again',
        status: {
          success: this.type === 'success',
          error: this.type === 'error'
        }
      };
    }
  };
</script>

<style lang="scss">
  $successBtnColor: #42e846;
  $errorBtnColor: #e84242;

  .button {
    width: 170px;
    height: 45px;
    line-height: 45px;
    border-radius: 20px;
    font-size: 14px;
    color: white;
    margin: 47px auto;
    cursor: pointer;

    &.success {
      background: $successBtnColor;
      box-shadow: 5px 5px 20px rgba(66, 232, 70, 0.7);
    }

    &.error {
      background: $errorBtnColor;
      box-shadow: 5px 5px 20px rgba($errorBtnColor, .7);
    }
  }
</style>