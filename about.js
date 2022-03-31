    var $wp = $("#wp");
    var $i = 0;
    var $body = $('#body');
    $wp.click(function(){
        $i++;
        console.log($i);
        $body.append(`<div class="mess${$i}">` + `<div class='ph${$i}'></div>` + `<h2 id="bhd">Bohdan</h2>` + `<i class="far fa-star" id="hs${$i}"></i>` + `<h3>5 ч. назад</h3>` + `<h4 id="text${$i}">HAHAHHHAAHHAH 2 text if you see that you are admin logistic?</h4>` + `</div>`);
    });
    var $search = $('#ss');
    var $mess = $("#mess");
    $mess.contextmenu(function(){
        $('#mess').css('background', '#000');
        $('#input').css('display', 'none');
        setTimeout(function(){
            $('#mess').css('background', '#fff');
        }, 5000);
    })
    var $hs = $("#hs");
    $hs.click(function(){
        $hs.removeClass('far fa-star').addClass('fas fa-star');
    });
    $search.click(function(){
        var $input = $('#input');
        $input.addClass('anim');
        setTimeout(function(){
            $('#input').css('width', '600px');
        },300);
    });