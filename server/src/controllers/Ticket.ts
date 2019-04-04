import { JsonController, Get, Param, BadRequestError, CurrentUser, Body, Post, HttpCode, Put, Params } from "routing-controllers";
import Ticket from "../entities/Ticket";
import Event from "../entities/Event";
import User from "../entities/User";
import Comment from "../entities/Comment"
import { getRepository } from "typeorm";
import calculateTicketRisk from '../calculation/calculateTicketRisk'

@JsonController()
export default class TicketController {

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


    //post a ticket to sell
    //@Authorized()
    @Post('/events/:eventId/tickets/create')
    @HttpCode(201)
    async createTicketSale(
        @Param('eventId') eventId: number, 
        @CurrentUser() user: User, 
        @Body() data: Ticket
        ) {
        console.log(user, 'user')
        const event = await Event.findOneById(eventId)
        console.log(event, 'event')
        if(!event) throw new BadRequestError('Event does not exist')
        
        const { description, price, picture } = data
        const ticket = await Ticket.create({
                        description,
                        price,
                        picture,
                        event,
                        user}).save()
        return ticket
    }

    //update ticket details (partial<Ticket>)
    //@Authorized()
    @Put('/events/:eventId/tickets/:ticketId')
    async updateTicketSale(
        @Param('ticketId') ticketId: number,
        //@CurrentUser() user: User,
        @Body() update: Partial<Ticket>
    )   {

        const ticket = await Ticket.findOneById(ticketId)
        if(!ticket) throw new BadRequestError('Ticket does not exist')
        //if(ticket.user.id !== user.id) throw new BadRequestError('You can only update your own tickets')
        return Ticket.merge(ticket, update).save()
    }

    //get details for one ticket
    // @Get('/events/:eventId/tickets/:ticketId')
    // async getTicketDetails(
    //     @Param('ticketId') ticketId: number
    // )   {
    //     const ticket = await Ticket.findOneById(ticketId, {relations: ['event', 'comments', 'comments.user']})
    //     if(!ticket) throw new BadRequestError('Event does not exist')
    //     return ticket
    // }

    @Get('/events/:eventId/tickets/:ticketId')
    async getTicketDetails(
        @Params() params,
    ) {
        const {ticketId, eventId} = params
        const ticket = await Ticket.findOneById(ticketId)
        if(!ticket) throw new BadRequestError('Ticket does not exist')

        const numOfTickets = await getRepository(Ticket)
                    .createQueryBuilder('ticket')
                    .select('COUNT(user_id) AS count')
                    .where('user_id = :id', { id: ticket.user.id })
                    .getRawOne()

        const avgPrice = await getRepository(Ticket)
                    .createQueryBuilder('ticket')
                    .select('AVG(price) AS average')
                    .where('event_id = :id', {id: eventId})
                    .getRawOne()

        const hoursOfTicketAdd = ticket.createdOn.getHours() //number
        
        const numOfComments = await getRepository(Comment)
                    .createQueryBuilder('comment')
                    .select('COUNT(ticket_id) AS count')
                    .where('ticket_id = :id', { id: ticketId })
                    .getRawOne()

        const calculateRisk = calculateTicketRisk(
            numOfTickets.count,
            avgPrice.average,
            hoursOfTicketAdd,
            numOfComments,
            ticket.price
        )

        const allDetails = {...ticket, calculateRisk}
        return allDetails

    }
}


 