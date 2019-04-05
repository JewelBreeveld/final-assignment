import { JsonController, Authorized, Get, Param, Post, Body, HttpCode, CurrentUser, Put, BadRequestError, Params } from "routing-controllers";
import Event from "../entities/Event";
import User from "../entities/User";
import { getRepository } from "typeorm";
import Ticket from "../entities/Ticket";
import calculateTicketRisk from "../calculation/calculateTicketRisk";

@JsonController()
export default class EventController {
    // GET ALL EVENTS
    @Get('/events')
    async allEvents() {
        const event = await Event.find({ //where: {userId: "Saw"},
                                        order: {startDate: "ASC"},
                                        skip: 0, 
                                        take:9,
                                        })
        //const today = new Date().toISOString().split('T')[0]
        return { event }
    }

    // @Get('/events')
    // async getEvent(
    //     @Param('eventId') id: number
    // )   {
    //     const event = await Event.findOneById(id)
    //     return event
    // }

    // @Get('/events')
    // async getEvents(
    //     @Params() params
    // ) {
    //     const {eventId, userId} = params
    //     const event = await Event.findOneById(eventId)
    //     if(!event) throw new BadRequestError('Event does not exist')

    //     const numOfTickets = await getRepository(Ticket)
    //     .createQueryBuilder('ticket')
    //     .select('COUNT(event_id) AS count')
    //     .where('event_id = :id', { id: eventId })
    //     .getRawOne()

    //      const avgPrice = await getRepository(Ticket)
    //     .createQueryBuilder('ticket')
    //     .select('AVG(price) AS average')
    //     .where('event_id = :id', {id: eventId})
    //     .getRawOne()

    //     const user = await getRepository(User)
    //     .createQueryBuilder('user')
    //     .select('email')
    //     .where('user_id = :id', {id: userId})
    //     .getRawOne()

    //     const allDetails = (numOfTickets.count, avgPrice.average, user.email)

    //     return allDetails
    // }
    //////////////////////////

    @Post('/events/create')
    @HttpCode(201)
    async createEvent(@CurrentUser() user: User, @Body() data: Event){
        console.log(user, "user")
        const { name, description, urlPictureLogo, startDate, endDate } = data
        const event = await Event.create({
                        name, 
                        description, 
                        urlPictureLogo, 
                        startDate, 
                        endDate,
                        user}).save() // user does not post => user is undefined 
                        console.log(user, "user")
        return event
    } 

    @Put('/events')
    async updateEvent(
        @Param('eventId') eventId: number,
        @CurrentUser() user: User,
        @Body() update: Partial<Event>
    )   {

        const event = await Event.findOneById(eventId)
        if(!event) throw new BadRequestError('Ticket does not exist')
        if(event.user.id !== user.id) throw new BadRequestError('You can only update your own tickets')
        return Event.merge(event, update).save()
    }
}