import { JsonController, Get, Param, Post, Body } from "routing-controllers"; //, Authorized
import User from "../entities/User";

@JsonController()
export default class UserController {

  //@Authorized()
  @Get('/users')
  async allUsers() {
    const users = await User.find()
    return { users }
  }

  //@Authorized()
  @Get('/users/:id') //([0-9]+)
  async getUser(
    @Param('id') id: number
  ) {
    const user = await User.findOneById(id)
      return user
  }

  @Post('/users')
  async signup(
    @Body() data: User
  ) {
    const {password, ...rest} = data
    const entity = User.create(rest)
    await entity.setPassword(password)

    const user = await entity.save()
    return user
  }
}
