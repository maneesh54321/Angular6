export class LoggingService {

  logStatus(accountStatus:string){
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
