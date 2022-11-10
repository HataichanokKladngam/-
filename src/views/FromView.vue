<template>
    <div class="text-teal-500">
        <div>this is onlick dropdown</div>
        <button class="bg-blue-200" @click="dropdown=!dropdown">menu</button>
        <div class="rounded-lg bg-blue-400 animate-fadeIn" v-if="dropdown">this is dropdown</div>
        <div> this is onchange</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>
            count is {{count}}
        </div>
        <div>this is v-mode</div>
        <input type="text" v-model="name">
        <div>{{name}}</div> 
    </div>
  
</template>

<script>
export default {
    data()
    {
        return{
            count: 0
        }
    }
}
</script>

<style>

</style>