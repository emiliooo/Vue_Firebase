<template>
  <div id="dashboard">
        <ul class="collection with-header">
          <li class="collection-header">
              <h4>Employees  </h4>
          </li>
          <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
            <div class="chip"> {{employee.dept}}   </div>
            {{employee.employee_id}} : {{employee.name}}

          <router-link class="secondary-content" v-bind:to="{name:'view-Employee',params:{ employee_id :employee.employee_id }}">
          <i class="far fa-address-card fa-2x"></i>
          </router-link>

          </li>
        </ul>

      <div class="fixed-action-btn">
        <router-link to="/new">
              <i class="fas fa-5x fa-plus-circle"></i>
        </router-link>
      </div>
  </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
      name:'dashboard',
      data() {
        return {
          employees:[]
        }
        console.log(employees )
      },
      created () {
        var connectDB = db;
        connectDB.collection('employees').get().then( res => {
          res.forEach( doc => {

            const data = {
                'id': doc.id,
                'employee_id' : doc.data().employee_id,
                'name' :doc.data().name,
               'dept' :doc.data().dept
              };
              this.employees.push(data)
             })
         })
      }
    }
</script>



