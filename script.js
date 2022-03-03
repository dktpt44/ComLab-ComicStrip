var rellax = new Rellax('.rellax');

const container = document.getElementById('pcont')
const imgelem = document.getElementById('pimg')
const imgelem2 = document.getElementById('pimg2')

const containerlist = document.getElementsByClassName('frame');

const ParallaxWrapper = (containers) =>{
    for(const container of containers){
        const imagelist = container.getElementsByClassName('frameimgcontent');
        for(const image of imagelist){
            const modifier = image.dataset.modifier||1;
            customParallax(container, image, modifier)
        }
    }
}


const customParallax = (parentelem, child, modifier)=>{
    let topval = parentelem.getBoundingClientRect().top
    child.style.transform= `translate3d(0px,${-1*topval*modifier}px,0px)`
}

document.addEventListener('scroll',()=>{
    ParallaxWrapper(containerlist);
})
