<template>
    <section
        className="text-gray-600 body-font py-40 flex justify-center items-center 2xl:h-screen"
    >
        <div className="container flex md:flex-row flex-col items-center">
            <div className="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <!-- <ImageCards images={images} /> -->
                <div className="relative space-y-4">
                    <div
                        className="flex items-end justify-center lg:justify-start space-x-4"
                    >
                        <img
                            className="rounded-lg shadow-lg w-32 md:w-56"
                            width="200"
                            src="http://placeimg.com/640/480"
                            alt=""
                        />
                    </div>
                    <div
                        className="flex items-start justify-center lg:justify-start space-x-4 md:ml-12"
                    >
                        <img
                            className="rounded-lg shadow-lg w-32 md:w-56"
                            width="200"
                            src="http://placeimg.com/640/480"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div
                className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center"
            >
                <div
                    className="block space-y-3 md:flex md:space-y-0 space-x-2"
                ></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'PageIndex',
});
</script>
