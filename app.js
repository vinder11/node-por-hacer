const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('==========POR HACER=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado ? colors.green(tarea.completado) : colors.red(tarea.completado));
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let deletes = porHacer.borrar(argv.descripcion);
        console.log(deletes);
        break;
    default:
        console.log('Comando no es reconocido.');
        break;
}