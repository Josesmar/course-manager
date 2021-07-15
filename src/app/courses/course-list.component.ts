import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    // selector: 'app-course-list', //Vai virar uma tag e ser usando em outro compomente
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string ="";
    
    
    //Gerando uma instância com os mesmo objeto
    constructor(private courseService: CourseService){}

    ngOnInit(): void{ //ao utilizar o implements Oninit é obrigatório a criação desse Método ngOnInit
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}