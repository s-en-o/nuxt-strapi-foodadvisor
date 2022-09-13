// import { Plugin } from '@nuxt/types';
import createRepo from '../api/index';

export default async ({ error, $graphql }) => {
    try {
        const payload = await createRepo($graphql);

        await payload;
    } catch (e) {
        console.error('error: ', error);
        console.error('error: ', e);
    }
};
