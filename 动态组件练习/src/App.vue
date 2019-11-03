<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary"
                @click="whichColor = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success"
                @click="whichColor = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger"
                @click="whichColor = 'appRed'">Load Red Template</button>
        <hr>
        <component :is="whichColor">
          <p>this is the content</p>
        </component>
        <!-- <app-blue>
            <p>this is the content</p>
          </app-blue>
          <app-green>
            <p>this is the content2</p>
          </app-green>
          <app-red>
            <p>this is the content3</p>
          </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue'
import Green from './components/Green'
import Red from './components/Red'

export default {
  data () {
    return {
      whichColor: 'appBlue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>
 
<style>
</style>
