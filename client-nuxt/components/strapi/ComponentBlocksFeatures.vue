<template>
    <div class="bg-gray-50 pb-24">
        <div class="text-center pt-24">
            <h2
                :class="`text-${content.header.theme} font-extrabold tracking-wide uppercase`"
            >
                {{ content.header.label }}
            </h2>

            <p
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
                {{ content.header.title }}
            </p>
        </div>
        <div
            class="sm:flex flex-wrap justify-center text-center gap-8 pt-24 pb-40 items-stretch"
        >
            <div
                v-for="(card, index) in content.cards"
                :key="index"
                class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg"
            >
                <div class="flex-shrink-0">
                    <div
                        class="flex items-center mx-auto justify-center h-24 w-24 rounded-md"
                    >
                        <img
                            :src="
                                $config.baseURL + card.image.data.attributes.url
                            "
                            :alt="card.image.data.attributes.alternativeText"
                        />
                    </div>
                </div>
                <h3
                    class="text-2xl sm:text-xl text-gray-700 font-semibold py-4"
                >
                    {{ card.title }}
                </h3>

                <p class="text-md text-gray-500 py-4">{{ card.text }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksFeatures',
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
