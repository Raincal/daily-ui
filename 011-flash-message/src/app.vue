<template>
  <div class="app">
    <div class="popups">
      <message-card type="success"></message-card>
      <message-card type="error"></message-card>
    </div>
  </div>
</template>

<script>
  import MessageCard from './components/MessageCard';

  export default {
    name: 'app',
    components: { MessageCard }
  };
</script>

<style lang="scss">
  @import '~reset.css';

  html, body, .app {
    width: 100%;
    height: 100%;
  }

  .app {
    background: linear-gradient(-135deg, rgba(255, 129, 100, 0.5), rgba(255, 213, 97, 0.5));
    display: flex;
    justify-content: center;
    align-items: center;

    .popups {
      display: flex;
      width: 800px;
      height: 536px;
    }
  }
</style>