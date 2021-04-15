window.load = View()
let datos = document.getElementById('box')
function onRegister() {
    var _name = document.getElementById("name").value;
    var _description = document.getElementById("description").value;
    fetch("https://localhost:44331/api/Items", {

        // Adding method type
        method: "POST",
        body: JSON.stringify({
            name: _name,
            description:_description
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json =>{ 
            console.log(json)
        })
    location.reload();

}
function View() {
    fetch("https://localhost:44331/api/Items", {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(json => {
            for (i of json.value) {
                datos.innerHTML += `
            <div class="col-xl-3 col-sm-6 mb-5" >
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://i.ibb.co/K5Gmd3V/2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">${i.Name}</h5><span class="small text-uppercase text-muted">${i.Description}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fas fa-utensils-alt"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fas fa-meat"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fad fa-cookie"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fas fa-apple-alt"></i></a></li>
                </ul>
            </div>
        </div>
            `
            }
        })

}