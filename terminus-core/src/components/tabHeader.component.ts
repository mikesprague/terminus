import { Component, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core'
import { BaseTabComponent } from '../components/baseTab.component'

@Component({
    selector: 'tab-header',
    template: require('./tabHeader.component.pug'),
    styles: [require('./tabHeader.component.scss')],
})
export class TabHeaderComponent {
    @Input() index: number
    @Input() @HostBinding('class.active') active: boolean
    @Input() @HostBinding('class.has-activity') hasActivity: boolean
    @Input() tab: BaseTabComponent
    @Output() closeClicked = new EventEmitter()

    @HostListener('auxclick', ['$event']) onClick ($event: MouseEvent): void {
        if ($event.which == 2) {
            this.closeClicked.emit()
        }
    }
}
