<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <a class="navbar-brand" href="/">F-Trello </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto  d-flex flex-row-reverse w-100">
        <li class="nav-item active">
          <a class="nav-link" href="/">All Cards <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#/register/">Register<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#/login/">Login <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

</style>