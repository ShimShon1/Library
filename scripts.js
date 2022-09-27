//varibales
let myLibrary = [];

submit = document.querySelector('button')
BooksContainer = document.querySelector(".books-container")




//event listeners

submit.addEventListener("click",function(){
    addBook()
})



function addBook(){

    let authorField = document.querySelector("#author")
    let titleField = document.querySelector("#title")
    let PagesField = document.querySelector("#pages")


     
    myLibrary.push(
        {
            name:authorField.value,
            tite:titleField.value,
            pages:PagesField.value,

        }
    )
    createBook(authorField.value,titleField.value,PagesField.value)

}


submit = document.querySelector('button')

function createBook(authorName,titleName,pagesAmount){


    let newBook = document.createElement("div")
    let titlePara = document.createElement("p")
    let authorPara = document.createElement("p")
    let byPara = document.createElement("p")

    byPara.textContent = "By"
    titlePara = titleName
    authorPara = authorName


    newBook.classList.add("book-card")
    BooksContainer.append(newBook)

    newBook.append(titlePara)
    newBook.append(byPara)
    newBook.append(authorPara)


}

