function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(string) {
            if (typeof string !== 'string') {
                return;
            }
            this.comments.push(string);
        }
        toString() {
            let result = `${super.toString()}\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length > 0) {
                result += '\nComments:\n';
                this.comments.forEach((comment, index) => {
                    result += ` * ${comment}`
                    if (index !== this.comments.length - 1) {
                        result += '\n';
                    }
                });
            }
            return result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}