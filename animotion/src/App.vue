<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <hr>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition appear
                            enter-active-class="animated tada"
                            leave-active-class="bounce animated">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                        @click="whichSelected === 'app-success' ? whichSelected = 'app-warring' : whichSelected = 'app-success'">Toggle</button>
                <br>
                <br>
                <transition enter-active-class="animated tada"
                            leave-active-class="bounce animated" mode="out-in">
                    <component :is="whichSelected"></component>
                </transition>
                <hr>
                <br>
                <button class="btn btn-primary" @click="addItem">cool</button>
                <div>
                    <ul class="list-group">
                        <transition-group name="slide">
<!--                                            enter-active-class="animated fadeInRight"-->
<!--                                          leave-active-class="fadeOutLeft animated"-->

                            <li class="list-group-item"
                                v-for="(number,index) in numbers"
                                @click="deleteItem(index)"
                                style="cursor: pointer"
                                :key="number">{{number}}</li>
                        </transition-group>

                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Warring from './Warring.vue'
    import Success from './Success.vue'
    export default {
        data() {
            return {
                show: true,
                whichSelected: 'app-success',
                numbers: [1,2,3,4,5]
            }
        },
        components: {
            appWarring: Warring,
            appSuccess: Success
        },
        methods:{
            addItem(){
                const pos = Math.floor(Math.random() * this.numbers.length);

                this.numbers.splice(pos,0,this.numbers.length + 1)
            },
            deleteItem(index){
                this.numbers.splice(index,1)
            }
        }
    }
</script>


<style>
    .fade-entry{
        opacity: 0;
    }
    .fade-entry-active{
        transition: opacity 1s;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
    .slide-entry{

    }
    .slide-entry-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }
    .slide-move{
        transition: transform 1s;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }
</style>
