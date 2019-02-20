using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MessageBoardAPI
{
    public class MessageBoard : IMessage_Board
    {
        public MessageBoard(MessageBoardDbContext Db)
        {
            this.Db = Db;
        }

        public IEnumerable<Message> GetMessages()
        {
            return from msg in Db.Messages
                   select msg;
        }

        public async Task<ActionResult<int>> AddMessage(string content)
        {
            Message message = new Message();
            message.Content = content;
            Db.Add(message);
            Commit();
            return await Task.FromResult(message.Id);
        }

        public async Task<ActionResult<int>> AddLike(int msgId)
        {
            Like like = new Like();
            like.MessageId = msgId;
            Db.Add(like);
            Commit();
            return await Task.FromResult(like.Id);
        }

        public async Task<ActionResult<int>> AddComment(string comment)
        {
            Comment cmt = new Comment();
            string[] str=comment.Split(":");
            cmt.MessageId = Int32.Parse(str[0]);
            cmt.Content = str[1];
            Db.Add(cmt);
            Commit();
            return await Task.FromResult(cmt.Id);
        }

        public int Commit()
        {
            return Db.SaveChanges();
        }

        public async Task<ActionResult<IEnumerable<Timeline>>> GetTimeline()
        {
            var query = from msg in Db.Messages
                        join like in Db.Likes on msg.Id equals like.MessageId
                        into tmp
                        from ml in tmp.DefaultIfEmpty()
                        join cmt in Db.Comments on ml.Id equals cmt.MessageId
                        into temp
                        from t in temp.DefaultIfEmpty()
                        select new Timeline
                        {
                            MessageId = msg.Id,
                            MessageContent = msg.Content,
                            Likes = ml != null ? Db.Likes.Count(l => l.MessageId == msg.Id) : 0,
                            Comments = ml != null ? Db.Comments.Count(c => c.MessageId == msg.Id) : 0
                        };
            var query2 = query.GroupBy(x => x.MessageId, (key, group) => group.First());
            
            return await query2.ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Comment>>> GetComments(int messageId)
        {
            var query = from c in Db.Comments
                   where c.MessageId == messageId
                   select c;
            return await query.ToListAsync();
        }

        private readonly MessageBoardDbContext Db;
    }
}
