<template>
    <footer>
        <span>{{title}}</span>
    </footer>
</template>

<script>
export default{
    data(){
        return{
            title: 'all rights reserved'
        }
    }
}
</script>

<style>

footer{
    height: 76px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;

}

</style>