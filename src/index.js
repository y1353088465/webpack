import _ from 'lodash'
import "./style.css"
import MissYang from "./img/text_MissYang.jpg"
import changeBodyBg from "./common.js"

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello啊', 'webpack啊'], ' ');
    element.classList.add('hello');

    element.onclick = changeBodyBg;
    // 图像添加。
    var myIcon = new Image();
    myIcon.src = MissYang;

    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());