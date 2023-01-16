let openVan = (evt, vanId) => {
    //declare vars
    let i, tabBtns, tabContent;

    //get all tab content and hide

    tabContent = document.getElementsByClassName("tcontent");
    for(i = 0; i < tabContent.length;i++) {
        tabContent[i].style.display = "none";
    }

    //get all tab buttons and make the current active

    tabBtns = document.getElementsByClassName("tb-btn");
    for(i = 0;i < tabBtns.length;i++) {
        tabBtns[i].className = tabBtns[i].className.replace("active", "");
    }

    //show tab content with button with class active

    document.getElementById(vanId).style.display = "grid";
    evt.currentTarget += "active";
}

//document onload, open tab contents with button with id open
document.getElementById("open").click();


//for sidepanel 

//open the sidepanel by setting the width to 25pc

let openNav = () => {
    document.getElementById("sidePanel").style.width = "15pc";
}


//close the panel by changing width to 0

let closeNav = () => {
    document.getElementById("sidePanel").style.width = "0";
}



