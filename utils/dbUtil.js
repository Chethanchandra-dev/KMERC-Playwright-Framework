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

export async function getLatestOTP(username) {

    let pool;

    try {

        pool = await sql.connect(config);

        const result =
            await pool.request()

            .input('username', sql.VarChar, username)

            .query(`

                SELECT TOP 1 OTP

                FROM OTP_UserDetails

                WHERE UserID = @username

                ORDER BY createdDate DESC

            `);

        if (result.recordset.length > 0) {

            return result.recordset[0].OTP;

        }

        else {

            console.log('No OTP Found');

            return null;

        }

    }

    catch (error) {

        console.log('DB Error:', error);

    }

    finally {

        if (pool) {

            await pool.close();

        }

    }

}