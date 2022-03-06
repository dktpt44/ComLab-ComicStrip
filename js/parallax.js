$(document).ready(() => {
    // when the document is ready 

    const containerlist = document.getElementsByClassName('frame');

    const ParallaxWrapper = (containers) => {
        for (const container of containers) {
            const imageframes = container.getElementsByClassName('frameimg');
            const topval = container.getBoundingClientRect().top
            for (const imageframe of imageframes) {
                const image = imageframe.getElementsByClassName('frameimgcontent')[0];
                const modifier = image.dataset.modifier || 1;
                image.style.transform = `translate3d(0px,${-1 * topval * modifier}px,0px)`
                imageframe.style.top = image?.dataset?.top;
                imageframe.style.left = image?.dataset?.left;
                imageframe.style.bottom = image?.dataset?.bottom;
                imageframe.style.right = image?.dataset?.right;
            }
        }
    }

    document.addEventListener('scroll', () => {
        ParallaxWrapper(containerlist);
    });




    // }document.ready
});



