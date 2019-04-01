import { JsonController, Authorized, Get, Param, Post, Body, HttpCode, CurrentUser } from "routing-controllers";
import Event from "../entities/Event";
import User from "../entities/User";

@JsonController()
export default class EventController {

    @Get('/events')
    allEvents() {
        return Event.find()
    }

    @Get('/events/:id([0-9]+)')
    getEvent(
        @Param('id') id: number
    )   {
        return Event.findOneById(id)
    }

    @Post('/events')
    @HttpCode(201)
    async createEvent(@CurrentUser() user: User, @Body() data: Event){
        const { name, description, urlPictureLogo, startDate, endDate } = data
        const event = await Event.create({
                        name, 
                        description, 
                        urlPictureLogo, 
                        startDate, 
                        endDate}).save()
        return event
    } 
}