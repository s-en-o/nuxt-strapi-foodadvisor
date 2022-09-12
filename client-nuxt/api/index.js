import delve from 'dlv'; // Safe deep property access helpers https://github.com/developit/dlv#readme

function getHomePage() {
    const query = `query homePage {
        page(id: 1) {
            data {
                attributes {
                    blocks {
                        ... on ComponentBlocksHero {
                            __typename

                            text

                            header {
                                title
                            }

                            buttons {
                                link {
                                    href
                                    label
                                }
                            }

                            images {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }

                        ... on ComponentBlocksFeatures {
                            __typename
                            header {
                                theme
                                title
                                label
                            }

                            cards {
                                title
                                text
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }

                        ... on ComponentBlocksTestimonial {
                            __typename

                            testi: text

                            author {
                                data {
                                    attributes {
                                        username
                                    }
                                }
                            }
                        }

                        ... on ComponentBlocksFeaturesWithImages {
                            __typename

                            para: text

                            header {
                                title
                                label
                            }

                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }

                            featuresCheck {
                                text
                            }
                        }

                        ... on ComponentBlocksFaq {
                            __typename

                            title

                            faq {
                                question
                                answer
                            }
                        }

                        ... on ComponentBlocksTeam {
                            __typename

                            header {
                                label
                                title
                            }

                            members {
                                data {
                                    attributes {
                                        username
                                        job
                                        picture {
                                            data {
                                                attributes  {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        ... on ComponentBlocksCtaCommandLine {
                            __typename
                            title
                            text
                            commandLine
                        }
                    }
                }
            }
        }
    }`;

    return query;
}

export default async function ($strapi) {
    try {
        const contentHomeFetch = await $strapi.graphql({
            query: getHomePage(),
        });

        const payload = delve(contentHomeFetch, 'page.data.attributes.blocks');

        console.log('test from api index: ', payload);
    } catch (e) {
        console.error(e);
    }
}
