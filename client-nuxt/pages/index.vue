<template>
    <div>
        <div v-for="content in contents" :key="content.__typename">
            <component
                :is="content.__typename"
                v-bind="{ data: contentHero }"
            ></component>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api';
import { useStrapiCompFetch } from '@/use/strapi';

// TYPES
type CMSData = {
    __typename?: string;
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
        const contents: Array<CMSData> = store.state.cms.homePage;
        const { content } = useStrapiCompFetch(contents, 'ComponentBlocksHero');
        const contentHero: CMSData | undefined = content as CMSData;

        return {
            contents,
            contentHero,
        };
    },
});
</script>
