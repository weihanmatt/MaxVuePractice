<template>
  <div class="container">
    <form>
      <div class="row"
           v-show="!submitted">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <form action="">
            <div class="form-group">
              First Name: <input type="text"
                     v-model="firstName">
            </div>
            <div class="form-group">
              Last Name: <input type="text"
                     v-model="lastName">
            </div>
            <!-- Mail -->
            <div class="form-group">
              Email: <input type="email"
                     v-model="email">
            </div>
            <!-- Password -->
            <div class="form-group">
              Password: <input type="text"
                     v-model="password">
            </div>
            <!-- Store Data? Yes/No -->
            <div class="form-group">
              Store in Database?
              <input type="radio"
                     name="store"
                     v-model="store"
                     value="yes">Yes
              <input type="radio"
                     name="store"
                     v-model="store"
                     value="no">No
            </div>

            <button @click.prevent="tijiao"
                    class="btn btn-primary">submit</button>
          </form>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row"
         v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:{{fullName}} </p>
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{store}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submitted: false,
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      store: 'yes'

    }
  },
  methods: {
    tijiao () {
      this.submitted = true
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>
</style>
