// Variables
const $modal = $('.modal')
const $close = $('.close')
const $patterns = $('.pattern')
const $filter = $('.filter')
const $dropdown = $('.dropdown-content')

// Modal Functionality
$('.open-modal').click((e) => {
    $(e.target).parent().next().toggleClass('hide');
})

$('.close').click((e) => {
    $(e.target).closest('.overlay').toggleClass('hide');
})

// Filter Functionality
$($filter).click(() => {
    $dropdown.toggleClass('hide');
})

// Filters
const $chunky = $('.chunky')
const $sweater = $('.sweater')
const $beginner = $('.beginner')

// Links
const $chunkyA = $('#chunky-a')
const $sweaterA = $('#sweater-a')
const $beginnerA = $('#beg-a')

// $beginnerA.click(() => {
//     for (pattern of $patterns) {
//         if (pattern.hasClass('beginner')) {
//             pattern.toggleClass('hide');
//         }
//         else {
//             pattern.toggleClass('hide');
//         }
//     }
// })