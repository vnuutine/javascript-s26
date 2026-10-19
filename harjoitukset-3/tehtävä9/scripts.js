const display = document.getElementById("display")
const statusText = document.getElementById("status")
const goButton = document.getElementById("go")
const clearButton = document.getElementById("clear")

const digitButtons = document.querySelectorAll(".key[data-value]");

class Elevator {
    constructor(minFloor = 1, maxFloor = 100) {
        this.minFloor = minFloor
        this.maxFloor = maxFloor
        this.currentFloor = 1
        this.userInput = ""
        this.moving = false
        this.targetFloor = null
    }

    pressDigit(digit) {
        if (this.moving) {
            return
        }

        this.userInput += digit
    }

    clear() {
        if (this.moving) {
            return
        }

        this.userInput = ""
    }

    isValidFloor(n) {
        return n >= this.minFloor && n <= this.maxFloor
    }
    
    go(onArrive) {
        if (this.moving) {
            return false
        }

        if (!this.isValidFloor(parseInt(this.userInput))) {
            return false
        }

        this.moving = true
        this.targetFloor = parseInt(this.userInput)
        this.userInput = ""

        setTimeout(() => {
            this.currentFloor = this.targetFloor
            this.moving = false
            this.targetFloor = null
            onArrive()
        }, 2000)

        return true
    }
}

const elevator = new Elevator()

// Function to update the display when elevator arrives at target floor
function onArrive() {
    display.value = elevator.currentFloor
    statusText.textContent = `Elevator is now in floor: ${elevator.currentFloor}`
}

// Event listeners for buttons 

digitButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (elevator.moving) {
            return
        }

        elevator.pressDigit(btn.dataset.value);
        display.value = elevator.userInput
    });
});

clearButton.addEventListener("click", () => {
    if (elevator.moving) {
        return
    }

    elevator.clear()
    display.value = elevator.userInput
})

goButton.addEventListener("click", () => {
    if (elevator.moving || elevator.userInput === "") {
        return
    }

    const requestedFloor = elevator.userInput

    if (elevator.go(onArrive)) {
        statusText.textContent = `Elevator is now going to floor: ${elevator.targetFloor}`
    } else {
        elevator.clear()
        display.value = `Elevator can't go to floor ${requestedFloor}`
        display.classList.add("error")
        setTimeout(() => {
            display.classList.remove("error")
            display.value = elevator.userInput
        }, 2000)
    }
})