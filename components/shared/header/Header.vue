<script setup lang="ts">
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { t } = useI18n()
const localeRoute = useLocaleRoute()
const route = useRoute()

function linkPath(path: string) {
  const locale_router = localeRoute(path)
  return locale_router ? locale_router.path : '/'
}

const navigation = reactive([
  {
    name: computed(() => t('components.shared.header.navigation.dashboard')),
    to: '/',
  },
  {
    name: computed(() => t('components.shared.header.navigation.team')),
    to: '/team',
  },
  {
    name: computed(() => t('components.shared.header.navigation.projects')),
    to: '/projects',
  },
  {
    name: computed(() => t('components.shared.header.navigation.calendar')),
    to: '/calendar',
  },
  {
    name: computed(() => t('components.shared.header.navigation.reports')),
    to: '/reports',
  },
])

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  {
    name: computed(() => t('components.shared.header.user.menu.profile')),
    href: '#', 
  },
  {
    name: computed(() => t('components.shared.header.user.menu.settings')),
    href: '#', 
  },
  {
    name: computed(() => t('components.shared.header.user.menu.sign-out')),
    href: '#', 
  },
]
</script>

<template>
  <Disclosure as="nav" class="bg-zinc-800" v-slot="{ open }">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="shrink-0">
            <img class="size-8" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                class="rounded-md px-3 py-2 text-sm font-medium"
                :to="linkPath(item.to)"
                :class="[route.path === linkPath(item.to) ? 'bg-zinc-700' : 'hover:bg-zinc-700']"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="relative rounded-full bg-zinc-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">{{ t('components.shared.header.notification') }}</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>

            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">{{ t('components.shared.header.user.open-menu') }}</span>
                  <img class="size-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition 
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-800 py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <NuxtLink 
                        class="block px-4 py-2 text-sm text-gray-300"
                        :to="item.to"
                        :class="[active ? 'bg-zinc-700 outline-hidden' : '']"
                      >
                        {{ item.name }}
                      </NuxtLink>
                    </MenuItem>
                  </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-gray-400 hover:bg-zinc-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-hidden">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">{{ t('components.shared.header.user.open-menu') }}</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          class="block rounded-md px-3 py-2 text-base font-medium"
          :to="linkPath(item.to)"
          :class="[route.path === linkPath(item.to) ? 'bg-zinc-700' : 'hover:bg-zinc-700']"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="flex items-center px-5">
          <div class="shrink-0">
            <img class="size-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base/5 font-medium text-white">{{ user.name }}</div>
            <div class="text-sm font-medium text-gray-400">{{ user.email }}</div>
          </div>
          <button type="button" class="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-hidden">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">{{ t('components.shared.header.notification') }}</span>
            <BellIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">{{ item.name }}</DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
