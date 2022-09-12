// import { Plugin } from '@nuxt/types';
import createRepo from '../api/index';

export default async ({ error, $strapi }) => {
    try {
        const payload = await createRepo($strapi);

        await payload;
    } catch (e) {
        console.error('error: ', error);
        console.error('error: ', e);
    }
};
