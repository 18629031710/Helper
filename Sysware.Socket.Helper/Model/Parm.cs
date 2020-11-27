using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Sysware.Socket.Helper
{
    public class Parm
    {
        public string op { get; set; }
        public string id { get; set; }
        public byte[] data { get; set; }
        public System.Net.IPEndPoint LocalEndPoint { get; set; }
        public System.Net.IPEndPoint RemoteEndPoint { get; set; }

        /// <summary>
        /// 深复制一个对象
        /// </summary>
        /// <returns></returns>
        public Parm copy()
        {
            var myParm = new Parm() 
            {
                 op = this.op,
                 id = this.id,
                 data = this.data,
                 LocalEndPoint  = this.LocalEndPoint,      
                 RemoteEndPoint = this.RemoteEndPoint,
            };
            return myParm;
        }

        /// <summary>
        /// 解析协议头
        /// </summary>
        /// <param name="myParm"></param>
        /// <param name="str"></param>
        /// <returns></returns>
        public static Parm initHeader(Parm myParm,string str)
        {
            myParm.op = str.Substring(0, Common._Lenght_op);
            myParm.id = str.Substring(Common._Lenght_op, Common._Lenght_id);

            var length = long.Parse(str.Substring(Common._Lenght_op + Common._Lenght_id, Common._Lenght_body));
            myParm.data = new byte[length];

            return myParm;
        }
    }
}
