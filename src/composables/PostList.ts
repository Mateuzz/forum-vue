import { reactive } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";

export default function usePostListModifiers(route: RouteLocationNormalizedLoaded) {
    return reactive({
        category: route.params['slug'],
        search: route.query.search,
        'results-per-page': route.query['results-per-page'] || '15',
        order: route.query.order || 'latest',
        user: ''
    })
}
