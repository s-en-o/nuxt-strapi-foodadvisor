// mouse.js
import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api';

// by convention, composable function names start with "use"
export function useStrapiCompFetch(contents, compName) {
    // state encapsulated and managed by the composable
    const content = ref();
    // a composable can update its managed state over time.
    content.value = contents.find((item) => item.__typename === compName);

    // a composable can also hook into its owner component's
    // lifecycle to setup and teardown side effects.
    onMounted(() => {
        console.log(`Mounted: ${content.value}`);
    });

    onUnmounted(() => {
        content.value = '';
        console.log(`unMounted: ${content.value}`);
    });

    // expose managed state as return value
    return { content };
}
