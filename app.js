var app4 = new Vue({
    el: '#app-2',
    data: {
        servers: []
    }
  })

function addStudent(){
  axios.get('http://localhost:3050/students', {
    params: {
      surname: document.getElementById("surname").value,
      lastname: document.getElementById("lastname").value,
      phone: document.getElementById("phone").value
    }
  }).then(response => {
    servers: [];
    for(let i=0; i <= response.data.length; i++){
      app4.servers.push({lastname: response.data[i]["lastname"], surname: response.data[i]["surname"], phone: response.data[i]["phone"]})
    }
  }).catch(e => {
    console.log(e);
  })
}
