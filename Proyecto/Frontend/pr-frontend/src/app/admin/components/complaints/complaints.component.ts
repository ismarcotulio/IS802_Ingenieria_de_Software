import { ComplaintService } from './../../services/complaint/complaint.service';
import { Complaint } from './../../models/complaint-model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit{

  complaints!: Complaint[]
  cards!: Observable<Complaint[]>


  constructor(private breakpointObserver: BreakpointObserver, private complaintService: ComplaintService) {

  }

  ngOnInit(): void {
    this.getComplaints()
  }

  getComplaints(){
    this.complaintService.getComplaints().subscribe(
      data=>{
        this.complaints = data
        this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(

          map(({ matches }) => {
            if (matches) {
              return this.complaints
            }

            return this.complaints
          })
        );

      }
    )
  }

  removeComplaint(idComplaint:number){
    this.complaintService.removeComplaints(idComplaint).subscribe(
      data=>{
        if(data == true){
          this.getComplaints()
        }
      }
    )
  }

  acceptComplaint(idComplaint:number, Id_Denounced:number){
    this.complaintService.acceptComplaint(Id_Denounced).subscribe(
      data=>{
        if(data == true){
          this.removeComplaint(idComplaint)
        }
      }
    )
  }

}
