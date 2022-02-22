import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDtoGym } from './dto/create-gym-dto';
import { UpdateGymDto } from './dto/update-gym-dto';
import { GymEntity } from './entities/gym.entity';
import { GymService } from './gym.service';

@Resolver(() => GymEntity)
export class GymResolver {

    constructor(private readonly gymService: GymService) {}
    @Query(()=> [GymEntity])
    getAllGym(): Promise<GymEntity[]> {
        return this.gymService.getAllGym();
    }
    
    @Mutation(() => GymEntity)
    async createGym(@Args('gym') gym: CreateDtoGym): Promise<GymEntity> {
         return await this.gymService.createGym(gym);
    }

    @Mutation(() => GymEntity)
    async updateGym(@Args('id') id: number, @Args('gym') gym: UpdateGymDto): Promise<UpdateGymDto> {
        return await this.gymService.updateGym(id, gym);
    }

    @Mutation(() => GymEntity)
    async deleteGym(@Args('id') id: number): Promise<UpdateGymDto> {
        return await this.gymService.deleteGym(id);
    }
}
 