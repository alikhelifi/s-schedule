import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Job, JobModel } from './entities/job.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger(AppService.name);
  constructor(
    @InjectRepository(JobModel)
    private jobRepository: Repository<Job>,
  ) {}

  public async getJobs(): Promise<Job[] | any> {
    try {
      return this.jobRepository.find();
    } catch (e: any) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: true,
        message: 'Error server',
      };
    }
  }

  public async getJobById(id: string | any): Promise<Job | any> {
    try {
      return this.jobRepository.findOne(id);
    } catch (e: any) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: true,
        message: 'Error server',
      };
    }
  }

  public async addJobs(body: Job): Promise<Job | any> {
    try {
      return this.jobRepository.create(body);
    } catch (e: any) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: true,
        message: 'Error server',
      };
    }
  }
}
