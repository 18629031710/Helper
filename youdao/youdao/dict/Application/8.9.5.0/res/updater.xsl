<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:user="whatever">
    <msxsl:script language="jscript" implements-prefix="user">   
        <![CDATA[
            function getURL(nodeList)   
            {
                return nodeList[0].url;
            }
        ]]>
    </msxsl:script>
<xsl:template match="/">
<xsl:element name="base">
    <xsl:attribute name="href"><xsl:value-of select="user:getURL(document(''))"/></xsl:attribute>
    <xsl:attribute name="target">_blank</xsl:attribute>
</xsl:element>
<html>
<head>
<title>更新描述</title>
<style>
html,body{padding:0px;margin:0px}
body {FONT-FAMILY: arial,sans-serif;font-size:100%}
IMG {BORDER-WIDTH: 0px}
.content-title{font-size:75%;background: transparent  url(images/title_back.gif) repeat;line-height:24px;font-weight:bold;color:#3d3d3d;padding-left:10px;margin-top:0px;border:0px;text-align:left}
.content-content{font-size:75%;line-height:18px;color:#3d3d3d;padding-left:25px;margin-top:0px;border:0px;text-align:left}
A:hover,A:link,A:visited {COLOR: #0000cc}
</style>
</head>
<body>

<xsl:if test="description/initial/item">
<table cellpadding="0" cellspacing="10" border="0" width="100%">
<tr>
<td class="content-title">新增功能模块</td>
</tr>
<tr>
<td class="content-content">
<xsl:for-each select="description/initial/item">
<xsl:value-of select="." disable-output-escaping="yes"/><br/>
</xsl:for-each>
</td>
</tr>
</table>
</xsl:if>

<xsl:if test="description/increasing/item">
<table cellpadding="0" cellspacing="10" border="0" width="100%">
<tr>
<td class="content-title">更新日志</td>
</tr>
<tr>
<td class="content-content">
<xsl:for-each select="description/increasing/item">
<xsl:value-of select="." disable-output-escaping="yes"/><br/>
</xsl:for-each>
</td>
</tr>
</table>
</xsl:if>

</body>
</html>
</xsl:template>
</xsl:stylesheet>
