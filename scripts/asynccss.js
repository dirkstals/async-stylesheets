(function(document){

    var head = document.querySelector('head'),
        noscriptElement = head.querySelector('noscript'),
        temp = document.createElement('div');

    temp.innerHTML = noscriptElement.textContent;

    for(var i = 0; child = temp.children[i]; i++){

        if(child.tagName === 'LINK'){
            head.appendChild(child.cloneNode());
        }
    }

    head.removeChild(noscriptElement);

})(document);