import { JsonController, Get, Post, CurrentUser, BadRequestError, Params, Body, HttpCode } from "routing-controllers";
import Comment from '../entities/Comment'
import User from "../entities/User";
import Ticket from "../entities/Ticket";
import Event from '../entities/Event'

@JsonController()
export default class CommentController {

    @Get('/events/:eventId/tickets/:ticketId/comments')
    async allComments() {
        const comments = Comment.find()
        return {comments}
    }

    @Post('/events/:eventId/tickets/:ticketId/comments')
    @HttpCode(201)
    async addComment(
        @CurrentUser() user: User, 
        @Params() params, 
        @Body() input: string
    ){
        const {eventId, ticketId} = params

        const event = await Event.findOneById(eventId)
        if(!event) throw new BadRequestError('This event does not exist')

        const ticket = await Ticket.findOneById(ticketId)
        if(!ticket) throw new BadRequestError('This ticket does not exist')
    
        const comment = await Comment.create({
            input,
            ticket,
            event,
            user
          }).save();
          console.log(comment, "comment")
          return comment;
    }

      
}    
