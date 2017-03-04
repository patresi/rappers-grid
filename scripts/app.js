document.addEventListener("DOMContentLoaded", function () {
    function masonryDraw() {
        imagesLoaded(document.querySelector('.grid'), function () {
            console.log('all images are loaded');
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
        template: '<div :id="rapper.name" class="rapper-thumb" ><img :src="rapper.pic"><div class="name-container">{{ rapper.name }}</div></div>'
    })
    var app = new Vue({
        el: '#app',
        data: {
            rappersList: [
                { name: 'Kodak Black', isFree: false, pic: 'https://s-media-cache-ak0.pinimg.com/originals/27/0a/03/270a039f3e086bbb348a6271b9906148.jpg' },
                { name: 'Young Thug', isFree: true, pic: 'http://blameebro.com/wp-content/uploads/2016/09/Young-Thug_04-04-2016.jpg' },
                { name: 'Gucci Mane', isFree: true, pic: 'http://thehollywoodunlocked.com/wp-content/uploads/2016/05/1540776442.jpg' },
                { name: 'Kanye West', isFree: true, pic: 'https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxNDc4MTg5NTgx/kanye-west-362922-1-402.jpg' },
                { name: 'Migos', isFree: true, pic: 'http://static.stereogum.com/uploads/2015/06/Migos-640x347.jpg' },
                { name: 'XXXTENTACION', isFree: true, pic: 'https://pbs.twimg.com/media/C4Bg0LmWIAEGXhT.jpg' },
                { name: 'Chief Keef', isFree: true, pic: 'http://www.billboard.com/files/styles/article_main_image/public/media/chief-keef-650-430-a.jpg' },
                { name: 'Drake', isFree: true, pic: 'http://www.rap-up.com/app/uploads/2015/10/drake-art.jpg' },
                { name: 'Kendrick Lamar', isFree: true, pic: 'http://ontheblacklist.net/wp-content/uploads/2016/08/kendrick-lamar-featuring-lady-gaga-partynauseous.jpg' }
            ]
        }
    })
    Vue.nextTick(function () {
        masonryDraw();
    })
});

