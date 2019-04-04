import { JsonController, Authorized, Get, Param, Post, Body, HttpCode, CurrentUser, Put } from "routing-controllers";
import Event from "../entities/Event";
import User from "../entities/User";

@JsonController()
export default class EventController {

    @Get('/events')
    async allEvents() {
        const event = await Event.find({order: {
                                        startDate: "ASC"},
                                        skip: 0, 
                                        take:9})
        //const today = new Date().toISOString().split('T')[0]
        return { event }
    }

    @Get('/events/:eventId([0-9]+)')
    async getEvent(
        @Param('eventId') id: number
    )   {
        const event = await Event.findOneById(id)
        return event
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
                        user}).save() // user does not post => user is undefined 
                        console.log(user, "user")
        return event
    } 
}