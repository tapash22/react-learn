import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain:'dev-v4qgxi53k3i6ujrw.us.auth0.com',
        clientID: '0I3bF8uYhn8Jk0d5P3Nf8d6FMh9V1r1e',
        redirectUri: 'http://localhost:3001/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    login = ()=>{
        this.auth0.authorize();
        console.log("for login click")
    }
}