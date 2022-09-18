<template>
    <div
        class="max-w-screen-xl p-4 bg-white mx-auto px-4 sm:px-6 lg:px-8 relative py-40 lg:mt-20"
    >
        <div class="relative">
            <div
                class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
            >
                <div class="lg:col-start-2 md:ml-24 lg:max-w-2xl">
                    <p
                        :class="`font-black leading-6 text-${content.thm} uppercase`"
                    >
                        {{ content.header.label }}
                    </p>

                    <h4
                        class="mt-2 text-3xl leading-8 font-black text-gray-900 sm:text-4xl sm:leading-9"
                    >
                        {{ content.header.title }}
                    </h4>

                    <p class="mt-4 text-lg leading-6 text-gray-500">
                        {{ content.para }}
                    </p>

                    <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                        <li
                            v-for="(feature, index) in content.featuresCheck"
                            :key="index"
                            class="mt-6 lg:mt-0"
                        >
                            <div class="flex">
                                <span
                                    class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800"
                                >
                                    <svg
                                        class="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                                >
                                    {{ feature.text }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div
                    class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1"
                >
                    <img
                        :src="
                            $config.baseURL + content.image.data.attributes.url
                        "
                        :alt="content.image.data.attributes.alternativeText"
                        class="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksFeaturesWithImages',
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
