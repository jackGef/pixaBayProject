function init(){
    buttonCreator();
    inputListen();
}


function buttonCreator(){

    const photoSearchTerms = [
        "sunset","mountains","beach","forest","cityscape","waterfall","flowers","animals","birds","night sky","architecture","food","people","portraits","landscape","seascape","desert","rainforest","snow","autumn","spring","summer","winter","sports","concert","abstract","macro","black and white","vintage","aerial","underwater","nature","street","travel", "adventure", "wildlife", "dogs","cats","vehicles","boats","planes","fashion","family","couples","weddings","architecture","details","sunrise","urban","rural"
    ];

    let btnDiv = document.getElementById("btnDiv");
    
    for (let i = 0; i < photoSearchTerms.length; i++) {
        let btnCreate = document.createElement("button");
        btnCreate.innerHTML=`${photoSearchTerms[i]}`
        btnCreate.className="py-[7px] border-black border-[2px] rounded-[5px] w-[9%] m-2"

        btnCreate.addEventListener("click", function() {
            searchPhotos(photoSearchTerms[i])
        });

        btnDiv.append(btnCreate);
    }
}

function inputListen(){
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click",function(){
        searchPhotos(searchInput.value)
    })
}

const apiKey = '44413631-5764c60e09d3a42b0960f5841';

function searchPhotos(searchTerm) {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`)
        .then((response) => response.json())
        .then((data) => {
            displayResults(data.hits);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function displayResults(results) {
    const resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = '';

    results.forEach((result) => {
        // Create and render the card (implementation not provided)
        const card = new Card(result.webformatURL, result.tags, result.downloads, result.views);
        resultDiv.append(card.render());
    });
}

init()