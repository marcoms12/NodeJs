import chalk from 'chalk'; // para importar módulos no node usar type: "module" no packcage.json
import fs from 'fs';

function abrirArquivo(diretorioDoArquivo) {
    const encoding = 'utf8';
    fs.readFile(diretorioDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

abrirArquivo('./Arquivos/texto1.md');