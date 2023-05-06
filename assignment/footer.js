$(document).ready(function(){
    var footer = $('<footer>')
        footer.addClass('custom-footer');
        footer.css({
            'font-family': '"Poppins", sans-serif',
            'background-color' : 'aqua',
            'color' : 'black',
            'padding' : '20px',
            'text-align' : 'center'
        });
        footer.html('<p>Copyright &copy; 2023. All rights reserved.</p>');
        $('body').append(footer);
});