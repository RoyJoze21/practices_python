import tkinter as tk

def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def calculate_primes():
    try:
        max_num = int(entry.get())
        prime_numbers = [num for num in range(1, max_num + 1) if is_prime(num)]
        sum_primes = sum(prime_numbers)
        result_label.config(state=tk.NORMAL)  # Habilitar edición del widget Text
        result_label.delete(1.0, tk.END)  # Limpiar el contenido previo


        # Configurar colores para el texto
        # Configurar la etiqueta para centrar el texto
        result_label.tag_configure('center', justify='center')
        # Insertar texto con colores
        result_label.insert(tk.END, "\n \n Números primos: \n", ('orange','center'))
        result_label.insert(tk.END, f"{prime_numbers}\n", ('default','center'))
        result_label.insert(tk.END, "\n Suma de números primos: \n", ('orange','center'))
        result_label.insert(tk.END, f"{sum_primes}", ('default','center'))

        result_label.config(state=tk.DISABLED)  # Deshabilitar edición del widget Text
    except ValueError:
        result_label.config(state=tk.NORMAL)
        result_label.delete(1.0, tk.END)
        
        result_label.insert(tk.END, "Por favor, ingresa un número válido.")
        result_label.config(state=tk.DISABLED)

# Configuración de la ventana de Tkinter
root = tk.Tk()
root.title("Calculadora de Números Primos")
root.configure(bg="#232F3E") 
# Establecer el tamaño inicial de la ventana

root.geometry("800x600")  # Tamaño inicial ajustado

# Configuración de los widgets
# label = tk.Label(root, text="Ingresa un número:")
label = tk.Label(root, text="Ingresa un número:", fg="#d96100") 
label.pack(pady=10, fill=tk.X, padx=270)
# label.pack(pady=25)

entry = tk.Entry(root, fg="#232F3E", justify='center')
entry.pack(pady=5, fill=tk.X, padx=270)
entry.focus_set()

# calculate_button = tk.Button(root, text="Calcular", command=calculate_primes, width=15)
calculate_button = tk.Button(root, text="Calcular", command=calculate_primes, width=15, bg="#FFA726", fg="#232F3E")
calculate_button.pack(pady=10, padx=20)

calculate_button.pack(pady=10, padx=20)

# Crear un widget Text para mostrar resultados
result_label = tk.Text(root, wrap=tk.WORD, height=8, width=50)
result_label.pack(pady=10, fill=tk.BOTH, padx=20, expand=True)

# Aplicar etiquetas de estilo para los colores
# result_label.tag_configure('orange', font=('Arial', 12, 'bold'), foreground='#0B2136')
result_label.tag_configure('orange', font=('bold',), foreground='#ff8000')

result_label.tag_configure('bold_red', font=('Arial', 12, 'bold'), foreground='red')
# result_label.tag_configure('default', font=('Arial', 12))
result_label.tag_configure('default', font=('bold',), foreground='#232F3E')

# Permitir que el contenido se expanda
root.mainloop()
