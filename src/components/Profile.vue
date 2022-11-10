<template>
    <div class="inline-block ml-12 p-9 max-w-md bg-violet-100 rounded-lg border border-fuchsia-100 shadow-md hover:bg-purple-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="fonts">
            <!-- <img class="rounded-full" src="../assets/images/E.jpg" alt="lisa" width="250" height="100" > -->
            <div class="bg-contain bg-center w-96 h-96 scale-70 rounded-full" :style="getUrlImage(img)"></div>
            <div>
                <strong>Name :</strong>  {{name}}
            </div>
            <div>
                <strong> Nickname :</strong>  {{nickname}}
            </div>
            <div>
                <strong> Content :</strong>{{content}}
            </div>
            <div>
                {{birthday}}
            </div>
            <div class="w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-5">
            <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl" />
            <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl" />
            <font-awesome-icon icon="fa-brands fa-github" class="text-2xl" />
            </div>
        </div>
    </div>
</template>

<script>
import { stringifyStyle } from '@vue/shared';

export default {
    props : {
        img:{
            type : String,
            default: "/assets/images/E.jpg"
        },
        name : {
            type : String,
            default : "--------"
        },
        nickname : {
            type : String,
            default : "---------"
        },
        content : {
            type : String,
            default : "----------"
        },
        birthday : {
            type : String,
            default : "xx - xx - xxxx"
        },
    },
    methods:
    {
        getUrlImage(imagesPath){
            return {'background-image': 'url("./src/'+ imagesPath + '")' };
        },
    }
};
</script>