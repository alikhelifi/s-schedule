import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Job } from './entities/job.entity';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-jobs')
  public getJobs(): Promise<Job[]> {
    return this.appService.getJobs();
  }
  @MessagePattern('get-job-by-id')
  public getJobById(@Payload() payload: any): Promise<Job> {
    const { id } = payload;
    return this.appService.getJobById(id);
  }
  @MessagePattern('add-job')
  public addJobs(@Payload() payload: any): Promise<Job> {
    const { body } = payload;
    return this.appService.addJobs(body);
  }
}
