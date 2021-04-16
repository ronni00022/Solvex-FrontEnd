class Manage {
    onRegister(name, description) {
        fetch("https://localhost:44331/api/Items", {

            // Adding method type
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })

    }

    async onViewData() {
        let datos = document.getElementById('box')
        let json = await fetch("https://localhost:44331/api/Items", {
            method: 'GET'
        })
            .then((response) => response.json())

        for (let i of json.value) {
            datos.appendChild(All(i))
            console.log(datos)
        }

    }
    
   

}

const iTagClasses = ['fa-utensils-alt', 'fa-meat', 'fa-cookie', 'fa-apple-alt'];

const data = iTagClasses.map((tagClasse) => {
    const i = createI(tagClasse);
    const a = createA(i);
    const li = createLi(a);
    return li;
});
function All(objDiv){
let h5Tag = document.createElement('h5');
h5Tag.classList.add('mb-0');
spanTagClasses = ["small", "text-uppercase", "text-muted"];
let span = document.createElement('span');
spanTagClasses.forEach(classes =>span.classList.add(classes));
let img = document.createElement('img');
let imgTagClasses = ["img-fluid","rounded-circle", "mb-3", "img-thumbnail", "shadow-sm"];
imgTagClasses.forEach(classes => img.classList.add(classes));
img.src = 'https://i.ibb.co/K5Gmd3V/2.png';
img.width = "100";
img.alt = "";
let div2 = document.createElement('div');
let div2TagClasses = ["bg-white", "rounded", "shadow-sm", "py-5", "px-4"];
div2TagClasses.forEach(classes => div2.classList.add(classes));
div2.appendChild(img);
div2.appendChild(h5Tag);
div2.appendChild(createUl(data));
let div1 = document.createElement('div');
let div1TagClasses = ["col-xl-3", "col-sm-6", "mb-5"];
div1TagClasses.forEach(classes => div1.classList.add(classes));
div1.appendChild(div2);
let textName = document.createTextNode(objDiv.Name)
h5Tag.appendChild(textName);
let textDescription = document.createTextNode(objDiv.Description)
span.appendChild(textDescription)
 return div1
}


function createI(className) {
    let iTag = document.createElement('i');
    iTag.classList.add('fas');
    iTag.classList.add(className);
    return iTag;
}

function createA(iTag){
    let aTag = document.createElement('a');
    aTag.classList.add('social-link');
    aTag.href = "#";
    aTag.appendChild(iTag);
    return aTag;

}

function createLi(aTag){
    let liTag = document.createElement('li');
    liTag.classList.add('list-inline-item');
    liTag.appendChild(aTag);
    return liTag;
}

function createUl(liTags){
    const arrClasse = ["social", "mb-0", "list-inline", "mt-3"];
    let ulTag = document.createElement('ul');
    arrClasse.forEach(classe => ulTag.classList.add(classe));
    liTags.forEach(liTag => ulTag.appendChild(liTag));
    return ulTag
}

function createH5(){
    return h5Tag;
}





let obj = new Manage()
window.load = obj.onViewData();
// let SubmitButton = document.getElementById('SubmmitButton');
// SubmitButton.addEventListener('click', () => {
//     let _name = document.getElementById("name").value;
//     let _description = document.getElementById("description").value;
//     obj.onRegister(_name, _description)
// })



