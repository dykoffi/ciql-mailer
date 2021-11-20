const mailer = require('.')
const agent = new mailer()


describe('All methods in Class mailer', () => {

    describe('connect method', () => {

        test('without options : should pass ', () => {
            agent.connect()
        });

        test('with options : should pass', async () => {
            await agent.connect({
                host: "node3-ca.n0c.com",
                port: 465,
                secure: true,
                auth: {
                    user: "mailer@ciql.org",
                    pass: "#Mailerisfreeandusenodejs1",
                },
            })
        });

        test('with options : shouldn\'t pass', () => {
            return agent.connect('red').catch((e) => { })
        });

    });

});