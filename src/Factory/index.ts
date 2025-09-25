interface Equipo {
    operacion(): void;
}

class Notebook implements Equipo {
    constructor(private nombreEquipo: string) {}
    operacion(): void {
        console.log("Operando en el Notebook", this.nombreEquipo);
    }
}

class Desktop implements Equipo {
    constructor(private nombreEquipo: string) {}
    operacion(): void {
        console.log("Operando en el Desktop", this.nombreEquipo);
    }
}

class Servidor implements Equipo {
    constructor(private nombreEquipo: string) {}
    operacion(): void {
        console.log("Operando en el Servidor", this.nombreEquipo);
    }
}

class EquipoFactory {
    static crearEquipo(tipo: string, datos: {nombreEquipo?: string, servidor?: string, desktop?: string}): Equipo {
        switch (tipo) {
            case "Notebook":
                return new Notebook(datos.nombreEquipo);
            case "Desktop":
                return new Desktop(datos.desktop);
            case "Servidor":
                return new Servidor(datos.servidor);
            default:
                throw new Error("Tipo de equipo no soportado");
        }
    }
}

