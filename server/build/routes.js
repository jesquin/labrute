import path from 'path';
import { fileURLToPath } from "url";
import Brutes from './endpoints/Brutes.js';
import Logs from './endpoints/Logs.js';
import OAuth from './endpoints/OAuth.js';
import Users from './endpoints/Users.js';
const REPO_ROOT = path.join(fileURLToPath(import.meta.url), '..', '..', '..');
const CLIENT_INDEX = path.join(REPO_ROOT, 'client', 'build', 'index.html');
const initRoutes = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'server is running!',
    }));
    // OAuth
    app.get('/api/oauth/redirect', OAuth.redirect);
    app.get('/api/oauth/token', OAuth.token);
    // User
    app.post('/api/user/authenticate', Users.authenticate);
    // Brute
    app.get('/api/brute/list', Brutes.list);
    app.get('/api/brute/:name', Brutes.get);
    app.get('/api/brute/:name/available', Brutes.isNameAvailable);
    app.post('/api/brute/create', Brutes.create);
    app.get('/api/brute/:name/start-level-up', Brutes.startLevelUp);
    app.post('/api/brute/:name/save-destiny-choices', Brutes.saveDestinyChoices);
    app.post('/api/brute/:name/level-up', Brutes.levelUp);
    // Log
    app.get('/api/log/list/:id', Logs.list);
    app.get('/', (req, res) => {
        res.sendFile(CLIENT_INDEX);
    });
};
export default initRoutes;
//# sourceMappingURL=routes.js.map