let language = document.getElementById("language");

let h1 = document.getElementsByTagName("h1")[0];

let p = document.getElementsByTagName("p")[0];

let button = document.getElementsByTagName("button")[0];

language.addEventListener('change',
    function languageChanger() {
        if (language.value === "en") {
            h1.textContent = "Store Name";
            p.textContent = "Product";
            button.textContent = "Buy Now";
        }
        else if (language.value === "pt") {
            h1.textContent = "Nome da Loja";
            p.textContent = "Produto";
            button.textContent = "Comprar Agora";
        }
    }
);