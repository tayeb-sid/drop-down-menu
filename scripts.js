const dropGrids = document.querySelectorAll(".dropdown-grid");


addEventListener("click",(e)=>{
    
    const isDropDownGrid = e.target.matches(".dropdown-grid")
    
    if(isDropDownGrid) return 

    if(e.target.closest(".dropdown-item")){
        e.target.children[0].classList.toggle("active")
        current = e.target.children[0]

        dropGrids.forEach(dropGrid =>{
            if(dropGrid == current) return
            dropGrid.classList.remove("active")
        })    
    
    }
    else dropGrids.forEach(dropGrid =>{
        dropGrid.classList.remove("active")
    }) 

    
    // else dropGrid.classList.remove("active")
    // document.querySelectorAll(".dropdown-grid.active").forEach(dropdown =>{
    //     if(dropdown == current)return
    //     dropdown.classList.remove("active")
    // })

})