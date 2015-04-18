//BY NEURONS ART AND TECHNOLOGY ALL RIGHTS RESERVED AND COPYRIGHTED.//IN ASSOCIATION WITH LC CARGO XPRESS LOS ANGELES//SISTEM PLANIFICATION BY LC CARGO XPRESS//AUTHORS: SUI GENERIS / OSCAR ALCANTARA// These two lines are required to initialize Express in Cloud Code.var express = require('express'); var parseExpressCookieSession = require('parse-express-cookie-session');var parseExpressHttpsRedirect = require('parse-express-https-redirect');var app = express();var routes = require('cloud/routes');// Global app configuration sectionapp.set('views', 'cloud/views'); // Specify the folder to find templatesapp.set('view engine', 'ejs');  // Set the template engineapp.use(express.bodyParser()); // Middleware for reading request bodyapp.use(parseExpressHttpsRedirect());// Automatically redirect non-secure urls to secure onesapp.use(express.methodOverride());app.use(express.cookieParser('NeuronsAndLCcargo'));app.use(parseExpressCookieSession({  fetchUser: true,  key: 'image.sess',  cookie: {    maxAge: 3600000 * 24 * 30  }}));//This is an example of hooking up a request handler with a specific request//path and HTTP verb using the Express routing API.app.get('/', routes.login);app.get('/login', routes.login);app.post('/logins', routes.logins);app.get('/logout', routes.logout);app.get('/register', routes.register);app.post('/client_registration', routes.clientReg);app.post('/agency_registration', routes.agencyReg);//After login redirects to profile and in profile show session depending user classapp.get('/profile', routes.profile);//STAFF SECTION//warehouse//app.get('/staff_warehouse', routes.staffWarehouse);app.post('/staff_warehouse_filter', routes.staffWarehouseFilter);app.get('/staff_newLabel', routes.staffNewLabel);app.get('/newlabel', routes.newlabelFloat);app.get('/cons_labelsTable', routes.consolidateLabelTable);app.get('/staff_clientProfile', routes.staff_clientProfile);//REPACKapp.get('/staff_Repack', routes.staff_Repack);app.get('/staff_warehouse', routes.staff_Warehouse);//OPEN AIR SECTIONapp.get('/staff_airSectionNP', routes.staff_airSectionNP);app.get('/staff_airSectionP', routes.staff_airSectionP);app.get('/staff_seaSectionNP', routes.staff_seaSectionNP);app.get('/staff_seaSectionP', routes.staff_seaSectionP)//form of label consolidate with internal notes prefilledapp.get('/staff_warehouse_consolidate/:myparam', routes.staff_warehouse_consolidate);//save a consolidationapp.post('/addconsolidation', routes.addconsolidation);//autofill for newLabel form on warehouseapp.post('/autofill_shipper', routes.autofill_shipper);app.post('/autofill_client', routes.autofill_client);app.post('/addwarehouse', routes.addwarehousepost);//clients from staff session app.get('/active_clients', routes.activeClients);app.post('/active_clients_filter', routes.activeClientsFilter);app.get('/pending_clients', routes.pendingClients);app.post('/pending_clients_filter', routes.pendingClientsFilter);app.get('/staff_reservations', routes.reservations);app.post('/staff_reservations_filter', routes.reservations_filter);//agencies from staff sessionapp.get('/staff_agencies', routes.activeAgencies);app.get('/staff_penAgencies', routes.pendingAgencies);app.get('/staff_agencyProfile', routes.staff_agencyProfile);//STAFFS SETTINGSapp.get('/staff_mainSettings', routes.staff_mainSettings);app.get('/staff_staffList', routes.staff_staffList);app.get('/addStaff', routes.addStaff);app.get('/settings_Clients', routes.settings_Clients);//NEW WAY TO SERVE AJAX REQUESTSapp.post("/getby", routes.getby);app.post("/getrendered", routes.getrendered);app.post("/getrenderedby", routes.getrenderedby);app.post("/extends", routes.extends);app.post("/test", routes.test);app.listen();