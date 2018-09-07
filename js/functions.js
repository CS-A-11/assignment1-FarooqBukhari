function addNavButtons() {
    var buttons = document.getElementsByClassName("dropdown-toggle navLiBtn");
    var length = buttons.length;
    for (var i = 0; i < length; i++)
    {
        id = buttons[i].id;
        console.log(id);
        buttons[i].getElementsByClassName("navLiBtnLogo")[0].style.backgroundImage = `url('UI_UX/navBarButtons/${id}.svg')`;
    }
}

addNavButtons();