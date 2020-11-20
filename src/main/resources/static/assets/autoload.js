try {
    $("<link>").attr({href: "static/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: 'static/assets/waifu-tips.min.js?v=1.4.2',dataType:"script", cache: true, async: false});
    $.ajax({url: 'static/assets/live2d.min.js?v=1.0.5',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 5;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
    live2d_settings['waifuEdgeSide'] = 'right:18';     // 看板娘贴边方向
    live2d_settings['waifuToolFont'] = '20px';         // 工具栏字体
    live2d_settings['waifuToolLine'] = '30px';         // 工具栏行高
    /* 在 initModel 前添加 */
    initModel('static/assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
