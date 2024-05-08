<script setup lang="ts">

import ModifiersBar from './ModifiersBar.vue';
import ButtonIcon from './ButtonIcon.vue';
import AppInput from './AppInput.vue';
import PostListItem from './PostListItem.vue';
import ErrorBox from './ErrorBox.vue'

import type { PaginatedList } from '@/Models/PaginatedList.js';
import type { Post } from '@/Models/Post.js';
import type { PostListModifiers } from '@/Models/PostList.js';

import { ref, watchEffect } from 'vue';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getResourcePath, urlQuery } from '@/api/Api.js';
import { fetchJson } from '@/api/Fetch.js'

const postListPages = ref<PaginatedList<Post>>()
const searchModel = ref('')
const error = ref('')

const modifiers = defineModel<PostListModifiers>({ required: true })

watchEffect(() => {
    fetchJson(`${getResourcePath('post')}?${urlQuery(modifiers.value)}`)
        .then(json => postListPages.value = (json as PaginatedList<Post>))
        .catch(e => error.value = "Failed to fetch posts" + (e.message || e))
})

</script>

<template>
    <div>

        <ModifiersBar>
            <div>
                <label>Results per Page</label>
                <select v-model="modifiers['results-per-page']">
                    <option>15</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>

            <div>
                <label>Order</label>
                <select v-model="modifiers.order">
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="recent-relevant">Relevant</option>
                    <option value="most-viewed">Most Views</option>
                </select>
            </div>

            <form @submit.prevent="modifiers.search = searchModel">
                <label>Search</label>

                <AppInput type="search"
                          placeholder="Search"
                          name="search"
                          v-model="searchModel"/>
                

                <ButtonIcon type="submit"
                            :icon="faSearch"/>
            </form>

        </ModifiersBar>
        <ErrorBox :error="error"/>

        <ul v-if="postListPages" class="flowV">
            <li v-for="post in postListPages.data">
                <PostListItem v-bind="post"/>
            </li>
        </ul>
    </div>
</template>
