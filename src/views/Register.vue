<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form 
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field prepend-icon="person" name="username" label="Username" type="text" required
                    v-model="user.username"
                    :rules="rules.usernameRules"
                    >
                    </v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" required
                    v-model="user.password"
                    :rules="rules.passwordRules"
                    ></v-text-field>
                    <v-text-field prepend-icon="lock" name="passwordconf" label="Password Confirmation" id="passwordconf" type="password" required
                    v-model="user.passwordconf"
                    :rules="rules.passwordRules"
                    ></v-text-field>
                    <v-text-field prepend-icon="email" name="email" label="Email" id="email" type="email" required
                    v-model="user.email"
                    :rules="rules.emailRules"
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="onClickRegister">Register</v-btn>
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
                password: '',
                passwordconf: '',
                email: ''
            },

            rules: {
                usernameRules: [
                    v => !!v || 'Username is required',
                    v => v.length <= 24 || 'Username must be less than 24 characters',
                    v => v.length >= 6 || 'Username must be greater than 6 characters'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length <= 24 || 'Username must be less than 24 characters',
                    v => v.length >= 6 || 'Password must be greater than 6 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            }
        }
    },

    methods: {
        onClickRegister() {
            if (this.$refs.form.validate()) {
                console.log("SUCCESS");
                this.$store.dispatch('register', this.user);
            } else {
                console.log("FAIL");
            }
        }
    }

  }
</script>
