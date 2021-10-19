import { container } from "tsyringe";

import "../container/providers";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
