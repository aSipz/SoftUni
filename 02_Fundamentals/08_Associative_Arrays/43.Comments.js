function comments(input) {
    let userList = {};
    let articleList = {};
    input.forEach(line => {
        if (line.includes('user ')) {
            let currentUser = line.split('user ')[1];
            userList[currentUser] = {};
        } else if (line.includes('article ')) {
            let currentArticle = line.split('article ')[1];
            articleList[currentArticle] = {};
        } else {
            let [firstPart, secondPart] = line.split(': ');
            let [user, article] = firstPart.split(' posts on ');
            let [title, content] = secondPart.split(', ');
            if (userList[user] && articleList[article] && !Object.values(userList[user]).includes(title)) {
                articleList[article][title] = content;
                if (userList[user][article]) {
                    article += ' '
                }
                userList[user][article] = title;
            }
        }
    });
    let articleArray = Object.entries(articleList);
    articleArray.sort(([keyA, valueA], [keyB, valueB]) => Object.keys(valueB).length - Object.keys(valueA).length);
    let userArray = Object.entries(userList);
    userArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    for (const [article, commentsObj] of articleArray) {
        if (Object.keys(commentsObj).length != 0) {
            console.log(`Comments on ${article}`);
        }
        for (const [user, articleObj] of userArray) {
            for (const tempArticle in articleObj) {
                if (tempArticle.trim() == article) {
                    let title = articleObj[tempArticle];
                    console.log(`--- From user ${user}: ${title} - ${commentsObj[title]}`);
                }
            }
        }
    }
}
comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Shopping',
    'article zlq',
    'article Shopping',
    'article Movies',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'user Angel',
    'Angel posts on Gmuc: blq, te tova e',
    'Angel posts on Shopping: blq, te tova e',
    'Angel posts on Shopping: tralalal, zumb',
    'Angel posts on Books: blq, te tova e',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);