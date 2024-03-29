import { Request, Response } from 'express';
import { Log } from '@eternaltwin/labrute-core/types';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Logs = {
  list: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      if (!req.params.name) {
        await client.end();
        res.status(200).send([]);
      } else {
        const result = await client.query<Log>(
          'select * from logs WHERE current_brute = $1 ORDER BY id DESC LIMIT 7',
          [req.params.name],
        );
        const { rows } = result;

        await client.end();
        res.status(200).send(rows);
      }
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Logs;
