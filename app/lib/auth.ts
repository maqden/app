import {redirect} from 'react-router';
import {authService} from "~/services/auth-service";

/**
 * Helper function to check if user is authenticated
 * @returns Promise<boolean> - True if user is authenticated
 */
export async function checkAuthentication(): Promise<boolean> {
  try {
    await authService.getUser();

    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return false;
    }

    throw error;
  }
}

/**
 * Checks if the current user is authenticated.
 * Redirects to log in if user is not authenticated.
 */
export async function ensureAuthenticatedAccess() {
  const isAuthenticated = await checkAuthentication();

  if (!isAuthenticated) {
    throw redirect('/acessar-conta');
  }

  return null;
}


/**
 * Checks if the current user is not authenticated.
 * Redirects to dashboard if user is already authenticated.
 */
export async function ensureGuestAccess() {
  const isAuthenticated = await checkAuthentication();

  if (isAuthenticated) {
    throw redirect('/painel');
  }

  return null;
}
