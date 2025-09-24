<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem
              v-for="item in items"
              :key="item.title"
            >
              <SidebarMenuButton as-child>
                <NuxtLink
                  v-if="item.component === 'NuxtLink'"
                  :to="item.url"
                >
                  <component :is="item.icon" />
                  <span>
                    {{ item.title }}
                  </span>
                </NuxtLink>
                <a
                  v-if="item.component === 'a'"
                  :href="item.url"
                  target="_blank"
                >
                  <component :is="item.icon" />
                  <span>
                    {{ item.title }}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Calendar,
  DoorOpen,
  Home,
  Inbox,
  Search,
} from 'lucide-vue-next';

const items = reactive([
  {
    title: 'Casais',
    url: '/',
    icon: Home,
    component: 'NuxtLink',
  },
  {
    title: 'Irmãos',
    url: '/',
    icon: Inbox,
    component: 'NuxtLink',
  },
  {
    title: 'Paróquias',
    url: '/',
    icon: Calendar,
    component: 'NuxtLink',
  },
  {
    title: 'Área',
    url: '#',
    icon: Search,
    component: 'NuxtLink',
  },

]);

items.push({
  title: 'Sair',
  url: '/login',
  icon: DoorOpen,
  component: 'NuxtLink',
});
</script>
