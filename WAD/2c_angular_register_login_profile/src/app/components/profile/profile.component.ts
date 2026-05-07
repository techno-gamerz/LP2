import { Component } from "@angular/core";
import { AuthService, User } from "../../services/auth.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
    user: User | null;
    loggedIn: boolean;

    constructor(private authService: AuthService) {
        this.user = this.authService.getUser();
        this.loggedIn = this.authService.isLoggedIn();
    }
}
