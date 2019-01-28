import {Component, OnInit, Input} from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

    onLoveIt() {
        this.loveIts++;
    }

    onDontLoveIt() {
        this.loveIts--;
    }

    constructor(private postService: PostService) {
    }

    ngOnInit() {
    }

    onDelete(title: string){
        this.postService.deletePost(title);
    }

}
