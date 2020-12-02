// JScript File

var init = function(){
    $("span.s-btn").click(function () {
        clickSearch();}); 
            
    $("a.next").click(function () {
        clickNext();});
        
    $("a.pre").click(function () {
        clickPre();});
    
    $("a#useful").click(function () {
        feedBack();
        var strInput = $("#query")[0].value;
        ctlog('', strInput , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi有用');
    });
    $("a#no-useful").click(function () {
        feedBack();
        var strInput = $("#query")[0].value;
        ctlog('', strInput , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi没用');
    });
    
    g_iCurSen = 0;
    g_iSenNum = 0;
    updateDataShow();
    
    aligning();
}

var g_aSentences;
var g_iSenNum;
var g_iCurSen;
var g_csData;

var clickSearch = function () {
    var strInput = $("#query")[0].value;
    if (strInput.length > 0) {
        if (g_csData != strInput) {
            ctlog('', strInput , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi输入内容');
        }
        g_csData = strInput;
        if (strInput == "") {
            g_iSenNum = 0;
            g_iCurSen = 0;
            init();
        }
        else {
            g_iSenNum = 1;
            g_iCurSen = 1;
            g_aSentences = new Array(1);
            g_aSentences[g_iCurSen] = strInput;
            getData(strInput);
            $("div#refer-sen").hide();
            //$("div#refer-sen .no-refer").show();
            $("div#puzzle-phrase").hide();
        }
        
        updateDataShow();
        ctlog('', strInput , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi查看例句');
    }
}

var clickNext = function () {
    if (g_iCurSen == g_iSenNum) {
        return;
    }
    g_iCurSen ++;
    getData(g_aSentences[g_iCurSen]);
    $("#query")[0].value = g_aSentences[g_iCurSen];
    g_csData = g_aSentences[g_iCurSen];
    updateDataShow();
    ctlog('', g_aSentences[g_iCurSen] , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi下一句');
    $("div#refer-sen").hide();
    //$("div#refer-sen .no-refer").show();
    $("div#puzzle-phrase").hide();
}

var clickPre = function () {
    if (g_iCurSen == 1) {
        return;
    }
    g_iCurSen --;
    getData(g_aSentences[g_iCurSen]);
    $("#query")[0].value = g_aSentences[g_iCurSen];
    g_csData = g_aSentences[g_iCurSen];
    updateDataShow();
    ctlog('', g_aSentences[g_iCurSen] , 0, 'deskdict.simi' , 1, 'CLICK',  'Simi上一句');
    $("div#refer-sen").hide();
    //$("div#refer-sen .no-refer").show();
    $("div#puzzle-phrase").hide();
}

var KeyDown = function () {
    clickSearch();
    return false;
}

var feedBack = function(){
    $('#feedback').fadeIn();
    setTimeout(function(){$('#feedback').fadeOut();},3000);
}


// 获取参数
function getParams( params ){
	var search = location.search, tp;
	if( search === '' ){ return; }
	search = search.slice(1).split('&');
	for( var i = 0, l = search.length; i < l; i++ ){
		tp = search[i].split('=');
		params[ tp[0] ] = decodeURIComponent( tp[1] ) || '';
	}
}

// jsonp 请求数据
function jSONP( url, params, callback ){
    
    //loadScript( url );
    // 载入script脚本
    function loadScript( src ){
        var head = document.getElementsByTagName('head')[0];
        
            var scriptList = head.getElementsByTagName('script');
            if (scriptList.length>0) {
                var script = scriptList[0];
                head.removeChild(script);
            }
            
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = src;
        head.insertBefore( newScript, head.firstChild );
    }
}

function showTip() {
    $('#actionTips').show();
}

function showNoNet() {
    //alert("hello");
    $('#actionTips').hide();
    $("div#refer-sen").hide();
    $("div#offline").show();
    g_iCurSen = 0;
    g_iSenNum = 0;
    updateDataShow();
}
    
function getData(strQuery) {
    //alert("helloget");
    $("div#offline").hide();
    try {
        if (g_aSentences[g_iCurSen] === strQuery) {
            window.external.getData(strQuery, g_iCurSen.toString());
        }
        
    }
    catch (err){
        var url = 'http://simisent.youdao.com/search?',
        param = {q : strQuery, doctype : 'json'},
        paramFixed = '';
        
        getParams(param);
        
        var search = [],
        encode = encodeURIComponent,
        funName;
        // 序列化参数
        for( var p in param ){
            search.push( p + '=' + encode( param[p] ) );
        }
        // 开始载入
        url = url + paramFixed;
        url = url + ( /\?/.test(url) ? '&' : '?' ) + search.join('&');
        url = url + ('&callback=?');
       
        $.getJSON(url, function (json) {
            showData(json);
        });
    }
}

function showData(data) {
    window.scrollTo(0,0);
    $('#actionTips').hide();
    $("div#refer-sen").show();
    var multihtml, senthtml;
    var bHasContent = 0;
    try {
        if (data.multiwords.length > 0) {
            multihtml = '<h3><span class=\"tab-current\"><span>疑难词组</span></span><div class=\"tail\"></div></h3>';
            multihtml = multihtml + '<div class=\"trans-container\"><ul>';
            for (i = 0; i < data.multiwords.length; i++) {
               multihtml = multihtml + '<li><span class=\"word\">' + data.multiwords[i].word + '</span>';
               multihtml = multihtml + data.multiwords[i].trans.replace(/\|/g, '&nbsp;|&nbsp;&nbsp;') + '</li>';
            }
            multihtml = multihtml + '</ul></div>';
            $("div#puzzle-phrase").html(multihtml);
            bHasContent = 1;
            $("div#puzzle-phrase").show();
        }
    }
    catch (err){
        $("div#puzzle-phrase").hide();
    }
    
    try {
        if (data.sentences.length > 0) {
            senthtml = '';
            for (var i = 0; i < data.sentences.length; i++) {
               var url = data.sentences[i].sentUrl;
               url = getShowURL(url);
               var sentenceInfo = data.sentences[i];
               var sentenceId = i;
               senthtml = senthtml + showSents(sentenceInfo, sentenceId + 1);
               if (data.sentences[i].sentUrl.indexOf("http://") != -1) {
                    senthtml = senthtml + '<p class=\"example-via\"><a href=\"app:openurl:' + data.sentences[i].sentUrl + '\">';
                    senthtml = senthtml + url + '</a></p></li>';
               }
               else {
                    senthtml = senthtml + '<p class=\"example-via\">';
                    senthtml = senthtml + url + '</p></li>';
               }
               
               var isSim = data.sentences[i].isSim;
               if (!isSim) {
                    $("p#isSim").hide();
               }
               else {
                    $("p#isSim").show();
               }
            }
            $("div#refer-sen div ul.ol").html(senthtml);
            $("div#refer-sen .has-refer").show();
            $("div#refer-sen #example-tab").show();
            $("div#refer-sen .no-refer").hide();
            
            var strInput = $("#query")[0].value;
            if (strInput.length > 20) {
                $("p#isSim").html('您输入的句子较长，拖动鼠标选中其中部分试试');
                $("p#isSim").show();
                try {
                    window.external.showHelpTip(strInput);
                }
                catch (err) {
                }
            }
            else {
                $("p#isSim").html('以下例句部分匹配您查询的内容');
            }
        }
    }
    catch (err){
        showNoResult();
    }
}

function showNoResult() {
        var strInput = $("#query")[0].value;
        if (strInput.length < 10) {
            $("p#no-refer-title").html('暂时没有对应的例句，您可以：');
        }
        else {
            $("p#no-refer-title").html('您选中的内容太长，没有匹配的例句，您可以尝试以下方法获得更多结果：');
        }
        $('#actionTips').hide();
        $("div#refer-sen").show();
        $("div#refer-sen .has-refer").hide();
        $("div#refer-sen #example-tab").show();
        $("div#refer-sen .no-refer").show();
}

/**
 * 展示双语例句结果
*/
function showSents(sentenceInfo, sentenceId)
{
    senthtml = '';
    
    var url = sentenceInfo.sentUrl;
    url = getShowURL(url);
    
    var src = sentenceInfo.orgSent.replace(/<b>/g,'').replace(/<\/b>/g,'');
    var tran = sentenceInfo.tranSent.replace(/<b>/g,'').replace(/<\/b>/g,'');
    
    var alignedwords = sentenceInfo.alignedwords;
    alignedwords = alignedwords.replace(/@/g,'');
    
    var alignedObj = eval('('+alignedwords+')');
	
    var alignsSrc;
    if (alignedObj.src.chars != undefined) {
        alignsSrc = alignedObj.src.chars;
    }
    else {
        alignsSrc = alignedObj.src;
    }
    
    var alignsTra;
    if (alignedObj.tran.chars != undefined) {
        alignsTra = alignedObj.tran.chars;
    }
    else {
        alignsTra = alignedObj.tran;
    }
    
    var qSrcWords = alignedObj.src.q;
    var qTranWords = alignedObj.tran.q;
    
    senthtml = senthtml + '<li><p>';
    var sentSrcId = 'src_' + sentenceId;
    var sentTranId = 'tran_' + sentenceId;
    
    var srcObj;
    if (alignsSrc.length != undefined) {
        srcObj = alignsSrc[0];
    }
    else {
        srcObj = alignsSrc;
    }

    senthtml = senthtml + showSentence(src, srcObj, alignsSrc, qSrcWords, sentSrcId, sentTranId);
    senthtml = senthtml + '</p>';
    
    var tranObj;
    if (alignsTra.length != undefined) {
        tranObj = alignsTra[0];
    }
    else {
        tranObj = alignsTra;
    }

    senthtml = senthtml + '<p>';
    senthtml = senthtml + showSentence(tran, tranObj, alignsTra, qTranWords, sentTranId, sentSrcId);
    senthtml = senthtml + '</p>';
    
    return senthtml;
}

function showSentence(src, obj, aligns, qWord, sentenceType, sentenceType1) {
    var i = 0;
    var curPos = 0;
    var curQwords = 0;
    var html = '';
    var start, end;
    while (obj != undefined) {
        start = obj.s - 1;
        end = obj.e - 1;
        if (start > curPos) {
            var qStart, qEnd;
            while (qWord != undefined && curQwords < qWord.length) {
                var qInfo = qWord[curQwords];
                if (qInfo == undefined) {
                    qInfo = qWord;
                }
                if (qInfo != undefined && qInfo.s != undefined) {
                    qStart = qInfo.s - 1;
                    qEnd = qInfo.e - 1;
                }
                else {
                    break;
                }
                if (qStart >= curPos && qStart <= start
                    && (qEnd >= curPos && qEnd <= start)) {
                    var temp = src.substr(curPos, qStart - curPos);
                    html = html + src.substr(curPos, qStart - curPos);
                    temp = src.substr(qStart, qEnd - qStart);
                    html = html + '<b>' + temp + '<\/b>';
                    curQwords ++;
                    curPos = qEnd;
                }
                else {
                    break;
                }
            }
            var temp = src.substr(curPos, start - curPos);
            html = html + src.substr(curPos, start - curPos);
        }
        html = html + '<span id=\"';
        html = html + sentenceType;
        html = html + '_' + obj.id;
        html = html + '\" data-aligning=\"#' + sentenceType + '_' + obj.aligns.sc.id;
        html = html + ',#' + sentenceType1 + '_' + obj.aligns.tc.id + '\">';
        if (obj.q != undefined) {
            var q = obj.q;
            var qStart = q.s - 1;
            var qEnd = q.e - 1;
            html = html + src.substr(start, qStart - start);
            html = html + '<b>' + src.substr(qStart, qEnd - qStart) + '</b>';
            html = html + src.substr(qEnd, end - qEnd);
        }
        else {
            html = html + src.substr(start, end - start);
        }
        html = html + '</span>';
        curPos = end;
        i++;
        if (i < aligns.length) {
            obj = aligns[i];
        }
        else {
            break;
        }
    }
    var qStart, qEnd;
    while (qWord != undefined && curQwords < qWord.length) {
        var qInfo = qWord[curQwords];
        if (qInfo == undefined) {
            qInfo = qWord;
        }
        if (qInfo != undefined && qInfo.s != undefined) {
            qStart = qInfo.s - 1;
            qEnd = qInfo.e - 1;
        }
        else {
            break;
        }
        if (qStart >= end && qStart <= src.length
            && (qEnd >= end && qEnd <= src.length)) {
            var temp = src.substr(end, qStart - end);
            html = html + src.substr(end, qStart - end);
            temp = src.substr(qStart, qEnd - qStart);
            html = html + '<b>' + temp + '<\/b>';
            curQwords ++;
            end = qEnd;
        }
        else {
            break;
        }
    }
    html = html + src.substr(end, src.length - end);
    return html;
}

/**
 * 接收来自C++端的数据
*/
function sendData(data) {
    var fsa = data.split("####");
    g_aSentences = new Array(fsa.length);
    for (i = 0; i < fsa.length; i++)
    {
        var temp = fsa[i].split("=");
        if (temp[0] == 'all' && !isNaN(temp[1])) {
            g_iSenNum = temp[1];
        }
        else if (temp[0] == 'cur' && !isNaN(temp[1])) {
            g_iCurSen = temp[1];
        }
        else {
            var tempIndex = temp[0].match(/[0-9]/g).toString().replace(/,/g, '');
            if (!isNaN(tempIndex)) {
                g_aSentences[tempIndex] = temp[1];
            }
        }
    }
    if (g_iCurSen > 0) {
        getData(g_aSentences[g_iCurSen]);
        $("#query")[0].value = g_aSentences[g_iCurSen];
        g_csData = g_aSentences[g_iCurSen];
    }
    
    updateDataShow();
    
    $("div#refer-sen").hide();
    //$("div#refer-sen .no-refer").show();
    $("div#puzzle-phrase").hide();
}
    $(".gotoexp a").click(function () {
        window.cppCallback
    });
/**
 * 更新展示的信息
*/
function updateDataShow(){
    $("span.cur-sen").html(g_iCurSen);
    $("span.total-sen").html(g_iSenNum);
    if (g_iSenNum == g_iCurSen) {
        $("span.rel-sen").addClass("nextDisabled");
    }
    else {
        $("span.rel-sen").removeClass("nextDisabled");
    }
    
    if (g_iCurSen <= 1) {
        $("span.rel-sen").addClass("preDisabled");
    }
    else {
        $("span.rel-sen").removeClass("preDisabled");
    }
}

/**
 * 解析url得到域名
*/
function getShowURL(url){
    var iStartIndex = url.indexOf("//");
    if (iStartIndex == -1) {
        return url;
    }
    url = url.substr(iStartIndex + 2, url.length - iStartIndex - 2);
    var iEndIndex = url.indexOf("/");
    if (iEndIndex == -1) {
        return url;
    }
    url = url.substr(0, iEndIndex);
    return url;
}

/**
 * 例句对齐
*/
var aligning = function () {
    $('#similarResults').delegate('#refer-sen #example ul.ol li p span', 'mouseover', function () {
        $($(this).data('aligning')).addClass("highLight");
    });

    $('#similarResults').delegate('#refer-sen #example ul.ol li p span', 'mouseout', function () {
        $($(this).data('aligning')).removeClass("highLight");
    });
}

/**
 * 发送log
*/
function ctlog(_7,q,_9,keyfrom,_b,_c,_d){
	var dateTime = new Date();
	var rnd = "&rnd=" + dateTime.getTime();
	var appVer = "";
	var appId = "";
	try
	{
		// 4.0正式版之前可能没有这个
	    appVer = window.external.getAppVersionString();
	    appId = window.external.getAppID();
	}
	catch (e)
	{
	    appVer = "";
	    appId = "";
	}
	var i=new Image();
	i.src = "http://cidian.youdao.com/apps/log.html?q=" + encodeURIComponentWrapper(q) + "&url=" + encodeURIComponent(_7.href) + "&pos=" + _9 + "&id=" + appId + "&keyfrom=" + keyfrom + "&appVer=" + appVer + "&action=" + _c + "&ctype=" + encodeURIComponentWrapper(_d) + rnd;
	return true;
}

//encodeURIComponent的包装
function encodeURIComponentWrapper(text)
{
	//IE5.5以上的版本有这个函数
	if (typeof(encodeURIComponent) == "function")
	{
		return encodeURIComponent(text);
	}
	//小于IE5.5的版本就简单处理
	return escape(text);
}