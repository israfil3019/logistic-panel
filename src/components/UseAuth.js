import { useState } from "react";

export default function UseAuth() {
  const [auth, setAuth] = useState(true);

  return [auth, setAuth];
}