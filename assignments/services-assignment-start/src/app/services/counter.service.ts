export class CounterService{
    private activeToInactiveCounter:number=0;
    private inactiveToActiveCounter:number=0;

    public incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('Active to inactive: '+this.activeToInactiveCounter);
    }

    public incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to active: '+this.inactiveToActiveCounter);
    }
}