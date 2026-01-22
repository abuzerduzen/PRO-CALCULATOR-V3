const display = document.getElementById("display");

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);
    
    
    if (operators.includes(input) && operators.includes(lastChar)) return;
    
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

// Kritik Yüzde Fonksiyonu
function percentage() {
    if (display.value === "") return;
    try {
    
        let result = eval(display.value);
        display.value = result / 100;
    } catch (e) {
        display.value = "Hata";
    }
}

function calculate() {
    try {
        if (display.value === "") return;
     
        let result = eval(display.value);
        
        
        if (result.toString().includes('.')) {
            result = parseFloat(result.toFixed(4));
        }
        
        display.value = result;
    } catch (error) {
        display.value = "Hata";
        setTimeout(clearDisplay, 1000);
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");

}
