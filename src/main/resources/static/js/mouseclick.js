/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤入目无别人 四下皆是你❤","❤邂逅你，是生生世世的宿命❤", "❤执子之手,与之偕老❤"
            ,"❤我淋雨爱你,你却撑伞爱别人❤","❤我对你何止是执迷不悟❤","❤路遥马急的人间,我在你的心里能待多久❤",
            "❤时间有一万种心动 你独占九千七❤","❤南风未起 念你成疾 药石无医❤","❤过往已成相思疾 浅笑回眸难回首❤","❤世界微尘里 吾宁爱你憎❤",
            "❤愿有岁月可回首 且以深情共白头❤","❤世人皆知山龄喜 无人知晓卢氏悲❤");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});