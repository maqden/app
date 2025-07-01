import {redirect} from 'react-router';
import {authService} from '~/services/auth-service';

export async function requireAuth() {
  try {
    return await authService.getUser();
  } catch (error) {
    throw redirect('/acessar-conta');
  }
}

export async function requireGuest() {
  try {
    const user = await authService.getUser();

    if (user) {
      throw redirect('/painel');
    }

    return null;
  } catch (error) {
    return null;
  }
}