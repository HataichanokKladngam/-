<template>
    <div class="bg-[url(../assets/images/back.png)]">
    <div class="head" >
        <!-- <router-Link to="/Profile" 
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Profile</router-Link> -->
        <router-link to="/" class="bg-gradient-to-r  from-teal-300 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ...">Home</router-link>
        <router-link to="/profile" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." >Profile</router-link>
        <router-link to="/form" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." >Form</router-link>
    </div>
        <div class="all">
        <div class="h">
            <h1 class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><strong><ins>Team Teletubbie</ins></strong></h1>
        </div>
            
        <div>
            <img src="../assets/images/teletub.jpg" alt="tubbies" width="720" height="450" class="ml-96">
        </div>

        <div>
            <strong>This is website about Teletubbie Mambers</strong>
        </div>
    </div>
</div>
</template>
<script>

export default{
    
}
</script>

<style>
@import url('htps://fonts.googleapis.com/css2?family=Sriracha&display=swap');

.all{
    text-align: center;
    font-size: 200%;
    font-family: 'Sriracha', cursive;
    color: rgb(77, 106, 148);
}

.h{
    font-size: 250%;
    color: rgb(11, 48, 104);
    text-align: center;
    font-family: 'Sriracha', cursive;
    margin-left: auto;
    margin-left: auto;
    
    
}
img{
    max-width: 300px;
    justify-content: center;
}

.head{
    font-size: 150%;
    font-family: 'Sriracha', cursive;
    color: rgb(255, 255, 255);
    text-align: right;
    
}
</style>