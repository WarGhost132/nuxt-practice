<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

function setFlag(flag: string) {
  return `twemoji:flag-${flag}`
}
</script>

<template>
  <div class="flex items-center gap-3 bg-zinc-800 border border-zinc-800 rounded-full p-3">
    <p>{{ t('pages.index.languages') }}:</p>
    <div v-for="(localization, index) in availableLocales" :key="localization.code" class="flex items-center">
      <NuxtLink :to="switchLocalePath(localization.code)" class="flex items-center">
        <Icon :name="setFlag(localization.name ?? 'russia')" size="30" />
      </NuxtLink>
    </div>
  </div>
</template>
