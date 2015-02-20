<meta name="viewport" content="width=800px" http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
 <script>
/*Hides all in list*/
$(document).ready(function () {
    $('.results > li').hide();
//
    $('div.tags').find('input:checkbox').live('click', function () {
        $('.results > li').hide();
        $('div.tags').find('input:checked').each(function () {
            $('.results > li.' + $(this).attr('rel')).show();
        });
    });
});  
 </script>