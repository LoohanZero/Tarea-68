const root = document.getElementById('root')
const e = React.createElement

// Precio
// Crear un componente Precio que tenga los props:

// valor, que toma un número
// moneda, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)
// y que renderice el precio formateado con el símbolo de la moneda adelante

// Investigar Intl.NumberFormat


const Precio = ({ valor, moneda }) => {

    const texto = new Intl.NumberFormat("es-ES", {style: "currency", currency: moneda }).format(valor)
    return e('p', null, texto)
}

// Fecha
// Crear un componente Fecha que tenga un prop fecha que tome un objeto de tipo Date, y renderice un elemento p con la fecha formateada, por ejemplo: miércoles, 29 de abril de 2020

// Investigar Intl.DateTimeFormat

const Fecha = ({ dia }) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const texto = new Intl.DateTimeFormat('es-ES', opciones).format(dia)

    return e('p', null, texto)
}

// Paginado
// Crear un componente Pagina que tome los siguientes props:

// actual, número de la página actual
// maximo, número de la página máxima
// y renderice un paginado de la siguiente forma: [Previous] [1] [...] [5] [...] [10] [Next], es decir, la página 1, puntos suspensivos, la página actual, puntos suspensivos y la página máxima, con las palabras para avanzar y retroceder.

// Ignorar lo que sucede si la página actual es igual a la primera o a la última.

// Darle algunos estilos, por ejemplo:


const ItemDePaginacion = ( { item }) => {

    const esString = typeof(item)=== 'string' ? "no-numero" : "";
    const esActual = typeof(item) === 'string' || item === 1 || item === 35 ? "" : "actual";
    return e('span', { className: `${esActual} ${esString} item`}, `${item}`)

}
const Pagina = ({ actual, maximo }) => {
    const orden = ["previous", 1, "...", Number(actual), "...", Number(maximo), "next"]
    const paginado = orden.map(pagina => e(ItemDePaginacion, {item: pagina}))
    


    return e('div', null, paginado)
   
}

// PuntajeItem y Puntaje
// Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso

// Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩

// Pueden usar íconos de FontAwesome o emojis

// EXTRA:

// Si usan íconos, permitir cambiar el color de las estrellas
// Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
// Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas. Se puede ocultar el elemento usando una clase de CSS con la propiedad display: none

const PuntajeItem = ({ tipo }) => {
    const estado = tipo === "lleno" ? `fas fa-star` : `far fa-star`
    
    return e('i', { className: `${estado}`})
}

const Puntaje = ({puntaje}) => {
    let estrellas = [];
    

    for (let i = 1; i <= puntaje; i++) {
        estrellas.push("lleno");
    }

    score = estrellas.map(estrella => e(PuntajeItem, { tipo: `${estrella}` }))
    console.log(score)
    return e('span', {className: "puntaje"}, score )
}






const App = () => {
    return e('main', null, [
        e(Precio, 
            { valor: 72, moneda: "ARS"}), 
        e(Fecha, 
            { dia: new Date }),
        e(Pagina, 
            { actual: 7, 
              maximo: 35 }),
        e(Puntaje,
            { puntaje: 5 })
        
        
    ])
  }

ReactDOM.render(e(App), root)
