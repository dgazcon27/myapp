import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../api/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  myItem: any;
  edit_item_form: FormGroup;

  constructor(
  	private homeService: HomeService,
  	private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	this.getItemById(id)
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  getItemById(id: string): void {
  	this.homeService.getItemByID(id)
  	.subscribe(item => {
  		if(item){
          this.myItem = item;
          this.edit_item_form = this.formBuilder.group({
            title: new FormControl(item.title, Validators.required),
            description: new FormControl(item.description, Validators.required)
          });
        } else{
          this.goBack();
        }
  	})
  }

  updateItem(value) {
    console.log(value)
  }

}
