import { Injectable } from "@angular/core";

export interface User {
    name: string;
    email: string;
    password: string;
    city: string;
}

@Injectable({
    providedIn: "root"
})
export class AuthService {
    register(user: User): void {
        localStorage.setItem("registeredUser", JSON.stringify(user));
    }

    login(email: string, password: string): boolean {
        const user = this.getUser();
        if (user && user.email === email && user.password === password) {
            localStorage.setItem("loggedIn", "true");
            return true;
        }
        return false;
    }

    getUser(): User | null {
        const data = localStorage.getItem("registeredUser");
        return data ? JSON.parse(data) as User : null;
    }

    isLoggedIn(): boolean {
        return localStorage.getItem("loggedIn") === "true";
    }
}
