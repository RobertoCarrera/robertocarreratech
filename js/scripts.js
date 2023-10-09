var container = document.querySelector('.projects_container');
var scrollAmount = 0;

function step(){

    scrollAmount += 0.5;
    container.scrollLeft = scrollAmount;

    if(scrollAmount < container.scrollWidth - container.clientWidth){

        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);

window.addEventListener('wheel', function(e){

    var container = document.querySelector('.projects_container');
    if(e.target === container){

        e.preventDefault();
        container.scrollLeft += e.deltaY;
    }
});