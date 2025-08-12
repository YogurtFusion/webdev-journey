//  The Token Manager:    You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiZXhwIjoxNzAwMDAwMDAwfQ.mF4Fz_AOtk6mE-c0XbV9d9QFy3cdQ4Yj0QKkD3N6cXU"

async function setAuthToken(token) {
    return new Promise((resolve, reject) => {

        let expiresAt = Date.now() + 80000;
        setTimeout(() => {
            let data = {
                token: token,
                expiresAt: expiresAt
            }

            localStorage.setItem("authTokens", JSON.stringify(data))
            resolve("Your token is saved with the expiration time")

        }, 1000);
    })
}

(async () => {
    let solve = await setAuthToken(token)
    console.log(solve);
})()
