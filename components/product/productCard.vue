<template>
  <div>
    <NuxtLink :href="`/product/${product.id}`">
      <div class="card">
        <div class="card-wrapper">
          <div class="card-img">
            <NuxtImg :src="product?.assets?.source" :alt="product.name" />
          </div>
          <div class="card-box">
            <h4 class="card-title mbr-fonts-style display-5">
              {{ product?.name }}
            </h4>

            <p class="mbr-text mbr-fonts-style display-7">
              {{ product?.currencyCode }} {{ product?.price }}
            </p>
            <!--Btn-->
            <div class="mbr-section-btn align-left">
              <a href="#" class="btn btn-warning-outline display-4">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  //import createListBtn from '~/components/partials/globals/createListBtn.vue';
  //import AddToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>