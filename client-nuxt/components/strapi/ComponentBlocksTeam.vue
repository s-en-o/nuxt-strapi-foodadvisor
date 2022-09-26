<template>
    <div class="p-8 bg-white rounded-lg">
        <div class="text-center pt-24">
            <h2
                :class="`text-${data.header.theme} font-extrabold tracking-wide uppercase`"
            >
                {{ data.header.label }}
            </h2>

            <p
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
                {{ data.header.title }}
            </p>
        </div>

        <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-24 pb-40"
        >
            <div
                v-for="(member, index) in data.members.data"
                :key="index"
                class="p-4"
            >
                <div class="flex-col flex justify-center items-center">
                    <div class="flex-shrink-0">
                        <div class="block relative">
                            <img
                                alt="profil"
                                :src="
                                    $config.baseURL +
                                    member.attributes.picture.data.attributes
                                        .url
                                "
                                class="mx-auto object-cover rounded-full h-20 w-20"
                            />
                        </div>
                    </div>
                    <div class="mt-2 text-center flex flex-col">
                        <span class="text-gray-600 text-lg font-medium">
                            {{ member.attributes.username }}
                        </span>
                        <span class="text-gray-400 text-sm">
                            {{ member.attributes.job }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksTeam',
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
