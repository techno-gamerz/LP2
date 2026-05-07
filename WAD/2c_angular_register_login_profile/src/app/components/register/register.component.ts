import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, User } from "../../services/auth.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
    user: User = {
        name: "",
        email: "",
        password: "",
        city: ""
    };

    constructor(private authService: AuthService, private router: Router) {}

    register(): void {
        this.authService.register(this.user);
        alert("Registration successful");
        this.router.navigate(["/login"]);
    }
}
