import { JsonController, Get } from "routing-controllers";
import Ticket from "../entities/Ticket";

@JsonController()
export default class TicketController {

    // get all tickets 
    //@Authorized()
    @Get('/tickets')
    allTickets() {
        return Ticket.find()
    }

    
}