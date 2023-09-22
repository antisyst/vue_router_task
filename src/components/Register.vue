<template>
    <div class="register_section">
        <h1 class="first_content">
            Start Free <br> today
        </h1>
        <form @submit.prevent="submitForm">
           <div>
                <label for="name">Username:</label>
                <input type="text" id="name username" placeholder="Type your username" v-model="username"            @input="checkInput(username)"
               :class="{ 'error-input': isInvalidUsername }">
           </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Type your password"  v-model="password"   @input="checkInput(password)"
                :class="{ 'error-input': isInvalidPassword }">
            </div>
            <div v-if="formError" style="color: red;">Please fill in both fields.</div>
            <button type="submit" class="create_button">CREATE <br> ACCOUNT</button>
        </form>
   </div>
</template>
<style scoped lang="scss">
.register_section {
    margin-top: 28vh;
    padding-bottom: 5vh;
}
form {
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
    gap: 30px 0;
    align-items: center;
    justify-content: center;

    .create_button {
            display: flex;
            cursor: pointer;
            flex-direction: column;
            justify-content: center;
            border-radius: 50%;
            width: 156px;
            height: 156px;
            border: none;
            font-size: 20px;
            color: var(--color-white);
            align-items: center;
            font-weight: 900;
            background: linear-gradient(304deg, rgba(51, 123, 190, 0.20) 0%, rgba(51, 123, 190, 0.00) 100%), rgba(255, 255, 255, 0.08);;
            transition: all 0.2s ease-out;

            &:hover {
                background: var(--color-main);
                transform: scale(1.03);
            }
        }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px 0;
        align-items: flex-start;
        justify-content: center;

        label {
            font-size: 16px;
            color: var(--color-white);
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            opacity: 0.8;
        }
        input {
            outline: none;
            width: 420px;
            font-family: 'Inter', sans-serif;
            padding: 24px 22px;
            font-family: Inter;
            color: var(--color-white);
            border: 2px solid rgba(0, 0, 0, 0);
            font-weight: 700;
            font-size: 17px;
            border-radius: 16px;
            height: 64px;
            background: linear-gradient(304deg, rgba(51, 123, 190, 0.20) 0%, rgba(51, 123, 190, 0.00) 100%), rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease-out;

            @media only screen and (max-width: 1000px) {
                width: 350px;
            }

            &:focus {
                border: 2px solid var(--color-main);
            }

            &::placeholder {
                color: var(--48, rgba(255, 255, 255, 0.48));
                font-weight: 700;
                font-family: 'Inter', sans-serif;
            }
        }
    }
}
.error-input {
  border: 2px solid #ff0000;  
}
</style>
<script>

import { useAuthStore, useItemStore } from '../stores/store';


export default {
  data() {
    return {
      username: "",
      password: "",
      formError: false,
      isInvalidUsername: false,
      isInvalidPassword: false,
    };
  },
  methods: {
    login() {
      useAuthStore.login();
    },
    selectItem(item) {
      useItemStore.selectItem(item);
    },
    submitForm() {
      if (this.username === "" || this.password === "") {
        this.formError = true;
      } else {
        this.formError = false;
        console.log("Username:", this.username);
        console.log("Password:", this.password);

        // Call the login method from useAuthStore here
        useAuthStore.login();

        this.$router.push({ path: '/connect' });
      }
    },
    checkInput(input) {
      if (input === this.username) {
        this.isInvalidUsername = input.length < 3 && input.length > 0;
      } else if (input === this.password) {
        this.isInvalidPassword = input.length < 3 && input.length > 0;
      }
    },
  },
};

</script>