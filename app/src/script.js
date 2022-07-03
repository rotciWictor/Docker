const table = document.querySelector("table");
showList();

async function showList() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  try {
    const response = await axios.get(`http://localhost:9000/list`);
    console.log(response);
    const data = await response.data;

    data.forEach(function (data) {
      table.innerHTML += `
           <td>${data.name}</td>
           <td>${data.email}</td>
           <td><input type="button" onclick="deleteInput(${data.id})" value="deletar"></input></td>`;
    });
  } catch (error) {
    console.error(error);
  }

  return true;
}

async function createInput() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const id = Math.floor(Date.now() * Math.random());

  axios
    .post(`http://localhost:9000/list`, {
      id: id,
      name: name.value,
      email: email.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  name.value = "";
  email.value = "";

  showList();

  return true;
}

function deleteInput(id) {
  axios
    .delete(`http://localhost:9000/list/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  showList();

  return true;
}
