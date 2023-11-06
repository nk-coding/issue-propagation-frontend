<template>
    <BaseLayout>
        <template #content>
            <GropiusCard class="register-container mt-5">
                <v-card-title class="pl-0">Register</v-card-title>
                <v-form class="mt-2" @submit.prevent="register">
                    <v-text-field v-bind="username" label="Username" class="mb-1" />
                    <v-text-field v-bind="displayName" label="Display name" class="mb-1" />
                    <v-text-field v-bind="email" label="Email" class="mb-1" />
                    <v-card-actions>
                        <v-spacer />
                        <DefaultButton variant="text" color="primary" type="submit">Register</DefaultButton>
                    </v-card-actions>
                </v-form>
            </GropiusCard>
        </template>
    </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import GropiusCard from "@/components/GropiusCard.vue";
import { toTypedSchema } from "@vee-validate/yup";
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = toTypedSchema(
    yup.object().shape({
        username: yup.string().required().label("Username"),
        displayName: yup.string().notRequired().label("Display name"),
        email: yup.string().email().notRequired().label("Email")
    })
);

const { defineComponentBinds, resetForm, handleSubmit, setValues } = useForm({
    validationSchema: schema
});

const username = defineComponentBinds("username");
const displayName = defineComponentBinds("displayName");
const email = defineComponentBinds("email");

function register() {

}
</script>
<style scoped>
.register-container {
    max-width: 500px;
    margin: 0 auto;
}
</style>
