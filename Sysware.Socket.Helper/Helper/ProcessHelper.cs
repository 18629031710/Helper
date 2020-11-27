using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Sysware.Socket.Helper
{
    public class ProcessHelper
    {
        /// <summary>
        /// 根据遍历进程，exe的路径和app的路径比较，来判断是否关闭退出。
        /// true：已结束
        /// false：未结束
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool isEnd(string id)
        {
            try
            {
                var exePath = ServerInfo.myConfig.Tools[id].exePath;
                //var p = @"[\s\S]+\\(?<f>[\s\S]+).exe";
                //var reg = new Regex(p, RegexOptions.IgnoreCase);
                //var match = reg.Match(exePath);                
                //var exeName = match.Groups["f"].Value;
                foreach (var pro in Process.GetProcesses())
                {
                    try
                    {
                        if (pro.MainModule.FileName.ToLower() == exePath.ToLower()) return false;
                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
            catch (Exception ex)
            {
                return true;
            }
            return true;
        }
        public static bool kill(string id)
        {
            return true;
        }
    }
}
