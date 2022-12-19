function solution(instr) {
    if (instr == 'upvote') {
        this.upvotes++;
    } else if (instr == 'downvote') {
        this.downvotes++;
    } else {
        let balance = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;
        let upvoteReport = this.upvotes;
        let downvoteReport = this.downvotes;
        // let upvoteReport = totalVotes > 50 ? Math.ceil(this.upvotes * 1.25) : this.upvotes;
        // let downvoteReport = totalVotes > 50 ? Math.ceil(this.downvotes * 1.25) : this.downvotes;
        let rating = '';
        if (this.upvotes / totalVotes > 66) {
            rating = 'hot';
        } else if (this.upvotes >= this.downvotes && totalVotes > 100) {
            rating = 'controversial'
        } else if (this.upvotes < this.downvotes) {
            rating = 'unpopular';
        }
        if (totalVotes < 10 || !rating) {
            rating = 'new';
        }
        return [upvoteReport, downvoteReport, balance, rating];
    }
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 120,
    downvotes: 30
};
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     
