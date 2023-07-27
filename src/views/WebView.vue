<template>
    <layout-web>
    <router-view></router-view>
    </layout-web>
</template>

<script>
import LayoutWeb from '@/layout/LayoutWeb.vue'

export default {
    name: 'WebView',
    components: {
        LayoutWeb
    }
}
</script>