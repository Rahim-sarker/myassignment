

const searchText = () => {

 const searchText = document.getElementById('searchText').value;
 loadBooks(searchText);
 document.getElementById('searchText').value = '';
}



const loadBooks = searchText => {
   
    const url = `http://openlibrary.org/search.json?q= ${searchText}`
     fetch(url)
      .then(res => res.json())
      .then(data =>displayBooks(data.docs))
}  

const displayBooks = books =>{

    const bookShow = document.getElementById('showBooksId');
    bookShow.textContent ='';

if(books.length === 0){
   alert("Result is not found!")
}else{
    const totalresult = document.getElementById('totalResult');
    totalresult.textContent ='';

 books.forEach(book =>{
   //  console.log(book)
 const div = document.createElement('div')
 div.classList.add('col')
 div.innerHTML = `
 
 <div class="card h-100">
          <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Book: ${book.title}</h4>
            <h5 class="card-title">  Author:${book.author_name}</h5>

            <p class="card-text">First Published: ${book.first_publish_year}</p>
          </div>
        </div>
 `
 bookShow.appendChild(div)

 });

  const p = document.createElement('p');
 p.innerText ='Total Books found: '+ books.length;
 totalresult.appendChild(p)
}

}
