
const USER = "user";
const USER_DATA = "userData";

class Auth {

    login() {
        localStorage.setItem(USER, "login");
    }

    logout() {
        localStorage.clear();
    }

    setUserData(params) {
      localStorage.setItem(USER_DATA, JSON.stringify(params));
    }

    getUserData() {
        const data = localStorage.getItem(USER_DATA);
        return data !== null ? JSON.parse(data) : {};
    }

    isAuthenticated() {
        return localStorage.getItem(USER) !== null;
    }

}

export default new Auth();