<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Ecosystem</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

