from tkinter import ttk
from tkinter import *
import sqlite3

class Product:
    # connection dir property
    db_name = 'database.db'

    def __init__(self, window):
        # Initializations 
        self.wind = window
        self.wind.title('MORRIS & OPAZO RE/START')

        # Creating a Frame Container 
        frame = LabelFrame(self.wind, text='Registro MORRIS LAB TEST', bg='#1378a5', fg='#232f3e')
        frame.grid(row=0, column=0, columnspan=3, pady=20)

        # Name Input
        # Label(frame, text='Nombre: ', bg='#1378a5').grid(row=1, column=0)
        Label(frame, text='Nombre: ', bg='#1378a5', fg='#eeeeee').grid(row=1, column=0)
        self.name = Entry(frame)
        self.name.focus()
        self.name.grid(row=1, column=1)

        # pais Input
        Label(frame, text='Pais: ', bg='#1378a5', fg='#eeeeee').grid(row=2, column=0)
        self.pais = Entry(frame)
        self.pais.grid(row=2, column=1)


        style = ttk.Style()
        style.configure('CustomButton.TButton', foreground='#232f3e')

        # Button Add Product 
        ttk.Button(frame, text='Registrar estudiante', command=self.add_product).grid(row=3, columnspan=2, sticky=W + E)
        # ttk.Button(frame, text='Registrar estudiante', command=self.add_product, style='CustomButton.TButton').grid(row=3, columnspan=2, sticky=W + E)

        ttk.Button(frame, text='Registrar estudiante', command=self.add_product, style='CustomButton.TButton').grid(row=3, columnspan=2, sticky=W + E)


        # Output Messages 
        self.message = Label(text='', fg='green', bg='#1378a5')
        self.message.grid(row=3, column=0, columnspan=2, sticky=W + E)

        # Table
        self.tree = ttk.Treeview(height=10, columns=2)
        self.tree.grid(row=4, column=0, columnspan=2)
        self.tree.heading('#0', text='Nombre', anchor=CENTER)
        self.tree.heading('#1', text='Pais', anchor=CENTER)

        # Create a style for the buttons
        style = ttk.Style()
        style.configure('RedButton.TButton', background='red', foreground='#232f3e', padding=5)
        style.configure('YellowButton.TButton', background='yellow', foreground='#232f3e', padding=5)

        # Buttons
        ttk.Button(text='ELIMINAR', command=self.delete_product, style='RedButton.TButton').grid(row=5, column=0, sticky=W + E)
        ttk.Button(text='EDITAR', command=self.edit_product, style='YellowButton.TButton').grid(row=5, column=1, sticky=W + E)


      

        # Filling the Rows
        self.get_register_morris_lab()

    # Function to Execute Database Querys
    def run_query(self, query, parameters=()):
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            result = cursor.execute(query, parameters)
            conn.commit()
        return result

    # Get Products from Database
    def get_register_morris_lab(self):
        # cleaning Table 
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        # getting data
        query = 'SELECT * FROM register_morris_lab ORDER BY name DESC'
        db_rows = self.run_query(query)
        # filling data
        for row in db_rows:
            self.tree.insert('', 0, text=row[1], values=row[2])

    # User Input Validation
    def validation(self):
        return len(self.name.get()) != 0 and len(self.pais.get()) != 0

    def add_product(self):
        if self.validation():
            query = 'INSERT INTO register_morris_lab VALUES(NULL, ?, ?)'
            parameters = (self.name.get(), self.pais.get())
            self.run_query(query, parameters)
            self.message['text'] = 'Estudiante {} registrado satisfactoriamente'.format(self.name.get())
            self.message['fg'] = 'green'
            self.name.delete(0, END)
            self.pais.delete(0, END)
        else:
            self.message['text'] = 'Name and pais is Required'
        self.get_register_morris_lab()

    def delete_product(self):
        self.message['text'] = ''
        try:
            self.tree.item(self.tree.selection())['text'][0]
        except IndexError as e:
            self.message['text'] = 'Porfavor seleciona un elemento'
            return
        self.message['text'] = ''
        name = self.tree.item(self.tree.selection())['text']
        query = 'DELETE FROM register_morris_lab WHERE name = ?'
        self.run_query(query, (name,))
        self.message['text'] = 'Estudiante {} eliminado satisfactoriamente'.format(name)
        self.get_register_morris_lab()

    def edit_product(self):
        self.message['text'] = ''
        try:
            self.tree.item(self.tree.selection())['values'][0]
        except IndexError as e:
            self.message['text'] = 'Porfavor seleciona un elemento'
            return
        name = self.tree.item(self.tree.selection())['text']
        old_pais = self.tree.item(self.tree.selection())['values'][0]
        self.edit_wind = Toplevel()
        self.edit_wind.title = 'Edit Product'
        # Old Name
        Label(self.edit_wind, text=' Name:').grid(row=0, column=1)
        Entry(self.edit_wind, textvariable=StringVar(self.edit_wind, value=name), state='readonly').grid(row=0, column=2)
        # New Name
        Label(self.edit_wind, text='Nuevo Nombre:').grid(row=1, column=1)
        new_name = Entry(self.edit_wind)
        new_name.grid(row=1, column=2)

        # Old pais 
        Label(self.edit_wind, text='Pais:').grid(row=2, column=1)
        Entry(self.edit_wind, textvariable=StringVar(self.edit_wind, value=old_pais), state='readonly').grid(row=2, column=2)
        # New pais
        Label(self.edit_wind, text='Nuevo Pais:').grid(row=3, column=1)
        new_pais = Entry(self.edit_wind)
        new_pais.grid(row=3, column=2)

        Button(self.edit_wind, text='Update', command=lambda: self.edit_records(new_name.get(), name, new_pais.get(), old_pais)).grid(row=4, column=2, sticky=W)
        self.edit_wind.mainloop()

    def edit_records(self, new_name, name, new_pais, old_pais):
        query = 'UPDATE register_morris_lab SET name = ?, pais = ? WHERE name = ? AND pais = ?'
        parameters = (new_name, new_pais, name, old_pais)
        self.run_query(query, parameters)
        self.edit_wind.destroy()
        self.message['text'] = 'Record {} updated successfully'.format(name)
        self.get_register_morris_lab()

if __name__ == '__main__':
    window = Tk()
    window.configure(bg='#1378a5')
    application = Product(window)
    window.mainloop()




#DB browser for SQLite