

const button = document.querySelector('button')
let userId;

button.addEventListener('click',()=>{  
userId = document.querySelector('#input-value').value.trim();

userId = Number(userId)

if(isNaN(userId) || userId < 1 || userId > 30){
    alert("Enter userId between 1 to 30")
    return;
}
const url = `https://dummyjson.com/users/${userId}`

fetch(url).then((reponse)=>{
    if(!reponse.ok){
        throw new Error("sorry we can't retrive data ")
    }

    return reponse.json()
}).then((data)=>{
    document.querySelector('#name').innerText = `${data.firstName}`
    document.querySelector('address').innerText =  `${data.address.address},${data.address.city},${data.address.state}, ${data.address.postalCode}, ${data.address.country} `;

}).catch(error=>{
    throw new Error("soory wrong user")
    console.log(error)
})
})

