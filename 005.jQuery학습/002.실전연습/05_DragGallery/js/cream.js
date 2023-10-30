$(()=>{
    $('#move').draggable({
        axis:'x'
    }).css({transition:'1s ease-out'})
    const udtw=()=>{return $(window).width()}
    let ww=udtw()
    $(window).resize(()=>{
        ww=udtw()
    })
    if (ww<500) {
        $('#move').css({transition:'.3s ease-out'})
    }
    $('html,body').on('mousedown mouseup mousemove',()=>{
        
        if ($('#move').offset().left>0) {
            $('#move').css({left:0})
        }
        if ($('#move').offset().left<-$('#move').width()+ww) {
            $('#move').css({left:-$('#move').width()+ww})
            // 
        }
    })
})