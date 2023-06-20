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

  static checkReviewSubmitted = async ({
    productID,
    userID,
  }: {
    productID: string;
    userID: string;
  }) => {
    const url = BASE_URL + "/product/review-exist";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: productID,
        userID: userID,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
  
  };
}
