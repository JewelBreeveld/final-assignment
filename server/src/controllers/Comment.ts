import { JsonController, Get, Post, CurrentUser, BadRequestError, Params, Body, HttpCode, Param } from "routing-controllers";
import Comment from '../entities/Comment'
import User from "../entities/User";
import Ticket from "../entities/Ticket";
import Event from '../entities/Event'

@JsonController()
export default class CommentController {

    @Get('/events/:eventId/tickets/:ticketId')
    async getTicketComments(
        @Param('ticketId') ticketId: number
    ) {
        const ticket = await Ticket.findOneById(ticketId)
        if(!ticket) throw new BadRequestError

        const comments = Comment.find({ where : {ticketId: ticketId},
                                        }) //order: {createdOn: "DESC"}
        return { comments }
    }

    //get all tickets for an event
    //@Authorized()
    @Get('/events/:eventId/tickets')
    async getEventTickets(
        @Param('eventId') eventId: number
        )   {
            const event = await Event.findOneById(eventId)
            if(!event) throw new BadRequestError('Event does not exist')
            return event
        }


    @Post('/events/:eventId/tickets/:ticketId')
    @HttpCode(201)
    async addComment(
        @CurrentUser() user: User, 
        @Params() params, 
        @Body() data: Comment
    ){
        const {eventId, ticketId} = params
        const { comment } = data
        console.log(data, 'dataaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
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
          console.log(createdComment, "createdComment")
          return createdComment;
    }

      
}    
