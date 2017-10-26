import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    animations : [
        trigger('sectionAppeared', [
            state('ready', style({
                opacity: 1
            })),
            transition('void => ready', [
                style({
                    opacity: 0,
                    transform: 'translate(-50px, -30px)'
                }), animate('500ms 0s ease-in-out')
            ])
        ])
    ]
})
export class SectionComponent implements OnInit {

    sectionState = 'ready'
    
    constructor() {}

    ngOnInit() {}

}
