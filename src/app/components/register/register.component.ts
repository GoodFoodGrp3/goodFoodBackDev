import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register.service";
import {RegisterEmployees} from "../../interfaces/registerEmployees";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

  Status: any = ['RESTAURATEUR', 'COMPTABLE', 'COMMUNITY', 'EMPLOYEE','ADMINISTRATEUR'];

  //Using Map
  mapOffice = new Map<number, string>();

  erroraddUser : any;
  notGoodPassword = false;

  creationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit(): void {

    this.mapOffice.set(1, "Paris");
    this.mapOffice.set(2, "Marseille");
    this.mapOffice.set(3, "Nice");

    this.initCreationForm();
  }

  /**
   *
   * Initialisation Formulaire Création
   */
  initCreationForm(){
    //Minimum eight Characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    let regex = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/;
    this.creationForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      status: ['', [Validators.required]],
      succursale:['', [Validators.required]],
      username: ['',Validators.required],
      lastname:['',Validators.required],
      password: ['',[Validators.required,Validators.pattern(regex)]],
      cpassword: ['',[Validators.required,Validators.pattern(regex)]]
    })
  }

  /**
   *
   * Ajout d'un utilisateur
   */
  addUser(){
    console.log(this.creationForm.value);
    if(this.creationForm.get('password')!.value != this.creationForm.get('cpassword')!.value)
    {
      this.notGoodPassword = true;
    }

    else
    {
      this.registerService.addOneUser(this.creationForm.value).subscribe({
        next: data => {
          this.router.navigateByUrl('/login');
        },
        error: error => {
          console.log(error);
          this.erroraddUser = error.error.details;
        }
      });
    }
  }


  /**
   *
   * Changement du status au click
   */
  changeStatus(e: any)
  {
    this.statusName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   *
   * Changement de la succursale au click
   */
  changeSuccursale(e: any)
  {
    this.succursaleName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get statusName() {
    return this.creationForm.get('status');
  }


  // Access formcontrols getter
  get succursaleName() {
    return this.creationForm.get('succursale');
  }
}
