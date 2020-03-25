// Show hide/Buttons
const addCommInput = document.querySelector('.addCommInput');
const form = document.querySelector('.addCommForm');
const formButtons = document.querySelector('.buttons-area');
const submitBtn = document.querySelector('.submitBtn');
const cancelButton = document.querySelector('.cancelBtn');

addCommInput.addEventListener('click', () => {
	formButtons.style.display = 'block';
	submitBtn.innerText = 'Comment';
});
cancelButton.addEventListener(
	'click',
	() => (formButtons.style.display = 'none')
);
// Comments Format
const randomID = () => Math.floor(Math.random() * 10000);

const comments = [
	{
		id: 1,
		text: 'Comment 1',
		replies: []
	},
	{
		id: randomID(),
		text: 'Comment 2',
		replies: [
			{
				id: randomID(),
				text: 'Comment 2 Reply 1'
			},
			{
				id: randomID(),
				text: 'Comment 2 Reply 2'
			}
		]
	}
];

// Helper Functions
const tagClass = (tagName, className) => {
	const tag = document.createElement(tagName);
	tag.classList.add(className);
	return tag;
};
const tagClassText = (tagName, className, text) => {
	const tag = document.createElement(tagName);
	if (className !== '') tag.classList.add(className);
	tag.innerHTML = text;
	return tag;
};
// Generate Dynamic HTML for One Comment with Replies
const createCommentHTML = comment => {
	const commentDiv = tagClass('div', 'comment');
	commentDiv.id = comment.id;

	// Comment Body
	const createCommentBody = text => {
		const commentBody = tagClass('div', 'comment-body');
		const commentContent = tagClass('div', 'comment-content');
		const commentText = tagClassText('p', '', text);
		const commentButtons = tagClass('div', 'comment-buttons');
		const replyButton = tagClassText('button', 'replyBtn', 'Reply');
		replyButton.id = comment.id;

		commentButtons.appendChild(replyButton);
		commentContent.appendChild(commentText);
		commentBody.appendChild(commentContent);
		commentBody.appendChild(commentButtons);
		return commentBody;
	};
	const commentBody = createCommentBody(comment.text);

	// Comment Replies
	const repliesBody = tagClass('div', 'replies-body');
	comments.forEach(comm => {
		if (comm.id === comment.id) {
			comm.replies.forEach(reply => {
				const replyDiv = tagClass('div', 'comment');
				replyDiv.id = reply.id;
				const replyBody = createCommentBody(reply.text);
				replyDiv.appendChild(replyBody);
				repliesBody.appendChild(replyDiv);
			});
		}
	});
	// Add Body and Replies to main Div
	commentDiv.appendChild(commentBody);
	commentDiv.appendChild(repliesBody);
	return commentDiv;
};

// Generate All Comments
const generateComments = commentsArray => {
	const commentsSection = document.querySelector('.comments-section');
	commentsSection.innerHTML = '';
	commentsArray.forEach(comment => {
		const newComment = createCommentHTML(comment);
		commentsSection.prepend(newComment);
	});
	return commentsSection;
};
generateComments(comments);

// Detect Reply Click
let replyCommentID = null;
window.addEventListener('click', e => {
	if (e.target.innerText === 'Reply') {
		submitBtn.innerText = 'Reply';
		replyCommentID = e.target.id;
		// Scroll top and focus
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		addCommInput.focus();
		formButtons.style.display = 'block';
	}
});

// Add a new comment OR Reply
submitBtn.addEventListener('click', e => {
	e.preventDefault();

	// Add Comment
	if (addCommInput.value !== '' && submitBtn.innerText === 'Comment') {
		const newComment = {
			id: randomID(),
			text: addCommInput.value,
			replies: []
		};
		comments.push(newComment);
		// Re-render list
		generateComments(comments);
	}

	// Add Reply
	else if (
		addCommInput.value !== '' &&
		submitBtn.innerText === 'Reply' &&
		replyCommentID
	) {
		const newReply = {
			id: replyCommentID,
			text: addCommInput.value
		};
		comments.forEach(comment => {
			if (Number(comment.id) === Number(newReply.id)) {
				comment.replies.push(newReply);
			}
		});
		// Re-render list
		generateComments(comments);
	}
	// Clear Input
	addCommInput.value = '';
});
