<template>
    <div>
        <section class="services2 cid-soby6viI3p" id="services2-13">
            <div class="container">
                <div class="col-md-12">
                    <div class="media-container-row">
                        <div class="mbr-figure" style="width: 55%;">
                            <img :src="product?.featuredAsset?.preview" :alt="product?.name">
                        </div>
                        <div class="align-left aside-content">
                            <h2 class="mbr-title pt-2 mbr-fonts-style display-2">
                                {{ product?.name }}
                            </h2>
                            <div class="mbr-section-text">
                                <p class="mbr-text text1 pt-2 mbr-light mbr-fonts-style display-7">
                                    {{ product?.description }}
                                </p>
                                <p class="mbr-text text2 pt-4 mbr-light mbr-fonts-style display-2">
                                    <span
                                        class="cost">{{ product?.variants?.price }}{{ product?.variants?.currencyCode }}</span>
                                </p>
                            </div>
                            <!--Btn-->
                            <div class="mbr-section-btn pt-3 align-left">
                                <a href="/" class="btn btn-warning-outline display-4">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mbr-section article content1 cid-sobx2LJOrN" id="content1-10">
            <div class="container">
                <div class="media-container-row">
                    <div class="mbr-text col-12 mbr-fonts-style display-7 col-md-12">
                        <p>{{ product?.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="services1 cid-sobxooKVZg" id="services1-11">
            <div class="container">
                <div class="row justify-content-center">
                    <!--Titles-->
                    <div class="title pb-5 col-12">
                        <h2 class="align-left pb-3 mbr-fonts-style display-5">
                            Similar Products</h2>
                    </div>
                    <!--Card-1-->
                    <relatedproducts />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import relatedproducts from '~/components/related/relatedproducts.vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import {
        product
    } from '~/graphql/queries/product'

    const route = useRoute()
    const {
        result,
        loading,
        error
    } = useQuery(product, {
        id: route.params.id
    });

    useHead({
        title: computed(() => result.value?.product?.items[0]?.name || 'Product Page')
    })
</script>