import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDtoGym } from './dto/create-gym-dto';
import { UpdateGymDto } from './dto/update-gym-dto';
import { GymEntity } from './entities/gym.entity';

@Injectable()
export class GymService {
    constructor(private readonly databaseService: DatabaseService) {}
    getAllGym(): Promise<GymEntity[]> {
        return this.databaseService.gym.findMany();
    }

    createGym(gym: CreateDtoGym): Promise<GymEntity> {
        return this.databaseService.gym.create({
            data: {
                ...gym,
            }
        });
    }

    updateGym(id: number, gym: UpdateGymDto): Promise<GymEntity>{
        return this.databaseService.gym.update({ 
            where: { id },
            data: { ...gym },
        });
    }

    deleteGym(id: number): Promise<GymEntity>{
        return this.databaseService.gym.delete({ 
            where: { id }
        });
    }
}
