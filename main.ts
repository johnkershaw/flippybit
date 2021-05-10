input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    bin_digits[pos] = 0
    led.unplot(4, pos)
    pos += 1
    led.plot(4, pos)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    bin_digits[pos] = 1
    led.unplot(4, pos)
    pos += 1
    led.plot(4, pos)
})
let bin_digits : number[] = []
let pos = 0
function doSomething(num: any) {
    
}

function check(hex_num: string, bin_num: any): boolean {
    let digit: any;
    let total = 0
    let value = 8
    for (let i = 0; i < 4; i++) {
        digit = bin_num[i]
        if (digit == 1) {
            total += value
        }
        
        value /= 2
    }
    let dec_num = parseInt(hex_num, 16)
    if (dec_num == total) {
        return true
    } else {
        return false
    }
    
}

basic.showString("A")
let typed = [0, 0, 0, 0]
pos = 0
basic.forever(function on_forever() {
    
})
