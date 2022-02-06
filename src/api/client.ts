import aspida from "@aspida/fetch";

import api from "./$api";

const endpoint = import.meta.env.VITE_API_ENDPOINT;

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: endpoint,
  throwHttpErrors: true,
};

export const client = api(aspida(fetch, fetchConfig));
