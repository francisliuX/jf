// JavaScript Document
$(document).ready(function($){
	$("._show_info").live('click', function(){
        art.dialog.open($(this).attr('toSet'),{
            id: $(this).attr('id'),
            title : $(this).attr('title'),
            width: '920px',
            height: '350px',
            fixed: true,
            lock: true,
            background: '#000',
            opacity: 0.7,
            beforeunload: function () {
                location.reload();
            }
        },false);
        return false;
    });
});