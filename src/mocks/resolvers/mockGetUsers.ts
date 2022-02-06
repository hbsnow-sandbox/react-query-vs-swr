import { PathParams, ResponseResolver, RestContext, RestRequest } from "msw";

import { UserListResponse } from "../../models/users";
import { delay } from "../handlers";

const mock: UserListResponse = {
  users: [
    { id: "1", name: "hbsnow" },
    { id: "2", name: "foo" },
    { id: "3", name: "bar" },
    { id: "4", name: "baz" },
  ],
};

export const mockGetUsers: ResponseResolver<
  RestRequest<never, PathParams>,
  RestContext
> = (_, res, ctx) => {
  return res(ctx.delay(delay), ctx.json(mock));
};
