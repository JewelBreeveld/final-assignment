
export default function calculateTicketRisk (
    numOfTickets: number,
    avgPrice: number,
    hoursOfTicketAdd: number,
    numOfComments: number,
    ticketPrice: number
): number {
    let risk = 0
    //if the ticket is the only ticket of the author, add 10%
    if(numOfTickets === 1) risk += 10
    //if a ticket is X% cheaper than the average price, add X% to the risk 
    if(ticketPrice < avgPrice) risk += (1 - (ticketPrice / avgPrice)) *100
    //if a ticket is X% more expensive than the average price, deduct X% from the risk, 
    //with a maximum of 10% deduction
    if(ticketPrice > avgPrice) {
        if((ticketPrice / avgPrice) > 1.1) {
            risk -= 10
        } else {
            risk -= (1.1 - (ticketPrice / avgPrice)) *100
        } 
    }
    //if the ticket was added during business hours (9-17), deduct 10% from the risk, 
    //if not, add 10% to the risk
    if(hoursOfTicketAdd > 9 && hoursOfTicketAdd <=17) {
        risk -=10
    } else {
        risk +=10
    }
    //if there are >3 comments on the ticket, add 5% to the risk
    if(numOfComments > 3) risk +=5
    // The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.
    if(risk < 5) risk = 5
    if(risk > 95) risk = 95
    
    return Math.floor(risk)
}
