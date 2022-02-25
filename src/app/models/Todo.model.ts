import { Directive, Input } from "@angular/core";


@Directive()
export class Todo {
    description: string;
    completed: boolean | undefined;
    editMode: boolean | undefined;
    checked: boolean | undefined;


    constructor() {
        this.description = '';
    }
}

