<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>
    src
      pages
        simple
          main.js
      modules
        simple
          simpletext
            main.vue
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'simple demo and single vue file'
    }
  }
}
</script>
