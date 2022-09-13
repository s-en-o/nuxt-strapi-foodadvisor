import delve from 'dlv'; // Safe deep property access helpers https://github.com/developit/dlv#readme
import homePageQuery from '../api/homepage.graphql';

export default async function ($graphql) {
    try {
        const contentHomeFetch = await $graphql.default.request(homePageQuery);
        const payload = delve(contentHomeFetch, 'page.data.attributes.blocks');

        console.log('test from api index: ', payload);
    } catch (error) {
        console.log('ERORRRRR!!!! ', error.response.errors[0].message);
    }
}
