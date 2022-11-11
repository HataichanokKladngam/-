<template>
    <div id="background" class="min-h-screen">
        <div class="fixed bottom-0 left-0 text-purple-800 text-xl"><strong>PreDevCamp</strong></div>
    <!-- <div class="bg-[url(../assets/images/back.png)]"> -->
    <div class="head" >
        <!-- <router-Link to="/Profile" 
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Profile</router-Link> -->
        <router-link to="/" class="bg-gradient-to-r  from-teal-300 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ...">Home</router-link>
        <router-link to="/profile" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." >Profile</router-link>
        <router-link to="/form" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." >Form</router-link>
    </div>
        <!-- <div class="all"> -->
        <div class="h">
            <h1 class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><strong><ins>Team Teletubbie</ins></strong></h1>
            <h2 ><strong>กลุ่มเทเลทับบี้</strong></h2>
        </div>
            
        <div>
            <img src="../assets/images/teletub.jpg" alt="tubbies" width="720" height="450" class="ml-96">
        </div>

        <div class="font">
            <strong>This is website about Teletubbie Mambers</strong>
            <p>พวกเรากลุ่มเทเลทับบี้ ชอบทำตัวเหมือนเด็ก เน้นเสียงหัวเราะ ทำตัวสบายและสนุกสนาน ทำงานเป็นกลุ่มได้เป็นอย่างดี</p>
        </div >
    <!-- </div> -->
    </div>
</template>
<script>

export default{
    
}
</script>

<style>
@import url('htps://fonts.googleapis.com/css2?family=Sriracha&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

/* .all{
    text-align: center;
    font-size: 200%;
    font-family: 'Sriracha', cursive;
    color: rgb(7, 0, 86);
} */

.h{
    font-size: 250%;
    color: rgb(11, 48, 104);
    text-align: center;
    font-family: 'Sriracha', cursive;
    margin-left: auto;
    margin-left: auto;
    
    
}

.head{
    font-size: 100%;
    font-family: 'Sriracha', cursive;
    color: rgb(255, 255, 255);
    text-align: right;
    padding: 1%;
}

.font{
    font-family: 'Sriracha', cursive;
    font-size: 120%;
    text-align: center;
    color: rgb(183, 130, 248);
    border:2px solid black;
    margin-top: 50px;
    margin-bottom: auto;
    margin-right: 150px;
    margin-left: 80px;
    background-color: rgb(57, 0, 95);
}

.lastline
{
    margin-bottom: auto;
    bottom: 0;
    /* margin-left: ; */
}
#background {
  background-image: url(../assets/images/back.png); 
  background-size: cover;
  background-repeat: no-repeat;
}
</style>