////////////////////////////////////////////////////
//
// File: bindings.js
// Author: Sean Patrick Franklin
// (C) 2020. All Rights Reserved (will open source)
//
///////////////////////////////////////////////////
(() => {
window.onload = () => {
    let str = ``;
    for(const element of document.body.children){
        if ( element.tagName === "SCRIPT" || !element.id){
            continue;
        }
        const elementObj = `window.${element.id}`;
        str += `${elementObj} = document.getElementById("${element.id}");`;

        switch(element.tagName){
            case "BUTTON":
                str += `${elementObj}.onclick = function(){
                    if ( ${elementObj}Clicked ){
                        ${elementObj}Clicked();
                    }
                }`;
                break;
        }
    }
    eval(str);
    if (window.app){
        app();
    }
};
})();