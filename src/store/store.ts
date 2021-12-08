import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user';
import userAuth from './modules/userAuth';
import catchedWarns from './modules/catchedWarns';
import catchedErrors from './modules/catchedErrors';
import IUser from '../interfaces/userInterface';

const store = createStore({
  plugins: [
    createPersistedState({
      key: 'stateKey',
      paths: ['user', 'catchedWarns', 'catchedErrors'],
      getState(key, storage) {
        console.log('Key: ', key)
        console.log('Storage: ', storage)
      }
    })
  ],
  modules: {
    user,
    catchedWarns,
    catchedErrors,
    userAuth
  },
  state: {
    products: [],
    productCategories: [
      { genre: 'All', value: 'All' },
      { genre: 'Action', value: 'Action' },
      { genre: 'Shooter', value: 'Shooter' },
    ],
    users: [],
    userRegData: {} as IUser,
    loggedUser: {},
    showLoading: false,
    cartItems: [],
    cartItemCount: 0
  },
  mutations: {
    showLoadingSpinner(state, payload) {
      state.showLoading = payload;
    }
  },
  actions: {
    async fetchProducts() {
      await fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => { this.state.products = data })
        .catch((err) => console.log(err.message))
    },
    async fetchUsers() {
      await fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((data) => { this.state.users = data })
        .catch((err) => console.log(err.message))
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    productCategories(state) {
      return state.productCategories;
    }
  }
});
export default store;
