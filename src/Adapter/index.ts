class InventarioViejo {
  private items: string[] = [];

  addItem(nombre: string): void {
    this.items.push(nombre);
  }
}

class AdaptadorInventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  addItem(nombre: string): void {
    this.inventarioViejo.addItem(nombre);
  }
}

class InventarioNuevaSistema {
  private items: string[] = [];

  addItem(nombre: string): void {
    this.items.push(nombre);
  }
}

const inventarioViejo = new InventarioViejo();
const adaptadorInventario = new AdaptadorInventario(inventarioViejo);
const inventarioNuevaSistema = new InventarioNuevaSistema();
