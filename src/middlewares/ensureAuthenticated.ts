import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "ac13eb306d8509ea3cd082963b4dc79e"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const userExists = usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid Token");
  }
}