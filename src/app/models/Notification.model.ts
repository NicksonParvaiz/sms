export class Notification{  
    constructor(
        public Id : number,
        public Title : string,
        public Description : string,
        public FirstAbsent : string,
        public SecondAbsent : string,
        public ThirdAbsent : string,
        public AbsentUsername : string,
        public forRole : string,
    ) {
        
    }

}