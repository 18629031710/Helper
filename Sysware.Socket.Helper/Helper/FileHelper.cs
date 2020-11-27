using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;

namespace Sysware.Socket.Helper
{
    public class FileHelper
    {
        /// <summary>
        /// 判断文件所在文件夹是否存在
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static string ExistsDir(string fileName)
        {
            if (string.IsNullOrWhiteSpace(fileName) == true) return "";
            var file = new FileInfo(fileName);
            if (Directory.Exists(file.DirectoryName) == false) return "路径不存在："+file.DirectoryName;
            else return "";
        }
        /// <summary>
        /// 文件转二进制，前50个字节为文件名，后面为文件体
        /// </summary>
        /// <param name="sFullName"></param>
        /// <returns></returns>
        public static byte[] FileToBuffer(string sFullName)
        {
            var fi = new System.IO.FileInfo(sFullName);
            var data1 = Encoding.UTF8.GetBytes(fi.Name);
            var data2 = System.IO.File.ReadAllBytes(sFullName);

            var data = new byte[Common._Lenght_FileName + data2.Length];
            Buffer.BlockCopy(data1, 0, data, 0, data1.Length);
            Buffer.BlockCopy(data2, 0, data, Common._Lenght_FileName, data2.Length);

            return data;
        }

        /// <summary>
        /// 二进制转文件，前50个字节为文件名，后面为文件体
        /// </summary>
        /// <param name="type"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static string BufferToFile(string type, byte[] data)
        {
            var data1 = new byte[Common._Lenght_FileName];
            var data2 = new byte[data.Length - Common._Lenght_FileName];

            Buffer.BlockCopy(data, 0, data1, 0, data1.Length);
            Buffer.BlockCopy(data, Common._Lenght_FileName, data2, 0, data2.Length);

            var str = Encoding.UTF8.GetString(data1).TrimEnd('\0');
            var sDirName = string.Format(@"{0}\{1}", Common._root, type);
            if (System.IO.Directory.Exists(sDirName) == false) System.IO.Directory.CreateDirectory(sDirName);
            var sFullName = string.Format(@"{0}\{1}\{2}", Common._root, type, str);
            System.IO.File.WriteAllBytes(sFullName, data2);
            return sFullName;
        }



        /// <summary>
        /// 通过轮询文件大小是否有变化，来判断输出是否完成
        /// </summary>
        /// <param name="strFileFullName"></param>
        /// <param name="timeOut"></param>
        public static bool waitForOutPut(string strFileFullName, int timeOut = 3)
        {
            long iSize0 = 0;
            for (int i = 0; i <= timeOut; i++)
            {
                //文件不存在，继续等待
                if (File.Exists(strFileFullName) == false)
                {
                    Thread.Sleep(1000);
                    continue;
                }
                //存在，则读取大小
                var myFile = new FileInfo(strFileFullName);
                long iSize = myFile.Length;
                //文件大小有变化，继续等待
                if (iSize0 != iSize)
                {
                    iSize0 = iSize;
                    Thread.Sleep(1000);
                    continue;
                }
                //大小相同
                Thread.Sleep(1000);
                return true;
            }
            return false;
        }
    }
}
