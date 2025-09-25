class Configuracion {
    private static instancia: Configuracion;
    private configuraciones: { [clave: string]: any } = {};

    private constructor() {}

    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    public set(clave: string, valor: any): void {
        this.configuraciones[clave] = valor;
    }

    public get(clave: string): any {
        return this.configuraciones[clave];
    }
}

// Uso
const conf1 = Configuracion.obtenerInstancia();
const singleton2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccion");
console.log(singleton2.get("modo")); 
