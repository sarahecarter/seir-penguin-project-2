const $modal = $('.modal')
const $close = $('.close')

$('.open-modal').click((e) => {
    $(e.target).parent().next().toggleClass('hide');
})

$('.close').click((e) => {
    $(e.target).closest('.overlay').toggleClass('hide');
})