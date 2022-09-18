<template>
    <div :class="`bg-${content.faqTheme} py-40 px-4`">
        <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
            <h2
                :class="`mr-8 w-full md:w-1/3 text-3xl text-${content.faqTheme}-text font-extrabold leading-9`"
            >
                {{ content.title }}
            </h2>

            <dl class="w-full md:w-2/3 mt-12 md:mt-0">
                <!-- {items &&
                    items.map((item, index) => ( -->
                <div v-for="(faq, index) in content.faq" :key="index">
                    <dt :class="`mb-4 text-${content.faqTheme}-text`">
                        <h3 class="text-xl font-semibold">
                            {{ faq.question }}
                        </h3>
                    </dt>
                    <dd
                        :class="`markdown-body mb-16 text-${content.faqTheme}-text`"
                    >
                        {{ faq.answer }}
                        <!-- <ReactMarkdown
                        children={delve(item, 'answer')}
                        linkTarget="_blank"
                        ></ReactMarkdown> -->
                    </dd>
                </div>
                <!-- ))} -->
            </dl>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'ComponentBlocksFaq',
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
