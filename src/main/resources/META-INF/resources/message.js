var source = new EventSource("/topics/stream");
            source.onmessage = function (event) {
                var a = 0;
            var list = '';
            (coffee || []).forEach(function (coffee) {
                list = list
                    + '<tr>'
                    + '<td>' + a+1
                    + '<td>' + coffee.message + '</td>'
                    + '</tr>'
            });
            if (list.length > 0) {
                list = ''
                    + '<table class="table table-striped table-dark"><thead><tr><th>#</th><th scope="col">Event Message</th></tr></thead>'
                    + list
                    + '</table>';
            } else {
                list = "No coffee in database"
            }
            $('#all-coffee').html(list);
            }

function refresh() {
    $.get('/coffee', function (coffee) {
        var a = 0;
        var list = '';
        (coffee || []).forEach(function (coffee) {
            list = list
                + '<tr>'
                + '<td>' + a+1
                + '<td>' + coffee.message + '</td>'
                + '</tr>'
        });
        if (list.length > 0) {
            list = ''
                + '<table class="table table-striped table-dark"><thead><tr><th>#</th><th scope="col">Event Message</th></tr></thead>'
                + list
                + '</table>';
        } else {
            list = "No coffee in database"
        }
        $('#all-coffee').html(list);
    });
}


