import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    selector: 'app-course-list', //Vai virar uma tag e ser usando em outro compomente
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    //Gerando uma instância com os mesmo objeto
    constructor(private courseService: CourseService){}

    ngOnInit(): void{ //ao utilizar o implements Oninit é obrigatório a criação desse Método ngOnInit
        this.courses = this.courseService.retrieveAll();

    }
}