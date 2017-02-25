/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var config = {
	    apiKey: "AIzaSyArEv-G1I3BR9z7K4Sjpjmr92Z8Ge2REB4",
	    authDomain: "facebooklogen.firebaseapp.com",
	    databaseURL: "https://facebooklogen.firebaseio.com"
	};
	firebase.initializeApp(config);
	
	var CommentList = React.createClass({
	    displayName: "CommentList",
	
	    render: function () {
	        var commentNodes = this.props.data.map(function (comment, index) {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "a",
	                    { href: "javascript:void(0)" },
	                    comment.author
	                ),
	                React.createElement(
	                    "h5",
	                    null,
	                    comment.text
	                )
	            );
	        });
	        return React.createElement(
	            "div",
	            { className: "commentList" },
	            commentNodes
	        );
	    }
	});
	
	var CommentForm = React.createClass({
	    displayName: "CommentForm",
	
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
	        return React.createElement(
	            "form",
	            { className: "form-group", onSubmit: this.handleSubmit },
	            React.createElement("input", { type: "text", placeholder: "Your name", ref: "author", "class": "form-control" }),
	            React.createElement("input", { type: "text", placeholder: "Say something...", ref: "text", "class": "form-control" }),
	            React.createElement("input", { type: "submit", value: "Post" })
	        );
	    }
	});
	
	var CommentBox = React.createClass({
	    displayName: "CommentBox",
	
	    mixins: [ReactFireMixin],
	    handleCommentSubmit: function (comment) {
	        console.log(comment);
	        this.firebaseRefs['data'].push(comment);
	    },
	    componentWillMount: function () {
	        this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
	    },
	    render: function () {
	        console.log(this.state.data);
	        return React.createElement(
	            "div",
	            { className: "commentBox" },
	            React.createElement(
	                "h1",
	                null,
	                "Comments"
	            ),
	            React.createElement(CommentList, { data: this.state.data }),
	            React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
	        );
	    }
	});
	ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('root'));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map