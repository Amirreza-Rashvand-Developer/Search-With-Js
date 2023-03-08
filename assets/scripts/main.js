let getValueInput = document.querySelector(".product__input")
let getAllProducts = document.querySelectorAll(".product-item")
let getErrorMessage = document.querySelector(".product__message-error")
let getIconSearch = document.querySelector(".product__search-icon")

getValueInput.addEventListener("input", function () {
    for (let i = 0; i < getAllProducts.length; i++) {
        if (getAllProducts[i].textContent.toLowerCase().includes(getValueInput.value)) {
            getAllProducts[i].style.display = "flex"
        } else {
            getAllProducts[i].style.display = "none"
            if (getAllProducts.length == 0) {
                getErrorMessage.classList.toggle("show")
            }
        }
    }
})

getIconSearch.addEventListener("click", function () {
    let getParent = getIconSearch.parentElement.parentElement
    getParent.classList.toggle("show")
})
