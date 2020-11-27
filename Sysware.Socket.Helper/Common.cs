using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace Sysware.Socket.Helper
{
    public class Common
    {        
        
        #region 常量
        /// <summary>
        /// 操作码长度：4
        /// </summary>
        public const int _Lenght_op = 4;
        /// <summary>
        /// App编码长度：4
        /// </summary>
        public const int _Lenght_id = 4;
        /// <summary>
        /// 用来存储数据体长度的二进制大小：12
        /// </summary>
        public const int _Lenght_body = 12;
        /// <summary>
        /// 用来存储文件名的二进制大小：50
        /// </summary>
        public const int _Lenght_FileName = 50;

        #endregion

        /// <summary>
        /// 根目录
        /// </summary>
        public static string _root { get { return AppDomain.CurrentDomain.BaseDirectory; } }

    }
    public class opType 
    {
        /// <summary>
        /// 请求同步配置文件：0000
        /// </summary>
        public const string _op_SettingReq = "0000";
        /// <summary>
        /// 反馈配置文件：0088
        /// </summary>
        public const string _op_SettingRes = "0088";


        /// <summary>
        /// 运行一个App：1000
        /// </summary>
        public const string _op_RunApp = "1000";


        /// <summary>
        /// 运行一个App，等待返回结果：2000
        /// </summary>
        public const string _op_RunAppWaitforReq = "2000";
        /// <summary>
        /// 运行一个App，等待返回结果：2088
        /// </summary>
        public const string _op_RunAppWaitforRes = "2088";



        /// <summary>
        /// 发送一个文件到服务器:3000
        /// </summary>
        public const string _op_SendFileReq = "3000";

        /// <summary>
        /// 执行中断：8888
        /// </summary>
        public const string _op_err= "8888";

        /// <summary>
        /// 返回字符串：9999
        /// </summary>
        public const string _op_log = "9999";
    }
}
