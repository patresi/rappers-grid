document.addEventListener("DOMContentLoaded", function () {

    function showGrid() {
        $('.grid').show();
    }

    function drawGrid() {
        imagesLoaded($('.grid'), () => {
            showGrid();
            let wall = new Freewall('.grid');
            wall.reset({
                selector: '.rapper-thumb',
                animate: true,
                cellW: 300,
                cellH: 'auto',
                gutterX: 20,
                gutterY: 20,
                keepOrder: true,
                onResize: function () {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();
        });
    }

    Vue.component('rapper-thumbnail', {
        props: ['rapper'],
        template: '<div :id="rapper.name" class="rapper-thumb"><div class="pic-container"><img class="bars" src="images/cell-bars.png-c200" ><img :src="rapper.pic"></div><div class="name-container">{{ rapper.name }}</div></div>'
    })

    var app = new Vue({
        el: '#app',
        data: {
            rappersList
        }
    })

    Vue.nextTick(() => {
        drawGrid();
    })

});

