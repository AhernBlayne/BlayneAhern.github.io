import {Injectable} from "@angular/core";
import {DiaryEntry} from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry("jan 1st", "Entry"),
        new DiaryEntry("Jan 2nd", "Hello World!")
    ]
}
