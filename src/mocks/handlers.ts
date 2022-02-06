import { rest } from "msw";

import { mockGetUser } from "./resolvers/mockGetUser";
import { mockGetUsers } from "./resolvers/mockGetUsers";
import { mockPostUser } from "./resolvers/mockPostUser";
import { mockPutUser } from "./resolvers/mockPutUser";

const endpoint = import.meta.env.VITE_API_ENDPOINT;

export const delay = 3000;

export const handlers = [
  rest.get(`${endpoint}/users`, mockGetUsers),
  rest.post(`${endpoint}/users`, mockPostUser),
  rest.get(`${endpoint}/users/:userId`, mockGetUser),
  rest.put(`${endpoint}/users/:userId`, mockPutUser),
];
