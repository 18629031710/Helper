/*
* @file getword.js
* @desc Get Word From Firefox 4+;
* @author  Dongxu Huang <huangdx@rd.netease.com>
* @date    2011-5-13
* @modify  2011-11-4 using js-ctype
*/
var eventRangeParent = null;
var eventTarget = null;
var eventRangeOffset = null;
var clientX = 0;
var clientY = 0;
var monX = 0;
var monY = 0;
var lastWord = null;
var currentDoc = null;
var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);

var sendToDict;
var lib;
 
var g_objRegistry = null;
var g_nRegistryType = 0;
// 创建注册表对象
function createRegistryObject()
{
	if(g_objRegistry)
		return true;
	if ("@mozilla.org/windows-registry-key;1" in Components.classes)
	{
		g_objRegistry = Components.classes["@mozilla.org/windows-registry-key;1"].createInstance(Components.interfaces.nsIWindowsRegKey);
		g_nRegistryType = 2;
	}
	else if("@mozilla.org/winhooks;1" in Components.classes)
	{
		g_objRegistry = Components.classes["@mozilla.org/winhooks;1"].getService(Components.interfaces.nsIWindowsRegistry);
		g_nRegistryType = 1;
	}
	else if("@mozilla.org/browser/shell-service;1" in Components.classes)
	{
		g_objRegistry = Components.classes["@mozilla.org/browser/shell-service;1"].getService(Components.interfaces.nsIWindowsShellService);
		g_nRegistryType = 1;
	}
	else
	{
		g_objRegistry = null;
		g_nRegistryType = 0;
	}
	
	if(g_nRegistryType == 0)
		return false;
	return true;
}
// 读取特定注册表键值
function regReadString(strPath, strName)
{
	if(!createRegistryObject())
		return false;
	if(g_nRegistryType == 1)
	{
		return g_objRegistry.getRegistryEntry(3, strPath, strName);
	}
	else if(g_nRegistryType == 2)
	{
        try {
            g_objRegistry.open(Components.interfaces.nsIWindowsRegKey.ROOT_KEY_LOCAL_MACHINE,
                               strPath, Components.interfaces.nsIWindowsRegKey.ACCESS_READ);
            return  g_objRegistry.readStringValue(strName);
        }
        catch(err) {
            
            g_objRegistry.open(Components.interfaces.nsIWindowsRegKey.ROOT_KEY_CURRENT_USER,
						   strPath, Components.interfaces.nsIWindowsRegKey.ACCESS_READ);
            return  g_objRegistry.readStringValue(strName);
        }
         
	}
}
// 得到youdao firefox插件ipc dll的地址
function getYoudaoFirefoxDLLPath()
{
    createRegistryObject();
	var p = regReadString("Software\\Youdao\\Dict", "Install");
    p = p + "\\Stable\\extensions\\firefox\\YDFFMiddleware.dll"
	return p;
}
function init()
{
		try {
            path = getYoudaoFirefoxDLLPath()
            Components.utils.import("resource://gre/modules/ctypes.jsm");
            
            lib = ctypes.open(path);
            /* Declare the signature of the function we are going to call */
            sendToDict = lib.declare("SendToDict",
                                     ctypes.default_abi,
                                     ctypes.int32_t,
                                     ctypes.jschar.ptr,
                                     ctypes.int32_t
                                    );  
       } catch (err) {
            return;
       }
}
init();
var gPos  =0;
function getWord (parent, offset , target)
{
    try{
        if (parent.parentNode != target) {
            return null;
        }
    }
    catch (e) {
        return null;
    }
    
    if (parent.nodeType != Node.TEXT_NODE) {
        return null;
    }
    
    var container = parent.parentNode;
    if (container) {
        var foundNode = false;
        for (var c = container.firstChild; c !== null; c = c.nextSibling) {
            if (c == parent) {
                foundNode = true;
                break;
            }
        }
        if (!foundNode) {
            return null;
        }
    }
    var range = parent.ownerDocument.createRange();
    range.selectNode(parent);
    var str = range.toString();
    if (offset < 0 || offset >= str.length) {
          return null;
    }
    var start = offset;
    var end = offset + 1;
	/*
    var valid_chars = /\w/;
    if (!valid_chars.test(str.substring(start, start + 1))) {
         return null;
    }
	
    while (start > 0) { 
        if (valid_chars.test(str.substring(start - 1, start))) {
            start--;
        } else {
            break;
        }    
    }
    while (end < str.length) {
        if (valid_chars.test(str.substring(end, end + 1))) {
            end++;
        } else {
            break;
        }
    }
	*/
	space_cnt = 0;
	while (start > 0)
	{
		if (str.substring(start-1, start) == ' ')
			space_cnt++;
		if (space_cnt == 4)
			break;
		start--;
	}
	gPos = offset - start - 2 < 0?0:offset - start - 2;
	while(str[++gPos] == ' ');
	space_cnt = 0;
	while (end < str.length) {
        if (str.substring(end, end + 1) == ' ') {
            space_cnt++;
        }
        if (space_cnt == 4)
			break;
		end++;
    }
	
    var text = str.substring(start, end);
    return text;
}

function on_mousemove(event)
{
    var eventDoc = null;
    var doc = event.target.ownerDocument;
    if (String(doc).indexOf("[object HTMLDocument]") != -1)
    {
        eventDoc = doc;
    }
    if (eventDoc != null)
    {
        if (currentDoc != eventDoc)
        {
            currentDoc = eventDoc;
        }
        eventTarget = event.target;
        if (eventTarget.tagName != "TEXTAREA" || eventTarget.tagName != "INPUT"  || eventTarget.tagName != "SELECT")
        {
            eventRangeParent = event.rangeParent;
            eventRangeOffset = event.rangeOffset;
            clientX = event.clientX;
            clientY = event.clientY;   
        }
    }
};

function get_mouse_word() {

  word = getWord(eventRangeParent, eventRangeOffset, eventTarget);
  if (word != null)
  {
	  return word;
  }
  return '';
}
function mouse_move_mon()
{
	word = get_mouse_word();
	if (word != '')
	{
		SendToDict(word,gPos);
	}
	window.setTimeout(mouse_move_mon, 80);
}
window.setTimeout(mouse_move_mon, 80);

function SendToDict(word, pos)
{
    sendToDict(word, pos);
}
