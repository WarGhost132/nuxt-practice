<script setup lang="ts">
definePageMeta({
  title: 'pages.index.title',
})

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div>
    <p>{{ t('pages.index.description') }}</p>
    <p>{{ t('pages.index.languages') }}</p>
    <nav>
      <template v-for="(localization, index) in availableLocales" :key="localization.code">
        <span v-if="index"> | </span>
        <NuxtLink :to="switchLocalePath(localization.code)">
          {{ localization.name ?? localization.code }}
        </NuxtLink>
      </template>
    </nav>

    <p>{{ t('welcome') }}</p>
  </div>
</template>
