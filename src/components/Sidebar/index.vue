<template>
    <div v-if="list.length" class="Sidebar">
        <ul class="Sidebar__menu">
            <li v-for="(item, index) in list" :key="`sidebar-item-${index}`"
                 class="Sidebar__menu-item"
                 :class="{'Sidebar__menu-item_active': item.index === activeLink}">
                <button @click="event(item.index)">{{ item.title }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import './styles.scss';

    export default {
        name: 'Sidebar',
        props: {
            list: {
                type: Array,
                default: () => []
            },
            activeLink: {
                type: Number,
                default: -1
            },
            event: {
                type: Function,
                default: () => {}
            }
        }
    }
</script>