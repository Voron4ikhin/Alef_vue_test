<template>
    <div class="container user-edit-wrapper">
        <div class="user-edit">
            <h1>Персональные данные</h1>
            <div class="wr-input">
                <label class="text-label" for="name">Имя</label>
                <input class="text-input" type="text" id="name" v-model=name />
            </div>
            <div class="wr-input">
                <label class="text-label" for="age">Возраст</label>
                <input class="text-input" type="text" id="age" v-model=name />
            </div>

        </div>
        <div class="children-edit">

        </div>
    </div>
</template>
<script setup>
import store from '@/store';
import { computed } from '@vue/reactivity';

// function setUserName(name) {
//     store.dispatch('setUserName', name)
// }

let name = computed({
    get() {
        return store.state.userData.name;
    },
    set(val) {
        store.dispatch('setUserName', val)
    }
})


</script>

<style>
.user-edit-wrapper {
    padding: 30px;
}

.user-edit-wrapper .wr-input input {
    width: 100%;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}


.wr-input {
    margin-bottom: 1rem;
}

.text-label {
    display: block;
    margin-bottom: 0.25rem;
}

.text-input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.text-input[type="text"]::-webkit-search-decoration,
.text-input[type="text"]::-webkit-search-cancel-button,
.text-input[type="text"]::-webkit-search-results-button,
.text-input[type="text"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
}

.text-input::placeholder {
    color: #212529;
    opacity: 0.4;
}

.text-input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-input:disabled,
.text-input[readonly] {
    background-color: #f5f5f5;
    opacity: 1;
}

/* with floating label */
.wr-input {
    position: relative;
}

.wr-input .text-input {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
    padding: 1rem 0.75rem;
}

.wr-input .text-label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem .75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .15s ease-in-out, transform .15s ease-in-out;
}

.wr-input .text-input::-moz-placeholder {
    color: transparent;
}

.wr-input .text-input::placeholder {
    color: transparent;
}

.wr-input .text-input:focus,
.wr-input .text-input:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: .625rem;
}

.wr-input .text-input:focus~.text-label,
.wr-input .text-input:not(:placeholder-shown)~.text-label {
    opacity: .65;
    transform: scale(.85) translateY(-.75rem) translateX(.15rem);
}
</style>