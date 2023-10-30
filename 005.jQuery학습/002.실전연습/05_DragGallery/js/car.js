$(()=>{
    for (let i = 0; i < 50; i++) {
        $('.cbx').append(`<img src="./360view/country${i+1}.jpg" alt="car">`)
    }
    $('.cbx').find('img').hide().first().show()
})