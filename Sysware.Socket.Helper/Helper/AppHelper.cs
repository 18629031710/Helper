using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using Sysware.SE.IDE.Log;

namespace Sysware.Socket.Helper
{
    public class AppHelper
    {
        /// <summary>
        /// 执行队列
        /// </summary>
        public static List<AppHelper> _lstApp { get; set; }
        /// <summary>
        /// 执行前，先赋值
        /// </summary>
        public Parm myParm { get; set; }
        /// <summary>
        /// 执行前，先赋值
        /// </summary>
        public Action<string> actLog { get; set; }



        public AppHelper()
        {
        
        }
        private void CreatBat(ToolInfo kv)
        {
            if (string.IsNullOrWhiteSpace(kv.cmdStr) == false)
            {
                var batFileName = string.Format(@"{0}\{1}.bat", Common._root, DateTime.Now.ToString("yyyyMMddHHmmss"));
                System.IO.File.WriteAllText(batFileName, kv.cmdStr);
                Process.Start(new ProcessStartInfo() { FileName = batFileName, WindowStyle = ProcessWindowStyle.Hidden });
                System.Threading.Thread.Sleep(500);
                System.IO.File.Delete(batFileName);
            }
            else
            {
                Process.Start(new ProcessStartInfo() { FileName = kv.exePath });
            }
        }
        /// <summary>
        /// 执行包
        /// </summary>
        public void exec()
        {
            if (actLog == null) actLog = (s) => { LogHelper.WriteInfo(s); };
            //
            #region 同步配置文件
            if (myParm.op == opType._op_SettingReq)
            {
                var sFullName = string.Format(@"{0}\Setting.xml", Common._root);
                SocketHelper.sendFileToClient(sFullName, opType._op_SettingRes, myParm, actLog);
                return;
            }
            if (myParm.op == opType._op_SettingRes)
            {
                var sFullName = FileHelper.BufferToFile("", myParm.data); 
                actLog(string.Format("缓存结果...{0}", sFullName));
                return;
            }
            #endregion

            #region 运行一个exe
            if (myParm.op == opType._op_RunApp)
            {
                //var path = ServerInfo.myConfig.Tools[myParm.id].exePath;
                //SocketHelper.sendStringToClient("工具已启动：" + myParm.id, opType._op_err, myParm, actLog);
                //actLog(string.Format("运行...{0}", path));
                //Process.Start(new ProcessStartInfo() { FileName = path, });
                var kv = ServerInfo.myConfig.Tools[myParm.id];
                CreatBat(kv);
                return;
            }
            #endregion

            #region 运行一个exe，得到一个结果，再把结果返回   
            if (myParm.op == opType._op_RunAppWaitforReq)
            {
                try
                {
                    //1-判断应用是否存在
                    var kv = ServerInfo.myConfig.Tools[myParm.id];
                    if (kv == null)
                    {
                        SocketHelper.sendStringToClient("未找到该应用：" + myParm.id, opType._op_err, myParm, actLog);
                        return;
                    }
                    if (System.IO.File.Exists(kv.exePath) == false)
                    {
                        SocketHelper.sendStringToClient("未找到该应用：" + kv.exePath, opType._op_err, myParm, actLog);
                        return;

                    }
                    //2-处理输入：当配置有输入参数，但上传的参数为空时，
                    var str = FileHelper.ExistsDir(kv.inPutf);
                    if (string.IsNullOrWhiteSpace(str) == false)
                    {
                        SocketHelper.sendStringToClient(str, opType._op_err, myParm, actLog);
                        return;
                    }
                    if (string.IsNullOrWhiteSpace(kv.inPutf) == false && myParm.data.Length == 0)
                    {
                        SocketHelper.sendStringToClient("该应用输入参数为空，写入失败！", opType._op_err, myParm, actLog);
                        return;
                    }
                    if (System.IO.File.Exists(kv.inPutf)) System.IO.File.Delete(kv.inPutf);//清理输入参数

                    //3-处理输出：当配置有输出参数，并且需要清理缓存时
                    str = FileHelper.ExistsDir(kv.inPutf);
                    if (string.IsNullOrWhiteSpace(str) == false)
                    {
                        SocketHelper.sendStringToClient(str, opType._op_err, myParm, actLog);
                        return;
                    }
                    if (string.IsNullOrWhiteSpace(kv.outPutf) == false && System.IO.File.Exists(kv.outPutf))
                    {
                        System.IO.File.Delete(kv.outPutf);
                    }
                    //4-整理命令行参数化
                    //var args = "";
                    //if (string.IsNullOrWhiteSpace(kv.inPutf) == false) args = string.Format(@"{0} {1}", args, kv.inPutf);
                    //if (string.IsNullOrWhiteSpace(kv.outPutf) == false) args = string.Format(@"{0} {1}",args, kv.outPutf);
                    //args = args.Trim();
                    //SocketHelper.sendStringToClient(string.Format("CMD命令:{0} {1}", kv.exePath, args), opType._op_log, myParm, actLog);
                    //5-运行
                    if (myParm.data.Length > 0) System.IO.File.WriteAllBytes(kv.inPutf, myParm.data);//缓存输入参数

                    SocketHelper.sendStringToClient(string.Format("CMD命令:{0}", kv.cmdStr), opType._op_log, myParm, actLog);
                    CreatBat(kv);
                    //6-环境判断：exe是否关闭
                    while (ProcessHelper.isEnd(kv.Id) == false) System.Threading.Thread.Sleep(500);
                    if (string.IsNullOrWhiteSpace(kv.outPutf) == true)
                    {
                        SocketHelper.sendStringToClient("", opType._op_err, myParm, actLog);
                        return;
                    }

                    //7-等待输出结果
                    //var iTimeout = 5;
                    //if (string.IsNullOrWhiteSpace(kv.timeout) == false) iTimeout = int.Parse(kv.timeout);

                    //FileHelper.waitForOutPut(kv.outPutf, iTimeout);

                    //8-反馈：当未找到缓存文件时
                    if (System.IO.File.Exists(kv.outPutf) == false)
                    {
                        SocketHelper.sendStringToClient("未找到输出文件：" + kv.outPutf, opType._op_err, myParm, actLog);
                        return;
                    }

                    //9-反馈文件给客户端
                    SocketHelper.sendFileToClient(kv.outPutf, opType._op_RunAppWaitforRes, myParm, actLog);
                    return;
                }
                catch (Exception ex)
                {
                     SocketHelper.sendStringToClient(ex.Message, opType._op_err, myParm, actLog);
                     return;
                }
            }

            if (myParm.op == opType._op_RunAppWaitforRes)
            {
                var sFullName = FileHelper.BufferToFile("temp", myParm.data);
                //Process.Start(new ProcessStartInfo() { FileName = sFullName, });
                actLog(string.Format("结果文件：{0}", sFullName));
                return;
            }
            #endregion



            #region 发送文件
            if (myParm.op == opType._op_SendFileReq)
            {
                var kv = ServerInfo.myConfig.Tools[myParm.id];
                if (kv == null)
                {
                    SocketHelper.sendStringToClient("未找到该应用：" + myParm.id, opType._op_log, myParm, actLog);
                    return;
                }
                if (string.IsNullOrWhiteSpace(kv.inPutf) == false)
                {
                    if (System.IO.File.Exists(kv.inPutf)) System.IO.File.Delete(kv.inPutf);
                    System.IO.File.WriteAllBytes(kv.inPutf, myParm.data);
                }
                else
                {
                    SocketHelper.sendStringToClient("该应用输入参数为空，写入失败！", opType._op_log, myParm, actLog);
                }
                return;
            }
            #endregion

            if (myParm.op == opType._op_log)
            {
                var str = Encoding.UTF8.GetString(myParm.data);
                actLog(str);
                return;
            }

            if (myParm.op == opType._op_err)
            {
                var str = Encoding.UTF8.GetString(myParm.data);
                throw new Exception(str);//抛出中断，强制结束
            }
        }



        /// <summary>
        /// 启动接收，循环，执行，直到，为结束标记
        /// </summary>
        /// <param name="myParm"></param>
        /// <param name="m"></param>
        public static void execInWhile(Parm myParm, SocketHelper m)
        {
            while (true)
            {
                try
                {
                    var myParm2 = m.Receive(new ServerInfo()
                    {
                        Ip = myParm.LocalEndPoint.Address.ToString(),
                        Port = myParm.LocalEndPoint.Port.ToString(),
                    });
                    var app = new AppHelper() { myParm = myParm2, actLog = m.actLog, };
                    app.exec();

                    System.Threading.Thread.Sleep(50);
                    if (myParm2.op.EndsWith("88")) break;
                }
                catch (Exception ex)
                {
                    m.actLog(ex.Message);
                    break;
                }
            }
        }


        /// <summary>
        /// 启动线程，循环，将接收的包加入栈
        /// </summary>
        /// <param name="actLog"></param>
        public static void addToQueue(Action<string> actLog)
        {
            ThreadHelper.start(() =>
            {
                var m = new SocketHelper() { actLog = actLog, isDisplayLog=true };
                while (true)
                {
                    try
                    {
                        var myParm = m.Receive(ServerInfo.myConfig);
                        var myParm1 = myParm.copy();
                        if (AppHelper._lstApp == null) AppHelper._lstApp = new List<AppHelper>();
                        //入栈
                        var app = new AppHelper() { myParm = myParm1, actLog = m.actLog, };
                        AppHelper._lstApp.Add(app);//
                        SocketHelper.sendStringToClient("工具已启动，请等待...", opType._op_log, myParm1, actLog);
                    }
                    catch (Exception ex)
                    {
                        actLog(ex.Message);
                        break;
                    }
                }
            }, actLog);
        }

        /// <summary>
        /// 启动线程，循环，执行栈顶的一个包
        /// </summary>
        /// <param name="actLog"></param>
        public static void execInQueue(Action<string> actLog)
        {
            ThreadHelper.start(() =>
            {
                while (true)
                {
                    System.Threading.Thread.Sleep(1000);

                    if (AppHelper._lstApp == null) AppHelper._lstApp = new List<AppHelper>();
                    if (AppHelper._lstApp.Count == 0) continue;
                    var app = AppHelper._lstApp.First();//从栈顶取一个
                    try
                    {
                        if (ProcessHelper.isEnd(app.myParm.id) == false) continue;//有相同进程时，等待。
                        AppHelper._lstApp.Remove(app);//出栈
                        SocketHelper.sendStringToClient("运行中，请稍后...", opType._op_log, app.myParm, app.actLog);
                        System.Threading.Thread.Sleep(500);
                        app.exec();
                        System.Threading.Thread.Sleep(500);
                    }
                    catch (Exception ex)
                    {
                        actLog(ex.Message);
                        break;
                    }
                }
            }, actLog);
        }
    }
}
