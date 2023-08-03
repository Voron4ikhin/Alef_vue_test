<template>
    <div class="container user-edit-wrapper">
        <div class="user-edit">
          <h1>Персональные данные</h1>

          <div class="wr-input">
            <label for="name-parent" class="inp">
              <input type="text" id="name-parent" placeholder="&nbsp;" v-model="userDataStoreBuffer.name">
              <span class="label">Имя</span>
              <span class="focus-bg"></span>
            </label>
          </div>

          <div class="wr-input">
            <label for="age-parent" class="inp">
              <input type="text" id="age-parent" placeholder="&nbsp;" v-model="userDataStoreBuffer.age">
              <span class="label">Возраст</span>
              <span class="focus-bg"></span>
            </label>
          </div>

        </div>
        <div class="children-edit">
          <h1>Дети (макс. 5)</h1>
          <div class="wr-button-add-child" v-if="childrenInputs < 5">
            <button @click="addInputChild()">+ Добавить ребенка</button>
          </div>
          <div class="wr-child-inputs">
            <div class="child-inputs" v-for="(index, key) in bufferChildren" :key="key">
              <div class="child-name">
                <div class="wr-input-child">
                  <label :for="[`name-child-${key}`]" class="inp">
                    <input type="text" :id="[`name-child-${key}`]" placeholder="&nbsp;" v-model="index.name">
                    <span class="label">Имя</span>
                    <span class="focus-bg"></span>
                  </label>
                </div>
              </div>
              <div class="child-age">
                <div class="wr-input-child">
                  <label :for="[`age-child-${key}`]"  class="inp">
                    <input type="text" :id="[`age-child-${key}`]" placeholder="&nbsp;" v-model="index.age">
                    <span class="label">Возраст</span>
                    <span class="focus-bg"></span>
                  </label>
                </div>
              </div>
              <div class="child-delete">
                <button class="btDeleteChild" @click="deleteChild(key)">Удалить</button>
              </div>
            </div>
          </div>
        </div>
      <div class="wr-save-button">
        <button @click="saveAllData()">Сохранить</button>
      </div>
    </div>
</template>
<script setup>
import store from '@/store';
import { computed } from '@vue/reactivity';

let childrenInputs = computed(() => {
  return store.state.childrenInputs
})

let userDataStoreBuffer = computed(() => {
  return store.state.userDataBuffer
})

let bufferChildren = computed(() =>{
  return store.state.userChildrenBuffer
})


function addInputChild() {
  store.dispatch('addChildrenBuffer', {name: '', age: ''})
}

function saveAllData(){
  store.dispatch('saveUser', userDataStoreBuffer);
  store.dispatch('saveChildren', bufferChildren);
}

function deleteChild(child){
  store.dispatch('deleteInputChild', child)
}

</script>

<style>

.children-edit{
  margin-top: 30px;
  position: relative;
}

.children-edit .wr-button-add-child{
  position: absolute;
  right: 0;
  top: 0;
}

.wr-save-button button{
  background: #01A7FD;
  border: #01A7FD 2px solid;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
}

.wr-save-button button:hover{
  background: white;
  color: #01A7FD;
}

.children-edit .wr-child-inputs{
  display: block;
}

.children-edit .child-inputs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.child-inputs .child-delete button{
  background: none;
  color: #01A7FD;
  border: none;
  cursor: pointer;
}

.child-inputs .child-delete button:hover{
  text-decoration: underline;
}

.children-edit .wr-button-add-child button{
  background: none;
  padding: 10px 5px;
  border-radius: 15px;
  border: 2px solid #01A7FD;
  color: #01A7FD;
  cursor: pointer;
}

.children-edit .wr-button-add-child button:hover{
  background: #01A7FD;
  color: white;
}

.user-edit-wrapper {
    padding: 30px;
}

.user-edit-wrapper .wr-input{
  margin-bottom: 15px;
}

.user-edit-wrapper .wr-input input {
    width: 100%;
}

* {
  box-sizing: border-box;
}

.inp {
  position: relative;
  margin: auto;
  width: 100%;
  overflow: hidden;
}
.inp .label {
  position: absolute;
  top: 0px;
  left: 12px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all .2s ease;
  pointer-events: none; }
.inp .focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left; }
.inp input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  /*border: 0;*/
  font-family: inherit;
  padding: 0px 12px;
  height: 60px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  color: #000;
  transition: all .15s ease;
  outline: none;
}

.inp input:not(:placeholder-shown) + .label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -15px, 0) scale(0.75);
}

.inp input:focus + .label {
  color: #01A7FD;
  transform: translate3d(0, -15px, 0) scale(0.75);
}

.inp input:focus + .label + .focus-bg {
  transform: scaleX(1);
  transition: all .1s ease;
}

</style>