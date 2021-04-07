<template>
    <div>
        <h3>Hooks Tutorials</h3>
        <h4>My Wife name is {{name}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'Rabeya'
        }
    },
    created(){
        //mostly call initial data 
        console.log('data and other fuction can access ',this.name)    
    }
};
</script>