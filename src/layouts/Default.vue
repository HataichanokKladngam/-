<template>
    
    <div class="head2">
        <!-- <router-link to="/" class="bg-violet-500 hover:bg-violet-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Home</router-link> -->
        <router-link to="/" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Home</router-link>
        <router-link to="/form" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." >Form</router-link>
        <div class="h">
            <!-- <h1 class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><strong><ins>Profile</ins></strong></h1> -->
        </div>
        <slot></slot>
    </div>
    
    
    
</template>
<script>

export default{
   
}
</script>

<style>

.head2{
    font-size: 150%;
    font-family: 'Sriracha', cursive;
    text-align: left;
    color: rgb(62, 0, 207);
    background-color: rgb(250, 250, 156);
}
</style>