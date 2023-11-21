<script setup>
  const router = useRoute();
  useMeta({
    title: 'Nuxt 3',
    meta: [
      {
        name: 'description',
        content: `User Id: ${router.params.id}`,
      },
    ],
  });
</script>
<template>
  <p>ユーザID: {{ $route.params.id }}</p>
</template>
