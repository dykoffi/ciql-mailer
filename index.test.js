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

    describe('Send blank methods', () => {
        test('should pass', async () => {
            await agent.sendBlank("salut Edy, ça va ?").then()
        });
        test('shouldn t pass', async () => {
            await agent.sendBlank().catch(err => { console.log(err); })
        });
    });

    describe('Send Pub methods', () => {
        test('should pass', async () => {
            await agent.sendPub("Titre", "Bonnjour, ", "pour vous tous", "https://ccu.ciql.org").then()
        });

        test('shouldnt pass', () => {
            return expect(agent.sendPub()).rejects.toThrow()
        });
    });

    describe('Send Article methods', () => {
        test('should pass', async () => {
            await agent.sendArticle("Titre", "Bonnjour, ", "pour vous tous", ["edy"]).then()
        });

        test('shouldnt pass', async () => {
            await agent.sendArticle().then()
        });
    });

    describe('Send Code methods', () => {
        test('should pass', async () => {
            await agent.sendCode().then()
        });

        test('shouldnt pass', async () => {
            await agent.sendCode("ef").then()
        });
    });

    describe('Send Approval methods', () => {
        test('should pass', async () => {
            await agent.sendApproval("title", "descr", "https://yes.link.com", "https://no.link.com").then()
        });

        test('shouldnt pass', async () => {
            await agent.sendApproval().then()
        });
    });
});