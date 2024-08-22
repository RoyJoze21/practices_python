# def calculator(operacion, num1, num2):
#     if operacion == "suma":
#         return num1 + num2
#     elif operacion == "resta":
#         return num1 - num2
#     elif operacion == "multiplicacion":
#         return num1 * num2
#     elif operacion == "division":
#         if num2 != 0:
#             return round(num1 / num2, 2)  # Redondeamos a 2 decimales 
#         else:
#             return "Error:  No se permite la division x cero."
#     else:
#         return "Error: Operacion invalida."
    
# print(calculator('division', 100, 7))  # Output: 


# def calculadora(operacion, num1, num2):
#     if operacion == "suma":
#         return num1 + num2
#     elif operacion == "resta":
#         return num1 - num2
#     elif operacion == "multiplicacion":
#         return num1 * num2
#     elif operacion == "division":
#         if num2 != 0:
#             return round(num1 / num2, 2)  # Redondeamos a 2 decimales
#         else:
#             return "Error: No se permite la división por cero."
#     else:
#         return "Error: Operación inválida."

# # Solicitar al usuario que ingrese la operación
# operacion = input("Ingresa la operación (suma, resta, multiplicacion, division): ").strip().lower()

# # Solicitar al usuario que ingrese los dos números
# num1 = float(input("Ingresa el primer número: "))
# num2 = float(input("Ingresa el segundo número: "))

# # Llamar a la función y mostrar el resultado
# resultado = calculadora(operacion, num1, num2)
# print(f"Resultado: {resultado}")



def is_prime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

prime_numbers = [num for num in range(1, 251) if is_prime(num)]

print(prime_numbers)
