var config = {
    apiKey: "AIzaSyArEv-G1I3BR9z7K4Sjpjmr92Z8Ge2REB4",
    authDomain: "facebooklogen.firebaseapp.com",
    databaseURL: "https://facebooklogen.firebaseio.com"
};
firebase.initializeApp(config);



var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment, index) {
            return <div>
                <a href="javascript:void(0)">{comment.author}</a>
                <h5>{comment.text}</h5>
            </div>
        });
        return <div className='commentList'>{commentNodes}</div>;
    }
});





var CommentForm = React.createClass({
    handleSubmit: function (event) {
        event.preventDefault();
        this.props.onCommentSubmit({
            author: this.refs.author.value.trim(), // trim() for invalid space
            text: this.refs.text.value.trim()
        });
        this.refs.author.value = '';
        this.refs.text.value = '';
    },
    render: function () {
        return (
            <form className='form-group' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Your name' ref='author' class="form-control" />
                <input type='text' placeholder='Say something...' ref='text' class="form-control" />
                <input type='submit' value='Post' />
            </form>
        );
    }
});

var CommentBox = React.createClass({
    mixins: [ReactFireMixin],
    handleCommentSubmit: function (comment) {
        console.log(comment)
        this.firebaseRefs['data'].push(comment);
    },
    componentWillMount: function () {
        this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
    },
    render: function () {
        console.log(this.state.data)
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('root')
);
