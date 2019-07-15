<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDialogOpen" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Password {{type.charAt(0).toUpperCase() + type.slice(1)}}</span>
          <v-spacer></v-spacer>
          <v-btn icon light @click="closeDialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form @reset="onReset">
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field id="name" label="Password Name" v-model="password.name" required></v-text-field>
                  <v-text-field id="email" label="Email" v-model="password.email" required></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field id="username" label="Username" v-model="password.username" required></v-text-field>
                </v-flex>

                <v-flex xs6>
                  <v-text-field id="password" label="Password" v-model="password.password" required></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-textarea
                    id="description"
                    label="Description"
                    v-model="password.description"
                    rows="3"
                    max-rows="6"
                  ></v-textarea>
                </v-flex>

                <v-btn
                  color="primary"
                  @click="onSubmit"
                >{{type.charAt(0).toUpperCase() + type.slice(1)}}</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="float-right" type="reset" color="warning">Reset</v-btn>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import { type } from "os";
export default {
  data() {
    return {
      password: {
        name: "",
        username: "",
        password: "",
        email: "",
        description: ""
      }
    };
  },
  props: {
    type: String
  },
  methods: {
    onSubmit() {
      if (this.type == "add") {
        this.$http
          .post("password/save", {
            passwordEntity: this.password,
            username: this.$store.getters.username
          })
          .then(
            response => {
              this.password.id = response.body.id;
              this.$store.dispatch("addToPasswordList", this.password);
              this.$store.dispatch("showDialog", false);
            },
            () => {
              this.$store.dispatch("enableError", "Password couldn't save!");
            }
          );
      }

      if (this.type == "edit") {
        this.$http.put("password/update", this.password).then(
          response => {
            this.$store.dispatch("showDialog", false);
          },
          () => {
            this.$store.dispatch("enableError", "Password couldn't edit!");
          }
        );
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.$store.dispatch("resetPassword")
    },
    closeDialog() {
      this.$store.dispatch("showDialog", false)
    }
  },
  computed: {
    isDialogOpen() {
      if (this.type == "edit") {
        console.log(this.$store.getters.getPassword);
        
        this.password = this.$store.getters.getPassword
      } else {
        this.$store.dispatch("resetPassword");
        this.password = {
          name: "",
          username: "",
          password: "",
          email: "",
          description: ""
        };
      }
      return this.$store.getters.isDialogOpen;
    }
  }
};
</script>


