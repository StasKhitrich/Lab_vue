<template>
  <div class="wrapper">
    <h1>Admin page</h1>
    <div class="admin-actions">
      <div class="admin-actions__item">
        <router-link to="/admin/products" class="action-link">Open products list</router-link>
      </div>
      <div class="admin-actions__item">
        <router-link to="/home" class="action-link">Go to homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Admin',
  computed: {
    ...mapState({
      loggedUser: (state) => state.user.loggedUser
    })
  },
  mounted() {
    this.checkRole();
  },
  methods: {
    checkRole() {
      if (this.loggedUser.role !== 'admin') {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid green;
  text-align: center;
}
.admin-actions {
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
}
.admin-actions__item {
  border: 1px solid white;
  transition: 0.3s;
}
.admin-actions__item:hover {
  transition: 0.3s;
  border: 1px solid green;
}
.action-link {
  color: white;
  text-decoration: none;
  padding: 25px 15px;
}
</style>
