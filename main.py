def on_button_pressed_a():
    global pos
    bin_digits[pos] = 0
    led.unplot(4, pos)
    pos += 1
    led.plot(4, pos)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global pos
    bin_digits[pos] = 1
    led.unplot(4, pos)
    pos += 1
    led.plot(4, pos)
input.on_button_pressed(Button.B, on_button_pressed_b)

bin_digits: List[number] = []
pos = 0
def doSomething(num: any):
    pass
def check(hex_num: str, bin_num: any):
    total = 0
    value = 8
    for i in range(4):
        digit = bin_num[i]
        if digit == 1:
            total += value
        value /= 2
    dec_num = int(hex_num, 16)
    if dec_num == total:
        return True
    else:
        return False
basic.show_string("A")
typed = [0, 0, 0, 0]
pos = 0

def on_forever():
    pass
basic.forever(on_forever)
