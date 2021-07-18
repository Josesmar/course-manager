import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{ 

    course: Course;  

    //Realiza a injeção de dependencia (Activated pegar o id da rota)
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void{            
        this.course = this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void{

        this.courseService.save(this.course);
    }
}
