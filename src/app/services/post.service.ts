import { Subject } from "rxjs/Subject";

export class PostService {
    
    postSubject = new Subject<any[]>();

    allPosts = [
        {
            title: 'Mon titre 1',
            content: 'Mon contenu 1',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon titre 2',
            content: 'Mon contenu 2',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon titre 3',
            content: 'Mon contenu 3',
            loveIts: 0,
            created_at: new Date()
        },
    ];

    emitPostSubject(){
        this.postSubject.next(this.allPosts.slice());
    }

    addPost(title: string, content: string){
        const postObject = {
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        postObject.title = title;
        postObject.content = content;
        this.allPosts.push(postObject);
        this.emitPostSubject();
    }

    deletePost(title: string) {
        var newPosts: any[] = [];
        for(let i=0;i<this.allPosts.length;i++){
            if(this.allPosts[i].title !== title){
               newPosts.push(this.allPosts[i]);
            }
        }
        this.allPosts = newPosts;
        this.emitPostSubject();
    }
}