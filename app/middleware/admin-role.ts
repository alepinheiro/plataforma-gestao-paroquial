/**
 * Middleware para verificar se a sessão já expirou
 */
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn, user } = useUserSession();

  // redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value || !user.value) {
    return navigateTo('/login');
  }

  if (user.value?.role === 'USER') return navigateTo('/account/profile');
});
