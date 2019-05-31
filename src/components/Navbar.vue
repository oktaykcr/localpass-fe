<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        LocalPass
        <i class="fas fa-lock"></i>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" active-class="active" exact>Password</b-nav-item>
          <b-nav-item to="/about" active-class="active">About</b-nav-item>
          <b-nav-form>
            <b-input-group>
              <b-form-input @input="onSearchTyping" size="sm" class="mr-sm-2 search-input" placeholder="Search"></b-form-input>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" active-class="active">Register</b-nav-item>
          <b-nav-item to="/" active-class="active">Sign In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    onSearchTyping(value) {
        this.$store.commit('handleSearchInput', value);
    }
  }
};
</script>

<style scoped>
.search-input {
  color: #ababab;
  background-color: transparent;
  border-radius: 5px;
  border: solid #ababab 1.5px;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: 1em;
}

.search-input::placeholder {
  color: whitesmoke;
}

.search-input:focus {
  border: solid whitesmoke 1.5px;
  background-color: azure;
  background: transparent;
  color: white;
}
</style>


