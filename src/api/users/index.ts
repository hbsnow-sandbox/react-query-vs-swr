import {
  UserRequest,
  UserListResponse,
  UserDetailsResponse,
} from "../../models/users";

export type Methods = {
  get: {
    resBody: UserListResponse;
  };

  post: {
    reqBody: UserRequest;
    resBody: UserDetailsResponse;
  };
};
