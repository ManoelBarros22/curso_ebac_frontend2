$(document).ready(function() {
    $('form :submit').click(function(e) {
        e.preventDefault();
        var linha = $("input[id='NomeTarefa']").val();
        var li = '<li>'+ linha +'</li>';
        $('#lista').append(li);
        $('#nomeTarefa').each(function(){
            $(this).val('');

        });
    });
    $('form').on('click', 'li',function() {
        $(this).addClass('selected').css('text-decoration', 'line-through');
    });     
});

// final arquivo //