<template>
  <div class="container user-preview-wrapper">
    <div class="user-data">
      <h1>Персональные данные</h1>
      <span>{{userString}}</span>
    </div>
    <div class="children-data">
      <h1>Дети</h1>
      <div class="preview-children" v-if="childrenString.length">
          <div v-for="child in childrenString" :key="child" class="child-wrapper">
        {{child}}
      </div>
      </div>
      <div v-else>
        <span>Нет детей</span>
      </div>
    </div>
    </div>
</template>

<script setup>
import store from '@/store';
import { computed } from '@vue/reactivity';


let userString = computed(() => {
  let userData = store.state.userData
  if(userData.name && userData.age){
    return userData.name + ', ' + userData.age + ' лет'
  }
  return 'Нет информации'
})

let childrenString = computed(() => {
  let userChildren = store.state.userChildren
  let childrenArray = [];
  userChildren.forEach(child => {
    if(child.name && child.age){
      childrenArray.push(child.name + ', ' + child.age + ' лет')
    }
  })
  console.log(childrenArray);
  return childrenArray
})

</script>
<style>

.user-preview-wrapper .user-data span{
  font-weight: 700;
}

.user-preview-wrapper .preview-children{
  display: inline-block;
}

.user-preview-wrapper .children-data .child-wrapper{
  font-weight: 700;
  padding: 10px 15px;
  background: #e5e5e5;
  color: #151515;
  border-radius: 5px;
  margin-bottom: 15px;
}

</style>