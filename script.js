const display = document.getElementById("display");

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);
    
    // Operatörlerin yan yana gelmesini engelle
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
        // Mevcut sayısal değeri al ve yüze böl
        // eval önce içerdeki işlemi yapar, sonra 100'e böleriz
        let result = eval(display.value);
        display.value = result / 100;
    } catch (e) {
        display.value = "Hata";
    }
}

function calculate() {
    try {
        if (display.value === "") return;
        
        // İşlemi yap ve sonucu ekrana yaz
        let result = eval(display.value);
        
        // Ondalık sayılar çok uzunsa (0.3333333) 4 basamakta kes
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