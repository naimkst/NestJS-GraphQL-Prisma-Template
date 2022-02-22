import { InputType, OmitType } from "@nestjs/graphql";
import { GymEntity } from "../entities/gym.entity";

@InputType()
export class CreateDtoGym extends OmitType(GymEntity, ["id"], InputType) {}