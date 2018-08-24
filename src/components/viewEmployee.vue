<template>
  <div id="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{name}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name:'View-employee',
    data() {
      return {

      }
    },
    beforeRouteEnter(to,from,next){
      db.collection('employees').where('employee_id',
        '==', to.params.employee_id).get()
        .then(res => {
          res.forEach(doc => {
            next(vm => {
              vm.employee_id = doc.data().employee_id
              vm.name = doc.data().name
              vm.dept = doc.data().dept
              vm.position = doc.data().position
           })
          })
        })
    }
  }
</script>
