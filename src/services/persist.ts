import * as userInfo from '../constants/user'
import store from '../store/store';

function saveDataToStore() {
  if (localStorage.getItem(userInfo as any) !== null) {
    const user = localStorage.getItem(userInfo as any);
    const userparsed = JSON.parse(user as any);
    store.dispatch('saveUserName', userparsed);
  }
}

export default saveDataToStore;
