import { NoticeService } from './../../../Services/notice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.css']
})
export class NoticeFormComponent implements OnInit {

  constructor(private NoticeService:NoticeService) { }
  backIcon = faArrowLeft;
  imagePlaceHolder = faImage;

  NoticeForm: FormGroup;
  imgLink = './assets/images/image-placeholder.png';

  ngOnInit(): void {
    this.NoticeForm = new FormGroup({
      'title': new FormControl('' , [Validators.required  , Validators.minLength(10)]),
      'description': new FormControl('' ,[Validators.required , Validators.minLength(50)]),
      'privacyStatus': new FormControl('',[Validators.required]),
      'imgUrl': new FormControl('',[Validators.required])

    });

  }

  PreviewImage(data: any) {
    let reader = new FileReader();
    reader.readAsDataURL(data.target.files[0]);
    reader.onload = (event: any) => {
      this.imgLink = event.target.result;
    }
  }



  AddNotice() {
    console.log(this.NoticeForm);
    this.NoticeService.add(this.NoticeForm.value)
  }



}
