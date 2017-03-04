document.addEventListener("DOMContentLoaded", function () {
    function drawGrid() {
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
        template: '<div :id="rapper.name" class="rapper-thumb"><div class="pic-container"><img class="bars" src="http://rs891.pbsrc.com/albums/ac118/69design/qa%20pics/Jail-Cell-Bars-psd52403.png~c200" ><img :src="rapper.pic"></div><div class="name-container">{{ rapper.name }}</div></div>'
    })
    var app = new Vue({
        el: '#app',
        data: {
            rappersList: [
                {
                    "name": "Chief Keef",
                    "isFree": true,
                    "pic": "http://www.billboard.com/files/styles/article_main_image/public/media/chief-keef-650-430-a.jpg"
                },
                {
                    "name": "Drake",
                    "isFree": true,
                    "pic": "http://www.rap-up.com/app/uploads/2015/10/drake-art.jpg"
                },
                {
                    "name": "Gucci Mane",
                    "isFree": true,
                    "pic": "http://www.rap-up.com/app/uploads/2016/07/gucci-ice-cream.jpg"
                },
                {
                    "name": "Kanye West",
                    "isFree": true,
                    "pic": "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxNDc4MTg5NTgx/kanye-west-362922-1-402.jpg"
                },
                {
                    "name": "Kendrick Lamar",
                    "isFree": true,
                    "pic": "http://cache.umusic.com/_sites/kendricklamar.com/images/og.jpg"
                },
                {
                    "name": "Kevin Gates",
                    "isFree": false,
                    "pic": "https://s-media-cache-ak0.pinimg.com/originals/1c/b2/7d/1cb27dd7e734b2403f704870f3e12a0f.png"
                },
                {
                    "name": "Kodak Black",
                    "isFree": false,
                    "pic": "https://s-media-cache-ak0.pinimg.com/originals/27/0a/03/270a039f3e086bbb348a6271b9906148.jpg"
                },
                {
                    "name": "Migos",
                    "isFree": true,
                    "pic": "http://static.stereogum.com/uploads/2015/06/Migos-640x347.jpg"
                },
                {
                    "name": "Playboi Carti",
                    "isFree": true,
                    "pic": "https://ifudontknowblog.files.wordpress.com/2017/01/cartiiiiii.jpg"
                },
                {
                    "name": "XXXTENTACION",
                    "isFree": true,
                    "pic": "https://i1.sndcdn.com/avatars-000283540284-d1h3wr-t500x500.jpg"
                },
                {
                    "name": "Young Thug",
                    "isFree": true,
                    "pic": "http://blameebro.com/wp-content/uploads/2016/09/Young-Thug_04-04-2016.jpg"
                }
            ]
        }
    })
    Vue.nextTick(function () {
        drawGrid();
    })
});

