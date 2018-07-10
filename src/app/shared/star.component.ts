import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  faStar: any = faStar;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 18;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
