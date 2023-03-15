const url = window.location.search.substring(1)
const codigo = url.substring(1)
console.log(codigo)
let urldef

if (url.substring(0, 1) == `p`) {
    let urldef = `https://scratch.mit.edu/projects/${codigo}/embed`
    console.log(urldef);
    document.getElementById('canva').innerHTML = `<iframe src="${urldef}" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`
}

if (url.substring(0, 1) == `i`) {
    let urldef = `https://assets.eagleapp.com.br/pens-comp/img/${codigo}`
    console.log(urldef);
    document.getElementById('canva').innerHTML = `<img src="${urldef}" alt="Indisponivel" width="900">`
}