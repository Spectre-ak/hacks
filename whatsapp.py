import pyautogui
import time
print(pyautogui.size())

cont = 0
while True:
    pyautogui.click(871,970)
    pyautogui.typewrite("Hello")
    #ime.sleep(0.01)
    pyautogui.click(1788,964)
    #ime.sleep(0.01)
    cont+=1
    print(cont)
