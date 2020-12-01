$(document).ready(function () {
    //$('#fileupload').fileupload({
    //    dataType: 'json',
    //    dropZone: $('#dropzone'),
    //    add: function (e, data) {
    //        var table = $('#fileTable');
    //        table.show();
    //        var tpl = $('<tr class="file">' +
    //            '<td class="fname"></td>' +
    //            '<td class="fsize"></td>' +
    //            '<td class="fact">' +
    //            '<a href="#" class="button rmvBtn"><i class="icon-cancel-2"></i> Cancel</a>' +
    //            '<a href="#" class="button uplBtn"><i class="icon-play-2"></i> Start</a>' +
    //            '</td></tr>');
    //        tpl.find('.fname').text(data.files[0].name);
    //        tpl.find('.fsize').text(data.files[0].size);
    //        data.context = tpl.appendTo('#fileList');

    //        $('#start').click(function () {
    //            //fix this?
    //            data.submit();
    //        });
    //        $('#cancel').click(function () {
    //            data.submit().abort();
    //            tpl.fadeOut(function () {
    //                tpl.remove();
    //            });
    //            table.hide();
    //        });

    //        tpl.find('.rmvBtn').click(function () {
    //            if (tpl.hasClass('file')) {
    //                data.submit().abort();
    //            }
    //            tpl.fadeOut(function () {
    //                tpl.remove();
    //            });
    //        });
    //        tpl.find('.uplBtn').click(function () {
    //            if (tpl.hasClass('file')) {
    //                data.submit();
    //            }
    //            $(this).replaceWith('<p>done</p>');
    //            tpl.find('.rmvBtn').hide();
    //        });
    //        //var jqXHR = data.submit();
    //        //return false;
    //    },
    //    done: function (e, data) {
    //        $('#result').val('Upload finished.');
    //    },
    //    error: function (jqXHR, textStatus, errorThrown) {
    //        if (errorThrown === 'abort') {
    //            $('#result').val('File Upload has been canceled.');
    //        }
    //    }
    //});
    $('form button.add').click(function(e) {
    e.preventDefault();
    var $input = $('<input id="files" multiple="multiple" name="files" type="file" value="">');
    $input.on('change', function(evt) {
        var f = evt.target.files[0];
        $('form').append($(this));
        $('ul.list').append('<li class="item">'+f.name+'('+f.size+')</li>');
    });
    $input.show();
    $input.trigger('click');
});
})