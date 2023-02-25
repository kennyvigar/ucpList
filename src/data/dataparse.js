const fs = require("fs");
const csv = require("@fast-csv/parse");

const rndInt = Math.floor(Math.random() * 10000000000) + 1


const readCsv = async (path, options, rowProcessor) => {
    return new Promise((resolve, reject) => {
        csv
            .parseFile(path, options)
            .on("error", reject)
            .on("data", (row) => {
                const obj = rowProcessor(row);
                if (obj) CSVdata.push(obj);
            })
            .on("end", () => {
                resolve(CSVdata);
            });
    });
};

const CSVdata = []
const main = async () => {

    const CSVdata = await readCsv(
        "data.csv", //enter path to source CSV
        { skipRows: 1 },
        (column) => ({
            
            decision: column[0],
            Ministry: column[1],
            source: column[2],
        })
    );
    
    console.log(CSVdata)

    const file = fs.createWriteStream(`./data.json`);
    file.on("error", (err) => {
        console.log(err);
    });
    file.write(JSON.stringify(CSVdata));

    file.end();
}


main()

