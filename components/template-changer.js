document.addEventListener('DOMContentLoaded', (event) => {
    let templateSrc = document.querySelector('#template-src-group1');

    let linksSrc = document.querySelector('#links-src-group1');
    
    linksSrc.addEventListener('click', (event) => {
        if(event.target === event.currentTarget) return null;

        let src = event.target.parentElement.attributes['data-template'].value;

        console.log(src);

        // let maskEl = document.querySelector('#mask');

        // maskEl.emit('fade');

        setTimeout(() => {
            templateSrc.setAttribute('template', `src: scenes/${src}`);
            linksSrc.setAttribute('template', `src: scenes/links/${src}`);
            // maskEl.emit('fadeback');
        }, 200);

        event.stopPropagation();
    });
});
