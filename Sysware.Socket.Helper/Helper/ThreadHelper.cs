using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Windows.Forms;
using Sysware.SE.IDE.Log;

namespace Sysware.Socket.Helper
{
    public class ThreadHelper
    {
        /// <summary>
        /// 多线程执行
        /// </summary>
        /// <param name="act"></param>
        /// <param name="actLog"></param>
        public static void start(Action act,Action<string> actLog)
        {
            var myThread = new Thread(() =>
            {
                try
                {
                    act();
                }
                catch (Exception ex)
                {
                    actLog(ex.Message);
                }
            });
            myThread.IsBackground = true;
            myThread.Start();
        }

        /// <summary>
        /// 日志代理
        /// </summary>
        /// <param name="txtLog"></param>
        /// <returns></returns>
        public static Action<string> iniActLog(RichTextBox txtLog)
        {
            Action<string> actLog = (str) =>
            {
                if (txtLog.InvokeRequired)
                {
                    str = string.Format("{0} -{1}\r\n", DateTime.Now.ToString("HH:mm:ss"), str);
                    txtLog.Invoke(new Action<string>(s => txtLog.AppendText(s)), str);
                    LogHelper.WriteInfo(str);
                }
                else
                {
                    str = string.Format("{0} -{1}\r\n", DateTime.Now.ToString("HH:mm:ss"), str);
                    txtLog.AppendText(str);
                    LogHelper.WriteInfo(str);
                }
            };
            return actLog;
        }
    }
}
