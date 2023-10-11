import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { retry } from "rxjs";
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from "typeorm";
import { PersonalizedEmail } from "../entities/personalized-email.entity";

@Injectable()
export class PersonalizedEmailRepository {
    constructor(
        @InjectRepository(PersonalizedEmail)
        private readonly repository: Repository<PersonalizedEmail>
    ) { }


    async save(data: Partial<PersonalizedEmail>) {
        return await this.repository.save(data)
    }

    async findAndCount(options?: FindManyOptions<PersonalizedEmail>) {
        return await this.repository.findAndCount(options)
    }

    async findOne(options: FindOneOptions<PersonalizedEmail>) {
        return await this.repository.findOne(options)
    }

    async update(criterial: FindOptionsWhere<PersonalizedEmail>, data: Partial<PersonalizedEmail>) {
        return await this.repository.update(criterial, data)
    }

    async softDelete(criterial: FindOptionsWhere<PersonalizedEmail>) {
        return await this.repository.softDelete(criterial)
    }

    async count(options: FindManyOptions<PersonalizedEmail>) {
        return this.repository.count(options)
    }
}