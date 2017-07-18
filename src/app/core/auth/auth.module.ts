import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AuthRouting } from "./auth.routing";
import { SignupComponent } from "./auth.component";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [AuthRouting, FormsModule],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule {}
