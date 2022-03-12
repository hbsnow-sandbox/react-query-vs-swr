import useSWR from "swr";

import { client } from "../../api/client";

type Props = {
  userId: string;
};

export const User = (props: Props): JSX.Element => {
  const { userId } = props;

  const { data, error } = useSWR(
    `/users/${userId}`,
    client.users._id(userId).$get
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return <div>{data.description}</div>;
};
