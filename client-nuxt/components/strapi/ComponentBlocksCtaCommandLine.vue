<template>
    <div :class="`bg-${data.ComponentBlocksCtaCommandLineTheme}`">
        <div
            class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        >
            <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                <span class="block">{{ data.title }}</span>
                <span class="block text-white">{{ data.text }}</span>
            </h2>
            <div
                class="py-12 lg:flex-shrink-0 flex items-center justify-center"
            >
                <div class="block md:w-2/5 w-full shadow-2xl text-center">
                    <!-- <vue-code-highlight language="javascript">
                        <pre>
                        {{ data.commandLine }}
                        </pre>
                    </vue-code-highlight> -->
                    <!-- <highlightjs autodetect :code="data.commandLine" /> -->
                    <!-- <CopyBlock
                    text={commandLine}
                    language="bash"
                    codeBlock
                    theme={nord}
                    showLineNumbers={false}
                    /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import { component as VueCodeHighlight } from 'vue-code-highlight';

export default defineComponent({
    name: 'ComponentBlocksCtaCommandLine',
    props: {
        data: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    setup(props) {
        const content = props.data;

        return { content };
    },
});
</script>
