$(() => {
    window.addEventListener('message', function(event) {
        const data = event.data;

        if (data.action == 'show') {
            $('body').fadeIn('slow')
            $.post('https://mt_printers/setUIFocus')
            $('#image').prop('src', data.image_url)
        } else {
            $('body').fadeOut('slow')
            $.post('https://mt_printers/unsetUIFocus')
        }
    })

    document.onkeyup = function(event) {
        const charCode = event.key;
        if (charCode == "Escape") {
            $('body').fadeOut('slow')
            $.post('https://mt_printers/unsetUIFocus')
        }
    }
})