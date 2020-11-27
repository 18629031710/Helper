using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Xml;
using Sysware.SE.IDE.Log;
namespace Sysware.Socket.Helper
{
    /// <summary>
    /// 协议定义：头长度20个字节
    /// 4位操作码，4位app的id，12位数据体的长度值
    /// </summary>
    public class SocketHelper
    {
        /// <summary>
        /// 服务端监听全局单例，外部要强制关闭，因此把他暴漏出来。
        /// 注意：程序正在跑的时候，强制关闭会触发异常。
        /// </summary>
        public static System.Net.Sockets.Socket myServerSocket { get; set; }
        public Action<string> actLog { get; set; }
        /// <summary>
        /// 是否输出日志
        /// </summary>
        public  bool isDisplayLog { get; set; }
        public SocketHelper()
        {
            isDisplayLog = false;//默认不输出日志
        }

        /// <summary>
        /// 接收监听
        /// </summary>
        /// <returns></returns>
        public Parm Receive(ServerInfo myConfig)
        {
            if (actLog == null) actLog = (s) => { LogHelper.WriteInfo(s); };
            //
            var myParm = new Parm();
            var myServerPoint = new IPEndPoint(IPAddress.Parse(myConfig.Ip), int.Parse(myConfig.Port));
            myServerSocket = new System.Net.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            
            //1-监听
            if (isDisplayLog) actLog(string.Format("监听中...IP【{0}:{1}】", myServerPoint.Address, myServerPoint.Port));
            myServerSocket.Bind(myServerPoint);
            myServerSocket.Listen(10000);//允许监听的队列数
            var mySocket = myServerSocket.Accept();
            myParm.LocalEndPoint = mySocket.LocalEndPoint as IPEndPoint;
            myParm.RemoteEndPoint = mySocket.RemoteEndPoint as IPEndPoint;
            if (isDisplayLog) actLog(string.Format("接入中...IP【{0}:{1}】", myParm.RemoteEndPoint.Address, myParm.RemoteEndPoint.Port));
            
            //2-接收协议头：20个字节
            var header = new byte[Common._Lenght_op + Common._Lenght_id + Common._Lenght_body];
            int n = mySocket.Receive(header);
            string str = Encoding.UTF8.GetString(header);
            if (isDisplayLog) actLog(string.Format("接收协议头...{0}", str));

            //3-接收协议体：根据协议头里面给定的协议体长度接收
            Parm.initHeader(myParm, str);
            var length = myParm.data.Length;
            if (length > 0)
            {
                n = mySocket.Receive(myParm.data);
                if (isDisplayLog) actLog(string.Format("接收数据体...长度{0}", length));
            }
            myServerSocket.Close();                 
            return myParm;
       }


       /// <summary>
       /// 发送
       /// </summary>
       /// <param name="op"></param>
       /// <param name="id"></param>
        ///<param name="data"></param>
        public Parm Send(ServerInfo myConfig, Parm myParm)
        {
            if (actLog == null) actLog = (s) => { LogHelper.WriteInfo(s); };
            //
            var myParm1 = myParm.copy();
            if (myParm1.data == null) myParm1.data = new byte[0];

            var myServerPoint = new IPEndPoint(IPAddress.Parse(myConfig.Ip), int.Parse(myConfig.Port));
            var mySocket = new System.Net.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
            //1-链接
            if (isDisplayLog) actLog(string.Format("链接远程...IP【{0}:{1}】", myServerPoint.Address, myServerPoint.Port));
            mySocket.Connect(myServerPoint); 
            myParm1.LocalEndPoint = mySocket.LocalEndPoint as System.Net.IPEndPoint;
            myParm1.RemoteEndPoint= mySocket.RemoteEndPoint as System.Net.IPEndPoint;
            //2-解析
            if (myParm1.id == null) myParm1.id = "";
            var str = string.Format("{0}{1}", myParm1.op, myParm1.id.PadLeft(Common._Lenght_id, '0'));
            //3-发送
            var length = myParm1.data.Length;
            str += length.ToString().PadLeft(Common._Lenght_body, '0');
            var bytes = Encoding.UTF8.GetBytes(str);
            int n = mySocket.Send(bytes);
            if (isDisplayLog) actLog(string.Format("发送协议头...{0}", str));
            if (length > 0)
            {
                mySocket.Send(myParm1.data);
                if (isDisplayLog) actLog(string.Format("发送数据体...长度{0}", length));
            }
            mySocket.Close();
            return myParm1;
        }


        /// <summary>
        /// 发送一个字符串
        /// </summary>
        /// <param name="str"></param>
        /// <param name="op"></param>
        /// <param name="myParm"></param>
        /// <param name="actLog"></param>
        public static void sendStringToClient(string str, string op, Parm myParm, Action<string> actLog=null)
        {
            try
            {
                if (actLog == null) actLog = (s) => { LogHelper.WriteInfo(s); };
                //
                var myParm1 = myParm.copy();
                myParm1.op = op;
                myParm1.id = myParm.id;
                myParm1.data = Encoding.UTF8.GetBytes(str);
                //
                var myConfig1 = new ServerInfo()
                {
                    Ip = myParm1.RemoteEndPoint.Address.ToString(),
                    Port = myParm1.RemoteEndPoint.Port.ToString(),
                };
                var m = new SocketHelper();
                m.actLog = actLog;
                m.Send(myConfig1, myParm1);
                System.Threading.Thread.Sleep(500);
                actLog(string.Format("反馈结果...{0}", str));
            }
            catch(Exception ex)
            {
                actLog(ex.Message);
            }
        }

        /// <summary>
        /// 发送一个文件
        /// </summary>
        /// <param name="sFullName"></param>
        /// <param name="op"></param>
        /// <param name="myParm"></param>
        /// <param name="actLog"></param>
        public static void sendFileToClient(string sFullName, string op, Parm myParm, Action<string> actLog=null)
        {
            try
            {
                if (actLog == null) actLog = (s) => { LogHelper.WriteInfo(s); };
                //
                var myParm1 = myParm.copy();
                myParm1.op = op;
                myParm1.id = myParm.id;
                myParm1.data = FileHelper.FileToBuffer(sFullName);
                //
                var myConfig1 = new ServerInfo()
                {
                    Ip = myParm1.RemoteEndPoint.Address.ToString(),
                    Port = myParm1.RemoteEndPoint.Port.ToString(),
                };
                var m = new SocketHelper();
                m.actLog = actLog;
                System.Threading.Thread.Sleep(1000);
                m.Send(myConfig1, myParm1); actLog(string.Format("反馈结果...{0}", sFullName));
            }
            catch (Exception ex)
            {
                actLog(ex.Message);
            }
        }
        
    }
}
