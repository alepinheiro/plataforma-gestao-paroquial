/**
 * Middleware para verificar se a sessão já expirou
 */
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();

  // redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value) {
    return navigateTo('/login');
  }
});
