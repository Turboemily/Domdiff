import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createElement, renderDom,render} from "./element";
import diff from './diff'
import patch from './patch'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


let virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['孙俪']),
    createElement('li', {class: 'item'}, ['孙俪']),
    createElement('li', {class: 'item'}, ['孙俪'])
])

let el = render(virtualDom)

console.log(el)

renderDom(el, document.getElementById('root'))

console.log(virtualDom)

let virtualDom2 = createElement('ul', {class: 'list-groups'},[
    createElement('li', {class: 'actives'},['那年花开']),
    createElement('li',{class: 'item'},['甜蜜蜜']),
    createElement('li',{class:'item'},['卖房子的女人'])
])

let patches = diff(virtualDom,virtualDom2)

console.log(patches)
patch(el, patches)
