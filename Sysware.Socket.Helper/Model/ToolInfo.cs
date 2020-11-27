using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;

namespace Sysware.Socket.Helper
{
    public class ToolInfo
    {
        [Serializable]
        public class Collection : Collection<ToolInfo>
        {
            public ToolInfo this[string id]
            {
                get
                {
                    foreach (ToolInfo bsi in this)
                    {
                        if (bsi.Id == id) return bsi;
                    }
                    return null;
                }
            }
        }

        /// <summary>
        /// id
        /// </summary>
        public string Id
        {
            get;
            set;
        }
        /// <summary>
        /// 工具名
        /// </summary>
        public string Name
        {
            get;
            set;
        }
        /// <summary>
        /// exe全路径
        /// </summary>
        public string exePath
        {
            get;
            set;
        }
        /// <summary>
        /// 输入文件
        /// </summary>
        public string inPutf
        {
            get;
            set;
        }
        /// <summary>
        /// 输出文件
        /// </summary>
        public string outPutf
        {
            get;
            set;
        }
        /// <summary>
        /// exe启动命令
        /// </summary>
        public string cmdStr
        {
            get;
            set;
        }
        public string timeout
        { 
            get;
            set;
        }

    }
}
