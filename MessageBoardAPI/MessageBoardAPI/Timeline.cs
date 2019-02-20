using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardAPI
{
    public class Timeline
    {
        public int MessageId { get; set; }
        public string MessageContent { get; set; }
        public int Likes { get; set; }
        public int Comments { get; set; }

    }
}
