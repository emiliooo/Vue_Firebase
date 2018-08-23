<template>
  <div id="dashboard">
        <h3> Dashboard </h3>

      <div class="fixed-action-btn">
        <router-link to="/new">
              <i class="fas fa-5x fa-plus-circle"></i>
        </router-link>
      </div>
</div>
</template>

<script>
  import db from './firebaseInit';
    export default {
      name:'dashboard',
      data() {
        return {

        }
      },
      created () {
        db.collection('employees')

      }
    }
</script>



