let url = new URL(location.href);
let id = url.searchParams.get('id');

let containerInfo = document.createElement('div');
containerInfo.classList.add('containerInfo');
document.body.appendChild(containerInfo);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let infoOfUser = document.createElement('div');
        infoOfUser.classList.add('infoOfUser')
        infoOfUser.innerHTML = `<p>User id: ${user.id}</p>
                                <h3>Name: ${user.name}</h3>
                                <p>Username: ${user.username}</p>
                                <p>Email: <a href="mailto: ${user.email}">${user.email}</a></p>
                                <p>Address: (${user.address.suite}, ${user.address.street}, ${user.address.city})</p>
                                <p>Zipcode: ${user.address.zipcode}</p>
                                <p>Latitude: ${user.address.geo.lat}</p>
                                <p>Longitude: ${user.address.geo.lng}</p>
                                <p>Phone: <a href="tel: ${user.phone}">${user.phone}</a></p>
                                <p>Website: ${user.website}</p>
                                <p>Company: "${user.company.name}"</p> 
                                <p>Catch phrase: "${user.company.catchPhrase}"</p>
                                <p>bs: "${user.company.bs}"</p>`;
        containerInfo.append(infoOfUser);

        let button = document.createElement('button');
        button.classList.add('buttonShowPosts');
        button.innerText = 'post of current user';
        document.body.appendChild(button);

        button.onclick = function () {
            containerForPostsOfUser.classList.toggle('containerView');
        };
    });

let containerForPostsOfUser = document.createElement('div');
containerForPostsOfUser.classList.add('containerHidden');
document.body.appendChild(containerForPostsOfUser);

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => posts.forEach(post => {
        let boxForPostsOfUser = document.createElement('div');
        boxForPostsOfUser.classList.add('boxForPostsOfUser')
        containerForPostsOfUser.appendChild(boxForPostsOfUser)

        let postTitlesOfUser = document.createElement('div');
            postTitlesOfUser.classList.add('postTitlesOfUser')
            postTitlesOfUser.innerText = `${post.title}`;
        boxForPostsOfUser.appendChild(postTitlesOfUser);

        let buttonPostDetails = document.createElement('a');
        buttonPostDetails.innerText = 'post details';
        buttonPostDetails.classList.add('button');
        buttonPostDetails.href = `../post-details/post-details.html?id=${post.id}`
        boxForPostsOfUser.appendChild(buttonPostDetails);
    }));