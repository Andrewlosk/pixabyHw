const list = document.getElementById('imgList')
const btnLoadMore = document.getElementById('loadMore')




let pageCount = localStorage.getItem("count") || 1




const renderImg = () => {
    for(let i = 1; i < pageCount; i++){
        const params = new URLSearchParams({
            key: '47507076-e27ffc369c5aca667f9ef4311',
            // q: "Editor's+Choice",
            page: i,
            per_page: 10,
        
        })
    
        fetch(`https://pixabay.com/api/?${params.toString()}`)
        .then(res => res.json())
        .then((images) => {
            console.log(images);
            const markup = images.hits.map((img) => {
                console.log(img);
                return `<img width="400" height="345" src="${img.largeImageURL}">`
                
            })
            list.innerHTML += markup.join('')
            
        })
    }



}



renderImg()


console.log(pageCount);



btnLoadMore.addEventListener('click', () => {
    pageCount++
    localStorage.setItem('count', pageCount)
    
    renderImg()
    
})