//   tagInputOnBlur(event){
//     let input = event.target;
//     const value = event.target.value;
//     this.handleTagging(value, input)

//   }

//     addTag(event: MatChipInputEvent): void {
// 		let input = event.input;
// 		const value = event.value;
// 		this.handleTagging(value, input)

// 	}

//       removeTag(tag) {
//     this.tags.delete(tag);
//   }


//   selected(event: MatAutocompleteSelectedEvent): void {
//     this.tagInput.nativeElement.value = '';
//     this.tags.add(event.option.viewValue)
//     this.tagCtrl.setValue(null);
//   }

  

// ASSESSMENT SERVICES

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreSheetService {
  constructor(private http: HttpClient) {}

  exportScoreSheet(startDate: string, endDate: string): Observable<any> {
    const url = 'api/v3/export-score-sheet/';
    const body = { startDate, endDate };

    return this.http.post(url, body, { responseType: 'text' });
  }
}