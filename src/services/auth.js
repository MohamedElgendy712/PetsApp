const API_HOST = process.env.REACT_APP_DASHBOARD_API_URL + "/api/dash/auth/";
export function authenticate(email, password) {
    console.log(API_HOST);
    return fetch(API_HOST + "login", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.status === "error") {
            return response
        }

        return fetch_authed_user()
    }).catch(error => {
    // Handle errors
        console.error(error);
    });
}

export const unauthenticate = () => {
    return fetch(API_HOST + "logout", {
        method: 'POST',
        credentials: 'include',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.status === "ok") {
            localStorage.clear()
            localStorage.setItem("user_logged_in", "false")
        }

        return res
    })
}
const fetch_authed_user = () => {
    return fetch(API_HOST + "user", {
        method: 'GET',
        credentials: 'include',
        secure: true,
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.status === "ok") {
            localStorage.setItem("user_logged_in", "true")
            localStorage.setItem("user_id", res.id)
            localStorage.setItem("user_first_name", res.first_name)
            localStorage.setItem("user_last_name", res.last_name)
        }

        return res
    })
}