import { classToClass } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    driver_license,
  }: User): IUserResponseDTO {
    const user = classToClass({
      email,
      name,
      id,
      driver_license,
    });
    return user;
  }
}

export { UserMap };
