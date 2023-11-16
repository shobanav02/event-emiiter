import { Injectable } from '@nestjs/common';
import { Cron, CronExpression ,SchedulerRegistry } from '@nestjs/schedule';
import { Logger } from '@nestjs/common';
@Injectable()
export class CronjobsService {
   
    constructor( private schedulerRegistry: SchedulerRegistry ) {}

    private readonly logger = new Logger(CronjobsService.name);

    //first second of every minute
   // @Cron('0 * * * * *')
    openForBusiness() {
      this.logger.log("Delicious cakes is open for business...")
      const takingOrdersJob = this.schedulerRegistry.getCronJob('takingOrders')
      takingOrdersJob.start()
    }

    //every five seconds
   // @Cron( CronExpression.EVERY_5_SECONDS, {name: "takingOrders"} )

    takingOrders() {
        this.logger.log("Delicious cakes is still taking orders")
    }

   // @Cron('40,45 * * * * *')
    closingSoon() {
        this.logger.log("Delicious cakes will be closing soon")
    }

   // @Cron( '50 * * * * *' )
    closed() {
        const takingOrdersJob = this.schedulerRegistry.getCronJob('takingOrders')
        takingOrdersJob.stop()
        this.logger.log("Delicious cakes is closed for the day")
        this.logger.log("")
    }  
}
