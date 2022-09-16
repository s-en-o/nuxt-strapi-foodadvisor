<template>
    <main>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <Nuxt />
    </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'LayoutDefault',
});
</script>
