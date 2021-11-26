const Mailer = require('.');
const agent = new Mailer();


describe('All methods in Class mailer', () => {
  agent.setOptions({ from: 'edyle manager', to: 'koffiedy@gmail.com', subject: 'Ok test auto' });
  describe('connect method', () => {
    test('with options : try with false identifiants, shouldn t pass', () => {
      return agent.connect({
        host: 'node3-ca.n0c.co',
        port: 465,
        secure: true,
        auth: {
          user: 'mailer@ciql.org',
          pass: '#Mailerisfreeandusenodejs1',
        },
      }).catch((e) => {
        console.log(e.message);
      });
    });
    test('with options : should pass', () => {
      return agent.connect({
        host: 'node3-ca.n0c.com',
        port: 465,
        secure: true,
        auth: {
          user: 'mailer@ciql.org',
          pass: '#Mailerisfreeandusenodejs1',
        },
      }).then();
    });

    test('without options : should pass ', () => {
      return agent.connect().then();
    });

    test('with options : shouldn\'t pass', () => {
      return agent.connect('red').catch((e) => {
        console.log(e);
      });
    });
  });

  describe('Send blank methods', () => {
    test('should pass', async () => {
      await agent.sendBlank('salut Edy, ça va ?').then();
    });
    test('shouldn t pass', () => {
      return expect(agent.sendBlank()).rejects.toThrow()
    });
  });

  describe('Send Pub methods', () => {
    test('should pass', async () => {
      await agent.sendPub('Titre', 'Bonnjour, ', 'pour vous tous', 'https://ccu.ciql.org').then()
    });

    test('shouldnt pass', () => {
      return expect(agent.sendPub()).rejects.toThrow()
    });
  });

  describe('Send Article methods', () => {
    test('should pass', async () => {
      await agent.sendArticle('Titre', 'Bonnjour, ', 'pour vous tous', ['edy']).then()
    });

    test('shouldnt pass', () => {
      return expect(agent.sendArticle()).rejects.toThrow()
    });
  });

  describe('Send Code methods', () => {
    test('should pass', () => {
      return expect(agent.sendCode('code', 'https://image.com/rriugr5rferf', 1485)).resolves.toBe(1485)
    });

    test('shouldnt pass', () => {
      return expect(agent.sendCode('ef')).rejects.toThrow()
    });
  });

  describe('Send Approval methods', () => {
    test('should pass', async () => {
      await agent.sendApproval('title', 'descr', 'https://yes.link.com', 'https://no.link.com').then();
    });

    test('shouldnt pass', () => {
      return expect(agent.sendApproval()).rejects.toThrow()
    });
  });
});
