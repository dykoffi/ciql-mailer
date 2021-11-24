const mailer = require('.')
const agent = new mailer()


describe('All methods in Class mailer', () => {
    agent.setOptions({ from: "edy@ci.com ", to: "koffiedy@gmail.com", subject: "Ok test auto" })
    describe('connect method', () => {

        test('with options : try with flase identifiants, shouldn t pass', () => {
            return agent.connect({
                host: "node3-ca.n0c.co",
                port: 465,
                secure: true,
                auth: {
                    user: "mailer@ciql.org",
                    pass: "#Mailerisfreeandusenodejs1",
                },
            }).catch((e) => { console.log(e.message) })
        });
        test('with options : should pass', () => {
            return agent.connect({
                host: "node3-ca.n0c.com",
                port: 465,
                secure: true,
                auth: {
                    user: "mailer@ciql.org",
                    pass: "#Mailerisfreeandusenodejs1",
                },
            }).then()
        });

        test('without options : should pass ', () => {
            return agent.connect().then()
        });

        test('with options : shouldn\'t pass', () => {
            return agent.connect('red').catch((e) => { console.log(e); })
        });

    });

    describe('Send Pub methods', () => {
        test('should pass', async () => {
            await agent.sendBlank("salut Edy, ça va ?").then()

        });
    });

    describe('Send Pub methods', () => {
        test('should pass', async () => {
            await agent.sendBlank("salut Edy, ça va ?").then()
        });
    });
});