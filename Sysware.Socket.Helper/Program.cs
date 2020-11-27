using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace Sysware.Socket.Helper
{
    static class Program
    {
        public static Form1 myfrm { get; set; }
        /// <summary>
        /// 应用程序的主入口点。
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            myfrm = new Form1();
            Application.Run(myfrm);
        }
    }
}
