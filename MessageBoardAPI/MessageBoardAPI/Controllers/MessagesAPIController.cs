using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardAPI.Controllers
{
    [Route("api/[controller]")]
    public class MessagesAPIController
    {
        private readonly IMessage_Board MessageBoard;
        public MessagesAPIController(IMessage_Board messageBoard)
        {
            this.MessageBoard = messageBoard;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Timeline>>> Get()
        {
            return await MessageBoard.GetTimeline();
        }

        [HttpPost("{msgId}")]
        public async Task<ActionResult<int>> AddLike([FromRoute] int msgId)
        {
            return await MessageBoard.AddLike(msgId);
        }



        //[HttpPost]
        //public void Post()
        //{
        //    try
        //    {
        //        Message message = new Message();
        //        message.Content = "message by post method.";
        //        MessageBoard.AddMessage(message);
        //    }
        //    catch (Exception)
        //    {
        //        throw new Exception();
        //        //return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Error.");
        //    }
        //    //return BadRequestObjectResult;
        //}

    }
}
