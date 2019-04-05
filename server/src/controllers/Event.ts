import { JsonController, Get, Param, Post, Body, HttpCode, CurrentUser, Put, BadRequestError } from "routing-controllers";
import Event from "../entities/Event";
import User from "../entities/User";


@JsonController()
export default class EventController {
    
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
                        user}).save() 
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