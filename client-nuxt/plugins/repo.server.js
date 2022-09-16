// import { Plugin } from '@nuxt/types';
import createRepo from '../api/index';

export default async ({ store, error, $graphql }) => {
    try {
        const payload = await createRepo($graphql);

        await store.dispatch('cms/getContent', payload);
    } catch (e) {
        console.error(`Error from Repo: ${error(e)}`);
    }
};
