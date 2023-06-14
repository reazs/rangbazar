import BASE_URL from "../config/BaseURL";
export default class Utils {
  static delay = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  static loadUser = async () => {
    const tk = window.localStorage.getItem("token") as string;
    if (tk) {
      const url = BASE_URL + "/users/loadUser";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: tk,
        }),
      });

      const responseData = await response.json();
      const data = responseData.data;
      return data;
    }
  };
}
