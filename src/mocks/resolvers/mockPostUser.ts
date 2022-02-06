import { PathParams, ResponseResolver, RestContext, RestRequest } from "msw";

import { UserRequest, UserDetailsResponse } from "../../models/users";
import { delay } from "../handlers";

export const mockPostUser: ResponseResolver<
  RestRequest<UserRequest, PathParams>,
  RestContext
> = (req, res, ctx) => {
  const { name } = req.body;

  const mock: UserDetailsResponse = {
    id: "5",
    name,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return res(ctx.delay(delay), ctx.status(201), ctx.json(mock));
};
