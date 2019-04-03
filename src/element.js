// 虚拟dom对象
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

// 创建虚拟dom 返回虚拟节点
function createElement(type, props, children) {
    return new Element(type,props,children);
}

// render 方法将虚拟dom 转化成真实Dom
function render(domObj) {
    let el = document.createElement(domObj.type);

    for(let key in domObj.props) {
        setAttr(el, key, domObj.props[key]);
    }

    domObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child)
    })

    return el;
}

// 设置属性
function setAttr(node, key, value) {
    switch(key) {
        case 'value':
            if(node.tagName.toLowerCase() === 'input' || node.tageName === 'textarea'){
                node.value = value
            } else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

// 元素插入到页面内
function renderDom(el, target){
    target.appendChild(el);
}



export {
    Element,
    createElement,
    render,
    setAttr,
    renderDom
}
