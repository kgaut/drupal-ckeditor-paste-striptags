CKEDITOR.on('instanceReady', function(ev) {
    ev.editor.on('paste', function(evt) {
        evt.data.dataValue = evt.data.dataValue.replace(/<(?!br\s*\/?)[^>]+>/ig, '');
    }, null, null, 9);
});