<template>
  <div>
    <h1>Usersページ</h1>
    <NuxtPage />
  </div>
</template>
<script setup>
onErrorCaptured((err, instance, info) => {
  console.log('err', err);
  console.log('instance', instance.$refs);
  console.log('info', info);
});
</script>
<!-- <template>
  <div>
    <h1>Usersページ</h1>
    <NuxtPage />
    <NuxtErrorBoundary @error="someErrorLogger">
      <NuxtPage />
      <template #error="{ error }">
        <p>{{ error }}</p>
        <button @click="resetError(error)">Clear Error</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup>
  const resetError = (error) => {
    error.value = null;
  };
  const someErrorLogger = (error) => {
    //取得したエラーで別の処理を行う
    console.log('someErrorLogger', error);
  };
</script> -->
