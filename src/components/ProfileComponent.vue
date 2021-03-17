<template>

  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3">
        <h3 class="text-left">Update Profile Data</h3>
        <form>
          <div class="form-group">
            <label for="personal_fullName">Full Name</label>
            <input type="text" class="form-control" id="personal_fullName"  placeholder="Full Name" value="ExampleName">
          </div>
          <div class="form-group">
            <label for="personal_email">Email address</label>
            <input type="email" class="form-control" id="personal_email" aria-describedby="emailHelp" value="example@mail.ru" readonly>
          </div>
          <button type="submit" class="btn btn-sm btn-primary float-right">Submit</button>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3 pt-3">
        <h3 class="text-left">Update Password</h3>
        <form>
          <div class="form-group">
            <label for="old_password">Old Password</label>
            <input type="password" class="form-control" id="old_password">
          </div>
          <div class="form-group">
            <label for="new_password">New Password</label>
            <input type="password" class="form-control" id="new_password">
          </div>
          <div class="form-group">
            <label for="re_password">Repeat New Password</label>
            <input type="password" class="form-control" id="re_password">
          </div>
          <button type="submit" class="btn btn-sm btn-primary float-right">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent"
};
</script>

<style scoped>

</style>