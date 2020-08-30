import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'keyL4clkiuEPn3Ccu' }).base('appDyqMzTzmYokXR2');
export const getRecords = () => {
    return new Promise(async (resolve, reject) => {
        var recordsAll = []
        await base('Table 1').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) { 
            records.forEach(function (record) { 
                recordsAll.push(record.get('Email'))
            }); 
            fetchNextPage();
            resolve(recordsAll)
        }, function done(err) {
            if (err) { console.error(err); reject(err); return; }
        });

    })

}

export const submitEmail = (email) => {
    return new Promise((resolve, reject) => {
        if(email){
            base('Table 1').create([
                {
                    "fields": { Email:email }
                }
            ], { typecast: true }, function (err, records) {
                if (err) {
                    console.error(err);
                    return reject(err)
                }
                return resolve(records)
            });
        }
        else{
            reject('e')
        }
    })
}