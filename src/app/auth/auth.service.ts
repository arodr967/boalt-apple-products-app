import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _isAuthenticated = false;

  registeredUsers = {
    "testuser@gmail.com": {
      name: "test user 1",
      email: "testuser@gmail.com",
      password: "password123"
    }
  };

  constructor() {}

  authenticate(email, password) {
    const user = this.registeredUsers[email];

    if (!user) {
      console.log("Email not found");
      return;
    }
    if (user.password !== password) {
      console.log("Password incorrect");
      return;
    }

    this._isAuthenticated = true;
    console.log("User has been authenticated");
    return this._isAuthenticated;
  }

  isAuthenticated() {
    return this._isAuthenticated;
  }

  registerUser(name, email, password) {
    this.registeredUsers[email] = {
      name,
      email,
      password
    };

    this._isAuthenticated = true;
    console.log("User has been registered and authenticated");
    return this._isAuthenticated;
  }
}
