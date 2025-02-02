async function getUsers() {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    const result = users.map( function(user){

        return `
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
            <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</td>
        </tr>
        
        `;

    })

    document.querySelector(".tbody").innerHTML=result.join('');
}

getUsers();