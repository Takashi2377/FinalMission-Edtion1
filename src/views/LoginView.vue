<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <h2 class="row justify-content-center pb-2">登入頁面</h2>
      <div class="col-8">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted row justify-content-center">
      &copy; 2023~∞ - 六角學院
    </p>
    <RouterLink class="row justify-content-center text-secondary" to="/"
      >回到前台</RouterLink
    >
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$http
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `hexToken=${token};expires=${new Date(
            expired
          )}; path=/`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
