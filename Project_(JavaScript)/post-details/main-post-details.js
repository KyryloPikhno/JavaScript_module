let url = new URL(location.href);
let id = url.searchParams.get('id');

let containerForPostsInfo = document.createElement('div');
containerForPostsInfo .classList.add('containerForPostsInfo');
document.body.appendChild(containerForPostsInfo);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post =>  {
        let infoOfPost = document.createElement('div');
        infoOfPost.classList.add('infoOfPost')
        infoOfPost.innerHTML = `<p>User id: ${post.userId}</p> 
                                <p>Post id: ${post.id}</p>        
                                <p>Title: ${post.title}</p>        
                                <p>Body: ${post.body}</p>`
        containerForPostsInfo.appendChild(infoOfPost);

        let button = document.createElement('button');
        button.classList.add('buttonShowComments');
        button.innerText = 'comments';
        document.body.appendChild(button);

        button.onclick = function () {
            containerForComments.classList.toggle('containerViewComments');
        };
    });

let containerForComments = document.createElement('div');
containerForComments .classList.add('containerHidden');
document.body.appendChild(containerForComments);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => comments.forEach(comment => {
        let commentForPost = document.createElement('div')
        commentForPost.classList.add('commentForPost')
        commentForPost.innerHTML = `<p>Post id: ${comment.postId}</p>
                                     <p>Comment id: ${comment.id}</p>
                                     <p>Name: ${comment.name}</p>
                                     <p><a href="mailto:${comment.email}">${comment.email}</a></p>
                                     <p>Body: ${comment.body}</p>`
        containerForComments.appendChild(commentForPost);
    }));