$("#checkAll").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});

$.ajax({
    type: 'GET',
    url: ('https://www.googleapis.com/storage/v1/b/hail-common/o/annotationdb%2f' +
        hail_version +
        '%2fdatasets.json?alt=media'),
    dataType: 'json',
    success: function (data) {
        for (var name in data) {
            let dataset = data[name]
            if ('annotation_db' in dataset) {
                let versions_string = dataset.versions.map(function (i) {
                    let version = i["version"]
                    if (!version) version = "None"
                    return version
                }).reduce(function (i, j) {
                    return i + "<br>" + j
                })
                let ref_genome_string = dataset.versions.map(function (i) {
                    let rg = i["reference_genome"]
                    if (!rg) rg = "None"
                    return rg
                }).reduce(function (i, j) {
                    return i + "<br>" + j
                })
                let tr = $('<tr/>');
                tr.append("<td><input type='checkbox' class='checkboxadd' value='" + name + "' onClick='updateTextArea()'/>&nbsp;</td>")
                tr.append("<td>" + name + "</td>");
                tr.append("<td>" + dataset.description + "\n<a href='" + dataset.url + "'>link</a></td>");
                tr.append("<td>" + versions_string + "</td>");
                tr.append("<td>" + ref_genome_string + "</td>");
                $('.table1').append(tr);
            }
        }
    }
});


function filterTable() {
    let input = document.getElementById("searchInput")
    let filter = input.value.toUpperCase()
    let table = document.getElementById("table1")
    let tr = table.getElementsByTagName("tr")
    var found = false
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")
        for (var j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true
            }
        }
        if (found) {
            tr[i].style.display = ""
            found = false
        } else if (!tr[i].id.match('^tableHeader')) {
            tr[i].style.display = "none"
        }
    }
}

function copy() {
    let textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy");
}


function updateTextArea() {
    var text = "db = hl.experimental.DB(region='us', cloud='gcp')\nmt = db.annotate_rows_db(mt";
    $('input[type=checkbox]:checked').filter(".checkboxadd").each(function () {
        text += ', "' + $(this).val() + '"';
        $('#result').val(text + ')');
    });
    $('input[type="checkbox"]:not(:checked)').filter(".checkboxadd").each(function () {
        $('#result').val(text + ')');
    });
}

$('input[type=checkbox]').change(function () {
    updateTextArea();
});
