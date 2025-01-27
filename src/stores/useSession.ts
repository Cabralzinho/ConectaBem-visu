import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';

type SessionProps = {
  session: null;
};

export const useSession = create<SessionProps>(() => ({
  session: jwtDecode(Cookies.get('authToken') || ''),
}));