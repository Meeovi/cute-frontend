<template>
    <v-card variant="text" class="catBar">
        <v-tabs v-model="tab" :bg-color="catbar?.color" :color="catbar?.colortext" align-tabs="center">
            <div v-for="(menu, index) in result?.items" :key="index">
                <v-tab :value="menu?.value">
                    <NuxtLink :style="`color: ${catbar?.colortext} !important`" :to="`/categories/${menu?.slug}`">{{ menu?.name }}</NuxtLink>
                </v-tab>
            </div>
        </v-tabs>
    </v-card>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import {
        collections
    } from '~/graphql/queries/collections'

    const tab = ref(null);
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: catbar
    } = await useAsyncData('catbar', () => {
        return $directus.request($readItem('navigation', '4', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        result
    } = useQuery(collections)
</script>