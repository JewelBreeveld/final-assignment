import { JsonController, Get, Param, Post, Body, BadRequestError } from "routing-controllers"; //, Authorized
import User from "../entities/User";
//import { IsString } from "class-validator";
import { sign } from "../jwt";

// class Authentication {

//   @IsString()
//   email: string

//   @IsString()
//   password: string
// }

@JsonController()
export default class UserController {

  //@Authorized()
  @Get('/users')
  async getUsers() {
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

  @Post('/logins')
  async login(
    @Body() data
  ) {
    
    const { email, password } = data

    const entity = await User.findOne({email})
    if (!entity) throw new BadRequestError('This user does not exist')

    const passwordCheck = await entity.checkPassword(password)
    if(!passwordCheck) throw new BadRequestError('This email/password is not valid')

    const jwt = sign({id: entity.id!})
    return { jwt }
  }
}
