import delve from 'dlv'; // Safe deep property access helpers https://github.com/developit/dlv#readme
import homePageQuery from '../api/homepage.graphql';

export default async function ($graphql) {
    try {
        const contentHomeFetch = await $graphql.default.request(homePageQuery);
        const payload = delve(contentHomeFetch, 'page.data.attributes.blocks');

        return payload;
    } catch (error) {
        console.error(`Error while fetching data: ${error}`);
    }
}
