import { PathParams, ResponseResolver, RestContext, RestRequest } from "msw";

import { UserDetailsResponse } from "../../models/users";
import { delay } from "../handlers";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const mock: { [key: UserDetailsResponse["id"]]: UserDetailsResponse } = {
  "1": { id: "1", name: "hbsnow", description },
  "2": { id: "2", name: "foo", description },
  "3": { id: "3", name: "bar", description },
  "4": { id: "4", name: "baz", description },
};

export const mockGetUser: ResponseResolver<
  RestRequest<never, PathParams>,
  RestContext
> = (req, res, ctx) => {
  const { userId } = req.params;

  if (typeof userId !== "string" || !mock[userId]) {
    return res(ctx.delay(delay), ctx.status(404));
  }

  return res(ctx.delay(delay), ctx.json(mock[userId]));
};
