export default defineNuxtRouteMiddleware((to, from) => {
  if (from.fullPath === '/') {
    return navigateTo('/');
  }
});

// ページ移動を中止したい場合
// export default defineNuxtRouteMiddleware((to, from) => {
//   if (from.fullPath === '/') {
//     return abortNavigation();
//   }
// });
