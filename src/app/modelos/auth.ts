export type AuthUser={
  username: string;
  password: string;
}

export type AuthUserResponse={
  id: string;
  username: string;
  email: string;
  img: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  token: string;
}

