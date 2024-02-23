interface Bird{
    eat():void;   
}

interface FlyingBird{
    fly(): void;
}

interface SwimmerBird{
    swim(): void;
}

interface RunningBird{
    run(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}



class Ostrich implements Bird, FlyingBird, RunningBird{
    public fly(){}
    public eat(){}
    public run(){}
}


class Penguin implements Bird, SwimmerBird{
    public eat(){}
    public run(){}
    public swim(){}
}
