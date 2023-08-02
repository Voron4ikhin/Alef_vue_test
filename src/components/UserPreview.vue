<template>
    <div>
        Preview {{ name }}
    </div>
</template>

<script setup>
import store from '@/store';
import { computed } from '@vue/reactivity';

let name = computed(() => store.state.userData.name)

</script>