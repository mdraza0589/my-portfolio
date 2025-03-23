var tablinks = document.querySelectorAll('.tab-links');
let tabcontent = document.querySelectorAll('.tab-content');

function opentab(event, tabname) {
    for (let tabclick of tablinks) {
        tabclick.classList.remove('active-link');
    }
    for (let tabItem of tabcontent) {
        tabItem.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');

    const targetElement = document.getElementById(tabname);
    if (!targetElement) {
        console.error(`Element with id "${tabname}" not found.`);
        return;
    }
    targetElement.classList.add('active-tab');
}




// ***************** Download Resume************



function clickBtn() {
    let comfirmed = confirm('do you want to open resume');
    if (comfirmed) {
        // window.location = ""
        alert('sorry it is not awailable now')
    }
    else {
        return
    }
}



// **************** menu close and open ***********

let sideMenu = document.getElementById('sidemenu')

function closemenu() {
    sideMenu.style.width = "0px"
}
function openmenu() {
    sideMenu.style.width = "200px"
}
