<template>
    <section
        className="text-gray-600 body-font py-40 flex justify-center items-center 2xl:h-screen"
    >
        <div v-for="content in contents" :key="content.__typename">
            <component :is="content.__typename"></component>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api';
// INTERFACE
type CMSData = {
    __typename: string;
    text?: string;
    header?: {
        title?: string;
    };
    buttons?: [
        {
            link?: {
                href?: string;
                label?: string;
            };
        },
        {
            link?: {
                href?: string;
                label?: string;
            };
        }
    ];
    images?: {
        data?: [
            {
                attributes?: {
                    url?: string;
                };
            },
            {
                attributes?: {
                    url?: string;
                };
            },
            {
                attributes?: {
                    url?: string;
                };
            },
            {
                attributes?: {
                    url?: string;
                };
            }
        ];
    };
};

type CMSState = {
    cms: {
        homePage: Array<CMSData>;
    };
};

export default defineComponent({
    name: 'PageIndex',
    setup() {
        const store = useStore<CMSState>();
        const contents = store.state.cms.homePage;

        return {
            contents,
        };
    },
});
</script>
