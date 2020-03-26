// TBiff js
// Template Bindings Framework
// File: bindings.js
// License: GNU GPL v3
// https://github.com/SeanCPP/TBiff.js

/**This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
**/
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
                };`;
                break;
        }
    }
    eval(str);
    if (window.app){
        app();
    }
};
})();
