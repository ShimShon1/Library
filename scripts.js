//varibales
let myLibrary = [];



submit = document.querySelector('button')
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



function createBook(authorName,titleName,pagesAmount){

    let newBook = document.createElement("div")
    let titlePara = document.createElement("p")
    let authorPara = document.createElement("p")
    let pages = document.createElement("p")

    pages.classList.add("pages")
    titlePara.classList.add("book-name")
    authorPara.classList.add("author-name")
    newBook.classList.add("book-card")

    titlePara.textContent = titleName
    authorPara.textContent = "By " + authorName
    pages.textContent =  pagesAmount + " pages"

    BooksContainer.append(newBook)

    newBook.append(titlePara)
    newBook.append(authorPara)
    newBook.append(pages)

    BooksContainer.style.backdropFilter= 'blur(4px);'
}

