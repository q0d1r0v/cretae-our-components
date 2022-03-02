/* eslint-disable prettier/prettier */
function changeButtonStyle() {
    alert("jhj")
    let danger_btns = document.getElementById("id1");
    let success_btns = document.getElementsByClassName("id2");

    danger_btns.style.backgroundColor = "red";

    success_btns.style.backgroundColor = "rgb(80, 255, 80)";

    danger_btns.forEach((btn) => {
        btn.style.backgroundColor = "red";
        btn.style.color = "#FFF";
        btn.style.border = "none";
        btn.style.padding = "8px 15px";
        btn.style.cursor = "pointer";
        btn.style.borderRadius = "8px";
        btn.style.webkitUserSelect = "none";
    });

    success_btns.forEach((btn) => {
        btn.style.backgroundColor = "rgb(80, 255, 80)";
        btn.style.color = "#FFF";
        btn.style.border = "none";
        btn.style.padding = "8px 15px";
        btn.style.cursor = "pointer";
        btn.style.borderRadius = "8px";
        btn.style.webkitUserSelect = "none";
    });
}

module.exports.changeButtonStyle = changeButtonStyle
