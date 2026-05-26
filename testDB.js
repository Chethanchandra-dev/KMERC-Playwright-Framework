import sql from 'mssql';

const config = {

    user: 'kmercuat_cks',

    password: 'Kmercuat@cks',

    server: 'CSG-DEVDB-PP01',

    database: 'KMERC_UAT_2026',

    port: 1433,

    options: {

        trustServerCertificate: true,

        encrypt: false,

         enableArithAbort: true

    },

     connectionTimeout: 30000,

    requestTimeout: 30000

};

async function testConnection() {

    try {

        await sql.connect(config);

        console.log(
            'DB Connected Successfully'
        );

    }

    catch(error) {

        console.log(error);

    }

}

testConnection();