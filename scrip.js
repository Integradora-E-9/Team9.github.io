const carrito = document.getelementbyid('carrito');
const elementos1 = document.getelementbyid('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritobtn = document.getelementbyid('#vaciar-carrito');

cargareventlisteners();

function cargareventlisteners(){

    elementos1.addeventlistener('click', comprarelemento);
    carrito,addEventListener('click', eliminarelemento);
    vaciarcarritobtn.addEventListener('click', vaciarcarrito);

}

function comprarelemento(e) {
    e.preventdefault();
    if(e.target.classlist.contains('agregar-carrito')){
        const elemento = e.target.parentelement.paren.element;
        leerdatoselemento(elemento)
    }
}

function leerdatoselemento(elemento){
    const infoelemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textcontent,
        precio: elemento.querySelector('.precio').textcontent,
        id: elemento.querySelector('a').getattribute('data-id')
    }
    insertarcarrito(infoelemento);
}

function insertarcarrito(elemento) {
    const row = document.createelement('tr');
    row.innerhtml = `
        <td>
            <img src"${elemento.imajen}" width=100 />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarelemento(e) {
    e.preventdefault();
    let elemento,
        elementoid;
    if(e.target.classlist.contains('borrar')) {
        e.target.parentelement.parentelement.remove();
        elemento = e.target.parentelement.parentelement;
        elementoid = elemento.querySelector('a').getattribute('data-id');
    } 
}

function vaciarcarrito() {
    while(lista.firstchild) {
        lista.removechild(lista.firstChild);
    }
    return false;
}