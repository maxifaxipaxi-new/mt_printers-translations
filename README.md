# MT Printers
Simple FiveM printers script

# Preview
https://youtu.be/IqUXADVi6n8

# Features
- Printers items
- Place the printer wherever you like
- Save locations even after server restart
- Print any kind of image
- Items based on the document image and label
- Little UI to check the document image
- Need of paper to print the documents

# Requirements
- ox_lib
- ox_target
- ox_inventory

# Installation
Add this items for your ox_inventory
```lua
["low_printer"] = {
  label = "Impressora pequena",
  weight = 500,
  stack = true,
  close = true,
  client = {
    export = 'mt_printers.usePrinter'
  }
},
["print_document"] = {
  label = "Documento impresso",
  weight = 0,
  stack = true,
  close = true,
  client = {
    export = 'mt_printers.useDocument'
  }
},
["printer_paper"] = {
  label = "Papel em branco",
  weight = 0,
  stack = true,
  close = true,
},
```
Add the items image for your inventory
Run the sql.sql file on your server database
