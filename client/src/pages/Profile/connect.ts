import { useEffect, useState } from "react";
import { User } from "../../types";

export const useConnect = (userId: string | undefined) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return { user };
};