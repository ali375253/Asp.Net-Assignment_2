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
    public class AddMessageController : ControllerBase
    {
        private readonly IMessage_Board MessageBoard;

        public AddMessageController(IMessage_Board messageBoard)
        {
            this.MessageBoard = messageBoard;
        }

        [HttpPost("{content}")]
        public async Task<ActionResult<int>> AddMessage(string content)
        {
            return await MessageBoard.AddMessage(content);
        }
    }
}