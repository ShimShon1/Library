//varibales
let myLibrary = [{name:"Some Roman",title:"Gladitaor",pages:"213"},
{name:"Moses",title:"Spliting",pages:"1"}];




submit = document.querySelector('button')
submit = document.querySelector('button')
BooksContainer = document.querySelector(".books-container")


//event listener

createBooks()


submit.addEventListener("click",function(){
    addBook()
})


function addBook(){
   
    let authorField = document.querySelector("#author")
    let titleField = document.querySelector("#title")
    let PagesField = document.querySelector("#pages")
    let readCheck = document.querySelector("#read")
    console.log(readCheck.checked)

    myLibrary.push(
        {
            name:authorField.value,
            title:titleField.value,
            pages:PagesField.value,
            read:readCheck.checked,

        }
    )
    createBooks()

}



function createBooks(){
    BooksContainer.innerHTML = ''

    for (let i = 0; i < myLibrary.length; i++) {

        let newBook = document.createElement("div")
        let titlePara = document.createElement("p")
        let authorPara = document.createElement("p")
        let pages = document.createElement("p")
        let icons = document.createElement("div")

        let trash = document.createElement("img")  
        let check = document.createElement("img") 

        
        pages.classList.add("pages")
        titlePara.classList.add("book-name")
        authorPara.classList.add("author-name")
        newBook.classList.add("book-card")

        trash.setAttribute("src","trash-can.svg")
        check.setAttribute("src","check-bold.svg")

        check.classList.add("icon", "check")
        trash.classList.add("icon", "trash")
        icons.classList.add("icons")
        icons.append(trash)
        icons.append(check)
        

        
        titlePara.textContent = myLibrary[i].title
        authorPara.textContent = "By " + myLibrary[i].name
        pages.textContent =  myLibrary[i].pages + " pages"

     


        BooksContainer.append(newBook)
        newBook.append(titlePara)
        newBook.append(authorPara)
        newBook.append(pages)
        newBook.append(icons)



        allCheck = document.querySelectorAll(".check")

        
        bookCards = document.querySelectorAll(".book-card")  




        if(myLibrary[i].read){
            bookCards[i].style.boxShadow = "5px 5px 10px green"
            bookCards[i].style.border = "2px solid green"
            bookCards[i].style.borderRadiud = "2px"

        }


        
    }

    for (let i = 0; i < allCheck.length; i++) {
        allCheck[i].addEventListener("click", function(){
            if (myLibrary[i].read){
                myLibrary[i].read = false
                createBooks()
            }else{
                myLibrary[i].read = true
                createBooks()
            }
            
        })            
    }

    for (let i = 0; i < bookCards.length; i++) {
            allTrash = document.querySelectorAll(".trash")
            allTrash[i].addEventListener("click",function(){

                myLibrary.splice(i)
                createBooks()

        })
       
    }

    

   

}


