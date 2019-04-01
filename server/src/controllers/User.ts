import { JsonController, Authorized, Get, Param, Post, Body } from "routing-controllers";
import User from "../entities/User";

@JsonController()
export default class UserController {

    // get all users 
    //@Authorized()
    @Get('/users')
    allUsers() {
        return User.find()
    }

    //@Authorized()
    @Get('/users/:id([0-9]+)')
    getUser(
        @Param('id') id: number
    )   {
        return User.findOneById(id)
    }

    //create a new user
    @Post('/users')
    async signup(
      @Body() data: User
    ) {
      const {password, ...rest} = data
      const entity = User.create(rest)
      await entity.setPassword(password)
  
      const user = await entity.save()
  
    //   io.emit('action', {
    //     type: 'ADD_USER',
    //     payload: entity
    //   })
  
      return user
    }
  

}
