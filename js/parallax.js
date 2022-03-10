const quotelist = [
    "Don’t sleep with my wife",
    "My mother didn’t enjoy it",
    "Hotdogs aren’t sandwiches",
    "I can’t with your snores",
    "I’m taking your dog",
    "Who names their kid \"Doug\", lol",
    "The only time you won is conception",
    "I’m stopping your receding hairline",
    "Crip 4 life",
    "Your eyebrows look like Will Ferrell and Jack Black had a baby",
    "You bring joy whenever you leave",
    "You have so many gaps in your teeth your tongue looks like it’s in jail",
    "Your farts make up 30% of climate change", 
    "Gandhi would have slapped you",
    "cars 2 is a cinematic masterpiece"
]

$(document).ready(() => {
    // when the document is ready 
    const comicbody = document.getElementById('comicbody')
    const containerlist = document.getElementsByClassName('frame');
    const finaltext = document.getElementById('finaltext');
    const finaltext2 = document.getElementById('finaltext2');

    // for changing the text at the end
    const textindex = Math.floor(Math.random()*quotelist.length);
    finaltext.innerHTML=quotelist[textindex]
    const textindex2 = Math.floor(Math.random()*quotelist.length);
    finaltext2.innerHTML=quotelist[textindex2]

    const changebutton = document.getElementById('changebutton')
    const changebutton2 = document.getElementById('changebutton2')
    // parallax effect for each container
    const ParallaxWrapper = (containers) => {
        for (const container of containers) {
            const imageframes = container.getElementsByClassName('frameimg');
            const topval = container.getBoundingClientRect().top
            // for each image in the container, give parallax scrolling effect
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
    changebutton.addEventListener('click',()=>{finaltext.innerHTML=quotelist[Math.floor(Math.random()*quotelist.length)]})
    changebutton2.addEventListener('click',()=>{finaltext2.innerHTML=quotelist[Math.floor(Math.random()*quotelist.length)]})
    // prevent wheel scroll
    comicbody.addEventListener('wheel',(e)=>{e.preventDefault(); e.stopPropagation();})

    // parallax effect on scroll, but scroll will be done by js
    document.addEventListener('scroll', () => {
        ParallaxWrapper(containerlist);
    });
    ParallaxWrapper(containerlist);

    // buttons for scroll
    const upbuttons = [];
    const downbuttons = [];
    for(const container of containerlist){
        upbuttons.push(container.getElementsByClassName('upbutton')[0])
        downbuttons.push(container.getElementsByClassName('downbutton')[0])
    }
    // calculate scroll
    for(let i=0; i<upbuttons.length; i++){
        upbuttons[i]?.addEventListener('click',()=>{
            $('html, body').animate({
                scrollTop: window.innerHeight*(i-1)
            }, 2000);
        })
    }
    // scroll
    for(let i=0; i<downbuttons.length; i++){
        downbuttons[i]?.addEventListener('click',()=>{
            $('html, body').animate({
                scrollTop: window.innerHeight*(i+1)
            }, 2000);
        })
    }

});



