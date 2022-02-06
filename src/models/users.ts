export type UserRequest = {
  name: string;
  description: string;
};

export type UserListResponse = {
  users: {
    id: string;
    name: string;
  }[];
};

export type UserDetailsResponse = {
  id: string;
  name: string;
  description: string;
};
