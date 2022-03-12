import { useState } from "react";

import useSWR from "swr";

import { client } from "../../api/client";
import { User } from "./User";

export const Users = (): JSX.Element => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>();

  const { data, error } = useSWR("/users", client.users.$get);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.id}>
          <button
            onClick={() =>
              setOpen((prev) => ({ ...prev, [user.id]: !prev?.[user.id] }))
            }
          >
            {user.name}
          </button>
          {open?.[user.id] && <User userId={user.id} />}
        </div>
      ))}
    </div>
  );
};
