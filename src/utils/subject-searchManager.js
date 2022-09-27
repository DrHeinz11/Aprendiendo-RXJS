import { Subject } from "rxjs";

export class searchManager {
  searchSubject = new Subject();
  getSearchSubject() {
    return this.searchSubject.asObservable();
  }
  setSearchSubject(value) {
    return this.searchSubject.next(value);
  }
}
