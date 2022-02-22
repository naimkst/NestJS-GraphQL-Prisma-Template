import { InputType, PartialType } from "@nestjs/graphql";
import { CreateDtoGym } from "./create-gym-dto";

@InputType()
export class UpdateGymDto extends PartialType(CreateDtoGym) {}