using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;

namespace Sysware.Socket.Helper
{
    public class ServerInfo
    {
        public static ServerInfo myConfig { get; set; }

        public string Ip
        {
            get;
            set;
        }
        public string Port
        {
            get;
            set;
        }
        public string _xmlFileName = null;//"Setting.xml";
        private ToolInfo.Collection _tools;
        public ToolInfo.Collection Tools
        {
            get
            {
                return _tools;
            }
            set
            {
                _tools = value;
            }
        }
        public ServerInfo()
        {
        }
        public ServerInfo(string fileName)
        {
            ReadToolInfos(fileName);
        }
        public ToolInfo.Collection ReadToolInfos(string fileName)
        {
            _tools = new ToolInfo.Collection();
            if (File.Exists(fileName))
            {
                XmlDocument doc = new XmlDocument();
                doc.Load(fileName);
                XmlNode root = doc.SelectSingleNode("Setting");
                XmlElement xle = (XmlElement)root;

                //Ip = xle.SelectSingleNode(@"/Setting/ip").InnerText;
                //Port = xle.SelectSingleNode(@"/Setting/port").InnerText;
                //XmlNodeList apps = xle.SelectNodes("/Setting/apps/app");
                foreach (XmlNode nde in root.ChildNodes)
                {
                    xle = (XmlElement)nde;
                    if (xle.Name == "server")
                    {
                        Ip = xle.GetAttribute("ip");
                        Port = xle.GetAttribute("port");
                    }
                    else
                    {
                        foreach (XmlNode xmln in nde.ChildNodes)
                        {
                            XmlElement xlen = (XmlElement)xmln;
                            ToolInfo bti = new ToolInfo();
                            bti.Id = xlen.GetAttribute("id");
                            bti.Name = xlen.GetAttribute("name");
                            bti.exePath = xlen.GetAttribute("path");
                            bti.inPutf = xlen.GetAttribute("inputf");
                            bti.outPutf = xlen.GetAttribute("outputf");
                            bti.cmdStr = xlen.GetAttribute("cmd");

                            _tools.Add(bti);
                        }
                    }
                }
            }

            return _tools;
        }
        public void WriteToolInfos(string fileName, ServerInfo serverInfo)
        {
            if (fileName == null || fileName.Trim().Length == 0)
            {
                System.Windows.Forms.MessageBox.Show("文件名不能为空");
                return;
            }

            XmlDocument doc = new XmlDocument();
            XmlDeclaration decla = doc.CreateXmlDeclaration("1.0", "utf-8", "yes");
            doc.AppendChild(decla);
            XmlElement root = doc.CreateElement("Setting");
            doc.AppendChild(root);

            XmlElement server = doc.CreateElement("server");
            server.SetAttribute("ip", Ip);
            server.SetAttribute("port", Port);
            root.AppendChild(server);

            XmlElement apps = doc.CreateElement("apps");
            foreach (ToolInfo tool in serverInfo.Tools)
            {
                XmlElement app = doc.CreateElement("app");
                app.SetAttribute("id", tool.Id);
                app.SetAttribute("name", tool.Name);
                app.SetAttribute("path", tool.exePath);
                app.SetAttribute("inputf", tool.inPutf);
                app.SetAttribute("outputf", tool.outPutf);
                app.SetAttribute("cmd", tool.cmdStr);
                apps.AppendChild(app);
            }
            root.AppendChild(apps);
            doc.Save(fileName);
        }
        public void DeleteTool(string name)
        {
            foreach (ToolInfo tool in Tools)
            {
                if(tool.Name == name)
                {
                    Tools.Remove(tool);
                    break;
                }
            }
        }
    }
}
