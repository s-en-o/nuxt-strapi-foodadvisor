export default ({ $strapi, app }) => {
    $strapi.hook('error', (error) => {
        app.$toast.error(error.message);

        console.log('error.message: ', error.message);
        console.log('error.original: ', error.original);
    });
};
