<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field prepend-icon="person" name="login" label="Login" type="text" required
                    v-model="user.username"
                    :rules="rules.usernameRules"
                    >
                    </v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" required
                    v-model="user.password"
                    :rules="rules.passwordRules"
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="onClickLogin">Login</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
        return {
            valid: true,
            user: {
                username: '',
                password: ''
            },

            rules: {
                usernameRules: [
                    v => !!v || 'Username is required',
                    v => v.length <= 24 || 'Username must be less than 24 characters'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length <= 24 || 'Username must be less than 24 characters'
                ]
            }
        }
    },

    methods: {
        onClickLogin() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('login', this.user)
            }
        }
    }
  }
</script>
