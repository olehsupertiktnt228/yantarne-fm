let audio = new Audio();
let trackPlay = false;
$('.btn').click(function () {

    if (trackPlay == false) {
        fetch(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
            .then((response) => {
                return response.json()
            })
            .then(data => {
                $('#icon').removeClass('fa-play').addClass('fa-pause');
                console.log(data);
                audio.src = data.icestats.source.listenurl;
                audio.play();
                $('.listeners').text(data.icestats.source.listeners);
                $('.trackName').text(data.icestats.source.title);
            })
            .catch(err => {
                console.log('Помилка при виконанні запиту:', err);
            });
        trackPlay = true;
    } else {
        audio.pause();
        $('#icon').removeClass('fa-pause').addClass('fa-play');
        trackPlay = false;
    }

})


$('#volume').on("input", function () {
    audio.volume = $(this).val();
    
})


$(document).ready(function () {
   
    $('#btnvolume').on('click', function () {
        if ($('.volumepopup').css('display') === 'none') {
            $('.overlay').fadeIn();  
            $('.volumepopup').fadeIn();   
        } else {
            $('.volumepopup').fadeOut();   
            $('.overlay').fadeOut(); 
        }
    });

});

$(document).ready(function() {
    $('a.scrollLink').click(function(e) {
        e.preventDefault(); 
        var target = $($(this).attr('href')); 

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top 
            }, 1000); 
        }
    });
});


