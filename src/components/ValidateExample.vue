<template>
    <ValidationForm>
        <Field v-model="url" name="name" :rules="validationRule" v-slot="{ field, errorMessage }" validate-on-input>
            <input v-bind="field" type="text">
            <br>
            <strong>{{ errorMessage }}</strong>
            <p>Hint: Enter a secure password you can remember</p>
        </Field>
        current: {{ url }} <br>
        <button @click.prevent="setUrl">change url programmatically</button>
    </ValidationForm>
</template>

<script>
import { Field, Form as ValidationForm } from 'vee-validate';

export default {
    name: 'ValidateExample',
    components: {
        ValidationForm,
        Field
    },
    data() {
        return {
            url: 'initial'
        }
    },
    methods: {
        setUrl() {
            this.url = 'foo'
        },
        validationRule(value) {
            if (!value) {
                return 'its required'
            }
            if (value === 'foo') {
                return 'no foo allowed!'
            }
            return true
        }
    }
}
</script>