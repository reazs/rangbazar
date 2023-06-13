import { useEffect, useState } from "react";

const UserHomePage = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  var data: any = {};
  const loadUser = async () => {
    const tk = window.localStorage.getItem("token") as string;
    setToken(tk);
    if (token) {
      const url = "http://localhost:3000/users/loadUser";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
      setUserId(responseData.data.userId);
    }
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <p>UserID: {userId}</p>
      <p>{token}</p>
      <h1 className="big-heading">User Home Page</h1>
    </>
  );
};

export default UserHomePage;
