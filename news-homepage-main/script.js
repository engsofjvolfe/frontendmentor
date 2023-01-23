const navbarBtn = document.querySelector('.navbar__btn');
const navigation = document.querySelector('nav');
const navBarSingleLink = document.querySelector('.navbar__links');
const opaqueLayer = document.querySelector('.opaque-layer')
const body = document.querySelector('body')
// evento de clique em botao nav
navbarBtn.addEventListener('click', function () {
    clicked();
    console.log("clicou")
});

// evento de clique em link
navBarSingleLink.addEventListener('click', function (e) {
    e.stopPropagation();
    // teste console.log(e.target.nodeName);
    if (e.target.nodeName === "A") {
        clicked();
        // teste console.log(e.target);
    }
})

function clicked() {
    let value = navigation.classList.contains('navbar__collapse');

    if (value) {
        navigation.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
        opaqueLayer.classList.remove('navbar__collapse')
        body.classList.remove('overflow')
        console.log("removeu classe")
    } else {
        navigation.classList.add('navbar__collapse')
        navbarBtn.classList.add('change');
        opaqueLayer.classList.add('navbar__collapse')
        body.classList.add('overflow')
        console.log("adicionou classe")
    }
}