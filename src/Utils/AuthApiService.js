//import config from "../config";

const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`https://fast-springs-85853.herokuapp.com/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user_name, password }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default AuthApiService;
