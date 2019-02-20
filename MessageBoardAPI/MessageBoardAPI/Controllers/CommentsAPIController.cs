using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsAPIController : ControllerBase
    {
        private readonly IMessage_Board MessageBoard;

        public CommentsAPIController(IMessage_Board messageBoard)
        {
            this.MessageBoard = messageBoard;
        }

        [HttpGet("{msgId}")]
        public async Task<ActionResult<IEnumerable<Comment>>> Get(int msgId)
        {
            return await MessageBoard.GetComments(msgId);
        }

        [HttpPost("{comment}")]
        public async Task<ActionResult<int>> AddComment(string comment)
        {
            return await MessageBoard.AddComment(comment);
        }
    }
}