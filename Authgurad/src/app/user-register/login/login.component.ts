
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


// import { AlertService, AuthenticationService } from '../_services';
import { UserService } from '../user.service';
import { User } from '../user.mouel';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public loading = false;
    public submitted = false;
    public returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: UserService,
        private alertService: ToastrService
    ) {
       
        this.loginForm = this.buildForm()
       
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit() {
        this.loginForm = this.buildForm()

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        const username: string = this.f['username'].value
        const password: string = this.f['password'].value

        this.authenticationService.login()
            .subscribe((data) => {
                let user = data.find((user: User) => (user.username === username) && (user.password === password));
                if (user) {
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('user', JSON.stringify(user))
                    this.router.navigate([this.returnUrl]);
                } else {
                    this.alertService.success('Invalid Credentials. Try again.');
                }
                this.loading = false;

            });

    }

    public buildForm(): FormGroup {
        return this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    public onRegister(){
        this.router.navigateByUrl("register");
        }
}

