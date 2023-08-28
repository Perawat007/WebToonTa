var C_GLOBAL_WEB_ROOT = window.location.protocol + "//" + window.location.hostname + "/";
var page1 = 1;
var browserFF = (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1);
var url = window.location;
var timeleft;
var downloadTimer;
var withCountReqTac = 1;
var timeleft2;
var downloadTimer2;
var withCountReqTac2 = 1;
var timeleft3;
var downloadTimer3;
var withCountReqTac3 = 1;
var c_timeleft;
var c_downloadTimer;
var c_countReqTac = 1;
var timeCounterTac = 120;
var cat_type = "online";
var from_noti = false;
var from_noti_id = "";
var popWindow;
var pgName = "";
var providerId = "",
    gid = "";
var WEB_ASSET_WEB = url.protocol + "//" + url.host + "/asset_web/img/";
var WEB_ASSET_GAME = url.protocol + "//" + url.host + "/web/";
var announcePop = false,
    announcementPopOutData, statusShowAnn = false,
    clicking = false;
var isLogin = 0;
var userCurrency = "";
var popUpCount = 0,
    inUserDashboard = false,
    checkinDaily = false;
var totalAnnPage = 0,
    countAnnPage = 1,
    clickAnn = false;
var ptProvId = 120,
    ptProvId2 = 123;
const dateTimeNow = new Date();
var getBalTimerCountStarted = false;
var promotionPop = '';
var currentUrl = window.location.href;
var diffDomainUrl = new URL(currentUrl);
var promotionPop = diffDomainUrl.searchParams.get("promotion_id");
var isMobile = false;
let userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
var aff = getUrlParameter('aff') || "";
var ref = getUrlParameter('ref') || "";
if (aff !== '') {
    $.cookie("aff", aff, {
        expires: 365,
        path: '/'
    });
} else if (ref !== '') {
    $.cookie("aff", ref, {
        expires: 365,
        path: '/'
    });
}
new WOW().init();
loadResponsiveMenu();
var mobileOs = getMobileOperatingSystem();
var android = false;
if (mobileOs == 'android') {
    android = true;
}
if (android) {
    if (!userAgent.includes("wv") || userAgent.includes("VivoBrowser")) {
        $('.app-download').removeClass('hide');
        if (sessionStorage.getItem('app')) {
            $('.m-dev.app-download').remove();
        }
    }
}
$(document).ready(async function () {
    if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {
        if (sessionStorage.getItem("baloa")) {
            console.log('remove baloa')
            sessionStorage.removeItem("balo");
            sessionStorage.removeItem("baloa");
        }
        for (const [key, value] of Object.entries(sessionStorage)) {
            if (key.includes('QR_')) {
                sessionStorage.removeItem(key);
            }
            if (key.includes('PD_FLOAT')) {
                sessionStorage.removeItem(key);
            }
        };
    }
    loadGeneralCache();
    $(".datetimepicker").datetimepicker({
        format: "Y-m-d H:m:s",
        step: 30
    });
    $(".vPassView").click(function () {
        var t = $(this).parent().prev("input").attr("type");
        if (t === "password") {
            $(this).removeClass("fa-eye-slash").addClass("fa-eye");
            $(this).parent().prev("input").attr("type", "text");
        } else {
            $(this).removeClass("fa-eye").addClass("fa-eye-slash");
            $(this).parent().prev("input").attr("type", "password");
        }
    });
    $(".input-holder > input").focus(function (e) {
        $(this).parent().addClass("focus");
    }).blur(function (e) {
        $(this).parent().removeClass("focus");
    });
    $(".form-tac > input").focus(function (e) {
        $(this).parent().addClass("focus");
    }).blur(function (e) {
        $(this).parent().removeClass("focus");
    });
    $(".form-tac > input").on("keyup", function (e) {
        if (e.which == 8) {
            $(this).prev().focus();
        } else {
            if ($(this).val().length == 1) {
                $(this).next().focus();
            }
        }
    });
    $('.setting-menu a').filter(function () {
        return this.href == url;
    }).addClass('active');
    $('[data-toggle="tooltip"]').tooltip();
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-180:+0"
    });
    $(".resetForm").click(function () {
        $('form')[0].reset();
    });
    $(document).on('input', '.validPrice', function () {
        let match = (/(\d{0,100})[^.]*((?:\.\d{0,2})?)/g).exec(this.value.replace(/[^\d.]/g, ''));
        this.value = match[1] + match[2];
    });
    $(document).on("click", ".copyAdd", function (e) {
        e.preventDefault();
        var copyTime;
        clearTimeout(copyTime);
        var txtCopy = $(this).data("copy");
        var txtCopied = $(this).data("copied");
        $(this).closest(".copyAdd").find(".txtCopyAdd").html(txtCopied);
        copyTime = setTimeout(function () {
            $(".txtCopyAdd").html(txtCopy);
        }, 3000);
    });
    $(".copyUsername").on("click", function () {
        var username = $(this).siblings(".dashboard-profile-user-name").html();
        var tempElement = $('<input>').val(username).appendTo('body').select();
        document.execCommand('copy');
        tempElement.remove();
    });
    $('.vBtnLaiveChat').on('shown.bs.modal', function () {
        $(this).find('iframe').attr('src', 'https://secure.laivechat.com/chat?mid=8393251239f2e4f277d545a1c6f70b');
    });
    $("#liveChatBtn").click(function () {
        $("#helpModal").css("visibility", "hidden");
        $("#helpModal").modal("show");
        setTimeout(function () {
            $("#helpModal").css("visibility", "visible");
        }, 2000);
    });
    $(".numericOnly").on("keypress keyup blur paste", function (event) {
        var that = this;
        if (event.type === "paste") {
            setTimeout(function () {
                $(that).val($(that).val().replace(/[^\d].+/, ""));
            }, 100);
        } else {
            if (event.which < 48 || event.which > 57) {
                event.preventDefault();
            } else {
                $(this).val($(this).val().replace(/[^\d].+/, ""));
            }
        }
    });
    $(".custSelect").select2({
        searchInputPlaceholder: lang.search
    }).on('select2:opening', function (e) {
        $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', lang.search)
    });
    $(document).on("click", ".lang-box .sel-lang", function (e) {
        selOptLang = $(this).data('lang');
        selOptCrty = $(this).data('country');
        if (selOptLang !== appLang || selOptCrty !== appCtry) {
            $(".resp").html("");
            $(".ajaxLoader").show();
            var param = {
                langType: selOptLang,
                langCtry: selOptCrty
            };
            $.post('/update-language', param, function (d) {
                $("#languageModal").modal("hide");
                var x = url.pathname;
                x = x.split('/');
                x[1] = selOptLang + '-' + selOptCrty;
                x = x.join('/');
                location.href = location.origin + x + par;
            }, 'json');
        }
    });
    $('#newsTickerModal .modal-close').click(async function () {
        if ($(".dontShowAgain").prop("checked") == true) {
            $.cookie('ann', {
                expires: 1
            });
        }
    });
    $(document).on("click", "#newsTickerModal .left-announce li", async function (e) {
        var type = $(this).attr('data-type');
        var page = $(this).attr('data-page');
        if (!clickAnn) {
            if (type == 'announcement') {
                $('#newsTickerModal .pagi-next').click();
            } else {
                $('#newsTickerModal .pagi-prev').click();
            }
        } else {
            $(".ticker-annouce-panel, .left-announce li[data-type='announcement']").attr('data-page', 1);
            switchAnnCont(1);
        }
    });
    $('#newsTickerModal .pagi-prev').click(function () {
        if (!$(this).hasClass('disabled')) {
            if (countAnnPage == 1) {
                countAnnPage = 1;
            } else {
                countAnnPage--;
            }
            if (countAnnPage == 1) {
                $('#newsTickerModal .pagi-prev').addClass('disabled');
                $('#newsTickerModal .pagi-next').removeClass('disabled');
            } else {
                $('#newsTickerModal .pagi-prev').removeClass('disabled');
            }
            switchAnnCont(countAnnPage);
        }
    })
    $('#newsTickerModal .pagi-next').click(function () {
        if (!$(this).hasClass('disabled')) {
            if (countAnnPage == totalAnnPage) {
                countAnnPage = totalAnnPage;
            } else {
                countAnnPage++;
            }
            if (countAnnPage == totalAnnPage) {
                $('#newsTickerModal .pagi-next').addClass('disabled');
                $('#newsTickerModal .pagi-prev').removeClass('disabled');
            } else {
                $('#newsTickerModal .pagi-next').removeClass('disabled');
            }
            switchAnnCont(countAnnPage);
        }
    })
    $(document).on('click', '.btn-logout', async function () {
        sessionStorage.clear();
        var d = await doPost('/logout');
        location.href = "/";
    });
    $(document).on("click", ".wallet-main-bal .button-restoreBalance", async function () {
        $(this).children('i').addClass('fa-spin');
        $(this).children('i.fa-spin').css('animation-duration', 'var(--fa-animation-duration,0.2s)');
        $(this).children('i.fa-spin').css('animation-timing-function', 'ease, step-start, cubic-bezier(0.1, 1, 1, 0.1)');
        await getUserBalance();
    })
    $(document).on("click", ".dashboard-restore .button-restoreBalance, .mobile-wallet-restore .button-restoreBalance", async function () {
        $(this).children('i').addClass('fa-spin');
        $(this).children('i.fa-spin').css('animation-duration', 'var(--fa-animation-duration,0.2s)');
        $(this).children('i.fa-spin').css('animation-timing-function', 'ease, step-start, cubic-bezier(0.1, 1, 1, 0.1)');
        await restoreBalance();
        $('.dashboard-restore .button-restoreBalance i, .mobile-wallet-restore .button-restoreBalance i').removeClass('fa-spin');
        await dashboard();
    })
    $(document).on("click", ".app-download-button, .home-banner-app-download, .mob-banner-app-download, .button-downloadApp", function () {
        var phoneOs = $(this).attr('data-type');
        if (phoneOs == "android") {
            window.location.href = 'https://siam855-pub.s3.ap-southeast-1.amazonaws.com/app/siam855.apk';
        } else {
            alert(lang.coming_soon);
        }
    });
    $(document).on("click", ".close-bottom-download-app-banner", function (e) {
        $(".mob-bottom-download-app").addClass("hide");
    });
    $(document).on("click", ".box.app-download", function () {
        if (window.matchMedia("(max-width: 800px)").matches) {
            location.href = '/' + appLang + '-' + appCtry + '/download';
        } else {
            $("#appDownloadModal").modal("show");
        }
    });
    $(document).on("click", ".btn-copyUrl", async function () {
        var promoUrl = $(this).attr('data-url');
        var tempElement = $('<input>').val(promoUrl).appendTo('body').select();
        document.execCommand('copy');
        alert(`${lang.copied}`)
    });
    $(document).on("click", ".button-go-to-profile", async function () {
        $(this).attr('href', '/' + appLink + '/dashboard/profile');
    });
});
async function switchAnnCont(c) {
    $('#newsTickerModal .section').hide();
    $('#newsTickerModal .section[data-page="' + c + '"]').stop().fadeIn(500);
    $('#newsTickerModal .pages span').html(c);
    $('#newsTickerModal .left-announce li').removeClass('active');
    $('#newsTickerModal .left-announce li[data-page="' + c + '"]').addClass('active');
}

function checkIsLogin(log) {
    if (log == 0) {
        $('.section-copyright').css('margin-bottom', '0');
    }
};

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function isEmptyReturnDash(str) {
    return (str == null || str == "" ? "-" : str);
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

function comingSoon() {
    $('#comingSoonModal').modal('show');
}

function resp_msg(status, code, cls) {
    if (code == "") {
        return;
    }
    if (code.includes("SQLSTATE") || code.includes("SQL")) {
        $('.' + cls).html('<div class="alert alert-danger">Something went wrong. Please try again later.</div>');
        return;
    }
    if (status) {
        if (typeof cls !== "undefined" && cls !== "") {
            $('.' + cls).html('<div class="alert alert-success">' + code + '</div>');
        } else {
            $('.resp').html('<div class="alert alert-success">' + code + '</div>');
        }
    } else {
        if (typeof cls !== "undefined" && cls !== "") {
            $('.' + cls).html('<div class="alert alert-danger">' + code + '</div>');
        } else {
            $('.resp').html('<div class="alert alert-danger">' + code + '</div>');
        }
    }
}

function toTop() {
    $('html, body').animate({
        scrollTop: "0px"
    }, 800);
}

function toTopInstant() {
    $('html, body').animate({
        scrollTop: "0px"
    }, 0);
}

function updateScroll(ele) {
    $(ele).animate({
        scrollTop: $(ele).prop('scrollHeight') + "px"
    }, 800);
}

function ellipsizeTextBox() {
    $(this).find('.ow2line').each(function () {
        var truncate = $(this).find('.overflow_truncate');
        var keep = $(this).find('.overflow_keep');
        if (truncate && keep) {
            truncate.css('text-overflow', 'ellipsis');
            truncate.css('overflow', 'hidden');
            $.each([truncate, keep], function (index, self) {
                $(self).css('float', 'left');
                $(self).css('white-space', 'nowrap');
            });
            keep.html('&nbsp;' + $.trim(keep.html()));
            var keepWidth = keep.outerWidth();
            var containerWidth = $(this).outerWidth();
            truncate.css('max-width', (containerWidth - keepWidth) + 'px');
        }
    });
}

function comma(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function btnDisable(elem) {
    $(elem).addClass("disabled").attr("disabled", true);
}

function btnEnable(elem) {
    $(elem).removeClass("disabled").removeAttr("disabled");
}

function clearTimer() {
    clearInterval(downloadTimer);
    timeleft = timeCounterTac;
    $("#btnResend").removeClass("disabled").removeAttr("disabled");
}

function clearTimer2() {
    clearInterval(downloadTimer2);
    timeleft2 = timeCounterTac;
    $(".vSendCodeLBL").html(lang.send_code);
    $(".tac_countv2").text("");
    $("#vBtnVerifyResend").removeClass("disabled").removeAttr("disabled");
}

function clearTimer3() {
    clearInterval(downloadTimer3);
    timeleft3 = timeCounterTac;
    $("#btnRequestTac3").removeClass("disabled").removeAttr("disabled");
    $("#btnRequestTac3").text(lang.request_tac);
}

function tacTimer() {
    clearInterval(downloadTimer);
    timeleft = timeCounterTac;
    downloadTimer = setInterval(function () {
        timeleft -= 1;
        $(".tac_count").text(timeleft + "s");
        $("#btnResend").addClass("disabled").attr("disabled", true);
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $(".resp").html("");
            $("#btnResend").removeClass("disabled").removeAttr("disabled");
        }
    }, 1000);
}

function tacTimer2() {
    clearInterval(downloadTimer2);
    timeleft2 = timeCounterTac;
    downloadTimer2 = setInterval(function () {
        timeleft2 -= 1;
        $(".tac_countv2").text("(" + timeleft2 + "s)");
        $("#vBtnVerifyResend").addClass("disabled").attr("disabled", true);
        $(".vSendCodeLBL").html(lang.resend_code);
        if (timeleft2 <= 0) {
            clearInterval(downloadTimer2);
            $(".resp").html("");
            $("#vBtnVerifyResend").removeClass("disabled").removeAttr("disabled");
        }
    }, 1000);
}

function tacTimer3() {
    clearInterval(downloadTimer3);
    timeleft3 = timeCounterTac;
    downloadTimer3 = setInterval(function () {
        $("#btnRequestTac3").text(timeleft3 + "s");
        $("#btnRequestTac3").addClass("disabled").attr("disabled", true);
        timeleft3 -= 1;
        if (timeleft3 <= 0) {
            clearInterval(downloadTimer3);
            $("#btnRequestTac3").text(lang.request_tac);
            $(".resp3").html("");
            $("#btnRequestTac3").removeClass("disabled").removeAttr("disabled");
        }
    }, 1000);
}

function toFixeds(x, n) {
    const v = (typeof x === 'string' ? x : x.toString()).split('.');
    if (n <= 0)
        return v[0];
    let f = v[1] || '';
    if (f.length > n)
        return `${v[0]}.${f.substr(0,n)}`;
    while (f.length < n)
        f += '0';
    return `${v[0]}.${f}`
}
$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');
$.validator.addMethod("multipleten", function (value, element) {
    return this.optional(element) || parseInt(value, 10) % 10 == 0
}, 'The value must be 0 or a multiple of 10');
$.validator.addMethod("alphanum", function (value) {
    return /^[a-z].*[0-9]|[0-9].*[a-z]/i.test(value);
}, 'Your input must contain at least 1 letter and 1 number');
$.validator.addMethod("alphanumsymbol", function (value) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/.test(value);
}, 'Your input must contain at least 1 letter and 1 number and 1 symbol');
$.validator.addMethod("greaterThanZero", function (value, element) {
    return this.optional(element) || (parseFloat(value) > 0);
}, "* Amount must be greater than zero");

function resp_pop(msg) {
    $("#generalModal .respGeneral").html(msg);
    $("#generalModal").modal("show");
}

function checkToken(d) {
    if (d.code == 1003 || d.code == 1001 || d.code == 1002) {
        if (d.msg.trim() == "token expired") {
            resp_pop(lang.login_expired);
        } else {
            resp_pop(d.msg);
        }
        setTimeout(async function () {
            sessionStorage.clear();
            var d = await doPost('/logout');
            location.href = "/";
        }, 3000);
    }
}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}

function copyToClipboard(id) {
    let $c = $(id).siblings('.button-copy');
    $c.text(lang.copied);
    setTimeout(function () {
        $c.html('<i class="fa-regular fa-copy"></i>');
    }, 2000);
    let textarea;
    let result;
    try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', true);
        textarea.setAttribute('contenteditable', true);
        textarea.style.position = 'fixed';
        textarea.value = $.trim(id.val());
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
    } catch (err) {
        console.error(err);
        result = null;
    } finally {
        document.body.removeChild(textarea);
    }
    if (!result) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const copyHotkey = isMac ? 'âŒ˜C' : 'CTRL+C';
        result = prompt(`Press ${copyHotkey}`, string);
        if (!result) {
            return false;
        }
    }
    return true;
}

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
        type: mime
    });
}

function convertEntity(s) {
    return $('<div>').text(s).html();
}

function convertEntityR(s) {
    return $('<div>').html(s).text();
}

function convToPri(d) {
    var newPrice = comma(d.toString());
    return toFixeds(newPrice, 2);
}

function doPost(url, param = {}) {
    return new Promise((resolve, reject) => {
        $.post(url, param, (d) => {
            if (typeof d !== "undefined" && typeof d.msg !== "undefined" && typeof d.msg !== "" && typeof d.msg !== null) {
                var d_msg = d.msg.toLowerCase();
                var d_stat = d_msg.includes("sqlstate");
                d_stat ? d.msg = "Something Went Wrong. Please Try Again." : d.msg;
            }
            if (d.code == "1003") {
                setTimeout(async function () {
                    sessionStorage.clear();
                    var d = await doPost('/logout');
                    location.href = "/";
                }, 2500);
                return resolve(d);
            }
            return resolve(d);
        }, 'json');
    });
}

function loginApi(type) {
    var param;
    if (type == "dev") {
        btnDisable("#btnLoginTop");
        $(".ajaxLoader").show();
        $(".resp").html("");
        param = {
            user: $('.username').val().trim(),
            pass: $('.password').val().trim()
        };
    } else if (type == "pop") {
        btnDisable("#btnLogin");
        $(".ajaxLoader").show();
        $(".resp_pop").html("");
        param = {
            user: $('#login_username').val().trim(),
            pass: $('#login_password').val().trim()
        };
    }
    $.post('/account-login', param, function (d) {
        checkToken(d);
        $(".ajaxLoader").fadeOut();
        if (!d.status) {
            resp_pop(d.msg);
            btnEnable("#btnLoginTop");
            btnEnable("#btnLogin");
        } else {
            if (window.matchMedia("(max-width: 800px)").matches) {
                location.reload();
            } else {
                location.href = '/' + d.data.default_lang + '/dashboard/deposit';
            }
        }
    }, 'json');
}
async function loginGame(t = null) {
    $(".ajaxLoader").show();
    var param = {
        id: providerId,
        gid: gid
    };
    var inAppBrowser = fnBrowserDetect();
    if (!t) {
        if (!inAppBrowser) {
            var win = window.open();
        }
    }
    if (providerId == ptProvId || providerId == ptProvId2) {
        iapiSetCallout('Login', calloutLogin);
        iapiSetCallout("GetTemporaryAuthenticationToken", calloutGetTemporaryAuthenticationToken);
        var d = await doPost('/get-pt-player-detail', param);
        checkToken(d);
        if (!d.status) {
            $(".ajaxLoader").fadeOut();
            resp_pop(d.msg);
            if (!inAppBrowser) {
                win.close();
            }
            return;
        }
        await loginPT(d.data.username, d.data.provider_token);
        await sleep(3000);
        if (!sessionStorage.getItem("temptoken")) {
            $(".ajaxLoader").fadeOut();
            if (!inAppBrowser) {
                win.close();
            }
            return;
        }
        var url = d.data.mobiledomain + '/igaming/?gameId=' + d.data.gamecode + '&real=1&username=' + d.data.username + '&lang=EN&tempToken=' + playTechTempToken + '&lobby=' + window.location.origin + '/Close' + '&support=' + '&logout=' + window.location.origin + '/Close' + '&deposit=';
        sessionStorage.setItem("url", url);
        sessionStorage.removeItem("temptoken");
        $(".ajaxLoader").fadeOut();
        if (d.data.auto_status == "1" || d.data.auto_status == "0" && !d.data.balance) {
            if (!inAppBrowser) {
                await openPage(win, url);
            }
            var d = await doPost('/auto-transfer', param);
            checkToken(d);
            if (!d.status) {
                $(".ajaxLoader").fadeOut();
                resp_pop(d.msg);
                return;
            }
            $(".ajaxLoader").fadeOut();
            if (inAppBrowser) {
                location.href = url;
            }
        } else {
            if (typeof d.data !== 'undefined') {
                if (!inAppBrowser) {
                    win.close();
                }
                await doQTModal(d.data);
            }
            $("#quickTransfer").modal("show");
        }
    } else {
        var d = await doPost('/login-game', param);
        checkToken(d);
        if (!d.status) {
            $(".ajaxLoader").fadeOut();
            resp_pop(d.msg);
            if (!inAppBrowser) {
                win.close();
            }
            return;
        }
        $(".ajaxLoader").fadeOut();
        if (d.data.auto_status == "1" || d.data.auto_status == "0" && d.data.url) {
            var url = d.data.url;
            if (!inAppBrowser) {
                await openPage(win, url);
            }
            if (d.data.auto_status == "1") {
                var d = await doPost('/auto-transfer', param);
                checkToken(d);
                if (!d.status) {
                    $(".ajaxLoader").fadeOut();
                    resp_pop(d.msg);
                    return;
                }
            }
            $(".ajaxLoader").fadeOut();
            if (inAppBrowser) {
                location.href = url;
            }
        } else {
            if (typeof d.data !== 'undefined') {
                if (!inAppBrowser) {
                    win.close();
                }
                await doQTModal(d.data);
            }
            $("#quickTransfer").modal("show");
        }
    }
}
async function openPage(win, url) {
    win.location = url;
    win.focus();
}
async function doQTModal(d) {
    var promoCode = `<option value="">${lang.no_bonus}</option>`;
    if (d.promotion !== 'undefined' && d.promotion.length) {
        $(d.promotion).each(function () {
            promoCode += `<option value="${this.id}">${this.name}</option>`;
        });
    }
    $("#quickTransfer #promo_code").html(promoCode);
    $("#quickTransfer .provider_img").html(`<img src="${WEB_ASSET_GAME}provider/${d.provider_name}.png" />`);
    $("#quickTransfer .transfer-to span").html(`<div id="providerN" data-id="${d.provider_id}">${d.provider_name} ${lang.wallet}</div>`);
    $("#quickTransfer .transfer-to .provider_wallet").html(`${userCurrency} ${convToPri(d.provider_balance)}`);
    $("#quickTransfer .mainBalance").html(`${userCurrency} ${convToPri(d.balance)}`);
    $("#quickTransfer #transfer_amount").val(toFixeds(d.balance, 2));
}
async function transInAndPlay() {
    $(".ajaxLoader").show();
    $("#quickTransfer").modal('hide');
    var param = {
        id: providerId,
        gid: gid,
        promotion: $("#promo_code option:selected").val(),
        amount: $("#transfer_amount").val().trim()
    };
    var inAppBrowser = fnBrowserDetect();
    if (!inAppBrowser) {
        var win = window.open();
    }
    if (providerId == ptProvId || providerId == ptProvId2) {
        var d = await doPost('/pt-trans-in-and-play', param);
        checkToken(d);
        d.data = sessionStorage.getItem("url");
    } else {
        var d = await doPost('/trans-in-and-play', param);
        checkToken(d);
    }
    $(".ajaxLoader").fadeOut();
    if (!d.status) {
        resp_pop(d.msg);
        if (!inAppBrowser) {
            win.close();
        }
        return;
    }
    if (typeof d.data != 'undefined') {
        var url = d.data;
        if (inAppBrowser) {
            location.href = url;
        } else {
            await openPage(win, url);
        }
    }
}
$(document).on("click", ".game .list .box .box-play .boxGoPlay", async function () {
    providerId = $(this).attr("data-pid");
    gid = $(this).attr("data-gameid");
    if ($(this).hasClass("demo")) {
        loginDemoGame();
    } else {
        if (appUser) {
            await loginGame();
        } else {
            popLogin();
        }
    }
});
$(document).on("click", ".sc-holder", async function () {
    providerId = $(this).attr("data-pid");
    gid = $(this).attr("data-gameid");
    if ($(this).hasClass("demo")) {
        loginDemoGame();
    } else {
        if (appUser) {
            await loginGame();
        } else {
            popLogin();
        }
    }
});
$(document).on("click", ".mob-bottom-menu a", async function (e) {
    if ($(this).attr('data-type') == "dashboard" && !appUser) {
        e.preventDefault();
        popLogin();
    }
});
$(document).on("click", ".game .list .box .button-sub-cta", async function () {
    providerId = $(this).attr("data-pid");
    gid = $(this).attr("data-gameid");
    if (appUser) {} else {
        popLogin();
    }
});

function popLogin() {
    $("#loginModal").modal("show");
}
async function loadMenu(data) {
    var list = "";
    list += `<li><a class="box d-dev" data-type="home" data-v="home" href="/${appLink}">
                    <span class="icon-home"></span>
                </a></li>`;
    $(data).each(function () {
        list += `<li><a class="box" data-type="${this.type}" data-v="game" data-name="${this.message}" href="/${appLink}/${this.type}">
                        <span class="icon-${this.type}"></span>
                        <span>${this.message}</span>
                    </a></li>`;
    });
    list += `<li><a class="box" data-type="promotions" data-v="promotions" data-name="promotions" href="/${appLink}/promotions">
                    <span class="icon-promotion"></span>
                    <span>${lang.promotions}</span>
                </a></li>
                <li class="vip-menu-btn hide"><a class="box" data-type="vip" data-name="vip" href="/${appLink}/vip">
                    <span class="icon-vip"></span>
                    <span>${lang.vip}</span>
                </a></li>
                `;
    list += ` <li><div class="box d-dev app-download" data-type="app-download" data-name="app-download">
                    <i class="fa-solid fa-arrow-down-to-line"></i>
                    <span>${lang.download}</span>
                </div></li>`;
    list += `
                <li class="tournament-menu hide"><a class="box" data-type="leaderboard" data-name="leaderboard" href="/${appLink}/leaderboard">
                    <span class="icon-leaderboard"></span>
                    <span>${lang.leaderboard}</span>
                </a></li>`;
    list += `<li class="side-menu-calendar-btn dispRealNone"><div class="box" data-type="daily-mission" data-name="daily-mission">
                    <i class="fa-regular fa-club"></i>
                    <span>${lang.daily_sign_in}</span>
                </div></li>`;
    list += `<li class="lucky-spin-btn dispRealNone"><a class="box" data-type="lucky-spin" data-name="lucky-spin" href="/${appLink}/lucky-spin">
                    <i class="fa-regular fa-diamond"></i>
                    <span>${lang.lucky_spin}</span>
                </a></li>
                <li class="angpow_topBar hide"><a class="box" data-type="angpow" data-name="angpow" href="/${appLink}/angpow">
                    <i class="icon-angpow icSize"></i>
                    <span>${lang.angpow}</span>
                </a></li>
                <!--<li class="dispRealNone"><a class="box" data-type="angpow" data-name="angpow" href="/${appLink}/angpow">
                    <img style="margin-right:10px;" src="${WEB_ASSET_WEB}common/angpow-top-spin.svg">
                    <span>${lang.angpow}</span>
                </a></li>
                <li><a class="box" data-type="predictor" data-name="predictor" href="/${appLink}/predictor">
                    <span class="icon-predictor"></span>
                    <span>${lang.predictor}</span>
                </a></li>-->`;
    $(".more").remove();
    $(".topNavBar-link .dropdown-mainNav").html(list);
    $(".topNavBar-link .dropdown-mainNav").append(`<li class="more">
            <span class="box button-more">${lang.more}</span>
        </li>`);
    $(".game-type-list").html(list);
    loadResponsiveMenu();
}

function loadResponsiveMenu() {
    if ($(window).width() > 800) {
        $(".dropdown-nav").html("");
        var item_width = $('.dropdown-mainNav li').width();
        var item_count = ($(".dropdown-mainNav li").length);
        var nav_width = $('.topNavBarMenu').width();
        var total_item_width = 0;
        $('.more').hide();
        $('.dropdown-mainNav li').each(function () {
            total_item_width = total_item_width + $(this).outerWidth();
            if (nav_width < total_item_width) {
                $('.dropdown-mainNav li').not('.more').last().prependTo($('.dropdown-nav'));
                $('.more').appendTo($('.dropdown-mainNav')).css("display", "inline-flex");
                $('.more').show();
            }
        })
    }
    $(window).resize(function () {
        if ($(window).width() > 800) {
            nav_width = $('.topNavBarMenu').width();
            item_width = $('.dropdown-mainNav li').width();
            item_count = ($(".dropdown-mainNav li").length);
            if (nav_width < (item_width * item_count - 1)) {
                $('.dropdown-mainNav li').not('.more').last().prependTo($('.dropdown-nav'));
                $('.more').appendTo($('.dropdown-mainNav')).css("display", "inline-flex");
                $('.more').show();
            }
            if (nav_width > (item_width * item_count) + (item_width - 1)) {
                $('.dropdown-nav li').first().appendTo($('.dropdown-mainNav'));
                $('.more').appendTo($('.dropdown-mainNav')).css("display", "inline-flex");
                if (($(".dropdown-nav li").length) == 0) {
                    $('.more').appendTo('body').css("display", "none");
                    $('.dropdown-nav').removeClass('active').hide()
                } else {
                    $('.more').appendTo($('.dropdown-mainNav')).css("display", "inline-flex");
                }
            }
        }
        topMenuShowMoreDisplayHandle();
    });
    $('.button-more, .dropdown-nav li').click(function () {
        $('.dropdown-nav').slideToggle().addClass("active");
    });
}

function topMenuShowMoreDisplayHandle() {
    const topMenuDropDownElements = $(".dropdown-nav li").not(".hide, .dispRealNone");
    if (topMenuDropDownElements.length == 0) {
        $('.more').hide();
        $('.dropdown-nav').removeClass("active");
    } else {
        $('.more').show();
    }
}

function dragMenu() {
    const slider = document.querySelector('.topbar-menu-inner .game-type-list');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown)
            return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}
async function assignActiveMenu() {
    $('.topbar-menu a').filter(function () {
        return this.href == url;
    }).addClass('active');
    $('.sidebar-body a').filter(function () {
        return this.href == url;
    }).addClass('active');
    $('.mob-bottom-menu a').filter(function () {
        return this.href == url;
    }).addClass('active');
}
async function loadGeneralCache() {
    getSessionCache('vipS', getVipSetting);
    getSessionCache('dm_setting', getDiaryMission);
    getSessionCache('ls', getSpinSetting);
    getSessionCache('tournament', getTournamentSetting);
    getSessionCache('tournamentS', getTournamentDisplaySetting);
}
async function loadGeneralFunc(d, sta = false, checkin = false) {
    isLogin = d.data.is_login;
    announcementPopOutData = d.data;
    checkSessionStorage('CURRENCY', d.data.currency, getDefaultCurrency);
    await checkLocalStorage('menu', d.data.gameType, loadMenu);
    await assignActiveMenu();
    await loadLanguageModal(d.data.user_language);
    await getFloatingContactApi(sta);
    await loadNewsTicker(d.data.announce, d.data.style);
    if (isLogin) {
        $(".dashboard-profile-user-id").html(d.data.profile.member_id);
        userCurrency = d.data.profile.currency;
        if (!sessionStorage.getItem('baloa')) {
            if (window.performance.navigation.type == "0" || window.performance.navigation.type == "1") {
                checkSessionStorage('balo', d.data.wallet);
                sessionStorage.setItem("baloa", true);
                await loadWallet(d.data.wallet);
            }
        } else {
            getSessionCache("balo", loadWallet)
        }
        await claimModal();
        if (d.data.profile.verification !== "approved") {
            var pendingVerifiedStatus = `<div class="dashboard-profile-user-pending-verified-container newNav" data-id="profile">
                                            <i class="fa-solid fa-badge-check"></i>
                                            <span>${lang.pending}</span>
                                        </div>`;
            $('.dashboard-profile-user-verified').html(pendingVerifiedStatus);
        } else {
            var verifiedStatus = `<div class="dashboard-profile-user-verified-container">
                                            <i class="fa-solid fa-badge-check"></i>
                                            <span>${lang.verified}</span>
                                        </div>`;
            $('.dashboard-profile-user-verified').html(verifiedStatus);
        }
    } else {}
    await checkSessionStorage('dm_setting', d.data.diary, getDiaryMission);
    await checkSessionStorage('vipS', d.data.vip_display_setting, getVipSetting);
    await checkSessionStorage('ls', d.data.lucky_wheel, getSpinSetting);
    await checkSessionStorage('tournament', d.data.tournament, getTournamentSetting);
    await checkSessionStorage('tournamentS', d.data.tournament_display, getTournamentDisplaySetting);
    getBalTimerCount();
    topMenuShowMoreDisplayHandle();
}
async function getDefaultCurrency(d = null) {
    if (d) {
        userCurrency = d;
    }
}
async function loadBanner(data) {
    if ((typeof data == "undefined" || typeof data[pgName] == "undefined") && !data[pgName]) {
        $(".section-banner").addClass('hide');
        setTimeout(function () {
            $("html, body").stop().scrollTop(0)
        }, 250)
        return;
    }
    var list = "";
    for (const [key, value] of Object.entries(data)) {
        if (key == pgName) {
            $(value).each(function () {
                if (this.link) {
                    list += '<div><a target="_blank#" href="' + this.link + '"><img class="img-responsive" src="' + this.img + '" alt="banner"></a></div>';
                } else {
                    list += '<div><img class="img-responsive" src="' + this.img + '" alt="banner"></div>';
                }
            });
        }
    }
    if ($('.section-banner .banner.box').hasClass('slick-initialized')) {
        $('.section-banner .banner.box').slick('unslick');
    }
    $(".banner.box").html(list);
    $('.section-banner .banner').removeClass('skeleton-gray');
    $(".section-banner .banner.box").slick({
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        adaptiveHeight: false
    });
    $(".section-banner").removeClass('hide');
    if (pgName !== "home") {
        setTimeout(function () {
            if ($('.pg-game .section-banner').height() !== 0) {
                var providerDiv = $('.pg-game .section-banner').height() + 40;
                $("html, body").stop().scrollTop(providerDiv)
            }
        }, 250)
    } else {
        setTimeout(function () {
            $("html, body").stop().scrollTop(0)
        }, 250)
    }
    if (data.length <= 1) {
        $('.slick-dots').hide();
    }
}
async function loadWallet(data) {
    var list = "",
        transWalletList = "",
        topbar = "";
    $(data).each(function () {
        list += `<div class="mp-info2">${lang.credit}: 
                        <span class="text-white" data-type="${this.name}">${userCurrency} ${convToPri(this.balance)}</span>
                        <div class="button button-restoreBalance">
                            <i class="fa-regular fa-arrows-rotate"></i>
                        </div>
                    </div>`;
        transWalletList += `<span class="wallet-prov-holder" data-id="-1">${this.display} 
                    <span class="fs10">${userCurrency} ${convToPri(this.balance)}</span>
                </span>
                <div class="button button-restoreBalance">
                    <i class="fa-regular fa-arrows-rotate"></i>
                </div>`;
        topbar += `<div class="mp-info2">
                <img src="${WEB_ASSET_WEB}icon/ico-mob-wallet-money.svg" alt="deposit">
                <span class="text-white mgr20" data-type="${this.name}"> ${convToPri(this.balance)}</span>
                <div class="button button-restoreBalance">
                    <i class="fa-regular fa-arrows-rotate"></i>
                </div>
            </div>`;
    });
    $(".dt-mp-wallet").html(list);
    $(".xMobWallet").html(list);
    $(".desk-view-top-wallet").html(list);
    $(".mob-view-top-wallet").html(topbar);
    $(".wallet-main-bal").html(transWalletList);
    $(".wallet-main-bal").removeClass('hide');
    $("#transfer_promo_amount").val(toFixeds(data[0].balance, 2));
    $(".main-wallet-amount").html(userCurrency + ' ' + convToPri(data[0].main));
}
async function getUserBalance() {
    var d = await doPost('/get-balance');
    checkToken(d);
    $('.top-wallet .button-restoreBalance i').removeClass('fa-spin');
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
    if (typeof d.data !== 'undefined') {
        checkSessionStorage('balo', d.data);
        loadWallet(d.data);
        loadSideWallet(d.data);
    }
}

function loggedInBg() {
    if (window.matchMedia("(max-width: 800px)").matches) {
        $(".main-content").css("background", "#1c1c1c");
    } else {
        $(".main-content").css("background", "#252525");
    }
    $(window).resize(function () {
        if (window.matchMedia("(max-width: 800px)").matches) {
            $(".main-content").css("background", "#1c1c1c");
        } else {
            $(".main-content").css("background", "#252525");
        }
    });
}

function loggedInMobBg() {
    $(".main-content").css("background", "#252525");
}
async function loadLanguageModal(data) {
    var userLang = "";
    for (const [key, value] of Object.entries(data)) {
        userLang += `<div class="lang-box">
                            <div class="lang-country">${key}</div>  
                            <div class="lang-box-container">    
                            <img class="img-responsive d-in" src="${WEB_ASSET_WEB}lang/${key.toLowerCase()}.png">`;
        for (const [keyIn, valueIn] of Object.entries(value)) {
            langCountry = keyIn;
            for (const [keyInner, valueInner] of Object.entries(valueIn)) {
                userLang += `<span class="sel-lang" data-lang="${keyInner}" data-country="${langCountry.toLowerCase()}">${valueInner}</span>`;
            }
        }
        userLang += `</div>
                    </div>`;
    }
    $("#languageModal .modal-body").html(userLang);
    $(".lang-box .sel-lang[data-lang='" + appLang + "'][data-country='" + appCtry + "']").addClass('active');
}
async function loadUserVerified(m) {
    user_verify_data = m;
    if (m.profile_verified) {
        idStatusVerified = true;
        $(".pVer").addClass('verified');
        $(".pVer").append(`<img src="${WEB_ASSET_WEB}deposit-withdraw-status-modal/status-success.png">`);
    }
    if (m.mobile_verified) {
        $(".mVer").addClass('verified');
        $(".mVer").append(`<img src="${WEB_ASSET_WEB}deposit-withdraw-status-modal/status-success.png">`);
    }
    if (m.email_verified) {
        $(".eVer").addClass('verified');
        $(".eVer").append(`<img src="${WEB_ASSET_WEB}deposit-withdraw-status-modal/status-success.png">`);
    }
    if (m.bankacc_verified) {
        $(".bVer").addClass('verified');
        $(".bVer").append(`<img src="${WEB_ASSET_WEB}deposit-withdraw-status-modal/status-success.png">`);
    }
    var notVerified = $('.user-verification').length;
    var verified = $('.user-verification.verified').length;
    var vProgress = verified / notVerified * 100;
    $('.dashboard-verification-process').html(vProgress + '' + '%');
}
async function mobileBtmMenuChat(data) {
    $(document).on('click', '.vBtnLaiveChat, .vip-live-chat-button', function () {
        var url = data;
        popWindow = window.open(url, "myWindow", "width=400,height=600");
    });
}
async function loadFloating() {
    $("#floating-snap-btn-wrapper").draggable({
        containment: "window"
    });
    var isMoving = false;
    var isdragging = false;
    $("#floating-snap-btn-wrapper").mousedown(function () {
        isdragging = false;
    });
    $("#floating-snap-btn-wrapper").mousemove(function () {
        isdragging = true;
        $(this).css("transition", "all 0s");
    });
    $("#floating-snap-btn-wrapper").mouseup(function (e) {
        e.preventDefault();
        var lastY = window.event.clientY;
        var lastX = window.event.clientX;
        $(this).css('transition', "all 0.5s")
        var mainWidth = $("#main-content").innerWidth();
        var mainHeight = $(window).height();
        if (isdragging) {
            if (lastX > (mainWidth / 2)) {
                $(this).css("top", (lastY - 50)).css("right", "15px").css("left", (mainWidth - 65) + "px");
                $(this).addClass("right").removeClass("left");
            } else {
                $(this).css("top", (lastY - 50)).css("left", "15px").css('right', "unset");
                $(this).addClass('left').removeClass("right");
            }
        }
        $(window).resize(function () {
            $("#floating-snap-btn-wrapper").css('left', 'unset');
        });
    });
    $("#floating-snap-btn-wrapper").click(function () {
        $("#floating-snap-btn-wrapper").toggleClass("fab-active");
    });
}
async function loadNewsTicker(data, style, sta = false) {
    var announceLength = data.length;
    var count = 0;
    if (!data.length) {
        $(".ticker-panel").remove();
        is_annouce = false;
        return;
    } else {
        totalAnnPage++;
        $(data).each(function (i) {
            if (this.is_popup == '0' || this.is_popup == null) {
                count++;
            }
        })
    }
    var d = data,
        list = "",
        list_2 = "",
        list_3 = "";
    var marqueStyle = style[0].speed;
    $(".ticker-panel").removeClass('hide');
    $(d).each(function () {
        if (this.content !== "") {
            list += `<li class="marquee-list"><div class="marQh"><span class="ticker-txt-new">${lang.new}</span><p style="color:${style[0].color}">${this.content}</p></div></li>`;
            if (this.is_popup == 1) {
                list_2 += `<div class="tab-box">
                        <div class="tap-b1">${this.date}</div>
                        <div class="tap-b2">${this.content}</div>
                    </div>`;
                announcePop = true;
            }
            list_3 += `<div class="tab-box">
                    <div class="tap-b1">${this.date}</div>
                    <div class="tap-b2">${this.content}</div>
                </div>`;
        }
    });
    var showOnce = `<div class="dontShowAgain-holder">
            <label class="control control-checkbox">
                <input type="checkbox" class="dontShowAgain">
                <div class="control_indicator"></div>
                <span>${lang.dont_show_again}</span>
             </label>
        </div>`;
    $(".marquee-container").html(list);
    var panel = `<li data-type="announcement" data-page="${totalAnnPage}">
            <div>
                <span><i class="fa-light fa-bullhorn"></i></span>
                <span>${lang.announcement}</span>
            </div>
            <img src="${globalImgPath}bg-announcement-hover.png">
        </li>`;
    var speed = "";
    if (marqueStyle == "fast") {
        speed = 0.07;
    } else if (marqueStyle == "medium") {
        speed = 0.05;
    } else {
        speed = 0.03
    }
    $('.marquee-container').AcmeTicker({
        type: 'marquee',
        direction: 'left',
        speed: speed
    });
    $(".ticker-panel").click(function () {
        $(".ticker-annouce-panel").html(list_3);
        $('#newsTickerModal .left-announce').html(panel);
        $(".advertisement-section").remove();
        $('.bottom-pagination').addClass('hide');
        clickAnn = true;
        $('#newsTickerModal .left-announce li:first-child').click();
        $("#newsTickerModal").modal('show');
    });
    if (count == announceLength) {
        totalAnnPage = 0;
        return;
    }
    if (totalAnnPage <= 1) {
        $('.bottom-pagination').addClass('hide');
        $('#newsTickerModal .pagi-prev').removeClass('disabled');
        $('#newsTickerModal .pagi-next').removeClass('disabled');
    } else {
        $('.bottom-pagination').removeClass('hide');
    }
    $(".ticker-annouce-panel").html(list_2);
    $(".ticker-annouce-panel").hide();
    $('#newsTickerModal .left-announce').html(panel);
    $("#newsTickerModal .modal-content").prepend(showOnce);
    $('.ticker-annouce-panel').attr('data-page', totalAnnPage);
    $('#newsTickerModal .left-announce li:first-child').click();
    $('#newsTickerModal .bottom-pagination .pages').html(`<span>1</span>/${totalAnnPage}`);
}
async function loadAdvertisement(data) {
    if (!data.length) {
        $(".advertisement-section").remove();
        return;
    } else {
        announcePop = true;
    }
    var ads_content = "";
    $(data).each(function () {
        if (this.img_path && this.img_path !== "") {
            ads_content += `<div class="ads_img">
                                <img src="${this.img_path}" alt="banner">
                            </div>`;
        }
        ads_content += `<div class="advertisement_title">${this.title}</div>
                        <div class="advertisement_content">${this.content}</div>`;
    });
    var showOnce = `<div class="dontShowAgain-holder">
            <label class="control control-checkbox">
                <input type="checkbox" class="dontShowAgain">
                <div class="control_indicator"></div>
                <span>${lang.dont_show_again}</span>
             </label>
        </div>`;
    var panel = `<li data-type="ad" data-page="1">
            <div>
                <span><i class="fa-light fa-rectangle-ad"></i></span>
                <span>${lang.advertisement}</span>
            </div>
            <img src="${globalImgPath}bg-announcement-hover.png">
        </li>`;
    if (!$('li[data-type="ad"]').children().length > 0) {
        totalAnnPage++;
        $('#newsTickerModal .left-announce').prepend(panel);
        $(".advertisement-section").html(ads_content);
        $(".ticker-annouce-panel, .left-announce li[data-type='announcement']").attr('data-page', totalAnnPage);
        $(".advertisement-section").attr('data-page', 1);
        $(".advertisement-section").hide();
        $('#newsTickerModal .bottom-pagination .pages').html(`<span>1</span>/${totalAnnPage}`);
        if (totalAnnPage <= 1) {
            $('.bottom-pagination').addClass('hide');
            $('#newsTickerModal .pagi-prev').removeClass('disabled');
            $('#newsTickerModal .pagi-next').removeClass('disabled');
        } else {
            $('.bottom-pagination').removeClass('hide');
        }
        $('#newsTickerModal .left-announce li:first-child').click();
        if ($("#newsTickerModal .modal-content").children().hasClass("dontShowAgain-holder") === false) {
            $("#newsTickerModal .modal-content").prepend(showOnce);
        }
    }
}
async function getTopWin(data) {
    data = "";
    if (!data || !data.length) {
        $(".section-banner .box").css("width", "100%");
        $(".top-player").remove();
        return;
    }
    var list_1 = "",
        list_2 = "";
    $(data).each(function (i) {
        if (i < 5) {
            list_1 += `<li class="x1">
                                <div class="topWinHolder">
                                    <div class="topWinContainer">
                                        <div class="topWinDetails">
                                            <div class="lb-1">${this.user}</div>
                                            <div class="lb-2">${this.currency} ${toFixeds(this.amount,2)}<span class="lb-3">${this.time}</span></div>
                                        </div>
                                         <div class="topWinImg">`
            if (this.img == null) {
                list_1 += `<div class="image"><img class="img-responsive" src="${WEB_ASSET_GAME}no-image.jpg"></div> `;
            } else if (this.img.substring(0, 4) == "http") {
                list_1 += `<div class="image"><img class="img-responsive" src="${this.img}"></div>`;
            } else {
                list_1 += `<div class="image"><img class="img-responsive" src="${WEB_ASSET_GAME}${this.img}"></div>`;
            }
            list_1 += `         </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </li>`;
        } else {
            list_2 += `<li class="x1">
                                <div class="topWinHolder">
                                    <div class="topWinContainer">
                                        <div class="topWinDetails">
                                            <div class="lb-1">${this.user}</div>
                                            <div class="lb-2">${this.currency} ${toFixeds(this.amount,2)}<span class="lb-3">${this.time}</span></div>
                                        </div>
                                        <div class="topWinImg">`;
            if (this.img == null) {
                list_2 += `<div class="image"><img class="img-responsive" src="${WEB_ASSET_GAME}no-image.jpg"></div>`;
            } else if (this.img.substring(0, 4) == "http") {
                list_2 += `<div class="image"><img class="img-responsive" src="${this.img}"></div>`;
            } else {
                list_2 += `<div class="image"><img class="img-responsive" src="${WEB_ASSET_GAME}${this.img}"></div>`;
            }
            list_2 += `         </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </li>`;
        }
    });
    if (list_1 != "") {
        $(".top-player .tick-1 ul").html(list_1);
        if (window.matchMedia("(max-width: 1300px)").matches) {
            $(".top-player-holder:nth-child(2)").css("opacity", "0").css("position", "absolute");
            $('.top-player .tick-1').vTicker({
                speed: 400,
                showItems: 2,
            });
        } else {
            $(".top-player-holder:nth-child(2)").css("opacity", "1").css("position", "");
            $('.top-player .tick-1').vTicker({
                speed: 400,
                showItems: 3,
            });
        }
        $(window).resize(async function () {
            if (window.matchMedia("(max-width: 1300px)").matches) {
                $('.top-player .tick-1').vTicker({
                    speed: 400,
                    showItems: 2,
                });
            } else {
                $('.top-player .tick-1').vTicker({
                    speed: 400,
                    showItems: 3,
                });
            }
        });
    }
    if (list_2 != "") {
        $(".top-player .tick-2 ul").html(list_2);
        if (window.matchMedia("(max-width: 1300px)").matches) {
            $(".top-player-holder:nth-child(2)").css("opacity", "0").css("position", "absolute");
            $('.top-player .tick-2').vTicker({
                speed: 400,
                showItems: 2,
            });
        } else {
            $(".top-player-holder:nth-child(2)").css("opacity", "1").css("position", "");
            $('.top-player .tick-2').vTicker({
                speed: 400,
                showItems: 3,
            });
        }
        $(window).resize(async function () {
            if (window.matchMedia("(max-width: 1300px)").matches) {
                $(".top-player-holder:nth-child(2)").css("opacity", "0").css("position", "absolute");
                $('.top-player .tick-2').vTicker({
                    speed: 400,
                    showItems: 2,
                });
            } else {
                $(".top-player-holder:nth-child(2)").css("opacity", "1").css("position", "");
                $('.top-player .tick-2').vTicker({
                    speed: 400,
                    showItems: 3,
                });
            }
        });
    } else {
        $(".top-player-holder:nth-child(2)").remove();
        $(".top-player-holder:first-child").css('border-top-right-radius', '10px');
        $(".top-player-holder:first-child").css('border-bottom-right-radius', '10px')
    }
}
async function loadAutoTransfer(data) {
    if (data == 1) {
        $('.wt-switch .wt-checkbox').attr('checked', 'checked');
    }
}
async function initializeIntegrationMenu() {
    var integraionHtmlContent = `<div class="integration-menu">
            <div class="integration-menu-inner-content">
                <div class="integration-menu-items">
                    <div class="side-menu-calendar-btn pointer dispRealNone">
                        <img src="${WEB_ASSET_WEB}/reward/mission.png" alt="reward">
                    </div>
                    <div class="side-menu-vip-btn pointer dispRealNone">
                        <img src="${WEB_ASSET_WEB}/reward/vip.png" alt="reward">
                    </div>
                    <div class="sidebar-lucky-spin-btn pointer dispRealNone">                               
                        <img src="${WEB_ASSET_WEB}/reward/lucky-spin.png" alt="reward">
                    </div>
                    <div class="side-angpow-btn pointer hide">                               
                        <img src="${WEB_ASSET_WEB}/reward/angpow.png" alt="reward">
                    </div>
                    <div class="side-menu-tournament-btn pointer hide" onclick="window.location.href='/${appLink}/leaderboard'">
                        <img src="${WEB_ASSET_WEB}/reward/leaderboard.png" alt="reward">
                    </div>
                    <!--<div class="side-predictor-btn pointer"">                               
                        <lottie-player class="menu" src="${WEB_ASSET_WEB}/prediction/predictor_side_logo.json" background="transparent" speed="1" loop="" autoplay=""></lottie-player>
                    </div>-->
                </div>
                <div class="integration-menu-toggle-arrow-button pointer">
                    <i class="fa-solid fa-sort-down"></i>
                </div>
            </div>
        </div>`
    $(".pg-home").append(integraionHtmlContent);
    $('.integration-menu').css('left', '-57px');
    if (window.matchMedia("(max-width: 800px)").matches) {
        $(".integration-menu").removeClass('active');
    } else {
        $(".integration-menu").addClass('active');
    }
    $(document).on('click', '.closeAngpowFloat', function (event) {
        $(`.angpowFloat-holder`).remove();
        sessionStorage.setItem('side_angpow', 'hide');
    });
    $(document).on('click', '.side-predictor-btn', function (event) {
        window.location.href = '/' + appLink + '/predictor';
    });
    $(document).on('click', '.side-angpow-btn', function (event) {
        window.location.href = '/' + appLink + '/angpow';
    });
}
async function getSpinSetting(data) {
    if (data.top_icon == 1) {
        $(".lucky-spin-btn").removeClass('dispRealNone');
    } else {
        $(".lucky-spin-btn").addClass('dispRealNone');
    }
    if (data.left_icon == 1) {
        $(".sidebar-lucky-spin-btn").removeClass('dispRealNone');
    } else {
        $(".sidebar-lucky-spin-btn").addClass('dispRealNone');
    }
    $('.lucky-spin-btn,.sidebar-lucky-spin-btn').click(function () {
        location.href = `/${appLink}/lucky-spin`;
    });
}
async function getTournamentSetting(data) {
    if (typeof data.deposit !== 'undefined' || typeof data.turnover !== 'undefined') {
        tourData = data;
    } else {}
}
async function getTournamentDisplaySetting(data) {
    if (data.left_icon == 1) {
        $(".side-menu-tournament-btn").removeClass('hide');
    } else {
        $(".side-menu-tournament-btn").addClass('hide');
    }
    if (data.top_icon == 1) {
        $('.tournament-menu').removeClass('hide');
    } else {
        $('.tournament-menu').addClass('hide');
    }
}
async function uploadImageS3(elem) {
    return new Promise(async (resolve, reject) => {
        var img = $(elem)[0].files[0];
        if (img == "undefined" || img == "" || img == null || img == "null") {
            return resolve({
                status: true,
                msg: "success",
                url: ""
            });
        }
        var random_string = randomString(10, '#aA');
        var file_ext = img.name.split('.').pop();
        var param = {
            file_name: Date.now() + "_" + random_string + "." + file_ext,
            file_type: img.type
        };
        var d = await doPost('/get-s3-token', param);
        if (!d.status) {
            return resolve({
                status: d.status,
                msg: d.msg
            });
        }
        var img_up = "";
        if (file_ext.toLowerCase() != "pdf") {
            var comp_img = await compressImage(elem);
            img_up = comp_img.url;
        } else {
            img_up = img;
        }
        var u = d.data;
        var accessKey = u.AccessKeyId;
        var secretKey = u.SecretAccessKey;
        var bucketName = u.bucket;
        var bucketToken = u.SessionToken;
        var s3FileType = u.contentType;
        var s3Region = u.region;
        var s3Path = u.filepath;
        var file = img_up;
        AWS.config.httpOptions.timeout = 1200000;
        var params = {
            apiVersion: '2006-03-01',
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            sessionToken: bucketToken,
            region: s3Region,
            Body: file,
            Key: s3Path,
            Bucket: bucketName,
            ContentType: s3FileType
        };
        var options = {
            partSize: 5 * 1024 * 1024,
            queueSize: 1
        };
        var s3 = new AWS.S3(params);
        s3.upload(params, options, function (err, response) {
            if (err) {
                alert(err, err.stack);
            } else {
                console.log("Done");
                return resolve({
                    status: true,
                    msg: "success",
                    url: s3Path
                });
            }
        }).on('httpUploadProgress', function (progress) {
            var xx = Math.floor(progress.loaded / progress.total * 100);
            $(".respprogress").html(xx + "% - Uploading ");
            console.log(xx + "%");
            if (xx == 100) {}
        });
    });
}

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1)
        mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1)
        mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1)
        mask += '0123456789';
    if (chars.indexOf('!') > -1)
        mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i)
        result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}
async function compressImage(file) {
    return new Promise(async (resolve, reject) => {
        const imageFile = $(file)[0].files[0];
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1000,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            return resolve({
                status: true,
                msg: "success",
                url: compressedFile
            });
        } catch (error) {
            return resolve({
                status: false,
                msg: error,
                url: ""
            });
            return error;
        }
    });
}

function loader(toggle) {
    if (toggle == "show") {
        $(".ajaxLoader").show();
    } else if (toggle == "hide") {
        $(".ajaxLoader").fadeOut();
    }
}

function isMobileSafari() {
    var ua = navigator.userAgent.toLowerCase();
    var isSafari = false;
    try {
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || safari.pushNotification);
    } catch (err) {}
    isSafari = (isSafari || ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome') != -1) && (ua.indexOf('version/') != -1))));
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && isSafari) {
        return true;
    } else {
        return false;
    }
}

function isMobileChrome() {
    var ua = navigator.userAgent.toLowerCase();
    var isChrome = false;
    isChrome = (ua.indexOf('crios') != -1 || ua.indexOf('chrome') != -1);
    if (isChrome) {
        return true;
    } else {
        return false;
    }
}

function fnBrowserDetect() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let browserName = false;
    if (userAgent.includes("wv") || userAgent.includes("Mobile Chrome/") || userAgent.includes("Mobile Safari/") || userAgent.match(/messenger|facebook|line|twitter|wechat|miui|instagram|gsa|telegram\//i)) {
        browserName = true;
    }
    return browserName;
}

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
async function loginPT(paramUsername, paramPassword) {
    var defaultLanguage = "EN";
    var realMode = 1;
    iapiSetClientPlatform("mobile&deliveryPlatform=HTML5");
    iapiLogin(paramUsername, paramPassword, realMode, defaultLanguage);
}

function calloutLogin(response) {
    if (response.errorCode || sessionStorage.getItem("temptoken")) {} else {
        iapiRequestTemporaryToken(1, 424, "GamePlay");
    }
}
async function calloutGetTemporaryAuthenticationToken(response) {
    if (response.errorCode) {
        alert("Token failed. " + response.playerMessage + " Error code: " + response.errorCode);
    } else {
        await launchMobileClient(response.sessionToken.sessionToken);
    }
}
async function launchMobileClient(temptoken) {
    sessionStorage.setItem("temptoken", temptoken);
    playTechTempToken = temptoken;
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$('#forgot_username').keypress(function (e) {
    if (e.which == 13) {
        $('#btnReqTacForgotPass').click();
        return false;
    }
});
async function getDiaryMission(data) {
    if (!data) {
        return;
    }
    if (typeof data !== "undefined" && data) {
        $('.mission-main .input-box-option').removeClass("active");
        if (data.dailysetting == "1") {
            $(".mission-main .input-box-option[data-type='daily']").removeClass("hide");
        } else {
            $(".mission-main .input-box-option[data-type='daily']").addClass("hide");
        }
        if (data.accumulativesetting == "1") {
            $(".mission-main .input-box-option[data-type='accumulative']").removeClass("hide");
        } else {
            $(".mission-main .input-box-option[data-type='accumulative']").addClass("hide");
        }
        if (data.periodsetting == "1") {
            $(".mission-main .input-box-option[data-type='period']").removeClass("hide");
        } else {
            $(".mission-main .input-box-option[data-type='period']").addClass("hide");
        }
        $('.mission-main .input-box-option').not('.hide').first().addClass("active");
        if (data.menusetting == "0") {
            $(".btn-daily-sign-in-reward-mob").addClass("dispRealNone");
            $(".btn-mission-quest-mob").addClass("dispRealNone");
            $(".topNavBar-link .side-menu-calendar-btn,.dashboard-calendar-btn").remove();
        } else if (data.menusetting == "1") {
            $(".btn-daily-sign-in-reward-mob").removeClass("dispRealNone");
            $(".btn-mission-quest-mob").removeClass("dispRealNone");
        } else if (data.menusetting == "2") {
            $(".side-menu-calendar-btn,.dashboard-calendar-btn").removeClass("dispRealNone");
        } else if (data.menusetting == "3") {
            $(".btn-daily-sign-in-reward-mob").removeClass("dispRealNone");
            $(".btn-mission-quest-mob").removeClass("dispRealNone");
            $(".side-menu-calendar-btn,.dashboard-calendar-btn").removeClass("dispRealNone");
        }
        showContentType = data.contentsetting;
    }
}
$(document).on('click', '.btn-mission-quest, .btn-mission-quest-mob, .side-menu-calendar-btn', function (event) {
    event.preventDefault();
    $("#sidebar-menu").removeClass("active");
    if (appUser) {
        location.href = "/" + appLang + "-" + appCtry + "/dashboard/mission-diary";
    } else {
        popLogin();
    }
});
$(document).on('click', '.btn-daily-sign-in-reward, .btn-daily-sign-in-reward-mob', function (event) {
    event.preventDefault();
    $("#sidebar-menu").removeClass("active");
    if (!$("#claimDailyRewardModal").hasClass("fade")) {
        $("#claimDailyRewardModal").addClass("fade");
    }
    $("#claimDailyRewardModal").modal("show");
});
$(document).on('click', '.btn-daily-claim-now', async function (event) {
    event.preventDefault();
    $("#sidebar-menu").removeClass("active");
    if (showContentType == "2") {
        const dateTimeNow = new Date();
        var currentYear = dateTimeNow.getFullYear();
        var currentMonth = dateTimeNow.getMonth();
        await getUserCheckInList(currentYear, currentMonth);
        $("#claimDailyRewardModal").removeClass("fade").modal("hide");
        $("#checkInModal").modal("show");
    } else if (showContentType == "1") {
        location.href = "/" + appLang + "-" + appCtry + "/attendent-promotion";
    }
});
$(document).on('click', '.calendar-option, .term-and-conditon-option', function (event) {
    event.preventDefault();
    $(".calendar-modal-tab-options div").removeClass("active");
    $(this).addClass("active");
    if (this.id == "calendar-option") {
        $(".modal-calendar-content").removeClass("dispNone");
        $(".modal-terms-and-condition-content").addClass("dispNone");
    } else {
        $(".modal-calendar-content").addClass("dispNone");
        $(".modal-terms-and-condition-content").removeClass("dispNone");
    }
});
$(document).on('click', '.btn-redeem-now', function (event) {
    event.preventDefault();
    var promoCode = $('.promo-code').data('promo');
    var rewardFixed = $('.promo-code').data('reward-fixed');
    location.href = "/" + appLang + "-" + appCtry + "/transfer?promoCode=" + promoCode + "&rewardFixed=" + rewardFixed;
});
$(document).on('click', '.login-text-link, .btn-daily-claim-login-to-continue', function (event) {
    event.preventDefault();
    $("#claimDailyRewardModal").modal("show");
    popLogin();
});
$(document).on("click", "#left-arrow-button, #right-arrow-button", async function () {
    var selectedMonth = $('.month-year-text').attr('data-month');
    var selectedYear = $('.month-year-text').attr('data-year');
    if (selectedMonth != undefined && selectedYear != undefined) {
        if (selectedMonth == 12 && this.id == "right-arrow-button") {
            selectedMonth = 0;
            selectedYear = parseInt(selectedYear) + 1;
        } else if (selectedMonth == 1 && this.id == "left-arrow-button") {
            selectedMonth = 13;
            selectedYear = parseInt(selectedYear) - 1;
        }
        if (this.id == "left-arrow-button") {
            await getUserCheckInList(selectedYear, (selectedMonth - 1));
        } else if (this.id == "right-arrow-button") {
            await getUserCheckInList(selectedYear, parseInt(selectedMonth) + 1);
        }
    }
});
$(document).on("click", ".calendar-check-in-date", function () {});
$(document).on('click', '.mission-quest-btn', function (event) {
    event.preventDefault();
    location.href = "/" + appLang + "-" + appCtry + "/mission-quests";
});
$(document).on('click', '.history-btn', function (event) {
    event.preventDefault();
    location.href = "/" + appLang + "-" + appCtry + "/reward-redemption";
});
$(document).on('click', '.showRightRemainder', async function (event) {
    if ($('.remainder-switch input.wt-checkbox').is(":checked")) {
        await updateUserRemainderSetting(0);
    } else {
        await updateUserRemainderSetting(1);
    }
});
$(document).on('click', '.check-in-btn, .check-in-btn-modal', async function (event) {
    popUpCount++;
    event.preventDefault();
    $(".ajaxLoader").show();
    var param = {
        "date": moment().format("YYYY-MM-DD"),
    }
    var d = await doPost('/user-check-in', param);
    checkToken(d);
    $(".ajaxLoader").fadeOut();
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
    if (typeof d.data !== "undefined" && d.data) {
        checkinDaily = true;
        var checkInsound = document.getElementById("checkInAudio");
        checkInsound.loop = false;
        checkInsound.play();
        if (d.data.is_redeem) {
            $(".claim-btn-container").removeClass("dispRealNone");
            $(".promo-code-expired-date").removeClass("dispRealNone");
            $(".promo-code").removeClass("dispRealNone");
            $(".promo-expired-date").html(d.data.expired_date);
            $(".promo-code span").html(d.data.special_code);
            $('.promo-code').data('promo', d.data.special_code);
            $('.promo-code').data('reward-fixed', d.data.reward_fixed);
        } else {
            $(".claim-btn-container").addClass("dispRealNone");
            $(".promo-code-expired-date").addClass("dispRealNone");
            $(".promo-code").addClass("dispRealNone");
        }
        $(".reward-won-title-text").html(lang.claim_successful);
        $(".bonus-won").html(d.data.reward);
        $('#checkInModal').modal('hide');
        $("#rewardWonModal").modal("show");
    }
});
async function getUserCheckInList(currentYear, currentMonth) {
    missionCurrentMonth = currentMonth;
    var param = {
        "month": missionCurrentMonth.toString().length === 1 ? "0" + (missionCurrentMonth) : missionCurrentMonth,
        "year": currentYear
    }
    var d = await doPost('/get-user-check-in-list', param);
    checkToken(d);
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
    if (typeof d.data !== "undefined") {
        initializeCalender(false, currentMonth, currentYear, d.data.data);
        $('.mission-continuous-login span').html(d.data.checkin_day);
        await loopMissionDate(d.data);
    }
}
async function loopMissionDate(data) {
    if (typeof data !== "undefined") {
        var dateItem = "";
        if (data.data.length) {
            $(data.data).each(function (i) {
                var todayDate = dateTimeNow.getDate();
                if (i + 1 == todayDate && this.checked) {
                    $('.daily-image-container').removeClass('mission-today-before-check');
                }
                if (this.checked) {
                    dateItem += `<div class="check-in-indicator-icon mission-calendar-checked-in">
                                        <img src="${WEB_ASSET_WEB}icon/icon-mission-tick.svg">
                                    </div>`
                    $(`.day-content[data-date="${(i+1).toString().length===1?"0"+(i+1):i+1}-${missionCurrentMonth.toString().length===1?"0"+missionCurrentMonth:missionCurrentMonth}"]`).addClass('checked');
                } else {
                    dateItem += `<div class="check-in-indicator-icon mission-calendar-missed">
                                        <img src="${WEB_ASSET_WEB}icon/icon-mission-cross.svg">
                                    </div>`
                }
                $(`.day-content[data-date="${(i+1).toString().length===1?"0"+(i+1):i+1}-${missionCurrentMonth.toString().length===1?"0"+missionCurrentMonth:missionCurrentMonth}"] .daily-image-container`).html(dateItem);
                dateItem = "";
            });
        }
        var specialOccassionMarking = "";
        if (data.birthday !== "") {
            specialOccassionMarking += `<div class="mission-special-occassion">
                                                    <img src="${WEB_ASSET_WEB}icon/icon-birthday.svg">
                                                </div>`
            $(`.day-content[data-date="${data.birthday}"] .daily-image-container`).append(specialOccassionMarking);
            specialOccassionMarking = "";
        }
        if (data.vip_holiday && data.vip_holiday.length) {
            $(data.vip_holiday).each(function (i) {
                specialOccassionMarking += `<div class="mission-special-occassion">
                                                    <img src="${WEB_ASSET_WEB}icon/icon-mission-star-holidays.svg">
                                                </div>`
                $(`.day-content[data-date="${this}"] .daily-image-container`).append(specialOccassionMarking);
                specialOccassionMarking = "";
            });
        }
    }
}
async function updateUserRemainderSetting(isEnableRemainder) {
    $(".ajaxLoader").show();
    var param = {
        "status": isEnableRemainder,
    }
    var d = await doPost('/update-user-remainder-setting', param);
    checkToken(d);
    $(".ajaxLoader").fadeOut();
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
    setTimeout(function () {
        location.reload();
    }, 3000);
}

function initializeCalender(isFirstLoad, monthData = 0, yearData = 0) {
    var header = [lang.sun, lang.mon, lang.tue, lang.wed, lang.thu, lang.fri, lang.sat];
    var tableHeader = "";
    $(header).each(function (i) {
        tableHeader += ` <th class="calender-day-header"><span>${this}</span></th>`;
    })
    $(".calender-header-title").html(tableHeader);
    const todayDate = new Date();
    if (monthData == 0) {
        monthData = todayDate.getMonth() + 1;
    }
    if (yearData == 0) {
        yearData = todayDate.getFullYear()
    }
    var todayDateFallOn = todayDate.getDate();
    var currentaMonth = todayDate.getMonth();
    var year = isFirstLoad ? todayDate.getFullYear() : yearData;
    var month = isFirstLoad ? todayDate.getMonth() : monthData;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const multiLangMonth = [lang.january, lang.february, lang.march, lang.april, lang.may, lang.june, lang.july, lang.august, lang.september, lang.october, lang.november, lang.december];
    var firstDayOfTheMonthCount = new Date(`${monthNames[month-1]} 1, ${year}`);
    var firstDayStarting = firstDayOfTheMonthCount.getDay();
    var currentMonthTotalDay = daysInMonth(month, year)
    var fixedThisMonth = todayDate.getMonth() + 1;
    $('.month-year-text').attr('data-year', year);
    $('.month-year-text').attr('data-month', month);
    var newMonth = month.toString().length === 1 ? "0" + month : month;
    $(".month-year-text").html(year + "/" + newMonth);
    if (currentaMonth + 1 == month) {
        $('.right-arrow-button').addClass('disabled').prop("disabled", true)
    } else {
        $('.right-arrow-button').removeClass('disabled').prop("disabled", false)
    }
    var isStartAgain = true;
    var tableContent = "";
    for (let i = 1; i <= (currentMonthTotalDay + firstDayStarting); i++) {
        if (isStartAgain) {
            tableContent += `<tr class="calender-day-row">`;
            isStartAgain = false;
        }
        var dayCount = firstDayStarting == 0 ? i : i - firstDayStarting;
        tableContent += `<td class="day-content" data-date="${dayCount.toString().length===1?"0"+dayCount:dayCount}-${month.toString().length===1?"0"+month:month}">`
        if ((i - 1) >= firstDayStarting) {
            tableContent += `<span>${month}/${dayCount}</span>
                                <div class="daily-image-container ${dayCount==todayDateFallOn&&monthData==fixedThisMonth?"mission-today-before-check":""}">`;
            if (dayCount == todayDateFallOn && monthData == fixedThisMonth) {
                tableContent += `<img class="pulsate" src="${WEB_ASSET_WEB}icon/icon-mission-today.svg"></img>`
            } else {
                tableContent += `<img src="${WEB_ASSET_WEB}icon/icon-mission-diamond.svg"></img>`
            }
            tableContent += `</div>`;
        }
        tableContent += `</td>`
        if (i % 7 === 0 || i == (currentMonthTotalDay + firstDayStarting)) {
            tableContent += `</tr>`;
            isStartAgain = true;
        }
    }
    $(".mission-calendar").html(tableContent);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}
$(document).on("click", ".side-menu-vip-btn", function () {
    location.href = "/" + appLang + "-" + appCtry + "/vip";
});
async function getVipSetting(data) {
    $(".vip-menu-btn").addClass("hide");
    $(".side-menu-vip-btn").addClass("dispRealNone");
    $('.vip-menu').addClass('hide');
    $(".vip-menu-btn-mb").addClass("hide");
    if (typeof data.display_member_site_menu !== "undefined" && data.display_member_site_menu == "1") {
        $(".vip-menu-btn").removeClass("hide");
        $(".rewardBar").removeClass("dispRealNone");
    } else {
        $(".vip-menu-btn").addClass("hide");
    }
    if (typeof data.display_sidebar !== "undefined" && data.display_sidebar == "1") {
        $(".side-menu-vip-btn").removeClass("dispRealNone");
    }
    if (typeof data.display_vip_profile !== "undefined" && data.display_vip_profile == "1") {
        $('.vip-menu').removeClass('hide');
        $(".vip-menu-btn-mb").removeClass("hide");
    }
}
$(document).on('click', '.integration-menu-toggle-arrow-button', function (event) {
    event.preventDefault();
    var isIntegrationMenuItemCount = $('.integration-menu-items div').not(".dispRealNone").length;
    if (isIntegrationMenuItemCount == 0) {
        return;
    }
    $(".integration-menu").toggleClass('active');
    $(`.side-predictor-container`).toggleClass('active');
});
async function getLocalCache(name, callCache = null) {
    if (localStorage.getItem(name)) {
        var storage = localStorage.getItem(name);
        var storage = Decrypt(storage);
        var storage = $.parseJSON(storage);
        if (callCache)
            await callCache(storage);
    }
}
async function checkLocalStorage(name, data, callFunc = null, calling = true) {
    if (localStorage.getItem(name)) {
        var storage = localStorage.getItem(name);
        var storage = Decrypt(storage);
        var storage = $.parseJSON(storage);
        if (JSON.stringify(data) != JSON.stringify(storage)) {
            localStorage.removeItem(name);
            localStorage.setItem(name, Encrypt(JSON.stringify(data)));
            if (callFunc)
                await callFunc(data);
        } else {
            if (callFunc && calling)
                await callFunc(storage);
        }
    } else {
        localStorage.setItem(name, Encrypt(JSON.stringify(data)));
        if (callFunc)
            await callFunc(data);
    }
}
async function getSessionCache(name, callCache = null) {
    if (sessionStorage.getItem(name)) {
        var storage = sessionStorage.getItem(name);
        var storage = Decrypt(storage);
        var storage = $.parseJSON(storage);
        if (callCache)
            await callCache(storage);
    }
}
async function checkSessionStorage(name, data, callFunc = null, calling = true) {
    if (sessionStorage.getItem(name)) {
        var storage = sessionStorage.getItem(name);
        var storage = Decrypt(storage);
        var storage = $.parseJSON(storage);
        if (JSON.stringify(data) != JSON.stringify(storage)) {
            sessionStorage.removeItem(name);
            sessionStorage.setItem(name, Encrypt(JSON.stringify(data)));
            if (callFunc)
                await callFunc(data);
        } else {
            if (callFunc && calling)
                await callFunc(storage);
        }
    } else {
        sessionStorage.setItem(name, Encrypt(JSON.stringify(data)));
        if (callFunc)
            await callFunc(data);
    }
}

function Encrypt(str) {
    if (!str) str = "";
    str = (str == "undefined" || str == "null") ? "" : str;
    try {
        var key = 146;
        var pos = 0;
        ostr = '';
        while (pos < str.length) {
            ostr = ostr + String.fromCharCode(str.charCodeAt(pos) ^ key);
            pos += 1;
        }
        return ostr;
    } catch (ex) {
        return '';
    }
}

function Decrypt(str) {
    if (!str) str = "";
    str = (str == "undefined" || str == "null") ? "" : str;
    try {
        var key = 146;
        var pos = 0;
        ostr = '';
        while (pos < str.length) {
            ostr = ostr + String.fromCharCode(key ^ str.charCodeAt(pos));
            pos += 1;
        }
        return ostr;
    } catch (ex) {
        return '';
    }
}
$(document).on('click', '.register-claim-now-btn', async function (event) {
    popUpCount++;
    event.preventDefault();
    $(".ajaxLoader").show();
    var param = {
        "category": 'accumative',
        "diary_id": $('.register-claim-now-btn').data('registerdiaryid')
    }
    var d = await doPost('/claim-user-diary-mission', param);
    checkToken(d);
    $(".ajaxLoader").fadeOut();
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
    $("#registerRewardModal").modal("hide");
    $("#registerClaimSuccessfulRewardModal").modal("show");
});
$(document).on('click', '.register-reward-modal-close-btn', async function (event) {
    event.preventDefault();
    var registerId = $('.register-reward-modal-close-btn').data('registerid');
    if (registerId) {
        await blockRegisterRewardOrCheckInModal(registerId);
    }
});
$(document).on('click', '.check-in-modal-close-btn', async function (event) {
    event.preventDefault();
    var dailyId = $('.check-in-modal-close-btn').data('dailyid');
    if (dailyId) {
        await blockRegisterRewardOrCheckInModal(dailyId);
    }
});
async function blockRegisterRewardOrCheckInModal(id) {
    var param = {
        "id": id
    }
    var d = await doPost('/block-register-or-check-in-ann', param);
    checkToken(d);
    if (!d.status) {
        resp_pop(d.msg);
        return;
    }
}

function showRegisterRewardClaimModal(register_diary_id, register_id) {
    $('.register-claim-now-btn').data('registerdiaryid', register_diary_id);
    $('.register-reward-modal-close-btn').data('registerid', register_id);
    $("#registerRewardModal").modal("show");
}
async function showCheckInCalendarModal(daily_id) {
    var currentYear = dateTimeNow.getFullYear();
    var currentMonth = dateTimeNow.getMonth();
    $('.check-in-modal-close-btn').data('dailyid', daily_id);
    await getUserCheckInList(currentYear, currentMonth + 1);
    $("#checkInModal").modal("show");
}
$("#registerRewardModal, #registerClaimSuccessfulRewardModal").on('hide.bs.modal', async function () {
    popUpCount--;
    if (announcementPopOutData.diary.daily_pop == "1" && (popUpCount == 1)) {
        showCheckInCalendarModal(announcementPopOutData.diary.daily_id);
    }
    await showAnnouncementCondition();
});
$("#checkInModal, #rewardWonModal").on('hide.bs.modal', async function () {
    popUpCount--;
    await showAnnouncementCondition();
});

function annPopModal() {
    if (!statusShowAnn) {
        return
    }
    if (typeof announcementPopOutData.advertisement !== "undefined") {
        loadAdvertisement(announcementPopOutData.advertisement);
    }
    if (((typeof announcementPopOutData.advertisement !== "undefined" && announcementPopOutData.advertisement.length > 0 && announcePop) || announcePop) && typeof $.cookie('ann') == 'undefined') {
        $("#newsTickerModal").modal('show');
    }
}
async function rewardModalCondition(missionDiaryPg = false) {
    for (const [key, value] of Object.entries(announcementPopOutData.diary)) {
        if (key == "register_pop" && value == "1" || key == "daily_pop" && value == "1") {
            popUpCount++;
        }
    }
    if (announcementPopOutData.diary.register_pop == "1") {
        showRegisterRewardClaimModal(announcementPopOutData.diary.register_diary_id, announcementPopOutData.diary.register_id);
    } else if (announcementPopOutData.diary.daily_pop == "1") {
        showCheckInCalendarModal(announcementPopOutData.diary.daily_id);
    }
}
async function showAnnouncementCondition(missionDiaryPg) {
    if (!missionDiaryPg && popUpCount == 0) {
        if (inUserDashboard) {
            await loadNewsTicker(announcementPopOutData.announce, announcementPopOutData.style);
        } else {
            annPopModal();
        }
    }
}
async function allowScrollable(divClass) {
    var x, left, down;
    $(divClass).mousedown(function (e) {
        e.preventDefault();
        down = true;
        x = e.pageX;
        left = $(this).scrollLeft();
    });
    $(divClass).mousemove(function (e) {
        if (down) {
            var newX = e.pageX;
            $(divClass).scrollLeft(left - newX + x);
        }
    });
    $(divClass).mouseup(function (e) {
        down = false;
    });
}
async function loadSideWallet(data) {
    $(data).each(function () {
        $(`.${this.name.toLowerCase()}-wallet`).html(`<h5>${userCurrency}</h5> <h4>${convToPri(this.balance)}</h4>`);
    });
}

function triggerDatepicker() {
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-180:+0"
    });
}

function pagination(number, callback = null) {
    var pageCount = number;
    if (pageCount > 1) {
        $('.pagination').removeClass("hide");
        $('.pagination').pagination({
            items: pageCount,
            itemOnPage: 10,
            currentPage: pageNo,
            hrefTextPrefix: (browserFF == true ? 'javascript:()' : 'javascript:void(0);'),
            hrefTextSuffix: '',
            cssStyle: '',
            prevText: '<span aria-hidden="true">&lt;</span>',
            nextText: '<span aria-hidden="true">&gt;</span>',
            onPageClick: function (page, evt) {
                $(".pagination li a").css("opacity", "0.5").addClass("disabled").attr("disabled", true);
                $(".pagination li").css("opacity", "0.5").addClass("disabled").attr("disabled", true);
                pageNo = $('.pagination').pagination('getCurrentPage');
                if (callback) {
                    callback();
                    return;
                }
            }
        });
    } else {
        $('.pagination').addClass("hide");
    }
}

function paginationMember(elem, number, page, callback) {
    var pageCount = number;
    if (pageCount > 1) {
        $(elem).removeClass("hide-i");
        $(elem).pagination({
            items: pageCount,
            itemOnPage: 10,
            currentPage: page,
            hrefTextPrefix: (browserFF == true ? 'javascript:()' : 'javascript:void(0);'),
            hrefTextSuffix: '',
            cssStyle: 'dark-theme',
            prevText: '<span aria-hidden="true">&laquo;</span>',
            nextText: '<span aria-hidden="true">&raquo;</span>',
            onPageClick: function (page, evt) {
                $(elem + " li a").css("opacity", "0.5").addClass("disabled").attr("disabled", true);
                $(elem + " li").css("opacity", "0.5").addClass("disabled").attr("disabled", true);
                page = $(elem).pagination('getCurrentPage');
                callback(page);
            }
        });
    } else {
        $(elem).addClass("hide-i");
    }
}

function getTruncateValue(inputValue) {
    var valueReturn = 0;
    var splittedValue = inputValue.split('.');
    var decimalValue = splittedValue.length > 1 ? "." + splittedValue[1].substring(0, 2) : "";
    valueReturn = parseFloat(splittedValue[0] + decimalValue).toFixed(2);
    return valueReturn;
}
async function allowDraggable(className) {
    $("." + className).draggable({
        containment: "window"
    });
    var isMoving = false;
    var isdragging = false;
    var lastY = '';
    var lastX = '';
    var mainWidth = '';
    var mainHeight = '';
    $("." + className).mousedown(function () {
        isdragging = false;
    });
    $("." + className).mousemove(function () {
        isdragging = true;
        $(this).css("transition", "all 0s");
    });
    $("." + className).mouseup(function (e) {
        e.preventDefault();
        lastY = window.event.clientY;
        lastX = window.event.clientX;
        $(this).css('transition', "all 0.5s")
        mainWidth = $('body').innerWidth();
        mainHeight = $(window).height();
        if (isdragging) {
            if (lastX > (mainWidth / 2)) {
                $(this).css("top", (lastY - 50)).css("right", "5px").css("left", (mainWidth - 105) + "px");
                $(this).addClass("right").removeClass("left");
            } else {
                $(this).css("top", (lastY - 50)).css("left", "5px").css('right', "unset");
                $(this).addClass('left').removeClass("right");
            }
        }
        $(window).resize(function () {
            $("." + className).css('left', 'unset');
        });
    });
    $("." + className).on('touchend', function () {
        isdragging = false;
        if (lastX > (mainWidth / 2)) {
            $(this).css("top", (lastY - 50)).css('right', '5px').css("left", (mainWidth - 105) + "px");
            if ((lastY + 180) > mainHeight) {
                $(this).css("top", 'unset').css('right', '5px').css("left", (mainWidth - 105) + "px").css('bottom', '50px');
            } else if ((lastY - 180 < 0)) {
                $(this).css("top", '150px').css('right', '5px').css("left", (mainWidth - 105) + "px").css('bottom', 'unset');
            }
        } else {
            $(this).css('left', '5px').css('right', "unset");
            if ((lastY + 150) > mainHeight && (lastY - 150 > 0)) {
                $(this).css("top", 'unset').css('left', '5px').css('bottom', '70px');
            } else if (lastY != "" && (lastY - 150) < 0) {
                $(this).css("top", '150px').css('left', '5px').css('bottom', 'unset');
            }
        }
    });
    $("." + className).on('touchstart', function () {
        isdragging = true;
        $(this).css("transition", "all 0s");
    });
    $("." + className).on('touchmove', function (e) {
        e.preventDefault();
        lastY = e.touches[0].clientY;
        lastX = e.touches[0].clientX;
        $(this).css('transition', "all 0s")
        mainWidth = $('body').innerWidth();
        mainHeight = $('body').height();
        if (isdragging) {
            if (lastX > (mainWidth / 1.5)) {
                $(this).css("top", (lastY - 50)).css('right', (lastX)).css("left", (mainWidth - 105) + "px");
                $(this).addClass("right").removeClass("left");
            } else {
                $(this).css("top", (lastY - 50)).css('left', (lastX)).css('right', "unset");
                $(this).addClass('left').removeClass("right");
            }
        }
    });
}

function initLazy(div) {
    if (div) {
        div = div + " ";
    }
    $(div + '.lazy').lazyload({
        scrollDirection: 'both',
        effect: 'fadeIn',
        autoDestroy: true,
        visibleOnly: false,
        placeholder: WEB_ASSET_WEB + "no_image.png",
        afterLoad: function (element) {}
    })
}
async function claimModal() {
    $(`.tournament-load-content`).addClass('hide');
    $(`.tournament-reward-loader`).removeClass('hide');
    var d = await doPost('/get-tournament-reward');
    if (d.status == true) {
        $("#claimRewardTournamentModal").modal('show');
    }
    if (d.data.period_activity_point != "") {
        $("#claimRewardTourAcc").html(d.data.period_activity_point);
        $("#claimRewardTourPoint").html(d.data.total_activity_point);
    }
    if (d.data.period_fixed_reward != "") {
        if (d.data.period_wactivity_point != "") {
            $(`.tournament-content-space`).html("<br>");
        }
        $("#claimRewardTourDate").html(d.data.period_fixed_reward);
        $("#claimRewardTourAmount").html(d.data.total_fixed_reward);
        $("#claimRewardTourCurrency").html(d.data.currency);
    }
    $(`.tournament-load-content`).removeClass('hide');
    $(`.tournament-reward-loader`).addClass('hide');
}
async function claimTourNow() {
    loader("show");
    var param = {
        currency: userCurrency,
    }
    var d = await doPost('/claim-tournament-reward', param);
    if (!d.status) {
        loader("hide");
        resp_pop(d.status, d.msg);
        return;
    }
    location.reload();
}

function getBalClickHandle() {
    if (!getBalTimerCountStarted) {
        if (window.matchMedia("(max-width: 800px)").matches) {
            $(".mob-view-top-wallet .button-restoreBalance").click();
        } else {
            $(".desk-view-top-wallet .button-restoreBalance").click();
        }
        sessionStorage.setItem("getBalTimer", new Date());
        getBalTimerCount();
    }
}

function getBalTimerCount() {
    if (getBalTimerCountStarted) {
        return;
    }
    var storeGetBalTimer = sessionStorage.getItem("getBalTimer");
    if (storeGetBalTimer) {
        getBalTimerCountStarted = true;
        var minutesToAdd = 0.20;
        var countDownDate = new Date(storeGetBalTimer).getTime() + minutesToAdd * 60000;
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (seconds <= 0) {
                clearInterval(x);
                getBalTimerCountStarted = false;
            }
        }, 1000);
    }
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "windows"
    }
    if (/android/i.test(userAgent)) {
        return "android"
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }
    return "unknown";
}

function readHTMLFile(url, cont, type = null) {
    $.ajax({
        url: url,
        async: true,
        cache: false,
        success: function (data) {
            if (type) {
                $(`.${cont}[data-id=${type}]`).parent().removeClass('hide');
                $(`.${cont}[data-id=${type}]`).html(data);
            } else {
                $("." + cont).html(data);
            }
        },
        error: function () {
            if (type) {
                $(`.${cont}[data-id=${type}]`).parent().addClass('hide');
                $(`.${cont}[data-id=${type}]`).html(lang.no_records);
            } else {
                $("." + cont).html(noRecord);
            }
        }
    });
};