<template>
    <div>
      <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
        <div class="relative">
          <SfLink :href="`/product/${product.slug}`" class="block">
            <NuxtImg v-if="product?.featuredAsset?.preview" :src="product?.featuredAsset?.preview" :alt="product.name"
              class="block object-cover h-auto rounded-md aspect-square" width="300" height="300" />
          </SfLink>
          <createListBtn :product_id="product" />
        </div>
        <div class="p-4 border-t border-neutral-200">
          <SfLink :href="`/product/${product?.slug}`" variant="secondary" class="no-underline"> {{ product?.name }}
          </SfLink>
          <div class="flex items-center pt-1">  
            <SfLink :href="`/product/${product?.slug}`" variant="secondary" class="pl-1 no-underline"></SfLink>
          </div>
          <span class="block pb-2 font-bold typography-text-lg">{{ product?.calculatedPrice?.totalPrice }}</span>
          <addToCartBtn v-if="product?.enabled === true" :productVariantId="product.id" @item-added="handleItemAdded" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import {
      SfRating,
      SfCounter,
      SfLink,
      SfButton,
      SfIconShoppingCart,
      SfIconFavorite
    } from '@storefront-ui/vue';
    import Ratings from '~/components/partials/commerce/ratings.vue';
    import createListBtn from '~/components/partials/globals/createListBtn.vue';
    import AddToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'
  
    const props = defineProps({
      product: {
        type: Object,
        required: true,
      },
    });
  </script>