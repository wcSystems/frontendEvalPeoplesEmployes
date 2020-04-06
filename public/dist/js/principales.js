

function AbrirModal(id, titulo, contenido, footer) {
    $('.modal-title').html(titulo);
    $('.modal-body').html(contenido);
    var button = '';
    if (footer == 1) {
        var button = '<button type="button" class="btn btn-success btn-flat" data-dismiss="modal">Cerrar</button>';
    } else if (footer == 2) {
        var button = '\
                <button type="button" id=close class="btn btn-success btn-flat pull-left  " data-dismiss="modal">Cerrar</button>\
                <button type="button" id=gadd class="btn btn-success btn-flat ">Si</button>';
    }
    $('.modal-footer').html(button);
    $('#' + id).modal('show');
}

function getVarsUrl() {
    var url = location.search.replace("?", "");
    var arrUrl = url.split("&");
    var urlObj = {};
    for (var i = 0; i < arrUrl.length; i++) {
        var x = arrUrl[i].split("=");
        urlObj[x[0]] = x[1]
    }
    return urlObj;
}

var $modalAnimateTime = 300;
var $msgAnimateTime = 150;
var $msgShowTime = 2000;
var $msgShowTime = 2000;


function InicioS() {

    $("#inicio").submit(function () {
        $.post('../.conex/session.php?action=' + 1, $('#inicio').serialize(), function (data) {
            if (data == true) {
                window.location = 'index.php'
            } else {
                msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Error en Ficha ó Contraseña");
            }
        });
        return false;
    });

}

function msgFade($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function () {
        $(this).text($msgText).fadeIn($msgAnimateTime);
    });
}


function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
    var $msgOld = $divTag.text();
    msgFade($textTag, $msgText);
    $divTag.addClass($divClass);
    $iconTag.removeClass("glyphicon-chevron-right");
    $iconTag.addClass($iconClass + " " + $divClass);
    setTimeout(function () {
        msgFade($textTag, $msgOld);
        $divTag.removeClass($divClass);
        $iconTag.addClass("glyphicon-chevron-right");
        $iconTag.removeClass($iconClass + " " + $divClass);
    }, $msgShowTime);
}

function CerrarS() {
    $.post('../.conex/session.php?action=' + 2, function (data) {
        if (data == true) {
            window.location = 'login.php'
        }
    });
}

function Descarga(ruta,nombre) {
    window.open('../solicitud/descarga.php?arc=' + ruta +'&nombre='+nombre);
}


function Menu() {
    $.post('../.conex/session.php?action=' + 4, function (data) {
        $("#menuc").html(data)
    });
}


$(function () {
    Menu()
});
