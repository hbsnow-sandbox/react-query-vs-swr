import { UserDetailsResponse, UserRequest } from "../../../models/users";

export type Methods = {
  get: {
    resBody: UserDetailsResponse;
  };

  put: {
    reqBody: UserRequest;
    resBody: UserDetailsResponse;
  };
};
