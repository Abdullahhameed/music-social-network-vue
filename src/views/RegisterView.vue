<template>
    <div id="register">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>

                    <div class="mb-4">
                        <TextInput
                            label="First Name"
                            :labelColor="false"
                            placeholder="John"
                            v-model:input="firstName"
                            inputType="text"
                            :error="errors.first_name ? errors.first_name[0] : ''"
                        />
                    </div>
                    <div class="mb-4">
                        <TextInput
                            label="Last Name"
                            :labelColor="false"
                            placeholder="Doe"
                            v-model:input="lastName"
                            inputType="text"
                            :error="errors.last_name ? errors.last_name[0] : ''"
                        />
                    </div>
                    <div class="mb-4">
                        <TextInput
                            label="Email"
                            :labelColor="false"
                            placeholder="john.doe@gmail.com"
                            v-model:input="email"
                            inputType="email"
                            :error="errors.email ? errors.email[0] : ''"
                        />
                    </div>
                    <div class="mb-4">
                        <TextInput
                            label="Password"
                            :labelColor="false"
                            placeholder="********"
                            v-model:input="password"
                            inputType="password"
                            :error="errors.password ? errors.password[0] : ''"
                        />
                    </div>
                    <div class="mb-4">
                        <TextInput
                            label="Confirm Password"
                            :labelColor="false"
                            placeholder="********"
                            v-model:input="confirmPassword"
                            inputType="password"
                        />
                    </div>
                        <!-- <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-100">First Name</label>
                        <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /> -->
                    <!-- <span class="text-red-500">This is an error message</span> -->
                    <button class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide"
                        type="submit" @click="register">Register</button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Already have an account?
                    <router-link to="login" class="text-blue-500 no-underline hover:underline">
                        Login
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import TextInput from '@/components/global/TextInput.vue';
import { useUserStore } from '@/store/user-store';
import axios from 'axios';
import { ref } from 'vue';

const userStore = useUserStore()

let errors = ref([]);
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);

const  register = async () => {
    errors.value = []

    try {
        let res = await axios.post('api/register', {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            password: password.value,
            password_confirmation: confirmPassword.value,
        });

        userStore.setUserDetails(res)
    } catch(err) {
        errors.value = err.response.data.errors
    }
}

</script>

<style lang="scss"></style>