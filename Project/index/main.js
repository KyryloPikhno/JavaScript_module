let containerForUsers = document.createElement('div');
containerForUsers.classList.add('container')
document.body.appendChild(containerForUsers)

fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then(users => users.forEach(user => {
     let idAndName = document.createElement('div')
     idAndName.classList.add('idAndName')
     idAndName.innerHTML = `<p><span>User id: ${user.id}</span></p> 
                            <p>${user.name}</p>`
     containerForUsers.appendChild(idAndName)

     let button = document.createElement('a')
     button.classList.add('button')
      button.href = `../user-details/user-details.html?id=${user.id}`
     button.innerText = 'user details'
     idAndName.appendChild(button)
 }))