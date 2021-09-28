<template>
  <div id="app">
    <main>
      <calculator/>
    </main>
  </div>
</template>

<script>
import Calculator from './components/calculator/Calculator';

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
* {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  width: 950px;
  max-width: 100%;
  margin: 0 auto;
}

body {
  min-height: 100%;
  margin: 0px;

}

button {
  border-radius: 5px;
  padding: 13px 20px;
  cursor: pointer;
}

.button {
  border: 1px dashed #CBC9C9;
  background: transparent;
  color: #383129;

  &:active {
    background: #E0DEDE;
  }

  &:hover {
    background: #F2F2F2;
  }

  &:disabled {
    color: #B5B3B1;
    background: transparent;
  }

  &_style2 {
    color: #FFFFFF;
    border: none;
    background: #FF962B;

    &:hover {
      background: #F88D20;
    }

    &:active {
      background: #ED7D0B;
    }

    &:disabled {
      color: #B5B3B1;
      background: #EEECEB;
    }
  }
}
</style>
