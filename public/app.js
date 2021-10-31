// Variables
const $modal = $('.modal')
const $close = $('.close')
const $patterns = $('.pattern')
const $filter = $('.filter')
const $dropdown = $('.dropdown-content')
const $search = $('#search')
const $searchInput = $('input[type="search"]')
const $titles = $('.title')

// Modal Functionality
$('.open-modal').click((e) => {
    $(e.target).parent().next().toggleClass('hide');
})

$('.close').click((e) => {
    $(e.target).closest('.overlay').toggleClass('hide');
})

$(document).click((e) => {
    if ($(e.target).hasClass('overlay')) {
        $(e.target).toggleClass('hide');
    }
})

// Filter Functionality
$($filter).click(() => {
    $dropdown.toggleClass('hide');
})

// Links
const $chunkyA = $('#chunky-a')
const $sweaterA = $('#sweater-a')
const $beginnerA = $('#beg-a')
const $reset = $('#reset-a')

$beginnerA.click(() => {
    for (pattern of $patterns ) {
        if (pattern.classList.contains('beginner')) {
            pattern.classList.remove('hide');
        }
        else {
            pattern.classList.add('hide');
        }
    }
})

$chunkyA.click(() => {
    for (pattern of $patterns ) {
        if (pattern.classList.contains('chunky')) {
            pattern.classList.remove('hide');
        }
        else {
            pattern.classList.add('hide');
        }
    }
})

$sweaterA.click(() => {
    for (pattern of $patterns ) {
        if (pattern.classList.contains('sweater')) {
            pattern.classList.remove('hide');
        }
        else {
            pattern.classList.add('hide');
        }
    }
})

$reset.click(() => {
    for (pattern of $patterns) {
        pattern.classList.remove('hide');
    }
})

// Search functionality
$search.click(() => {
    $searchInput.toggleClass('hide');
})

$searchInput.keyup(() => {
    const searchValue = $searchInput.val().toLowerCase()
    for (title of $titles) {
        if (title.textContent.toLowerCase().includes(searchValue)) {
            title.parentElement.classList.remove('hide')
        }
        else {
            title.parentElement.classList.add('hide')
        }
    }

})