<template>
    <input v-model="value" type="text" >
</template>

<script>
export default {
    name: 'VmodelExample',
    compatConfig: {
        MODE: 3
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>