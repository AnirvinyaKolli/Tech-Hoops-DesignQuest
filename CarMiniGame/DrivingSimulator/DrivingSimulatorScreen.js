class DrivingSimulatorScreen extends Screen {

    //Inits screen values  
    static testTile;
    static roadManager;
    static speedometer;
    static speedLimit;
    static cop;
    static runningBackgroundFloor;
    static runningBackgroundTrees;
    static trafficLight; 
    static infoBox;

    static initializeScreen() {

        //set speed limit
        DrivingSimulatorScreen.speedLimit = new SpeedLimit();

        //set speedometer
        DrivingSimulatorScreen.speedometer = new Speedometer();

        //Set road manager
        DrivingSimulatorScreen.roadManager = new RoadManager();

        //Set InfoBox
        DrivingSimulatorScreen.infoBox = new InfoBox();

        //Set cop
        DrivingSimulatorScreen.cop = new Cop();

        //Set looping background
        DrivingSimulatorScreen.runningBackgroundFloor = new RunningBackground(loadImage('assets/images/backgrounds/backgroundFloor.png'));
        DrivingSimulatorScreen.runningBackgroundTrees = new RunningBackground(loadImage('assets/images/backgrounds/backgroundTrees.png'));

        //Set Traffic Light
        DrivingSimulatorScreen.trafficLight = new TrafficLight(); 
    }

    static drawScreen() {

        //Background
        background(255);

        //rendering 
        DrivingSimulatorScreen.runningBackgroundFloor.drawBackground();

        DrivingSimulatorScreen.roadManager.drawTiles();

        DrivingSimulatorScreen.runningBackgroundTrees.drawBackground();

        DrivingSimulatorScreen.speedometer.drawSpeedometer();

        // DrivingSimulatorScreen.speedLimit.drawSpeedlimitBox();

        DrivingSimulatorScreen.cop.drawCop();

        DrivingSimulatorScreen.trafficLight.drawLight();

        DrivingSimulatorScreen.infoBox.drawBox();

        image(chosenCar.drivingSprite, width / 2 + 30, carPos+100, 125, 200);

    }

} 