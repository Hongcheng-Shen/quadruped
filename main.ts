let value = 0
serial.setBaudRate(BaudRate.BaudRate115200)
if (true) {
    Asr_V3.Asr_Clear_Buffer()
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Set_Mode(Asr_V3.Mode.cycle_mode)
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(1, "hong deng")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(2, "hou tui")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(3, "zuo zhuan")
    Asr_V3.Wait_Asr_Busy()
    serial.writeNumber(Asr_V3.Asr_NUM_Cleck())
    Asr_V3.Cleck_Asr_Num(3)
}
Asr_V3.Asr_Gain(0)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.White)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.ON)
basic.pause(1000)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.OFF)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.OFF)
Quadruped.init()
Quadruped.Height(10)
Quadruped.Start()
basic.forever(function () {
    Quadruped.Heartbeat()
    value = Asr_V3.Asr_Result()
    serial.writeNumber(value)
    if (value == 2) {
        Quadruped.Gait(gait.Trot)
        Quadruped.Control_s(Mov_dir.Bac, 10, 10)
        Quadruped.Stand()
    } else if (value == 3) {
        Quadruped.Gait(gait.Trot)
        Quadruped.Control_s(Mov_dir.Turn_l, 10, 10)
        Quadruped.Stand()
    }
})
