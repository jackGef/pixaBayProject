class Card{
    constructor(img,tags,downloads,views){
        this.img=img,
        this.tags=tags,
        this.downloads=downloads,
        this.views=views
    }

    render(){
        let divCard = document.createElement("div");
        divCard.className="w-[30%] my-[60px] "
        divCard.innerHTML=`
        <div class="w-[500px] m-auto text-[18px] rounded-[10px] ">
        <img class="w-[500px] h-[500px] rounded-[10px] border-black border-[1px]" src="${this.img}">
        <p class="mt-[10px]">${this.tags}</p>
        <p><span class="font-semibold"><ins>Downloads</ins></span>: ${this.downloads}</p>
        <p><span class="font-semibold"><ins>Views</ins></span> ${this.views}</p>
        <button class="px-[7px] py-[10px] rounded-[10px] border-black border-[1px] bg-blue-700 mt-[7px]">Download image</button>
        </div>`

        return divCard
    }
}


