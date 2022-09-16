<template>
    <section
        className="text-gray-600 body-font py-40 flex justify-center items-center 2xl:h-screen"
    >
        <div className="container flex md:flex-row flex-col items-center">
            <div className="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                    <div
                        className="flex items-end justify-center lg:justify-start space-x-4"
                    >
                        <img
                            v-for="image in content.images.data.slice(0, 2)"
                            :key="image.id"
                            className="rounded-lg shadow-lg w-32 md:w-56"
                            width="200"
                            :src="$config.baseURL + image.attributes.url"
                            :alt="image.attributes.alternativeText"
                        />
                    </div>
                    <div
                        className="flex items-start justify-center lg:justify-start space-x-4 md:ml-12"
                    >
                        <img
                            v-for="image in content.images.data.slice(2, 4)"
                            :key="image.id"
                            :src="$config.baseURL + image.attributes.url"
                            :alt="image.attributes.alternativeText"
                            className="rounded-lg shadow-lg w-32 md:w-56"
                            width="200"
                        />
                    </div>
                </div>
            </div>

            <div
                className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center"
            >
                <h1
                    className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900"
                >
                    {{ content.header.title }}
                </h1>

                <p className="mb-8 px-2 leading-relaxed">{{ content.text }}</p>

                <div className="block space-y-3 md:flex md:space-y-0 space-x-2">
                    <button v-for="button in content.buttons" :key="button.id">
                        <NuxtLink
                            :to="button.link.href"
                            :target="button.link.target"
                            :class="`inline-block text-${button.theme}-text bg-${button.theme} border-0 py-2 px-6 focus:outline-none hover:bg-${button.theme}-darker rounded-full shadow-md hover:shadow-md text-lg`"
                        >
                            {{ button.link.label }}
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksHero',
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
