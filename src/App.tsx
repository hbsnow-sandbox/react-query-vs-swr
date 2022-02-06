import { useState } from "react";

import { Users } from "./components/Users";

export const App = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <main>
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      {show && <Users />}
    </main>
  );
};
