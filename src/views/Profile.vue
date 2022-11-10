<template>
    <div class = "flex items-center justify-center space-x-5 h-screen">
        <div v-for="member in members" :key="member">
        <profileCard 
        v-if="member.img"
        :img = 'member.img'
        :name = "member.name"
        :nickname = "member.nickname"
        :content = "member.content"
        :birthday = "member.birthday"
        ></profileCard>
        </div>

        <!-- <profileCard v-for="member in members" :key="member"
        :img = 'member.img'
        :name = "member.name"
        :nickname = "member.nickname"
        :content = "member.content"
        :birthday = "member.birthday"
        ></profileCard> -->

        <!-- <profileCard
        img = '/assets/images/BT.jpg'
        name = "Puttipong"
        nickname = "Boat"
        content = "KU81"
        birthday = "24-01-2003"
        ></profileCard>

        <profileCard
        :image="image"
        :name = name
        :nickname = nickname
        :content = content
        :birthday = birthday
        ></profileCard> -->
        
    </div>
    
    
</template>
<script>
import profileCard from "../components/Profile.vue"
export default{
    data()
    {
        return{
            members: [
                {img : '/assets/images/B.jpg',
                name: "Putita",
                nickname: "bow",
                content: "KU81",
                birthday: "03-08-2001",
            },
            {
            img : '/assets/images/BT.jpg',
            name: "Puttipong",
            nickname: "Boat",
            content: "KU81",
            birthday: "24-01-2003",
            },
            {
            img : '/assets/images/E.jpg',
            name: "Hataichanok",
            nickname: "Earth",
            content: "KU81",
            birthday: "18-01-2003",
    
            },
            {
            img : '',
            name: "Hataichanok",
            nickname: "Earth",
            content: "KU81",
            birthday: "18-01-2003",
    
            },
            

            ],

            // img : '/assets/images/E.jpg',
            // name: "Hataichanok",
            // nickname: "Earth",
            // content: "KU81",
            // birthday: "18-01-2003",
        };
    },
    components : {
        profileCard
    }
}
</script>

<style>
    @import url('htps://fonts.googleapis.com/css2?family=Sriracha&display=swap');

    .fonts{
        @apply text-teal-500 text-center inline-block ;
        font-family: 'Sriracha', cursive;
        font-size: 20px;
        margin-left: auto;
        margin-left: auto;
    }

    
</style>

