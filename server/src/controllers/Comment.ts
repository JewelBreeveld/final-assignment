import { JsonController, Get, Post, CurrentUser, BadRequestError, Params, Body, HttpCode } from "routing-controllers";
import Comment from '../entities/Comment'
import User from "../entities/User";
import Ticket from "../entities/Ticket";
import Event from '../entities/Event'

@JsonController()
export default class CommentController {

    @Get('/events/:eventId/tickets/details')
    async allComments() {
        const comments = Comment.find()
        return {comments}
    }

    @Post('/events/:eventId/tickets/details')
    @HttpCode(201)
    async addComment(
        @CurrentUser() user: User, 
        @Params() params, 
        @Body() comment: string
    ){
        const {eventId, ticketId} = params

        const event = await Event.findOneById(eventId)
        if(!event) throw new BadRequestError('This event does not exist')

        const ticket = await Ticket.findOneById(ticketId)
        if(!ticket) throw new BadRequestError('This ticket does not exist')
    
        const createdComment = await Comment.create({
            comment,
            ticket,
            event,
            user
          }).save();
          console.log(comment, "comment")
          return createdComment;
    }

      
}    
