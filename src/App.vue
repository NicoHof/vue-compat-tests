<template>
    <div style="height: 100vh">
        <h1>AG Grid</h1>
        <GridExample />

        <h1>Validate</h1>
        <ValidateExample />

        <h1>V-MODEL</h1>
        <VmodelExample v-model="foo" />
        <br>
        Parent foo: {{ foo }}
        <br>
        <button @click="changeFoo">changefoo</button>
    </div>
</template>

<script>
import GridExample from './components/GridExample';
import ValidateExample from './components/ValidateExample';
import VmodelExample from './components/VmodelExample';

export default {
    name: 'App',
    compatConfig: {
        MODE: 2,
    },
    components: {
        ValidateExample,
        VmodelExample,
        GridExample
    },
    data() {
        return {
            foo: 'hello world'
        }
    },
    methods: {
        changeFoo() {
            this.foo = 'resetter!!'
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
