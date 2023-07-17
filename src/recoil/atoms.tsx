import {atom} from 'recoil';

import type {User} from '../types';

export const userRecoilState = atom<User | null>({
  key: 'userState',
  default: null,
});
