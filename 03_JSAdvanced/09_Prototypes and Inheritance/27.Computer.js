function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
            if (this.constructor == Computer) {
                throw new Error("Computer class can't be instantiated.");
            }
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, batInfo) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = batInfo;
        }
        get battery() {
            return this._battery;
        }
        set battery(batInfo) {
            if (!(batInfo instanceof Battery)) {
                throw new TypeError('Battery is not an instance of Battery class!')
            }
            this._battery = batInfo;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyInfo, monitorInfo) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyInfo;
            this.monitor = monitorInfo;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(keyInfo) {
            if (!(keyInfo instanceof Keyboard)) {
                throw new TypeError('Keyboard is not an instance of Keyboard class!')
            }
            this._keyboard = keyInfo;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(monitorInfo) {
            if (!(monitorInfo instanceof Monitor)) {
                throw new TypeError('Monitor is not an instance of Monitor class!')
            }
            this._monitor = monitorInfo;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Keyboard('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);

