using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardAPI
{
    public interface IMessage_Board
    {
        IEnumerable<Message> GetMessages();
        Task<ActionResult<int>> AddMessage(string content);
        Task<ActionResult<int>> AddLike(int msgId);
        Task<ActionResult<int>> AddComment(string comment);
        Task<ActionResult<IEnumerable<Timeline>>> GetTimeline();
        Task<ActionResult<IEnumerable<Comment>>> GetComments(int messageId);

        //int GetLikesById(int MessageId);
        //int GetCommentsById(int MessageId);
        int Commit();
    }
}
