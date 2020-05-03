const root = document.getElementById('root')
const e = React.createElement

// PuntajeItem y Puntaje
// Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella llena o vacía según el caso

// Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩

// Pueden usar íconos de FontAwesome o emojis

// EXTRA:

// Si usan íconos, permitir cambiar el color de las estrellas
// Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
// Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas. Se puede ocultar el elemento usando una clase de CSS con la propiedad display: none

const PuntajeItem = ({
    tipo,
    colorFav,
    iconoFav = false
}) => {
    const icono = iconoFav === "corazones" ? `heart` : `star`;
    const estado = tipo === "lleno" ? `fas fa-` : `far fa-`;

    return e('i', {
        className: `${estado}${icono} ${colorFav}`
    })
}

const Puntaje = ({
    puntaje,
    color,
    icono = "estrellas",
    mostrar = "si"
}) => {
    let estrellas = [];
    const resto = 5 - puntaje;
    if (puntaje > 1 || puntaje < 5) {
        for (let i = 1; i <= puntaje; i++) {
            estrellas.push("lleno");
        }
        for (let i = 1; i <= resto; i++) {
            estrellas.push("vacio");
        }
    }

    let cantidadEstrellas = estrellas.map(estrella => e(PuntajeItem, {
        tipo: estrella,
        colorFav: color,
        iconoFav: icono
    }))



    return e('div', {
        className: `puntaje`
    }, cantidadEstrellas, e('div', {
        className: `texto ${mostrar}`
    }, ` ${puntaje} de 5 ${icono}`))
}

// Alert
// Crear un componente Alert que

// tenga como props status y message
// message es el mensaje de la alert
// status es un string con alguno de los siguientes valores:
// danger
// success
// warning
// info
// cada status renderiza el componente de un forma distinta, con sus propios colores de e iconos, de la siguiente forma:


const Alert = ({
    status,
    message
}) => {
    return e('div', { className: `box ${status}`}, `${message}`)

}






const App = () => {
    return e('main', null, [
        e(Puntaje, {
            puntaje: 4,
            color: "amarillo",
            icono: "corazones",
            mostrar: "no"
        }),
        e(Alert, {
            status: "danger",
            message: "There was an error processing your request"
        }),
        e(Alert, {
            status: "success",
            message: "Data uploaded to the server. Fire on!"
        }),
        e(Alert, {
            status: "warning",
            message: "Seems your account is about to expire, upgrade now!"
        }),
        e(Alert, {
            status: "info",
            message: "Chakra is going live on August 30th. Get ready!"
        }),
    ])
}

ReactDOM.render(e(App), root)