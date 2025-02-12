<script setup lang="ts">
definePageMeta({
  title: 'pages.index.title',
})

const { t } = useI18n()
</script>

<template>
  <div class="p-5 flex justify-center">
    <UiCard>
      <div class="flex flex-col">
        <div class="flex justify-end">
          <SharedSwitcher />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl">
            {{ t('welcome') }}
          </h1>
          <p>{{ t('pages.index.description') }}</p>
        </div>
      </div>
    </UiCard>
  </div>
</template>
