<template>
    <div class="bg-white pt-60 pb-60 px-4">
        <div class="bg-gray-600 md:w-3/4 mx-auto p-20 rounded-full">
            <p
                class="text-white w-full md:w-2/3 m-auto text-center text-md md:text-3xl"
            >
                <span :class="`font-bold text-${content.theme}`">“</span>
                {{ content.testimony }}
                <span :class="`font-bold text-${content.theme}`">”</span>
            </p>

            <div class="flex items-center justify-center mt-8">
                <div class="block relative">
                    <img
                        :alt="
                            content.author.data.attributes.picture.data
                                .attributes.alternativeText
                        "
                        :src="
                            $config.baseURL +
                            content.author.data.attributes.picture.data
                                .attributes.url
                        "
                        class="mx-auto object-cover rounded-full h-10 w-10"
                    />
                </div>

                <div class="flex ml-2 items-center justify-center">
                    <span
                        :class="`font-semibold text-${content.theme} mr-2 text-md md:text-lg`"
                    >
                        {{ content.author.data.attributes.username }}
                    </span>
                    <span class="text-gray-400 text-xs md:text-xl font-light">
                        /
                    </span>
                    <span class="text-gray-400 text-xs md:text-lg ml-2">
                        {{ content.author.data.attributes.job }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksTestimonial',
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
