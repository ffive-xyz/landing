<template>
  <div>
    <h1 @click="login">login</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default class Auth extends Vue {
  login = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const credentials = await firebase.auth().signInWithPopup(provider);
    console.log(credentials.user?.displayName);

    const database = firebase.firestore();
    //database.collection("users").
  };

  logout = async () => {
    await firebase.auth().signOut();
  };
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 0.5em 0;
  margin-bottom: 0;
}
</style>
