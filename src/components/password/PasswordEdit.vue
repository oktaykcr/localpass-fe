<template>
  <div>
    <h2>Password {{type.charAt(0).toUpperCase() + type.slice(1)}}</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label-for="name">
        <b-form-input
          id="name"
          :value="passwordChanged.name"
          required
          placeholder="Enter password name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="email">
        <b-form-input
          id="email"
          v-model="passwordChanged.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-input-group>
          <b-form-input
            id="username"
            v-model="passwordChanged.username"
            required
            placeholder="Enter username"
          ></b-form-input>
          <b-form-input
            id="password"
            v-model="passwordChanged.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group>
        <b-form-textarea
          id="description"
          v-model="passwordChanged.description"
          placeholder="Enter password description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">{{type.charAt(0).toUpperCase() + type.slice(1)}}</b-button>
      <b-button class="float-right" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>


<script>
import { type } from 'os';
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
      if(this.type == "add") {
        this.$http.post('save', this.password).then(
          response => {
              
          }, () => {
            console.log("ERROR");
            
          }
        );
      }

      if(this.type == "edit") {
        this.$http.put('update', this.password).then(
          response => {
              
          }, () => {
            console.log("ERROR");
            
          }
        );
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.$store.dispatch('resetPassword');
    }
  },
  computed: {
    passwordChanged() {
      if(this.type == "edit") {
        return this.password = this.$store.state.password;
      } else {
        this.$store.dispatch('resetPassword');
        this.password = {
          name: "",
          username: "",
          password: "",
          email: "",
          description: ""
          };
        return this.password;
      }
    }
  }
};
</script>


