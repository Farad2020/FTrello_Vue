<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3">

        <h3 class="text-left">Create New Account</h3>
        <form>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName"  placeholder="Full Name">
            <small id="fullNameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="re_password">Password</label>
            <input type="password" class="form-control" id="re_password" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rules">
            <label class="form-check-label" for="rules">I have read the terms of condition</label>
          </div>
          <button type="submit" class="btn btn-sm btn-primary float-right">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent"
};
</script>

<style scoped>

</style>